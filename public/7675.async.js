"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7675],{

/***/ 17675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ list; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.0/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(81230);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/extendsObject.js
var extendsObject = __webpack_require__(95789);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/responsiveObserver.js
var responsiveObserver = __webpack_require__(71087);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__(11281);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(94053);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/row.js + 1 modules
var row = __webpack_require__(2118);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(39432);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/pagination/index.js + 4 modules
var es_pagination = __webpack_require__(38689);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(55576);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/context.js

const ListContext = /*#__PURE__*/react.createContext({});
const ListConsumer = ListContext.Consumer;
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(84199);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/col.js
var col = __webpack_require__(121);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/Item.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






const Meta = _a => {
  var {
      prefixCls: customizePrefixCls,
      className,
      avatar,
      title,
      description
    } = _a,
    others = __rest(_a, ["prefixCls", "className", "avatar", "title", "description"]);
  const {
    getPrefixCls
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('list', customizePrefixCls);
  const classString = classnames_default()(`${prefixCls}-item-meta`, className);
  const content = /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-item-meta-content`
  }, title && /*#__PURE__*/react.createElement("h4", {
    className: `${prefixCls}-item-meta-title`
  }, title), description && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-item-meta-description`
  }, description));
  return /*#__PURE__*/react.createElement("div", Object.assign({}, others, {
    className: classString
  }), avatar && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-item-meta-avatar`
  }, avatar), (title || description) && content);
};
const InternalItem = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      children,
      actions,
      extra,
      styles,
      className,
      classNames: customizeClassNames,
      colStyle
    } = props,
    others = __rest(props, ["prefixCls", "children", "actions", "extra", "styles", "className", "classNames", "colStyle"]);
  const {
    grid,
    itemLayout
  } = (0,react.useContext)(ListContext);
  const {
    getPrefixCls,
    list
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const moduleClass = moduleName => {
    var _a, _b;
    return classnames_default()((_b = (_a = list === null || list === void 0 ? void 0 : list.item) === null || _a === void 0 ? void 0 : _a.classNames) === null || _b === void 0 ? void 0 : _b[moduleName], customizeClassNames === null || customizeClassNames === void 0 ? void 0 : customizeClassNames[moduleName]);
  };
  const moduleStyle = moduleName => {
    var _a, _b;
    return Object.assign(Object.assign({}, (_b = (_a = list === null || list === void 0 ? void 0 : list.item) === null || _a === void 0 ? void 0 : _a.styles) === null || _b === void 0 ? void 0 : _b[moduleName]), styles === null || styles === void 0 ? void 0 : styles[moduleName]);
  };
  const isItemContainsTextNodeAndNotSingular = () => {
    let result = false;
    react.Children.forEach(children, element => {
      if (typeof element === 'string') {
        result = true;
      }
    });
    return result && react.Children.count(children) > 1;
  };
  const isFlexMode = () => {
    if (itemLayout === 'vertical') {
      return !!extra;
    }
    return !isItemContainsTextNodeAndNotSingular();
  };
  const prefixCls = getPrefixCls('list', customizePrefixCls);
  const actionsContent = actions && actions.length > 0 && (/*#__PURE__*/react.createElement("ul", {
    className: classnames_default()(`${prefixCls}-item-action`, moduleClass('actions')),
    key: "actions",
    style: moduleStyle('actions')
  }, actions.map((action, i) => (
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  react.createElement("li", {
    key: `${prefixCls}-item-action-${i}`
  }, action, i !== actions.length - 1 && /*#__PURE__*/react.createElement("em", {
    className: `${prefixCls}-item-action-split`
  }))))));
  const Element = grid ? 'div' : 'li';
  const itemChildren = /*#__PURE__*/react.createElement(Element, Object.assign({}, others, !grid ? {
    ref
  } : {}, {
    className: classnames_default()(`${prefixCls}-item`, {
      [`${prefixCls}-item-no-flex`]: !isFlexMode()
    }, className)
  }), itemLayout === 'vertical' && extra ? [/*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-item-main`,
    key: "content"
  }, children, actionsContent), /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-item-extra`, moduleClass('extra')),
    key: "extra",
    style: moduleStyle('extra')
  }, extra)] : [children, actionsContent, (0,reactNode/* cloneElement */.Tm)(extra, {
    key: 'extra'
  })]);
  return grid ? (/*#__PURE__*/react.createElement(col/* default */.Z, {
    ref: ref,
    flex: 1,
    style: colStyle
  }, itemChildren)) : itemChildren;
});
const Item = InternalItem;
Item.Meta = Meta;
/* harmony default export */ var list_Item = (Item);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(9894);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83509);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/style/index.js



const genBorderedStyle = token => {
  const {
    listBorderedCls,
    componentCls,
    paddingLG,
    margin,
    itemPaddingSM,
    itemPaddingLG,
    marginLG,
    borderRadiusLG
  } = token;
  return {
    [listBorderedCls]: {
      border: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: borderRadiusLG,
      [`${componentCls}-header,${componentCls}-footer,${componentCls}-item`]: {
        paddingInline: paddingLG
      },
      [`${componentCls}-pagination`]: {
        margin: `${(0,es.unit)(margin)} ${(0,es.unit)(marginLG)}`
      }
    },
    [`${listBorderedCls}${componentCls}-sm`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingSM
      }
    },
    [`${listBorderedCls}${componentCls}-lg`]: {
      [`${componentCls}-item,${componentCls}-header,${componentCls}-footer`]: {
        padding: itemPaddingLG
      }
    }
  };
};
const genResponsiveStyle = token => {
  const {
    componentCls,
    screenSM,
    screenMD,
    marginLG,
    marginSM,
    margin
  } = token;
  return {
    [`@media screen and (max-width:${screenMD}px)`]: {
      [componentCls]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-action`]: {
            marginInlineStart: marginLG
          }
        }
      },
      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          [`${componentCls}-item-extra`]: {
            marginInlineStart: marginLG
          }
        }
      }
    },
    [`@media screen and (max-width: ${screenSM}px)`]: {
      [componentCls]: {
        [`${componentCls}-item`]: {
          flexWrap: 'wrap',
          [`${componentCls}-action`]: {
            marginInlineStart: marginSM
          }
        }
      },
      [`${componentCls}-vertical`]: {
        [`${componentCls}-item`]: {
          flexWrap: 'wrap-reverse',
          [`${componentCls}-item-main`]: {
            minWidth: token.contentWidth
          },
          [`${componentCls}-item-extra`]: {
            margin: `auto auto ${(0,es.unit)(margin)}`
          }
        }
      }
    }
  };
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    antCls,
    controlHeight,
    minHeight,
    paddingSM,
    marginLG,
    padding,
    itemPadding,
    colorPrimary,
    itemPaddingSM,
    itemPaddingLG,
    paddingXS,
    margin,
    colorText,
    colorTextDescription,
    motionDurationSlow,
    lineWidth,
    headerBg,
    footerBg,
    emptyTextPadding,
    metaMarginBottom,
    avatarMarginRight,
    titleMarginBottom,
    descriptionFontSize
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'relative',
      '*': {
        outline: 'none'
      },
      [`${componentCls}-header`]: {
        background: headerBg
      },
      [`${componentCls}-footer`]: {
        background: footerBg
      },
      [`${componentCls}-header, ${componentCls}-footer`]: {
        paddingBlock: paddingSM
      },
      [`${componentCls}-pagination`]: {
        marginBlockStart: marginLG,
        // https://github.com/ant-design/ant-design/issues/20037
        [`${antCls}-pagination-options`]: {
          textAlign: 'start'
        }
      },
      [`${componentCls}-spin`]: {
        minHeight,
        textAlign: 'center'
      },
      [`${componentCls}-items`]: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      [`${componentCls}-item`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: itemPadding,
        color: colorText,
        [`${componentCls}-item-meta`]: {
          display: 'flex',
          flex: 1,
          alignItems: 'flex-start',
          maxWidth: '100%',
          [`${componentCls}-item-meta-avatar`]: {
            marginInlineEnd: avatarMarginRight
          },
          [`${componentCls}-item-meta-content`]: {
            flex: '1 0',
            width: 0,
            color: colorText
          },
          [`${componentCls}-item-meta-title`]: {
            margin: `0 0 ${(0,es.unit)(token.marginXXS)} 0`,
            color: colorText,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            '> a': {
              color: colorText,
              transition: `all ${motionDurationSlow}`,
              '&:hover': {
                color: colorPrimary
              }
            }
          },
          [`${componentCls}-item-meta-description`]: {
            color: colorTextDescription,
            fontSize: descriptionFontSize,
            lineHeight: token.lineHeight
          }
        },
        [`${componentCls}-item-action`]: {
          flex: '0 0 auto',
          marginInlineStart: token.marginXXL,
          padding: 0,
          fontSize: 0,
          listStyle: 'none',
          '& > li': {
            position: 'relative',
            display: 'inline-block',
            padding: `0 ${(0,es.unit)(paddingXS)}`,
            color: colorTextDescription,
            fontSize: token.fontSize,
            lineHeight: token.lineHeight,
            textAlign: 'center',
            '&:first-child': {
              paddingInlineStart: 0
            }
          },
          [`${componentCls}-item-action-split`]: {
            position: 'absolute',
            insetBlockStart: '50%',
            insetInlineEnd: 0,
            width: lineWidth,
            height: token.calc(token.fontHeight).sub(token.calc(token.marginXXS).mul(2)).equal(),
            transform: 'translateY(-50%)',
            backgroundColor: token.colorSplit
          }
        }
      },
      [`${componentCls}-empty`]: {
        padding: `${(0,es.unit)(padding)} 0`,
        color: colorTextDescription,
        fontSize: token.fontSizeSM,
        textAlign: 'center'
      },
      [`${componentCls}-empty-text`]: {
        padding: emptyTextPadding,
        color: token.colorTextDisabled,
        fontSize: token.fontSize,
        textAlign: 'center'
      },
      // ============================ without flex ============================
      [`${componentCls}-item-no-flex`]: {
        display: 'block'
      }
    }),
    [`${componentCls}-grid ${antCls}-col > ${componentCls}-item`]: {
      display: 'block',
      maxWidth: '100%',
      marginBlockEnd: margin,
      paddingBlock: 0,
      borderBlockEnd: 'none'
    },
    [`${componentCls}-vertical ${componentCls}-item`]: {
      alignItems: 'initial',
      [`${componentCls}-item-main`]: {
        display: 'block',
        flex: 1
      },
      [`${componentCls}-item-extra`]: {
        marginInlineStart: marginLG
      },
      [`${componentCls}-item-meta`]: {
        marginBlockEnd: metaMarginBottom,
        [`${componentCls}-item-meta-title`]: {
          marginBlockStart: 0,
          marginBlockEnd: titleMarginBottom,
          color: colorText,
          fontSize: token.fontSizeLG,
          lineHeight: token.lineHeightLG
        }
      },
      [`${componentCls}-item-action`]: {
        marginBlockStart: padding,
        marginInlineStart: 'auto',
        '> li': {
          padding: `0 ${(0,es.unit)(padding)}`,
          '&:first-child': {
            paddingInlineStart: 0
          }
        }
      }
    },
    [`${componentCls}-split ${componentCls}-item`]: {
      borderBlockEnd: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
      '&:last-child': {
        borderBlockEnd: 'none'
      }
    },
    [`${componentCls}-split ${componentCls}-header`]: {
      borderBlockEnd: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-split${componentCls}-empty ${componentCls}-footer`]: {
      borderTop: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-loading ${componentCls}-spin-nested-loading`]: {
      minHeight: controlHeight
    },
    [`${componentCls}-split${componentCls}-something-after-last-item ${antCls}-spin-container > ${componentCls}-items > ${componentCls}-item:last-child`]: {
      borderBlockEnd: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`
    },
    [`${componentCls}-lg ${componentCls}-item`]: {
      padding: itemPaddingLG
    },
    [`${componentCls}-sm ${componentCls}-item`]: {
      padding: itemPaddingSM
    },
    // Horizontal
    [`${componentCls}:not(${componentCls}-vertical)`]: {
      [`${componentCls}-item-no-flex`]: {
        [`${componentCls}-item-action`]: {
          float: 'right'
        }
      }
    }
  };
};
const prepareComponentToken = token => ({
  contentWidth: 220,
  itemPadding: `${(0,es.unit)(token.paddingContentVertical)} 0`,
  itemPaddingSM: `${(0,es.unit)(token.paddingContentVerticalSM)} ${(0,es.unit)(token.paddingContentHorizontal)}`,
  itemPaddingLG: `${(0,es.unit)(token.paddingContentVerticalLG)} ${(0,es.unit)(token.paddingContentHorizontalLG)}`,
  headerBg: 'transparent',
  footerBg: 'transparent',
  emptyTextPadding: token.padding,
  metaMarginBottom: token.padding,
  avatarMarginRight: token.padding,
  titleMarginBottom: token.paddingSM,
  descriptionFontSize: token.fontSize
});
// ============================== Export ==============================
/* harmony default export */ var list_style = ((0,genStyleUtils/* genStyleHooks */.I$)('List', token => {
  const listToken = (0,cssinjs_utils_es.mergeToken)(token, {
    listBorderedCls: `${token.componentCls}-bordered`,
    minHeight: token.controlHeightLG
  });
  return [genBaseStyle(listToken), genBorderedStyle(listToken), genResponsiveStyle(listToken)];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js
"use client";


var list_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















function InternalList(_a, ref) {
  var {
      pagination = false,
      prefixCls: customizePrefixCls,
      bordered = false,
      split = true,
      className,
      rootClassName,
      style,
      children,
      itemLayout,
      loadMore,
      grid,
      dataSource = [],
      size: customizeSize,
      header,
      footer,
      loading = false,
      rowKey,
      renderItem,
      locale
    } = _a,
    rest = list_rest(_a, ["pagination", "prefixCls", "bordered", "split", "className", "rootClassName", "style", "children", "itemLayout", "loadMore", "grid", "dataSource", "size", "header", "footer", "loading", "rowKey", "renderItem", "locale"]);
  const paginationObj = pagination && typeof pagination === 'object' ? pagination : {};
  const [paginationCurrent, setPaginationCurrent] = react.useState(paginationObj.defaultCurrent || 1);
  const [paginationSize, setPaginationSize] = react.useState(paginationObj.defaultPageSize || 10);
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle
  } = (0,context/* useComponentConfig */.dj)('list');
  const {
    renderEmpty
  } = react.useContext(context/* ConfigContext */.E_);
  const defaultPaginationProps = {
    current: 1,
    total: 0
  };
  const triggerPaginationEvent = eventName => (page, pageSize) => {
    var _a;
    setPaginationCurrent(page);
    setPaginationSize(pageSize);
    if (pagination) {
      (_a = pagination === null || pagination === void 0 ? void 0 : pagination[eventName]) === null || _a === void 0 ? void 0 : _a.call(pagination, page, pageSize);
    }
  };
  const onPaginationChange = triggerPaginationEvent('onChange');
  const onPaginationShowSizeChange = triggerPaginationEvent('onShowSizeChange');
  const renderInnerItem = (item, index) => {
    if (!renderItem) return null;
    let key;
    if (typeof rowKey === 'function') {
      key = rowKey(item);
    } else if (rowKey) {
      key = item[rowKey];
    } else {
      key = item.key;
    }
    if (!key) {
      key = `list-item-${index}`;
    }
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: key
    }, renderItem(item, index));
  };
  const isSomethingAfterLastItem = () => !!(loadMore || pagination || footer);
  const prefixCls = getPrefixCls('list', customizePrefixCls);
  // Style
  const [wrapCSSVar, hashId, cssVarCls] = list_style(prefixCls);
  let loadingProp = loading;
  if (typeof loadingProp === 'boolean') {
    loadingProp = {
      spinning: loadingProp
    };
  }
  const isLoading = !!(loadingProp === null || loadingProp === void 0 ? void 0 : loadingProp.spinning);
  const mergedSize = (0,useSize/* default */.Z)(customizeSize);
  // large => lg
  // small => sm
  let sizeCls = '';
  switch (mergedSize) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }
  const classString = classnames_default()(prefixCls, {
    [`${prefixCls}-vertical`]: itemLayout === 'vertical',
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-split`]: split,
    [`${prefixCls}-bordered`]: bordered,
    [`${prefixCls}-loading`]: isLoading,
    [`${prefixCls}-grid`]: !!grid,
    [`${prefixCls}-something-after-last-item`]: isSomethingAfterLastItem(),
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, contextClassName, className, rootClassName, hashId, cssVarCls);
  const paginationProps = (0,extendsObject/* default */.Z)(defaultPaginationProps, {
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize
  }, pagination || {});
  const largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
  if (paginationProps.current > largestPage) {
    paginationProps.current = largestPage;
  }
  const paginationContent = pagination && (/*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-pagination`)
  }, /*#__PURE__*/react.createElement(es_pagination/* default */.Z, Object.assign({
    align: "end"
  }, paginationProps, {
    onChange: onPaginationChange,
    onShowSizeChange: onPaginationShowSizeChange
  }))));
  let splitDataSource = (0,toConsumableArray/* default */.Z)(dataSource);
  if (pagination) {
    if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
      splitDataSource = (0,toConsumableArray/* default */.Z)(dataSource).splice((paginationProps.current - 1) * paginationProps.pageSize, paginationProps.pageSize);
    }
  }
  const needResponsive = Object.keys(grid || {}).some(key => ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(key));
  const screens = (0,useBreakpoint/* default */.Z)(needResponsive);
  const currentBreakpoint = react.useMemo(() => {
    for (let i = 0; i < responsiveObserver/* responsiveArray */.c4.length; i += 1) {
      const breakpoint = responsiveObserver/* responsiveArray */.c4[i];
      if (screens[breakpoint]) {
        return breakpoint;
      }
    }
    return undefined;
  }, [screens]);
  const colStyle = react.useMemo(() => {
    if (!grid) {
      return undefined;
    }
    const columnCount = currentBreakpoint && grid[currentBreakpoint] ? grid[currentBreakpoint] : grid.column;
    if (columnCount) {
      return {
        width: `${100 / columnCount}%`,
        maxWidth: `${100 / columnCount}%`
      };
    }
  }, [JSON.stringify(grid), currentBreakpoint]);
  let childrenContent = isLoading && /*#__PURE__*/react.createElement("div", {
    style: {
      minHeight: 53
    }
  });
  if (splitDataSource.length > 0) {
    const items = splitDataSource.map((item, index) => renderInnerItem(item, index));
    childrenContent = grid ? (/*#__PURE__*/react.createElement(row/* default */.Z, {
      gutter: grid.gutter
    }, react.Children.map(items, child => (/*#__PURE__*/react.createElement("div", {
      key: child === null || child === void 0 ? void 0 : child.key,
      style: colStyle
    }, child))))) : (/*#__PURE__*/react.createElement("ul", {
      className: `${prefixCls}-items`
    }, items));
  } else if (!children && !isLoading) {
    childrenContent = /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-empty-text`
    }, (locale === null || locale === void 0 ? void 0 : locale.emptyText) || (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('List')) || /*#__PURE__*/react.createElement(defaultRenderEmpty/* default */.Z, {
      componentName: "List"
    }));
  }
  const paginationPosition = paginationProps.position || 'bottom';
  const contextValue = react.useMemo(() => ({
    grid,
    itemLayout
  }), [JSON.stringify(grid), itemLayout]);
  return wrapCSSVar(/*#__PURE__*/react.createElement(ListContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement("div", Object.assign({
    ref: ref,
    style: Object.assign(Object.assign({}, contextStyle), style),
    className: classString
  }, rest), (paginationPosition === 'top' || paginationPosition === 'both') && paginationContent, header && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-header`
  }, header), /*#__PURE__*/react.createElement(spin/* default */.Z, Object.assign({}, loadingProp), childrenContent, children), footer && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-footer`
  }, footer), loadMore || (paginationPosition === 'bottom' || paginationPosition === 'both') && paginationContent)));
}
const ListWithForwardRef = /*#__PURE__*/react.forwardRef(InternalList);
if (false) {}
const List = ListWithForwardRef;
List.Item = list_Item;
/* harmony default export */ var list = (List);

/***/ })

}]);