"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3116],{

/***/ 59433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ hot; }
});

// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/hot/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/index.js
var grid = __webpack_require__(61408);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/list/index.js + 3 modules
var list = __webpack_require__(17675);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(33713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 11 modules
var Buzz = __webpack_require__(71366);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/hot/index.tsx









var useBreakpoint = grid/* default */.ZP.useBreakpoint;
var Home = function Home() {
  var containerRef = (0,react.useRef)();
  var contentRef = (0,react.useRef)();
  // const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage, refetch } =
  //     useInfiniteQuery({
  //         queryKey: ['homebuzzhot',],
  //         queryFn: ({ pageParam }) =>
  //             fetchAllHotBuzzs({
  //                 size: 30,
  //                 lastId: pageParam,
  //             }),
  //         initialPageParam: '',
  //         getNextPageParam: (lastPage, allPages) => {
  //             const { data: { lastId } } = lastPage
  //             if (!lastId) return
  //             return lastId;
  //         },
  //         refetchInterval: 1000 * 60 * 3, // 每3分钟刷新一次
  //     });

  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['homebuzzhot'],
      queryFn: function queryFn() {
        return (0,api/* fetchAllHotBuzzs */.L_)({
          size: 30,
          lastId: ''
        });
      },
      refetchInterval: 1000 * 60 * 5 // 每5分钟刷新一次
    }),
    data = _useQuery.data,
    isLoading = _useQuery.isLoading,
    refetch = _useQuery.refetch;
  var tweets = (0,react.useMemo)(function () {
    var _data$data;
    return data ? (data === null || data === void 0 || (_data$data = data.data) === null || _data$data === void 0 || (_data$data = _data$data.list) === null || _data$data === void 0 ? void 0 : _data$data.filter(function (item) {
      return !item.blocked;
    })) || [] : [];
  }, [data]);

  // 数据更新后检查高度
  // useEffect(() => {
  //     if (!containerRef.current || !contentRef.current || isLoading || !hasNextPage) return;
  //     const containerHeight = containerRef.current.clientHeight;
  //     const contentHeight = contentRef.current.scrollHeight;
  //     // 如果内容高度不足且还有数据，继续加载
  //     if (contentHeight <= containerHeight) {
  //         fetchNextPage();
  //     }
  // }, [data, hasNextPage, isLoading]);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    id: "scrollableDivHot",
    ref: containerRef,
    style: {
      height: '100%',
      overflow: 'auto',
      paddingBottom: 60
    },
    children: [isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        avatar: true,
        paragraph: {
          rows: 2
        },
        active: true
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z, {
      ref: contentRef,
      loading: isLoading,
      dataSource: tweets,
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(list/* default */.Z.Item, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
            buzzItem: item,
            refetch: refetch
          })
        }, item.id);
      }
    }), !isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
      plain: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "It is all, nothing more \uD83E\uDD10"
      })
    })]
  });
};
/* harmony default export */ var hot = (function () {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Home, {});
});

/***/ }),

/***/ 33713:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ divider; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(1225);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20865);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(9894);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(21275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83509);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/style/index.js



// ============================== Shared ==============================
const genSharedDividerStyle = token => {
  const {
    componentCls,
    sizePaddingEdgeHorizontal,
    colorSplit,
    lineWidth,
    textPaddingInline,
    orientationMargin,
    verticalMarginInline
  } = token;
  return {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      borderBlockStart: `${(0,es.unit)(lineWidth)} solid ${colorSplit}`,
      // vertical
      '&-vertical': {
        position: 'relative',
        top: '-0.06em',
        display: 'inline-block',
        height: '0.9em',
        marginInline: verticalMarginInline,
        marginBlock: 0,
        verticalAlign: 'middle',
        borderTop: 0,
        borderInlineStart: `${(0,es.unit)(lineWidth)} solid ${colorSplit}`
      },
      '&-horizontal': {
        display: 'flex',
        clear: 'both',
        width: '100%',
        minWidth: '100%',
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${(0,es.unit)(token.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${componentCls}-with-text`]: {
        display: 'flex',
        alignItems: 'center',
        margin: `${(0,es.unit)(token.dividerHorizontalWithTextGutterMargin)} 0`,
        color: token.colorTextHeading,
        fontWeight: 500,
        fontSize: token.fontSizeLG,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        borderBlockStart: `0 ${colorSplit}`,
        '&::before, &::after': {
          position: 'relative',
          width: '50%',
          borderBlockStart: `${(0,es.unit)(lineWidth)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: 'inherit',
          borderBlockEnd: 0,
          transform: 'translateY(50%)',
          content: "''"
        }
      },
      [`&-horizontal${componentCls}-with-text-start`]: {
        '&::before': {
          width: `calc(${orientationMargin} * 100%)`
        },
        '&::after': {
          width: `calc(100% - ${orientationMargin} * 100%)`
        }
      },
      [`&-horizontal${componentCls}-with-text-end`]: {
        '&::before': {
          width: `calc(100% - ${orientationMargin} * 100%)`
        },
        '&::after': {
          width: `calc(${orientationMargin} * 100%)`
        }
      },
      [`${componentCls}-inner-text`]: {
        display: 'inline-block',
        paddingBlock: 0,
        paddingInline: textPaddingInline
      },
      '&-dashed': {
        background: 'none',
        borderColor: colorSplit,
        borderStyle: 'dashed',
        borderWidth: `${(0,es.unit)(lineWidth)} 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dashed`]: {
        '&::before, &::after': {
          borderStyle: 'dashed none none'
        }
      },
      [`&-vertical${componentCls}-dashed`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      '&-dotted': {
        background: 'none',
        borderColor: colorSplit,
        borderStyle: 'dotted',
        borderWidth: `${(0,es.unit)(lineWidth)} 0 0`
      },
      [`&-horizontal${componentCls}-with-text${componentCls}-dotted`]: {
        '&::before, &::after': {
          borderStyle: 'dotted none none'
        }
      },
      [`&-vertical${componentCls}-dotted`]: {
        borderInlineStartWidth: lineWidth,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${componentCls}-with-text`]: {
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.fontSize
      },
      [`&-horizontal${componentCls}-with-text-start${componentCls}-no-default-orientation-margin-start`]: {
        '&::before': {
          width: 0
        },
        '&::after': {
          width: '100%'
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineStart: sizePaddingEdgeHorizontal
        }
      },
      [`&-horizontal${componentCls}-with-text-end${componentCls}-no-default-orientation-margin-end`]: {
        '&::before': {
          width: '100%'
        },
        '&::after': {
          width: 0
        },
        [`${componentCls}-inner-text`]: {
          paddingInlineEnd: sizePaddingEdgeHorizontal
        }
      }
    })
  };
};
const prepareComponentToken = token => ({
  textPaddingInline: '1em',
  orientationMargin: 0.05,
  verticalMarginInline: token.marginXS
});
// ============================== Export ==============================
/* harmony default export */ var divider_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Divider', token => {
  const dividerToken = (0,cssinjs_utils_es.mergeToken)(token, {
    dividerHorizontalWithTextGutterMargin: token.margin,
    dividerHorizontalGutterMargin: token.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [genSharedDividerStyle(dividerToken)];
}, prepareComponentToken, {
  unitless: {
    orientationMargin: true
  }
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const Divider = props => {
  const {
    getPrefixCls,
    direction,
    className: dividerClassName,
    style: dividerStyle
  } = (0,context/* useComponentConfig */.dj)('divider');
  const {
      prefixCls: customizePrefixCls,
      type = 'horizontal',
      orientation = 'center',
      orientationMargin,
      className,
      rootClassName,
      children,
      dashed,
      variant = 'solid',
      plain,
      style
    } = props,
    restProps = __rest(props, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]);
  const prefixCls = getPrefixCls('divider', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = divider_style(prefixCls);
  const hasChildren = !!children;
  const mergedOrientation = react.useMemo(() => {
    if (orientation === 'left') {
      return direction === 'rtl' ? 'end' : 'start';
    }
    if (orientation === 'right') {
      return direction === 'rtl' ? 'start' : 'end';
    }
    return orientation;
  }, [direction, orientation]);
  const hasMarginStart = mergedOrientation === 'start' && orientationMargin != null;
  const hasMarginEnd = mergedOrientation === 'end' && orientationMargin != null;
  const classString = classnames_default()(prefixCls, dividerClassName, hashId, cssVarCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-text`]: hasChildren,
    [`${prefixCls}-with-text-${mergedOrientation}`]: hasChildren,
    [`${prefixCls}-dashed`]: !!dashed,
    [`${prefixCls}-${variant}`]: variant !== 'solid',
    [`${prefixCls}-plain`]: !!plain,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-no-default-orientation-margin-start`]: hasMarginStart,
    [`${prefixCls}-no-default-orientation-margin-end`]: hasMarginEnd
  }, className, rootClassName);
  const memoizedOrientationMargin = react.useMemo(() => {
    if (typeof orientationMargin === 'number') {
      return orientationMargin;
    }
    if (/^\d+$/.test(orientationMargin)) {
      return Number(orientationMargin);
    }
    return orientationMargin;
  }, [orientationMargin]);
  const innerStyle = {
    marginInlineStart: hasMarginStart ? memoizedOrientationMargin : undefined,
    marginInlineEnd: hasMarginEnd ? memoizedOrientationMargin : undefined
  };
  // Warning children not work in vertical mode
  if (false) {}
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", Object.assign({
    className: classString,
    style: Object.assign(Object.assign({}, dividerStyle), style)
  }, restProps, {
    role: "separator"
  }), children && type !== 'vertical' && (/*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-inner-text`,
    style: innerStyle
  }, children))));
};
if (false) {}
/* harmony default export */ var divider = (Divider);

/***/ })

}]);