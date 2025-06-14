(self["webpackChunk"] = self["webpackChunk"] || []).push([[8575],{

/***/ 47673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _Y: function() { return /* binding */ ProConfigProvider; },
  L_: function() { return /* binding */ ProProvider; },
  ZP: function() { return /* binding */ pro_provider_es; },
  nu: function() { return /* binding */ isNeedOpenHash; },
  YB: function() { return /* binding */ useIntl; }
});

// UNUSED EXPORTS: ConfigConsumer, arEGIntl, caESIntl, createIntl, csCZIntl, deDEIntl, enGBIntl, enUSIntl, esESIntl, faIRIntl, findIntlKeyByAntdLocaleKey, frFRIntl, heILIntl, hrHRIntl, idIDIntl, intlMap, intlMapKeys, itITIntl, jaJPIntl, koKRIntl, lighten, mnMNIntl, msMYIntl, nlNLIntl, operationUnit, plPLIntl, proTheme, ptBRIntl, resetComponent, roROIntl, ruRUIntl, setAlpha, skSKIntl, srRSIntl, svSEIntl, thTHIntl, trTRIntl, ukUAIntl, useStyle, useToken, uzUZIntl, viVNIntl, zhCNIntl, zhTWIntl

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(81230);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(75611);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(99960);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(99426);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/zh_CN.js + 4 modules
var zh_CN = __webpack_require__(5763);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/_internal/index.mjs + 1 modules
var _internal = __webpack_require__(40363);
// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/index/index.mjs
var index = __webpack_require__(64329);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/intl.js + 32 modules
var es_intl = __webpack_require__(37568);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/useStyle/index.js + 5 modules
var useStyle = __webpack_require__(58345);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/typing/layoutToken.js


var getLayoutDesignToken = function getLayoutDesignToken(designTokens, antdToken) {
  var _finalDesignTokens$si, _finalDesignTokens$he, _finalDesignTokens$he2, _finalDesignTokens$pa, _finalDesignTokens$pa2;
  var finalDesignTokens = (0,objectSpread2/* default */.Z)({}, designTokens);
  return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    bgLayout: "linear-gradient(".concat(antdToken.colorBgContainer, ", ").concat(antdToken.colorBgLayout, " 28%)"),
    colorTextAppListIcon: antdToken.colorTextSecondary,
    appListIconHoverBgColor: finalDesignTokens === null || finalDesignTokens === void 0 || (_finalDesignTokens$si = finalDesignTokens.sider) === null || _finalDesignTokens$si === void 0 ? void 0 : _finalDesignTokens$si.colorBgMenuItemSelected,
    colorBgAppListIconHover: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.04),
    colorTextAppListIconHover: antdToken.colorTextBase
  }, finalDesignTokens), {}, {
    header: (0,objectSpread2/* default */.Z)({
      colorBgHeader: (0,useStyle/* setAlpha */.uK)(antdToken.colorBgElevated, 0.6),
      colorBgScrollHeader: (0,useStyle/* setAlpha */.uK)(antdToken.colorBgElevated, 0.8),
      colorHeaderTitle: antdToken.colorText,
      colorBgMenuItemHover: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: 'transparent',
      colorBgMenuElevated: (finalDesignTokens === null || finalDesignTokens === void 0 || (_finalDesignTokens$he = finalDesignTokens.header) === null || _finalDesignTokens$he === void 0 ? void 0 : _finalDesignTokens$he.colorBgHeader) !== 'rgba(255, 255, 255, 0.6)' ? (_finalDesignTokens$he2 = finalDesignTokens.header) === null || _finalDesignTokens$he2 === void 0 ? void 0 : _finalDesignTokens$he2.colorBgHeader : antdToken.colorBgElevated,
      colorTextMenuSelected: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.95),
      colorBgRightActionsItemHover: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.03),
      colorTextRightActionsItem: antdToken.colorTextTertiary,
      heightLayoutHeader: 56,
      colorTextMenu: antdToken.colorTextSecondary,
      colorTextMenuSecondary: antdToken.colorTextTertiary,
      colorTextMenuTitle: antdToken.colorText,
      colorTextMenuActive: antdToken.colorText
    }, finalDesignTokens.header),
    sider: (0,objectSpread2/* default */.Z)({
      paddingInlineLayoutMenu: 8,
      paddingBlockLayoutMenu: 0,
      colorBgCollapsedButton: antdToken.colorBgElevated,
      colorTextCollapsedButtonHover: antdToken.colorTextSecondary,
      colorTextCollapsedButton: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.25),
      colorMenuBackground: 'transparent',
      colorMenuItemDivider: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.06),
      colorBgMenuItemHover: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.04),
      colorTextMenuItemHover: antdToken.colorText,
      colorTextMenuSelected: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.95),
      colorTextMenuActive: antdToken.colorText,
      colorTextMenu: antdToken.colorTextSecondary,
      colorTextMenuSecondary: antdToken.colorTextTertiary,
      colorTextMenuTitle: antdToken.colorText,
      colorTextSubMenuSelected: (0,useStyle/* setAlpha */.uK)(antdToken.colorTextBase, 0.95)
    }, finalDesignTokens.sider),
    pageContainer: (0,objectSpread2/* default */.Z)({
      colorBgPageContainer: 'transparent',
      paddingInlinePageContainerContent: ((_finalDesignTokens$pa = finalDesignTokens.pageContainer) === null || _finalDesignTokens$pa === void 0 ? void 0 : _finalDesignTokens$pa.marginInlinePageContainerContent) || 40,
      paddingBlockPageContainerContent: ((_finalDesignTokens$pa2 = finalDesignTokens.pageContainer) === null || _finalDesignTokens$pa2 === void 0 ? void 0 : _finalDesignTokens$pa2.marginBlockPageContainerContent) || 32,
      colorBgPageContainerFixed: antdToken.colorBgElevated
    }, finalDesignTokens.pageContainer)
  });
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/useStyle/token.js
var useStyle_token = __webpack_require__(53070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(74826);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/utils/merge.js


var merge = function merge() {
  var obj = {};
  for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }
  var il = rest.length;
  var key;
  var i = 0;
  for (; i < il; i += 1) {
    for (key in rest[i]) {
      if (rest[i].hasOwnProperty(key)) {
        if ((0,esm_typeof/* default */.Z)(obj[key]) === 'object' && (0,esm_typeof/* default */.Z)(rest[i][key]) === 'object' && obj[key] !== undefined && obj[key] !== null && !Array.isArray(obj[key]) && !Array.isArray(rest[i][key])) {
          obj[key] = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, obj[key]), rest[i][key]);
        } else {
          obj[key] = rest[i][key];
        }
      }
    }
  }
  return obj;
};
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(81414);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/index.js
/* provided dependency */ var process = __webpack_require__(14224);




var _excluded = ["locale", "getPrefixCls"],
  _excluded2 = ["locale", "theme"];

















var omitUndefined = function omitUndefined(obj) {
  var newObj = {};
  Object.keys(obj || {}).forEach(function (key) {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });
  if (Object.keys(newObj).length < 1) {
    return undefined;
  }
  return newObj;
};

/**
 * 用于判断当前是否需要开启哈希（Hash）模式。
 * 首先也会判断当前是否处于测试环境中（通过 process.env.NODE_ENV === 'TEST' 判断），
 * 如果是，则返回 false。否则，直接返回 true 表示需要打开。
 * @returns
 */
var isNeedOpenHash = function isNeedOpenHash() {
  var _process$env$NODE_ENV, _process$env$NODE_ENV2;
  if (typeof process !== 'undefined' && (((_process$env$NODE_ENV = "production") === null || _process$env$NODE_ENV === void 0 ? void 0 : _process$env$NODE_ENV.toUpperCase()) === 'TEST' || ((_process$env$NODE_ENV2 = "production") === null || _process$env$NODE_ENV2 === void 0 ? void 0 : _process$env$NODE_ENV2.toUpperCase()) === 'DEV')) {
    return false;
  }
  return true;
};

/**
 * 用于配置 ValueEnum 的通用配置
 */

/**
 * 支持 Map 和 Object
 *
 * @name ValueEnum 的类型
 */

/**
 * 支持 Map 和 Object
 */

/**
 * BaseProFieldFC 的类型设置
 */

/** Render 第二个参数，里面包含了一些常用的参数 */

/**
 * 自带的token 配置
 */

/* Creating a context object with the default values. */
var ProConfigContext = /*#__PURE__*/react.createContext({
  intl: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, es_intl/* zhCNIntl */.Hi), {}, {
    locale: 'default'
  }),
  valueTypeMap: {},
  theme: useStyle_token.emptyTheme,
  hashed: true,
  dark: false,
  token: useStyle_token.defaultToken
});
var ConfigConsumer = ProConfigContext.Consumer;

/**
 * 组件解除挂载后清空一下 cache
 * @date 2022-11-28
 * @returns null
 */

var CacheClean = function CacheClean() {
  var _useSWRConfig = (0,_internal/* useSWRConfig */.kY)(),
    cache = _useSWRConfig.cache;
  (0,react.useEffect)(function () {
    return function () {
      // is a map
      // @ts-ignore
      cache.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

/**
 * 用于配置 Pro 的组件,分装之后会简单一些
 * @param props
 * @returns
 */
var ConfigProviderContainer = function ConfigProviderContainer(props) {
  var _proTheme$useToken;
  var children = props.children,
    dark = props.dark,
    valueTypeMap = props.valueTypeMap,
    _props$autoClearCache = props.autoClearCache,
    autoClearCache = _props$autoClearCache === void 0 ? false : _props$autoClearCache,
    propsToken = props.token,
    prefixCls = props.prefixCls,
    intl = props.intl;
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    locale = _useContext.locale,
    getPrefixCls = _useContext.getPrefixCls,
    restConfig = (0,objectWithoutProperties/* default */.Z)(_useContext, _excluded);
  var tokenContext = (_proTheme$useToken = useStyle/* proTheme */.Ow.useToken) === null || _proTheme$useToken === void 0 ? void 0 : _proTheme$useToken.call(useStyle/* proTheme */.Ow);
  var proProvide = (0,react.useContext)(ProConfigContext);

  /**
   * pro 的 类
   * @type {string}
   * @example .ant-pro
   */

  var proComponentsCls = prefixCls ? ".".concat(prefixCls) : ".".concat(getPrefixCls(), "-pro");
  var antCls = '.' + getPrefixCls();
  var salt = "".concat(proComponentsCls);
  /**
   * 合并一下token，不然导致嵌套 token 失效
   */
  var proLayoutTokenMerge = (0,react.useMemo)(function () {
    return getLayoutDesignToken(propsToken || {}, tokenContext.token || useStyle_token.defaultToken);
  }, [propsToken, tokenContext.token]);
  var proProvideValue = (0,react.useMemo)(function () {
    var _proProvide$intl;
    var localeName = locale === null || locale === void 0 ? void 0 : locale.locale;
    var key = (0,es_intl/* findIntlKeyByAntdLocaleKey */.Vy)(localeName);
    // antd 的 key 存在的时候以 antd 的为主
    var resolvedIntl = intl !== null && intl !== void 0 ? intl : localeName && ((_proProvide$intl = proProvide.intl) === null || _proProvide$intl === void 0 ? void 0 : _proProvide$intl.locale) === 'default' ? es_intl/* intlMap */.Go[key] : proProvide.intl || es_intl/* intlMap */.Go[key];
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, proProvide), {}, {
      dark: dark !== null && dark !== void 0 ? dark : proProvide.dark,
      token: merge(proProvide.token, tokenContext.token, {
        proComponentsCls: proComponentsCls,
        antCls: antCls,
        themeId: tokenContext.theme.id,
        layout: proLayoutTokenMerge
      }),
      intl: resolvedIntl || es_intl/* zhCNIntl */.Hi
    });
  }, [locale === null || locale === void 0 ? void 0 : locale.locale, proProvide, dark, tokenContext.token, tokenContext.theme.id, proComponentsCls, antCls, proLayoutTokenMerge, intl]);
  var finalToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, proProvideValue.token || {}), {}, {
    proComponentsCls: proComponentsCls
  });
  var _useCacheToken = (0,es.useCacheToken)(tokenContext.theme, [tokenContext.token, finalToken !== null && finalToken !== void 0 ? finalToken : {}], {
      salt: salt,
      override: finalToken
    }),
    _useCacheToken2 = (0,slicedToArray/* default */.Z)(_useCacheToken, 2),
    token = _useCacheToken2[0],
    nativeHashId = _useCacheToken2[1];
  var hashed = (0,react.useMemo)(function () {
    if (props.hashed === false) {
      return false;
    }
    if (proProvide.hashed === false) return false;
    return true;
  }, [proProvide.hashed, props.hashed]);
  var hashId = (0,react.useMemo)(function () {
    if (props.hashed === false) {
      return '';
    }
    if (proProvide.hashed === false) return '';
    //Fix issue with hashId code
    if (isNeedOpenHash() === false) {
      return '';
    } else if (tokenContext.hashId) {
      return tokenContext.hashId;
    } else {
      // 生产环境或其他环境
      return nativeHashId;
    }
  }, [nativeHashId, proProvide.hashed, props.hashed]);
  (0,react.useEffect)(function () {
    dayjs_min_default().locale((locale === null || locale === void 0 ? void 0 : locale.locale) || 'zh-cn');
  }, [locale === null || locale === void 0 ? void 0 : locale.locale]);
  var themeConfig = (0,react.useMemo)(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, restConfig.theme), {}, {
      hashId: hashId,
      hashed: hashed && isNeedOpenHash()
    });
  }, [restConfig.theme, hashId, hashed, isNeedOpenHash()]);
  var proConfigContextValue = (0,react.useMemo)(function () {
    return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, proProvideValue), {}, {
      valueTypeMap: valueTypeMap || (proProvideValue === null || proProvideValue === void 0 ? void 0 : proProvideValue.valueTypeMap),
      token: token,
      theme: tokenContext.theme,
      hashed: hashed,
      hashId: hashId
    });
  }, [proProvideValue, valueTypeMap, token, tokenContext.theme, hashed, hashId]);
  var configProviderDom = (0,react.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, restConfig), {}, {
      theme: themeConfig,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ProConfigContext.Provider, {
        value: proConfigContextValue,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [autoClearCache && /*#__PURE__*/(0,jsx_runtime.jsx)(CacheClean, {}), children]
        })
      })
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restConfig, themeConfig, proConfigContextValue, autoClearCache, children]);
  if (!autoClearCache) return configProviderDom;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(index/* SWRConfig */.J$, {
    value: {
      provider: function provider() {
        return new Map();
      }
    },
    children: configProviderDom
  });
};

/**
 * 用于配置 Pro 的一些全局性的东西
 * @param props
 * @returns
 */
var ProConfigProvider = function ProConfigProvider(props) {
  var needDeps = props.needDeps,
    dark = props.dark,
    token = props.token;
  var proProvide = (0,react.useContext)(ProConfigContext);
  var _useContext2 = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    locale = _useContext2.locale,
    theme = _useContext2.theme,
    rest = (0,objectWithoutProperties/* default */.Z)(_useContext2, _excluded2);

  // 是不是不需要渲染 provide
  var isNullProvide = needDeps && proProvide.hashId !== undefined && Object.keys(props).sort().join('-') === 'children-needDeps';
  if (isNullProvide) return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: props.children
  });
  var mergeAlgorithm = function mergeAlgorithm() {
    var isDark = dark !== null && dark !== void 0 ? dark : proProvide.dark;
    if (isDark && !Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [theme === null || theme === void 0 ? void 0 : theme.algorithm, useStyle/* proTheme */.Ow.darkAlgorithm].filter(Boolean);
    }
    if (isDark && Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [].concat((0,toConsumableArray/* default */.Z)((theme === null || theme === void 0 ? void 0 : theme.algorithm) || []), [useStyle/* proTheme */.Ow.darkAlgorithm]).filter(Boolean);
    }
    return theme === null || theme === void 0 ? void 0 : theme.algorithm;
  };
  // 自动注入 antd 的配置
  var configProvider = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rest), {}, {
    locale: locale || zh_CN/* default */.Z,
    theme: omitUndefined((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, theme), {}, {
      algorithm: mergeAlgorithm()
    }))
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, configProvider), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ConfigProviderContainer, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      token: token
    }))
  }));
};

/**
 * It returns the intl object from the context if it exists, otherwise it returns the intl object for
 * 获取国际化的方法
 * @param locale
 * @param localeMap
 * the current locale
 * @returns The return value of the function is the intl object.
 */
function useIntl() {
  var _useContext3 = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    locale = _useContext3.locale;
  var _useContext4 = (0,react.useContext)(ProConfigContext),
    intl = _useContext4.intl;
  if (intl && intl.locale !== 'default') {
    return intl || es_intl/* zhCNIntl */.Hi;
  }
  if (locale !== null && locale !== void 0 && locale.locale) {
    return es_intl/* intlMap */.Go[(0,es_intl/* findIntlKeyByAntdLocaleKey */.Vy)(locale.locale)] || es_intl/* zhCNIntl */.Hi;
  }
  return es_intl/* zhCNIntl */.Hi;
}
ProConfigContext.displayName = 'ProProvider';
var ProProvider = ProConfigContext;
/* harmony default export */ var pro_provider_es = (ProConfigContext);

/***/ }),

/***/ 37568:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vy: function() { return /* binding */ findIntlKeyByAntdLocaleKey; },
  Go: function() { return /* binding */ intlMap; },
  Hi: function() { return /* binding */ zhCNIntl; }
});

// UNUSED EXPORTS: arEGIntl, caESIntl, createIntl, csCZIntl, deDEIntl, enGBIntl, enUSIntl, esESIntl, faIRIntl, frFRIntl, heILIntl, hrHRIntl, idIDIntl, intlMapKeys, itITIntl, jaJPIntl, koKRIntl, mnMNIntl, msMYIntl, nlNLIntl, plPLIntl, ptBRIntl, roROIntl, ruRUIntl, skSKIntl, srRSIntl, svSEIntl, thTHIntl, trTRIntl, ukUAIntl, uzUZIntl, viVNIntl, zhTWIntl

// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/index.js
var es = __webpack_require__(22217);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/ar_EG.js
/* harmony default export */ var ar_EG = ({
  moneySymbol: '$',
  form: {
    lightFilter: {
      more: 'المزيد',
      clear: 'نظف',
      confirm: 'تأكيد',
      itemUnit: 'عناصر'
    }
  },
  tableForm: {
    search: 'ابحث',
    reset: 'إعادة تعيين',
    submit: 'ارسال',
    collapsed: 'مُقلص',
    expand: 'مُوسع',
    inputPlaceholder: 'الرجاء الإدخال',
    selectPlaceholder: 'الرجاء الإختيار'
  },
  alert: {
    clear: 'نظف',
    selected: 'محدد',
    item: 'عنصر'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'من',
      item: 'عناصر'
    }
  },
  tableToolBar: {
    leftPin: 'ثبت على اليسار',
    rightPin: 'ثبت على اليمين',
    noPin: 'الغاء التثبيت',
    leftFixedTitle: 'لصق على اليسار',
    rightFixedTitle: 'لصق على اليمين',
    noFixedTitle: 'إلغاء الإلصاق',
    reset: 'إعادة تعيين',
    columnDisplay: 'الأعمدة المعروضة',
    columnSetting: 'الإعدادات',
    fullScreen: 'وضع كامل الشاشة',
    exitFullScreen: 'الخروج من وضع كامل الشاشة',
    reload: 'تحديث',
    density: 'الكثافة',
    densityDefault: 'افتراضي',
    densityLarger: 'أكبر',
    densityMiddle: 'وسط',
    densitySmall: 'مدمج'
  },
  stepsForm: {
    next: 'التالي',
    prev: 'السابق',
    submit: 'أنهى'
  },
  loginForm: {
    submitText: 'تسجيل الدخول'
  },
  editableTable: {
    action: {
      save: 'أنقذ',
      cancel: 'إلغاء الأمر',
      delete: 'حذف',
      add: 'إضافة صف من البيانات'
    }
  },
  switch: {
    open: 'مفتوح',
    close: 'غلق'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/ca_ES.js
/* harmony default export */ var ca_ES = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'Més',
      clear: 'Netejar',
      confirm: 'Confirmar',
      itemUnit: 'Elements'
    }
  },
  tableForm: {
    search: 'Cercar',
    reset: 'Netejar',
    submit: 'Enviar',
    collapsed: 'Expandir',
    expand: 'Col·lapsar',
    inputPlaceholder: 'Introduïu valor',
    selectPlaceholder: 'Seleccioneu valor'
  },
  alert: {
    clear: 'Netejar',
    selected: 'Seleccionat',
    item: 'Article'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'articles'
    }
  },
  tableToolBar: {
    leftPin: "Pin a l'esquerra",
    rightPin: 'Pin a la dreta',
    noPin: 'Sense Pin',
    leftFixedTitle: "Fixat a l'esquerra",
    rightFixedTitle: 'Fixat a la dreta',
    noFixedTitle: 'Sense fixar',
    reset: 'Reiniciar',
    columnDisplay: 'Mostrar Columna',
    columnSetting: 'Configuració',
    fullScreen: 'Pantalla Completa',
    exitFullScreen: 'Sortir Pantalla Completa',
    reload: 'Refrescar',
    density: 'Densitat',
    densityDefault: 'Per Defecte',
    densityLarger: 'Llarg',
    densityMiddle: 'Mitjà',
    densitySmall: 'Compacte'
  },
  stepsForm: {
    next: 'Següent',
    prev: 'Anterior',
    submit: 'Finalizar'
  },
  loginForm: {
    submitText: 'Entrar'
  },
  editableTable: {
    action: {
      save: 'Guardar',
      cancel: 'Cancel·lar',
      delete: 'Eliminar',
      add: 'afegir una fila de dades'
    }
  },
  switch: {
    open: 'obert',
    close: 'tancat'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/cs_CZ.js
/* harmony default export */ var cs_CZ = ({
  moneySymbol: 'Kč',
  deleteThisLine: 'Smazat tento řádek',
  copyThisLine: 'Kopírovat tento řádek',
  form: {
    lightFilter: {
      more: 'Víc',
      clear: 'Vymazat',
      confirm: 'Potvrdit',
      itemUnit: 'Položky'
    }
  },
  tableForm: {
    search: 'Dotaz',
    reset: 'Resetovat',
    submit: 'Odeslat',
    collapsed: 'Zvětšit',
    expand: 'Zmenšit',
    inputPlaceholder: 'Zadejte prosím',
    selectPlaceholder: 'Vyberte prosím'
  },
  alert: {
    clear: 'Vymazat',
    selected: 'Vybraný',
    item: 'Položka'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'z',
      item: 'položek'
    }
  },
  tableToolBar: {
    leftPin: 'Připnout doleva',
    rightPin: 'Připnout doprava',
    noPin: 'Odepnuto',
    leftFixedTitle: 'Fixováno nalevo',
    rightFixedTitle: 'Fixováno napravo',
    noFixedTitle: 'Neopraveno',
    reset: 'Resetovat',
    columnDisplay: 'Zobrazení sloupců',
    columnSetting: 'Nastavení',
    fullScreen: 'Celá obrazovka',
    exitFullScreen: 'Ukončete celou obrazovku',
    reload: 'Obnovit',
    density: 'Hustota',
    densityDefault: 'Výchozí',
    densityLarger: 'Větší',
    densityMiddle: 'Střední',
    densitySmall: 'Kompaktní'
  },
  stepsForm: {
    next: 'Další',
    prev: 'Předchozí',
    submit: 'Dokončit'
  },
  loginForm: {
    submitText: 'Přihlásit se'
  },
  editableTable: {
    onlyOneLineEditor: 'Upravit lze pouze jeden řádek',
    action: {
      save: 'Uložit',
      cancel: 'Zrušit',
      delete: 'Vymazat',
      add: 'přidat řádek dat'
    }
  },
  switch: {
    open: 'otevřít',
    close: 'zavřít'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/de_DE.js
/* harmony default export */ var de_DE = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'Mehr',
      clear: 'Zurücksetzen',
      confirm: 'Bestätigen',
      itemUnit: 'Einträge'
    }
  },
  tableForm: {
    search: 'Suchen',
    reset: 'Zurücksetzen',
    submit: 'Absenden',
    collapsed: 'Zeige mehr',
    expand: 'Zeige weniger',
    inputPlaceholder: 'Bitte eingeben',
    selectPlaceholder: 'Bitte auswählen'
  },
  alert: {
    clear: 'Zurücksetzen',
    selected: 'Ausgewählt',
    item: 'Eintrag'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'von',
      item: 'Einträgen'
    }
  },
  tableToolBar: {
    leftPin: 'Links anheften',
    rightPin: 'Rechts anheften',
    noPin: 'Nicht angeheftet',
    leftFixedTitle: 'Links fixiert',
    rightFixedTitle: 'Rechts fixiert',
    noFixedTitle: 'Nicht fixiert',
    reset: 'Zurücksetzen',
    columnDisplay: 'Angezeigte Reihen',
    columnSetting: 'Einstellungen',
    fullScreen: 'Vollbild',
    exitFullScreen: 'Vollbild verlassen',
    reload: 'Aktualisieren',
    density: 'Abstand',
    densityDefault: 'Standard',
    densityLarger: 'Größer',
    densityMiddle: 'Mittel',
    densitySmall: 'Kompakt'
  },
  stepsForm: {
    next: 'Weiter',
    prev: 'Zurück',
    submit: 'Abschließen'
  },
  loginForm: {
    submitText: 'Anmelden'
  },
  editableTable: {
    action: {
      save: 'Retten',
      cancel: 'Abbrechen',
      delete: 'Löschen',
      add: 'Hinzufügen einer Datenzeile'
    }
  },
  switch: {
    open: 'offen',
    close: 'schließen'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/en_GB.js
/* harmony default export */ var en_GB = ({
  moneySymbol: '£',
  form: {
    lightFilter: {
      more: 'More',
      clear: 'Clear',
      confirm: 'Confirm',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Query',
    reset: 'Reset',
    submit: 'Submit',
    collapsed: 'Expand',
    expand: 'Collapse',
    inputPlaceholder: 'Please enter',
    selectPlaceholder: 'Please select'
  },
  alert: {
    clear: 'Clear',
    selected: 'Selected',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'of',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Pin to left',
    rightPin: 'Pin to right',
    noPin: 'Unpinned',
    leftFixedTitle: 'Fixed to the left',
    rightFixedTitle: 'Fixed to the right',
    noFixedTitle: 'Not Fixed',
    reset: 'Reset',
    columnDisplay: 'Column Display',
    columnSetting: 'Table Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    reload: 'Refresh',
    density: 'Density',
    densityDefault: 'Default',
    densityLarger: 'Larger',
    densityMiddle: 'Middle',
    densitySmall: 'Compact'
  },
  stepsForm: {
    next: 'Next',
    prev: 'Previous',
    submit: 'Finish'
  },
  loginForm: {
    submitText: 'Login'
  },
  editableTable: {
    onlyOneLineEditor: 'Only one line can be edited',
    onlyAddOneLine: 'Only one line can be added',
    action: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      add: 'add a row of data'
    }
  },
  switch: {
    open: 'open',
    close: 'close'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/en_US.js
/* harmony default export */ var en_US = ({
  moneySymbol: '$',
  deleteThisLine: 'Delete this line',
  copyThisLine: 'Copy this line',
  form: {
    lightFilter: {
      more: 'More',
      clear: 'Clear',
      confirm: 'Confirm',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Query',
    reset: 'Reset',
    submit: 'Submit',
    collapsed: 'Expand',
    expand: 'Collapse',
    inputPlaceholder: 'Please enter',
    selectPlaceholder: 'Please select'
  },
  alert: {
    clear: 'Clear',
    selected: 'Selected',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'of',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Pin to left',
    rightPin: 'Pin to right',
    noPin: 'Unpinned',
    leftFixedTitle: 'Fixed to the left',
    rightFixedTitle: 'Fixed to the right',
    noFixedTitle: 'Not Fixed',
    reset: 'Reset',
    columnDisplay: 'Column Display',
    columnSetting: 'Table Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    reload: 'Refresh',
    density: 'Density',
    densityDefault: 'Default',
    densityLarger: 'Larger',
    densityMiddle: 'Middle',
    densitySmall: 'Compact'
  },
  stepsForm: {
    next: 'Next',
    prev: 'Previous',
    submit: 'Finish'
  },
  loginForm: {
    submitText: 'Login'
  },
  editableTable: {
    onlyOneLineEditor: 'Only one line can be edited',
    onlyAddOneLine: 'Only one line can be added',
    action: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      add: 'add a row of data'
    }
  },
  switch: {
    open: 'open',
    close: 'close'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/es_ES.js
/* harmony default export */ var es_ES = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'Más',
      clear: 'Limpiar',
      confirm: 'Confirmar',
      itemUnit: 'artículos'
    }
  },
  tableForm: {
    search: 'Buscar',
    reset: 'Limpiar',
    submit: 'Submit',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Ingrese valor',
    selectPlaceholder: 'Seleccione valor'
  },
  alert: {
    clear: 'Limpiar',
    selected: 'Seleccionado',
    item: 'Articulo'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'artículos'
    }
  },
  tableToolBar: {
    leftPin: 'Pin a la izquierda',
    rightPin: 'Pin a la derecha',
    noPin: 'Sin Pin',
    leftFixedTitle: 'Fijado a la izquierda',
    rightFixedTitle: 'Fijado a la derecha',
    noFixedTitle: 'Sin Fijar',
    reset: 'Reiniciar',
    columnDisplay: 'Mostrar Columna',
    columnSetting: 'Configuración',
    fullScreen: 'Pantalla Completa',
    exitFullScreen: 'Salir Pantalla Completa',
    reload: 'Refrescar',
    density: 'Densidad',
    densityDefault: 'Por Defecto',
    densityLarger: 'Largo',
    densityMiddle: 'Medio',
    densitySmall: 'Compacto'
  },
  stepsForm: {
    next: 'Siguiente',
    prev: 'Anterior',
    submit: 'Finalizar'
  },
  loginForm: {
    submitText: 'Entrar'
  },
  editableTable: {
    action: {
      save: 'Guardar',
      cancel: 'Descartar',
      delete: 'Borrar',
      add: 'añadir una fila de datos'
    }
  },
  switch: {
    open: 'abrir',
    close: 'cerrar'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/fa_IR.js
/* harmony default export */ var fa_IR = ({
  moneySymbol: 'تومان',
  form: {
    lightFilter: {
      more: 'بیشتر',
      clear: 'پاک کردن',
      confirm: 'تایید',
      itemUnit: 'مورد'
    }
  },
  tableForm: {
    search: 'جستجو',
    reset: 'بازنشانی',
    submit: 'تایید',
    collapsed: 'نمایش بیشتر',
    expand: 'نمایش کمتر',
    inputPlaceholder: 'پیدا کنید',
    selectPlaceholder: 'انتخاب کنید'
  },
  alert: {
    clear: 'پاک سازی',
    selected: 'انتخاب',
    item: 'مورد'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'از',
      item: 'مورد'
    }
  },
  tableToolBar: {
    leftPin: 'سنجاق به چپ',
    rightPin: 'سنجاق به راست',
    noPin: 'سنجاق نشده',
    leftFixedTitle: 'ثابت شده در چپ',
    rightFixedTitle: 'ثابت شده در راست',
    noFixedTitle: 'شناور',
    reset: 'بازنشانی',
    columnDisplay: 'نمایش همه',
    columnSetting: 'تنظیمات',
    fullScreen: 'تمام صفحه',
    exitFullScreen: 'خروج از حالت تمام صفحه',
    reload: 'تازه سازی',
    density: 'تراکم',
    densityDefault: 'پیش فرض',
    densityLarger: 'بزرگ',
    densityMiddle: 'متوسط',
    densitySmall: 'کوچک'
  },
  stepsForm: {
    next: 'بعدی',
    prev: 'قبلی',
    submit: 'اتمام'
  },
  loginForm: {
    submitText: 'ورود'
  },
  editableTable: {
    action: {
      save: 'ذخیره',
      cancel: 'لغو',
      delete: 'حذف',
      add: 'یک ردیف داده اضافه کنید'
    }
  },
  switch: {
    open: 'باز',
    close: 'نزدیک'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/fr_FR.js
/* harmony default export */ var fr_FR = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'Plus',
      clear: 'Effacer',
      confirm: 'Confirmer',
      itemUnit: 'Items'
    }
  },
  tableForm: {
    search: 'Rechercher',
    reset: 'Réinitialiser',
    submit: 'Envoyer',
    collapsed: 'Agrandir',
    expand: 'Réduire',
    inputPlaceholder: 'Entrer une valeur',
    selectPlaceholder: 'Sélectionner une valeur'
  },
  alert: {
    clear: 'Réinitialiser',
    selected: 'Sélectionné',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'sur',
      item: 'éléments'
    }
  },
  tableToolBar: {
    leftPin: 'Épingler à gauche',
    rightPin: 'Épingler à gauche',
    noPin: 'Sans épingle',
    leftFixedTitle: 'Fixer à gauche',
    rightFixedTitle: 'Fixer à droite',
    noFixedTitle: 'Non fixé',
    reset: 'Réinitialiser',
    columnDisplay: 'Affichage colonne',
    columnSetting: 'Réglages',
    fullScreen: 'Plein écran',
    exitFullScreen: 'Quitter Plein écran',
    reload: 'Rafraichir',
    density: 'Densité',
    densityDefault: 'Par défaut',
    densityLarger: 'Larger',
    densityMiddle: 'Moyenne',
    densitySmall: 'Compacte'
  },
  stepsForm: {
    next: 'Suivante',
    prev: 'Précédente',
    submit: 'Finaliser'
  },
  loginForm: {
    submitText: 'Se connecter'
  },
  editableTable: {
    action: {
      save: 'Sauvegarder',
      cancel: 'Annuler',
      delete: 'Supprimer',
      add: 'ajouter une ligne de données'
    }
  },
  switch: {
    open: 'ouvert',
    close: 'près'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/he_IL.js
/* harmony default export */ var he_IL = ({
  moneySymbol: '₪',
  deleteThisLine: 'מחק שורה זו',
  copyThisLine: 'העתק שורה זו',
  form: {
    lightFilter: {
      more: 'יותר',
      clear: 'נקה',
      confirm: 'אישור',
      itemUnit: 'פריטים'
    }
  },
  tableForm: {
    search: 'חיפוש',
    reset: 'איפוס',
    submit: 'שלח',
    collapsed: 'הרחב',
    expand: 'כווץ',
    inputPlaceholder: 'אנא הכנס',
    selectPlaceholder: 'אנא בחר'
  },
  alert: {
    clear: 'נקה',
    selected: 'נבחר',
    item: 'פריט'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'מתוך',
      item: 'פריטים'
    }
  },
  tableToolBar: {
    leftPin: 'הצמד לשמאל',
    rightPin: 'הצמד לימין',
    noPin: 'לא מצורף',
    leftFixedTitle: 'מוצמד לשמאל',
    rightFixedTitle: 'מוצמד לימין',
    noFixedTitle: 'לא מוצמד',
    reset: 'איפוס',
    columnDisplay: 'תצוגת עמודות',
    columnSetting: 'הגדרות',
    fullScreen: 'מסך מלא',
    exitFullScreen: 'צא ממסך מלא',
    reload: 'רענן',
    density: 'רזולוציה',
    densityDefault: 'ברירת מחדל',
    densityLarger: 'גדול',
    densityMiddle: 'בינוני',
    densitySmall: 'קטן'
  },
  stepsForm: {
    next: 'הבא',
    prev: 'קודם',
    submit: 'סיום'
  },
  loginForm: {
    submitText: 'כניסה'
  },
  editableTable: {
    onlyOneLineEditor: 'ניתן לערוך רק שורה אחת',
    action: {
      save: 'שמור',
      cancel: 'ביטול',
      delete: 'מחיקה',
      add: 'הוסף שורת נתונים'
    }
  },
  switch: {
    open: 'פתח',
    close: 'סגור'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/hr_HR.js
/* harmony default export */ var hr_HR = ({
  moneySymbol: 'kn',
  form: {
    lightFilter: {
      more: 'Više',
      clear: 'Očisti',
      confirm: 'Potvrdi',
      itemUnit: 'Stavke'
    }
  },
  tableForm: {
    search: 'Pretraži',
    reset: 'Poništi',
    submit: 'Potvrdi',
    collapsed: 'Raširi',
    expand: 'Skupi',
    inputPlaceholder: 'Unesite',
    selectPlaceholder: 'Odaberite'
  },
  alert: {
    clear: 'Očisti',
    selected: 'Odaberi',
    item: 'stavke'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'od',
      item: 'stavke'
    }
  },
  tableToolBar: {
    leftPin: 'Prikači lijevo',
    rightPin: 'Prikači desno',
    noPin: 'Bez prikačenja',
    leftFixedTitle: 'Fiksiraj lijevo',
    rightFixedTitle: 'Fiksiraj desno',
    noFixedTitle: 'Bez fiksiranja',
    reset: 'Resetiraj',
    columnDisplay: 'Prikaz stupaca',
    columnSetting: 'Postavke',
    fullScreen: 'Puni zaslon',
    exitFullScreen: 'Izađi iz punog zaslona',
    reload: 'Ponovno učitaj',
    density: 'Veličina',
    densityDefault: 'Zadano',
    densityLarger: 'Veliko',
    densityMiddle: 'Srednje',
    densitySmall: 'Malo'
  },
  stepsForm: {
    next: 'Sljedeći',
    prev: 'Prethodni',
    submit: 'Kraj'
  },
  loginForm: {
    submitText: 'Prijava'
  },
  editableTable: {
    action: {
      save: 'Spremi',
      cancel: 'Odustani',
      delete: 'Obriši',
      add: 'dodajte red podataka'
    }
  },
  switch: {
    open: 'otvori',
    close: 'zatvori'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/id_ID.js
/* harmony default export */ var id_ID = ({
  moneySymbol: 'RP',
  form: {
    lightFilter: {
      more: 'Lebih',
      clear: 'Hapus',
      confirm: 'Konfirmasi',
      itemUnit: 'Unit'
    }
  },
  tableForm: {
    search: 'Cari',
    reset: 'Atur ulang',
    submit: 'Kirim',
    collapsed: 'Lebih sedikit',
    expand: 'Lebih banyak',
    inputPlaceholder: 'Masukkan pencarian',
    selectPlaceholder: 'Pilih'
  },
  alert: {
    clear: 'Hapus',
    selected: 'Dipilih',
    item: 'Butir'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'Dari',
      item: 'Butir'
    }
  },
  tableToolBar: {
    leftPin: 'Pin kiri',
    rightPin: 'Pin kanan',
    noPin: 'Tidak ada pin',
    leftFixedTitle: 'Rata kiri',
    rightFixedTitle: 'Rata kanan',
    noFixedTitle: 'Tidak tetap',
    reset: 'Atur ulang',
    columnDisplay: 'Tampilan kolom',
    columnSetting: 'Pengaturan',
    fullScreen: 'Layar penuh',
    exitFullScreen: 'Keluar layar penuh',
    reload: 'Atur ulang',
    density: 'Kerapatan',
    densityDefault: 'Standar',
    densityLarger: 'Lebih besar',
    densityMiddle: 'Sedang',
    densitySmall: 'Rapat'
  },
  stepsForm: {
    next: 'Selanjutnya',
    prev: 'Sebelumnya',
    submit: 'Selesai'
  },
  loginForm: {
    submitText: 'Login'
  },
  editableTable: {
    action: {
      save: 'simpan',
      cancel: 'batal',
      delete: 'hapus',
      add: 'Tambahkan baris data'
    }
  },
  switch: {
    open: 'buka',
    close: 'tutup'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/it_IT.js
/* harmony default export */ var it_IT = ({
  moneySymbol: '€',
  form: {
    lightFilter: {
      more: 'più',
      clear: 'pulisci',
      confirm: 'conferma',
      itemUnit: 'elementi'
    }
  },
  tableForm: {
    search: 'Filtra',
    reset: 'Pulisci',
    submit: 'Invia',
    collapsed: 'Espandi',
    expand: 'Contrai',
    inputPlaceholder: 'Digita',
    selectPlaceholder: 'Seleziona'
  },
  alert: {
    clear: 'Rimuovi',
    selected: 'Selezionati',
    item: 'elementi'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'di',
      item: 'elementi'
    }
  },
  tableToolBar: {
    leftPin: 'Fissa a sinistra',
    rightPin: 'Fissa a destra',
    noPin: 'Ripristina posizione',
    leftFixedTitle: 'Fissato a sinistra',
    rightFixedTitle: 'Fissato a destra',
    noFixedTitle: 'Non fissato',
    reset: 'Ripristina',
    columnDisplay: 'Disposizione colonne',
    columnSetting: 'Impostazioni',
    fullScreen: 'Modalità schermo intero',
    exitFullScreen: 'Esci da modalità schermo intero',
    reload: 'Ricarica',
    density: 'Grandezza tabella',
    densityDefault: 'predefinito',
    densityLarger: 'Grande',
    densityMiddle: 'Media',
    densitySmall: 'Compatta'
  },
  stepsForm: {
    next: 'successivo',
    prev: 'precedente',
    submit: 'finisci'
  },
  loginForm: {
    submitText: 'Accedi'
  },
  editableTable: {
    action: {
      save: 'salva',
      cancel: 'annulla',
      delete: 'Delete',
      add: 'add a row of data'
    }
  },
  switch: {
    open: 'open',
    close: 'chiudi'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/ja_JP.js
/* harmony default export */ var ja_JP = ({
  moneySymbol: '¥',
  form: {
    lightFilter: {
      more: '更に',
      clear: 'クリア',
      confirm: '確認',
      itemUnit: 'アイテム'
    }
  },
  tableForm: {
    search: '検索',
    reset: 'リセット',
    submit: '送信',
    collapsed: '拡大',
    expand: '折畳',
    inputPlaceholder: '入力してください',
    selectPlaceholder: '選択してください'
  },
  alert: {
    clear: 'クリア',
    selected: '選択した',
    item: 'アイテム'
  },
  pagination: {
    total: {
      range: 'レコード',
      total: '/合計',
      item: ' '
    }
  },
  tableToolBar: {
    leftPin: '左に固定',
    rightPin: '右に固定',
    noPin: 'キャンセル',
    leftFixedTitle: '左に固定された項目',
    rightFixedTitle: '右に固定された項目',
    noFixedTitle: '固定されてない項目',
    reset: 'リセット',
    columnDisplay: '表示列',
    columnSetting: '列表示設定',
    fullScreen: 'フルスクリーン',
    exitFullScreen: '終了',
    reload: '更新',
    density: '行高',
    densityDefault: 'デフォルト',
    densityLarger: '大',
    densityMiddle: '中',
    densitySmall: '小'
  },
  stepsForm: {
    next: '次へ',
    prev: '前へ',
    submit: '送信'
  },
  loginForm: {
    submitText: 'ログイン'
  },
  editableTable: {
    action: {
      save: '保存',
      cancel: 'キャンセル',
      delete: '削除',
      add: '追加'
    }
  },
  switch: {
    open: '開く',
    close: '閉じる'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/ko_KR.js
/* harmony default export */ var ko_KR = ({
  moneySymbol: '₩',
  form: {
    lightFilter: {
      more: '더보기',
      clear: '초기화',
      confirm: '확인',
      itemUnit: '건수'
    }
  },
  tableForm: {
    search: '조회',
    reset: '초기화',
    submit: '제출',
    collapsed: '확장',
    expand: '닫기',
    inputPlaceholder: '입력해 주세요',
    selectPlaceholder: '선택해 주세요'
  },
  alert: {
    clear: '취소',
    selected: '선택',
    item: '건'
  },
  pagination: {
    total: {
      range: ' ',
      total: '/ 총',
      item: '건'
    }
  },
  tableToolBar: {
    leftPin: '왼쪽으로 핀',
    rightPin: '오른쪽으로 핀',
    noPin: '핀 제거',
    leftFixedTitle: '왼쪽으로 고정',
    rightFixedTitle: '오른쪽으로 고정',
    noFixedTitle: '비고정',
    reset: '초기화',
    columnDisplay: '컬럼 표시',
    columnSetting: '설정',
    fullScreen: '전체 화면',
    exitFullScreen: '전체 화면 취소',
    reload: '새로 고침',
    density: '여백',
    densityDefault: '기본',
    densityLarger: '많은 여백',
    densityMiddle: '중간 여백',
    densitySmall: '좁은 여백'
  },
  stepsForm: {
    next: '다음',
    prev: '이전',
    submit: '종료'
  },
  loginForm: {
    submitText: '로그인'
  },
  editableTable: {
    action: {
      save: '저장',
      cancel: '취소',
      delete: '삭제',
      add: '데이터 행 추가'
    }
  },
  switch: {
    open: '열',
    close: '가까 운'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/mn_MN.js
/* harmony default export */ var mn_MN = ({
  moneySymbol: '₮',
  form: {
    lightFilter: {
      more: 'Илүү',
      clear: 'Цэвэрлэх',
      confirm: 'Баталгаажуулах',
      itemUnit: 'Нэгжүүд'
    }
  },
  tableForm: {
    search: 'Хайх',
    reset: 'Шинэчлэх',
    submit: 'Илгээх',
    collapsed: 'Өргөтгөх',
    expand: 'Хураах',
    inputPlaceholder: 'Утга оруулна уу',
    selectPlaceholder: 'Утга сонгоно уу'
  },
  alert: {
    clear: 'Цэвэрлэх',
    selected: 'Сонгогдсон',
    item: 'Нэгж'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'Нийт',
      item: 'мөр'
    }
  },
  tableToolBar: {
    leftPin: 'Зүүн тийш бэхлэх',
    rightPin: 'Баруун тийш бэхлэх',
    noPin: 'Бэхлэхгүй',
    leftFixedTitle: 'Зүүн зэрэгцүүлэх',
    rightFixedTitle: 'Баруун зэрэгцүүлэх',
    noFixedTitle: 'Зэрэгцүүлэхгүй',
    reset: 'Шинэчлэх',
    columnDisplay: 'Баганаар харуулах',
    columnSetting: 'Тохиргоо',
    fullScreen: 'Бүтэн дэлгэцээр',
    exitFullScreen: 'Бүтэн дэлгэц цуцлах',
    reload: 'Шинэчлэх',
    density: 'Хэмжээ',
    densityDefault: 'Хэвийн',
    densityLarger: 'Том',
    densityMiddle: 'Дунд',
    densitySmall: 'Жижиг'
  },
  stepsForm: {
    next: 'Дараах',
    prev: 'Өмнөх',
    submit: 'Дуусгах'
  },
  loginForm: {
    submitText: 'Нэвтрэх'
  },
  editableTable: {
    action: {
      save: 'Хадгалах',
      cancel: 'Цуцлах',
      delete: 'Устгах',
      add: 'Мөр нэмэх'
    }
  },
  switch: {
    open: 'Нээх',
    close: 'Хаах'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/ms_MY.js
/* harmony default export */ var ms_MY = ({
  moneySymbol: 'RM',
  form: {
    lightFilter: {
      more: 'Lebih banyak',
      clear: 'Jelas',
      confirm: 'Mengesahkan',
      itemUnit: 'Item'
    }
  },
  tableForm: {
    search: 'Cari',
    reset: 'Menetapkan semula',
    submit: 'Hantar',
    collapsed: 'Kembang',
    expand: 'Kuncup',
    inputPlaceholder: 'Sila masuk',
    selectPlaceholder: 'Sila pilih'
  },
  alert: {
    clear: 'Padam',
    selected: 'Dipilih',
    item: 'Item'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'daripada',
      item: 'item'
    }
  },
  tableToolBar: {
    leftPin: 'Pin ke kiri',
    rightPin: 'Pin ke kanan',
    noPin: 'Tidak pin',
    leftFixedTitle: 'Tetap ke kiri',
    rightFixedTitle: 'Tetap ke kanan',
    noFixedTitle: 'Tidak Tetap',
    reset: 'Menetapkan semula',
    columnDisplay: 'Lajur',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Keluar Full Screen',
    reload: 'Muat Semula',
    density: 'Densiti',
    densityDefault: 'Biasa',
    densityLarger: 'Besar',
    densityMiddle: 'Tengah',
    densitySmall: 'Kecil'
  },
  stepsForm: {
    next: 'Seterusnya',
    prev: 'Sebelumnya',
    submit: 'Selesai'
  },
  loginForm: {
    submitText: 'Log Masuk'
  },
  editableTable: {
    action: {
      save: 'Simpan',
      cancel: 'Membatalkan',
      delete: 'Menghapuskan',
      add: 'tambah baris data'
    }
  },
  switch: {
    open: 'Terbuka',
    close: 'Tutup'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/nl_NL.js
/* harmony default export */ var nl_NL = ({
  moneySymbol: '€',
  deleteThisLine: 'Verwijder deze regel',
  copyThisLine: 'Kopieer deze regel',
  form: {
    lightFilter: {
      more: 'Meer filters',
      clear: 'Wissen',
      confirm: 'Bevestigen',
      itemUnit: 'item'
    }
  },
  tableForm: {
    search: 'Zoeken',
    reset: 'Resetten',
    submit: 'Indienen',
    collapsed: 'Uitvouwen',
    expand: 'Inklappen',
    inputPlaceholder: 'Voer in',
    selectPlaceholder: 'Selecteer'
  },
  alert: {
    clear: 'Selectie annuleren',
    selected: 'Geselecteerd',
    item: 'item'
  },
  pagination: {
    total: {
      range: 'Van',
      total: 'items/totaal',
      item: 'items'
    }
  },
  tableToolBar: {
    leftPin: 'Vastzetten aan begin',
    rightPin: 'Vastzetten aan einde',
    noPin: 'Niet vastzetten',
    leftFixedTitle: 'Vastzetten aan de linkerkant',
    rightFixedTitle: 'Vastzetten aan de rechterkant',
    noFixedTitle: 'Niet vastzetten',
    reset: 'Resetten',
    columnDisplay: 'Kolomweergave',
    columnSetting: 'Kolominstellingen',
    fullScreen: 'Volledig scherm',
    exitFullScreen: 'Verlaat volledig scherm',
    reload: 'Vernieuwen',
    density: 'Dichtheid',
    densityDefault: 'Normaal',
    densityLarger: 'Ruim',
    densityMiddle: 'Gemiddeld',
    densitySmall: 'Compact'
  },
  stepsForm: {
    next: 'Volgende stap',
    prev: 'Vorige stap',
    submit: 'Indienen'
  },
  loginForm: {
    submitText: 'Inloggen'
  },
  editableTable: {
    onlyOneLineEditor: 'Slechts één regel tegelijk bewerken',
    action: {
      save: 'Opslaan',
      cancel: 'Annuleren',
      delete: 'Verwijderen',
      add: 'Een regel toevoegen'
    }
  },
  switch: {
    open: 'Openen',
    close: 'Sluiten'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/pl_PL.js
/* harmony default export */ var pl_PL = ({
  moneySymbol: 'zł',
  form: {
    lightFilter: {
      more: 'Więcej',
      clear: 'Wyczyść',
      confirm: 'Potwierdź',
      itemUnit: 'Ilość'
    }
  },
  tableForm: {
    search: 'Szukaj',
    reset: 'Reset',
    submit: 'Zatwierdź',
    collapsed: 'Pokaż wiecej',
    expand: 'Pokaż mniej',
    inputPlaceholder: 'Proszę podać',
    selectPlaceholder: 'Proszę wybrać'
  },
  alert: {
    clear: 'Wyczyść',
    selected: 'Wybrane',
    item: 'Wpis'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'z',
      item: 'Wpisów'
    }
  },
  tableToolBar: {
    leftPin: 'Przypnij do lewej',
    rightPin: 'Przypnij do prawej',
    noPin: 'Odepnij',
    leftFixedTitle: 'Przypięte do lewej',
    rightFixedTitle: 'Przypięte do prawej',
    noFixedTitle: 'Nieprzypięte',
    reset: 'Reset',
    columnDisplay: 'Wyświetlane wiersze',
    columnSetting: 'Ustawienia',
    fullScreen: 'Pełen ekran',
    exitFullScreen: 'Zamknij pełen ekran',
    reload: 'Odśwież',
    density: 'Odstęp',
    densityDefault: 'Standard',
    densityLarger: 'Wiekszy',
    densityMiddle: 'Sredni',
    densitySmall: 'Kompaktowy'
  },
  stepsForm: {
    next: 'Weiter',
    prev: 'Zurück',
    submit: 'Abschließen'
  },
  loginForm: {
    submitText: 'Zaloguj się'
  },
  editableTable: {
    action: {
      save: 'Zapisać',
      cancel: 'Anuluj',
      delete: 'Usunąć',
      add: 'dodawanie wiersza danych'
    }
  },
  switch: {
    open: 'otwierać',
    close: 'zamykać'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/pt_BR.js
/* harmony default export */ var pt_BR = ({
  moneySymbol: 'R$',
  form: {
    lightFilter: {
      more: 'Mais',
      clear: 'Limpar',
      confirm: 'Confirmar',
      itemUnit: 'Itens'
    }
  },
  tableForm: {
    search: 'Filtrar',
    reset: 'Limpar',
    submit: 'Confirmar',
    collapsed: 'Expandir',
    expand: 'Colapsar',
    inputPlaceholder: 'Por favor insira',
    selectPlaceholder: 'Por favor selecione'
  },
  alert: {
    clear: 'Limpar',
    selected: 'Selecionado(s)',
    item: 'Item(s)'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'de',
      item: 'itens'
    }
  },
  tableToolBar: {
    leftPin: 'Fixar à esquerda',
    rightPin: 'Fixar à direita',
    noPin: 'Desfixado',
    leftFixedTitle: 'Fixado à esquerda',
    rightFixedTitle: 'Fixado à direita',
    noFixedTitle: 'Não fixado',
    reset: 'Limpar',
    columnDisplay: 'Mostrar Coluna',
    columnSetting: 'Configurações',
    fullScreen: 'Tela Cheia',
    exitFullScreen: 'Sair da Tela Cheia',
    reload: 'Atualizar',
    density: 'Densidade',
    densityDefault: 'Padrão',
    densityLarger: 'Largo',
    densityMiddle: 'Médio',
    densitySmall: 'Compacto'
  },
  stepsForm: {
    next: 'Próximo',
    prev: 'Anterior',
    submit: 'Enviar'
  },
  loginForm: {
    submitText: 'Entrar'
  },
  editableTable: {
    action: {
      save: 'Salvar',
      cancel: 'Cancelar',
      delete: 'Apagar',
      add: 'adicionar uma linha de dados'
    }
  },
  switch: {
    open: 'abrir',
    close: 'fechar'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/ro_RO.js
/* harmony default export */ var ro_RO = ({
  moneySymbol: 'RON',
  deleteThisLine: 'Șterge acest rând',
  copyThisLine: 'Copiază acest rând',
  form: {
    lightFilter: {
      more: 'Mai multe filtre',
      clear: 'Curăță',
      confirm: 'Confirmă',
      itemUnit: 'elemente'
    }
  },
  tableForm: {
    search: 'Caută',
    reset: 'Resetează',
    submit: 'Trimite',
    collapsed: 'Extinde',
    expand: 'Restrânge',
    inputPlaceholder: 'Introduceți',
    selectPlaceholder: 'Selectați'
  },
  alert: {
    clear: 'Anulează selecția',
    selected: 'Selectat',
    item: 'elemente'
  },
  pagination: {
    total: {
      range: 'De la',
      total: 'elemente/total',
      item: 'elemente'
    }
  },
  tableToolBar: {
    leftPin: 'Fixează la început',
    rightPin: 'Fixează la sfârșit',
    noPin: 'Nu fixa',
    leftFixedTitle: 'Fixează în stânga',
    rightFixedTitle: 'Fixează în dreapta',
    noFixedTitle: 'Nu fixa',
    reset: 'Resetează',
    columnDisplay: 'Afișare coloane',
    columnSetting: 'Setări coloane',
    fullScreen: 'Ecran complet',
    exitFullScreen: 'Ieși din ecran complet',
    reload: 'Reîncarcă',
    density: 'Densitate',
    densityDefault: 'Normal',
    densityLarger: 'Larg',
    densityMiddle: 'Mediu',
    densitySmall: 'Compact'
  },
  stepsForm: {
    next: 'Pasul următor',
    prev: 'Pasul anterior',
    submit: 'Trimite'
  },
  loginForm: {
    submitText: 'Autentificare'
  },
  editableTable: {
    onlyOneLineEditor: 'Se poate edita doar un rând simultan',
    action: {
      save: 'Salvează',
      cancel: 'Anulează',
      delete: 'Șterge',
      add: 'Adaugă un rând'
    }
  },
  switch: {
    open: 'Deschide',
    close: 'Închide'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/ru_RU.js
/* harmony default export */ var ru_RU = ({
  moneySymbol: '₽',
  form: {
    lightFilter: {
      more: 'Еще',
      clear: 'Очистить',
      confirm: 'ОК',
      itemUnit: 'Позиции'
    }
  },
  tableForm: {
    search: 'Найти',
    reset: 'Сброс',
    submit: 'Отправить',
    collapsed: 'Развернуть',
    expand: 'Свернуть',
    inputPlaceholder: 'Введите значение',
    selectPlaceholder: 'Выберите значение'
  },
  alert: {
    clear: 'Очистить',
    selected: 'Выбрано',
    item: 'элементов'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'из',
      item: 'элементов'
    }
  },
  tableToolBar: {
    leftPin: 'Закрепить слева',
    rightPin: 'Закрепить справа',
    noPin: 'Открепить',
    leftFixedTitle: 'Закреплено слева',
    rightFixedTitle: 'Закреплено справа',
    noFixedTitle: 'Не закреплено',
    reset: 'Сброс',
    columnDisplay: 'Отображение столбца',
    columnSetting: 'Настройки',
    fullScreen: 'Полный экран',
    exitFullScreen: 'Выйти из полноэкранного режима',
    reload: 'Обновить',
    density: 'Размер',
    densityDefault: 'По умолчанию',
    densityLarger: 'Большой',
    densityMiddle: 'Средний',
    densitySmall: 'Сжатый'
  },
  stepsForm: {
    next: 'Следующий',
    prev: 'Предыдущий',
    submit: 'Завершить'
  },
  loginForm: {
    submitText: 'Вход'
  },
  editableTable: {
    action: {
      save: 'Сохранить',
      cancel: 'Отменить',
      delete: 'Удалить',
      add: 'добавить ряд данных'
    }
  },
  switch: {
    open: 'Открытый чемпионат мира по теннису',
    close: 'По адресу:'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/sk_SK.js
/* harmony default export */ var sk_SK = ({
  moneySymbol: '€',
  deleteThisLine: 'Odstrániť tento riadok',
  copyThisLine: 'Skopírujte tento riadok',
  form: {
    lightFilter: {
      more: 'Viac',
      clear: 'Vyčistiť',
      confirm: 'Potvrďte',
      itemUnit: 'Položky'
    }
  },
  tableForm: {
    search: 'Vyhladať',
    reset: 'Resetovať',
    submit: 'Odoslať',
    collapsed: 'Rozbaliť',
    expand: 'Zbaliť',
    inputPlaceholder: 'Prosím, zadajte',
    selectPlaceholder: 'Prosím, vyberte'
  },
  alert: {
    clear: 'Vyčistiť',
    selected: 'Vybraný',
    item: 'Položka'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'z',
      item: 'položiek'
    }
  },
  tableToolBar: {
    leftPin: 'Pripnúť vľavo',
    rightPin: 'Pripnúť vpravo',
    noPin: 'Odopnuté',
    leftFixedTitle: 'Fixované na ľavo',
    rightFixedTitle: 'Fixované na pravo',
    noFixedTitle: 'Nefixované',
    reset: 'Resetovať',
    columnDisplay: 'Zobrazenie stĺpcov',
    columnSetting: 'Nastavenia',
    fullScreen: 'Celá obrazovka',
    exitFullScreen: 'Ukončiť celú obrazovku',
    reload: 'Obnoviť',
    density: 'Hustota',
    densityDefault: 'Predvolené',
    densityLarger: 'Väčšie',
    densityMiddle: 'Stredné',
    densitySmall: 'Kompaktné'
  },
  stepsForm: {
    next: 'Ďalšie',
    prev: 'Predchádzajúce',
    submit: 'Potvrdiť'
  },
  loginForm: {
    submitText: 'Prihlásiť sa'
  },
  editableTable: {
    onlyOneLineEditor: 'Upravovať možno iba jeden riadok',
    action: {
      save: 'Uložiť',
      cancel: 'Zrušiť',
      delete: 'Odstrániť',
      add: 'pridať riadok údajov'
    }
  },
  switch: {
    open: 'otvoriť',
    close: 'zavrieť'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/sr_RS.js
/* harmony default export */ var sr_RS = ({
  moneySymbol: 'RSD',
  form: {
    lightFilter: {
      more: 'Više',
      clear: 'Očisti',
      confirm: 'Potvrdi',
      itemUnit: 'Stavke'
    }
  },
  tableForm: {
    search: 'Pronađi',
    reset: 'Resetuj',
    submit: 'Pošalji',
    collapsed: 'Proširi',
    expand: 'Skupi',
    inputPlaceholder: 'Molimo unesite',
    selectPlaceholder: 'Molimo odaberite'
  },
  alert: {
    clear: 'Očisti',
    selected: 'Odabrano',
    item: 'Stavka'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'od',
      item: 'stavki'
    }
  },
  tableToolBar: {
    leftPin: 'Zakači levo',
    rightPin: 'Zakači desno',
    noPin: 'Nije zakačeno',
    leftFixedTitle: 'Fiksirano levo',
    rightFixedTitle: 'Fiksirano desno',
    noFixedTitle: 'Nije fiksirano',
    reset: 'Resetuj',
    columnDisplay: 'Prikaz kolona',
    columnSetting: 'Podešavanja',
    fullScreen: 'Pun ekran',
    exitFullScreen: 'Zatvori pun ekran',
    reload: 'Osveži',
    density: 'Veličina',
    densityDefault: 'Podrazumevana',
    densityLarger: 'Veća',
    densityMiddle: 'Srednja',
    densitySmall: 'Kompaktna'
  },
  stepsForm: {
    next: 'Dalje',
    prev: 'Nazad',
    submit: 'Gotovo'
  },
  loginForm: {
    submitText: 'Prijavi se'
  },
  editableTable: {
    action: {
      save: 'Sačuvaj',
      cancel: 'Poništi',
      delete: 'Obriši',
      add: 'dodajte red podataka'
    }
  },
  switch: {
    open: 'Отворите',
    close: 'Затворите'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/sv_SE.js
/* harmony default export */ var sv_SE = ({
  moneySymbol: 'SEK',
  deleteThisLine: 'Radera denna rad',
  copyThisLine: 'Kopiera denna rad',
  form: {
    lightFilter: {
      more: 'Fler filter',
      clear: 'Rensa',
      confirm: 'Bekräfta',
      itemUnit: 'objekt'
    }
  },
  tableForm: {
    search: 'Sök',
    reset: 'Återställ',
    submit: 'Skicka',
    collapsed: 'Expandera',
    expand: 'Fäll ihop',
    inputPlaceholder: 'Vänligen ange',
    selectPlaceholder: 'Vänligen välj'
  },
  alert: {
    clear: 'Avbryt val',
    selected: 'Vald',
    item: 'objekt'
  },
  pagination: {
    total: {
      range: 'Från',
      total: 'objekt/totalt',
      item: 'objekt'
    }
  },
  tableToolBar: {
    leftPin: 'Fäst till vänster',
    rightPin: 'Fäst till höger',
    noPin: 'Inte fäst',
    leftFixedTitle: 'Fäst till vänster',
    rightFixedTitle: 'Fäst till höger',
    noFixedTitle: 'Inte fäst',
    reset: 'Återställ',
    columnDisplay: 'Kolumnvisning',
    columnSetting: 'Kolumninställningar',
    fullScreen: 'Fullskärm',
    exitFullScreen: 'Avsluta fullskärm',
    reload: 'Ladda om',
    density: 'Täthet',
    densityDefault: 'Normal',
    densityLarger: 'Lös',
    densityMiddle: 'Medium',
    densitySmall: 'Kompakt'
  },
  stepsForm: {
    next: 'Nästa steg',
    prev: 'Föregående steg',
    submit: 'Skicka'
  },
  loginForm: {
    submitText: 'Logga in'
  },
  editableTable: {
    onlyOneLineEditor: 'Endast en rad kan redigeras åt gången',
    action: {
      save: 'Spara',
      cancel: 'Avbryt',
      delete: 'Radera',
      add: 'Lägg till en rad'
    }
  },
  switch: {
    open: 'Öppna',
    close: 'Stäng'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/th_TH.js
/* harmony default export */ var th_TH = ({
  moneySymbol: '฿',
  deleteThisLine: 'ลบบรรทัดนี้',
  copyThisLine: 'คัดลอกบรรทัดนี้',
  form: {
    lightFilter: {
      more: 'มากกว่า',
      clear: 'ชัดเจน',
      confirm: 'ยืนยัน',
      itemUnit: 'รายการ'
    }
  },
  tableForm: {
    search: 'สอบถาม',
    reset: 'รีเซ็ต',
    submit: 'ส่ง',
    collapsed: 'ขยาย',
    expand: 'ทรุด',
    inputPlaceholder: 'กรุณาป้อน',
    selectPlaceholder: 'โปรดเลือก'
  },
  alert: {
    clear: 'ชัดเจน',
    selected: 'เลือกแล้ว',
    item: 'รายการ'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'ของ',
      item: 'รายการ'
    }
  },
  tableToolBar: {
    leftPin: 'ปักหมุดไปทางซ้าย',
    rightPin: 'ปักหมุดไปทางขวา',
    noPin: 'เลิกตรึงแล้ว',
    leftFixedTitle: 'แก้ไขด้านซ้าย',
    rightFixedTitle: 'แก้ไขด้านขวา',
    noFixedTitle: 'ไม่คงที่',
    reset: 'รีเซ็ต',
    columnDisplay: 'การแสดงคอลัมน์',
    columnSetting: 'การตั้งค่า',
    fullScreen: 'เต็มจอ',
    exitFullScreen: 'ออกจากโหมดเต็มหน้าจอ',
    reload: 'รีเฟรช',
    density: 'ความหนาแน่น',
    densityDefault: 'ค่าเริ่มต้น',
    densityLarger: 'ขนาดใหญ่ขึ้น',
    densityMiddle: 'กลาง',
    densitySmall: 'กะทัดรัด'
  },
  stepsForm: {
    next: 'ถัดไป',
    prev: 'ก่อนหน้า',
    submit: 'เสร็จ'
  },
  loginForm: {
    submitText: 'เข้าสู่ระบบ'
  },
  editableTable: {
    onlyOneLineEditor: 'แก้ไขได้เพียงบรรทัดเดียวเท่านั้น',
    action: {
      save: 'บันทึก',
      cancel: 'ยกเลิก',
      delete: 'ลบ',
      add: 'เพิ่มแถวของข้อมูล'
    }
  },
  switch: {
    open: 'เปิด',
    close: 'ปิด'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/tr_TR.js
/* harmony default export */ var tr_TR = ({
  moneySymbol: '₺',
  form: {
    lightFilter: {
      more: 'Daha Fazla',
      clear: 'Temizle',
      confirm: 'Onayla',
      itemUnit: 'Öğeler'
    }
  },
  tableForm: {
    search: 'Filtrele',
    reset: 'Sıfırla',
    submit: 'Gönder',
    collapsed: 'Daha fazla',
    expand: 'Daha az',
    inputPlaceholder: 'Filtrelemek için bir değer girin',
    selectPlaceholder: 'Filtrelemek için bir değer seçin'
  },
  alert: {
    clear: 'Temizle',
    selected: 'Seçili',
    item: 'Öğe'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'Toplam',
      item: 'Öğe'
    }
  },
  tableToolBar: {
    leftPin: 'Sola sabitle',
    rightPin: 'Sağa sabitle',
    noPin: 'Sabitlemeyi kaldır',
    leftFixedTitle: 'Sola sabitlendi',
    rightFixedTitle: 'Sağa sabitlendi',
    noFixedTitle: 'Sabitlenmedi',
    reset: 'Sıfırla',
    columnDisplay: 'Kolon Görünümü',
    columnSetting: 'Ayarlar',
    fullScreen: 'Tam Ekran',
    exitFullScreen: 'Tam Ekrandan Çık',
    reload: 'Yenile',
    density: 'Kalınlık',
    densityDefault: 'Varsayılan',
    densityLarger: 'Büyük',
    densityMiddle: 'Orta',
    densitySmall: 'Küçük'
  },
  stepsForm: {
    next: 'Sıradaki',
    prev: 'Önceki',
    submit: 'Gönder'
  },
  loginForm: {
    submitText: 'Giriş Yap'
  },
  editableTable: {
    action: {
      save: 'Kaydet',
      cancel: 'Vazgeç',
      delete: 'Sil',
      add: 'foegje in rige gegevens ta'
    }
  },
  switch: {
    open: 'açık',
    close: 'kapatmak'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/uk_UA.js
/* harmony default export */ var uk_UA = ({
  moneySymbol: '₴',
  deleteThisLine: 'Видатили рядок',
  copyThisLine: 'Скопіювати рядок',
  form: {
    lightFilter: {
      more: 'Ще',
      clear: 'Очистити',
      confirm: 'Ок',
      itemUnit: 'Позиції'
    }
  },
  tableForm: {
    search: 'Пошук',
    reset: 'Очистити',
    submit: 'Відправити',
    collapsed: 'Розгорнути',
    expand: 'Згорнути',
    inputPlaceholder: 'Введіть значення',
    selectPlaceholder: 'Оберіть значення'
  },
  alert: {
    clear: 'Очистити',
    selected: 'Обрано',
    item: 'елементів'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'з',
      item: 'елементів'
    }
  },
  tableToolBar: {
    leftPin: 'Закріпити зліва',
    rightPin: 'Закріпити справа',
    noPin: 'Відкріпити',
    leftFixedTitle: 'Закріплено зліва',
    rightFixedTitle: 'Закріплено справа',
    noFixedTitle: 'Не закріплено',
    reset: 'Скинути',
    columnDisplay: 'Відображення стовпців',
    columnSetting: 'Налаштування',
    fullScreen: 'Повноекранний режим',
    exitFullScreen: 'Вийти з повноекранного режиму',
    reload: 'Оновити',
    density: 'Розмір',
    densityDefault: 'За замовчуванням',
    densityLarger: 'Великий',
    densityMiddle: 'Середній',
    densitySmall: 'Стислий'
  },
  stepsForm: {
    next: 'Наступний',
    prev: 'Попередній',
    submit: 'Завершити'
  },
  loginForm: {
    submitText: 'Вхіх'
  },
  editableTable: {
    onlyOneLineEditor: 'Тільки один рядок може бути редагований одночасно',
    action: {
      save: 'Зберегти',
      cancel: 'Відмінити',
      delete: 'Видалити',
      add: 'додати рядок'
    }
  },
  switch: {
    open: 'Відкрито',
    close: 'Закрито'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/uz_UZ.js
/* harmony default export */ var uz_UZ = ({
  moneySymbol: 'UZS',
  form: {
    lightFilter: {
      more: 'Yana',
      clear: 'Tozalash',
      confirm: 'OK',
      itemUnit: 'Pozitsiyalar'
    }
  },
  tableForm: {
    search: 'Qidirish',
    reset: 'Qayta tiklash',
    submit: 'Yuborish',
    collapsed: 'Yig‘ish',
    expand: 'Kengaytirish',
    inputPlaceholder: 'Qiymatni kiriting',
    selectPlaceholder: 'Qiymatni tanlang'
  },
  alert: {
    clear: 'Tozalash',
    selected: 'Tanlangan',
    item: 'elementlar'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'dan',
      item: 'elementlar'
    }
  },
  tableToolBar: {
    leftPin: 'Chapga mahkamlash',
    rightPin: 'O‘ngga mahkamlash',
    noPin: 'Mahkamlashni olib tashlash',
    leftFixedTitle: 'Chapga mahkamlangan',
    rightFixedTitle: 'O‘ngga mahkamlangan',
    noFixedTitle: 'Mahkamlashsiz',
    reset: 'Qayta tiklash',
    columnDisplay: 'Ustunni ko‘rsatish',
    columnSetting: 'Sozlamalar',
    fullScreen: 'To‘liq ekran',
    exitFullScreen: 'To‘liq ekrandan chiqish',
    reload: 'Yangilash',
    density: 'O‘lcham',
    densityDefault: 'Standart',
    densityLarger: 'Katta',
    densityMiddle: 'O‘rtacha',
    densitySmall: 'Kichik'
  },
  stepsForm: {
    next: 'Keyingi',
    prev: 'Oldingi',
    submit: 'Tugatish'
  },
  loginForm: {
    submitText: 'Kirish'
  },
  editableTable: {
    action: {
      save: 'Saqlash',
      cancel: 'Bekor qilish',
      delete: 'O‘chirish',
      add: 'maʼlumotlar qatorini qo‘shish'
    }
  },
  switch: {
    open: 'Ochish',
    close: 'Yopish'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/vi_VN.js
/* harmony default export */ var vi_VN = ({
  moneySymbol: '₫',
  form: {
    lightFilter: {
      more: 'Nhiều hơn',
      clear: 'Trong',
      confirm: 'Xác nhận',
      itemUnit: 'Mục'
    }
  },
  tableForm: {
    search: 'Tìm kiếm',
    reset: 'Làm lại',
    submit: 'Gửi đi',
    collapsed: 'Mở rộng',
    expand: 'Thu gọn',
    inputPlaceholder: 'nhập dữ liệu',
    selectPlaceholder: 'Vui lòng chọn'
  },
  alert: {
    clear: 'Xóa',
    selected: 'đã chọn',
    item: 'mục'
  },
  pagination: {
    total: {
      range: ' ',
      total: 'trên',
      item: 'mặt hàng'
    }
  },
  tableToolBar: {
    leftPin: 'Ghim trái',
    rightPin: 'Ghim phải',
    noPin: 'Bỏ ghim',
    leftFixedTitle: 'Cố định trái',
    rightFixedTitle: 'Cố định phải',
    noFixedTitle: 'Chưa cố định',
    reset: 'Làm lại',
    columnDisplay: 'Cột hiển thị',
    columnSetting: 'Cấu hình',
    fullScreen: 'Chế độ toàn màn hình',
    exitFullScreen: 'Thoát chế độ toàn màn hình',
    reload: 'Làm mới',
    density: 'Mật độ hiển thị',
    densityDefault: 'Mặc định',
    densityLarger: 'Mặc định',
    densityMiddle: 'Trung bình',
    densitySmall: 'Chật'
  },
  stepsForm: {
    next: 'Sau',
    prev: 'Trước',
    submit: 'Kết thúc'
  },
  loginForm: {
    submitText: 'Đăng nhập'
  },
  editableTable: {
    action: {
      save: 'Cứu',
      cancel: 'Hủy',
      delete: 'Xóa',
      add: 'thêm một hàng dữ liệu'
    }
  },
  switch: {
    open: 'mở',
    close: 'đóng'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/zh_CN.js
/* harmony default export */ var zh_CN = ({
  moneySymbol: '¥',
  deleteThisLine: '删除此项',
  copyThisLine: '复制此项',
  form: {
    lightFilter: {
      more: '更多筛选',
      clear: '清除',
      confirm: '确认',
      itemUnit: '项'
    }
  },
  tableForm: {
    search: '查询',
    reset: '重置',
    submit: '提交',
    collapsed: '展开',
    expand: '收起',
    inputPlaceholder: '请输入',
    selectPlaceholder: '请选择'
  },
  alert: {
    clear: '取消选择',
    selected: '已选择',
    item: '项'
  },
  pagination: {
    total: {
      range: '第',
      total: '条/总共',
      item: '条'
    }
  },
  tableToolBar: {
    leftPin: '固定在列首',
    rightPin: '固定在列尾',
    noPin: '不固定',
    leftFixedTitle: '固定在左侧',
    rightFixedTitle: '固定在右侧',
    noFixedTitle: '不固定',
    reset: '重置',
    columnDisplay: '列展示',
    columnSetting: '列设置',
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    reload: '刷新',
    density: '密度',
    densityDefault: '正常',
    densityLarger: '宽松',
    densityMiddle: '中等',
    densitySmall: '紧凑'
  },
  stepsForm: {
    next: '下一步',
    prev: '上一步',
    submit: '提交'
  },
  loginForm: {
    submitText: '登录'
  },
  editableTable: {
    onlyOneLineEditor: '只能同时编辑一行',
    action: {
      save: '保存',
      cancel: '取消',
      delete: '删除',
      add: '添加一行数据'
    }
  },
  switch: {
    open: '打开',
    close: '关闭'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/locale/zh_TW.js
/* harmony default export */ var zh_TW = ({
  moneySymbol: 'NT$',
  deleteThisLine: '刪除此项',
  copyThisLine: '複製此项',
  form: {
    lightFilter: {
      more: '更多篩選',
      clear: '清除',
      confirm: '確認',
      itemUnit: '項'
    }
  },
  tableForm: {
    search: '查詢',
    reset: '重置',
    submit: '提交',
    collapsed: '展開',
    expand: '收起',
    inputPlaceholder: '請輸入',
    selectPlaceholder: '請選擇'
  },
  alert: {
    clear: '取消選擇',
    selected: '已選擇',
    item: '項'
  },
  pagination: {
    total: {
      range: '第',
      total: '條/總共',
      item: '條'
    }
  },
  tableToolBar: {
    leftPin: '固定到左邊',
    rightPin: '固定到右邊',
    noPin: '不固定',
    leftFixedTitle: '固定在左側',
    rightFixedTitle: '固定在右側',
    noFixedTitle: '不固定',
    reset: '重置',
    columnDisplay: '列展示',
    columnSetting: '列設置',
    fullScreen: '全屏',
    exitFullScreen: '退出全屏',
    reload: '刷新',
    density: '密度',
    densityDefault: '正常',
    densityLarger: '寬鬆',
    densityMiddle: '中等',
    densitySmall: '緊湊'
  },
  stepsForm: {
    next: '下一步',
    prev: '上一步',
    submit: '完成'
  },
  loginForm: {
    submitText: '登入'
  },
  editableTable: {
    onlyOneLineEditor: '只能同時編輯一行',
    action: {
      save: '保存',
      cancel: '取消',
      delete: '刪除',
      add: '新增一行資料'
    }
  },
  switch: {
    open: '打開',
    close: '關閉'
  }
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/intl.js

































/**
 * 创建一个国际化的操作函数
 *
 * @param locale
 * @param localeMap
 */
var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      var msg = (0,es.get)(localeMap, id.replace(/\[(\d+)\]/g, '.$1').split('.')) || '';
      if (msg) return msg;
      var localKey = locale.replace('_', '-');
      if (localKey === 'zh-CN') {
        return defaultMessage;
      }
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      var intl = intlMap['zh-CN'];
      return intl ? intl.getMessage(id, defaultMessage) : defaultMessage;
    },
    locale: locale
  };
};
var mnMNIntl = createIntl('mn_MN', mn_MN);
var arEGIntl = createIntl('ar_EG', ar_EG);
var zhCNIntl = createIntl('zh_CN', zh_CN);
var enUSIntl = createIntl('en_US', en_US);
var enGBIntl = createIntl('en_GB', en_GB);
var viVNIntl = createIntl('vi_VN', vi_VN);
var itITIntl = createIntl('it_IT', it_IT);
var jaJPIntl = createIntl('ja_JP', ja_JP);
var esESIntl = createIntl('es_ES', es_ES);
var caESIntl = createIntl('ca_ES', ca_ES);
var ruRUIntl = createIntl('ru_RU', ru_RU);
var srRSIntl = createIntl('sr_RS', sr_RS);
var msMYIntl = createIntl('ms_MY', ms_MY);
var zhTWIntl = createIntl('zh_TW', zh_TW);
var frFRIntl = createIntl('fr_FR', fr_FR);
var ptBRIntl = createIntl('pt_BR', pt_BR);
var koKRIntl = createIntl('ko_KR', ko_KR);
var idIDIntl = createIntl('id_ID', id_ID);
var deDEIntl = createIntl('de_DE', de_DE);
var faIRIntl = createIntl('fa_IR', fa_IR);
var trTRIntl = createIntl('tr_TR', tr_TR);
var plPLIntl = createIntl('pl_PL', pl_PL);
var hrHRIntl = createIntl('hr_', hr_HR);
var thTHIntl = createIntl('th_TH', th_TH);
var csCZIntl = createIntl('cs_cz', cs_CZ);
var skSKIntl = createIntl('sk_SK', sk_SK);
var heILIntl = createIntl('he_IL', he_IL);
var ukUAIntl = createIntl('uk_UA', uk_UA);
var uzUZIntl = createIntl('uz_UZ', uz_UZ);
var nlNLIntl = createIntl('nl_NL', nl_NL);
var roROIntl = createIntl('ro_RO', ro_RO);
var svSEIntl = createIntl('sv_SE', sv_SE);
var intlMap = {
  'mn-MN': mnMNIntl,
  'ar-EG': arEGIntl,
  'zh-CN': zhCNIntl,
  'en-US': enUSIntl,
  'en-GB': enGBIntl,
  'vi-VN': viVNIntl,
  'it-IT': itITIntl,
  'ja-JP': jaJPIntl,
  'es-ES': esESIntl,
  'ca-ES': caESIntl,
  'ru-RU': ruRUIntl,
  'sr-RS': srRSIntl,
  'ms-MY': msMYIntl,
  'zh-TW': zhTWIntl,
  'fr-FR': frFRIntl,
  'pt-BR': ptBRIntl,
  'ko-KR': koKRIntl,
  'id-ID': idIDIntl,
  'de-DE': deDEIntl,
  'fa-IR': faIRIntl,
  'tr-TR': trTRIntl,
  'pl-PL': plPLIntl,
  'hr-HR': hrHRIntl,
  'th-TH': thTHIntl,
  'cs-CZ': csCZIntl,
  'sk-SK': skSKIntl,
  'he-IL': heILIntl,
  'uk-UA': ukUAIntl,
  'uz-UZ': uzUZIntl,
  'nl-NL': nlNLIntl,
  'ro-RO': roROIntl,
  'sv-SE': svSEIntl
};
var intlMapKeys = Object.keys(intlMap);

/**
 * 根据 antd 的 key 来找到的 locale 插件的 key
 *
 * @param localeKey
 */
var findIntlKeyByAntdLocaleKey = function findIntlKeyByAntdLocaleKey(localeKey) {
  var localeName = (localeKey || 'zh-CN').toLocaleLowerCase();
  return intlMapKeys.find(function (intlKey) {
    var LowerCaseKey = intlKey.toLocaleLowerCase();
    return LowerCaseKey.includes(localeName);
  });
};


/***/ }),

/***/ 58345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Nd: function() { return /* binding */ operationUnit; },
  Ow: function() { return /* binding */ proTheme; },
  Wf: function() { return /* binding */ resetComponent; },
  uK: function() { return /* binding */ setAlpha; },
  Xj: function() { return /* binding */ useStyle; },
  dQ: function() { return /* binding */ useToken; }
});

// UNUSED EXPORTS: lighten

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(99426);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20865);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/util.js
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function util_pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/conversion.js

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        util_pad2(Math.round(r).toString(16)),
        util_pad2(Math.round(g).toString(16)),
        util_pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        util_pad2(Math.round(r).toString(16)),
        util_pad2(Math.round(g).toString(16)),
        util_pad2(Math.round(b).toString(16)),
        util_pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/format-input.js
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/index.js




var module_TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns whether the color is monochrome.
     */
    TinyColor.prototype.isMonochrome = function () {
        var s = this.toHsl().s;
        return s === 0;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # prefixed.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # prefixed.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
     * @param allowShortChar will shorten hex value to 3 or 4 char if possible
     */
    TinyColor.prototype.toHexShortString = function (allowShortChar) {
        if (allowShortChar === void 0) { allowShortChar = false; }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round(bound01(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(bound01(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor({
            r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
            g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
            b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
            a: alpha,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

// kept for backwards compatability with v1
function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new module_TinyColor(color, opts);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/index.js + 2 modules
var pro_provider_es = __webpack_require__(47673);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/useStyle/token.js
var token = __webpack_require__(53070);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1_de7655d1383ef3625306b8c4dac131b7/node_modules/@ant-design/pro-provider/es/useStyle/index.js








/**
 * 把一个颜色设置一下透明度
 * @example (#fff, 0.5) => rgba(255, 255, 255, 0.5)
 * @param baseColor {string}
 * @param alpha {0-1}
 * @returns rgba {string}
 */
var setAlpha = function setAlpha(baseColor, alpha) {
  return new module_TinyColor(baseColor).setAlpha(alpha).toRgbString();
};

/**
 * 把一个颜色修改一些明度
 * @example (#000, 50) => #808080
 * @param baseColor {string}
 * @param brightness {0-100}
 * @returns hexColor {string}
 */
var lighten = function lighten(baseColor, brightness) {
  var instance = new TinyColor(baseColor);
  return instance.lighten(brightness).toHexString();
};
var genTheme = function genTheme() {
  if (typeof theme/* default */.Z === 'undefined' || !theme/* default */.Z) return token;
  return theme/* default */.Z;
};
var proTheme = genTheme();
var useToken = proTheme.useToken;
var resetComponent = function resetComponent(token) {
  return {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    listStyle: 'none'
  };
};
var operationUnit = function operationUnit(token) {
  return {
    // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
    // And Typography use this to generate link style which should not do this.
    color: token.colorLink,
    outline: 'none',
    cursor: 'pointer',
    transition: "color ".concat(token.motionDurationSlow),
    '&:focus, &:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    }
  };
};

/**
 * 封装了一下 antd 的 useStyle，支持了一下antd@4
 * @param componentName {string} 组件的名字
 * @param styleFn {GenerateStyle} 生成样式的函数
 * @returns UseStyleResult
 */
function useStyle(componentName, styleFn) {
  var _token$proComponentsC;
  var _useContext = (0,react.useContext)(pro_provider_es/* ProProvider */.L_),
    _useContext$token = _useContext.token,
    token = _useContext$token === void 0 ? {} : _useContext$token;
  var _useContext2 = (0,react.useContext)(pro_provider_es/* ProProvider */.L_),
    hashed = _useContext2.hashed;
  var _useToken = useToken(),
    antdToken = _useToken.token,
    hashId = _useToken.hashId;
  var _useContext3 = (0,react.useContext)(pro_provider_es/* ProProvider */.L_),
    provideTheme = _useContext3.theme;
  var _useContext4 = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    getPrefixCls = _useContext4.getPrefixCls,
    csp = _useContext4.csp;

  // 如果不在 ProProvider 里面，就用 antd 的
  if (!token.layout) {
    token = (0,objectSpread2/* default */.Z)({}, antdToken);
  }
  token.proComponentsCls = (_token$proComponentsC = token.proComponentsCls) !== null && _token$proComponentsC !== void 0 ? _token$proComponentsC : ".".concat(getPrefixCls('pro'));
  token.antCls = ".".concat(getPrefixCls());
  return {
    wrapSSR: (0,es.useStyleRegister)({
      theme: provideTheme,
      token: token,
      path: [componentName],
      nonce: csp === null || csp === void 0 ? void 0 : csp.nonce,
      layer: {
        name: 'antd-pro',
        dependencies: ['antd']
      }
    }, function () {
      return styleFn(token);
    }),
    hashId: hashed ? hashId : ''
  };
}

/***/ }),

/***/ 53070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultToken: function() { return /* binding */ defaultToken; },
/* harmony export */   emptyTheme: function() { return /* binding */ emptyTheme; },
/* harmony export */   hashCode: function() { return /* binding */ hashCode; },
/* harmony export */   token: function() { return /* binding */ token; },
/* harmony export */   useToken: function() { return /* binding */ useToken; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99426);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20865);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10991);

var _theme$defaultAlgorit;


var defaultToken = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911',
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff7875',
  colorInfo: '#1677ff',
  colorTextBase: '#000',
  colorBgBase: '#fff',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  fontSize: 14,
  lineWidth: 1,
  lineType: 'solid',
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInQuint: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  borderRadius: 4,
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  controlHeight: 32,
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  opacityImage: 1,
  wireframe: false,
  'blue-1': '#e6f4ff',
  'blue-2': '#bae0ff',
  'blue-3': '#91caff',
  'blue-4': '#69b1ff',
  'blue-5': '#4096ff',
  'blue-6': '#1677ff',
  'blue-7': '#0958d9',
  'blue-8': '#003eb3',
  'blue-9': '#002c8c',
  'blue-10': '#001d66',
  'purple-1': '#f9f0ff',
  'purple-2': '#efdbff',
  'purple-3': '#d3adf7',
  'purple-4': '#b37feb',
  'purple-5': '#9254de',
  'purple-6': '#722ed1',
  'purple-7': '#531dab',
  'purple-8': '#391085',
  'purple-9': '#22075e',
  'purple-10': '#120338',
  'cyan-1': '#e6fffb',
  'cyan-2': '#b5f5ec',
  'cyan-3': '#87e8de',
  'cyan-4': '#5cdbd3',
  'cyan-5': '#36cfc9',
  'cyan-6': '#13c2c2',
  'cyan-7': '#08979c',
  'cyan-8': '#006d75',
  'cyan-9': '#00474f',
  'cyan-10': '#002329',
  'green-1': '#f6ffed',
  'green-2': '#d9f7be',
  'green-3': '#b7eb8f',
  'green-4': '#95de64',
  'green-5': '#73d13d',
  'green-6': '#52c41a',
  'green-7': '#389e0d',
  'green-8': '#237804',
  'green-9': '#135200',
  'green-10': '#092b00',
  'magenta-1': '#fff0f6',
  'magenta-2': '#ffd6e7',
  'magenta-3': '#ffadd2',
  'magenta-4': '#ff85c0',
  'magenta-5': '#f759ab',
  'magenta-6': '#eb2f96',
  'magenta-7': '#c41d7f',
  'magenta-8': '#9e1068',
  'magenta-9': '#780650',
  'magenta-10': '#520339',
  'pink-1': '#fff0f6',
  'pink-2': '#ffd6e7',
  'pink-3': '#ffadd2',
  'pink-4': '#ff85c0',
  'pink-5': '#f759ab',
  'pink-6': '#eb2f96',
  'pink-7': '#c41d7f',
  'pink-8': '#9e1068',
  'pink-9': '#780650',
  'pink-10': '#520339',
  'red-1': '#fff1f0',
  'red-2': '#ffccc7',
  'red-3': '#ffa39e',
  'red-4': '#ff7875',
  'red-5': '#ff4d4f',
  'red-6': '#f5222d',
  'red-7': '#cf1322',
  'red-8': '#a8071a',
  'red-9': '#820014',
  'red-10': '#5c0011',
  'orange-1': '#fff7e6',
  'orange-2': '#ffe7ba',
  'orange-3': '#ffd591',
  'orange-4': '#ffc069',
  'orange-5': '#ffa940',
  'orange-6': '#fa8c16',
  'orange-7': '#d46b08',
  'orange-8': '#ad4e00',
  'orange-9': '#873800',
  'orange-10': '#612500',
  'yellow-1': '#feffe6',
  'yellow-2': '#ffffb8',
  'yellow-3': '#fffb8f',
  'yellow-4': '#fff566',
  'yellow-5': '#ffec3d',
  'yellow-6': '#fadb14',
  'yellow-7': '#d4b106',
  'yellow-8': '#ad8b00',
  'yellow-9': '#876800',
  'yellow-10': '#614700',
  'volcano-1': '#fff2e8',
  'volcano-2': '#ffd8bf',
  'volcano-3': '#ffbb96',
  'volcano-4': '#ff9c6e',
  'volcano-5': '#ff7a45',
  'volcano-6': '#fa541c',
  'volcano-7': '#d4380d',
  'volcano-8': '#ad2102',
  'volcano-9': '#871400',
  'volcano-10': '#610b00',
  'geekblue-1': '#f0f5ff',
  'geekblue-2': '#d6e4ff',
  'geekblue-3': '#adc6ff',
  'geekblue-4': '#85a5ff',
  'geekblue-5': '#597ef7',
  'geekblue-6': '#2f54eb',
  'geekblue-7': '#1d39c4',
  'geekblue-8': '#10239e',
  'geekblue-9': '#061178',
  'geekblue-10': '#030852',
  'gold-1': '#fffbe6',
  'gold-2': '#fff1b8',
  'gold-3': '#ffe58f',
  'gold-4': '#ffd666',
  'gold-5': '#ffc53d',
  'gold-6': '#faad14',
  'gold-7': '#d48806',
  'gold-8': '#ad6800',
  'gold-9': '#874d00',
  'gold-10': '#613400',
  'lime-1': '#fcffe6',
  'lime-2': '#f4ffb8',
  'lime-3': '#eaff8f',
  'lime-4': '#d3f261',
  'lime-5': '#bae637',
  'lime-6': '#a0d911',
  'lime-7': '#7cb305',
  'lime-8': '#5b8c00',
  'lime-9': '#3f6600',
  'lime-10': '#254000',
  colorText: 'rgba(0, 0, 0, 0.88)',
  colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
  colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
  colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
  colorFill: 'rgba(0, 0, 0, 0.15)',
  colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
  colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
  colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
  colorBgLayout: 'hsl(220,23%,97%)',
  colorBgContainer: '#ffffff',
  colorBgElevated: '#ffffff',
  colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',
  colorBorder: '#d9d9d9',
  colorBorderSecondary: '#f0f0f0',
  colorPrimaryBg: '#e6f4ff',
  colorPrimaryBgHover: '#bae0ff',
  colorPrimaryBorder: '#91caff',
  colorPrimaryBorderHover: '#69b1ff',
  colorPrimaryHover: '#4096ff',
  colorPrimaryActive: '#0958d9',
  colorPrimaryTextHover: '#4096ff',
  colorPrimaryText: '#1677ff',
  colorPrimaryTextActive: '#0958d9',
  colorSuccessBg: '#f6ffed',
  colorSuccessBgHover: '#d9f7be',
  colorSuccessBorder: '#b7eb8f',
  colorSuccessBorderHover: '#95de64',
  colorSuccessHover: '#95de64',
  colorSuccessActive: '#389e0d',
  colorSuccessTextHover: '#73d13d',
  colorSuccessText: '#52c41a',
  colorSuccessTextActive: '#389e0d',
  colorErrorBg: '#fff2f0',
  colorErrorBgHover: '#fff1f0',
  colorErrorBorder: '#ffccc7',
  colorErrorBorderHover: '#ffa39e',
  colorErrorHover: '#ffa39e',
  colorErrorActive: '#d9363e',
  colorErrorTextHover: '#ff7875',
  colorErrorText: '#ff4d4f',
  colorErrorTextActive: '#d9363e',
  colorWarningBg: '#fffbe6',
  colorWarningBgHover: '#fff1b8',
  colorWarningBorder: '#ffe58f',
  colorWarningBorderHover: '#ffd666',
  colorWarningHover: '#ffd666',
  colorWarningActive: '#d48806',
  colorWarningTextHover: '#ffc53d',
  colorWarningText: '#faad14',
  colorWarningTextActive: '#d48806',
  colorInfoBg: '#e6f4ff',
  colorInfoBgHover: '#bae0ff',
  colorInfoBorder: '#91caff',
  colorInfoBorderHover: '#69b1ff',
  colorInfoHover: '#69b1ff',
  colorInfoActive: '#0958d9',
  colorInfoTextHover: '#4096ff',
  colorInfoText: '#1677ff',
  colorInfoTextActive: '#0958d9',
  colorBgMask: 'rgba(0, 0, 0, 0.45)',
  colorWhite: '#fff',
  sizeXXL: 48,
  sizeXL: 32,
  sizeLG: 24,
  sizeMD: 20,
  sizeMS: 16,
  size: 16,
  sizeSM: 12,
  sizeXS: 8,
  sizeXXS: 4,
  controlHeightSM: 24,
  controlHeightXS: 16,
  controlHeightLG: 40,
  motionDurationFast: '0.1s',
  motionDurationMid: '0.2s',
  motionDurationSlow: '0.3s',
  fontSizes: [12, 14, 16, 20, 24, 30, 38, 46, 56, 68],
  lineHeights: [1.6666666666666667, 1.5714285714285714, 1.5, 1.4, 1.3333333333333333, 1.2666666666666666, 1.2105263157894737, 1.173913043478261, 1.1428571428571428, 1.1176470588235294],
  lineWidthBold: 2,
  borderRadiusXS: 1,
  borderRadiusSM: 4,
  borderRadiusLG: 8,
  borderRadiusOuter: 4,
  colorLink: '#1677ff',
  colorLinkHover: '#69b1ff',
  colorLinkActive: '#0958d9',
  colorFillContent: 'rgba(0, 0, 0, 0.06)',
  colorFillContentHover: 'rgba(0, 0, 0, 0.15)',
  colorFillAlter: 'rgba(0, 0, 0, 0.02)',
  colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
  colorBorderBg: '#ffffff',
  colorSplit: 'rgba(5, 5, 5, 0.06)',
  colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
  colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
  colorTextHeading: 'rgba(0, 0, 0, 0.88)',
  colorTextLabel: 'rgba(0, 0, 0, 0.65)',
  colorTextDescription: 'rgba(0, 0, 0, 0.45)',
  colorTextLightSolid: '#fff',
  colorHighlight: '#ff7875',
  colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
  colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
  colorIcon: 'rgba(0, 0, 0, 0.45)',
  colorIconHover: 'rgba(0, 0, 0, 0.88)',
  colorErrorOutline: 'rgba(255, 38, 5, 0.06)',
  colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeHeading1: 38,
  fontSizeHeading2: 30,
  fontSizeHeading3: 24,
  fontSizeHeading4: 20,
  fontSizeHeading5: 16,
  fontSizeIcon: 12,
  lineHeight: 1.5714285714285714,
  lineHeightLG: 1.5,
  lineHeightSM: 1.6666666666666667,
  lineHeightHeading1: 1.2105263157894737,
  lineHeightHeading2: 1.2666666666666666,
  lineHeightHeading3: 1.3333333333333333,
  lineHeightHeading4: 1.4,
  lineHeightHeading5: 1.5,
  controlOutlineWidth: 2,
  controlInteractiveSize: 16,
  controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
  controlItemBgActive: '#e6f4ff',
  controlItemBgActiveHover: '#bae0ff',
  controlItemBgActiveDisabled: 'rgba(0, 0, 0, 0.15)',
  controlTmpOutline: 'rgba(0, 0, 0, 0.02)',
  controlOutline: 'rgba(5, 145, 255, 0.1)',
  fontWeightStrong: 600,
  opacityLoading: 0.65,
  linkDecoration: 'none',
  linkHoverDecoration: 'none',
  linkFocusDecoration: 'none',
  controlPaddingHorizontal: 12,
  controlPaddingHorizontalSM: 8,
  paddingXXS: 4,
  paddingXS: 8,
  paddingSM: 12,
  padding: 16,
  paddingMD: 20,
  paddingLG: 24,
  paddingXL: 32,
  paddingContentHorizontalLG: 24,
  paddingContentVerticalLG: 16,
  paddingContentHorizontal: 16,
  paddingContentVertical: 12,
  paddingContentHorizontalSM: 16,
  paddingContentVerticalSM: 8,
  marginXXS: 4,
  marginXS: 8,
  marginSM: 12,
  margin: 16,
  marginMD: 20,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02)',
  boxShadowSecondary: '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  screenXS: 480,
  screenXSMin: 480,
  screenXSMax: 479,
  screenSM: 576,
  screenSMMin: 576,
  screenSMMax: 575,
  screenMD: 768,
  screenMDMin: 768,
  screenMDMax: 767,
  screenLG: 992,
  screenLGMin: 992,
  screenLGMax: 991,
  screenXL: 1200,
  screenXLMin: 1200,
  screenXLMax: 1199,
  screenXXL: 1600,
  screenXXLMin: 1600,
  screenXXLMax: 1599,
  boxShadowPopoverArrow: '3px 3px 7px rgba(0, 0, 0, 0.1)',
  boxShadowCard: '0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)',
  boxShadowDrawerRight: '-6px 0 16px 0 rgba(0, 0, 0, 0.08),-3px 0 6px -4px rgba(0, 0, 0, 0.12),-9px 0 28px 8px rgba(0, 0, 0, 0.05)',
  boxShadowDrawerLeft: '6px 0 16px 0 rgba(0, 0, 0, 0.08),3px 0 6px -4px rgba(0, 0, 0, 0.12),9px 0 28px 8px rgba(0, 0, 0, 0.05)',
  boxShadowDrawerUp: '0 6px 16px 0 rgba(0, 0, 0, 0.08),0 3px 6px -4px rgba(0, 0, 0, 0.12),0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  boxShadowDrawerDown: '0 -6px 16px 0 rgba(0, 0, 0, 0.08),0 -3px 6px -4px rgba(0, 0, 0, 0.12),0 -9px 28px 8px rgba(0, 0, 0, 0.05)',
  boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
  boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
  _tokenKey: '19w80ff',
  _hashId: 'css-dev-only-do-not-override-i2zu9q'
};
var hashCode = function hashCode(str) {
  var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

// @ts-ignore
var emptyTheme = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.createTheme)(function (token) {
  return token;
});
var token = {
  theme: emptyTheme,
  token: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, defaultToken), antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z === null || antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z === void 0 || (_theme$defaultAlgorit = antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.defaultAlgorithm) === null || _theme$defaultAlgorit === void 0 ? void 0 : _theme$defaultAlgorit.call(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z === null || antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z === void 0 ? void 0 : antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.defaultSeed)),
  hashId: "pro-".concat(hashCode(JSON.stringify(defaultToken)))
};
var useToken = function useToken() {
  return token;
};

/***/ }),

/***/ 13141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: function() { return /* binding */ compareVersions; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75611);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74826);


var semver = /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

/**
 * @param  {string} s
 */
var isWildcard = function isWildcard(s) {
  return s === '*' || s === 'x' || s === 'X';
};
/**
 * @param  {string} v
 */
var tryParse = function tryParse(v) {
  var n = parseInt(v, 10);
  return isNaN(n) ? v : n;
};
/**
 * @param  {string|number} a
 * @param  {string|number} b
 */
var forceType = function forceType(a, b) {
  return (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(a) !== (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(b) ? [String(a), String(b)] : [a, b];
};

/**
 * @param  {string} a
 * @param  {string} b
 * @returns number
 */
var compareStrings = function compareStrings(a, b) {
  if (isWildcard(a) || isWildcard(b)) return 0;
  var _forceType = forceType(tryParse(a), tryParse(b)),
    _forceType2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_forceType, 2),
    ap = _forceType2[0],
    bp = _forceType2[1];
  if (ap > bp) return 1;
  if (ap < bp) return -1;
  return 0;
};
/**
 * @param  {string|RegExpMatchArray} a
 * @param  {string|RegExpMatchArray} b
 * @returns number
 */
var compareSegments = function compareSegments(a, b) {
  for (var i = 0; i < Math.max(a.length, b.length); i++) {
    var r = compareStrings(a[i] || '0', b[i] || '0');
    if (r !== 0) return r;
  }
  return 0;
};
/**
 * @param  {string} version
 * @returns RegExpMatchArray
 */
var validateAndParse = function validateAndParse(version) {
  var _match$shift;
  var match = version.match(semver);
  match === null || match === void 0 || (_match$shift = match.shift) === null || _match$shift === void 0 || _match$shift.call(match);
  return match;
};

/**
 * Compare [semver](https://semver.org/) version strings to find greater, equal or lesser.
 * This library supports the full semver specification, including comparing versions with different number of digits like `1.0.0`, `1.0`, `1`, and pre-release versions like `1.0.0-alpha`.
 * @param v1 - First version to compare
 * @param v2 - Second version to compare
 * @returns Numeric value compatible with the [Array.sort(fn) interface](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Parameters).
 */
var compareVersions = function compareVersions(v1, v2) {
  // validate input and split into segments
  var n1 = validateAndParse(v1);
  var n2 = validateAndParse(v2);

  // pop off the patch
  var p1 = n1.pop();
  var p2 = n2.pop();

  // validate numbers
  var r = compareSegments(n1, n2);
  if (r !== 0) return r;
  if (p1 || p2) {
    return p1 ? -1 : 1;
  }
  return 0;
};

/***/ }),

/***/ 61595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ openVisibleCompatible; },
/* harmony export */   b: function() { return /* binding */ getVersion; }
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97852);
/* harmony import */ var _omitUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2381);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13141);
/* provided dependency */ var process = __webpack_require__(14224);



var getVersion = function getVersion() {
  var _process;
  if (typeof process === 'undefined') return antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
  return ((_process = process) === null || process === void 0 || (process = ({"NODE_ENV":"production","PUBLIC_PATH":"/"})) === null || process === void 0 ? void 0 : process.ANTD_VERSION) || antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
};
var openVisibleCompatible = function openVisibleCompatible(open, onOpenChange) {
  var props = (0,_index__WEBPACK_IMPORTED_MODULE_1__/* .compareVersions */ .n)(getVersion(), '4.23.0') > -1 ? {
    open: open,
    onOpenChange: onOpenChange
  } : {
    visible: open,
    onVisibleChange: onOpenChange
  };
  return (0,_omitUndefined__WEBPACK_IMPORTED_MODULE_2__/* .omitUndefined */ .Y)(props);
};


/***/ }),

/***/ 99095:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ useDebounceFn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61818);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86669);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var _useRefFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18570);




/**
 * 一个去抖的 hook，传入一个 function，返回一个去抖后的 function
 * @param  {(...args:T) => Promise<any>} fn
 * @param  {number} wait?
 */
function useDebounceFn(fn, wait) {
  var callback = (0,_useRefFunction__WEBPACK_IMPORTED_MODULE_1__/* .useRefFunction */ .J)(fn);
  var timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var cancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);
  var run = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().mark(function _callee2() {
    var _len,
      args,
      _key,
      _args2 = arguments;
    return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          for (_len = _args2.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = _args2[_key];
          }
          if (!(wait === 0 || wait === undefined)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", callback.apply(void 0, args));
        case 3:
          cancel();
          return _context2.abrupt("return", new Promise(function (resolve) {
            timer.current = setTimeout( /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().mark(function _callee() {
              return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = resolve;
                    _context.next = 3;
                    return callback.apply(void 0, args);
                  case 3:
                    _context.t1 = _context.sent;
                    (0, _context.t0)(_context.t1);
                    return _context.abrupt("return");
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })), wait);
          }));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [callback, cancel, wait]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return cancel;
  }, [cancel]);
  return {
    run: run,
    cancel: cancel
  };
}

/***/ }),

/***/ 18570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: function() { return /* binding */ useRefFunction; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81230);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);


var useRefFunction = function useRefFunction(reFunction) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  ref.current = reFunction;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var _ref$current;
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }
    return (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.call.apply(_ref$current, [ref].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(rest)));
  }, []);
};


/***/ }),

/***/ 2381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ omitUndefined; }
/* harmony export */ });
var omitUndefined = function omitUndefined(obj) {
  var newObj = {};
  Object.keys(obj || {}).forEach(function (key) {
    if (obj[key] !== undefined) {
      newObj[key] = obj[key];
    }
  });
  if (Object.keys(newObj).length < 1) {
    return undefined;
  }
  return newObj;
};

/***/ }),

/***/ 81414:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,_){ true?module.exports=_(__webpack_require__(16483)):0}(this,(function(e){"use strict";function _(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=_(e),d={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,_){return"W"===_?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,_){var t=100*e+_;return t<600?"凌晨":t<900?"早上":t<1100?"上午":t<1300?"中午":t<1800?"下午":"晚上"}};return t.default.locale(d,null,!0),d}));

/***/ }),

/***/ 16505:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(75271);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useState = React.useState,
  useEffect = React.useEffect,
  useLayoutEffect = React.useLayoutEffect,
  useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(),
    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
    inst = _useState[0].inst,
    forceUpdate = _useState[1];
  useLayoutEffect(
    function () {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect(
    function () {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      return subscribe(function () {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      });
    },
    [subscribe]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim =
  "undefined" === typeof window ||
  "undefined" === typeof window.document ||
  "undefined" === typeof window.document.createElement
    ? useSyncExternalStore$1
    : useSyncExternalStore$2;
exports.useSyncExternalStore =
  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;


/***/ }),

/***/ 38568:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(16505);
} else {}


/***/ }),

/***/ 508:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: function() { return /* binding */ isPromiseLike; },
  I: function() { return /* binding */ IS_REACT_LEGACY; },
  O: function() { return /* binding */ OBJECT; },
  S: function() { return /* binding */ SWRConfigContext; },
  U: function() { return /* binding */ UNDEFINED; },
  a: function() { return /* binding */ isFunction; },
  b: function() { return /* binding */ SWRGlobalState; },
  c: function() { return /* binding */ cache; },
  d: function() { return /* binding */ defaultConfig; },
  e: function() { return /* binding */ isUndefined; },
  f: function() { return /* binding */ mergeConfigs; },
  g: function() { return /* binding */ SWRConfig; },
  i: function() { return /* binding */ isWindowDefined; },
  m: function() { return /* binding */ mergeObjects; },
  n: function() { return /* binding */ internalMutate; },
  o: function() { return /* binding */ getTimestamp; },
  r: function() { return /* binding */ IS_SERVER; },
  s: function() { return /* binding */ serialize; },
  t: function() { return /* binding */ rAF; },
  u: function() { return /* binding */ useIsomorphicLayoutEffect; },
  z: function() { return /* binding */ createCacheHelper; }
});

// UNUSED EXPORTS: A, h, j, k, l, p, q, v, w, x, y

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/_internal/events.mjs
var events = __webpack_require__(50391);
;// CONCATENATED MODULE: ./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs
var has = Object.prototype.hasOwnProperty;

function dequal(foo, bar) {
	var ctor, len;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs
'use client';




// Global state used to deduplicate requests and store listeners
const SWRGlobalState = new WeakMap();

// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = Object;
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';
const mergeObjects = (a, b)=>({
        ...a,
        ...b
    });
const isPromiseLike = (x)=>isFunction(x.then);

const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
// NOTE: Use the function to guarantee it's re-evaluated between jsdom and node runtime for tests.
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
const isLegacyDeno = isWindowDefined && 'Deno' in window;
const hasRequestAnimationFrame = ()=>isWindowDefined && typeof window['requestAnimationFrame'] != STR_UNDEFINED;
const createCacheHelper = (cache, key)=>{
    const state = SWRGlobalState.get(cache);
    return [
        // Getter
        ()=>!isUndefined(key) && cache.get(key) || EMPTY_CACHE,
        // Setter
        (info)=>{
            if (!isUndefined(key)) {
                const prev = cache.get(key);
                // Before writing to the store, we keep the value in the initial cache
                // if it's not there yet.
                if (!(key in INITIAL_CACHE)) {
                    INITIAL_CACHE[key] = prev;
                }
                state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
            }
        },
        // Subscriber
        state[6],
        // Get server cache snapshot
        ()=>{
            if (!isUndefined(key)) {
                // If the cache was updated on the client, we return the stored initial value.
                if (key in INITIAL_CACHE) return INITIAL_CACHE[key];
            }
            // If we haven't done any client-side updates, we return the current value.
            return !isUndefined(key) && cache.get(key) || EMPTY_CACHE;
        }
    ];
} // export { UNDEFINED, OBJECT, isUndefined, isFunction, mergeObjects, isPromiseLike }
;

/**
 * Due to the bug https://bugs.chromium.org/p/chromium/issues/detail?id=678075,
 * it's not reliable to detect if the browser is currently online or offline
 * based on `navigator.onLine`.
 * As a workaround, we always assume it's online on the first load, and change
 * the status upon `online` or `offline` events.
 */ let online = true;
const isOnline = ()=>online;
// For node and React Native, `add/removeEventListener` doesn't exist on window.
const [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
    window.addEventListener.bind(window),
    window.removeEventListener.bind(window)
] : [
    noop,
    noop
];
const isVisible = ()=>{
    const visibilityState = isDocumentDefined && document.visibilityState;
    return isUndefined(visibilityState) || visibilityState !== 'hidden';
};
const initFocus = (callback)=>{
    // focus revalidate
    if (isDocumentDefined) {
        document.addEventListener('visibilitychange', callback);
    }
    onWindowEvent('focus', callback);
    return ()=>{
        if (isDocumentDefined) {
            document.removeEventListener('visibilitychange', callback);
        }
        offWindowEvent('focus', callback);
    };
};
const initReconnect = (callback)=>{
    // revalidate on reconnected
    const onOnline = ()=>{
        online = true;
        callback();
    };
    // nothing to revalidate, just update the status
    const onOffline = ()=>{
        online = false;
    };
    onWindowEvent('online', onOnline);
    onWindowEvent('offline', onOffline);
    return ()=>{
        offWindowEvent('online', onOnline);
        offWindowEvent('offline', onOffline);
    };
};
const preset = {
    isOnline,
    isVisible
};
const defaultConfigOptions = {
    initFocus,
    initReconnect
};

const IS_REACT_LEGACY = !react.useId;
const IS_SERVER = !isWindowDefined || isLegacyDeno;
// Polyfill requestAnimationFrame
const rAF = (f)=>hasRequestAnimationFrame() ? window['requestAnimationFrame'](f) : setTimeout(f, 1);
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
const useIsomorphicLayoutEffect = IS_SERVER ? react.useEffect : react.useLayoutEffect;
// This assignment is to extend the Navigator type to use effectiveType.
const navigatorConnection = typeof navigator !== 'undefined' && navigator.connection;
// Adjust the config based on slow connection status (<= 70Kbps).
const slowConnection = !IS_SERVER && navigatorConnection && ([
    'slow-2g',
    '2g'
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};

const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};

// Global timestamp.
let __timestamp = 0;
const getTimestamp = ()=>++__timestamp;

async function internalMutate(...args) {
    const [cache, _key, _data, _opts] = args;
    // When passing as a boolean, it's explicitly used to disable/enable
    // revalidation.
    const options = mergeObjects({
        populateCache: true,
        throwOnError: true
    }, typeof _opts === 'boolean' ? {
        revalidate: _opts
    } : _opts || {});
    let populateCache = options.populateCache;
    const rollbackOnErrorOption = options.rollbackOnError;
    let optimisticData = options.optimisticData;
    const rollbackOnError = (error)=>{
        return typeof rollbackOnErrorOption === 'function' ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
    };
    const throwOnError = options.throwOnError;
    // If the second argument is a key filter, return the mutation results for all
    // filtered keys.
    if (isFunction(_key)) {
        const keyFilter = _key;
        const matchedKeys = [];
        const it = cache.keys();
        for (const key of it){
            if (// Skip the special useSWRInfinite and useSWRSubscription keys.
            !/^\$(inf|sub)\$/.test(key) && keyFilter(cache.get(key)._k)) {
                matchedKeys.push(key);
            }
        }
        return Promise.all(matchedKeys.map(mutateByKey));
    }
    return mutateByKey(_key);
    async function mutateByKey(_k) {
        // Serialize key
        const [key] = serialize(_k);
        if (!key) return;
        const [get, set] = createCacheHelper(cache, key);
        const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
        const startRevalidate = ()=>{
            const revalidators = EVENT_REVALIDATORS[key];
            const revalidate = isFunction(options.revalidate) ? options.revalidate(get().data, _k) : options.revalidate !== false;
            if (revalidate) {
                // Invalidate the key by deleting the concurrent request markers so new
                // requests will not be deduped.
                delete FETCH[key];
                delete PRELOAD[key];
                if (revalidators && revalidators[0]) {
                    return revalidators[0](events/* MUTATE_EVENT */.QQ).then(()=>get().data);
                }
            }
            return get().data;
        };
        // If there is no new data provided, revalidate the key with current state.
        if (args.length < 3) {
            // Revalidate and broadcast state.
            return startRevalidate();
        }
        let data = _data;
        let error;
        // Update global timestamps.
        const beforeMutationTs = getTimestamp();
        MUTATION[key] = [
            beforeMutationTs,
            0
        ];
        const hasOptimisticData = !isUndefined(optimisticData);
        const state = get();
        // `displayedData` is the current value on screen. It could be the optimistic value
        // that is going to be overridden by a `committedData`, or get reverted back.
        // `committedData` is the validated value that comes from a fetch or mutation.
        const displayedData = state.data;
        const currentData = state._c;
        const committedData = isUndefined(currentData) ? displayedData : currentData;
        // Do optimistic data update.
        if (hasOptimisticData) {
            optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
            // When we set optimistic data, backup the current committedData data in `_c`.
            set({
                data: optimisticData,
                _c: committedData
            });
        }
        if (isFunction(data)) {
            // `data` is a function, call it passing current cache value.
            try {
                data = data(committedData);
            } catch (err) {
                // If it throws an error synchronously, we shouldn't update the cache.
                error = err;
            }
        }
        // `data` is a promise/thenable, resolve the final data first.
        if (data && isPromiseLike(data)) {
            // This means that the mutation is async, we need to check timestamps to
            // avoid race conditions.
            data = await data.catch((err)=>{
                error = err;
            });
            // Check if other mutations have occurred since we've started this mutation.
            // If there's a race we don't update cache or broadcast the change,
            // just return the data.
            if (beforeMutationTs !== MUTATION[key][0]) {
                if (error) throw error;
                return data;
            } else if (error && hasOptimisticData && rollbackOnError(error)) {
                // Rollback. Always populate the cache in this case but without
                // transforming the data.
                populateCache = true;
                // Reset data to be the latest committed data, and clear the `_c` value.
                set({
                    data: committedData,
                    _c: UNDEFINED
                });
            }
        }
        // If we should write back the cache after request.
        if (populateCache) {
            if (!error) {
                // Transform the result into data.
                if (isFunction(populateCache)) {
                    const populateCachedData = populateCache(data, committedData);
                    set({
                        data: populateCachedData,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                } else {
                    // Only update cached data and reset the error if there's no error. Data can be `undefined` here.
                    set({
                        data,
                        error: UNDEFINED,
                        _c: UNDEFINED
                    });
                }
            }
        }
        // Reset the timestamp to mark the mutation has ended.
        MUTATION[key][1] = getTimestamp();
        // Update existing SWR Hooks' internal states:
        Promise.resolve(startRevalidate()).then(()=>{
            // The mutation and revalidation are ended, we can clear it since the data is
            // not an optimistic value anymore.
            set({
                _c: UNDEFINED
            });
        });
        // Throw error or return data
        if (error) {
            if (throwOnError) throw error;
            return;
        }
        return data;
    }
}

const revalidateAllKeys = (revalidators, type)=>{
    for(const key in revalidators){
        if (revalidators[key][0]) revalidators[key][0](type);
    }
};
const initCache = (provider, options)=>{
    // The global state for a specific provider will be used to deduplicate
    // requests and store listeners. As well as a mutate function that is bound to
    // the cache.
    // The provider's global state might be already initialized. Let's try to get the
    // global state associated with the provider first.
    if (!SWRGlobalState.has(provider)) {
        const opts = mergeObjects(defaultConfigOptions, options);
        // If there's no global state bound to the provider, create a new one with the
        // new mutate function.
        const EVENT_REVALIDATORS = Object.create(null);
        const mutate = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = Object.create(null);
        const subscribe = (key, callback)=>{
            const subs = subscriptions[key] || [];
            subscriptions[key] = subs;
            subs.push(callback);
            return ()=>subs.splice(subs.indexOf(callback), 1);
        };
        const setter = (key, value, prev)=>{
            provider.set(key, value);
            const subs = subscriptions[key];
            if (subs) {
                for (const fn of subs){
                    fn(value, prev);
                }
            }
        };
        const initProvider = ()=>{
            if (!SWRGlobalState.has(provider)) {
                // Update the state if it's new, or if the provider has been extended.
                SWRGlobalState.set(provider, [
                    EVENT_REVALIDATORS,
                    Object.create(null),
                    Object.create(null),
                    Object.create(null),
                    mutate,
                    setter,
                    subscribe
                ]);
                if (!IS_SERVER) {
                    // When listening to the native events for auto revalidations,
                    // we intentionally put a delay (setTimeout) here to make sure they are
                    // fired after immediate JavaScript executions, which can be
                    // React's state updates.
                    // This avoids some unnecessary revalidations such as
                    // https://github.com/vercel/swr/issues/1680.
                    const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, events/* FOCUS_EVENT */.N4)));
                    const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, events/* RECONNECT_EVENT */.l2)));
                    unmount = ()=>{
                        releaseFocus && releaseFocus();
                        releaseReconnect && releaseReconnect();
                        // When un-mounting, we need to remove the cache provider from the state
                        // storage too because it's a side-effect. Otherwise, when re-mounting we
                        // will not re-register those event listeners.
                        SWRGlobalState.delete(provider);
                    };
                }
            }
        };
        initProvider();
        // This is a new provider, we need to initialize it and setup DOM events
        // listeners for `focus` and `reconnect` actions.
        // We might want to inject an extra layer on top of `provider` in the future,
        // such as key serialization, auto GC, etc.
        // For now, it's just a `Map` interface without any modifications.
        return [
            provider,
            mutate,
            initProvider,
            unmount
        ];
    }
    return [
        provider,
        SWRGlobalState.get(provider)[4]
    ];
};

// error retry
const onErrorRetry = (_, __, config, revalidate, opts)=>{
    const maxRetryCount = config.errorRetryCount;
    const currentRetryCount = opts.retryCount;
    // Exponential backoff
    const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
    if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
        return;
    }
    setTimeout(revalidate, timeout, opts);
};
const compare = dequal;
// Default cache provider
const [cache, mutate] = initCache(new Map());
// Default config
const defaultConfig = mergeObjects({
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 10000 : 5000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: slowConnection ? 5000 : 3000,
    // providers
    compare,
    isPaused: ()=>false,
    cache,
    mutate,
    fallback: {}
}, // use web preset by default
preset);

const mergeConfigs = (a, b)=>{
    // Need to create a new object to avoid mutating the original here.
    const v = mergeObjects(a, b);
    // If two configs are provided, merge their `use` and `fallback` options.
    if (b) {
        const { use: u1, fallback: f1 } = a;
        const { use: u2, fallback: f2 } = b;
        if (u1 && u2) {
            v.use = u1.concat(u2);
        }
        if (f1 && f2) {
            v.fallback = mergeObjects(f1, f2);
        }
    }
    return v;
};

const SWRConfigContext = (0,react.createContext)({});
const SWRConfig = (props)=>{
    const { value } = props;
    const parentConfig = (0,react.useContext)(SWRConfigContext);
    const isFunctionalConfig = isFunction(value);
    const config = (0,react.useMemo)(()=>isFunctionalConfig ? value(parentConfig) : value, [
        isFunctionalConfig,
        parentConfig,
        value
    ]);
    // Extend parent context values and middleware.
    const extendedConfig = (0,react.useMemo)(()=>isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
        isFunctionalConfig,
        parentConfig,
        config
    ]);
    // Should not use the inherited provider.
    const provider = config && config.provider;
    // initialize the cache only on first access.
    const cacheContextRef = (0,react.useRef)(UNDEFINED);
    if (provider && !cacheContextRef.current) {
        cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
    }
    const cacheContext = cacheContextRef.current;
    // Override the cache if a new provider is given.
    if (cacheContext) {
        extendedConfig.cache = cacheContext[0];
        extendedConfig.mutate = cacheContext[1];
    }
    // Unsubscribe events.
    useIsomorphicLayoutEffect(()=>{
        if (cacheContext) {
            cacheContext[2] && cacheContext[2]();
            return cacheContext[3];
        }
    }, []);
    return (0,react.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
        value: extendedConfig
    }));
};




/***/ }),

/***/ 50391:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N4: function() { return /* binding */ FOCUS_EVENT; },
/* harmony export */   QQ: function() { return /* binding */ MUTATE_EVENT; },
/* harmony export */   aU: function() { return /* binding */ ERROR_REVALIDATE_EVENT; },
/* harmony export */   l2: function() { return /* binding */ RECONNECT_EVENT; }
/* harmony export */ });
const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;




/***/ }),

/***/ 40363:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ko: function() { return /* binding */ subscribeCallback; },
  kY: function() { return /* binding */ useSWRConfig; },
  s6: function() { return /* binding */ withArgs; }
});

// UNUSED EXPORTS: INFINITE_PREFIX, IS_REACT_LEGACY, IS_SERVER, OBJECT, SWRConfig, SWRGlobalState, UNDEFINED, cache, compare, createCacheHelper, defaultConfig, defaultConfigOptions, getTimestamp, hasRequestAnimationFrame, initCache, internalMutate, isDocumentDefined, isFunction, isLegacyDeno, isPromiseLike, isUndefined, isWindowDefined, mergeConfigs, mergeObjects, mutate, noop, normalize, preload, preset, rAF, revalidateEvents, serialize, slowConnection, stableHash, useIsomorphicLayoutEffect, withMiddleware

// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/_internal/config-context-client-v7VOFo66.mjs + 1 modules
var config_context_client_v7VOFo66 = __webpack_require__(508);
;// CONCATENATED MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/_internal/constants.mjs
const INFINITE_PREFIX = '$inf$';



// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/_internal/index.mjs









// @ts-expect-error
const enableDevtools = config_context_client_v7VOFo66.i && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = ()=>{
    if (enableDevtools) {
        // @ts-expect-error
        window.__SWR_DEVTOOLS_REACT__ = react;
    }
};

const normalize = (args)=>{
    return (0,config_context_client_v7VOFo66.a)(args[1]) ? [
        args[0],
        args[1],
        args[2] || {}
    ] : [
        args[0],
        null,
        (args[1] === null ? args[2] : args[1]) || {}
    ];
};

const useSWRConfig = ()=>{
    return (0,config_context_client_v7VOFo66.m)(config_context_client_v7VOFo66.d, (0,react.useContext)(config_context_client_v7VOFo66.S));
};

const preload = (key_, fetcher)=>{
    const [key, fnArg] = serialize(key_);
    const [, , , PRELOAD] = SWRGlobalState.get(cache);
    // Prevent preload to be called multiple times before used.
    if (PRELOAD[key]) return PRELOAD[key];
    const req = fetcher(fnArg);
    PRELOAD[key] = req;
    return req;
};
const middleware = (useSWRNext)=>(key_, fetcher_, config)=>{
        // fetcher might be a sync function, so this should not be an async function
        const fetcher = fetcher_ && ((...args)=>{
            const [key] = (0,config_context_client_v7VOFo66.s)(key_);
            const [, , , PRELOAD] = config_context_client_v7VOFo66.b.get(config_context_client_v7VOFo66.c);
            if (key.startsWith(INFINITE_PREFIX)) {
                // we want the infinite fetcher to be called.
                // handling of the PRELOAD cache happens there.
                return fetcher_(...args);
            }
            const req = PRELOAD[key];
            if ((0,config_context_client_v7VOFo66.e)(req)) return fetcher_(...args);
            delete PRELOAD[key];
            return req;
        });
        return useSWRNext(key_, fetcher, config);
    };

const BUILT_IN_MIDDLEWARE = use.concat(middleware);

// It's tricky to pass generic types as parameters, so we just directly override
// the types here.
const withArgs = (hook)=>{
    return function useSWRArgs(...args) {
        // Get the default and inherited configuration.
        const fallbackConfig = useSWRConfig();
        // Normalize arguments.
        const [key, fn, _config] = normalize(args);
        // Merge configurations.
        const config = (0,config_context_client_v7VOFo66.f)(fallbackConfig, _config);
        // Apply middleware
        let next = hook;
        const { use } = config;
        const middleware = (use || []).concat(BUILT_IN_MIDDLEWARE);
        for(let i = middleware.length; i--;){
            next = middleware[i](next);
        }
        return next(key, fn || config.fetcher || null, config);
    };
};

// Add a callback function to a list of keyed callback functions and return
// the unsubscribe function.
const subscribeCallback = (key, callbacks, callback)=>{
    const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
    keyedRevalidators.push(callback);
    return ()=>{
        const index = keyedRevalidators.indexOf(callback);
        if (index >= 0) {
            // O(1): faster than splice
            keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
            keyedRevalidators.pop();
        }
    };
};

// Create a custom hook with a middleware
const withMiddleware = (useSWR, middleware)=>{
    return (...args)=>{
        const [key, fn, config] = normalize(args);
        const uses = (config.use || []).concat(middleware);
        return useSWR(key, fn, {
            ...config,
            use: uses
        });
    };
};

setupDevTools();




/***/ }),

/***/ 64329:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J$: function() { return /* binding */ SWRConfig; },
/* harmony export */   ZP: function() { return /* binding */ useSWR; }
/* harmony export */ });
/* unused harmony export unstable_serialize */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38568);
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(508);
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50391);
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40363);





// Shared state between server components and client components
const noop = ()=>{};
// Using noop() as the undefined value as undefined can be replaced
// by something else. Prettier ignore and extra parentheses are necessary here
// to ensure that tsc doesn't remove the __NOINLINE__ comment.
// prettier-ignore
const UNDEFINED = /*#__NOINLINE__*/ noop();
const OBJECT = (/* unused pure expression or super */ null && (Object));
const isUndefined = (v)=>v === UNDEFINED;
const isFunction = (v)=>typeof v == 'function';

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
const isObjectType = (value, type)=>OBJECT.prototype.toString.call(value) === `[object ${type}]`;
// counter of the key
let counter = 0;
// A stable hash implementation that supports:
// - Fast and ensures unique hash properties
// - Handles unserializable values
// - Handles object key ordering
// - Generates short results
//
// This is not a serialization function, and the result is not guaranteed to be
// parsable.
const stableHash = (arg)=>{
    const type = typeof arg;
    const isDate = isObjectType(arg, 'Date');
    const isRegex = isObjectType(arg, 'RegExp');
    const isPlainObject = isObjectType(arg, 'Object');
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && !isRegex) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (Array.isArray(arg)) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (isPlainObject) {
            // Object, sort keys.
            result = '#';
            const keys = OBJECT.keys(arg).sort();
            while(!isUndefined(index = keys.pop())){
                if (!isUndefined(arg[index])) {
                    result += index + ':' + stableHash(arg[index]) + ',';
                }
            }
            table.set(arg, result);
        }
    } else {
        result = isDate ? arg.toJSON() : type == 'symbol' ? arg.toString() : type == 'string' ? JSON.stringify(arg) : '' + arg;
    }
    return result;
};

const serialize = (key)=>{
    if (isFunction(key)) {
        try {
            key = key();
        } catch (err) {
            // dependencies not ready
            key = '';
        }
    }
    // Use the original key as the argument of fetcher. This can be a string or an
    // array of values.
    const args = key;
    // If key is not falsy, or not an empty array, hash it.
    key = typeof key == 'string' ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : '';
    return [
        key,
        args
    ];
};

const unstable_serialize = (key)=>serialize(key)[0];

/// <reference types="react/experimental" />
const use = react__WEBPACK_IMPORTED_MODULE_0__.use || // This extra generic is to avoid TypeScript mixing up the generic and JSX sytax
// and emitting an error.
// We assume that this is only for the `use(thenable)` case, not `use(context)`.
// https://github.com/facebook/react/blob/aed00dacfb79d17c53218404c52b1c7aa59c4a89/packages/react-server/src/ReactFizzThenable.js#L45
((thenable)=>{
    switch(thenable.status){
        case 'pending':
            throw thenable;
        case 'fulfilled':
            return thenable.value;
        case 'rejected':
            throw thenable.reason;
        default:
            thenable.status = 'pending';
            thenable.then((v)=>{
                thenable.status = 'fulfilled';
                thenable.value = v;
            }, (e)=>{
                thenable.status = 'rejected';
                thenable.reason = e;
            });
            throw thenable;
    }
});
const WITH_DEDUPE = {
    dedupe: true
};
const useSWRHandler = (_key, fetcher, config)=>{
    const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.b.get(cache);
    // `key` is the identifier of the SWR internal state,
    // `fnArg` is the argument/arguments parsed from the key, which will be passed
    // to the fetcher.
    // All of them are derived from `_key`.
    const [key, fnArg] = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(_key);
    // If it's the initial render of this hook.
    const initialMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    const unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // Refs to keep the key and config.
    const keyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key);
    const fetcherRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fetcher);
    const configRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(config);
    const getConfig = ()=>configRef.current;
    const isActive = ()=>getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.z)(cache, key);
    const stateDependencies = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}).current;
    // Resolve the fallback data from either the inline option, or the global provider.
    // If it's a promise, we simply let React suspend and resolve it for us.
    const fallback = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(fallbackData) ? (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(config.fallback) ? _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.U : config.fallback[key] : fallbackData;
    const isEqual = (prev, current)=>{
        for(const _ in stateDependencies){
            const t = _;
            if (t === 'data') {
                if (!compare(prev[t], current[t])) {
                    if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(prev[t])) {
                        return false;
                    }
                    if (!compare(returnedData, current[t])) {
                        return false;
                    }
                }
            } else {
                if (current[t] !== prev[t]) {
                    return false;
                }
            }
        }
        return true;
    };
    const getSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const shouldStartRequest = (()=>{
            if (!key) return false;
            if (!fetcher) return false;
            // If `revalidateOnMount` is set, we take the value directly.
            if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(revalidateOnMount)) return revalidateOnMount;
            // If it's paused, we skip revalidation.
            if (getConfig().isPaused()) return false;
            if (suspense) return false;
            return revalidateIfStale !== false;
        })();
        // Get the cache and merge it with expected states.
        const getSelectedCache = (state)=>{
            // We only select the needed fields from the state.
            const snapshot = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(state);
            delete snapshot._k;
            if (!shouldStartRequest) {
                return snapshot;
            }
            return {
                isValidating: true,
                isLoading: true,
                ...snapshot
            };
        };
        const cachedData = getCache();
        const initialData = getInitialCache();
        const clientSnapshot = getSelectedCache(cachedData);
        const serverSnapshot = cachedData === initialData ? clientSnapshot : getSelectedCache(initialData);
        // To make sure that we are returning the same object reference to avoid
        // unnecessary re-renders, we keep the previous snapshot and use deep
        // comparison to check if we need to return a new one.
        let memorizedSnapshot = clientSnapshot;
        return [
            ()=>{
                const newSnapshot = getSelectedCache(getCache());
                const compareResult = isEqual(newSnapshot, memorizedSnapshot);
                if (compareResult) {
                    // Mentally, we should always return the `memorizedSnapshot` here
                    // as there's no change between the new and old snapshots.
                    // However, since the `isEqual` function only compares selected fields,
                    // the values of the unselected fields might be changed. That's
                    // simply because we didn't track them.
                    // To support the case in https://github.com/vercel/swr/pull/2576,
                    // we need to update these fields in the `memorizedSnapshot` too
                    // with direct mutations to ensure the snapshot is always up-to-date
                    // even for the unselected fields, but only trigger re-renders when
                    // the selected fields are changed.
                    memorizedSnapshot.data = newSnapshot.data;
                    memorizedSnapshot.isLoading = newSnapshot.isLoading;
                    memorizedSnapshot.isValidating = newSnapshot.isValidating;
                    memorizedSnapshot.error = newSnapshot.error;
                    return memorizedSnapshot;
                } else {
                    memorizedSnapshot = newSnapshot;
                    return newSnapshot;
                }
            },
            ()=>serverSnapshot
        ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cache,
        key
    ]);
    // Get the current state that SWR should return.
    const cached = (0,use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore)((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((callback)=>subscribeCache(key, (current, prev)=>{
            if (!isEqual(prev, current)) callback();
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        cache,
        key
    ]), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cachedData) ? fallback && (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.B)(fallback) ? use(fallback) : fallback : cachedData;
    const error = cached.error;
    // Use a ref to store previously returned data. Use the initial data as its initial value.
    const laggyDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(data);
    const returnedData = keepPreviousData ? (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cachedData) ? (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(laggyDataRef.current) ? data : laggyDataRef.current : cachedData : data;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    const shouldDoInitialRevalidation = (()=>{
        // if a key already has revalidators and also has error, we should not trigger revalidation
        if (hasRevalidator && !(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(error)) return false;
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(revalidateOnMount)) return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused()) return false;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately mount it again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense) return (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(data) ? false : revalidateIfStale;
        // If there is no stale data, we need to revalidate when mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(data) || revalidateIfStale;
    })();
    // Resolve the default validating state:
    // If it's able to validate, and it should revalidate when mount, this will be true.
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    const revalidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (revalidateOpts)=>{
        const currentFetcher = fetcherRef.current;
        if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
            return false;
        }
        let newData;
        let startAt;
        let loading = true;
        const opts = revalidateOpts || {};
        // If there is no ongoing concurrent request, or `dedupe` is not set, a
        // new request should be initiated.
        const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
        /*
         For React 17
         Do unmount check for calls:
         If key has changed during the revalidation, or the component has been
         unmounted, old dispatch and old event callbacks should not take any
         effect

        For React 18
        only check if key has changed
        https://github.com/reactwg/react-18/discussions/82
      */ const callbackSafeguard = ()=>{
            if (_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.I) {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            }
            return key === keyRef.current;
        };
        // The final state object when the request finishes.
        const finalState = {
            isValidating: false,
            isLoading: false
        };
        const finishRequestAndUpdateState = ()=>{
            setCache(finalState);
        };
        const cleanupState = ()=>{
            // Check if it's still the same request before deleting it.
            const requestInfo = FETCH[key];
            if (requestInfo && requestInfo[1] === startAt) {
                delete FETCH[key];
            }
        };
        // Start fetching. Change the `isValidating` state, update the cache.
        const initialState = {
            isValidating: true
        };
        // It is in the `isLoading` state, if and only if there is no cached data.
        // This bypasses fallback data and laggy data.
        if ((0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(getCache().data)) {
            initialState.isLoading = true;
        }
        try {
            if (shouldStartNewRequest) {
                setCache(initialState);
                // If no cache is being rendered currently (it shows a blank page),
                // we trigger the loading slow event.
                if (config.loadingTimeout && (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(getCache().data)) {
                    setTimeout(()=>{
                        if (loading && callbackSafeguard()) {
                            getConfig().onLoadingSlow(key, config);
                        }
                    }, config.loadingTimeout);
                }
                // Start the request and save the timestamp.
                // Key must be truthy if entering here.
                FETCH[key] = [
                    currentFetcher(fnArg),
                    (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.o)()
                ];
            }
            // Wait until the ongoing request is done. Deduplication is also
            // considered here.
            ;
            [newData, startAt] = FETCH[key];
            newData = await newData;
            if (shouldStartNewRequest) {
                // If the request isn't interrupted, clean it up after the
                // deduplication interval.
                setTimeout(cleanupState, config.dedupingInterval);
            }
            // If there're other ongoing request(s), started after the current one,
            // we need to ignore the current one to avoid possible race conditions:
            //   req1------------------>res1        (current one)
            //        req2---------------->res2
            // the request that fired later will always be kept.
            // The timestamp maybe be `undefined` or a number
            if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            // Clear error.
            finalState.error = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.U;
            // If there're other mutations(s), that overlapped with the current revalidation:
            // case 1:
            //   req------------------>res
            //       mutate------>end
            // case 2:
            //         req------------>res
            //   mutate------>end
            // case 3:
            //   req------------------>res
            //       mutate-------...---------->
            // we have to ignore the revalidation result (res) because it's no longer fresh.
            // meanwhile, a new revalidation should be triggered when the mutation ends.
            const mutationInfo = MUTATION[key];
            if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(mutationInfo) && // case 1
            (startAt <= mutationInfo[0] || // case 2
            startAt <= mutationInfo[1] || // case 3
            mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                    if (callbackSafeguard()) {
                        getConfig().onDiscarded(key);
                    }
                }
                return false;
            }
            // Deep compare with the latest state to avoid extra re-renders.
            // For local state, compare and assign.
            const cacheData = getCache().data;
            // Since the compare fn could be custom fn
            // cacheData might be different from newData even when compare fn returns True
            finalState.data = compare(cacheData, newData) ? cacheData : newData;
            // Trigger the successful callback if it's the original request.
            if (shouldStartNewRequest) {
                if (callbackSafeguard()) {
                    getConfig().onSuccess(newData, key, config);
                }
            }
        } catch (err) {
            cleanupState();
            const currentConfig = getConfig();
            const { shouldRetryOnError } = currentConfig;
            // Not paused, we continue handling the error. Otherwise, discard it.
            if (!currentConfig.isPaused()) {
                // Get a new error, don't use deep comparison for errors.
                finalState.error = err;
                // Error event and retry logic. Only for the actual request, not
                // deduped ones.
                if (shouldStartNewRequest && callbackSafeguard()) {
                    currentConfig.onError(err, key, currentConfig);
                    if (shouldRetryOnError === true || (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(shouldRetryOnError) && shouldRetryOnError(err)) {
                        if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                            // If it's inactive, stop. It will auto-revalidate when
                            // refocusing or reconnecting.
                            // When retrying, deduplication is always enabled.
                            currentConfig.onErrorRetry(err, key, currentConfig, (_opts)=>{
                                const revalidators = EVENT_REVALIDATORS[key];
                                if (revalidators && revalidators[0]) {
                                    revalidators[0](_internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .ERROR_REVALIDATE_EVENT */ .aU, _opts);
                                }
                            }, {
                                retryCount: (opts.retryCount || 0) + 1,
                                dedupe: true
                            });
                        }
                    }
                }
            }
        }
        // Mark loading as stopped.
        loading = false;
        // Update the current hook's state.
        finishRequestAndUpdateState();
        return true;
    }, // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        key,
        cache
    ]);
    // Similar to the global mutate but bound to the current cache and key.
    // `cache` isn't allowed to change during the lifecycle.
    const boundMutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(// Use callback to make sure `keyRef.current` returns latest result every time
    (...args)=>{
        return (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(cache, keyRef.current, ...args);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // The logic for updating refs.
    (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.u)(()=>{
        fetcherRef.current = fetcher;
        configRef.current = config;
        // Handle laggy data updates. If there's cached data of the current key,
        // it'll be the correct reference.
        if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(cachedData)) {
            laggyDataRef.current = cachedData;
        }
    });
    // After mounted or key changed.
    (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.u)(()=>{
        if (!key) return;
        const softRevalidate = revalidate.bind(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.U, WITH_DEDUPE);
        let nextFocusRevalidatedAt = 0;
        if (getConfig().revalidateOnFocus) {
            const initNow = Date.now();
            nextFocusRevalidatedAt = initNow + getConfig().focusThrottleInterval;
        }
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        const onRevalidate = (type, opts = {})=>{
            if (type == _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .FOCUS_EVENT */ .N4) {
                const now = Date.now();
                if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            } else if (type == _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .RECONNECT_EVENT */ .l2) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            } else if (type == _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .MUTATE_EVENT */ .QQ) {
                return revalidate();
            } else if (type == _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .ERROR_REVALIDATE_EVENT */ .aU) {
                return revalidate(opts);
            }
            return;
        };
        const unsubEvents = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__/* .subscribeCallback */ .ko)(key, EVENT_REVALIDATORS, onRevalidate);
        // Mark the component as mounted and update corresponding refs.
        unmountedRef.current = false;
        keyRef.current = key;
        initialMountedRef.current = true;
        // Keep the original key in the cache.
        setCache({
            _k: fnArg
        });
        // Trigger a revalidation
        if (shouldDoInitialRevalidation) {
            if ((0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(data) || _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.r) {
                // Revalidate immediately.
                softRevalidate();
            } else {
                // Delay the revalidate if we have data to return so we won't block
                // rendering.
                (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.t)(softRevalidate);
            }
        }
        return ()=>{
            // Mark it as unmounted.
            unmountedRef.current = true;
            unsubEvents();
        };
    }, [
        key
    ]);
    // Polling
    (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.u)(()=>{
        let timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            const interval = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
            // We only start the next interval if `refreshInterval` is not 0, and:
            // - `force` is true, which is the start of polling
            // - or `timer` is not 0, which means the effect wasn't canceled
            if (interval && timer !== -1) {
                timer = setTimeout(execute, interval);
            }
        }
        function execute() {
            // Check if it's OK to execute:
            // Only revalidate when the page is visible, online, and not errored.
            if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
                revalidate(WITH_DEDUPE).then(next);
            } else {
                // Schedule the next interval to check again.
                next();
            }
        }
        next();
        return ()=>{
            if (timer) {
                clearTimeout(timer);
                timer = -1;
            }
        };
    }, [
        refreshInterval,
        refreshWhenHidden,
        refreshWhenOffline,
        key
    ]);
    // Display debug info in React DevTools.
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(returnedData);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is an `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(data) && key) {
        // SWR should throw when trying to use Suspense on the server with React 18,
        // without providing any fallback data. This causes hydration errors. See:
        // https://github.com/vercel/swr/issues/1832
        if (!_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.I && _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.r) {
            throw new Error('Fallback data is required when using Suspense in SSR.');
        }
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        const req = PRELOAD[key];
        if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(req)) {
            const promise = boundMutate(req);
            use(promise);
        }
        if ((0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(error)) {
            const promise = revalidate(WITH_DEDUPE);
            if (!(0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(returnedData)) {
                promise.status = 'fulfilled';
                promise.value = true;
            }
            use(promise);
        } else {
            throw error;
        }
    }
    const swrResponse = {
        mutate: boundMutate,
        get data () {
            stateDependencies.data = true;
            return returnedData;
        },
        get error () {
            stateDependencies.error = true;
            return error;
        },
        get isValidating () {
            stateDependencies.isValidating = true;
            return isValidating;
        },
        get isLoading () {
            stateDependencies.isLoading = true;
            return isLoading;
        }
    };
    return swrResponse;
};
const SWRConfig = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.O.defineProperty(_internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.g, 'defaultValue', {
    value: _internal_index_mjs__WEBPACK_IMPORTED_MODULE_2__.d
});
/**
 * A hook to fetch data.
 *
 * @link https://swr.vercel.app
 * @example
 * ```jsx
 * import useSWR from 'swr'
 * function Profile() {
 *   const { data, error, isLoading } = useSWR('/api/user', fetcher)
 *   if (error) return <div>failed to load</div>
 *   if (isLoading) return <div>loading...</div>
 *   return <div>hello {data.name}!</div>
 * }
 * ```
 */ const useSWR = (0,_internal_index_mjs__WEBPACK_IMPORTED_MODULE_4__/* .withArgs */ .s6)(useSWRHandler);

// useSWR




/***/ })

}]);