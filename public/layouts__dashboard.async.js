"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[644],{

/***/ 11289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ dashboard; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ChromeOutlined.js + 1 modules
var ChromeOutlined = __webpack_require__(44333);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SettingOutlined.js + 1 modules
var SettingOutlined = __webpack_require__(62237);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DollarOutlined.js + 1 modules
var DollarOutlined = __webpack_require__(54744);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LogoutOutlined.js + 1 modules
var LogoutOutlined = __webpack_require__(11280);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1___5f8d2eb2bc54ba3fe340d194acdcb48d/node_modules/@ant-design/pro-layout/es/ProLayout.js + 60 modules
var ProLayout = __webpack_require__(73014);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1___5f8d2eb2bc54ba3fe340d194acdcb48d/node_modules/@ant-design/pro-layout/es/components/PageContainer/index.js + 20 modules
var PageContainer = __webpack_require__(75307);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.74.3/node_modules/@tanstack/query-core/build/modern/queryClient.js + 3 modules
var queryClient = __webpack_require__(87928);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(86173);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/dropdown/index.js + 1 modules
var dropdown = __webpack_require__(22110);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(93603);
// EXTERNAL MODULE: ./src/assets/defaultAvatar.svg
var defaultAvatar = __webpack_require__(8453);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var es_modal = __webpack_require__(90789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/badge/index.js + 5 modules
var badge = __webpack_require__(82441);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(79063);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/layouts/VersionContorl.tsx








/* harmony default export */ var VersionContorl = (function () {
  var _Modal$useModal = es_modal/* default */.Z.useModal(),
    _Modal$useModal2 = slicedToArray_default()(_Modal$useModal, 2),
    modal = _Modal$useModal2[0],
    contextHolder = _Modal$useModal2[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['getVeisionInfo'],
      queryFn: function queryFn() {
        return (0,api/* getVersionInfo */.gn)();
      }
    }),
    data = _useQuery.data,
    isFetching = _useQuery.isFetching,
    refetch = _useQuery.refetch;

  // const data = {
  //     data: {
  //         curNo: 1,
  //         curVer: '1.0.0',
  //         lastNo: 2,
  //         lastVer: '1.0.1',
  //         serverUrl: 'https://www.baidu.com',
  //         mandatory: true
  //     }
  // }

  var showNotioce = (0,react.useCallback)(function () {
    return;
    if (!data) return;
    if (!data.data) return;
    if (data.data.curNo < data.data.lastNo) {
      modal.confirm({
        title: 'Update Available!',
        content: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Paragraph, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
              children: ["Your current version: v", data.data.curVer]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Paragraph, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
              children: ["Latest version: v", data.data.lastVer]
            }), " ", data.data.mandatory ? /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              type: "danger",
              children: "(Required for continued use)"
            }) : null]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Paragraph, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              children: "A new version is available with exciting features and improvements! Update now to get the best experience."
            })
          })]
        }),
        onOk: function onOk() {
          window.location.href = data.data.serverUrl;
        },
        cancelButtonProps: {
          disabled: data.data.mandatory
        }
      });
    }
  }, [data]);
  (0,react.useEffect)(function () {
    showNotioce();
  }, [showNotioce]);
  if (!data || !(data !== null && data !== void 0 && data.data)) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(badge/* default */.Z, {
      dot: data.data.curNo < data.data.lastNo,
      onClick: function onClick() {
        showNotioce();
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(tag/* default */.Z, {
        children: ["v", data.data.curVer]
      })
    }), contextHolder]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/lib/locale/en_US.js
var en_US = __webpack_require__(51521);
// EXTERNAL MODULE: ./src/assets/dashboard/mataso.svg
var mataso = __webpack_require__(38232);
;// CONCATENATED MODULE: ./src/layouts/dashboard.tsx












var dashboard_queryClient = new queryClient/* QueryClient */.S();
/* harmony default export */ var dashboard = (function () {
  var location = (0,_umi_production_exports.useLocation)();
  var path = location.pathname;
  var _useState = (0,react.useState)(path),
    _useState2 = slicedToArray_default()(_useState, 2),
    pathname = _useState2[0],
    setPathname = _useState2[1];
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    admin = _useModel.admin;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
    locale: en_US["default"],
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(QueryClientProvider/* QueryClientProvider */.aH, {
      client: dashboard_queryClient,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          height: '100vh'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProLayout/* ProLayout */.f, {
          location: {
            pathname: pathname
          },
          title: "MetaSo",
          logo: mataso/* default */.Z,
          route: {
            path: '/dashboard',
            routes: [{
              path: '/dashboard/styles',
              name: 'Style',
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ChromeOutlined/* default */.Z, {})
            }, {
              path: '/dashboard/fees',
              name: 'Settings',
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(SettingOutlined/* default */.Z, {})
            }, {
              path: '/dashboard/metaso',
              name: '$METASO',
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DollarOutlined/* default */.Z, {})
            }]
          },
          avatarProps: {
            src: defaultAvatar/* default */.Z,
            title: admin === null || admin === void 0 ? void 0 : admin.host.slice(0, 6),
            render: function render(props, dom) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
                menu: {
                  items: [{
                    key: 'logout',
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LogoutOutlined/* default */.Z, {}),
                    label: 'Logout',
                    onClick: function onClick() {
                      localStorage.clear();
                      _umi_production_exports.history.push('/dashboardLogin');
                    }
                  }]
                },
                children: dom
              });
            }
          },
          actionsRender: function actionsRender(props) {
            return [/*#__PURE__*/(0,jsx_runtime.jsx)(VersionContorl, {})];
          },
          menuItemRender: function menuItemRender(item, dom) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              onClick: function onClick() {
                setPathname(item.path || '/dashboard/styles');
                _umi_production_exports.history.push(item.path || '/dashboard/styles');
              },
              children: dom
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(PageContainer/* PageContainer */._z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Outlet, {})
          })
        })
      })
    })
  });
});

/***/ }),

/***/ 38232:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ReactComponent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgMataso = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ xmlns: "http://www.w3.org/2000/svg", fill: "none", width: 20, height: 20 }, props), /* @__PURE__ */ React.createElement("circle", { cx: 10, cy: 10, fill: "#95EBF0", r: 10 }), /* @__PURE__ */ React.createElement("path", { d: "M14.347 7.44q.825 1.332.825 2.905 0 1.122-.433 2.148-.42.99-1.183 1.753-.763.763-1.753 1.182-1.026.434-2.148.434t-2.148-.434q-.99-.419-1.753-1.182-.764-.763-1.182-1.753-.434-1.026-.434-2.148t.434-2.148q.418-.99 1.182-1.753.763-.764 1.753-1.183 1.026-.433 2.148-.433 1.266 0 2.397.546l-.348.72q-.966-.467-2.049-.467-.96 0-1.836.37-.847.359-1.5 1.012t-1.01 1.5q-.371.876-.371 1.836 0 .96.37 1.836.358.847 1.011 1.5.653.653 1.5 1.01.876.371 1.836.371.96 0 1.836-.37.847-.358 1.5-1.011.653-.653 1.011-1.5.37-.876.37-1.836 0-1.346-.704-2.483l.679-.421Z", fillRule: "evenodd", fill: "#002E33" }), /* @__PURE__ */ React.createElement("path", { d: "M8.693 15.337a4.03 4.03 0 1 0 0-8.06 4.03 4.03 0 0 0 0 8.06Zm0-7.26a3.23 3.23 0 1 1 0 6.46 3.23 3.23 0 0 1 0-6.46Z", fillRule: "evenodd", fill: "#002E33" }), /* @__PURE__ */ React.createElement("path", { d: "M10.382 13.426q.188-.494.188-1.025 0-.532-.188-1.026-.206-.537-.6-.947-.397-.411-.92-.625-.481-.198-1-.198t-1.001.198q-.522.214-.919.625-.395.41-.6.947-.189.494-.189 1.026 0 .53.19 1.025.204.537.6.947.396.411.918.625.482.198 1 .198.52 0 1.002-.198.522-.214.918-.625.395-.41.6-.947Zm-.648-1.803q.143.374.143.778 0 .403-.143.778-.155.405-.451.713-.296.306-.683.465-.356.146-.738.146t-.738-.146q-.387-.159-.683-.465-.297-.308-.451-.713-.144-.375-.144-.778 0-.404.144-.778.154-.406.451-.714.296-.306.683-.465.356-.146.738-.146t.738.146q.387.159.683.465.296.308.451.714ZM15.048 7.345q.124-.325.124-.674 0-.35-.124-.675-.136-.354-.398-.624-.264-.272-.61-.413-.322-.131-.667-.131-.345 0-.666.13-.347.142-.61.414-.263.27-.399.624-.124.325-.124.675 0 .35.124.674.136.355.398.625.264.271.61.413.322.13.667.13.345 0 .666-.13.347-.142.61-.413.263-.27.399-.625Zm-.972-1.417q.297.307.297.743t-.297.742q-.292.301-.703.301-.41 0-.703-.3-.297-.307-.297-.743t.297-.743q.292-.3.703-.3.41 0 .703.3Z", fillRule: "evenodd", fill: "#002E33" }));

/* harmony default export */ __webpack_exports__.Z = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgZmlsbD0iIzk1RUJGMCIgcj0iMTAiLz48cGF0aCBkPSJNMTQuMzQ3IDcuNDRxLjgyNSAxLjMzMi44MjUgMi45MDUgMCAxLjEyMi0uNDMzIDIuMTQ4LS40Mi45OS0xLjE4MyAxLjc1My0uNzYzLjc2My0xLjc1MyAxLjE4Mi0xLjAyNi40MzQtMi4xNDguNDM0dC0yLjE0OC0uNDM0cS0uOTktLjQxOS0xLjc1My0xLjE4Mi0uNzY0LS43NjMtMS4xODItMS43NTMtLjQzNC0xLjAyNi0uNDM0LTIuMTQ4dC40MzQtMi4xNDhxLjQxOC0uOTkgMS4xODItMS43NTMuNzYzLS43NjQgMS43NTMtMS4xODMgMS4wMjYtLjQzMyAyLjE0OC0uNDMzIDEuMjY2IDAgMi4zOTcuNTQ2bC0uMzQ4LjcycS0uOTY2LS40NjctMi4wNDktLjQ2Ny0uOTYgMC0xLjgzNi4zNy0uODQ3LjM1OS0xLjUgMS4wMTJ0LTEuMDEgMS41cS0uMzcxLjg3Ni0uMzcxIDEuODM2IDAgLjk2LjM3IDEuODM2LjM1OC44NDcgMS4wMTEgMS41LjY1My42NTMgMS41IDEuMDEuODc2LjM3MSAxLjgzNi4zNzEuOTYgMCAxLjgzNi0uMzcuODQ3LS4zNTggMS41LTEuMDExLjY1My0uNjUzIDEuMDExLTEuNS4zNy0uODc2LjM3LTEuODM2IDAtMS4zNDYtLjcwNC0yLjQ4M2wuNjc5LS40MjFaIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwMDJFMzMiLz48cGF0aCBkPSJNOC42OTMgMTUuMzM3YTQuMDMgNC4wMyAwIDEgMCAwLTguMDYgNC4wMyA0LjAzIDAgMCAwIDAgOC4wNlptMC03LjI2YTMuMjMgMy4yMyAwIDEgMSAwIDYuNDYgMy4yMyAzLjIzIDAgMCAxIDAtNi40NloiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzAwMkUzMyIvPjxwYXRoIGQ9Ik0xMC4zODIgMTMuNDI2cS4xODgtLjQ5NC4xODgtMS4wMjUgMC0uNTMyLS4xODgtMS4wMjYtLjIwNi0uNTM3LS42LS45NDctLjM5Ny0uNDExLS45Mi0uNjI1LS40ODEtLjE5OC0xLS4xOTh0LTEuMDAxLjE5OHEtLjUyMi4yMTQtLjkxOS42MjUtLjM5NS40MS0uNi45NDctLjE4OS40OTQtLjE4OSAxLjAyNiAwIC41My4xOSAxLjAyNS4yMDQuNTM3LjYuOTQ3LjM5Ni40MTEuOTE4LjYyNS40ODIuMTk4IDEgLjE5OC41MiAwIDEuMDAyLS4xOTguNTIyLS4yMTQuOTE4LS42MjUuMzk1LS40MS42LS45NDdabS0uNjQ4LTEuODAzcS4xNDMuMzc0LjE0My43NzggMCAuNDAzLS4xNDMuNzc4LS4xNTUuNDA1LS40NTEuNzEzLS4yOTYuMzA2LS42ODMuNDY1LS4zNTYuMTQ2LS43MzguMTQ2dC0uNzM4LS4xNDZxLS4zODctLjE1OS0uNjgzLS40NjUtLjI5Ny0uMzA4LS40NTEtLjcxMy0uMTQ0LS4zNzUtLjE0NC0uNzc4IDAtLjQwNC4xNDQtLjc3OC4xNTQtLjQwNi40NTEtLjcxNC4yOTYtLjMwNi42ODMtLjQ2NS4zNTYtLjE0Ni43MzgtLjE0NnQuNzM4LjE0NnEuMzg3LjE1OS42ODMuNDY1LjI5Ni4zMDguNDUxLjcxNFpNMTUuMDQ4IDcuMzQ1cS4xMjQtLjMyNS4xMjQtLjY3NCAwLS4zNS0uMTI0LS42NzUtLjEzNi0uMzU0LS4zOTgtLjYyNC0uMjY0LS4yNzItLjYxLS40MTMtLjMyMi0uMTMxLS42NjctLjEzMS0uMzQ1IDAtLjY2Ni4xMy0uMzQ3LjE0Mi0uNjEuNDE0LS4yNjMuMjctLjM5OS42MjQtLjEyNC4zMjUtLjEyNC42NzUgMCAuMzUuMTI0LjY3NC4xMzYuMzU1LjM5OC42MjUuMjY0LjI3MS42MS40MTMuMzIyLjEzLjY2Ny4xMy4zNDUgMCAuNjY2LS4xMy4zNDctLjE0Mi42MS0uNDEzLjI2My0uMjcuMzk5LS42MjVabS0uOTcyLTEuNDE3cS4yOTcuMzA3LjI5Ny43NDN0LS4yOTcuNzQycS0uMjkyLjMwMS0uNzAzLjMwMS0uNDEgMC0uNzAzLS4zLS4yOTctLjMwNy0uMjk3LS43NDN0LjI5Ny0uNzQzcS4yOTItLjMuNzAzLS4zLjQxIDAgLjcwMy4zWiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDAyRTMzIi8+PC9zdmc+");


/***/ })

}]);