"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3742],{

/***/ 15831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15025);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57777);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52676);



/* harmony default export */ __webpack_exports__.Z = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
    status: "warning",
    title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
      children: "This Buzz has been blocked by the administrator."
    })
  });
});

/***/ }),

/***/ 71366:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Buzz; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(13143);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(81707);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SyncOutlined.js + 1 modules
var SyncOutlined = __webpack_require__(22694);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MessageOutlined.js + 1 modules
var MessageOutlined = __webpack_require__(16036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartFilled.js + 1 modules
var HeartFilled = __webpack_require__(43106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartOutlined.js + 1 modules
var HeartOutlined = __webpack_require__(93342);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftFilled.js + 1 modules
var GiftFilled = __webpack_require__(71429);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftOutlined.js + 1 modules
var GiftOutlined = __webpack_require__(94427);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(15739);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(19391);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(81751);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(55576);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(79063);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
// EXTERNAL MODULE: ./src/Components/Comment/index.tsx + 3 modules
var Comment = __webpack_require__(79684);
// EXTERNAL MODULE: ./src/Components/NewPost/index.tsx + 3 modules
var NewPost = __webpack_require__(84275);
;// CONCATENATED MODULE: ./src/Components/Buzz/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/Components/Follow/index.tsx + 1 modules
var Follow = __webpack_require__(4447);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var buzz = __webpack_require__(518);
// EXTERNAL MODULE: ./src/utils/psbtBuild.ts
var psbtBuild = __webpack_require__(49105);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./src/Components/Buzz/ImageGallery.tsx + 1 modules
var ImageGallery = __webpack_require__(83946);
// EXTERNAL MODULE: ./node_modules/.pnpm/axios@1.8.4/node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(22258);
// EXTERNAL MODULE: ./node_modules/.pnpm/md5@2.3.0/node_modules/md5/md5.js
var md5 = __webpack_require__(96706);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);
;// CONCATENATED MODULE: ./src/request/baidu-translate.ts




function fetchTranlateResult(_x) {
  return _fetchTranlateResult.apply(this, arguments);
}
function _fetchTranlateResult() {
  _fetchTranlateResult = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(_ref) {
    var sourceText, from, to, salt, queryParams, url, data;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          sourceText = _ref.sourceText, from = _ref.from, to = _ref.to;
          salt = new Date().getTime().toString();
          queryParams = {
            q: sourceText,
            from: from,
            to: to,
            appid: "20240727002109702",
            salt: salt,
            sign: md5_default()("20240727002109702" + sourceText + salt + "Zn47LiY5HBPjSiMeN1Td")
          }; // const url = `https://fanyi-api.baidu.com/api/trans/vip/translate`;
          url = "https://api.metaid.io/baidufanyi/api/trans/vip/translate"; // const url = `/api/trans/vip/translate`;
          _context.prev = 4;
          _context.next = 7;
          return axios/* default */.Z.get(url, {
            params: queryParams
          }).then(function (res) {
            return res.data;
          });
        case 7:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          console.error(_context.t0);
          return _context.abrupt("return", undefined);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[4, 11]]);
  }));
  return _fetchTranlateResult.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FlagFilled.js + 1 modules
var FlagFilled = __webpack_require__(34373);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/image/index.js + 2 modules
var es_image = __webpack_require__(40371);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Buzz/NFTGallery.tsx






/* harmony default export */ var NFTGallery = (function (_ref) {
  var nfts = _ref.nfts;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBgLayout = _theme$useToken$token.colorBgLayout,
    borderRadiusLG = _theme$useToken$token.borderRadiusLG,
    padding = _theme$useToken$token.padding,
    colorPrimary = _theme$useToken$token.colorPrimary,
    colorPrimaryBg = _theme$useToken$token.colorPrimaryBg;
  if (!nfts.length) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "nft-gallery",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    },
    children: [nfts.map(function (nft, index) {
      var _nft$previewImage;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "nft-item",
        style: {
          background: colorBgLayout,
          borderRadius: borderRadiusLG,
          padding: padding,
          display: 'flex',
          width: 378,
          gap: 10,
          maxWidth: '100%'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.Z, {
          style: {
            objectFit: 'cover',
            height: 80,
            width: 80,
            display: index > 8 ? 'none' : 'block',
            borderRadius: borderRadiusLG
          },
          src: "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(((_nft$previewImage = nft.previewImage) !== null && _nft$previewImage !== void 0 ? _nft$previewImage : '').replace('metafile://', '')),
          fallback: config/* FallbackImage */.vL,
          className: "image-item",
          preview: false
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
            level: 4,
            style: {
              margin: 0
            },
            children: nft.collectionName
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            children: nft.name
          })]
        })]
      }, index);
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(tag/* default */.Z, {
        bordered: false,
        color: colorPrimaryBg,
        style: {
          color: colorPrimary
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FlagFilled/* default */.Z, {}), "NFT Market"]
        }), " "]
      })
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(23533);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(14258);
// EXTERNAL MODULE: ./node_modules/.pnpm/decimal.js@10.5.0/node_modules/decimal.js/decimal.mjs
var decimal = __webpack_require__(25688);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
;// CONCATENATED MODULE: ./src/Components/Unlock/index.tsx



/* harmony default export */ var Unlock = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    children = _ref.children,
    _ref$modalWidth = _ref.modalWidth,
    modalWidth = _ref$modalWidth === void 0 ? 480 : _ref$modalWidth,
    style = _ref.style,
    bodyStyle = _ref.bodyStyle;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    onClose: onClose,
    show: show,
    modalWidth: modalWidth,
    style: objectSpread2_default()({
      padding: 0
    }, style),
    bodyStyle: objectSpread2_default()({
      padding: 0
    }, bodyStyle),
    children: children
  });
});
// EXTERNAL MODULE: ./src/assets/mvc.png
var mvc = __webpack_require__(61133);
;// CONCATENATED MODULE: ./src/Components/Buzz/components/DonateModal/index.tsx










var DonateModal = function DonateModal(_ref) {
  var show = _ref.show,
    isLegacy = _ref.isLegacy,
    onClose = _ref.onClose,
    userInfo = _ref.userInfo,
    balance = _ref.balance,
    chain = _ref.chain,
    setChain = _ref.setChain,
    paying = _ref.paying,
    donateAmount = _ref.donateAmount,
    donateMessage = _ref.donateMessage,
    setDonateAmount = _ref.setDonateAmount,
    setDonateMessage = _ref.setDonateMessage,
    onDonate = _ref.onDonate;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Unlock, {
    show: show,
    bodyStyle: {
      padding: "0 16px"
    },
    onClose: onClose,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        position: "absolute",
        right: 16,
        top: 16,
        zIndex: 10
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "text",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {}),
        onClick: onClose,
        style: {
          width: 40,
          height: 40,
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center"
        },
        className: "hover-bg-button"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        width: "100%",
        padding: "30px 0"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
        src: userInfo === null || userInfo === void 0 ? void 0 : userInfo.avatar,
        size: 60
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
        level: 3,
        style: {
          margin: 0,
          fontSize: 24,
          fontWeight: 600
        },
        children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || "Unnamed"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
        style: {
          fontSize: 14,
          color: "rgba(0, 0, 0, 0.45)"
        },
        children: ["MetaID:", " ", userInfo !== null && userInfo !== void 0 && userInfo.metaid ? "".concat(userInfo.metaid.slice(0, 8), "...").concat(userInfo.metaid.slice(-4)) : ""]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          width: "100%",
          marginTop: 12
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            position: "relative"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
            level: 4,
            style: {
              margin: "0 0 16px 0",
              fontSize: 16,
              fontWeight: 600
            },
            children: "Reward amount"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              position: "absolute",
              right: 0,
              top: 0,
              color: "rgba(0, 0, 0, 0.45)",
              fontSize: 14
            },
            children: ["Availabile ", new decimal/* default */.Z(balance).div(1e8).toFixed(8)]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "12px",
              padding: "16px",
              marginBottom: "32px",
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              maxWidth: "100%",
              boxSizing: "border-box"
            },
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                flex: "1 1 0%",
                minWidth: 0,
                overflow: "hidden"
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                placeholder: "Enter amount",
                value: donateAmount,
                onChange: function onChange(e) {
                  return setDonateAmount(e.target.value);
                },
                style: {
                  border: "none",
                  boxShadow: "none",
                  fontSize: 16,
                  padding: 0,
                  color: "rgba(0, 0, 0, 0.88)",
                  width: "100%"
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#F5F5F5",
                padding: "4px 12px",
                borderRadius: "20px"
              },
              children: isLegacy ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
                value: chain,
                onChange: function onChange(value) {
                  return setChain === null || setChain === void 0 ? void 0 : setChain(value);
                },
                style: {
                  width: 100
                },
                options: [{
                  value: 'btc',
                  label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                      src: btc,
                      alt: "BTC",
                      width: 20,
                      height: 20
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: "BTC"
                    })]
                  })
                }, {
                  value: 'mvc',
                  label: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    },
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                      src: mvc,
                      alt: "MVC",
                      width: 20,
                      height: 20
                    }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: "MVC"
                    })]
                  })
                }],
                bordered: false,
                dropdownStyle: {
                  minWidth: 120
                }
              }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: btc,
                  alt: "BTC",
                  width: 20,
                  height: 20,
                  style: {
                    flexShrink: 0
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  style: {
                    fontSize: 14,
                    margin: 0,
                    color: "rgba(0, 0, 0, 0.88)"
                  },
                  children: "BTC"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
            level: 4,
            style: {
              margin: "24px 0 16px 0",
              fontSize: 16,
              fontWeight: 600
            },
            children: "Message"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              width: "100%",
              padding: "16px",
              marginBottom: "32px",
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              maxWidth: "100%",
              boxSizing: "border-box"
            },
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z.TextArea, {
              placeholder: "Enter message",
              value: donateMessage,
              onChange: function onChange(e) {
                return setDonateMessage(e.target.value);
              },
              style: {
                border: "none",
                boxShadow: "none",
                fontSize: 16,
                padding: 0,
                color: "rgba(0, 0, 0, 0.88)",
                width: "100%",
                resize: "none"
              },
              autoSize: {
                minRows: 2,
                maxRows: 4
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center"
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              type: "primary",
              block: true,
              size: "large",
              shape: "round",
              loading: paying,
              onClick: onDonate,
              style: {
                width: "220px",
                height: "52px",
                background: "linear-gradient(270deg, #F824DA 0%, #FF5815 100%)",
                border: "none",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff"
              },
              children: "Confirm"
            })
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ var components_DonateModal = (DonateModal);
// EXTERNAL MODULE: ./node_modules/.pnpm/plyr-react@5.3.0_plyr@3.7.8_react@18.3.1/node_modules/plyr-react/esm/index.js + 1 modules
var esm = __webpack_require__(33444);
// EXTERNAL MODULE: ./node_modules/.pnpm/plyr-react@5.3.0_plyr@3.7.8_react@18.3.1/node_modules/plyr-react/plyr.css
var plyr = __webpack_require__(65537);
;// CONCATENATED MODULE: ./src/Components/Buzz/video.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/Components/Buzz/Video.tsx












function fetchChunksAndCombine(_x, _x2) {
  return _fetchChunksAndCombine2.apply(this, arguments);
}
function _fetchChunksAndCombine2() {
  _fetchChunksAndCombine2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(chunkUrls, dataType) {
    var responses, arrays, combined, videoBlob, videoUrl;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Promise.all(chunkUrls.map(function (url) {
            return fetch(url);
          }));
        case 2:
          responses = _context2.sent;
          _context2.next = 5;
          return Promise.all(responses.map(function (response) {
            return response.arrayBuffer();
          }));
        case 5:
          arrays = _context2.sent;
          combined = new Uint8Array(arrays.reduce(function (acc, curr) {
            return acc.concat(Array.from(new Uint8Array(curr)));
          }, []));
          videoBlob = new Blob([combined], {
            type: dataType
          });
          videoUrl = URL.createObjectURL(videoBlob);
          return _context2.abrupt("return", videoUrl);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _fetchChunksAndCombine2.apply(this, arguments);
}
/* harmony default export */ var Video = (function (_ref) {
  var pid = _ref.pid;
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel.showConf;
  if (!pid) return null;
  var ref = (0,react.useRef)(null);
  var _useState = (0,react.useState)(),
    _useState2 = slicedToArray_default()(_useState, 2),
    videoSrc = _useState2[0],
    setVideoSrc = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isIntersecting = _useState4[0],
    setIsIntersecting = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['getPinDetailByPid', {
        pid: pid
      }],
      enabled: !!pid,
      queryFn: function queryFn() {
        return fetch("".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(pid)).then(function (res) {
          return res.json();
        });
      }
    }),
    metafile = _useQuery.data;
  var _fetchChunksAndCombine = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var chunkUrls, src;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          setLoading(true);
          _context.prev = 1;
          if (!(isIntersecting && metafile)) {
            _context.next = 8;
            break;
          }
          chunkUrls = metafile.chunkList.map(function (chunk) {
            return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(chunk.pinId);
          });
          _context.next = 6;
          return fetchChunksAndCombine(chunkUrls, metafile.dataType);
        case 6:
          src = _context.sent;
          setVideoSrc(src);
        case 8:
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0);
        case 13:
          setLoading(false);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 10]]);
  })), [isIntersecting, metafile]);
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (_ref3) {
      var _ref4 = slicedToArray_default()(_ref3, 1),
        entry = _ref4[0];
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.75
    });
    if (ref.current) observer.observe(ref.current);
    return function () {
      observer.disconnect();
    };
  }, []);
  (0,react.useEffect)(function () {
    _fetchChunksAndCombine();
  }, [_fetchChunksAndCombine]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: !videoSrc,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: ref,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        borderRadius: "16px",
        marginBottom: 12,
        overflow: "hidden",
        width: '100%',
        height: '300px',
        '--plyr-color-main': showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
      },
      className: "video",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* default */.Z, {
        source: {
          type: "video",
          // @ts-ignore
          sources: [{
            src: videoSrc
          }]
        },
        options: {
          controls: ["play-large", "play", "progress", "current-time", "mute", "fullscreen"],
          captions: {
            active: true,
            language: "auto",
            update: true
          },
          previewThumbnails: {
            enabled: false,
            src: ""
          }
        }
      })
    })
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/components/BuzzOrigin.tsx





/* harmony default export */ var BuzzOrigin = (function (_ref) {
  var host = _ref.host;
  if (!host) {
    return null;
  }
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    domainMap = _useModel.domainMap;
  var domain = domainMap[host.toLowerCase()];
  if (!domain) return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
      type: "secondary",
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      children: "from"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      children: [" ", host.length > 10 ? host.substring(0, 10) + '...' : host]
    })]
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
      type: "secondary",
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      children: "from"
    }), /^(?!\-)(?:[A-Za-z0-9-]{1,63}\.?)+(?<=\.[A-Za-z]{2,})$/.test(domain) ? /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Link, {
      href: "https://".concat(domain),
      target: "_blank",
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: domain
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
      style: {
        fontSize: 10,
        lineHeight: 1
      },
      children: [domain.length > 10 ? domain.substring(0, 10) + '...' : domain, " "]
    })]
  });
});
// EXTERNAL MODULE: ./src/Components/Buzz/BlockedBuzz.tsx
var BlockedBuzz = __webpack_require__(15831);
// EXTERNAL MODULE: ./src/Components/MRC20Icon/index.tsx
var MRC20Icon = __webpack_require__(97691);
;// CONCATENATED MODULE: ./src/Components/Buzz/RepostDetail.tsx



















var Paragraph = typography/* default */.Z.Paragraph,
  Text = typography/* default */.Z.Text;















// TODO: use metaid manage state



/* harmony default export */ var RepostDetail = (function (_ref) {
  var _accessControl$data, _accessControl$data2, _currentUserInfoData$, _currentUserInfoData$2, _currentUserInfoData$3, _currentUserInfoData$4, _accessControl$data3, _accessControl$data4, _accessControl$data5, _accessControl$data6, _accessControl$data7, _accessControl$data8, _accessControl$data9, _mrc20$deployerUserIn, _currentUserInfoData$5, _currentUserInfoData$6, _currentUserInfoData$7, _accessControl$data11, _accessControl$data12, _accessControl$data13;
  var buzzItem = _ref.buzzItem,
    loading = _ref.loading,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? true : _ref$bordered,
    backgeround = _ref.backgeround,
    _ref$showHeader = _ref.showHeader,
    showHeader = _ref$showHeader === void 0 ? true : _ref$showHeader,
    _ref$panding = _ref.panding,
    panding = _ref$panding === void 0 ? 24 : _ref$panding;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary,
    colorBorder = _theme$useToken$token.colorBorder,
    colorBgBlur = _theme$useToken$token.colorBgBlur,
    colorBgContainer = _theme$useToken$token.colorBgContainer;
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    locale = _useIntl.locale;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isTranslated = _useState2[0],
    setIsTranslated = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isTranslating = _useState4[0],
    setIsTranslating = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    showTrans = _useState6[0],
    setShowTrans = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = slicedToArray_default()(_useState7, 2),
    transResult = _useState8[0],
    setTransResult = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = slicedToArray_default()(_useState9, 2),
    showNewPost = _useState10[0],
    setShowNewPost = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    showUnlock = _useState12[0],
    setShowUnlock = _useState12[1];
  var contentRef = (0,react.useRef)(null); // 引用内容容器
  var _useState13 = (0,react.useState)(false),
    _useState14 = slicedToArray_default()(_useState13, 2),
    isExpanded = _useState14[0],
    setIsExpanded = _useState14[1];
  var _useState15 = (0,react.useState)(false),
    _useState16 = slicedToArray_default()(_useState15, 2),
    isOverflowing = _useState16[0],
    setIsOverflowing = _useState16[1]; // 是否溢出
  var _useState17 = (0,react.useState)(false),
    _useState18 = slicedToArray_default()(_useState17, 2),
    paying = _useState18[0],
    setPaying = _useState18[1];
  var _useState19 = (0,react.useState)(false),
    _useState20 = slicedToArray_default()(_useState19, 2),
    unlocking = _useState20[0],
    setUnlocking = _useState20[1];
  var _useModel = (0,_umi_production_exports.useModel)("user"),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user,
    isLogin = _useModel.isLogin,
    connect = _useModel.connect,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting;
  var _useModel2 = (0,_umi_production_exports.useModel)("dashboard"),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee,
    manPubKey = _useModel2.manPubKey;
  var _useState21 = (0,react.useState)(false),
    _useState22 = slicedToArray_default()(_useState21, 2),
    handleLikeLoading = _useState22[0],
    setHandleLikeLoading = _useState22[1];
  var _useState23 = (0,react.useState)([]),
    _useState24 = slicedToArray_default()(_useState23, 2),
    likes = _useState24[0],
    setLikes = _useState24[1];
  var _useState25 = (0,react.useState)([]),
    _useState26 = slicedToArray_default()(_useState25, 2),
    donates = _useState26[0],
    setDonates = _useState26[1];
  var currentUserInfoData = (0,useQuery/* useQuery */.a)({
    queryKey: ["userInfo", buzzItem.creator],
    enabled: !(0,isNil/* default */.Z)(buzzItem === null || buzzItem === void 0 ? void 0 : buzzItem.creator),
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: buzzItem.creator
      });
    }
  });
  var _useState27 = (0,react.useState)(false),
    _useState28 = slicedToArray_default()(_useState27, 2),
    showGift = _useState28[0],
    setShowGift = _useState28[1];
  var _useState29 = (0,react.useState)(""),
    _useState30 = slicedToArray_default()(_useState29, 2),
    donateAmount = _useState30[0],
    setDonateAmount = _useState30[1];
  var _useState31 = (0,react.useState)(""),
    _useState32 = slicedToArray_default()(_useState31, 2),
    donateMessage = _useState32[0],
    setDonateMessage = _useState32[1];
  var _useState33 = (0,react.useState)(0),
    _useState34 = slicedToArray_default()(_useState33, 2),
    balance = _useState34[0],
    setBalance = _useState34[1];
  var _useState35 = (0,react.useState)(false),
    _useState36 = slicedToArray_default()(_useState35, 2),
    donateLoading = _useState36[0],
    setDonateLoading = _useState36[1];
  var _useState37 = (0,react.useState)(buzzItem.donateCount || 0),
    _useState38 = slicedToArray_default()(_useState37, 2),
    donateCount = _useState38[0],
    setDonateCount = _useState38[1];
  var _useState39 = (0,react.useState)(false),
    _useState40 = slicedToArray_default()(_useState39, 2),
    isDonated = _useState40[0],
    setIsDonated = _useState40[1];
  var _useState41 = (0,react.useState)((0,utils/* determineAddressInfo */.uY)(buzzItem.address) === 'p2pkh' ? chain : 'btc'),
    _useState42 = slicedToArray_default()(_useState41, 2),
    selectedChain = _useState42[0],
    setSelectedChain = _useState42[1];
  (0,react.useEffect)(function () {
    var fetchBalance = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var bal, _bal;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(isLogin && selectedChain === "btc")) {
                _context.next = 13;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return (0,psbtBuild/* getUtxoBalance */.xd)();
            case 4:
              bal = _context.sent;
              setBalance(bal);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to fetch balance:", _context.t0);
            case 11:
              _context.next = 24;
              break;
            case 13:
              if (!(isLogin && selectedChain === "mvc")) {
                _context.next = 24;
                break;
              }
              _context.prev = 14;
              _context.next = 17;
              return (0,psbtBuild/* getMvcBalance */.eo)();
            case 17:
              _bal = _context.sent;
              setBalance(_bal);
              _context.next = 24;
              break;
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](14);
              console.error("Failed to fetch balance:", _context.t1);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8], [14, 21]]);
      }));
      return function fetchBalance() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchBalance();
  }, [isLogin, selectedChain]);
  var payBuzz = (0,react.useMemo)(function () {
    try {
      var _summary = buzzItem.content;
      var isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
      var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
      return parseSummary.publicContent ? buzzItem : undefined;
    } catch (e) {
      console.error("Error parsing buzz content:", e);
      return undefined;
    }
  }, [buzzItem]);
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id),
      queryKey: ["buzzAccessControl", payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id],
      queryFn: function queryFn() {
        return (0,api/* getControlByContentPin */.up)({
          pinId: payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id
        });
      }
    }),
    accessControl = _useQuery.data;
  var _useQuery2 = (0,useQuery/* useQuery */.a)({
      queryKey: ["buzzdecryptContent", buzzItem.id, chain, user.address],
      queryFn: function queryFn() {
        return (0,buzz/* decodePayBuzz */.ns)(buzzItem, manPubKey, isLogin);
      }
    }),
    decryptContent = _useQuery2.data,
    refetchDecrypt = _useQuery2.refetch,
    decryptLoading = _useQuery2.isLoading;
  var handlePay = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var isPass, data, payCheck, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (isLogin) {
              _context2.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context2.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return");
          case 6:
            setUnlocking(true);
            _context2.prev = 7;
            if (!(accessControl && accessControl.data)) {
              _context2.next = 23;
              break;
            }
            data = accessControl.data;
            payCheck = data.payCheck;
            if (!(payCheck.type !== 'mrc20')) {
              _context2.next = 16;
              break;
            }
            _context2.next = 14;
            return (0,buzz/* buildAccessPass */.qq)(data.pinId, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", btcConnector, feeRate, payCheck.payTo, payCheck.amount);
          case 14:
            _context2.next = 18;
            break;
          case 16:
            _context2.next = 18;
            return (0,buzz/* buildMRc20AccessPass */.nT)(data.pinId, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", btcConnector, feeRate, payCheck.payTo, payCheck.amount, payMrc20);
          case 18:
            _context2.next = 20;
            return (0,utils/* sleep */._v)(1000);
          case 20:
            refetchDecrypt();
            message/* default */.ZP.success("Pay successfully, please wait for the transaction to be confirmed!");
            setShowUnlock(false);
          case 23:
            _context2.next = 30;
            break;
          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](7);
            errorMessage = (_message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _message !== void 0 ? _message : _context2.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            message/* default */.ZP.error(toastMessage);
          case 30:
            setUnlocking(false);
          case 31:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[7, 25]]);
    }));
    return function handlePay() {
      return _ref3.apply(this, arguments);
    };
  }();
  var _useQuery3 = (0,useQuery/* useQuery */.a)({
      enabled: Boolean(accessControl === null || accessControl === void 0 || (_accessControl$data = accessControl.data) === null || _accessControl$data === void 0 ? void 0 : _accessControl$data.holdCheck),
      queryKey: ["mrc20", accessControl],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
          var _yield$getMRC20Info, data, userInfo;
          return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,api/* getMRC20Info */.tl)({
                  tick: accessControl.data.holdCheck.ticker
                });
              case 2:
                _yield$getMRC20Info = _context3.sent;
                data = _yield$getMRC20Info.data;
                if (!data.mrc20Id) {
                  _context3.next = 9;
                  break;
                }
                _context3.next = 7;
                return (0,api/* getUserInfo */.bG)({
                  address: data.address
                });
              case 7:
                userInfo = _context3.sent;
                return _context3.abrupt("return", objectSpread2_default()(objectSpread2_default()({}, data), {}, {
                  deployerUserInfo: userInfo
                }));
              case 9:
                return _context3.abrupt("return", Promise.resolve(null));
              case 10:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    mrc20 = _useQuery3.data;
  (0,react.useEffect)(function () {
    // 检测内容是否溢出
    if (contentRef.current) {
      var _contentRef$current = contentRef.current,
        scrollHeight = _contentRef$current.scrollHeight,
        offsetHeight = _contentRef$current.offsetHeight;
      setIsOverflowing(scrollHeight > offsetHeight);
    }
  }, [contentRef.current]); // 当内容变化时重新检测

  var handleTranslate = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var encryptContent, res;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (decryptContent) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            setShowTrans(!showTrans);
            if (!isTranslated) {
              _context4.next = 6;
              break;
            }
            setIsTranslated(false);
            return _context4.abrupt("return");
          case 6:
            setIsTranslating(true);
            _context4.prev = 7;
            encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
            _context4.next = 11;
            return fetchTranlateResult({
              sourceText: "".concat(decryptContent.publicContent, "\n").concat(encryptContent),
              from: locale === "en-US" ? "zh" : "en",
              to: locale === "en-US" ? "en" : "zh"
            });
          case 11:
            res = _context4.sent;
            setTransResult(res.trans_result.map(function (item) {
              return item.dst;
            }));
            setIsTranslated(true);
            _context4.next = 19;
            break;
          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](7);
            message/* default */.ZP.error("Translate Failed");
          case 19:
            setIsTranslating(false);
          case 20:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[7, 16]]);
    }));
    return function handleTranslate() {
      return _ref4.apply(this, arguments);
    };
  }();
  var textContent = (0,react.useMemo)(function () {
    if (!decryptContent) return "";
    if (!showTrans || isTranslating) {
      var encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
      return "".concat(decryptContent.publicContent).concat(decryptContent.publicContent && encryptContent ? "\n" : "").concat(encryptContent);
    } else {
      return transResult.join("\n");
    }
  }, [showTrans, transResult, decryptContent, isTranslating]);
  var handleDonate = /*#__PURE__*/function () {
    var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
      var isPass, donateEntity, donateRes, _donateEntity, _donateRes, _message2, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (isLogin) {
              _context5.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context5.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context5.next = 6;
              break;
            }
            return _context5.abrupt("return");
          case 6:
            if (!(!donateAmount || parseFloat(donateAmount) <= 0)) {
              _context5.next = 9;
              break;
            }
            message/* default */.ZP.error("Please enter a valid amount");
            return _context5.abrupt("return");
          case 9:
            setPaying(true);
            setDonateLoading(true);
            _context5.prev = 11;
            if (!(selectedChain === "btc")) {
              _context5.next = 24;
              break;
            }
            _context5.next = 15;
            return btcConnector.use("simpledonate");
          case 15:
            donateEntity = _context5.sent;
            _context5.next = 18;
            return donateEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: buzzItem.address,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: buzzItem.id,
                  message: donateMessage
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                outputs: [{
                  address: buzzItem.address,
                  satoshis: new decimal/* default */.Z(donateAmount).times(1e8).toString()
                }],
                service: fetchServiceFee("donate_service_fee_amount", "BTC")
              }
            });
          case 18:
            donateRes = _context5.sent;
            if (!donateRes.status) {
              _context5.next = 21;
              break;
            }
            throw new Error(donateRes.status);
          case 21:
            if (!(0,isNil/* default */.Z)(donateRes === null || donateRes === void 0 ? void 0 : donateRes.revealTxIds[0])) {
              message/* default */.ZP.success("Donate successfully");
              setShowGift(false);
              setDonateAmount("");
              setDonateMessage("");
              // setIsDonated(true);
              setDonateCount(function (prev) {
                return prev + 1;
              });
              setDonates([].concat(toConsumableArray_default()(donates), [user.metaid]));
            }
            _context5.next = 38;
            break;
          case 24:
            if (!(selectedChain === "mvc")) {
              _context5.next = 37;
              break;
            }
            console.log(chain);
            _context5.next = 28;
            return mvcConnector.use("simpledonate");
          case 28:
            _donateEntity = _context5.sent;
            console.log(_donateEntity, 'donateEntity');
            _context5.next = 32;
            return _donateEntity.create({
              data: {
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: buzzItem.address,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: buzzItem.id,
                  message: donateMessage
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate"),
                feeRate: Number(mvcFeeRate)
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: "donate buzz",
                service: fetchServiceFee("donate_service_fee_amount", "MVC"),
                outputs: [{
                  address: buzzItem.address,
                  satoshis: new decimal/* default */.Z(donateAmount).times(1e8).toString()
                }]
              }
            });
          case 32:
            _donateRes = _context5.sent;
            console.log(_donateRes, 'donateRes');
            if (!(0,isNil/* default */.Z)(_donateRes === null || _donateRes === void 0 ? void 0 : _donateRes.txid)) {
              message/* default */.ZP.success("Donate successfully");
              setShowGift(false);
              setDonateAmount("");
              setDonateMessage("");
              // setIsDonated(true);
              setDonates([].concat(toConsumableArray_default()(donates), [user.metaid]));
            }
            _context5.next = 38;
            break;
          case 37:
            throw new Error("Donate not supported on this chain");
          case 38:
            _context5.next = 45;
            break;
          case 40:
            _context5.prev = 40;
            _context5.t0 = _context5["catch"](11);
            errorMessage = (_message2 = _context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message) !== null && _message2 !== void 0 ? _message2 : _context5.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            message/* default */.ZP.error(toastMessage);
          case 45:
            setPaying(false);
            setDonateLoading(false);
          case 47:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[11, 40]]);
    }));
    return function handleDonate() {
      return _ref5.apply(this, arguments);
    };
  }();
  var _useQuery4 = (0,useQuery/* useQuery */.a)({
      enabled: Boolean((accessControl === null || accessControl === void 0 || (_accessControl$data2 = accessControl.data) === null || _accessControl$data2 === void 0 || (_accessControl$data2 = _accessControl$data2.payCheck) === null || _accessControl$data2 === void 0 ? void 0 : _accessControl$data2.type) === 'mrc20'),
      queryKey: ["mrc20", accessControl],
      queryFn: function () {
        var _queryFn2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6() {
          var _yield$getMRC20Info2, data, userInfo;
          return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return (0,api/* getMRC20Info */.tl)({
                  tick: accessControl.data.payCheck.ticker
                });
              case 2:
                _yield$getMRC20Info2 = _context6.sent;
                data = _yield$getMRC20Info2.data;
                if (!data.mrc20Id) {
                  _context6.next = 9;
                  break;
                }
                _context6.next = 7;
                return (0,api/* getUserInfo */.bG)({
                  address: data.address
                });
              case 7:
                userInfo = _context6.sent;
                return _context6.abrupt("return", objectSpread2_default()(objectSpread2_default()({}, data), {}, {
                  deployerUserInfo: userInfo
                }));
              case 9:
                return _context6.abrupt("return", Promise.resolve(null));
              case 10:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        function queryFn() {
          return _queryFn2.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    payMrc20 = _useQuery4.data;
  if (buzzItem.blocked && user.metaid !== buzzItem.creator) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(BlockedBuzz/* default */.Z, {})
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    className: "tweet",
    loading: loading,
    style: {
      width: "100%",
      borderColor: colorBorder,
      background: backgeround || colorBgContainer,
      boxShadow: "none"
    },
    styles: {
      header: {
        height: 40,
        borderColor: bordered ? colorBorder : 'transparent'
      },
      body: {
        padding: panding
      }
    },
    bordered: bordered,
    title: showHeader ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "avatar",
        style: {
          cursor: "pointer",
          position: "relative"
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
          src: (_currentUserInfoData$ = currentUserInfoData.data) === null || _currentUserInfoData$ === void 0 ? void 0 : _currentUserInfoData$.avatar,
          size: 40
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowIconComponent */._, {
          metaid: ((_currentUserInfoData$2 = currentUserInfoData.data) === null || _currentUserInfoData$2 === void 0 ? void 0 : _currentUserInfoData$2.metaid) || ""
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 8
        },
        onClick: function onClick(e) {
          e.stopPropagation();
          _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Text, {
          style: {
            fontSize: 14,
            lineHeight: 1
          },
          children: [" ", ((_currentUserInfoData$3 = currentUserInfoData.data) === null || _currentUserInfoData$3 === void 0 ? void 0 : _currentUserInfoData$3.name) || "Unnamed"]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
            type: "secondary",
            style: {
              fontSize: 10,
              lineHeight: 1
            },
            children: (_currentUserInfoData$4 = currentUserInfoData.data) === null || _currentUserInfoData$4 === void 0 ? void 0 : _currentUserInfoData$4.metaid.slice(0, 8)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(BuzzOrigin, {
            host: buzzItem.host
          })]
        })]
      })]
    }) : null,
    children: [buzzItem.blocked && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      message: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "This Buzz has been blocked by the administrator."
      }),
      type: "warning",
      banner: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "content",
      style: {
        cursor: "pointer"
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          _umi_production_exports.history.push("/buzz/".concat(buzzItem.id));
        },
        children: [textContent.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "text",
          ref: contentRef,
          style: {
            position: "relative",
            maxHeight: isExpanded ? "none" : 200,
            overflow: "hidden",
            transition: "max-height 0.3s ease"
          },
          children: [(textContent !== null && textContent !== void 0 ? textContent : "").split("\n").map(function (line, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {},
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  minHeight: 22
                },
                dangerouslySetInnerHTML: {
                  __html: (0,utils/* handleSpecial */.mn)((0,utils/* detectUrl */.lZ)(line))
                }
              })
            }, index);
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "link",
            style: {
              padding: 0
            },
            loading: isTranslating,
            onClick: function onClick(e) {
              e.stopPropagation();
              handleTranslate();
            },
            children: showTrans ? (0,utils/* formatMessage */.wv)("Show original content") : (0,utils/* formatMessage */.wv)("Translate")
          }), isOverflowing && !isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              width: "100%",
              paddingTop: 78,
              backgroundImage: "linear-gradient(-180deg,".concat(colorBgBlur, " 0%,").concat(colorBgContainer, " 100%)"),
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              variant: "filled",
              color: "primary",
              size: "small",
              onClick: function onClick(e) {
                e.stopPropagation();
                setIsExpanded(true);
              },
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})
            })
          })]
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(NFTGallery, {
          nfts: decryptContent.nfts
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(ImageGallery/* default */.Z, {
          decryptContent: decryptContent
        }), decryptContent && decryptContent.video && decryptContent.video[0] && /*#__PURE__*/(0,jsx_runtime.jsx)(Video, {
          pid: decryptContent.video[0]
        }), (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.buzzType) === "pay" && /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
          spinning: (accessControl === null || accessControl === void 0 || (_accessControl$data3 = accessControl.data) === null || _accessControl$data3 === void 0 ? void 0 : _accessControl$data3.mempool) === 1,
          children: [(accessControl === null || accessControl === void 0 || (_accessControl$data4 = accessControl.data) === null || _accessControl$data4 === void 0 ? void 0 : _accessControl$data4.payCheck) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
                background: "rgba(32, 32, 32, 0.06)",
                borderRadius: 8,
                padding: "4px 12px"
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
                  type: "warning",
                  style: {
                    lineHeight: "16px"
                  },
                  children: accessControl === null || accessControl === void 0 || (_accessControl$data5 = accessControl.data) === null || _accessControl$data5 === void 0 || (_accessControl$data5 = _accessControl$data5.payCheck) === null || _accessControl$data5 === void 0 ? void 0 : _accessControl$data5.amount
                }), (accessControl === null || accessControl === void 0 || (_accessControl$data6 = accessControl.data) === null || _accessControl$data6 === void 0 || (_accessControl$data6 = _accessControl$data6.payCheck) === null || _accessControl$data6 === void 0 ? void 0 : _accessControl$data6.type) === 'mrc20' ? payMrc20 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                    children: payMrc20.tick
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: payMrc20.tick,
                    metadata: payMrc20.metadata
                  })]
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: btc,
                  alt: "",
                  width: 16,
                  height: 16
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                shape: "round",
                size: "small",
                type: "primary",
                disabled: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "purchased" || (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
                onClick: ( /*#__PURE__*/function () {
                  var _ref6 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee7(e) {
                    var isPass;
                    return regeneratorRuntime_default()().wrap(function _callee7$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                        case 0:
                          e.stopPropagation();
                          if (isLogin) {
                            _context7.next = 4;
                            break;
                          }
                          message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                          return _context7.abrupt("return");
                        case 4:
                          isPass = checkUserSetting();
                          if (isPass) {
                            _context7.next = 7;
                            break;
                          }
                          return _context7.abrupt("return");
                        case 7:
                          setShowUnlock(true);
                        case 8:
                        case "end":
                          return _context7.stop();
                      }
                    }, _callee7);
                  }));
                  return function (_x) {
                    return _ref6.apply(this, arguments);
                  };
                }()),
                loading: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  wrapper: true,
                  children: decryptContent.status === "unpurchased" ? "Unlock" : "Unlocked"
                })
              })]
            }), (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool" && /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              type: "warning",
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                lineHeight: '20px',
                paddingBottom: 12
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                children: "Waiting for transaction confirmation. Access will be available once confirmed."
              })
            })]
          }), (accessControl === null || accessControl === void 0 || (_accessControl$data7 = accessControl.data) === null || _accessControl$data7 === void 0 ? void 0 : _accessControl$data7.holdCheck) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
              background: "rgba(32, 32, 32, 0.06)",
              borderRadius: 8,
              padding: "4px 12px"
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
                type: "warning",
                style: {
                  lineHeight: "16px"
                },
                children: "Hold ".concat(accessControl === null || accessControl === void 0 || (_accessControl$data8 = accessControl.data) === null || _accessControl$data8 === void 0 || (_accessControl$data8 = _accessControl$data8.holdCheck) === null || _accessControl$data8 === void 0 ? void 0 : _accessControl$data8.amount, " ").concat(accessControl === null || accessControl === void 0 || (_accessControl$data9 = accessControl.data) === null || _accessControl$data9 === void 0 || (_accessControl$data9 = _accessControl$data9.holdCheck) === null || _accessControl$data9 === void 0 ? void 0 : _accessControl$data9.ticker)
              }), mrc20 && (mrc20.metadata ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                size: 20,
                tick: mrc20.tick,
                metadata: mrc20.metadata
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
                src: (_mrc20$deployerUserIn = mrc20.deployerUserInfo) === null || _mrc20$deployerUserIn === void 0 ? void 0 : _mrc20$deployerUserIn.avatar,
                size: 20
              }))]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              shape: "round",
              size: "small",
              type: "primary",
              disabled: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "purchased" || (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
              onClick: ( /*#__PURE__*/function () {
                var _ref7 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee8(e) {
                  var _accessControl$data10;
                  return regeneratorRuntime_default()().wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        window.open("https://".concat(config/* curNetwork */.eM === "testnet" ? "testnet" : "www", ".metaid.market/idCoin/").concat(accessControl === null || accessControl === void 0 || (_accessControl$data10 = accessControl.data) === null || _accessControl$data10 === void 0 || (_accessControl$data10 = _accessControl$data10.holdCheck) === null || _accessControl$data10 === void 0 ? void 0 : _accessControl$data10.ticker), (0,utils/* openWindowTarget */.wL)());
                      case 1:
                      case "end":
                        return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function (_x2) {
                  return _ref7.apply(this, arguments);
                };
              }()),
              loading: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
              children: "Mint"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            size: "small",
            type: "link",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
            style: {
              fontSize: 12
            },
            onClick: function onClick(e) {
              e.stopPropagation();
              var link = buzzItem.chainName === "btc" ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(buzzItem.genesisTransaction) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(buzzItem.genesisTransaction);
              window.open(link, "_blank");
            },
            children: buzzItem.genesisTransaction.slice(0, 8)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            icon: buzzItem.genesisHeight === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(SyncOutlined/* default */.Z, {
              spin: true
            }) : null,
            bordered: false,
            color: buzzItem.chainName === "mvc" ? "blue" : "orange",
            children: buzzItem.chainName
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: dayjs_min_default().unix(buzzItem.timestamp).format("YYYY-MM-DD HH:mm:ss")
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NewPost/* default */.Z, {
      show: showNewPost,
      onClose: function onClose() {
        setShowNewPost(false);
      },
      quotePin: buzzItem
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_DonateModal, {
      show: showGift,
      onClose: function onClose() {
        setShowGift(false);
        setDonateAmount("");
        setDonateMessage("");
        setSelectedChain(chain);
      },
      isLegacy: (0,utils/* determineAddressInfo */.uY)(buzzItem.address) === 'p2pkh',
      userInfo: {
        avatar: (_currentUserInfoData$5 = currentUserInfoData.data) === null || _currentUserInfoData$5 === void 0 ? void 0 : _currentUserInfoData$5.avatar,
        name: (_currentUserInfoData$6 = currentUserInfoData.data) === null || _currentUserInfoData$6 === void 0 ? void 0 : _currentUserInfoData$6.name,
        metaid: (_currentUserInfoData$7 = currentUserInfoData.data) === null || _currentUserInfoData$7 === void 0 ? void 0 : _currentUserInfoData$7.metaid
      },
      balance: balance,
      chain: selectedChain,
      setChain: setSelectedChain,
      paying: paying,
      donateAmount: donateAmount,
      donateMessage: donateMessage,
      setDonateAmount: setDonateAmount,
      setDonateMessage: setDonateMessage,
      onDonate: handleDonate
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Unlock, {
      show: showUnlock && (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) !== 'purchased' && (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) !== 'mempool',
      onClose: function onClose() {
        setShowUnlock(false);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          flexDirection: 'column',
          padding: 20
        },
        children: [(accessControl === null || accessControl === void 0 || (_accessControl$data11 = accessControl.data) === null || _accessControl$data11 === void 0 || (_accessControl$data11 = _accessControl$data11.payCheck) === null || _accessControl$data11 === void 0 ? void 0 : _accessControl$data11.type) === 'mrc20' ? payMrc20 && /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
          size: 60,
          tick: payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.tick,
          metadata: payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.metadata
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: btc,
          alt: "",
          width: 60,
          height: 60
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Title, {
          level: 4,
          children: [accessControl === null || accessControl === void 0 || (_accessControl$data12 = accessControl.data) === null || _accessControl$data12 === void 0 || (_accessControl$data12 = _accessControl$data12.payCheck) === null || _accessControl$data12 === void 0 ? void 0 : _accessControl$data12.amount, " ", (accessControl === null || accessControl === void 0 || (_accessControl$data13 = accessControl.data) === null || _accessControl$data13 === void 0 || (_accessControl$data13 = _accessControl$data13.payCheck) === null || _accessControl$data13 === void 0 ? void 0 : _accessControl$data13.type) === 'mrc20' ? payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.tick : 'BTC']
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            width: '100%'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            variant: "filled",
            size: "large",
            color: "primary",
            block: true,
            onClick: function onClick() {
              setShowUnlock(false);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Cancel"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            size: "large",
            block: true,
            loading: unlocking,
            type: "primary",
            onClick: ( /*#__PURE__*/function () {
              var _ref8 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee9(e) {
                return regeneratorRuntime_default()().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      e.stopPropagation();
                      handlePay();
                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              }));
              return function (_x3) {
                return _ref8.apply(this, arguments);
              };
            }()),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Unlock"
            })
          })]
        })]
      })
    })]
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/ForwardTweet.tsx



var RepostDetails = /*#__PURE__*/react.memo(function (_ref) {
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    loading = _ref.loading;
  if (!buzzItem || !buzzItem.address) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RepostDetail, {
    buzzItem: buzzItem,
    loading: loading
  });
});
/* harmony default export */ var ForwardTweet = (RepostDetails);
;// CONCATENATED MODULE: ./src/Components/Buzz/Details.tsx





















var Details_Paragraph = typography/* default */.Z.Paragraph,
  Details_Text = typography/* default */.Z.Text;














// TODO: use metaid manage state



/* harmony default export */ var Details = (function (_ref) {
  var _accessControl$data, _accessControl$data2, _currentUserInfoData$, _currentUserInfoData$2, _currentUserInfoData$3, _currentUserInfoData$4, _accessControl$data3, _accessControl$data4, _accessControl$data5, _accessControl$data6, _accessControl$data7, _accessControl$data8, _accessControl$data9, _mrc20$deployerUserIn, _currentUserInfoData$5, _currentUserInfoData$6, _currentUserInfoData$7, _accessControl$data11, _accessControl$data12, _accessControl$data13;
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    refetch = _ref.refetch,
    _ref$isForward = _ref.isForward,
    isForward = _ref$isForward === void 0 ? false : _ref$isForward,
    loading = _ref.loading,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
    _ref$donate = _ref.donate,
    donate = _ref$donate === void 0 ? [] : _ref$donate,
    handleClick = _ref.handleClick;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary,
    colorBorder = _theme$useToken$token.colorBorder,
    colorBgBlur = _theme$useToken$token.colorBgBlur,
    colorBgContainer = _theme$useToken$token.colorBgContainer;
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    locale = _useIntl.locale;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isTranslated = _useState2[0],
    setIsTranslated = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isTranslating = _useState4[0],
    setIsTranslating = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    showTrans = _useState6[0],
    setShowTrans = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = slicedToArray_default()(_useState7, 2),
    transResult = _useState8[0],
    setTransResult = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = slicedToArray_default()(_useState9, 2),
    showComment = _useState10[0],
    setShowComment = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    showNewPost = _useState12[0],
    setShowNewPost = _useState12[1];
  var _useState13 = (0,react.useState)(false),
    _useState14 = slicedToArray_default()(_useState13, 2),
    showUnlock = _useState14[0],
    setShowUnlock = _useState14[1];
  var contentRef = (0,react.useRef)(null); // 引用内容容器
  var _useState15 = (0,react.useState)(false),
    _useState16 = slicedToArray_default()(_useState15, 2),
    isExpanded = _useState16[0],
    setIsExpanded = _useState16[1];
  var _useState17 = (0,react.useState)(false),
    _useState18 = slicedToArray_default()(_useState17, 2),
    isOverflowing = _useState18[0],
    setIsOverflowing = _useState18[1]; // 是否溢出
  var _useState19 = (0,react.useState)(false),
    _useState20 = slicedToArray_default()(_useState19, 2),
    paying = _useState20[0],
    setPaying = _useState20[1];
  var _useState21 = (0,react.useState)(false),
    _useState22 = slicedToArray_default()(_useState21, 2),
    unlocking = _useState22[0],
    setUnlocking = _useState22[1];
  var _useModel = (0,_umi_production_exports.useModel)("user"),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user,
    isLogin = _useModel.isLogin,
    connect = _useModel.connect,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting;
  var _useModel2 = (0,_umi_production_exports.useModel)("dashboard"),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee,
    manPubKey = _useModel2.manPubKey;
  var _useState23 = (0,react.useState)(false),
    _useState24 = slicedToArray_default()(_useState23, 2),
    handleLikeLoading = _useState24[0],
    setHandleLikeLoading = _useState24[1];
  var _useState25 = (0,react.useState)([]),
    _useState26 = slicedToArray_default()(_useState25, 2),
    likes = _useState26[0],
    setLikes = _useState26[1];
  var _useState27 = (0,react.useState)([]),
    _useState28 = slicedToArray_default()(_useState27, 2),
    donates = _useState28[0],
    setDonates = _useState28[1];
  var currentUserInfoData = (0,useQuery/* useQuery */.a)({
    queryKey: ["userInfo", buzzItem.creator],
    enabled: !(0,isNil/* default */.Z)(buzzItem === null || buzzItem === void 0 ? void 0 : buzzItem.creator),
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: buzzItem.creator
      });
    }
  });
  var _useState29 = (0,react.useState)(false),
    _useState30 = slicedToArray_default()(_useState29, 2),
    showGift = _useState30[0],
    setShowGift = _useState30[1];
  var _useState31 = (0,react.useState)(""),
    _useState32 = slicedToArray_default()(_useState31, 2),
    donateAmount = _useState32[0],
    setDonateAmount = _useState32[1];
  var _useState33 = (0,react.useState)(""),
    _useState34 = slicedToArray_default()(_useState33, 2),
    donateMessage = _useState34[0],
    setDonateMessage = _useState34[1];
  var _useState35 = (0,react.useState)(0),
    _useState36 = slicedToArray_default()(_useState35, 2),
    balance = _useState36[0],
    setBalance = _useState36[1];
  var _useState37 = (0,react.useState)(false),
    _useState38 = slicedToArray_default()(_useState37, 2),
    donateLoading = _useState38[0],
    setDonateLoading = _useState38[1];
  var _useState39 = (0,react.useState)((0,utils/* determineAddressInfo */.uY)(buzzItem.address) === 'p2pkh' ? chain : 'btc'),
    _useState40 = slicedToArray_default()(_useState39, 2),
    selectedChain = _useState40[0],
    setSelectedChain = _useState40[1];
  (0,react.useEffect)(function () {
    var fetchBalance = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var bal, _bal;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(isLogin && selectedChain === "btc")) {
                _context.next = 13;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return (0,psbtBuild/* getUtxoBalance */.xd)();
            case 4:
              bal = _context.sent;
              setBalance(bal);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to fetch balance:", _context.t0);
            case 11:
              _context.next = 24;
              break;
            case 13:
              if (!(isLogin && selectedChain === "mvc")) {
                _context.next = 24;
                break;
              }
              _context.prev = 14;
              _context.next = 17;
              return (0,psbtBuild/* getMvcBalance */.eo)();
            case 17:
              _bal = _context.sent;
              setBalance(_bal);
              _context.next = 24;
              break;
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](14);
              console.error("Failed to fetch balance:", _context.t1);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8], [14, 21]]);
      }));
      return function fetchBalance() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchBalance();
  }, [isLogin, selectedChain]);
  (0,react.useEffect)(function () {
    var _buzzItem$like, _buzzItem$donate;
    if (!buzzItem) {
      return;
    }
    var _likes = (_buzzItem$like = buzzItem.like) !== null && _buzzItem$like !== void 0 ? _buzzItem$like : [];
    var _like = like !== null && like !== void 0 ? like : [];
    setLikes([].concat(toConsumableArray_default()(_likes), toConsumableArray_default()(_like.map(function (item) {
      return item.CreateMetaid;
    }))));
    var _donates = (_buzzItem$donate = buzzItem.donate) !== null && _buzzItem$donate !== void 0 ? _buzzItem$donate : [];
    var _donate = donate !== null && donate !== void 0 ? donate : [];
    setDonates([].concat(toConsumableArray_default()(_donates), toConsumableArray_default()(_donate.map(function (item) {
      return item.CreateMetaid;
    }))));
  }, [buzzItem, like, donate]);
  var payBuzz = (0,react.useMemo)(function () {
    try {
      var _summary = buzzItem.content;
      var isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
      var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
      return parseSummary.publicContent ? buzzItem : undefined;
    } catch (e) {
      console.error("Error parsing buzz content:", e);
      return undefined;
    }
  }, [buzzItem]);
  var isLiked = (0,react.useMemo)(function () {
    if (!buzzItem || !user) return false;
    return likes.includes(user.metaid);
  }, [likes]);
  var isDonatedUser = (0,react.useMemo)(function () {
    if (!buzzItem || !user) return false;
    return donates.includes(user.metaid);
  }, [donates]);
  var handleLike = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
      var isPass, pinId, likeEntity, likeRes, _likeEntity, _likeRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (isLogin) {
              _context2.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context2.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return");
          case 6:
            pinId = buzzItem.id;
            if (!isLiked) {
              _context2.next = 10;
              break;
            }
            message/* default */.ZP.error("You have already liked that buzz...");
            return _context2.abrupt("return");
          case 10:
            setHandleLikeLoading(true);
            _context2.prev = 11;
            if (!(chain === "btc")) {
              _context2.next = 22;
              break;
            }
            _context2.next = 15;
            return btcConnector.use("like");
          case 15:
            likeEntity = _context2.sent;
            _context2.next = 18;
            return likeEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee("like_service_fee_amount", "BTC")
              }
            });
          case 18:
            likeRes = _context2.sent;
            if (!(0,isNil/* default */.Z)(likeRes === null || likeRes === void 0 ? void 0 : likeRes.revealTxIds[0])) {
              setLikes([].concat(toConsumableArray_default()(likes), [user.metaid]));
              // await sleep(5000);
              // queryClient.invalidateQueries({ queryKey: ['homebuzzesnew'] });
              // queryClient.invalidateQueries({ queryKey: ['payLike', buzzItem!.id] });

              message/* default */.ZP.success("like buzz successfully");
            }
            _context2.next = 30;
            break;
          case 22:
            _context2.next = 24;
            return mvcConnector.use("like");
          case 24:
            _likeEntity = _context2.sent;
            _context2.next = 27;
            return _likeEntity.create({
              data: {
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: "like buzz",
                service: fetchServiceFee("like_service_fee_amount", "MVC"),
                feeRate: Number(mvcFeeRate)
              }
            });
          case 27:
            _likeRes = _context2.sent;
            console.log("likeRes", _likeRes);
            if (!(0,isNil/* default */.Z)(_likeRes === null || _likeRes === void 0 ? void 0 : _likeRes.txid)) {
              // await sleep(8000);
              // refetch && refetch()
              // queryClient.invalidateQueries({ queryKey: ['homebuzzesnew'] })
              // queryClient.invalidateQueries({
              //     queryKey: ['payLike', buzzItem!.id],
              // })
              // await sleep(5000);
              setLikes([].concat(toConsumableArray_default()(likes), [user.metaid]));
              message/* default */.ZP.success("like buzz successfully");
            }
          case 30:
            _context2.next = 38;
            break;
          case 32:
            _context2.prev = 32;
            _context2.t0 = _context2["catch"](11);
            console.log("error", _context2.t0);
            errorMessage = (_message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _message !== void 0 ? _message : _context2.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes("Cannot read properties of undefined") ? "User Canceled" : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
          case 38:
            setHandleLikeLoading(false);
          case 39:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[11, 32]]);
    }));
    return function handleLike() {
      return _ref3.apply(this, arguments);
    };
  }();
  var quotePinId = (0,react.useMemo)(function () {
    if (isForward) return "";
    try {
      var _parseSummary$quotePi;
      var _summary = buzzItem.content;
      var isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
      var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
      return isSummaryJson && !(0,isEmpty/* default */.Z)((_parseSummary$quotePi = parseSummary === null || parseSummary === void 0 ? void 0 : parseSummary.quotePin) !== null && _parseSummary$quotePi !== void 0 ? _parseSummary$quotePi : "") ? parseSummary.quotePin : "";
    } catch (e) {
      console.error("Error parsing buzz content:", e);
      return "";
    }
  }, [buzzItem, isForward]);
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(quotePinId),
      queryKey: ["buzzDetail", quotePinId],
      queryFn: function queryFn() {
        return (0,api/* fetchBuzzDetail */.uq)({
          pinId: quotePinId
        });
      }
    }),
    isQuoteLoading = _useQuery.isLoading,
    quoteDetailData = _useQuery.data;
  var _useQuery2 = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id),
      queryKey: ["buzzAccessControl", payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id],
      queryFn: function queryFn() {
        return (0,api/* getControlByContentPin */.up)({
          pinId: payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id
        });
      }
    }),
    accessControl = _useQuery2.data;
  var _useQuery3 = (0,useQuery/* useQuery */.a)({
      queryKey: ["buzzdecryptContent", buzzItem.id, chain, user.address],
      queryFn: function queryFn() {
        return (0,buzz/* decodePayBuzz */.ns)(buzzItem, manPubKey, isLogin);
      }
    }),
    decryptContent = _useQuery3.data,
    refetchDecrypt = _useQuery3.refetch,
    decryptLoading = _useQuery3.isLoading;
  var handlePay = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
      var isPass, data, payCheck, _message2, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (isLogin) {
              _context3.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context3.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context3.next = 6;
              break;
            }
            return _context3.abrupt("return");
          case 6:
            setUnlocking(true);
            _context3.prev = 7;
            if (!(accessControl && accessControl.data)) {
              _context3.next = 23;
              break;
            }
            data = accessControl.data;
            payCheck = data.payCheck;
            if (!(payCheck.type !== 'mrc20')) {
              _context3.next = 16;
              break;
            }
            _context3.next = 14;
            return (0,buzz/* buildAccessPass */.qq)(data.pinId, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", btcConnector, feeRate, payCheck.payTo, payCheck.amount);
          case 14:
            _context3.next = 18;
            break;
          case 16:
            _context3.next = 18;
            return (0,buzz/* buildMRc20AccessPass */.nT)(data.pinId, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", btcConnector, feeRate, payCheck.payTo, payCheck.amount, payMrc20);
          case 18:
            _context3.next = 20;
            return (0,utils/* sleep */._v)(1000);
          case 20:
            refetchDecrypt();
            message/* default */.ZP.success("Pay successfully, please wait for the transaction to be confirmed!");
            setShowUnlock(false);
          case 23:
            _context3.next = 30;
            break;
          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](7);
            errorMessage = (_message2 = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _message2 !== void 0 ? _message2 : _context3.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            message/* default */.ZP.error(toastMessage);
          case 30:
            setUnlocking(false);
          case 31:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[7, 25]]);
    }));
    return function handlePay() {
      return _ref4.apply(this, arguments);
    };
  }();
  var _useQuery4 = (0,useQuery/* useQuery */.a)({
      enabled: Boolean(accessControl === null || accessControl === void 0 || (_accessControl$data = accessControl.data) === null || _accessControl$data === void 0 ? void 0 : _accessControl$data.holdCheck),
      queryKey: ["mrc20", accessControl],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
          var _yield$getMRC20Info, data, userInfo;
          return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0,api/* getMRC20Info */.tl)({
                  tick: accessControl.data.holdCheck.ticker
                });
              case 2:
                _yield$getMRC20Info = _context4.sent;
                data = _yield$getMRC20Info.data;
                if (!data.mrc20Id) {
                  _context4.next = 9;
                  break;
                }
                _context4.next = 7;
                return (0,api/* getUserInfo */.bG)({
                  address: data.address
                });
              case 7:
                userInfo = _context4.sent;
                return _context4.abrupt("return", objectSpread2_default()(objectSpread2_default()({}, data), {}, {
                  deployerUserInfo: userInfo
                }));
              case 9:
                return _context4.abrupt("return", Promise.resolve(null));
              case 10:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    mrc20 = _useQuery4.data;
  var _useQuery5 = (0,useQuery/* useQuery */.a)({
      enabled: Boolean((accessControl === null || accessControl === void 0 || (_accessControl$data2 = accessControl.data) === null || _accessControl$data2 === void 0 || (_accessControl$data2 = _accessControl$data2.payCheck) === null || _accessControl$data2 === void 0 ? void 0 : _accessControl$data2.type) === 'mrc20'),
      queryKey: ["mrc20", accessControl],
      queryFn: function () {
        var _queryFn2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
          var _yield$getMRC20Info2, data, userInfo;
          return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0,api/* getMRC20Info */.tl)({
                  tick: accessControl.data.payCheck.ticker
                });
              case 2:
                _yield$getMRC20Info2 = _context5.sent;
                data = _yield$getMRC20Info2.data;
                if (!data.mrc20Id) {
                  _context5.next = 9;
                  break;
                }
                _context5.next = 7;
                return (0,api/* getUserInfo */.bG)({
                  address: data.address
                });
              case 7:
                userInfo = _context5.sent;
                return _context5.abrupt("return", objectSpread2_default()(objectSpread2_default()({}, data), {}, {
                  deployerUserInfo: userInfo
                }));
              case 9:
                return _context5.abrupt("return", Promise.resolve(null));
              case 10:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        function queryFn() {
          return _queryFn2.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    payMrc20 = _useQuery5.data;
  (0,react.useEffect)(function () {
    // 检测内容是否溢出
    if (contentRef.current) {
      var _contentRef$current = contentRef.current,
        scrollHeight = _contentRef$current.scrollHeight,
        offsetHeight = _contentRef$current.offsetHeight;
      setIsOverflowing(scrollHeight > offsetHeight);
    }
  }, [contentRef.current]); // 当内容变化时重新检测

  var handleTranslate = /*#__PURE__*/function () {
    var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6() {
      var encryptContent, res;
      return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (decryptContent) {
              _context6.next = 2;
              break;
            }
            return _context6.abrupt("return");
          case 2:
            setShowTrans(!showTrans);
            if (!isTranslated) {
              _context6.next = 6;
              break;
            }
            setIsTranslated(false);
            return _context6.abrupt("return");
          case 6:
            setIsTranslating(true);
            _context6.prev = 7;
            encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
            _context6.next = 11;
            return fetchTranlateResult({
              sourceText: "".concat(decryptContent.publicContent, "\n").concat(encryptContent),
              from: locale === "en-US" ? "zh" : "en",
              to: locale === "en-US" ? "en" : "zh"
            });
          case 11:
            res = _context6.sent;
            setTransResult(res.trans_result.map(function (item) {
              return item.dst;
            }));
            setIsTranslated(true);
            _context6.next = 19;
            break;
          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](7);
            message/* default */.ZP.error("Translate Failed");
          case 19:
            setIsTranslating(false);
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[7, 16]]);
    }));
    return function handleTranslate() {
      return _ref5.apply(this, arguments);
    };
  }();
  var textContent = (0,react.useMemo)(function () {
    if (!decryptContent) return "";
    if (!showTrans || isTranslating) {
      var encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
      return "".concat(decryptContent.publicContent).concat(decryptContent.publicContent && encryptContent ? "\n" : "").concat(encryptContent);
    } else {
      return transResult.join("\n");
    }
  }, [showTrans, transResult, decryptContent, isTranslating]);
  var handleDonate = /*#__PURE__*/function () {
    var _ref6 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee7() {
      var isPass, donateEntity, donateRes, _donateEntity, _donateRes, _message3, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            if (isLogin) {
              _context7.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context7.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context7.next = 6;
              break;
            }
            return _context7.abrupt("return");
          case 6:
            if (!(!donateAmount || parseFloat(donateAmount) <= 0)) {
              _context7.next = 9;
              break;
            }
            message/* default */.ZP.error("Please enter a valid amount");
            return _context7.abrupt("return");
          case 9:
            setPaying(true);
            setDonateLoading(true);
            _context7.prev = 11;
            if (!(selectedChain === "btc")) {
              _context7.next = 24;
              break;
            }
            _context7.next = 15;
            return btcConnector.use("simpledonate");
          case 15:
            donateEntity = _context7.sent;
            _context7.next = 18;
            return donateEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: buzzItem.address,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: buzzItem.id,
                  message: donateMessage
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                outputs: [{
                  address: buzzItem.address,
                  satoshis: new decimal/* default */.Z(donateAmount).times(1e8).toString()
                }],
                service: fetchServiceFee("donate_service_fee_amount", "BTC")
              }
            });
          case 18:
            donateRes = _context7.sent;
            if (!donateRes.status) {
              _context7.next = 21;
              break;
            }
            throw new Error(donateRes.status);
          case 21:
            if (!(0,isNil/* default */.Z)(donateRes === null || donateRes === void 0 ? void 0 : donateRes.revealTxIds[0])) {
              message/* default */.ZP.success("Donate successfully");
              setShowGift(false);
              setDonateAmount("");
              setDonateMessage("");
              // setIsDonated(true);
              setDonateCount(function (prev) {
                return prev + 1;
              });
              setDonates([].concat(toConsumableArray_default()(donates), [user.metaid]));
            }
            _context7.next = 38;
            break;
          case 24:
            if (!(selectedChain === "mvc")) {
              _context7.next = 37;
              break;
            }
            console.log(chain);
            _context7.next = 28;
            return mvcConnector.use("simpledonate");
          case 28:
            _donateEntity = _context7.sent;
            console.log(_donateEntity, 'donateEntity');
            _context7.next = 32;
            return _donateEntity.create({
              data: {
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: buzzItem.address,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: buzzItem.id,
                  message: donateMessage
                }),
                flag: config/* FLAG */.BZ,
                contentType: "text/plain;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: "donate buzz",
                service: fetchServiceFee("donate_service_fee_amount", "MVC"),
                outputs: [{
                  address: buzzItem.address,
                  satoshis: new decimal/* default */.Z(donateAmount).times(1e8).toString()
                }]
              }
            });
          case 32:
            _donateRes = _context7.sent;
            console.log(_donateRes, 'donateRes');
            if (!(0,isNil/* default */.Z)(_donateRes === null || _donateRes === void 0 ? void 0 : _donateRes.txid)) {
              message/* default */.ZP.success("Donate successfully");
              setShowGift(false);
              setDonateAmount("");
              setDonateMessage("");
              // setIsDonated(true);
              setDonates([].concat(toConsumableArray_default()(donates), [user.metaid]));
            }
            _context7.next = 38;
            break;
          case 37:
            throw new Error("Donate not supported on this chain");
          case 38:
            _context7.next = 45;
            break;
          case 40:
            _context7.prev = 40;
            _context7.t0 = _context7["catch"](11);
            errorMessage = (_message3 = _context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.message) !== null && _message3 !== void 0 ? _message3 : _context7.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            message/* default */.ZP.error(toastMessage);
          case 45:
            setPaying(false);
            setDonateLoading(false);
          case 47:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[11, 40]]);
    }));
    return function handleDonate() {
      return _ref6.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    className: "tweet",
    loading: loading || decryptLoading,
    style: {
      width: "100%",
      borderColor: isForward ? colorBorder : colorBorderSecondary
    },
    styles: {
      header: {
        height: 40,
        borderColor: isForward ? colorBorder : colorBorderSecondary
      },
      body: {
        paddingTop: 12
      }
    },
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "avatar",
        style: {
          cursor: "pointer",
          position: "relative"
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
          src: (_currentUserInfoData$ = currentUserInfoData.data) === null || _currentUserInfoData$ === void 0 ? void 0 : _currentUserInfoData$.avatar,
          size: 40,
          onClick: function onClick(e) {
            e.stopPropagation();
            _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowIconComponent */._, {
          metaid: ((_currentUserInfoData$2 = currentUserInfoData.data) === null || _currentUserInfoData$2 === void 0 ? void 0 : _currentUserInfoData$2.metaid) || ""
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 8,
          cursor: "pointer"
        },
        onClick: function onClick(e) {
          e.stopPropagation();
          _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Details_Text, {
          style: {
            fontSize: 14,
            lineHeight: 1
          },
          children: [" ", ((_currentUserInfoData$3 = currentUserInfoData.data) === null || _currentUserInfoData$3 === void 0 ? void 0 : _currentUserInfoData$3.name) || "Unnamed"]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: "flex",
            gap: 8,
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Text, {
            type: "secondary",
            style: {
              fontSize: 10,
              lineHeight: 1
            },
            children: (_currentUserInfoData$4 = currentUserInfoData.data) === null || _currentUserInfoData$4 === void 0 ? void 0 : _currentUserInfoData$4.metaid.slice(0, 8)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(BuzzOrigin, {
            host: buzzItem.host
          })]
        })]
      })]
    }),
    children: [buzzItem.blocked && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      message: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "This Buzz has been blocked by the administrator."
      }),
      type: "warning",
      banner: true
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "content",
      style: {
        cursor: "pointer"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          handleClick ? handleClick() : _umi_production_exports.history.push("/buzz/".concat(buzzItem.id));
        },
        children: [textContent.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "text",
          ref: contentRef,
          style: {
            position: "relative",
            maxHeight: isExpanded ? "none" : 200,
            overflow: "hidden",
            transition: "max-height 0.3s ease"
          },
          children: [(textContent !== null && textContent !== void 0 ? textContent : "").split("\n").map(function (line, index) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {},
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  minHeight: 22
                },
                dangerouslySetInnerHTML: {
                  __html: (0,utils/* handleSpecial */.mn)((0,utils/* detectUrl */.lZ)(line))
                }
              })
            }, index);
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "link",
            style: {
              padding: 0
            },
            loading: isTranslating,
            onClick: function onClick(e) {
              e.stopPropagation();
              handleTranslate();
            },
            children: showTrans ? (0,utils/* formatMessage */.wv)("Show original content") : (0,utils/* formatMessage */.wv)("Translate")
          }), isOverflowing && !isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              width: "100%",
              paddingTop: 78,
              backgroundImage: "linear-gradient(-180deg,".concat(colorBgBlur, " 0%,").concat(colorBgContainer, " 100%)"),
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              variant: "filled",
              color: "primary",
              size: "small",
              onClick: function onClick(e) {
                e.stopPropagation();
                setIsExpanded(true);
              },
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z, {})
            })
          })]
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(NFTGallery, {
          nfts: decryptContent.nfts
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(ImageGallery/* default */.Z, {
          decryptContent: decryptContent
        }), decryptContent && decryptContent.video[0] && /*#__PURE__*/(0,jsx_runtime.jsx)(Video, {
          pid: decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.video[0]
        }), (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.buzzType) === "pay" && /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
          spinning: (accessControl === null || accessControl === void 0 || (_accessControl$data3 = accessControl.data) === null || _accessControl$data3 === void 0 ? void 0 : _accessControl$data3.mempool) === 1,
          children: [(accessControl === null || accessControl === void 0 || (_accessControl$data4 = accessControl.data) === null || _accessControl$data4 === void 0 ? void 0 : _accessControl$data4.payCheck) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
                background: "rgba(32, 32, 32, 0.06)",
                borderRadius: 8,
                padding: "4px 12px"
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Text, {
                  type: "warning",
                  style: {
                    lineHeight: "16px"
                  },
                  children: accessControl === null || accessControl === void 0 || (_accessControl$data5 = accessControl.data) === null || _accessControl$data5 === void 0 || (_accessControl$data5 = _accessControl$data5.payCheck) === null || _accessControl$data5 === void 0 ? void 0 : _accessControl$data5.amount
                }), (accessControl === null || accessControl === void 0 || (_accessControl$data6 = accessControl.data) === null || _accessControl$data6 === void 0 || (_accessControl$data6 = _accessControl$data6.payCheck) === null || _accessControl$data6 === void 0 ? void 0 : _accessControl$data6.type) === 'mrc20' ? payMrc20 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                    children: payMrc20.tick
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: payMrc20.tick,
                    metadata: payMrc20.metadata
                  })]
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: btc,
                  alt: "",
                  width: 16,
                  height: 16
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                shape: "round",
                size: "small",
                type: "primary",
                disabled: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "purchased" || (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
                onClick: ( /*#__PURE__*/function () {
                  var _ref7 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee8(e) {
                    var isPass;
                    return regeneratorRuntime_default()().wrap(function _callee8$(_context8) {
                      while (1) switch (_context8.prev = _context8.next) {
                        case 0:
                          e.stopPropagation();
                          if (isLogin) {
                            _context8.next = 4;
                            break;
                          }
                          message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                          return _context8.abrupt("return");
                        case 4:
                          isPass = checkUserSetting();
                          if (isPass) {
                            _context8.next = 7;
                            break;
                          }
                          return _context8.abrupt("return");
                        case 7:
                          setShowUnlock(true);
                        case 8:
                        case "end":
                          return _context8.stop();
                      }
                    }, _callee8);
                  }));
                  return function (_x) {
                    return _ref7.apply(this, arguments);
                  };
                }()),
                loading: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  wrapper: true,
                  children: decryptContent.status === "unpurchased" ? "Unlock" : "Unlocked"
                })
              })]
            }), (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool" && /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              type: "warning",
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                lineHeight: '20px',
                paddingBottom: 12
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                children: "Waiting for transaction confirmation. Access will be available once confirmed."
              })
            })]
          }), (accessControl === null || accessControl === void 0 || (_accessControl$data7 = accessControl.data) === null || _accessControl$data7 === void 0 ? void 0 : _accessControl$data7.holdCheck) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
              background: "rgba(32, 32, 32, 0.06)",
              borderRadius: 8,
              padding: "4px 12px"
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 8
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Text, {
                type: "warning",
                style: {
                  lineHeight: "16px"
                },
                children: "Hold ".concat(accessControl === null || accessControl === void 0 || (_accessControl$data8 = accessControl.data) === null || _accessControl$data8 === void 0 || (_accessControl$data8 = _accessControl$data8.holdCheck) === null || _accessControl$data8 === void 0 ? void 0 : _accessControl$data8.amount, " ").concat(accessControl === null || accessControl === void 0 || (_accessControl$data9 = accessControl.data) === null || _accessControl$data9 === void 0 || (_accessControl$data9 = _accessControl$data9.holdCheck) === null || _accessControl$data9 === void 0 ? void 0 : _accessControl$data9.ticker)
              }), mrc20 && (mrc20.metadata ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                size: 20,
                tick: mrc20.tick,
                metadata: mrc20.metadata
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
                src: (_mrc20$deployerUserIn = mrc20.deployerUserInfo) === null || _mrc20$deployerUserIn === void 0 ? void 0 : _mrc20$deployerUserIn.avatar,
                size: 20
              }))]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              shape: "round",
              size: "small",
              type: "primary",
              disabled: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "purchased" || (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
              onClick: ( /*#__PURE__*/function () {
                var _ref8 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee9(e) {
                  var _accessControl$data10;
                  return regeneratorRuntime_default()().wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        window.open("https://".concat(config/* curNetwork */.eM === "testnet" ? "testnet" : "www", ".metaid.market/idCoin/").concat(accessControl === null || accessControl === void 0 || (_accessControl$data10 = accessControl.data) === null || _accessControl$data10 === void 0 || (_accessControl$data10 = _accessControl$data10.holdCheck) === null || _accessControl$data10 === void 0 ? void 0 : _accessControl$data10.ticker), (0,utils/* openWindowTarget */.wL)());
                      case 1:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9);
                }));
                return function (_x2) {
                  return _ref8.apply(this, arguments);
                };
              }()),
              loading: (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) === "mempool",
              children: "Mint"
            })]
          })]
        }), !(0,isEmpty/* default */.Z)(quotePinId) && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          style: {
            padding: 0,
            marginBottom: 12,
            boxShadow: "none"
          },
          bordered: false,
          styles: {
            body: {
              padding: 0
            }
          },
          loading: isQuoteLoading,
          children: (quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data) && /*#__PURE__*/(0,jsx_runtime.jsx)(ForwardTweet, {
            buzzItem: objectSpread2_default()(objectSpread2_default()({}, quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data.tweet), {}, {
              blocked: quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data.blocked
            }),
            showActions: false
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            size: "small",
            type: "link",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
            style: {
              fontSize: 12
            },
            onClick: function onClick(e) {
              e.stopPropagation();
              var link = buzzItem.chainName === "btc" ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(buzzItem.genesisTransaction) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(buzzItem.genesisTransaction);
              window.open(link, "_blank");
            },
            children: buzzItem.genesisTransaction.slice(0, 8)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            icon: buzzItem.genesisHeight === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(SyncOutlined/* default */.Z, {
              spin: true
            }) : null,
            bordered: false,
            color: buzzItem.chainName === "mvc" ? "blue" : "orange",
            children: buzzItem.chainName
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: dayjs_min_default().unix(buzzItem.timestamp).format("YYYY-MM-DD HH:mm:ss")
          })]
        })]
      }), showActions && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "actions",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageOutlined/* default */.Z, {}),
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee10() {
            var isPass;
            return regeneratorRuntime_default()().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (isLogin) {
                    _context10.next = 3;
                    break;
                  }
                  message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                  return _context10.abrupt("return");
                case 3:
                  isPass = checkUserSetting();
                  if (isPass) {
                    _context10.next = 6;
                    break;
                  }
                  return _context10.abrupt("return");
                case 6:
                  showComment ? setShowComment(false) : setShowComment(true);
                case 7:
                case "end":
                  return _context10.stop();
              }
            }, _callee10);
          })),
          children: buzzItem.commentCount
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          loading: handleLikeLoading,
          onClick: handleLike,
          icon: isLiked ? /*#__PURE__*/(0,jsx_runtime.jsx)(HeartFilled/* default */.Z, {
            style: {
              color: "red"
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(HeartOutlined/* default */.Z, {}),
          children: likes.length
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "text",
          icon: isDonatedUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(GiftFilled/* default */.Z, {
            style: {
              color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
            }
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {}),
          loading: donateLoading,
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee11() {
            var isPass;
            return regeneratorRuntime_default()().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  if (isLogin) {
                    _context11.next = 3;
                    break;
                  }
                  message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                  return _context11.abrupt("return");
                case 3:
                  isPass = checkUserSetting();
                  if (isPass) {
                    _context11.next = 6;
                    break;
                  }
                  return _context11.abrupt("return");
                case 6:
                  showGift ? setShowGift(false) : setShowGift(true);
                case 7:
                case "end":
                  return _context11.stop();
              }
            }, _callee11);
          })),
          children: donates.length
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "item",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
            onClick: function onClick() {
              if (!isLogin) {
                message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                return;
              }
              var isPass = checkUserSetting();
              if (!isPass) return;
              showNewPost ? setShowNewPost(false) : setShowNewPost(true);
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Comment/* default */.Z, {
      tweetId: buzzItem.id,
      onClose: function onClose() {
        setShowComment(false);
      },
      show: showComment,
      refetch: refetch
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NewPost/* default */.Z, {
      show: showNewPost,
      onClose: function onClose() {
        setShowNewPost(false);
      },
      quotePin: buzzItem
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_DonateModal, {
      show: showGift,
      onClose: function onClose() {
        setShowGift(false);
        setDonateAmount("");
        setDonateMessage("");
        setSelectedChain(chain);
      },
      isLegacy: (0,utils/* determineAddressInfo */.uY)(buzzItem.address) === 'p2pkh',
      userInfo: {
        avatar: (_currentUserInfoData$5 = currentUserInfoData.data) === null || _currentUserInfoData$5 === void 0 ? void 0 : _currentUserInfoData$5.avatar,
        name: (_currentUserInfoData$6 = currentUserInfoData.data) === null || _currentUserInfoData$6 === void 0 ? void 0 : _currentUserInfoData$6.name,
        metaid: (_currentUserInfoData$7 = currentUserInfoData.data) === null || _currentUserInfoData$7 === void 0 ? void 0 : _currentUserInfoData$7.metaid
      },
      balance: balance,
      chain: selectedChain,
      setChain: setSelectedChain,
      paying: paying,
      donateAmount: donateAmount,
      donateMessage: donateMessage,
      setDonateAmount: setDonateAmount,
      setDonateMessage: setDonateMessage,
      onDonate: handleDonate
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Unlock, {
      show: showUnlock && (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) !== 'purchased' && (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.status) !== 'mempool',
      onClose: function onClose() {
        setShowUnlock(false);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          flexDirection: 'column',
          padding: 20
        },
        children: [(accessControl === null || accessControl === void 0 || (_accessControl$data11 = accessControl.data) === null || _accessControl$data11 === void 0 || (_accessControl$data11 = _accessControl$data11.payCheck) === null || _accessControl$data11 === void 0 ? void 0 : _accessControl$data11.type) === 'mrc20' ? payMrc20 && /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
          size: 60,
          tick: payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.tick,
          metadata: payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.metadata
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: btc,
          alt: "",
          width: 60,
          height: 60
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Title, {
          level: 4,
          children: [accessControl === null || accessControl === void 0 || (_accessControl$data12 = accessControl.data) === null || _accessControl$data12 === void 0 || (_accessControl$data12 = _accessControl$data12.payCheck) === null || _accessControl$data12 === void 0 ? void 0 : _accessControl$data12.amount, " ", (accessControl === null || accessControl === void 0 || (_accessControl$data13 = accessControl.data) === null || _accessControl$data13 === void 0 || (_accessControl$data13 = _accessControl$data13.payCheck) === null || _accessControl$data13 === void 0 ? void 0 : _accessControl$data13.type) === 'mrc20' ? payMrc20 === null || payMrc20 === void 0 ? void 0 : payMrc20.tick : 'BTC']
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            width: '100%'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            variant: "filled",
            size: "large",
            color: "primary",
            block: true,
            onClick: function onClick() {
              setShowUnlock(false);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Cancel"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            size: "large",
            block: true,
            loading: unlocking,
            type: "primary",
            onClick: ( /*#__PURE__*/function () {
              var _ref11 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee12(e) {
                return regeneratorRuntime_default()().wrap(function _callee12$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      e.stopPropagation();
                      handlePay();
                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee12);
              }));
              return function (_x3) {
                return _ref11.apply(this, arguments);
              };
            }()),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Unlock"
            })
          })]
        })]
      })
    })]
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/index.tsx


/* harmony default export */ var Buzz = (function (_ref) {
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 20 : _ref$padding,
    _ref$reLoading = _ref.reLoading,
    reLoading = _ref$reLoading === void 0 ? false : _ref$reLoading,
    refetch = _ref.refetch,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
    handleClick = _ref.handleClick,
    _ref$donate = _ref.donate,
    donate = _ref$donate === void 0 ? [] : _ref$donate;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Details, {
    buzzItem: buzzItem,
    showActions: showActions,
    padding: padding,
    reLoading: reLoading,
    refetch: refetch,
    isForward: false,
    like: like,
    donate: donate,
    handleClick: handleClick
  });
});

/***/ }),

/***/ 79684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Comment; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(19391);
;// CONCATENATED MODULE: ./src/Components/UserInfo/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/UserInfo/index.tsx





/* harmony default export */ var UserInfo = (function (_ref) {
  var user = _ref.user;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "userInfo",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
      src: user.avater
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "desc",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "name",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          children: user.name
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "metaid",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
          type: "secondary",
          children: [" MetaID:", user.metaid.slice(0, 8)]
        })
      })]
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileImageOutlined.js + 1 modules
var FileImageOutlined = __webpack_require__(48155);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(86173);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
;// CONCATENATED MODULE: ./src/entities/comment.ts

var commentEntitySchema = {
  name: 'comment',
  nodeName: 'paycomment',
  path: '/protocols/paycomment',
  versions: [{
    version: 1,
    body: [{
      name: 'content',
      type: 'string'
    }, {
      name: 'contentType',
      type: 'string'
    }, {
      name: 'commentTo',
      type: 'string'
    }]
  }]
};
/* harmony default export */ var comment = ((/* unused pure expression or super */ null && (commentEntitySchema)));
var getCommentEntitySchemaWithCustomHost = function getCommentEntitySchemaWithCustomHost(host) {
  return objectSpread2_default()(objectSpread2_default()({}, commentEntitySchema), {}, {
    path: "".concat(host).concat(commentEntitySchema.path)
  });
};
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
;// CONCATENATED MODULE: ./src/Components/Comment/index.tsx

















var TextArea = input/* default */.Z.TextArea;
/* harmony default export */ var Comment = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    tweetId = _ref.tweetId,
    refetch = _ref.refetch;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    content = _useState2[0],
    setContent = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isAdding = _useState4[0],
    setIsAdding = _useState4[1];
  var queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
  var handleAddComment = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, finalBody, _showConf$host, createRes, _showConf$host2, Comment, _createRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
            return _context.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            setIsAdding(true);
            _context.prev = 7;
            finalBody = {
              content: content,
              contentType: 'text/plain',
              commentTo: tweetId
            };
            console.log('finalBody', finalBody);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!(chain === 'btc')) {
              _context.next = 24;
              break;
            }
            _context.next = 13;
            return btcConnector.inscribe({
              inscribeDataArray: [{
                operation: 'create',
                path: "".concat((_showConf$host = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host !== void 0 ? _showConf$host : '', "/protocols/paycomment"),
                body: JSON.stringify(finalBody),
                contentType: 'text/plain;utf-8',
                flag: config/* FLAG */.BZ
              }],
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee('comment_service_fee_amount', 'BTC'),
                network: config/* curNetwork */.eM
              }
            });
          case 13:
            createRes = _context.sent;
            console.log('create res for inscribe', createRes);
            if ((0,isNil/* default */.Z)(createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0])) {
              _context.next = 22;
              break;
            }
            _context.next = 18;
            return (0,utils/* sleep */._v)(500);
          case 18:
            refetch && refetch();
            message/* default */.ZP.success('comment successfully');
            setContent('');
            onClose();
          case 22:
            _context.next = 38;
            break;
          case 24:
            _context.next = 26;
            return mvcConnector.load(getCommentEntitySchemaWithCustomHost((_showConf$host2 = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host2 !== void 0 ? _showConf$host2 : ''));
          case 26:
            Comment = _context.sent;
            _context.next = 29;
            return Comment.create({
              data: {
                body: JSON.stringify(finalBody)
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'create comment',
                service: fetchServiceFee('comment_service_fee_amount', 'MVC'),
                feeRate: Number(mvcFeeRate)
              }
            });
          case 29:
            _createRes = _context.sent;
            console.log('create res for inscribe', _createRes);
            if ((0,isNil/* default */.Z)(_createRes === null || _createRes === void 0 ? void 0 : _createRes.txid)) {
              _context.next = 38;
              break;
            }
            _context.next = 34;
            return (0,utils/* sleep */._v)(500);
          case 34:
            refetch && refetch();
            message/* default */.ZP.success('comment successfully');
            setContent('');
            onClose();
          case 38:
            _context.next = 47;
            break;
          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](7);
            console.log('error', _context.t0);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            setIsAdding(false);
          case 47:
            setIsAdding(false);
          case 48:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 40]]);
    }));
    return function handleAddComment() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
    onClose: onClose,
    show: show,
    modalWidth: 600,
    closable: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserInfo, {
        user: user
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
        rows: 6,
        placeholder: (0,utils/* formatMessage */.wv)('Post your reply'),
        style: {
          marginTop: 24
        },
        value: content,
        onChange: function onChange(e) {
          setContent(e.target.value);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            disabled: true,
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileImageOutlined/* default */.Z, {
              style: {
                color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
              }
            }),
            type: "text"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          shape: "round",
          loading: isAdding,
          onClick: handleAddComment,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
            wrapper: true,
            children: "Comment"
          })
        })]
      })]
    })
  });
});

/***/ }),

/***/ 4447:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: function() { return /* binding */ FollowButtonComponent; },
  _: function() { return /* binding */ FollowIconComponent; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
;// CONCATENATED MODULE: ./src/entities/follow.ts

var followEntitySchema = {
  name: "follow",
  nodeName: "follow",
  path: "/follow",
  versions: [{
    version: 1,
    body: [{
      name: "metaid",
      type: "string"
    }]
  }]
};
/* harmony default export */ var follow = (followEntitySchema);
var getFollowEntitySchemaWithCustomHost = function getFollowEntitySchemaWithCustomHost(host) {
  return objectSpread2_default()(objectSpread2_default()({}, followEntitySchema), {}, {
    path: "".concat(host).concat(followEntitySchema.path)
  });
};
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(24573);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(4692);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PlusCircleFilled.js + 1 modules
var PlusCircleFilled = __webpack_require__(37769);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Follow/index.tsx















// Higher-order component to provide follow logic
var withFollow = function withFollow(WrappedComponent) {
  return function FollowComponent(props) {
    var metaid = props.metaid;
    var _useModel = (0,_umi_production_exports.useModel)('user'),
      followList = _useModel.followList,
      chain = _useModel.chain,
      btcConnector = _useModel.btcConnector,
      mvcConnector = _useModel.mvcConnector,
      user = _useModel.user,
      feeRate = _useModel.feeRate,
      mvcFeeRate = _useModel.mvcFeeRate,
      setFollowList = _useModel.setFollowList,
      fetchUserFollowingList = _useModel.fetchUserFollowingList,
      checkUserSetting = _useModel.checkUserSetting,
      isLogin = _useModel.isLogin;
    var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
      fetchServiceFee = _useModel2.fetchServiceFee,
      showConf = _useModel2.showConf;
    var _useState = (0,react.useState)(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];
    var followItem = (0,react.useMemo)(function () {
      return followList.find(function (item) {
        return item.metaid === metaid;
      });
    }, [followList, metaid]);
    var isFollowing = (0,react.useMemo)(function () {
      return followItem ? true : false;
    }, [followItem]);
    var handelFollow = /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var followRes, Follow, res, _message, errorMessage, toastMessage;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              if (!(chain === 'btc')) {
                _context.next = 14;
                break;
              }
              _context.next = 5;
              return btcConnector.inscribe({
                inscribeDataArray: [{
                  operation: 'create',
                  path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/follow"),
                  body: metaid,
                  contentType: 'text/plain;utf-8',
                  flag: config/* FLAG */.BZ
                }],
                options: {
                  noBroadcast: 'no',
                  feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                  service: fetchServiceFee('follow_service_fee_amount', 'BTC')
                }
              });
            case 5:
              followRes = _context.sent;
              if ((0,isNil/* default */.Z)(followRes === null || followRes === void 0 ? void 0 : followRes.revealTxIds[0])) {
                _context.next = 12;
                break;
              }
              _context.next = 9;
              return (0,utils/* sleep */._v)(5000);
            case 9:
              _context.next = 11;
              return fetchUserFollowingList();
            case 11:
              message/* default */.ZP.success('Follow successfully! Please wait for the transaction to be confirmed!');
            case 12:
              _context.next = 28;
              break;
            case 14:
              _context.next = 16;
              return mvcConnector.load(getFollowEntitySchemaWithCustomHost((showConf === null || showConf === void 0 ? void 0 : showConf.host) || ''));
            case 16:
              Follow = _context.sent;
              console.log('Follow', config/* curNetwork */.eM);
              _context.next = 20;
              return Follow.create({
                data: {
                  body: metaid
                },
                options: {
                  network: config/* curNetwork */.eM,
                  signMessage: 'Follow user',
                  service: fetchServiceFee('follow_service_fee_amount', 'MVC'),
                  feeRate: Number(mvcFeeRate)
                }
              });
            case 20:
              res = _context.sent;
              console.log('create res for inscribe', res);
              if ((0,isNil/* default */.Z)(res === null || res === void 0 ? void 0 : res.txid)) {
                _context.next = 28;
                break;
              }
              _context.next = 25;
              return (0,utils/* sleep */._v)(5000);
            case 25:
              _context.next = 27;
              return fetchUserFollowingList();
            case 27:
              message/* default */.ZP.success('Follow successfully! Please wait for the transaction to be confirmed!');
            case 28:
              _context.next = 36;
              break;
            case 30:
              _context.prev = 30;
              _context.t0 = _context["catch"](1);
              console.log('error', _context.t0);
              errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
              toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
              message/* default */.ZP.error(toastMessage);
            case 36:
              setLoading(false);
            case 37:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 30]]);
      }));
      return function handelFollow() {
        return _ref.apply(this, arguments);
      };
    }();
    var handleUnfollow = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
        var followDetailData, unfollowRes, Follow, res, _message2, errorMessage, toastMessage;
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              _context2.prev = 1;
              _context2.next = 4;
              return (0,api/* fetchFollowDetailPin */.cF)({
                metaId: metaid,
                followerMetaId: user.metaid
              });
            case 4:
              followDetailData = _context2.sent;
              if (!(chain === 'btc')) {
                _context2.next = 17;
                break;
              }
              _context2.next = 8;
              return btcConnector.inscribe({
                inscribeDataArray: [{
                  operation: 'revoke',
                  path: "@".concat(followDetailData.followPinId),
                  contentType: 'text/plain;utf-8',
                  flag: config/* FLAG */.BZ
                }],
                options: {
                  noBroadcast: 'no',
                  feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                  service: fetchServiceFee('follow_service_fee_amount')
                  // service: {
                  //     address: getServiceAddress(),
                  //     satoshis: environment.service_satoshi,
                  // },
                  // network: environment.network,
                }
              });
            case 8:
              unfollowRes = _context2.sent;
              if ((0,isNil/* default */.Z)(unfollowRes === null || unfollowRes === void 0 ? void 0 : unfollowRes.revealTxIds[0])) {
                _context2.next = 15;
                break;
              }
              _context2.next = 12;
              return (0,utils/* sleep */._v)(5000);
            case 12:
              _context2.next = 14;
              return fetchUserFollowingList();
            case 14:
              // await sleep(5000);
              message/* default */.ZP.success('Unfollow successful! Please wait for the transaction to be confirmed.');
            case 15:
              _context2.next = 29;
              break;
            case 17:
              _context2.next = 19;
              return mvcConnector.load(follow);
            case 19:
              Follow = _context2.sent;
              _context2.next = 22;
              return Follow.create({
                data: {
                  // @ts-ignore
                  path: "@".concat(followDetailData.followPinId),
                  contentType: 'text/plain;utf-8',
                  operation: 'revoke'
                },
                options: {
                  network: config/* curNetwork */.eM,
                  signMessage: 'Unfollow user',
                  service: fetchServiceFee('follow_service_fee_amount', 'MVC'),
                  feeRate: Number(mvcFeeRate)
                }
              });
            case 22:
              res = _context2.sent;
              if ((0,isNil/* default */.Z)(res === null || res === void 0 ? void 0 : res.txid)) {
                _context2.next = 29;
                break;
              }
              _context2.next = 26;
              return (0,utils/* sleep */._v)(5000);
            case 26:
              _context2.next = 28;
              return fetchUserFollowingList();
            case 28:
              // await sleep(5000);
              message/* default */.ZP.success('Unfollow successful! Please wait for the transaction to be confirmed.');
            case 29:
              _context2.next = 37;
              break;
            case 31:
              _context2.prev = 31;
              _context2.t0 = _context2["catch"](1);
              console.log('error', _context2.t0);
              errorMessage = (_message2 = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _message2 !== void 0 ? _message2 : _context2.t0;
              toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
              message/* default */.ZP.error(toastMessage);
            case 37:
              setLoading(false);
            case 38:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 31]]);
      }));
      return function handleUnfollow() {
        return _ref2.apply(this, arguments);
      };
    }();
    var handleFollowToggle = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
        var isPass;
        return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (isLogin) {
                _context3.next = 3;
                break;
              }
              message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
              return _context3.abrupt("return");
            case 3:
              isPass = checkUserSetting();
              if (isPass) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");
            case 6:
              if (isFollowing) {
                _context3.next = 11;
                break;
              }
              _context3.next = 9;
              return handelFollow();
            case 9:
              _context3.next = 13;
              break;
            case 11:
              _context3.next = 13;
              return handleUnfollow();
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function handleFollowToggle() {
        return _ref3.apply(this, arguments);
      };
    }();

    // Pass the follow state and toggle function to the wrapped component

    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: metaid === (user === null || user === void 0 ? void 0 : user.metaid) ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(WrappedComponent, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
        isFollowing: isFollowing,
        onFollowToggle: handleFollowToggle,
        loading: loading,
        mempool: followItem && Boolean(followItem.mempool) || false
      }))
    });
  };
};
var FollowIcon = function FollowIcon(_ref4) {
  var isFollowing = _ref4.isFollowing,
    onFollowToggle = _ref4.onFollowToggle,
    loading = _ref4.loading,
    mempool = _ref4.mempool;
  var _useModel3 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel3.showConf;
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorBgBase = _theme$useToken.token.colorBgBase;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    onClick: function onClick(e) {
      e.preventDefault();
      onFollowToggle && onFollowToggle();
    },
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      background: colorBgBase,
      borderRadius: '50%',
      border: "1px solid ".concat(colorBgBase),
      boxSizing: 'border-box',
      width: 17,
      height: 17,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    children: loading || mempool ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {
      style: {
        color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
      },
      size: 16
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: isFollowing ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleFilled/* default */.Z, {
        size: 16,
        style: {
          color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
        }
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(PlusCircleFilled/* default */.Z, {
        size: 16,
        style: {
          color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
        }
      })
    })
  });
};
var FollowButtonIcon = function FollowButtonIcon(_ref5) {
  var isFollowing = _ref5.isFollowing,
    onFollowToggle = _ref5.onFollowToggle,
    loading = _ref5.loading,
    mempool = _ref5.mempool,
    _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? 'middle' : _ref5$size;
  var _useModel4 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel4.showConf;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
    onClick: function onClick(e) {
      e.preventDefault();
      onFollowToggle && onFollowToggle();
    },
    style: {
      color: showConf === null || showConf === void 0 ? void 0 : showConf.colorButton,
      background: showConf === null || showConf === void 0 ? void 0 : showConf.gradientColor
    },
    loading: loading || mempool,
    shape: "round",
    size: size,
    children: isFollowing ? 'Unfollow' : 'Follow'
  });
};
var FollowIconComponent = withFollow(FollowIcon);
var FollowButtonComponent = withFollow(FollowButtonIcon);


/***/ }),

/***/ 97691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78488);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83734);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81581);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52676);






/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 40 : _ref$size,
    tick = _ref.tick,
    _ref$metadata = _ref.metadata,
    metadata = _ref$metadata === void 0 ? '' : _ref$metadata;
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_3__.useModel)('dashboard'),
    showConf = _useModel.showConf;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    err = _useState2[0],
    setErr = _useState2[1];
  var src = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (metadata && !err) {
      try {
        var data = JSON.parse(metadata);
        if (data.icon) {
          return data.icon.replace('metafile://', "https://man".concat(_config__WEBPACK_IMPORTED_MODULE_1__/* .curNetwork */ .eM === 'testnet' ? '-test' : '', ".metaid.io/content/"));
        }
        if (data.cover) {
          return data.cover.replace('metafile://', "https://man".concat(_config__WEBPACK_IMPORTED_MODULE_1__/* .curNetwork */ .eM === 'testnet' ? '-test' : '', ".metaid.io/content/"));
        }
      } catch (err) {
        return '';
      }
    }
    return '';
  }, [metadata, err]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    src: src ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
      src: src,
      onError: function onError() {
        setErr(true);
      }
    }) : null,
    style: {
      background: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: size * 16 / 40,
      minWidth: size
    },
    size: size,
    children: tick && tick[0].toUpperCase()
  });
});

/***/ }),

/***/ 94436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62319);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19391);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86821);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9588);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79063);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57777);
/* harmony import */ var _assets_btc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33401);
/* harmony import */ var _assets_mvc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61133);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52676);







/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var chainNet = _ref.chainNet,
    setChainNet = _ref.setChainNet;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      span: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Text, {
        strong: true,
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          children: "Select Network"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      span: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          md: 12,
          xs: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            onClick: function onClick() {
              setChainNet('btc');
            },
            style: {
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            block: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_1__,
                style: {
                  height: 40,
                  width: 40
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Text, {
                children: "BTC Network"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
              checked: chainNet === 'btc'
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
          md: 12,
          xs: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
            onClick: function onClick() {
              setChainNet('mvc');
            },
            style: {
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            },
            block: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: _assets_mvc_png__WEBPACK_IMPORTED_MODULE_2__,
                style: {
                  height: 40,
                  width: 40
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: 'column',
                  gap: 4
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.Text, {
                  children: "MicrovisonChain"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                  style: {
                    fontSize: 8,
                    width: 80,
                    lineHeight: 1.2,
                    textAlign: 'center'
                  },
                  color: "orange",
                  bordered: false,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
                    children: "Bitcoin Sidechain"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
              checked: chainNet === 'mvc'
            })]
          })
        })]
      })
    })]
  });
});

/***/ }),

/***/ 84275:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ NewPost; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(335);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(81581);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/upload/index.js + 11 modules
var upload = __webpack_require__(39916);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(86821);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(62319);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(19391);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(60541);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input-number/index.js + 2 modules
var input_number = __webpack_require__(18105);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/checkbox/index.js + 3 modules
var es_checkbox = __webpack_require__(42657);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/result/index.js + 4 modules
var result = __webpack_require__(15025);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UnlockOutlined.js + 1 modules
var UnlockOutlined = __webpack_require__(73646);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LockOutlined.js + 1 modules
var LockOutlined = __webpack_require__(31103);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(14258);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(24573);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(20860);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(66118);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileImageOutlined.js + 1 modules
var FileImageOutlined = __webpack_require__(48155);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/VideoCameraOutlined.js + 1 modules
var VideoCameraOutlined = __webpack_require__(85347);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/utils/file.ts
var file = __webpack_require__(99915);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(86173);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 11 modules
var Buzz = __webpack_require__(71366);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var utils_buzz = __webpack_require__(518);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(55576);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(47151);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/collapse/index.js + 3 modules
var collapse = __webpack_require__(8546);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(3642);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/NFTModal/index.tsx

















/* harmony default export */ var NFTModal = (function (_ref) {
  var onClose = _ref.onClose,
    show = _ref.show,
    nfts = _ref.nfts,
    setNFTs = _ref.setNFTs;
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary,
    colorPrimary = _theme$useToken$token.colorPrimary;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    chain = _useModel.chain,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector;
  var _useState = (0,react.useState)(chain),
    _useState2 = slicedToArray_default()(_useState, 2),
    chainNetwork = _useState2[0],
    setChainNetwork = _useState2[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['nfts', chainNetwork],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var _collections$data;
          var address, collections, userNFTs, _iterator, _step, collection, _nfts;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                address = chainNetwork === 'btc' ? btcConnector.address : mvcConnector.address;
                _context.next = 3;
                return (0,api/* getUserNFTCollections */.SW)({
                  address: address,
                  cousor: 0,
                  size: 100
                });
              case 3:
                collections = _context.sent;
                userNFTs = [];
                if (!((_collections$data = collections.data) !== null && _collections$data !== void 0 && _collections$data.list)) {
                  _context.next = 25;
                  break;
                }
                _iterator = createForOfIteratorHelper_default()(collections.data.list);
                _context.prev = 7;
                _iterator.s();
              case 9:
                if ((_step = _iterator.n()).done) {
                  _context.next = 17;
                  break;
                }
                collection = _step.value;
                _context.next = 13;
                return (0,api/* getUserNFTCollectionItems */.G1)({
                  address: address,
                  cousor: 0,
                  size: 100,
                  pinId: collection.pinid
                });
              case 13:
                _nfts = _context.sent;
                userNFTs.push(objectSpread2_default()(objectSpread2_default()({}, collection), {}, {
                  items: _nfts.data.list.map(function (nft) {
                    try {
                      var img = JSON.parse(atob(nft.content)).attachment[0].content;
                      return objectSpread2_default()(objectSpread2_default()({}, nft), {}, {
                        previewImage: "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(img.replace('metafile://', ''))
                      });
                    } catch (e) {
                      return nft;
                    }
                  })
                }));
              case 15:
                _context.next = 9;
                break;
              case 17:
                _context.next = 22;
                break;
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](7);
                _iterator.e(_context.t0);
              case 22:
                _context.prev = 22;
                _iterator.f();
                return _context.finish(22);
              case 25:
                return _context.abrupt("return", userNFTs);
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[7, 19, 22, 25]]);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    isLoading = _useQuery.isLoading,
    isFetching = _useQuery.isFetching,
    data = _useQuery.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: onClose,
    show: show,
    modalWidth: 640,
    closable: true,
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "My NFT"
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
      options: [{
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "Bitcoin"
        }),
        value: 'btc'
      }, {
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "MVC"
        }),
        value: 'mvc'
      }],
      value: chainNetwork,
      onChange: function onChange(value) {
        setChainNetwork(value);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
      theme: {
        components: {
          Collapse: {
            headerBg: 'transparent',
            colorBorder: colorBorderSecondary
          }
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
        spinning: isLoading || isFetching,
        children: [!isLoading && (data !== null && data !== void 0 ? data : []).length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
          direction: "vertical",
          style: {
            width: '100%',
            marginTop: 20
          },
          children: (data !== null && data !== void 0 ? data : []).map(function (item) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
              style: {
                width: '100%'
              },
              defaultActiveKey: ['1'],
              expandIconPosition: "end",
              items: [{
                key: '1',
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  children: item.name
                }),
                styles: {
                  body: {
                    borderTop: '0px solid transparent'
                  }
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 20
                  },
                  children: item.items.map(function (nft) {
                    var _find = nfts.find(function (_nft) {
                      return _nft.itemPinId === nft.itemPinId;
                    });
                    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      style: {
                        position: 'relative',
                        cursor: 'pointer',
                        borderRadius: 8,
                        border: _find ? "1px solid ".concat(colorPrimary) : 'none',
                        overflow: 'hidden'
                      },
                      onClick: function onClick(item) {
                        if (!_find && nfts.length >= 2) {
                          message/* default */.ZP.error(formatMessage({
                            id: 'You can only select 2 NFTs'
                          }));
                          return;
                        }
                        setNFTs(!_find ? [].concat(toConsumableArray_default()(nfts), [nft]) : nfts.filter(function (_nft) {
                          return _nft.itemPinId !== nft.itemPinId;
                        }));
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                        size: "small",
                        style: {
                          position: 'absolute',
                          top: 4,
                          right: 4
                        },
                        variant: "filled",
                        color: "primary",
                        shape: "circle",
                        icon: _find ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckOutlined/* default */.Z, {}) : ''
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                        src: nft.previewImage,
                        alt: nft.name,
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }
                      })]
                    }, nft.itemPinId);
                  })
                })
              }]
            }, item.pinid);
          })
        })]
      })
    })]
  });
});
// EXTERNAL MODULE: ./src/Components/NewPost/SelectChain.tsx
var SelectChain = __webpack_require__(94436);
;// CONCATENATED MODULE: ./src/entities/buzz.ts

var buzzSchema = {
  name: "buzz",
  nodeName: "simplebuzz",
  path: "/protocols/simplebuzz",
  versions: [{
    version: 1,
    body: [{
      name: "content",
      type: "string"
    }, {
      name: "contentType",
      type: "string"
    }, {
      name: "quotePin",
      type: "string"
    }, {
      name: "attachments",
      type: "array"
    }]
  }]
};
/* harmony default export */ var buzz = ((/* unused pure expression or super */ null && (buzzSchema)));
var getBuzzSchemaWithCustomHost = function getBuzzSchemaWithCustomHost(host) {
  return objectSpread2_default()(objectSpread2_default()({}, buzzSchema), {}, {
    path: "".concat(host).concat(buzzSchema.path)
  });
};
// EXTERNAL MODULE: ./node_modules/.pnpm/idb@8.0.3/node_modules/idb/build/index.js
var build = __webpack_require__(22113);
;// CONCATENATED MODULE: ./src/utils/idb.ts



var DB_NAME = 'PostDraftDB';
var STORE_NAME = 'draft_files';
var dbPromise;
function getDB() {
  return _getDB.apply(this, arguments);
} // 批量保存上传项
function _getDB() {
  _getDB = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!dbPromise) {
            dbPromise = (0,build/* openDB */.X3)(DB_NAME, 1, {
              upgrade: function upgrade(db) {
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                  db.createObjectStore(STORE_NAME, {
                    keyPath: 'id'
                  });
                }
              }
            });
          }
          return _context.abrupt("return", dbPromise);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getDB.apply(this, arguments);
}
function saveUploadItemsToDraft(_x) {
  return _saveUploadItemsToDraft.apply(this, arguments);
}

// 获取所有文件
function _saveUploadItemsToDraft() {
  _saveUploadItemsToDraft = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(fileItems) {
    var db, tx;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!Array.isArray(fileItems) || fileItems.length === 0)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return");
        case 2:
          _context2.next = 4;
          return getDB();
        case 4:
          db = _context2.sent;
          tx = db.transaction(STORE_NAME, 'readwrite');
          fileItems.forEach(function (fileItem) {
            console.log('fileItem', fileItem);
            if (fileItem.file && fileItem.uid) {
              tx.store.put({
                id: fileItem.uid,
                file: fileItem.file,
                createdAt: Date.now()
              });
            }
          });
          _context2.next = 9;
          return tx.done;
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _saveUploadItemsToDraft.apply(this, arguments);
}
function getUploadDraftList() {
  return _getUploadDraftList.apply(this, arguments);
}

// 删除单个文件
function _getUploadDraftList() {
  _getUploadDraftList = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
    var db, all;
    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getDB();
        case 2:
          db = _context3.sent;
          _context3.next = 5;
          return db.getAll(STORE_NAME);
        case 5:
          all = _context3.sent;
          return _context3.abrupt("return", all.map(function (item) {
            return {
              uid: item.id,
              file: item.file,
              previewUrl: URL.createObjectURL(item.file),
              createdAt: item.createdAt
            };
          }));
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getUploadDraftList.apply(this, arguments);
}
function deleteDraftFile(_x2) {
  return _deleteDraftFile.apply(this, arguments);
}

// 清空所有
function _deleteDraftFile() {
  _deleteDraftFile = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(uid) {
    var db;
    return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return getDB();
        case 2:
          db = _context4.sent;
          _context4.next = 5;
          return db["delete"](STORE_NAME, uid);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _deleteDraftFile.apply(this, arguments);
}
function clearDraftFiles() {
  return _clearDraftFiles.apply(this, arguments);
}
function _clearDraftFiles() {
  _clearDraftFiles = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
    var db;
    return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return getDB();
        case 2:
          db = _context5.sent;
          _context5.next = 5;
          return db.clear(STORE_NAME);
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _clearDraftFiles.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/Components/MRC20Icon/index.tsx
var MRC20Icon = __webpack_require__(97691);
;// CONCATENATED MODULE: ./src/Components/NewPost/index.tsx
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];






























var TextArea = input/* default */.Z.TextArea;
var getBase64 = function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};
/* harmony default export */ var NewPost = (function (_ref) {
  var _IdCoin$deployerUserI;
  var show = _ref.show,
    onClose = _ref.onClose,
    quotePin = _ref.quotePin;
  var isQuoted = !(0,isNil/* default */.Z)(quotePin);
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin,
    setMockBuzz = _useModel.setMockBuzz;
  var _useState = (0,react.useState)(chain),
    _useState2 = slicedToArray_default()(_useState, 2),
    chainNet = _useState2[0],
    setChainNet = _useState2[1];
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee,
    manPubKey = _useModel2.manPubKey,
    admin = _useModel2.admin;
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    images = _useState4[0],
    setImages = _useState4[1];
  var _useState5 = (0,react.useState)(),
    _useState6 = slicedToArray_default()(_useState5, 2),
    video = _useState6[0],
    _setVideo = _useState6[1];
  var _useState7 = (0,react.useState)(localStorage.getItem('tmp_content') || ''),
    _useState8 = slicedToArray_default()(_useState7, 2),
    content = _useState8[0],
    _setContent = _useState8[1];
  var _useState9 = (0,react.useState)(''),
    _useState10 = slicedToArray_default()(_useState9, 2),
    encryptContent = _useState10[0],
    setEncryptContent = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    isAdding = _useState12[0],
    setIsAdding = _useState12[1];
  var queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
  var _useState13 = (0,react.useState)(false),
    _useState14 = slicedToArray_default()(_useState13, 2),
    lock = _useState14[0],
    setLock = _useState14[1];
  var _useState15 = (0,react.useState)('mrc20'),
    _useState16 = slicedToArray_default()(_useState15, 2),
    payType = _useState16[0],
    setPayType = _useState16[1];
  var _useState17 = (0,react.useState)(0.00001),
    _useState18 = slicedToArray_default()(_useState17, 2),
    payAmount = _useState18[0],
    setPayAmount = _useState18[1];
  var _useState19 = (0,react.useState)(1),
    _useState20 = slicedToArray_default()(_useState19, 2),
    payMrc20Amount = _useState20[0],
    setPayMrc20Amount = _useState20[1];
  var _useState21 = (0,react.useState)(''),
    _useState22 = slicedToArray_default()(_useState21, 2),
    holdTokenID = _useState22[0],
    setHoldTokenID = _useState22[1];
  var _useState23 = (0,react.useState)(),
    _useState24 = slicedToArray_default()(_useState23, 2),
    mrc20 = _useState24[0],
    setMrc20 = _useState24[1];
  var _useState25 = (0,react.useState)(''),
    _useState26 = slicedToArray_default()(_useState25, 2),
    checkTokenID = _useState26[0],
    setCheckTokenID = _useState26[1];
  var _useState27 = (0,react.useState)([]),
    _useState28 = slicedToArray_default()(_useState27, 2),
    encryptFiles = _useState28[0],
    setEncryptFiles = _useState28[1];
  var _useState29 = (0,react.useState)(false),
    _useState30 = slicedToArray_default()(_useState29, 2),
    showNFTModal = _useState30[0],
    setShowNFTModal = _useState30[1];
  var _useState31 = (0,react.useState)([]),
    _useState32 = slicedToArray_default()(_useState31, 2),
    nfts = _useState32[0],
    setNFTs = _useState32[1];

  // const setImages = (images: any[]) => {
  //     images ? localStorage.setItem('tmp_images', JSON.stringify(images)) : localStorage.removeItem('tmp_images');
  //     _setImages(images);
  // }

  var setContent = function setContent(content) {
    localStorage.setItem('tmp_content', content);
    _setContent(content);
  };
  var setVideo = function setVideo(video) {
    // video ? localStorage.setItem('tmp_video', JSON.stringify(video)) : localStorage.removeItem('tmp_video');
    _setVideo(video);
  };
  var handleBeforeUpload = function handleBeforeUpload(file) {
    var isImage = file.type.startsWith('image/');
    if (!isImage) {
      message/* default */.ZP.error('You can only upload image file!');
      return upload/* default */.Z.LIST_IGNORE;
    }
    var _checkImageSize = (0,utils/* checkImageSize */.O3)(file),
      _checkImageSize2 = slicedToArray_default()(_checkImageSize, 2),
      check = _checkImageSize2[0],
      msg = _checkImageSize2[1];
    if (!check) {
      message/* default */.ZP.error(msg);
      return upload/* default */.Z.LIST_IGNORE;
    }
    var previewUrl = URL.createObjectURL(file);
    setImages(function (prevImages) {
      return [].concat(toConsumableArray_default()(prevImages), [{
        file: file,
        previewUrl: previewUrl
      }]);
    });
    saveUploadItemsToDraft([].concat(toConsumableArray_default()(images), [{
      file: file,
      previewUrl: previewUrl
    }]).map(function (item) {
      return {
        uid: item.file.uid,
        file: item.file,
        previewUrl: item.previewUrl
      };
    }));
    return false;
  };
  var reset = function reset() {
    setContent('');
    setImages([]);
    setVideo(undefined);
    setEncryptContent('');
    setEncryptFiles([]);
    setNFTs([]);
    setLock(false);
    clearDraftFiles();
  };
  var handleVideoBeforeUpload = function handleVideoBeforeUpload(file) {
    var isVideo = file.type.startsWith('video/');
    if (!isVideo) {
      message/* default */.ZP.error('You can only upload video file!');
      return upload/* default */.Z.LIST_IGNORE;
    }
    if (file.size > 1024 * 1024 * 3) {
      message/* default */.ZP.error('The video size must be less than 3MB');
      return upload/* default */.Z.LIST_IGNORE;
    }
    var previewUrl = URL.createObjectURL(file);
    setVideo({
      file: file,
      previewUrl: previewUrl
    });
    return false;
  };
  var handleRemoveImage = function handleRemoveImage(index) {
    var _image$file;
    var image = images[index];
    setImages(function (prevImages) {
      return prevImages.filter(function (_, i) {
        return i !== index;
      });
    });
    deleteDraftFile(image.uid || ((_image$file = image.file) === null || _image$file === void 0 ? void 0 : _image$file.uid));
  };
  var handleRemoveVideo = function handleRemoveVideo() {
    setVideo(undefined);
  };
  var onCreateSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, _images;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
            return _context.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            setIsAdding(true);
            if (!(images.length !== 0)) {
              _context.next = 13;
              break;
            }
            _context.next = 10;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(images));
          case 10:
            _context.t0 = _context.sent;
            _context.next = 14;
            break;
          case 13:
            _context.t0 = [];
          case 14:
            _images = _context.t0;
            if (!lock) {
              _context.next = 19;
              break;
            }
            handleAddBuzzWhthLock();
            _context.next = 21;
            break;
          case 19:
            _context.next = 21;
            return handleAddBuzz({
              content: content,
              images: _images
            });
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onCreateSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['idCoin', user],
      enabled: Boolean(user && show),
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
          var address, ret, userInfo;
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return window.metaidwallet.btc.getAddress();
              case 2:
                address = _context2.sent;
                _context2.next = 5;
                return (0,api/* getDeployList */.By)({
                  address: address,
                  tickType: 'idcoins'
                });
              case 5:
                ret = _context2.sent;
                if (!(ret.data.length > 0)) {
                  _context2.next = 11;
                  break;
                }
                _context2.next = 9;
                return (0,api/* getUserInfo */.bG)({
                  address: address
                });
              case 9:
                userInfo = _context2.sent;
                return _context2.abrupt("return", objectSpread2_default()(objectSpread2_default()({}, ret.data[0]), {}, {
                  deployerUserInfo: userInfo
                }));
              case 11:
                return _context2.abrupt("return", undefined);
              case 12:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    isLoading = _useQuery.isLoading,
    IdCoin = _useQuery.data;
  var handleAddBuzz = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(buzz) {
      var buzzEntity, fileTransactions, TxMap, finalBody, _yield$postVideo, metafile, transactions, fileOptions, _iterator, _step, image, fileEntity, imageRes, _fileEntity, finalAttachMetafileUri, i, fileOption, _yield$_fileEntity$cr, _transactions, createRes, _showConf$host, _createRes2, _buzzEntity, _createRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setIsAdding(true);
            _context3.next = 3;
            return btcConnector.use('buzz');
          case 3:
            buzzEntity = _context3.sent;
            fileTransactions = [];
            TxMap = new Map();
            _context3.prev = 6;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            finalBody = {
              content: buzz.content,
              contentType: 'text/plain'
            };
            if (!(video && chainNet === 'mvc')) {
              _context3.next = 16;
              break;
            }
            _context3.next = 11;
            return (0,utils_buzz/* postVideo */.At)(video.file, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', chainNet, btcConnector, mvcConnector, mvcFeeRate);
          case 11:
            _yield$postVideo = _context3.sent;
            metafile = _yield$postVideo.metafile;
            transactions = _yield$postVideo.transactions;
            fileTransactions = transactions;
            finalBody.attachments = [metafile];
            // let chunkTransactions: MvcTransaction[] = [];

            // const chunkSize = 1024 * 1024 * 0.2
            // const { chunks, chunkNumber, sha256, fileSize, dataType, name } = await processFile(video.file, chunkSize);
            // let chunkPids: string[] = [];
            // const chunkList = []
            // for (let i = 0; i < chunks.length; i++) {
            //     const { chunk, hash } = chunks[i];
            //     const metaidData: InscribeData = {
            //         operation: "create",
            //         body: chunk,
            //         path: `${showConf?.host || ''}/file/chunk/${hash}`,
            //         contentType: "metafile/chunk;binary",
            //         encoding: "base64",
            //         flag: "metaid",
            //     };
            //     if (chain === 'btc') {
            //         // todo
            //     } else {
            //         const serialAction = (i + 1) % 2 === 0 ? 'finish' : "combo";
            //         const { transactions, txid } = await mvcConnector!.createPin(
            //             metaidData,
            //             {
            //                 network: curNetwork,
            //                 signMessage: "file chunk",
            //                 serialAction: serialAction,
            //                 transactions: chunkTransactions,
            //             }
            //         );
            //         if (txid) {
            //             TxMap.set(hash, txid)
            //         }
            //         if (transactions) {
            //             transactions.forEach(tx => {
            //                 if (!TxMap.has(hash)) {
            //                     TxMap.set(hash, tx)
            //                 }
            //             })
            //         }

            //         // chunkList.push({
            //         //     sha256: hash,
            //         //     pinId: txid ? `${txid}i0` : transactions![transactions!.length - 1].txComposer.getTxId() + 'i0'
            //         // })
            //         chunkTransactions = transactions as MvcTransaction[];
            //     }
            // }
            // console.log('chunkPids', chunkPids);
            // const metaidData: InscribeData = {
            //     operation: "create",
            //     body: JSON.stringify({
            //         chunkList:chunks.map(({hash, chunk}) => ({
            //             sha256: hash,
            //             pinId: typeof TxMap.get(hash) === 'string' ? TxMap.get(hash)+'i0' : (TxMap.get(hash) as MvcTransaction).txComposer.getTxId() + 'i0'
            //         })),
            //         fileSize,
            //         chunkSize,
            //         dataType,
            //         name,
            //         chunkNumber,
            //         sha256,
            //     }),
            //     path: `${showConf?.host || ''}/file/index/${uuidv4()}`,
            //     contentType: "metafile/index;utf-8",
            //     flag: "metaid",
            // };

            // console.log('metaidData', metaidData);
            // const { transactions: pinTransations } = await mvcConnector!.createPin(
            //     metaidData,
            //     {
            //         network: curNetwork,
            //         signMessage: "file index",
            //         serialAction: "combo",
            //         transactions: [...chunkTransactions],
            //     }
            // );
            // fileTransactions = pinTransations as MvcTransaction[];
            // finalBody.attachments = [...finalBody.attachments || [], 'metafile://video/' + fileTransactions[fileTransactions.length - 1].txComposer.getTxId() + 'i0']
          case 16:
            if ((0,isEmpty/* default */.Z)(buzz.images)) {
              _context3.next = 50;
              break;
            }
            fileOptions = [];
            _iterator = createForOfIteratorHelper_default()(buzz.images);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                image = _step.value;
                fileOptions.push({
                  body: Buffer.from(image.data, 'hex').toString('base64'),
                  contentType: "".concat(image.fileType, ";binary"),
                  encoding: 'base64',
                  flag: config/* FLAG */.BZ,
                  path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/file")
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (!(chainNet === 'btc')) {
              _context3.next = 31;
              break;
            }
            _context3.next = 23;
            return btcConnector.use('file');
          case 23:
            fileEntity = _context3.sent;
            _context3.next = 26;
            return fileEntity.create({
              dataArray: fileOptions,
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate))
              }
            });
          case 26:
            imageRes = _context3.sent;
            console.log('imageRes', imageRes);
            finalBody.attachments = [].concat(toConsumableArray_default()(finalBody.attachments || []), toConsumableArray_default()(imageRes.revealTxIds.map(function (rid) {
              return 'metafile://' + rid + 'i0';
            })));
            _context3.next = 50;
            break;
          case 31:
            _context3.next = 33;
            return mvcConnector.use('file');
          case 33:
            _fileEntity = _context3.sent;
            finalAttachMetafileUri = [];
            i = 0;
          case 36:
            if (!(i < fileOptions.length)) {
              _context3.next = 49;
              break;
            }
            fileOption = fileOptions[i];
            _context3.next = 40;
            return _fileEntity.create({
              data: fileOption,
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'upload image file',
                serialAction: 'combo',
                transactions: fileTransactions,
                feeRate: mvcFeeRate
              }
            });
          case 40:
            _yield$_fileEntity$cr = _context3.sent;
            _transactions = _yield$_fileEntity$cr.transactions;
            if (_transactions) {
              _context3.next = 44;
              break;
            }
            throw new Error('upload image file failed');
          case 44:
            finalAttachMetafileUri.push('metafile://' + _transactions[_transactions.length - 1].txComposer.getTxId() + 'i0');
            fileTransactions = _transactions;
          case 46:
            i++;
            _context3.next = 36;
            break;
          case 49:
            finalBody.attachments = [].concat(toConsumableArray_default()(finalBody.attachments || []), finalAttachMetafileUri);
          case 50:
            //   await sleep(5000);

            if (!(0,isNil/* default */.Z)(quotePin)) {
              finalBody.quotePin = quotePin.id;
            }
            if (nfts.length > 0) {
              finalBody.attachments = [].concat(toConsumableArray_default()(nfts.map(function (nft) {
                return "metafile://nft/mrc721/".concat(nft.itemPinId);
              })), toConsumableArray_default()(finalBody.attachments || []));
            }
            if (!(chainNet === 'btc')) {
              _context3.next = 61;
              break;
            }
            console.log('finalBody', {
              body: JSON.stringify(finalBody),
              contentType: 'text/plain;utf-8',
              flag: config/* FLAG */.BZ,
              path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/simplebuzz")
            });
            _context3.next = 56;
            return buzzEntity.create({
              dataArray: [{
                body: JSON.stringify(finalBody),
                contentType: 'text/plain;utf-8',
                flag: config/* FLAG */.BZ,
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/simplebuzz")
              }],
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee('post_service_fee_amount')
                // service: {
                //     address: environment.service_address,
                //     satoshis: environment.service_staoshi,
                // },
                // network: environment.network,
              }
            });
          case 56:
            createRes = _context3.sent;
            console.log('create res for inscribe', createRes);
            if (!(0,isNil/* default */.Z)(createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0])) {
              // await sleep(5000);
              queryClient.invalidateQueries({
                queryKey: ['homebuzzesnew']
              });
              message/* default */.ZP.success("".concat(isQuoted ? 'repost' : 'create', " buzz successfully"));
              reset();
              onClose();
              setMockBuzz({
                chainName: chainNet,
                commentCount: 0,
                content: JSON.stringify(finalBody),
                creator: user.address,
                blocked: false,
                id: (createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0]) + 'i0',
                likeCount: 0,
                host: ((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '').toLowerCase(),
                number: 0,
                donate: [],
                MogoID: '',
                address: user.address,
                contentBody: null,
                contentLength: 0,
                contentType: 'text/plain;utf-8',
                createMetaId: user.metaid,
                dataValue: 0,
                donateCount: 0,
                encryption: '0',
                genesisFee: 0,
                genesisHeight: 0,
                genesisTransaction: createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0],
                hot: 0,
                initialOwner: user.address,
                isTransfered: false,
                status: 0,
                timestamp: Math.floor(new Date().getTime() / 1000),
                operation: 'create',
                path: "/protocols/simplebuzz",
                output: '',
                outputValue: 1,
                parentPath: '',
                pop: '',
                popLv: -1,
                preview: "",
                shareCount: 0,
                metaid: user.metaid,
                txIndex: 0,
                txInIndex: 0,
                offset: 0,
                location: '',
                originalPath: '',
                version: '1.0.0',
                contentTypeDetect: 'text/plain;utf-8',
                contentSummary: JSON.stringify(finalBody),
                originalId: '',
                mrc20MintId: [],
                like: []
              });
              _umi_production_exports.history.push('/home/new', {
                buzzId: new Date().getTime()
              });
            }
            _context3.next = 75;
            break;
          case 61:
            _context3.next = 63;
            return mvcConnector.load(getBuzzSchemaWithCustomHost((_showConf$host = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host !== void 0 ? _showConf$host : ''));
          case 63:
            _buzzEntity = _context3.sent;
            if (!(admin !== null && admin !== void 0 && admin.assist && (0,isEmpty/* default */.Z)(buzz.images) && !video)) {
              _context3.next = 70;
              break;
            }
            _context3.next = 67;
            return _buzzEntity.create({
              data: {
                body: JSON.stringify(objectSpread2_default()({}, finalBody))
              },
              options: {
                assistDomian: config/* ASSIST_ENDPOINT */.FF,
                network: config/* curNetwork */.eM,
                signMessage: 'create buzz',
                serialAction: 'finish',
                transactions: fileTransactions,
                service: fetchServiceFee('post_service_fee_amount', 'MVC'),
                feeRate: mvcFeeRate
              }
            });
          case 67:
            _createRes = _context3.sent;
            _context3.next = 73;
            break;
          case 70:
            _context3.next = 72;
            return _buzzEntity.create({
              data: {
                body: JSON.stringify(objectSpread2_default()({}, finalBody))
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'create buzz',
                serialAction: 'finish',
                transactions: fileTransactions,
                service: fetchServiceFee('post_service_fee_amount', 'MVC'),
                feeRate: mvcFeeRate
              }
            });
          case 72:
            _createRes = _context3.sent;
          case 73:
            console.log(fileTransactions.map(function (tx) {
              return tx.txComposer.getTxId();
            }));
            if (!(0,isNil/* default */.Z)((_createRes2 = _createRes) === null || _createRes2 === void 0 ? void 0 : _createRes2.txid)) {
              // await sleep(5000);
              queryClient.invalidateQueries({
                queryKey: ['homebuzzesnew']
              });
              message/* default */.ZP.success("".concat(isQuoted ? 'repost' : 'create', " buzz successfully"));
              reset();
              onClose();
              setNFTs([]);
              setMockBuzz({
                chainName: chainNet,
                commentCount: 0,
                content: JSON.stringify(finalBody),
                creator: user.address,
                blocked: false,
                id: _createRes.txid + 'i0',
                likeCount: 0,
                host: ((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '').toLowerCase(),
                number: 0,
                donate: [],
                MogoID: '',
                address: user.address,
                contentBody: null,
                contentLength: 0,
                contentType: 'text/plain;utf-8',
                createMetaId: user.metaid,
                dataValue: 0,
                donateCount: 0,
                encryption: '0',
                genesisFee: 0,
                genesisHeight: 0,
                genesisTransaction: _createRes.txid,
                hot: 0,
                initialOwner: user.address,
                isTransfered: false,
                status: 0,
                timestamp: Math.floor(new Date().getTime() / 1000),
                operation: 'create',
                path: "/protocols/simplebuzz",
                output: '',
                outputValue: 1,
                parentPath: '',
                pop: '',
                popLv: -1,
                preview: "",
                shareCount: 0,
                metaid: user.metaid,
                txIndex: 0,
                txInIndex: 0,
                offset: 0,
                location: '',
                originalPath: '',
                version: '1.0.0',
                contentTypeDetect: 'text/plain;utf-8',
                contentSummary: JSON.stringify(finalBody),
                originalId: '',
                mrc20MintId: [],
                like: []
              });
              _umi_production_exports.history.push('/home/new', {
                buzzId: new Date().getTime()
              });
            }
          case 75:
            _context3.next = 84;
            break;
          case 77:
            _context3.prev = 77;
            _context3.t0 = _context3["catch"](6);
            console.log('error', _context3.t0);
            errorMessage = (_message = _context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message) !== null && _message !== void 0 ? _message : _context3.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            setIsAdding(false);
          case 84:
            setIsAdding(false);
          case 85:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[6, 77]]);
    }));
    return function handleAddBuzz(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleAddBuzzWhthLock = /*#__PURE__*/function () {
    var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var encryptImages, publicImages, _yield$postPayBuzz, payload, pid, _message2, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setIsAdding(true);
            _context4.prev = 1;
            if (admin !== null && admin !== void 0 && admin.domainName) {
              _context4.next = 4;
              break;
            }
            throw new Error('The administrator has not set a domain. Please ask the administrator to configure a domain to proceed.');
          case 4:
            encryptImages = images.filter(function (image) {
              return encryptFiles.includes(image.previewUrl);
            });
            publicImages = images.filter(function (image) {
              return !encryptFiles.includes(image.previewUrl);
            });
            if (!(encryptImages.length === 0 && !encryptContent)) {
              _context4.next = 8;
              break;
            }
            throw new Error('Please input encrypt content or encrypt images');
          case 8:
            if (payType) {
              _context4.next = 10;
              break;
            }
            throw new Error('Please select pay type');
          case 10:
            if (!(payType === 'mrc20' && !IdCoin)) {
              _context4.next = 12;
              break;
            }
            throw new Error('Please Launch Your Unique ID-COIN');
          case 12:
            if (!(payType === 'btc' && payAmount <= 0)) {
              _context4.next = 14;
              break;
            }
            throw new Error('Please input valid pay amount');
          case 14:
            if (!(payType === 'paymrc20' && !mrc20)) {
              _context4.next = 16;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 16:
            if (!(payType === 'paymrc20' && checkTokenID !== 'success')) {
              _context4.next = 18;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 18:
            if (!(payType === 'paymrc20' && payMrc20Amount <= 0)) {
              _context4.next = 20;
              break;
            }
            throw new Error('Please input valid MRC20 token amount');
          case 20:
            if (!(payType === 'holdmrc20' && !mrc20)) {
              _context4.next = 22;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 22:
            _context4.t0 = utils_buzz/* postPayBuzz */.Vb;
            _context4.t1 = content;
            _context4.next = 26;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(encryptImages));
          case 26:
            _context4.t2 = _context4.sent;
            _context4.next = 29;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(publicImages));
          case 29:
            _context4.t3 = _context4.sent;
            _context4.t4 = encryptContent;
            _context4.t5 = nfts.map(function (nft) {
              return "metafile://nft/mrc721/".concat(nft.itemPinId);
            });
            _context4.t6 = (admin === null || admin === void 0 ? void 0 : admin.domainName) || '';
            _context4.t7 = {
              content: _context4.t1,
              encryptImages: _context4.t2,
              publicImages: _context4.t3,
              encryptContent: _context4.t4,
              nfts: _context4.t5,
              manDomain: _context4.t6
            };
            _context4.t8 = String(payAmount);
            _context4.t9 = user.address;
            _context4.t10 = chainNet === 'btc' ? feeRate : mvcFeeRate;
            _context4.t11 = (showConf === null || showConf === void 0 ? void 0 : showConf.host) || '';
            _context4.t12 = chainNet;
            _context4.t13 = btcConnector;
            _context4.t14 = mvcConnector;
            _context4.t15 = manPubKey || '';
            _context4.t16 = fetchServiceFee('post_service_fee_amount', chainNet === 'btc' ? 'BTC' : "MVC");
            _context4.t17 = String(payType);
            _context4.t18 = IdCoin;
            _context4.t19 = mrc20;
            _context4.t20 = String(payMrc20Amount);
            _context4.next = 49;
            return (0, _context4.t0)(_context4.t7, _context4.t8, _context4.t9, _context4.t10, _context4.t11, _context4.t12, _context4.t13, _context4.t14, _context4.t15, _context4.t16, _context4.t17, _context4.t18, _context4.t19, _context4.t20);
          case 49:
            _yield$postPayBuzz = _context4.sent;
            payload = _yield$postPayBuzz.payload;
            pid = _yield$postPayBuzz.pid;
            reset();
            onClose();
            queryClient.invalidateQueries({
              queryKey: ['homebuzzesnew']
            });
            // setMockBuzz({
            //     chainName: chainNet,
            //     commentCount: 0,
            //     content: JSON.stringify(payload),
            //     creator: user.address,
            //     blocked: false,
            //     id: pid,
            //     likeCount: 0,
            //     host: (showConf?.host || '').toLowerCase(),
            //     number: 0,
            //     donate: [],
            //     MogoID: '',
            //     address: user.address,
            //     contentBody: null,
            //     contentLength: 0,
            //     contentType: 'text/plain;utf-8',
            //     createMetaId: user.metaid,
            //     dataValue: 0,
            //     donateCount: 0,
            //     encryption: '0',
            //     genesisFee: 0,
            //     genesisHeight: 0,
            //     genesisTransaction: pid.substring(0, pid.length - 2),
            //     hot: 0,
            //     initialOwner: user.address,
            //     isTransfered: false,
            //     status: 0,
            //     timestamp: Math.floor(new Date().getTime() / 1000),
            //     operation: 'create',
            //     path: `/protocols/paybuzz`,
            //     output: '',
            //     outputValue: 1,
            //     parentPath: '',
            //     pop: '',
            //     popLv: -1,
            //     preview: "",
            //     shareCount: 0,
            //     metaid: user.metaid,
            //     txIndex: 0,
            //     txInIndex: 0,
            //     offset: 0,
            //     location: '',
            //     originalPath: '',
            //     version: '1.0.0',
            //     contentTypeDetect: 'text/plain;utf-8',
            //     contentSummary: JSON.stringify(payload),
            //     originalId: '',
            //     mrc20MintId: [],
            //     like: []

            // })

            _umi_production_exports.history.push('/home/new', {
              buzzId: new Date().getTime()
            });
            _context4.next = 64;
            break;
          case 58:
            _context4.prev = 58;
            _context4.t21 = _context4["catch"](1);
            console.log('error', _context4.t21);
            errorMessage = (_message2 = _context4.t21 === null || _context4.t21 === void 0 ? void 0 : _context4.t21.message) !== null && _message2 !== void 0 ? _message2 : _context4.t21;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
          case 64:
            setIsAdding(false);
          case 65:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 58]]);
    }));
    return function handleAddBuzzWhthLock() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    var didCancel = false;
    var fetchMrc20Info = /*#__PURE__*/function () {
      var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
        var params, _yield$getMRC20Info, code, message, data;
        return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (holdTokenID) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              setCheckTokenID('validating');
              params = {};
              if (holdTokenID.length > 24) {
                params.id = holdTokenID;
              } else {
                params.tick = holdTokenID.toUpperCase();
              }
              console.log('params', params);
              _context5.next = 8;
              return (0,api/* getMRC20Info */.tl)(params);
            case 8:
              _yield$getMRC20Info = _context5.sent;
              code = _yield$getMRC20Info.code;
              message = _yield$getMRC20Info.message;
              data = _yield$getMRC20Info.data;
              if (!didCancel) {
                _context5.next = 14;
                break;
              }
              return _context5.abrupt("return");
            case 14:
              if (!(data && data.mrc20Id)) {
                _context5.next = 20;
                break;
              }
              setMrc20(data);
              setCheckTokenID('success');
              return _context5.abrupt("return");
            case 20:
              setMrc20(undefined);
              setCheckTokenID('error');
            case 22:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function fetchMrc20Info() {
        return _ref5.apply(this, arguments);
      };
    }();
    fetchMrc20Info();
    return function () {
      didCancel = true;
    };
  }, [holdTokenID]);
  (0,react.useEffect)(function () {
    if (show) {
      getUploadDraftList().then(function (drafts) {
        console.log('drafts', drafts);
        setImages(drafts || []);
      });
    }
  }, [show]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: onClose,
    show: show,
    modalWidth: 640,
    closable: true,
    title: !isQuoted ? /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "New Buzz"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Repost"
    }),
    children: [isQuoted && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      style: {
        margin: 24
      },
      styles: {
        body: {
          padding: 0
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
        buzzItem: quotePin,
        showActions: false
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SelectChain/* default */.Z, {
          chainNet: chainNet,
          setChainNet: setChainNet
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            strong: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Public"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
            autoSize: {
              minRows: 4,
              maxRows: 16
            },
            placeholder: isQuoted ? (0,utils/* formatMessage */.wv)("Add a comment") : (0,utils/* formatMessage */.wv)("post_placeholder"),
            value: content,
            onChange: function onChange(e) {
              return setContent(e.target.value);
            }
          })
        }), !isQuoted && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 24,
            style: {
              justifyContent: 'space-between',
              display: 'flex',
              alignItems: "center"
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              strong: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                children: "Encrypt"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              type: "text",
              icon: !lock ? /*#__PURE__*/(0,jsx_runtime.jsx)(UnlockOutlined/* default */.Z, {
                style: {
                  color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                }
              }) : /*#__PURE__*/(0,jsx_runtime.jsx)(LockOutlined/* default */.Z, {
                style: {
                  color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                }
              }),
              onClick: function onClick() {
                return setLock(!lock);
              }
            })]
          }), lock && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
              autoSize: {
                minRows: 4,
                maxRows: 16
              },
              placeholder: (0,utils/* formatMessage */.wv)("encrypt content"),
              value: encryptContent,
              onChange: function onChange(e) {
                return setEncryptContent(e.target.value);
              }
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: 16
            },
            children: [nfts.map(function (nft, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  position: 'relative',
                  marginRight: 8,
                  marginBottom: 8,
                  width: 100,
                  height: 100
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: nft.previewImage,
                  alt: "preview-".concat(index),
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    return setNFTs(nfts.filter(function (_nft, i) {
                      return nft.itemPinId !== _nft.itemPinId;
                    }));
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    top: 4,
                    right: 4
                  },
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
                })]
              }, "nft" + index);
            }), images.map(function (image, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  position: 'relative',
                  marginRight: 8,
                  marginBottom: 8,
                  width: 100,
                  height: 100
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: image.previewUrl,
                  alt: "preview-".concat(index),
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    return handleRemoveImage(index);
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    top: 4,
                    right: 4
                  },
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
                }), lock && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    console.log('encryptFiles', encryptFiles);
                    if (encryptFiles.includes(image.previewUrl)) {
                      setEncryptFiles(encryptFiles.filter(function (item) {
                        return item !== image.previewUrl;
                      }));
                    } else {
                      setEncryptFiles([].concat(toConsumableArray_default()(encryptFiles), [image.previewUrl]));
                    }
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    bottom: 4,
                    right: 4
                  },
                  icon: !encryptFiles.includes(image.previewUrl) ? /*#__PURE__*/(0,jsx_runtime.jsx)(UnlockOutlined/* default */.Z, {
                    style: {
                      color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(LockOutlined/* default */.Z, {
                    style: {
                      color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                    }
                  })
                })]
              }, index);
            }), video && chainNet === 'mvc' && !lock && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                position: 'relative',
                marginRight: 8,
                marginBottom: 8,
                width: 100,
                height: 100
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("video", {
                src: video.previewUrl
                // controls
                ,
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                onClick: function onClick() {
                  return handleRemoveVideo();
                },
                size: "small",
                style: {
                  position: 'absolute',
                  top: 4,
                  right: 4
                },
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
              })]
            })]
          })
        }), !isQuoted && lock && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 24,
            style: {
              justifyContent: 'space-between',
              display: 'flex',
              alignItems: "center",
              flexWrap: 'wrap',
              gap: 20
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              strong: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                children: "Payment method"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
              options: [{
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Pay With BTC"
                }),
                value: 'btc'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Pay With MRC20"
                }),
                value: 'paymrc20'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Hold ID Coin"
                }),
                value: 'mrc20'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Hold MRC20"
                }),
                value: 'holdmrc20'
              }],
              value: payType,
              onChange: function onChange(value) {
                setPayType(value);
              }
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                marginTop: 20,
                flexDirection: 'column'
              },
              children: [lock && payType === 'btc' && /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                variant: "filled",
                value: payAmount,
                onChange: function onChange(value) {
                  setPayAmount(value);
                },
                style: {
                  flexGrow: 1,
                  width: '100%'
                },
                suffix: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: btc,
                  style: {
                    height: 20,
                    width: 20
                  }
                })
              }), lock && payType === 'paymrc20' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                  prefix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  value: holdTokenID,
                  style: {
                    flexGrow: 1
                  },
                  onChange: function onChange(e) {
                    setHoldTokenID(e.target.value);
                  },
                  status: !mrc20 ? 'warning' : '',
                  suffix: checkTokenID === 'validating' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : checkTokenID === 'error' ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExclamationCircleOutlined/* default */.Z, {
                    style: {
                      color: 'red'
                    }
                  }) : checkTokenID === 'success' ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleOutlined/* default */.Z, {
                    style: {
                      color: 'green'
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  placeholder: (0,utils/* formatMessage */.wv)("please input mrc20 id or tick")
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                  controls: false,
                  variant: "filled",
                  value: payMrc20Amount,
                  onChange: function onChange(value) {
                    setPayMrc20Amount(value);
                  },
                  style: {
                    flexGrow: 1,
                    width: '100%'
                  },
                  suffix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {})
                })]
              }), lock && payType === 'mrc20' && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                    children: "loading"
                  })
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: IdCoin ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.Z, {
                    defaultChecked: true,
                    disabled: true,
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      style: {
                        display: 'flex',
                        gap: 8,
                        flexWrap: 'wrap',
                        alignItems: "center",
                        justifyContent: 'flex-end',
                        flexGrow: 1
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
                        src: (_IdCoin$deployerUserI = IdCoin.deployerUserInfo) === null || _IdCoin$deployerUserI === void 0 ? void 0 : _IdCoin$deployerUserI.avatar,
                        size: 32
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        className: "right",
                        style: {
                          flexGrow: 1
                        },
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap'
                          },
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
                              level: 4,
                              style: {
                                margin: 0
                              },
                              children: IdCoin.tick
                            })
                          })
                        })
                      })]
                    })
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(result/* default */.ZP, {
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "Launch Your Unique ID-COIN Now!"
                    }),
                    subTitle: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "It seems you haven't issued your personal ID-COIN yet. Head over to MetaID.market to create your ID-COIN and unlock new possibilities in the decentralized ecosystem. Start building your on-chain identity today!"
                    }),
                    extra: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                      onClick: function onClick() {
                        window.open(config/* curNetwork */.eM === 'testnet' ? 'https://testnet.metaid.market/launch' : 'https://metaid.market/launch', (0,utils/* openWindowTarget */.wL)());
                      },
                      type: "primary",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                        wrapper: true,
                        children: "Launch Me"
                      })
                    }, "console")
                  })
                })
              }), lock && payType === 'holdmrc20' && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                  prefix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  value: holdTokenID,
                  style: {
                    flexGrow: 1
                  },
                  onChange: function onChange(e) {
                    setHoldTokenID(e.target.value);
                  },
                  status: !mrc20 ? 'warning' : '',
                  suffix: checkTokenID === 'validating' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : checkTokenID === 'error' ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExclamationCircleOutlined/* default */.Z, {
                    style: {
                      color: 'red'
                    }
                  }) : checkTokenID === 'success' ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleOutlined/* default */.Z, {
                    style: {
                      color: 'green'
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  placeholder: (0,utils/* formatMessage */.wv)("please input mrc20 id or tick")
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {})]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
            beforeUpload: handleBeforeUpload,
            showUploadList: false,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileImageOutlined/* default */.Z, {}),
              variant: "text",
              color: "primary"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            onClick: function onClick() {
              return setShowNFTModal(true);
            },
            variant: "text",
            color: "primary",
            children: "NFT"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
            beforeUpload: handleVideoBeforeUpload,
            showUploadList: false,
            accept: "video/mp4",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              disabled: chainNet === 'btc' || lock,
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(VideoCameraOutlined/* default */.Z, {}),
              variant: "text",
              color: "primary"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            type: "text",
            onClick: reset,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Reset"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            style: {
              background: showConf === null || showConf === void 0 ? void 0 : showConf.gradientColor,
              color: showConf === null || showConf === void 0 ? void 0 : showConf.colorButton
            },
            loading: isAdding,
            onClick: onCreateSubmit,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Post"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NFTModal, {
      show: showNFTModal,
      onClose: function onClose() {
        setShowNFTModal(false);
      },
      nfts: nfts,
      setNFTs: setNFTs
    })]
  });
});

/***/ }),

/***/ 47467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ResponPopup; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(90789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 3 modules
var drawer = __webpack_require__(37048);
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

/***/ })

}]);