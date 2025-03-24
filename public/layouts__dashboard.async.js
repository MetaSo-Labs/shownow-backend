"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[644],{

/***/ 4375:
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ChromeOutlined.js + 1 modules
var ChromeOutlined = __webpack_require__(91210);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SettingOutlined.js + 1 modules
var SettingOutlined = __webpack_require__(34840);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DollarOutlined.js + 1 modules
var DollarOutlined = __webpack_require__(58534);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LogoutOutlined.js + 1 modules
var LogoutOutlined = __webpack_require__(86435);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.21.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@_esz3q22qh6735tkkxziuealcx4/node_modules/@ant-design/pro-layout/es/ProLayout.js + 60 modules
var ProLayout = __webpack_require__(8426);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.21.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@_esz3q22qh6735tkkxziuealcx4/node_modules/@ant-design/pro-layout/es/components/PageContainer/index.js + 20 modules
var PageContainer = __webpack_require__(97610);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+query-core@5.59.16/node_modules/@tanstack/query-core/build/modern/queryClient.js + 3 modules
var queryClient = __webpack_require__(32120);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(73118);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/dropdown/index.js + 1 modules
var dropdown = __webpack_require__(58571);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 26 modules
var _umi_production_exports = __webpack_require__(12798);
// EXTERNAL MODULE: ./src/assets/defaultAvatar.svg
var defaultAvatar = __webpack_require__(43143);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(72948);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.59.16_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(77682);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var es_modal = __webpack_require__(7567);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 18 modules
var typography = __webpack_require__(48020);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/badge/index.js + 5 modules
var badge = __webpack_require__(25194);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(48779);
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(QueryClientProvider/* QueryClientProvider */.aH, {
    client: dashboard_queryClient,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        height: '100vh'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProLayout/* ProLayout */.f, {
        location: {
          pathname: pathname
        },
        title: "SHOW NOW",
        logo: "data:image/png;base64,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",
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
  });
});

/***/ })

}]);