(self["webpackChunk"] = self["webpackChunk"] || []).push([[1564],{

/***/ 52608:
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

// UNUSED EXPORTS: ConfigConsumer, arEGIntl, caESIntl, createIntl, csCZIntl, deDEIntl, enGBIntl, enUSIntl, esESIntl, faIRIntl, findIntlKeyByAntdLocaleKey, frFRIntl, heILIntl, hrHRIntl, idIDIntl, intlMap, intlMapKeys, itITIntl, jaJPIntl, koKRIntl, lighten, mnMNIntl, msMYIntl, operationUnit, plPLIntl, proTheme, ptBRIntl, resetComponent, ruRUIntl, setAlpha, skSKIntl, srRSIntl, thTHIntl, trTRIntl, ukUAIntl, useStyle, useToken, uzUZIntl, viVNIntl, zhCNIntl, zhTWIntl

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(96992);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(88414);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(93556);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(80189);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20693);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 7 modules
var config_provider = __webpack_require__(38587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/zh_CN.js + 4 modules
var zh_CN = __webpack_require__(99709);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.2.5_react@18.3.1/node_modules/swr/dist/core/index.mjs + 1 modules
var core = __webpack_require__(49505);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/intl.js + 29 modules
var es_intl = __webpack_require__(11054);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/useStyle/index.js
var useStyle = __webpack_require__(86178);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/typing/layoutToken.js


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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/useStyle/token.js
var useStyle_token = __webpack_require__(29851);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(40391);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/utils/merge.js


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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/index.js
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
  var _useSWRConfig = (0,core/* useSWRConfig */.kY)(),
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(core/* SWRConfig */.J$, {
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
      return [useStyle/* proTheme */.Ow.darkAlgorithm, theme === null || theme === void 0 ? void 0 : theme.algorithm].filter(Boolean);
    }
    if (isDark && Array.isArray(theme === null || theme === void 0 ? void 0 : theme.algorithm)) {
      return [useStyle/* proTheme */.Ow.darkAlgorithm].concat((0,toConsumableArray/* default */.Z)((theme === null || theme === void 0 ? void 0 : theme.algorithm) || [])).filter(Boolean);
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

/***/ 11054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vy: function() { return /* binding */ findIntlKeyByAntdLocaleKey; },
  Go: function() { return /* binding */ intlMap; },
  Hi: function() { return /* binding */ zhCNIntl; }
});

// UNUSED EXPORTS: arEGIntl, caESIntl, createIntl, csCZIntl, deDEIntl, enGBIntl, enUSIntl, esESIntl, faIRIntl, frFRIntl, heILIntl, hrHRIntl, idIDIntl, intlMapKeys, itITIntl, jaJPIntl, koKRIntl, mnMNIntl, msMYIntl, plPLIntl, ptBRIntl, ruRUIntl, skSKIntl, srRSIntl, thTHIntl, trTRIntl, ukUAIntl, uzUZIntl, viVNIntl, zhTWIntl

// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/index.js
var es = __webpack_require__(94269);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/ar_EG.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/ca_ES.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/cs_CZ.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/de_DE.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/en_GB.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/en_US.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/es_ES.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/fa_IR.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/fr_FR.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/he_IL.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/hr_HR.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/id_ID.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/it_IT.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/ja_JP.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/ko_KR.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/mn_MN.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/ms_MY.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/pl_PL.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/pt_BR.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/ru_RU.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/sk_SK.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/sr_RS.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/th_TH.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/tr_TR.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/uk_UA.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/uz_UZ.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/vi_VN.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/zh_CN.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/locale/zh_TW.js
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.1_antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__reac_7erkoog4h6z364vtqe4t22e2ry/node_modules/@ant-design/pro-provider/es/intl.js






























/**
 * 创建一个国际化的操作函数
 *
 * @param locale
 * @param localeMap
 */
var createIntl = function createIntl(locale, localeMap) {
  return {
    getMessage: function getMessage(id, defaultMessage) {
      var msg = (0,es/* get */.U2)(localeMap, id.replace(/\[(\d+)\]/g, '.$1').split('.')) || '';
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
  'uz-UZ': uzUZIntl
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

/***/ 86178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nd: function() { return /* binding */ operationUnit; },
/* harmony export */   Ow: function() { return /* binding */ proTheme; },
/* harmony export */   Wf: function() { return /* binding */ resetComponent; },
/* harmony export */   Xj: function() { return /* binding */ useStyle; },
/* harmony export */   dQ: function() { return /* binding */ useToken; },
/* harmony export */   uK: function() { return /* binding */ setAlpha; }
/* harmony export */ });
/* unused harmony export lighten */
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80189);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20693);
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99978);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52608);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29851);








/**
 * 把一个颜色设置一下透明度
 * @example (#fff, 0.5) => rgba(255, 255, 255, 0.5)
 * @param baseColor {string}
 * @param alpha {0-1}
 * @returns rgba {string}
 */
var setAlpha = function setAlpha(baseColor, alpha) {
  return new _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_2__/* .TinyColor */ .C(baseColor).setAlpha(alpha).toRgbString();
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
  if (typeof antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z === 'undefined' || !antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z) return _token__WEBPACK_IMPORTED_MODULE_4__;
  return antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
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
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_index__WEBPACK_IMPORTED_MODULE_5__/* .ProProvider */ .L_),
    _useContext$token = _useContext.token,
    token = _useContext$token === void 0 ? {} : _useContext$token;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_index__WEBPACK_IMPORTED_MODULE_5__/* .ProProvider */ .L_),
    hashed = _useContext2.hashed;
  var _useToken = useToken(),
    antdToken = _useToken.token,
    hashId = _useToken.hashId;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_index__WEBPACK_IMPORTED_MODULE_5__/* .ProProvider */ .L_),
    provideTheme = _useContext3.theme;
  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"].ConfigContext */ .ZP.ConfigContext),
    getPrefixCls = _useContext4.getPrefixCls;

  // 如果不在 ProProvider 里面，就用 antd 的
  if (!token.layout) {
    token = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, antdToken);
  }
  token.proComponentsCls = (_token$proComponentsC = token.proComponentsCls) !== null && _token$proComponentsC !== void 0 ? _token$proComponentsC : ".".concat(getPrefixCls('pro'));
  token.antCls = ".".concat(getPrefixCls());
  return {
    wrapSSR: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.useStyleRegister)({
      theme: provideTheme,
      token: token,
      path: [componentName]
    }, function () {
      return styleFn(token);
    }),
    hashId: hashed ? hashId : ''
  };
}

/***/ }),

/***/ 29851:
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
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80189);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20693);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4390);

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

/***/ 50798:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: function() { return /* binding */ compareVersions; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88414);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40391);


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

/***/ 46949:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ openVisibleCompatible; },
/* harmony export */   b: function() { return /* binding */ getVersion; }
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72555);
/* harmony import */ var _omitUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79227);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50798);
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

/***/ 70827:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ useDebounceFn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46371);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58603);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var _useRefFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42846);




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

/***/ 42846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: function() { return /* binding */ useRefFunction; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96992);
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

/***/ 79227:
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

/***/ 71770:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
function omit(obj, fields) {
  // eslint-disable-next-line prefer-object-spread
  var shallowCopy = Object.assign({}, obj);

  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}

/* harmony default export */ __webpack_exports__.Z = (omit);

/***/ }),

/***/ 99752:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(75271);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 48488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(99752);
} else {}


/***/ }),

/***/ 49505:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J$: function() { return /* binding */ core_SWRConfig; },
  ZP: function() { return /* binding */ useSWR; },
  kY: function() { return /* reexport */ useSWRConfig; }
});

// UNUSED EXPORTS: mutate, preload, unstable_serialize

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/use-sync-external-store@1.2.2_react@18.3.1/node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(48488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/swr@2.2.5_react@18.3.1/node_modules/swr/dist/_internal/index.mjs


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

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
const table = new WeakMap();
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
    const constructor = arg && arg.constructor;
    const isDate = constructor == Date;
    let result;
    let index;
    if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
        // Object/function, not null/date/regexp. Use WeakMap to store the id first.
        // If it's already hashed, directly return the result.
        result = table.get(arg);
        if (result) return result;
        // Store the hash first for circular reference detection before entering the
        // recursive `stableHash` calls.
        // For other objects like set and map, we use this id directly as the hash.
        result = ++counter + '~';
        table.set(arg, result);
        if (constructor == Array) {
            // Array.
            result = '@';
            for(index = 0; index < arg.length; index++){
                result += stableHash(arg[index]) + ',';
            }
            table.set(arg, result);
        }
        if (constructor == OBJECT) {
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

// Global state used to deduplicate requests and store listeners
const SWRGlobalState = new WeakMap();

const EMPTY_CACHE = {};
const INITIAL_CACHE = {};
const STR_UNDEFINED = 'undefined';
// NOTE: Use the function to guarantee it's re-evaluated between jsdom and node runtime for tests.
const isWindowDefined = typeof window != STR_UNDEFINED;
const isDocumentDefined = typeof document != STR_UNDEFINED;
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
const IS_SERVER = !isWindowDefined || 'Deno' in window;
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

const _internal_serialize = (key)=>{
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

const FOCUS_EVENT = 0;
const RECONNECT_EVENT = 1;
const MUTATE_EVENT = 2;
const ERROR_REVALIDATE_EVENT = 3;

var events = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: ERROR_REVALIDATE_EVENT,
  FOCUS_EVENT: FOCUS_EVENT,
  MUTATE_EVENT: MUTATE_EVENT,
  RECONNECT_EVENT: RECONNECT_EVENT
};

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
        const [key] = _internal_serialize(_k);
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
                    return revalidators[0](MUTATE_EVENT).then(()=>get().data);
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
        const EVENT_REVALIDATORS = {};
        const mutate = internalMutate.bind(UNDEFINED, provider);
        let unmount = noop;
        const subscriptions = {};
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
                    {},
                    {},
                    {},
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
                    const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
                    const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
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
const compare = (currentData, newData)=>stableHash(currentData) == stableHash(newData);
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

const INFINITE_PREFIX = '$inf$';

// @ts-expect-error
const enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
const use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
const setupDevTools = ()=>{
    if (enableDevtools) {
        // @ts-expect-error
        window.__SWR_DEVTOOLS_REACT__ = react;
    }
};

const normalize = (args)=>{
    return isFunction(args[1]) ? [
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
    return mergeObjects(defaultConfig, (0,react.useContext)(SWRConfigContext));
};

const preload = (key_, fetcher)=>{
    const [key, fnArg] = _internal_serialize(key_);
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
            const [key] = _internal_serialize(key_);
            const [, , , PRELOAD] = SWRGlobalState.get(cache);
            if (key.startsWith(INFINITE_PREFIX)) {
                // we want the infinite fetcher to be called.
                // handling of the PRELOAD cache happens there.
                return fetcher_(...args);
            }
            const req = PRELOAD[key];
            if (isUndefined(req)) return fetcher_(...args);
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
        const config = mergeConfigs(fallbackConfig, _config);
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



;// CONCATENATED MODULE: ./node_modules/.pnpm/swr@2.2.5_react@18.3.1/node_modules/swr/dist/core/index.mjs






const unstable_serialize = (key)=>serialize(key)[0];

/// <reference types="react/experimental" />
const core_use = react.use || ((promise)=>{
    if (promise.status === 'pending') {
        throw promise;
    } else if (promise.status === 'fulfilled') {
        return promise.value;
    } else if (promise.status === 'rejected') {
        throw promise.reason;
    } else {
        promise.status = 'pending';
        promise.then((v)=>{
            promise.status = 'fulfilled';
            promise.value = v;
        }, (e)=>{
            promise.status = 'rejected';
            promise.reason = e;
        });
        throw promise;
    }
});
const WITH_DEDUPE = {
    dedupe: true
};
const useSWRHandler = (_key, fetcher, config)=>{
    const { cache, compare, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache);
    // `key` is the identifier of the SWR internal state,
    // `fnArg` is the argument/arguments parsed from the key, which will be passed
    // to the fetcher.
    // All of them are derived from `_key`.
    const [key, fnArg] = _internal_serialize(_key);
    // If it's the initial render of this hook.
    const initialMountedRef = (0,react.useRef)(false);
    // If the hook is unmounted already. This will be used to prevent some effects
    // to be called after unmounting.
    const unmountedRef = (0,react.useRef)(false);
    // Refs to keep the key and config.
    const keyRef = (0,react.useRef)(key);
    const fetcherRef = (0,react.useRef)(fetcher);
    const configRef = (0,react.useRef)(config);
    const getConfig = ()=>configRef.current;
    const isActive = ()=>getConfig().isVisible() && getConfig().isOnline();
    const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache, key);
    const stateDependencies = (0,react.useRef)({}).current;
    const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
    const isEqual = (prev, current)=>{
        for(const _ in stateDependencies){
            const t = _;
            if (t === 'data') {
                if (!compare(prev[t], current[t])) {
                    if (!isUndefined(prev[t])) {
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
    const getSnapshot = (0,react.useMemo)(()=>{
        const shouldStartRequest = (()=>{
            if (!key) return false;
            if (!fetcher) return false;
            // If `revalidateOnMount` is set, we take the value directly.
            if (!isUndefined(revalidateOnMount)) return revalidateOnMount;
            // If it's paused, we skip revalidation.
            if (getConfig().isPaused()) return false;
            if (suspense) return false;
            if (!isUndefined(revalidateIfStale)) return revalidateIfStale;
            return true;
        })();
        // Get the cache and merge it with expected states.
        const getSelectedCache = (state)=>{
            // We only select the needed fields from the state.
            const snapshot = mergeObjects(state);
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
    const cached = (0,shim.useSyncExternalStore)((0,react.useCallback)((callback)=>subscribeCache(key, (current, prev)=>{
            if (!isEqual(prev, current)) callback();
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        cache,
        key
    ]), getSnapshot[0], getSnapshot[1]);
    const isInitialMount = !initialMountedRef.current;
    const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
    const cachedData = cached.data;
    const data = isUndefined(cachedData) ? fallback : cachedData;
    const error = cached.error;
    // Use a ref to store previously returned data. Use the initial data as its initial value.
    const laggyDataRef = (0,react.useRef)(data);
    const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
    // - Suspense mode and there's stale data for the initial render.
    // - Not suspense mode and there is no fallback data and `revalidateIfStale` is enabled.
    // - `revalidateIfStale` is enabled but `data` is not defined.
    const shouldDoInitialRevalidation = (()=>{
        // if a key already has revalidators and also has error, we should not trigger revalidation
        if (hasRevalidator && !isUndefined(error)) return false;
        // If `revalidateOnMount` is set, we take the value directly.
        if (isInitialMount && !isUndefined(revalidateOnMount)) return revalidateOnMount;
        // If it's paused, we skip revalidation.
        if (getConfig().isPaused()) return false;
        // Under suspense mode, it will always fetch on render if there is no
        // stale data so no need to revalidate immediately mount it again.
        // If data exists, only revalidate if `revalidateIfStale` is true.
        if (suspense) return isUndefined(data) ? false : revalidateIfStale;
        // If there is no stale data, we need to revalidate when mount;
        // If `revalidateIfStale` is set to true, we will always revalidate.
        return isUndefined(data) || revalidateIfStale;
    })();
    // Resolve the default validating state:
    // If it's able to validate, and it should revalidate when mount, this will be true.
    const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
    const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
    const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
    // The revalidation function is a carefully crafted wrapper of the original
    // `fetcher`, to correctly handle the many edge cases.
    const revalidate = (0,react.useCallback)(async (revalidateOpts)=>{
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
            if (IS_REACT_LEGACY) {
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
        if (isUndefined(getCache().data)) {
            initialState.isLoading = true;
        }
        try {
            if (shouldStartNewRequest) {
                setCache(initialState);
                // If no cache is being rendered currently (it shows a blank page),
                // we trigger the loading slow event.
                if (config.loadingTimeout && isUndefined(getCache().data)) {
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
                    getTimestamp()
                ];
            }
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
            finalState.error = UNDEFINED;
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
            if (!isUndefined(mutationInfo) && // case 1
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
                    if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
                        if (!getConfig().revalidateOnFocus || !getConfig().revalidateOnReconnect || isActive()) {
                            // If it's inactive, stop. It will auto-revalidate when
                            // refocusing or reconnecting.
                            // When retrying, deduplication is always enabled.
                            currentConfig.onErrorRetry(err, key, currentConfig, (_opts)=>{
                                const revalidators = EVENT_REVALIDATORS[key];
                                if (revalidators && revalidators[0]) {
                                    revalidators[0](events.ERROR_REVALIDATE_EVENT, _opts);
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
    const boundMutate = (0,react.useCallback)(// Use callback to make sure `keyRef.current` returns latest result every time
    (...args)=>{
        return internalMutate(cache, keyRef.current, ...args);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    // The logic for updating refs.
    useIsomorphicLayoutEffect(()=>{
        fetcherRef.current = fetcher;
        configRef.current = config;
        // Handle laggy data updates. If there's cached data of the current key,
        // it'll be the correct reference.
        if (!isUndefined(cachedData)) {
            laggyDataRef.current = cachedData;
        }
    });
    // After mounted or key changed.
    useIsomorphicLayoutEffect(()=>{
        if (!key) return;
        const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
        // Expose revalidators to global event listeners. So we can trigger
        // revalidation from the outside.
        let nextFocusRevalidatedAt = 0;
        const onRevalidate = (type, opts = {})=>{
            if (type == events.FOCUS_EVENT) {
                const now = Date.now();
                if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
                    nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
                    softRevalidate();
                }
            } else if (type == events.RECONNECT_EVENT) {
                if (getConfig().revalidateOnReconnect && isActive()) {
                    softRevalidate();
                }
            } else if (type == events.MUTATE_EVENT) {
                return revalidate();
            } else if (type == events.ERROR_REVALIDATE_EVENT) {
                return revalidate(opts);
            }
            return;
        };
        const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
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
            if (isUndefined(data) || IS_SERVER) {
                // Revalidate immediately.
                softRevalidate();
            } else {
                // Delay the revalidate if we have data to return so we won't block
                // rendering.
                rAF(softRevalidate);
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
    useIsomorphicLayoutEffect(()=>{
        let timer;
        function next() {
            // Use the passed interval
            // ...or invoke the function with the updated data to get the interval
            const interval = isFunction(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
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
    (0,react.useDebugValue)(returnedData);
    // In Suspense mode, we can't return the empty `data` state.
    // If there is an `error`, the `error` needs to be thrown to the error boundary.
    // If there is no `error`, the `revalidation` promise needs to be thrown to
    // the suspense boundary.
    if (suspense && isUndefined(data) && key) {
        // SWR should throw when trying to use Suspense on the server with React 18,
        // without providing any initial data. See:
        // https://github.com/vercel/swr/issues/1832
        if (!IS_REACT_LEGACY && IS_SERVER) {
            throw new Error('Fallback data is required when using suspense in SSR.');
        }
        // Always update fetcher and config refs even with the Suspense mode.
        fetcherRef.current = fetcher;
        configRef.current = config;
        unmountedRef.current = false;
        const req = PRELOAD[key];
        if (!isUndefined(req)) {
            const promise = boundMutate(req);
            core_use(promise);
        }
        if (isUndefined(error)) {
            const promise = revalidate(WITH_DEDUPE);
            if (!isUndefined(returnedData)) {
                promise.status = 'fulfilled';
                promise.value = true;
            }
            core_use(promise);
        } else {
            throw error;
        }
    }
    return {
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
};
const core_SWRConfig = OBJECT.defineProperty(SWRConfig, 'defaultValue', {
    value: defaultConfig
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
 */ const useSWR = withArgs(useSWRHandler);




/***/ })

}]);