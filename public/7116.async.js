"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7116],{

/***/ 97116:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ descriptions; }
});

// UNUSED EXPORTS: DescriptionsContext

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/responsiveObserver.js
var responsiveObserver = __webpack_require__(71087);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(94053);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(39432);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/constant.js
const DEFAULT_COLUMN_MAP = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
/* harmony default export */ var constant = (DEFAULT_COLUMN_MAP);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/DescriptionsContext.js

const DescriptionsContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var descriptions_DescriptionsContext = (DescriptionsContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(81626);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/hooks/useItems.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



// Convert children into items
const transChildren2Items = childNodes => (0,toArray/* default */.Z)(childNodes).map(node => Object.assign(Object.assign({}, node === null || node === void 0 ? void 0 : node.props), {
  key: node.key
}));
function useItems(screens, items, children) {
  const mergedItems = react.useMemo(() =>
  // Take `items` first or convert `children` into items
  items || transChildren2Items(children), [items, children]);
  const responsiveItems = react.useMemo(() => mergedItems.map(_a => {
    var {
        span
      } = _a,
      restItem = __rest(_a, ["span"]);
    if (span === 'filled') {
      return Object.assign(Object.assign({}, restItem), {
        filled: true
      });
    }
    return Object.assign(Object.assign({}, restItem), {
      span: typeof span === 'number' ? span : (0,responsiveObserver/* matchScreen */.m9)(screens, span)
    });
  }), [mergedItems, screens]);
  return responsiveItems;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/hooks/useRow.js
var useRow_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


// Calculate the sum of span in a row
function getCalcRows(rowItems, mergedColumn) {
  let rows = [];
  let tmpRow = [];
  let exceed = false;
  let count = 0;
  rowItems.filter(n => n).forEach(rowItem => {
    const {
        filled
      } = rowItem,
      restItem = useRow_rest(rowItem, ["filled"]);
    if (filled) {
      tmpRow.push(restItem);
      rows.push(tmpRow);
      // reset
      tmpRow = [];
      count = 0;
      return;
    }
    const restSpan = mergedColumn - count;
    count += rowItem.span || 1;
    if (count >= mergedColumn) {
      if (count > mergedColumn) {
        exceed = true;
        tmpRow.push(Object.assign(Object.assign({}, restItem), {
          span: restSpan
        }));
      } else {
        tmpRow.push(restItem);
      }
      rows.push(tmpRow);
      // reset
      tmpRow = [];
      count = 0;
    } else {
      tmpRow.push(restItem);
    }
  });
  if (tmpRow.length > 0) {
    rows.push(tmpRow);
  }
  rows = rows.map(rows => {
    const count = rows.reduce((acc, item) => acc + (item.span || 1), 0);
    if (count < mergedColumn) {
      // If the span of the last element in the current row is less than the column, then add its span to the remaining columns
      const last = rows[rows.length - 1];
      last.span = mergedColumn - (count - (last.span || 1));
      return rows;
    }
    return rows;
  });
  return [rows, exceed];
}
const useRow = (mergedColumn, items) => {
  const [rows, exceed] = (0,react.useMemo)(() => getCalcRows(items, mergedColumn), [items, mergedColumn]);
  if (false) {}
  return rows;
};
/* harmony default export */ var hooks_useRow = (useRow);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/Item.js
// JSX Structure Syntactic Sugar. Never reach the render code.
/* istanbul ignore next */
const DescriptionsItem = _ref => {
  let {
    children
  } = _ref;
  return children;
};
/* harmony default export */ var Item = (DescriptionsItem);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/Cell.js
"use client";




function notEmpty(val) {
  return val !== undefined && val !== null;
}
const Cell = props => {
  const {
    itemPrefixCls,
    component,
    span,
    className,
    style,
    labelStyle,
    contentStyle,
    bordered,
    label,
    content,
    colon,
    type,
    styles
  } = props;
  const Component = component;
  const descContext = react.useContext(descriptions_DescriptionsContext);
  const {
    classNames: descriptionsClassNames
  } = descContext;
  if (bordered) {
    return /*#__PURE__*/react.createElement(Component, {
      className: classnames_default()({
        [`${itemPrefixCls}-item-label`]: type === 'label',
        [`${itemPrefixCls}-item-content`]: type === 'content',
        [`${descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.label}`]: type === 'label',
        [`${descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.content}`]: type === 'content'
      }, className),
      style: style,
      colSpan: span
    }, notEmpty(label) && /*#__PURE__*/react.createElement("span", {
      style: Object.assign(Object.assign({}, labelStyle), styles === null || styles === void 0 ? void 0 : styles.label)
    }, label), notEmpty(content) && /*#__PURE__*/react.createElement("span", {
      style: Object.assign(Object.assign({}, labelStyle), styles === null || styles === void 0 ? void 0 : styles.content)
    }, content));
  }
  return /*#__PURE__*/react.createElement(Component, {
    className: classnames_default()(`${itemPrefixCls}-item`, className),
    style: style,
    colSpan: span
  }, /*#__PURE__*/react.createElement("div", {
    className: `${itemPrefixCls}-item-container`
  }, (label || label === 0) && (/*#__PURE__*/react.createElement("span", {
    className: classnames_default()(`${itemPrefixCls}-item-label`, descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.label, {
      [`${itemPrefixCls}-item-no-colon`]: !colon
    }),
    style: Object.assign(Object.assign({}, labelStyle), styles === null || styles === void 0 ? void 0 : styles.label)
  }, label)), (content || content === 0) && (/*#__PURE__*/react.createElement("span", {
    className: classnames_default()(`${itemPrefixCls}-item-content`, descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.content),
    style: Object.assign(Object.assign({}, contentStyle), styles === null || styles === void 0 ? void 0 : styles.content)
  }, content))));
};
/* harmony default export */ var descriptions_Cell = (Cell);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/Row.js
"use client";




function renderCells(items, _ref, _ref2) {
  let {
    colon,
    prefixCls,
    bordered
  } = _ref;
  let {
    component,
    type,
    showLabel,
    showContent,
    labelStyle: rootLabelStyle,
    contentStyle: rootContentStyle,
    styles: rootStyles
  } = _ref2;
  return items.map((_ref3, index) => {
    let {
      label,
      children,
      prefixCls: itemPrefixCls = prefixCls,
      className,
      style,
      labelStyle,
      contentStyle,
      span = 1,
      key,
      styles
    } = _ref3;
    if (typeof component === 'string') {
      return /*#__PURE__*/react.createElement(descriptions_Cell, {
        key: `${type}-${key || index}`,
        className: className,
        style: style,
        styles: {
          label: Object.assign(Object.assign(Object.assign(Object.assign({}, rootLabelStyle), rootStyles === null || rootStyles === void 0 ? void 0 : rootStyles.label), labelStyle), styles === null || styles === void 0 ? void 0 : styles.label),
          content: Object.assign(Object.assign(Object.assign(Object.assign({}, rootContentStyle), rootStyles === null || rootStyles === void 0 ? void 0 : rootStyles.content), contentStyle), styles === null || styles === void 0 ? void 0 : styles.content)
        },
        span: span,
        colon: colon,
        component: component,
        itemPrefixCls: itemPrefixCls,
        bordered: bordered,
        label: showLabel ? label : null,
        content: showContent ? children : null,
        type: type
      });
    }
    return [/*#__PURE__*/react.createElement(descriptions_Cell, {
      key: `label-${key || index}`,
      className: className,
      style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rootLabelStyle), rootStyles === null || rootStyles === void 0 ? void 0 : rootStyles.label), style), labelStyle), styles === null || styles === void 0 ? void 0 : styles.label),
      span: 1,
      colon: colon,
      component: component[0],
      itemPrefixCls: itemPrefixCls,
      bordered: bordered,
      label: label,
      type: "label"
    }), /*#__PURE__*/react.createElement(descriptions_Cell, {
      key: `content-${key || index}`,
      className: className,
      style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, rootContentStyle), rootStyles === null || rootStyles === void 0 ? void 0 : rootStyles.content), style), contentStyle), styles === null || styles === void 0 ? void 0 : styles.content),
      span: span * 2 - 1,
      component: component[1],
      itemPrefixCls: itemPrefixCls,
      bordered: bordered,
      content: children,
      type: "content"
    })];
  });
}
const Row = props => {
  const descContext = react.useContext(descriptions_DescriptionsContext);
  const {
    prefixCls,
    vertical,
    row,
    index,
    bordered
  } = props;
  if (vertical) {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("tr", {
      key: `label-${index}`,
      className: `${prefixCls}-row`
    }, renderCells(row, props, Object.assign({
      component: 'th',
      type: 'label',
      showLabel: true
    }, descContext))), /*#__PURE__*/react.createElement("tr", {
      key: `content-${index}`,
      className: `${prefixCls}-row`
    }, renderCells(row, props, Object.assign({
      component: 'td',
      type: 'content',
      showContent: true
    }, descContext))));
  }
  return /*#__PURE__*/react.createElement("tr", {
    key: index,
    className: `${prefixCls}-row`
  }, renderCells(row, props, Object.assign({
    component: bordered ? ['th', 'td'] : 'td',
    type: 'item',
    showLabel: true,
    showContent: true
  }, descContext)));
};
/* harmony default export */ var descriptions_Row = (Row);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(9894);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83509);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/style/index.js



const genBorderedStyle = token => {
  const {
    componentCls,
    labelBg
  } = token;
  return {
    [`&${componentCls}-bordered`]: {
      [`> ${componentCls}-view`]: {
        border: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
        '> table': {
          tableLayout: 'auto'
        },
        [`${componentCls}-row`]: {
          borderBottom: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
          '&:last-child': {
            borderBottom: 'none'
          },
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${(0,es.unit)(token.padding)} ${(0,es.unit)(token.paddingLG)}`,
            borderInlineEnd: `${(0,es.unit)(token.lineWidth)} ${token.lineType} ${token.colorSplit}`,
            '&:last-child': {
              borderInlineEnd: 'none'
            }
          },
          [`> ${componentCls}-item-label`]: {
            color: token.colorTextSecondary,
            backgroundColor: labelBg,
            '&::after': {
              display: 'none'
            }
          }
        }
      },
      [`&${componentCls}-middle`]: {
        [`${componentCls}-row`]: {
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${(0,es.unit)(token.paddingSM)} ${(0,es.unit)(token.paddingLG)}`
          }
        }
      },
      [`&${componentCls}-small`]: {
        [`${componentCls}-row`]: {
          [`> ${componentCls}-item-label, > ${componentCls}-item-content`]: {
            padding: `${(0,es.unit)(token.paddingXS)} ${(0,es.unit)(token.padding)}`
          }
        }
      }
    }
  };
};
const genDescriptionStyles = token => {
  const {
    componentCls,
    extraColor,
    itemPaddingBottom,
    itemPaddingEnd,
    colonMarginRight,
    colonMarginLeft,
    titleMarginBottom
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), genBorderedStyle(token)), {
      '&-rtl': {
        direction: 'rtl'
      },
      [`${componentCls}-header`]: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: titleMarginBottom
      },
      [`${componentCls}-title`]: Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
        flex: 'auto',
        color: token.titleColor,
        fontWeight: token.fontWeightStrong,
        fontSize: token.fontSizeLG,
        lineHeight: token.lineHeightLG
      }),
      [`${componentCls}-extra`]: {
        marginInlineStart: 'auto',
        color: extraColor,
        fontSize: token.fontSize
      },
      [`${componentCls}-view`]: {
        width: '100%',
        borderRadius: token.borderRadiusLG,
        table: {
          width: '100%',
          tableLayout: 'fixed',
          borderCollapse: 'collapse'
        }
      },
      [`${componentCls}-row`]: {
        '> th, > td': {
          paddingBottom: itemPaddingBottom,
          paddingInlineEnd: itemPaddingEnd
        },
        '> th:last-child, > td:last-child': {
          paddingInlineEnd: 0
        },
        '&:last-child': {
          borderBottom: 'none',
          '> th, > td': {
            paddingBottom: 0
          }
        }
      },
      [`${componentCls}-item-label`]: {
        color: token.labelColor,
        fontWeight: 'normal',
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        textAlign: 'start',
        '&::after': {
          content: '":"',
          position: 'relative',
          top: -0.5,
          // magic for position
          marginInline: `${(0,es.unit)(colonMarginLeft)} ${(0,es.unit)(colonMarginRight)}`
        },
        [`&${componentCls}-item-no-colon::after`]: {
          content: '""'
        }
      },
      [`${componentCls}-item-no-label`]: {
        '&::after': {
          margin: 0,
          content: '""'
        }
      },
      [`${componentCls}-item-content`]: {
        display: 'table-cell',
        flex: 1,
        color: token.contentColor,
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        wordBreak: 'break-word',
        overflowWrap: 'break-word'
      },
      [`${componentCls}-item`]: {
        paddingBottom: 0,
        verticalAlign: 'top',
        '&-container': {
          display: 'flex',
          [`${componentCls}-item-label`]: {
            display: 'inline-flex',
            alignItems: 'baseline'
          },
          [`${componentCls}-item-content`]: {
            display: 'inline-flex',
            alignItems: 'baseline',
            minWidth: '1em'
          }
        }
      },
      '&-middle': {
        [`${componentCls}-row`]: {
          '> th, > td': {
            paddingBottom: token.paddingSM
          }
        }
      },
      '&-small': {
        [`${componentCls}-row`]: {
          '> th, > td': {
            paddingBottom: token.paddingXS
          }
        }
      }
    })
  };
};
const prepareComponentToken = token => ({
  labelBg: token.colorFillAlter,
  labelColor: token.colorTextTertiary,
  titleColor: token.colorText,
  titleMarginBottom: token.fontSizeSM * token.lineHeightSM,
  itemPaddingBottom: token.padding,
  itemPaddingEnd: token.padding,
  colonMarginRight: token.marginXS,
  colonMarginLeft: token.marginXXS / 2,
  contentColor: token.colorText,
  extraColor: token.colorText
});
// ============================== Export ==============================
/* harmony default export */ var descriptions_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Descriptions', token => {
  const descriptionToken = (0,cssinjs_utils_es.mergeToken)(token, {});
  return genDescriptionStyles(descriptionToken);
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/index.js
"use client";

var descriptions_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/no-array-index-key */














const Descriptions = props => {
  const {
      prefixCls: customizePrefixCls,
      title,
      extra,
      column,
      colon = true,
      bordered,
      layout,
      children,
      className,
      rootClassName,
      style,
      size: customizeSize,
      labelStyle,
      contentStyle,
      styles,
      items,
      classNames: descriptionsClassNames
    } = props,
    restProps = descriptions_rest(props, ["prefixCls", "title", "extra", "column", "colon", "bordered", "layout", "children", "className", "rootClassName", "style", "size", "labelStyle", "contentStyle", "styles", "items", "classNames"]);
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = (0,context/* useComponentConfig */.dj)('descriptions');
  const prefixCls = getPrefixCls('descriptions', customizePrefixCls);
  const screens = (0,useBreakpoint/* default */.Z)();
  // ============================== Warn ==============================
  if (false) {}
  // Column count
  const mergedColumn = react.useMemo(() => {
    var _a;
    if (typeof column === 'number') {
      return column;
    }
    return (_a = (0,responsiveObserver/* matchScreen */.m9)(screens, Object.assign(Object.assign({}, constant), column))) !== null && _a !== void 0 ? _a : 3;
  }, [screens, column]);
  // Items with responsive
  const mergedItems = useItems(screens, items, children);
  const mergedSize = (0,useSize/* default */.Z)(customizeSize);
  const rows = hooks_useRow(mergedColumn, mergedItems);
  const [wrapCSSVar, hashId, cssVarCls] = descriptions_style(prefixCls);
  // ======================== Render ========================
  const contextValue = react.useMemo(() => ({
    labelStyle,
    contentStyle,
    styles: {
      content: Object.assign(Object.assign({}, contextStyles.content), styles === null || styles === void 0 ? void 0 : styles.content),
      label: Object.assign(Object.assign({}, contextStyles.label), styles === null || styles === void 0 ? void 0 : styles.label)
    },
    classNames: {
      label: classnames_default()(contextClassNames.label, descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.label),
      content: classnames_default()(contextClassNames.content, descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.content)
    }
  }), [labelStyle, contentStyle, styles, descriptionsClassNames, contextClassNames, contextStyles]);
  return wrapCSSVar(/*#__PURE__*/react.createElement(descriptions_DescriptionsContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement("div", Object.assign({
    className: classnames_default()(prefixCls, contextClassName, contextClassNames.root, descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.root, {
      [`${prefixCls}-${mergedSize}`]: mergedSize && mergedSize !== 'default',
      [`${prefixCls}-bordered`]: !!bordered,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, hashId, cssVarCls),
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, contextStyle), contextStyles.root), styles === null || styles === void 0 ? void 0 : styles.root), style)
  }, restProps), (title || extra) && (/*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-header`, contextClassNames.header, descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.header),
    style: Object.assign(Object.assign({}, contextStyles.header), styles === null || styles === void 0 ? void 0 : styles.header)
  }, title && (/*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-title`, contextClassNames.title, descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.title),
    style: Object.assign(Object.assign({}, contextStyles.title), styles === null || styles === void 0 ? void 0 : styles.title)
  }, title)), extra && (/*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-extra`, contextClassNames.extra, descriptionsClassNames === null || descriptionsClassNames === void 0 ? void 0 : descriptionsClassNames.extra),
    style: Object.assign(Object.assign({}, contextStyles.extra), styles === null || styles === void 0 ? void 0 : styles.extra)
  }, extra)))), /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-view`
  }, /*#__PURE__*/react.createElement("table", null, /*#__PURE__*/react.createElement("tbody", null, rows.map((row, index) => (/*#__PURE__*/react.createElement(descriptions_Row, {
    key: index,
    index: index,
    colon: colon,
    prefixCls: prefixCls,
    vertical: layout === 'vertical',
    bordered: bordered,
    row: row
  })))))))));
};
if (false) {}

Descriptions.Item = Item;
/* harmony default export */ var descriptions = (Descriptions);

/***/ })

}]);