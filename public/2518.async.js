"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2518],{

/***/ 62518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ table; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-table@7.47.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-table/es/index.js + 44 modules
var es = __webpack_require__(78123);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/Column.js
/* istanbul ignore next */
/** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */
const Column = _ => null;
/* harmony default export */ var table_Column = (Column);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/ColumnGroup.js
/* istanbul ignore next */
/** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */
const ColumnGroup = _ => null;
/* harmony default export */ var table_ColumnGroup = (ColumnGroup);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.25.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(96992);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(73248);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-tree/es/util.js
var util = __webpack_require__(55477);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-tree/es/utils/conductUtil.js
var conductUtil = __webpack_require__(49240);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-tree/es/utils/treeUtil.js
var treeUtil = __webpack_require__(28605);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(31998);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useMultipleSelect.js

/**
 * @title multipleSelect hooks
 * @description multipleSelect by hold down shift key
 */
function useMultipleSelect(getKey) {
  const [prevSelectedIndex, setPrevSelectedIndex] = (0,react.useState)(null);
  const multipleSelect = (0,react.useCallback)((currentSelectedIndex, data, selectedKeys) => {
    const configPrevSelectedIndex = prevSelectedIndex !== null && prevSelectedIndex !== void 0 ? prevSelectedIndex : currentSelectedIndex;
    // add/delete the selected range
    const startIndex = Math.min(configPrevSelectedIndex || 0, currentSelectedIndex);
    const endIndex = Math.max(configPrevSelectedIndex || 0, currentSelectedIndex);
    const rangeKeys = data.slice(startIndex, endIndex + 1).map(item => getKey(item));
    const shouldSelected = rangeKeys.some(rangeKey => !selectedKeys.has(rangeKey));
    const changedKeys = [];
    rangeKeys.forEach(item => {
      if (shouldSelected) {
        if (!selectedKeys.has(item)) {
          changedKeys.push(item);
        }
        selectedKeys.add(item);
      } else {
        selectedKeys.delete(item);
        changedKeys.push(item);
      }
    });
    setPrevSelectedIndex(shouldSelected ? endIndex : null);
    return changedKeys;
  }, [prevSelectedIndex]);
  const updatePrevSelectedIndex = val => {
    setPrevSelectedIndex(val);
  };
  return [multipleSelect, updatePrevSelectedIndex];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/warning.js
var _util_warning = __webpack_require__(15564);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/checkbox/index.js + 3 modules
var es_checkbox = __webpack_require__(96627);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/dropdown/index.js + 1 modules
var dropdown = __webpack_require__(58571);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/index.js + 5 modules
var es_radio = __webpack_require__(67930);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useSelection.js
"use client";
















// TODO: warning if use ajax!!!
const SELECTION_COLUMN = {};
const SELECTION_ALL = 'SELECT_ALL';
const SELECTION_INVERT = 'SELECT_INVERT';
const SELECTION_NONE = 'SELECT_NONE';
const EMPTY_LIST = [];
const flattenData = (childrenColumnName, data) => {
  let list = [];
  (data || []).forEach(record => {
    list.push(record);
    if (record && typeof record === 'object' && childrenColumnName in record) {
      list = [].concat((0,toConsumableArray/* default */.Z)(list), (0,toConsumableArray/* default */.Z)(flattenData(childrenColumnName, record[childrenColumnName])));
    }
  });
  return list;
};
const useSelection = (config, rowSelection) => {
  const {
    preserveSelectedRowKeys,
    selectedRowKeys,
    defaultSelectedRowKeys,
    getCheckboxProps,
    onChange: onSelectionChange,
    onSelect,
    onSelectAll,
    onSelectInvert,
    onSelectNone,
    onSelectMultiple,
    columnWidth: selectionColWidth,
    type: selectionType,
    selections,
    fixed,
    renderCell: customizeRenderCell,
    hideSelectAll,
    checkStrictly = true
  } = rowSelection || {};
  const {
    prefixCls,
    data,
    pageData,
    getRecordByKey,
    getRowKey,
    expandType,
    childrenColumnName,
    locale: tableLocale,
    getPopupContainer
  } = config;
  const warning = (0,_util_warning/* devUseWarning */.ln)('Table');
  // ========================= MultipleSelect =========================
  const [multipleSelect, updatePrevSelectedIndex] = useMultipleSelect(item => item);
  // ========================= Keys =========================
  const [mergedSelectedKeys, setMergedSelectedKeys] = (0,useMergedState/* default */.Z)(selectedRowKeys || defaultSelectedRowKeys || EMPTY_LIST, {
    value: selectedRowKeys
  });
  // ======================== Caches ========================
  const preserveRecordsRef = react.useRef(new Map());
  const updatePreserveRecordsCache = (0,react.useCallback)(keys => {
    if (preserveSelectedRowKeys) {
      const newCache = new Map();
      // Keep key if mark as preserveSelectedRowKeys
      keys.forEach(key => {
        let record = getRecordByKey(key);
        if (!record && preserveRecordsRef.current.has(key)) {
          record = preserveRecordsRef.current.get(key);
        }
        newCache.set(key, record);
      });
      // Refresh to new cache
      preserveRecordsRef.current = newCache;
    }
  }, [getRecordByKey, preserveSelectedRowKeys]);
  // Update cache with selectedKeys
  react.useEffect(() => {
    updatePreserveRecordsCache(mergedSelectedKeys);
  }, [mergedSelectedKeys]);
  // Get flatten data
  const flattedData = (0,react.useMemo)(() => flattenData(childrenColumnName, pageData), [childrenColumnName, pageData]);
  const {
    keyEntities
  } = (0,react.useMemo)(() => {
    if (checkStrictly) {
      return {
        keyEntities: null
      };
    }
    let convertData = data;
    if (preserveSelectedRowKeys) {
      // use flattedData keys
      const keysSet = new Set(flattedData.map((record, index) => getRowKey(record, index)));
      // remove preserveRecords that duplicate data
      const preserveRecords = Array.from(preserveRecordsRef.current).reduce((total, _ref) => {
        let [key, value] = _ref;
        return keysSet.has(key) ? total : total.concat(value);
      }, []);
      convertData = [].concat((0,toConsumableArray/* default */.Z)(convertData), (0,toConsumableArray/* default */.Z)(preserveRecords));
    }
    return (0,treeUtil/* convertDataToEntities */.I8)(convertData, {
      externalGetKey: getRowKey,
      childrenPropName: childrenColumnName
    });
  }, [data, getRowKey, checkStrictly, childrenColumnName, preserveSelectedRowKeys, flattedData]);
  // Get all checkbox props
  const checkboxPropsMap = (0,react.useMemo)(() => {
    const map = new Map();
    flattedData.forEach((record, index) => {
      const key = getRowKey(record, index);
      const checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
      map.set(key, checkboxProps);
       false ? 0 : void 0;
    });
    return map;
  }, [flattedData, getRowKey, getCheckboxProps]);
  const isCheckboxDisabled = (0,react.useCallback)(r => {
    var _a;
    return !!((_a = checkboxPropsMap.get(getRowKey(r))) === null || _a === void 0 ? void 0 : _a.disabled);
  }, [checkboxPropsMap, getRowKey]);
  const [derivedSelectedKeys, derivedHalfSelectedKeys] = (0,react.useMemo)(() => {
    if (checkStrictly) {
      return [mergedSelectedKeys || [], []];
    }
    const {
      checkedKeys,
      halfCheckedKeys
    } = (0,conductUtil/* conductCheck */.S)(mergedSelectedKeys, true, keyEntities, isCheckboxDisabled);
    return [checkedKeys || [], halfCheckedKeys];
  }, [mergedSelectedKeys, checkStrictly, keyEntities, isCheckboxDisabled]);
  const derivedSelectedKeySet = (0,react.useMemo)(() => {
    const keys = selectionType === 'radio' ? derivedSelectedKeys.slice(0, 1) : derivedSelectedKeys;
    return new Set(keys);
  }, [derivedSelectedKeys, selectionType]);
  const derivedHalfSelectedKeySet = (0,react.useMemo)(() => selectionType === 'radio' ? new Set() : new Set(derivedHalfSelectedKeys), [derivedHalfSelectedKeys, selectionType]);
  // Reset if rowSelection reset
  react.useEffect(() => {
    if (!rowSelection) {
      setMergedSelectedKeys(EMPTY_LIST);
    }
  }, [!!rowSelection]);
  const setSelectedKeys = (0,react.useCallback)((keys, method) => {
    let availableKeys;
    let records;
    updatePreserveRecordsCache(keys);
    if (preserveSelectedRowKeys) {
      availableKeys = keys;
      records = keys.map(key => preserveRecordsRef.current.get(key));
    } else {
      // Filter key which not exist in the `dataSource`
      availableKeys = [];
      records = [];
      keys.forEach(key => {
        const record = getRecordByKey(key);
        if (record !== undefined) {
          availableKeys.push(key);
          records.push(record);
        }
      });
    }
    setMergedSelectedKeys(availableKeys);
    onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(availableKeys, records, {
      type: method
    });
  }, [setMergedSelectedKeys, getRecordByKey, onSelectionChange, preserveSelectedRowKeys]);
  // ====================== Selections ======================
  // Trigger single `onSelect` event
  const triggerSingleSelection = (0,react.useCallback)((key, selected, keys, event) => {
    if (onSelect) {
      const rows = keys.map(k => getRecordByKey(k));
      onSelect(getRecordByKey(key), selected, rows, event);
    }
    setSelectedKeys(keys, 'single');
  }, [onSelect, getRecordByKey, setSelectedKeys]);
  const mergedSelections = (0,react.useMemo)(() => {
    if (!selections || hideSelectAll) {
      return null;
    }
    const selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT, SELECTION_NONE] : selections;
    return selectionList.map(selection => {
      if (selection === SELECTION_ALL) {
        return {
          key: 'all',
          text: tableLocale.selectionAll,
          onSelect() {
            setSelectedKeys(data.map((record, index) => getRowKey(record, index)).filter(key => {
              const checkProps = checkboxPropsMap.get(key);
              return !(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled) || derivedSelectedKeySet.has(key);
            }), 'all');
          }
        };
      }
      if (selection === SELECTION_INVERT) {
        return {
          key: 'invert',
          text: tableLocale.selectInvert,
          onSelect() {
            const keySet = new Set(derivedSelectedKeySet);
            pageData.forEach((record, index) => {
              const key = getRowKey(record, index);
              const checkProps = checkboxPropsMap.get(key);
              if (!(checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled)) {
                if (keySet.has(key)) {
                  keySet.delete(key);
                } else {
                  keySet.add(key);
                }
              }
            });
            const keys = Array.from(keySet);
            if (onSelectInvert) {
              warning.deprecated(false, 'onSelectInvert', 'onChange');
              onSelectInvert(keys);
            }
            setSelectedKeys(keys, 'invert');
          }
        };
      }
      if (selection === SELECTION_NONE) {
        return {
          key: 'none',
          text: tableLocale.selectNone,
          onSelect() {
            onSelectNone === null || onSelectNone === void 0 ? void 0 : onSelectNone();
            setSelectedKeys(Array.from(derivedSelectedKeySet).filter(key => {
              const checkProps = checkboxPropsMap.get(key);
              return checkProps === null || checkProps === void 0 ? void 0 : checkProps.disabled;
            }), 'none');
          }
        };
      }
      return selection;
    }).map(selection => Object.assign(Object.assign({}, selection), {
      onSelect: function () {
        var _a2;
        var _a;
        for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }
        (_a = selection.onSelect) === null || _a === void 0 ? void 0 : (_a2 = _a).call.apply(_a2, [selection].concat(rest));
        updatePrevSelectedIndex(null);
      }
    }));
  }, [selections, derivedSelectedKeySet, pageData, getRowKey, onSelectInvert, setSelectedKeys]);
  // ======================= Columns ========================
  const transformColumns = (0,react.useCallback)(columns => {
    var _a;
    // >>>>>>>>>>> Skip if not exists `rowSelection`
    if (!rowSelection) {
       false ? 0 : void 0;
      return columns.filter(col => col !== SELECTION_COLUMN);
    }
    // >>>>>>>>>>> Support selection
    let cloneColumns = (0,toConsumableArray/* default */.Z)(columns);
    const keySet = new Set(derivedSelectedKeySet);
    // Record key only need check with enabled
    const recordKeys = flattedData.map(getRowKey).filter(key => !checkboxPropsMap.get(key).disabled);
    const checkedCurrentAll = recordKeys.every(key => keySet.has(key));
    const checkedCurrentSome = recordKeys.some(key => keySet.has(key));
    const onSelectAllChange = () => {
      const changeKeys = [];
      if (checkedCurrentAll) {
        recordKeys.forEach(key => {
          keySet.delete(key);
          changeKeys.push(key);
        });
      } else {
        recordKeys.forEach(key => {
          if (!keySet.has(key)) {
            keySet.add(key);
            changeKeys.push(key);
          }
        });
      }
      const keys = Array.from(keySet);
      onSelectAll === null || onSelectAll === void 0 ? void 0 : onSelectAll(!checkedCurrentAll, keys.map(k => getRecordByKey(k)), changeKeys.map(k => getRecordByKey(k)));
      setSelectedKeys(keys, 'all');
      updatePrevSelectedIndex(null);
    };
    // ===================== Render =====================
    // Title Cell
    let title;
    let columnTitleCheckbox;
    if (selectionType !== 'radio') {
      let customizeSelections;
      if (mergedSelections) {
        const menu = {
          getPopupContainer,
          items: mergedSelections.map((selection, index) => {
            const {
              key,
              text,
              onSelect: onSelectionClick
            } = selection;
            return {
              key: key !== null && key !== void 0 ? key : index,
              onClick: () => {
                onSelectionClick === null || onSelectionClick === void 0 ? void 0 : onSelectionClick(recordKeys);
              },
              label: text
            };
          })
        };
        customizeSelections = /*#__PURE__*/react.createElement("div", {
          className: `${prefixCls}-selection-extra`
        }, /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
          menu: menu,
          getPopupContainer: getPopupContainer
        }, /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(DownOutlined/* default */.Z, null))));
      }
      const allDisabledData = flattedData.map((record, index) => {
        const key = getRowKey(record, index);
        const checkboxProps = checkboxPropsMap.get(key) || {};
        return Object.assign({
          checked: keySet.has(key)
        }, checkboxProps);
      }).filter(_ref2 => {
        let {
          disabled
        } = _ref2;
        return disabled;
      });
      const allDisabled = !!allDisabledData.length && allDisabledData.length === flattedData.length;
      const allDisabledAndChecked = allDisabled && allDisabledData.every(_ref3 => {
        let {
          checked
        } = _ref3;
        return checked;
      });
      const allDisabledSomeChecked = allDisabled && allDisabledData.some(_ref4 => {
        let {
          checked
        } = _ref4;
        return checked;
      });
      columnTitleCheckbox = /*#__PURE__*/react.createElement(es_checkbox/* default */.Z, {
        checked: !allDisabled ? !!flattedData.length && checkedCurrentAll : allDisabledAndChecked,
        indeterminate: !allDisabled ? !checkedCurrentAll && checkedCurrentSome : !allDisabledAndChecked && allDisabledSomeChecked,
        onChange: onSelectAllChange,
        disabled: flattedData.length === 0 || allDisabled,
        "aria-label": customizeSelections ? 'Custom selection' : 'Select all',
        skipGroup: true
      });
      title = !hideSelectAll && (/*#__PURE__*/react.createElement("div", {
        className: `${prefixCls}-selection`
      }, columnTitleCheckbox, customizeSelections));
    }
    // Body Cell
    let renderCell;
    if (selectionType === 'radio') {
      renderCell = (_, record, index) => {
        const key = getRowKey(record, index);
        const checked = keySet.has(key);
        return {
          node: (/*#__PURE__*/react.createElement(es_radio/* default */.ZP, Object.assign({}, checkboxPropsMap.get(key), {
            checked: checked,
            onClick: e => e.stopPropagation(),
            onChange: event => {
              if (!keySet.has(key)) {
                triggerSingleSelection(key, true, [key], event.nativeEvent);
              }
            }
          }))),
          checked
        };
      };
    } else {
      renderCell = (_, record, index) => {
        var _a;
        const key = getRowKey(record, index);
        const checked = keySet.has(key);
        const indeterminate = derivedHalfSelectedKeySet.has(key);
        const checkboxProps = checkboxPropsMap.get(key);
        let mergedIndeterminate;
        if (expandType === 'nest') {
          mergedIndeterminate = indeterminate;
           false ? 0 : void 0;
        } else {
          mergedIndeterminate = (_a = checkboxProps === null || checkboxProps === void 0 ? void 0 : checkboxProps.indeterminate) !== null && _a !== void 0 ? _a : indeterminate;
        }
        // Record checked
        return {
          node: (/*#__PURE__*/react.createElement(es_checkbox/* default */.Z, Object.assign({}, checkboxProps, {
            indeterminate: mergedIndeterminate,
            checked: checked,
            skipGroup: true,
            onClick: e => e.stopPropagation(),
            onChange: _ref5 => {
              let {
                nativeEvent
              } = _ref5;
              const {
                shiftKey
              } = nativeEvent;
              const currentSelectedIndex = recordKeys.findIndex(item => item === key);
              const isMultiple = derivedSelectedKeys.some(item => recordKeys.includes(item));
              if (shiftKey && checkStrictly && isMultiple) {
                const changedKeys = multipleSelect(currentSelectedIndex, recordKeys, keySet);
                const keys = Array.from(keySet);
                onSelectMultiple === null || onSelectMultiple === void 0 ? void 0 : onSelectMultiple(!checked, keys.map(recordKey => getRecordByKey(recordKey)), changedKeys.map(recordKey => getRecordByKey(recordKey)));
                setSelectedKeys(keys, 'multiple');
              } else {
                // Single record selected
                const originCheckedKeys = derivedSelectedKeys;
                if (checkStrictly) {
                  const checkedKeys = checked ? (0,util/* arrDel */._5)(originCheckedKeys, key) : (0,util/* arrAdd */.L0)(originCheckedKeys, key);
                  triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                } else {
                  // Always fill first
                  const result = (0,conductUtil/* conductCheck */.S)([].concat((0,toConsumableArray/* default */.Z)(originCheckedKeys), [key]), true, keyEntities, isCheckboxDisabled);
                  const {
                    checkedKeys,
                    halfCheckedKeys
                  } = result;
                  let nextCheckedKeys = checkedKeys;
                  // If remove, we do it again to correction
                  if (checked) {
                    const tempKeySet = new Set(checkedKeys);
                    tempKeySet.delete(key);
                    nextCheckedKeys = (0,conductUtil/* conductCheck */.S)(Array.from(tempKeySet), {
                      checked: false,
                      halfCheckedKeys
                    }, keyEntities, isCheckboxDisabled).checkedKeys;
                  }
                  triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                }
              }
              if (checked) {
                updatePrevSelectedIndex(null);
              } else {
                updatePrevSelectedIndex(currentSelectedIndex);
              }
            }
          }))),
          checked
        };
      };
    }
    const renderSelectionCell = (_, record, index) => {
      const {
        node,
        checked
      } = renderCell(_, record, index);
      if (customizeRenderCell) {
        return customizeRenderCell(checked, record, index, node);
      }
      return node;
    };
    // Insert selection column if not exist
    if (!cloneColumns.includes(SELECTION_COLUMN)) {
      // Always after expand icon
      if (cloneColumns.findIndex(col => {
        var _a;
        return ((_a = col[es.INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === 'EXPAND_COLUMN';
      }) === 0) {
        const [expandColumn, ...restColumns] = cloneColumns;
        cloneColumns = [expandColumn, SELECTION_COLUMN].concat((0,toConsumableArray/* default */.Z)(restColumns));
      } else {
        // Normal insert at first column
        cloneColumns = [SELECTION_COLUMN].concat((0,toConsumableArray/* default */.Z)(cloneColumns));
      }
    }
    // Deduplicate selection column
    const selectionColumnIndex = cloneColumns.indexOf(SELECTION_COLUMN);
     false ? 0 : void 0;
    cloneColumns = cloneColumns.filter((column, index) => column !== SELECTION_COLUMN || index === selectionColumnIndex);
    // Fixed column logic
    const prevCol = cloneColumns[selectionColumnIndex - 1];
    const nextCol = cloneColumns[selectionColumnIndex + 1];
    let mergedFixed = fixed;
    if (mergedFixed === undefined) {
      if ((nextCol === null || nextCol === void 0 ? void 0 : nextCol.fixed) !== undefined) {
        mergedFixed = nextCol.fixed;
      } else if ((prevCol === null || prevCol === void 0 ? void 0 : prevCol.fixed) !== undefined) {
        mergedFixed = prevCol.fixed;
      }
    }
    if (mergedFixed && prevCol && ((_a = prevCol[es.INTERNAL_COL_DEFINE]) === null || _a === void 0 ? void 0 : _a.columnType) === 'EXPAND_COLUMN' && prevCol.fixed === undefined) {
      prevCol.fixed = mergedFixed;
    }
    const columnCls = classnames_default()(`${prefixCls}-selection-col`, {
      [`${prefixCls}-selection-col-with-dropdown`]: selections && selectionType === 'checkbox'
    });
    const renderColumnTitle = () => {
      if (!(rowSelection === null || rowSelection === void 0 ? void 0 : rowSelection.columnTitle)) {
        return title;
      }
      if (typeof rowSelection.columnTitle === 'function') {
        return rowSelection.columnTitle(columnTitleCheckbox);
      }
      return rowSelection.columnTitle;
    };
    // Replace with real selection column
    const selectionColumn = {
      fixed: mergedFixed,
      width: selectionColWidth,
      className: `${prefixCls}-selection-column`,
      title: renderColumnTitle(),
      render: renderSelectionCell,
      onCell: rowSelection.onCell,
      [es.INTERNAL_COL_DEFINE]: {
        className: columnCls
      }
    };
    return cloneColumns.map(col => col === SELECTION_COLUMN ? selectionColumn : col);
  }, [getRowKey, flattedData, rowSelection, derivedSelectedKeys, derivedSelectedKeySet, derivedHalfSelectedKeySet, selectionColWidth, mergedSelections, expandType, checkboxPropsMap, onSelectMultiple, triggerSingleSelection, isCheckboxDisabled]);
  return [transformColumns, derivedSelectedKeySet];
};
/* harmony default export */ var hooks_useSelection = (useSelection);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-table@7.47.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-table/es/hooks/useColumns/index.js + 1 modules
var useColumns = __webpack_require__(19384);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(30454);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useProxyImperativeHandle.js
// Proxy the dom ref with `{ nativeElement, otherFn }` type
// ref: https://github.com/ant-design/ant-design/discussions/45242

function fillProxy(element, handler) {
  element._antProxy = element._antProxy || {};
  Object.keys(handler).forEach(key => {
    if (!(key in element._antProxy)) {
      const ori = element[key];
      element._antProxy[key] = ori;
      element[key] = handler[key];
    }
  });
  return element;
}
function useProxyImperativeHandle(ref, init) {
  return (0,react.useImperativeHandle)(ref, () => {
    const refObj = init();
    const {
      nativeElement
    } = refObj;
    if (typeof Proxy !== 'undefined') {
      return new Proxy(nativeElement, {
        get(obj, prop) {
          if (refObj[prop]) {
            return refObj[prop];
          }
          return Reflect.get(obj, prop);
        }
      });
    }
    // Fallback of IE
    return fillProxy(nativeElement, refObj);
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/scrollTo.js + 1 modules
var scrollTo = __webpack_require__(44255);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(83756);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/defaultRenderEmpty.js
var defaultRenderEmpty = __webpack_require__(7224);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = __webpack_require__(91880);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(72530);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(92873);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/locale/en_US.js + 1 modules
var en_US = __webpack_require__(48260);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/pagination/index.js + 4 modules
var es_pagination = __webpack_require__(18535);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(34888);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/useToken.js
var useToken = __webpack_require__(2100);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/ExpandIcon.js
"use client";



function renderExpandIcon(locale) {
  return props => {
    const {
      prefixCls,
      onExpand,
      record,
      expanded,
      expandable
    } = props;
    const iconPrefix = `${prefixCls}-row-expand-icon`;
    return /*#__PURE__*/react.createElement("button", {
      type: "button",
      onClick: e => {
        onExpand(record, e);
        e.stopPropagation();
      },
      className: classnames_default()(iconPrefix, {
        [`${iconPrefix}-spaced`]: !expandable,
        [`${iconPrefix}-expanded`]: expandable && expanded,
        [`${iconPrefix}-collapsed`]: expandable && !expanded
      }),
      "aria-label": expanded ? locale.collapse : locale.expand,
      "aria-expanded": expanded
    });
  };
}
/* harmony default export */ var ExpandIcon = (renderExpandIcon);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useContainerWidth.js
function useContainerWidth(prefixCls) {
  const getContainerWidth = (ele, width) => {
    const container = ele.querySelector(`.${prefixCls}-container`);
    let returnWidth = width;
    if (container) {
      const style = getComputedStyle(container);
      const borderLeft = parseInt(style.borderLeftWidth, 10);
      const borderRight = parseInt(style.borderRightWidth, 10);
      returnWidth = width - borderLeft - borderRight;
    }
    return returnWidth;
  };
  return getContainerWidth;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/util.js
const getColumnKey = (column, defaultKey) => {
  if ('key' in column && column.key !== undefined && column.key !== null) {
    return column.key;
  }
  if (column.dataIndex) {
    return Array.isArray(column.dataIndex) ? column.dataIndex.join('.') : column.dataIndex;
  }
  return defaultKey;
};
function getColumnPos(index, pos) {
  return pos ? `${pos}-${index}` : `${index}`;
}
const renderColumnTitle = (title, props) => {
  if (typeof title === 'function') {
    return title(props);
  }
  return title;
};
/**
 * Safe get column title
 *
 * Should filter [object Object]
 *
 * @param title
 */
const safeColumnTitle = (title, props) => {
  const res = renderColumnTitle(title, props);
  if (Object.prototype.toString.call(res) === '[object Object]') {
    return '';
  }
  return res;
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FilterFilled.js + 1 modules
var FilterFilled = __webpack_require__(12706);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/isEqual.js
var isEqual = __webpack_require__(26920);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useForceUpdate.js
var useForceUpdate = __webpack_require__(32537);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useSyncState.js


function useSyncState(initialValue) {
  const ref = react.useRef(initialValue);
  const forceUpdate = (0,useForceUpdate/* default */.Z)();
  return [() => ref.current, newValue => {
    ref.current = newValue;
    // re-render
    forceUpdate();
  }];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(23674);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/empty/index.js + 3 modules
var es_empty = __webpack_require__(47822);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/menu/index.js + 10 modules
var es_menu = __webpack_require__(90708);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/menu/OverrideContext.js
var OverrideContext = __webpack_require__(24379);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-tree/es/index.js + 7 modules
var rc_tree_es = __webpack_require__(93432);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileOutlined.js + 1 modules
var FileOutlined = __webpack_require__(82235);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FolderOpenOutlined.js + 1 modules
var FolderOpenOutlined = __webpack_require__(12127);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FolderOutlined.js + 1 modules
var FolderOutlined = __webpack_require__(24214);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HolderOutlined.js + 1 modules
var HolderOutlined = __webpack_require__(9882);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/motion.js
var _util_motion = __webpack_require__(93143);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/style/index.js
var tree_style = __webpack_require__(98351);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/utils/dropIndicator.js
"use client";


const offset = 4;
function dropIndicatorRender(props) {
  const {
    dropPosition,
    dropLevelOffset,
    prefixCls,
    indent,
    direction = 'ltr'
  } = props;
  const startPosition = direction === 'ltr' ? 'left' : 'right';
  const endPosition = direction === 'ltr' ? 'right' : 'left';
  const style = {
    [startPosition]: -dropLevelOffset * indent + offset,
    [endPosition]: 0
  };
  switch (dropPosition) {
    case -1:
      style.top = -3;
      break;
    case 1:
      style.bottom = -3;
      break;
    default:
      // dropPosition === 0
      style.bottom = -3;
      style[startPosition] = indent + offset;
      break;
  }
  return /*#__PURE__*/react.createElement("div", {
    style: style,
    className: `${prefixCls}-drop-indicator`
  });
}
/* harmony default export */ var dropIndicator = (dropIndicatorRender);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/utils/iconUtil.js
var iconUtil = __webpack_require__(65420);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/Tree.js
"use client";











const Tree = /*#__PURE__*/react.forwardRef((props, ref) => {
  var _a;
  const {
    getPrefixCls,
    direction,
    virtual,
    tree
  } = react.useContext(context/* ConfigContext */.E_);
  const {
    prefixCls: customizePrefixCls,
    className,
    showIcon = false,
    showLine,
    switcherIcon,
    switcherLoadingIcon,
    blockNode = false,
    children,
    checkable = false,
    selectable = true,
    draggable,
    motion: customMotion,
    style
  } = props;
  const prefixCls = getPrefixCls('tree', customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const motion = customMotion !== null && customMotion !== void 0 ? customMotion : Object.assign(Object.assign({}, (0,_util_motion/* default */.Z)(rootPrefixCls)), {
    motionAppear: false
  });
  const newProps = Object.assign(Object.assign({}, props), {
    checkable,
    selectable,
    showIcon,
    motion,
    blockNode,
    showLine: Boolean(showLine),
    dropIndicatorRender: dropIndicator
  });
  const [wrapCSSVar, hashId, cssVarCls] = (0,tree_style/* default */.ZP)(prefixCls);
  const [, token] = (0,useToken/* default */.ZP)();
  const itemHeight = token.paddingXS / 2 + (((_a = token.Tree) === null || _a === void 0 ? void 0 : _a.titleHeight) || token.controlHeightSM);
  const draggableConfig = react.useMemo(() => {
    if (!draggable) {
      return false;
    }
    let mergedDraggable = {};
    switch (typeof draggable) {
      case 'function':
        mergedDraggable.nodeDraggable = draggable;
        break;
      case 'object':
        mergedDraggable = Object.assign({}, draggable);
        break;
      default:
        break;
      // Do nothing
    }
    if (mergedDraggable.icon !== false) {
      mergedDraggable.icon = mergedDraggable.icon || /*#__PURE__*/react.createElement(HolderOutlined/* default */.Z, null);
    }
    return mergedDraggable;
  }, [draggable]);
  const renderSwitcherIcon = nodeProps => (/*#__PURE__*/react.createElement(iconUtil/* default */.Z, {
    prefixCls: prefixCls,
    switcherIcon: switcherIcon,
    switcherLoadingIcon: switcherLoadingIcon,
    treeNodeProps: nodeProps,
    showLine: showLine
  }));
  return wrapCSSVar(
  /*#__PURE__*/
  // @ts-ignore
  react.createElement(rc_tree_es["default"], Object.assign({
    itemHeight: itemHeight,
    ref: ref,
    virtual: virtual
  }, newProps, {
    // newProps may contain style so declare style below it
    style: Object.assign(Object.assign({}, tree === null || tree === void 0 ? void 0 : tree.style), style),
    prefixCls: prefixCls,
    className: classnames_default()({
      [`${prefixCls}-icon-hide`]: !showIcon,
      [`${prefixCls}-block-node`]: blockNode,
      [`${prefixCls}-unselectable`]: !selectable,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, tree === null || tree === void 0 ? void 0 : tree.className, className, hashId, cssVarCls),
    direction: direction,
    checkable: checkable ? /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-checkbox-inner`
    }) : checkable,
    selectable: selectable,
    switcherIcon: renderSwitcherIcon,
    draggable: draggableConfig
  }), children));
});
if (false) {}
/* harmony default export */ var tree_Tree = (Tree);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/utils/dictUtil.js


const RECORD_NONE = 0;
const RECORD_START = 1;
const RECORD_END = 2;
function traverseNodesKey(treeData, callback, fieldNames) {
  const {
    key: fieldKey,
    children: fieldChildren
  } = fieldNames;
  function processNode(dataNode) {
    const key = dataNode[fieldKey];
    const children = dataNode[fieldChildren];
    if (callback(key, dataNode) !== false) {
      traverseNodesKey(children || [], callback, fieldNames);
    }
  }
  treeData.forEach(processNode);
}
/** 计算选中范围，只考虑expanded情况以优化性能 */
function calcRangeKeys(_ref) {
  let {
    treeData,
    expandedKeys,
    startKey,
    endKey,
    fieldNames
  } = _ref;
  const keys = [];
  let record = RECORD_NONE;
  if (startKey && startKey === endKey) {
    return [startKey];
  }
  if (!startKey || !endKey) {
    return [];
  }
  function matchKey(key) {
    return key === startKey || key === endKey;
  }
  traverseNodesKey(treeData, key => {
    if (record === RECORD_END) {
      return false;
    }
    if (matchKey(key)) {
      // Match test
      keys.push(key);
      if (record === RECORD_NONE) {
        record = RECORD_START;
      } else if (record === RECORD_START) {
        record = RECORD_END;
        return false;
      }
    } else if (record === RECORD_START) {
      // Append selection
      keys.push(key);
    }
    return expandedKeys.includes(key);
  }, (0,treeUtil/* fillFieldNames */.w$)(fieldNames));
  return keys;
}
function convertDirectoryKeysToNodes(treeData, keys, fieldNames) {
  const restKeys = (0,toConsumableArray/* default */.Z)(keys);
  const nodes = [];
  traverseNodesKey(treeData, (key, node) => {
    const index = restKeys.indexOf(key);
    if (index !== -1) {
      nodes.push(node);
      restKeys.splice(index, 1);
    }
    return !!restKeys.length;
  }, (0,treeUtil/* fillFieldNames */.w$)(fieldNames));
  return nodes;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/DirectoryTree.js
"use client";


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










function getIcon(props) {
  const {
    isLeaf,
    expanded
  } = props;
  if (isLeaf) {
    return /*#__PURE__*/react.createElement(FileOutlined/* default */.Z, null);
  }
  return expanded ? /*#__PURE__*/react.createElement(FolderOpenOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(FolderOutlined/* default */.Z, null);
}
function getTreeData(_ref) {
  let {
    treeData,
    children
  } = _ref;
  return treeData || (0,treeUtil/* convertTreeToData */.zn)(children);
}
const DirectoryTree = (_a, ref) => {
  var {
      defaultExpandAll,
      defaultExpandParent,
      defaultExpandedKeys
    } = _a,
    props = __rest(_a, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]);
  // Shift click usage
  const lastSelectedKey = react.useRef();
  const cachedSelectedKeys = react.useRef();
  const getInitExpandedKeys = () => {
    const {
      keyEntities
    } = (0,treeUtil/* convertDataToEntities */.I8)(getTreeData(props));
    let initExpandedKeys;
    // Expanded keys
    if (defaultExpandAll) {
      initExpandedKeys = Object.keys(keyEntities);
    } else if (defaultExpandParent) {
      initExpandedKeys = (0,util/* conductExpandParent */.r7)(props.expandedKeys || defaultExpandedKeys || [], keyEntities);
    } else {
      initExpandedKeys = props.expandedKeys || defaultExpandedKeys || [];
    }
    return initExpandedKeys;
  };
  const [selectedKeys, setSelectedKeys] = react.useState(props.selectedKeys || props.defaultSelectedKeys || []);
  const [expandedKeys, setExpandedKeys] = react.useState(() => getInitExpandedKeys());
  react.useEffect(() => {
    if ('selectedKeys' in props) {
      setSelectedKeys(props.selectedKeys);
    }
  }, [props.selectedKeys]);
  react.useEffect(() => {
    if ('expandedKeys' in props) {
      setExpandedKeys(props.expandedKeys);
    }
  }, [props.expandedKeys]);
  const onExpand = (keys, info) => {
    var _a;
    if (!('expandedKeys' in props)) {
      setExpandedKeys(keys);
    }
    // Call origin function
    return (_a = props.onExpand) === null || _a === void 0 ? void 0 : _a.call(props, keys, info);
  };
  const onSelect = (keys, event) => {
    var _a;
    const {
      multiple,
      fieldNames
    } = props;
    const {
      node,
      nativeEvent
    } = event;
    const {
      key = ''
    } = node;
    const treeData = getTreeData(props);
    // const newState: DirectoryTreeState = {};
    // We need wrap this event since some value is not same
    const newEvent = Object.assign(Object.assign({}, event), {
      selected: true
    });
    // Windows / Mac single pick
    const ctrlPick = (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.ctrlKey) || (nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.metaKey);
    const shiftPick = nativeEvent === null || nativeEvent === void 0 ? void 0 : nativeEvent.shiftKey;
    // Generate new selected keys
    let newSelectedKeys;
    if (multiple && ctrlPick) {
      // Control click
      newSelectedKeys = keys;
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys, fieldNames);
    } else if (multiple && shiftPick) {
      // Shift click
      newSelectedKeys = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(cachedSelectedKeys.current || []), (0,toConsumableArray/* default */.Z)(calcRangeKeys({
        treeData,
        expandedKeys,
        startKey: key,
        endKey: lastSelectedKey.current,
        fieldNames
      })))));
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys, fieldNames);
    } else {
      // Single click
      newSelectedKeys = [key];
      lastSelectedKey.current = key;
      cachedSelectedKeys.current = newSelectedKeys;
      newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys, fieldNames);
    }
    (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, newSelectedKeys, newEvent);
    if (!('selectedKeys' in props)) {
      setSelectedKeys(newSelectedKeys);
    }
  };
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      className,
      showIcon = true,
      expandAction = 'click'
    } = props,
    otherProps = __rest(props, ["prefixCls", "className", "showIcon", "expandAction"]);
  const prefixCls = getPrefixCls('tree', customizePrefixCls);
  const connectClassName = classnames_default()(`${prefixCls}-directory`, {
    [`${prefixCls}-directory-rtl`]: direction === 'rtl'
  }, className);
  return /*#__PURE__*/react.createElement(tree_Tree, Object.assign({
    icon: getIcon,
    ref: ref,
    blockNode: true
  }, otherProps, {
    showIcon: showIcon,
    expandAction: expandAction,
    prefixCls: prefixCls,
    className: connectClassName,
    expandedKeys: expandedKeys,
    selectedKeys: selectedKeys,
    onSelect: onSelect,
    onExpand: onExpand
  }));
};
const ForwardDirectoryTree = /*#__PURE__*/react.forwardRef(DirectoryTree);
if (false) {}
/* harmony default export */ var tree_DirectoryTree = (ForwardDirectoryTree);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/index.js
"use client";




const es_tree_Tree = tree_Tree;
es_tree_Tree.DirectoryTree = tree_DirectoryTree;
es_tree_Tree.TreeNode = rc_tree_es.TreeNode;
/* harmony default export */ var tree = (es_tree_Tree);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(81630);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(1092);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useFilter/FilterSearch.js
"use client";




const FilterSearch = props => {
  const {
    value,
    filterSearch,
    tablePrefixCls,
    locale,
    onChange
  } = props;
  if (!filterSearch) {
    return null;
  }
  return /*#__PURE__*/react.createElement("div", {
    className: `${tablePrefixCls}-filter-dropdown-search`
  }, /*#__PURE__*/react.createElement(input/* default */.Z, {
    prefix: /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, null),
    placeholder: locale.filterSearchPlaceholder,
    onChange: onChange,
    value: value,
    // for skip min-width of input
    htmlSize: 1,
    className: `${tablePrefixCls}-filter-dropdown-search-input`
  }));
};
/* harmony default export */ var useFilter_FilterSearch = (FilterSearch);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(35763);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useFilter/FilterWrapper.js
"use client";



const onKeyDown = event => {
  const {
    keyCode
  } = event;
  if (keyCode === KeyCode/* default */.Z.ENTER) {
    event.stopPropagation();
  }
};
const FilterDropdownMenuWrapper = /*#__PURE__*/react.forwardRef((props, ref) => (/*#__PURE__*/react.createElement("div", {
  className: props.className,
  onClick: e => e.stopPropagation(),
  onKeyDown: onKeyDown,
  ref: ref
}, props.children)));
if (false) {}
/* harmony default export */ var FilterWrapper = (FilterDropdownMenuWrapper);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useFilter/FilterDropdown.js
"use client";



















function flattenKeys(filters) {
  let keys = [];
  (filters || []).forEach(_ref => {
    let {
      value,
      children
    } = _ref;
    keys.push(value);
    if (children) {
      keys = [].concat((0,toConsumableArray/* default */.Z)(keys), (0,toConsumableArray/* default */.Z)(flattenKeys(children)));
    }
  });
  return keys;
}
function hasSubMenu(filters) {
  return filters.some(_ref2 => {
    let {
      children
    } = _ref2;
    return children;
  });
}
function searchValueMatched(searchValue, text) {
  if (typeof text === 'string' || typeof text === 'number') {
    return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().includes(searchValue.trim().toLowerCase());
  }
  return false;
}
function renderFilterItems(_ref3) {
  let {
    filters,
    prefixCls,
    filteredKeys,
    filterMultiple,
    searchValue,
    filterSearch
  } = _ref3;
  return filters.map((filter, index) => {
    const key = String(filter.value);
    if (filter.children) {
      return {
        key: key || index,
        label: filter.text,
        popupClassName: `${prefixCls}-dropdown-submenu`,
        children: renderFilterItems({
          filters: filter.children,
          prefixCls,
          filteredKeys,
          filterMultiple,
          searchValue,
          filterSearch
        })
      };
    }
    const Component = filterMultiple ? es_checkbox/* default */.Z : es_radio/* default */.ZP;
    const item = {
      key: filter.value !== undefined ? key : index,
      label: (/*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Component, {
        checked: filteredKeys.includes(key)
      }), /*#__PURE__*/react.createElement("span", null, filter.text)))
    };
    if (searchValue.trim()) {
      if (typeof filterSearch === 'function') {
        return filterSearch(searchValue, filter) ? item : null;
      }
      return searchValueMatched(searchValue, filter.text) ? item : null;
    }
    return item;
  });
}
function wrapStringListType(keys) {
  return keys || [];
}
const FilterDropdown = props => {
  var _a, _b;
  const {
    tablePrefixCls,
    prefixCls,
    column,
    dropdownPrefixCls,
    columnKey,
    filterOnClose,
    filterMultiple,
    filterMode = 'menu',
    filterSearch = false,
    filterState,
    triggerFilter,
    locale,
    children,
    getPopupContainer,
    rootClassName
  } = props;
  const {
    filterDropdownOpen,
    onFilterDropdownOpenChange,
    filterResetToDefaultFilteredValue,
    defaultFilteredValue,
    // Deprecated
    filterDropdownVisible,
    onFilterDropdownVisibleChange
  } = column;
  const [visible, setVisible] = react.useState(false);
  const filtered = !!(filterState && (((_a = filterState.filteredKeys) === null || _a === void 0 ? void 0 : _a.length) || filterState.forceFiltered));
  const triggerVisible = newVisible => {
    setVisible(newVisible);
    onFilterDropdownOpenChange === null || onFilterDropdownOpenChange === void 0 ? void 0 : onFilterDropdownOpenChange(newVisible);
    onFilterDropdownVisibleChange === null || onFilterDropdownVisibleChange === void 0 ? void 0 : onFilterDropdownVisibleChange(newVisible);
  };
  if (false) {}
  const mergedVisible = (_b = filterDropdownOpen !== null && filterDropdownOpen !== void 0 ? filterDropdownOpen : filterDropdownVisible) !== null && _b !== void 0 ? _b : visible;
  // ===================== Select Keys =====================
  const propFilteredKeys = filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys;
  const [getFilteredKeysSync, setFilteredKeysSync] = useSyncState(wrapStringListType(propFilteredKeys));
  const onSelectKeys = _ref5 => {
    let {
      selectedKeys
    } = _ref5;
    setFilteredKeysSync(selectedKeys);
  };
  const onCheck = (keys, _ref6) => {
    let {
      node,
      checked
    } = _ref6;
    if (!filterMultiple) {
      onSelectKeys({
        selectedKeys: checked && node.key ? [node.key] : []
      });
    } else {
      onSelectKeys({
        selectedKeys: keys
      });
    }
  };
  react.useEffect(() => {
    if (!visible) {
      return;
    }
    onSelectKeys({
      selectedKeys: wrapStringListType(propFilteredKeys)
    });
  }, [propFilteredKeys]);
  // ====================== Open Keys ======================
  const [openKeys, setOpenKeys] = react.useState([]);
  const onOpenChange = keys => {
    setOpenKeys(keys);
  };
  // search in tree mode column filter
  const [searchValue, setSearchValue] = react.useState('');
  const onSearch = e => {
    const {
      value
    } = e.target;
    setSearchValue(value);
  };
  // clear search value after close filter dropdown
  react.useEffect(() => {
    if (!visible) {
      setSearchValue('');
    }
  }, [visible]);
  // ======================= Submit ========================
  const internalTriggerFilter = keys => {
    const mergedKeys = (keys === null || keys === void 0 ? void 0 : keys.length) ? keys : null;
    if (mergedKeys === null && (!filterState || !filterState.filteredKeys)) {
      return null;
    }
    if ((0,isEqual/* default */.Z)(mergedKeys, filterState === null || filterState === void 0 ? void 0 : filterState.filteredKeys, true)) {
      return null;
    }
    triggerFilter({
      column,
      key: columnKey,
      filteredKeys: mergedKeys
    });
  };
  const onConfirm = () => {
    triggerVisible(false);
    internalTriggerFilter(getFilteredKeysSync());
  };
  const onReset = function () {
    let {
      confirm,
      closeDropdown
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      confirm: false,
      closeDropdown: false
    };
    if (confirm) {
      internalTriggerFilter([]);
    }
    if (closeDropdown) {
      triggerVisible(false);
    }
    setSearchValue('');
    if (filterResetToDefaultFilteredValue) {
      setFilteredKeysSync((defaultFilteredValue || []).map(key => String(key)));
    } else {
      setFilteredKeysSync([]);
    }
  };
  const doFilter = function () {
    let {
      closeDropdown
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      closeDropdown: true
    };
    if (closeDropdown) {
      triggerVisible(false);
    }
    internalTriggerFilter(getFilteredKeysSync());
  };
  const onVisibleChange = (newVisible, info) => {
    if (info.source === 'trigger') {
      if (newVisible && propFilteredKeys !== undefined) {
        // Sync filteredKeys on appear in controlled mode (propFilteredKeys !== undefined)
        setFilteredKeysSync(wrapStringListType(propFilteredKeys));
      }
      triggerVisible(newVisible);
      if (!newVisible && !column.filterDropdown && filterOnClose) {
        onConfirm();
      }
    }
  };
  // ======================== Style ========================
  const dropdownMenuClass = classnames_default()({
    [`${dropdownPrefixCls}-menu-without-submenu`]: !hasSubMenu(column.filters || [])
  });
  const onCheckAll = e => {
    if (e.target.checked) {
      const allFilterKeys = flattenKeys(column === null || column === void 0 ? void 0 : column.filters).map(key => String(key));
      setFilteredKeysSync(allFilterKeys);
    } else {
      setFilteredKeysSync([]);
    }
  };
  const getTreeData = _ref7 => {
    let {
      filters
    } = _ref7;
    return (filters || []).map((filter, index) => {
      const key = String(filter.value);
      const item = {
        title: filter.text,
        key: filter.value !== undefined ? key : String(index)
      };
      if (filter.children) {
        item.children = getTreeData({
          filters: filter.children
        });
      }
      return item;
    });
  };
  const getFilterData = node => {
    var _a;
    return Object.assign(Object.assign({}, node), {
      text: node.title,
      value: node.key,
      children: ((_a = node.children) === null || _a === void 0 ? void 0 : _a.map(item => getFilterData(item))) || []
    });
  };
  let dropdownContent;
  const {
    direction,
    renderEmpty
  } = react.useContext(context/* ConfigContext */.E_);
  if (typeof column.filterDropdown === 'function') {
    dropdownContent = column.filterDropdown({
      prefixCls: `${dropdownPrefixCls}-custom`,
      setSelectedKeys: selectedKeys => onSelectKeys({
        selectedKeys: selectedKeys
      }),
      selectedKeys: getFilteredKeysSync(),
      confirm: doFilter,
      clearFilters: onReset,
      filters: column.filters,
      visible: mergedVisible,
      close: () => {
        triggerVisible(false);
      }
    });
  } else if (column.filterDropdown) {
    dropdownContent = column.filterDropdown;
  } else {
    const selectedKeys = getFilteredKeysSync() || [];
    const getFilterComponent = () => {
      var _a;
      const empty = (_a = renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Table.filter')) !== null && _a !== void 0 ? _a : (/*#__PURE__*/react.createElement(es_empty/* default */.Z, {
        image: es_empty/* default */.Z.PRESENTED_IMAGE_SIMPLE,
        description: locale.filterEmptyText,
        imageStyle: {
          height: 24
        },
        style: {
          margin: 0,
          padding: '16px 0'
        }
      }));
      if ((column.filters || []).length === 0) {
        return empty;
      }
      if (filterMode === 'tree') {
        return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(useFilter_FilterSearch, {
          filterSearch: filterSearch,
          value: searchValue,
          onChange: onSearch,
          tablePrefixCls: tablePrefixCls,
          locale: locale
        }), /*#__PURE__*/react.createElement("div", {
          className: `${tablePrefixCls}-filter-dropdown-tree`
        }, filterMultiple ? (/*#__PURE__*/react.createElement(es_checkbox/* default */.Z, {
          checked: selectedKeys.length === flattenKeys(column.filters).length,
          indeterminate: selectedKeys.length > 0 && selectedKeys.length < flattenKeys(column.filters).length,
          className: `${tablePrefixCls}-filter-dropdown-checkall`,
          onChange: onCheckAll
        }, locale.filterCheckall)) : null, /*#__PURE__*/react.createElement(tree, {
          checkable: true,
          selectable: false,
          blockNode: true,
          multiple: filterMultiple,
          checkStrictly: !filterMultiple,
          className: `${dropdownPrefixCls}-menu`,
          onCheck: onCheck,
          checkedKeys: selectedKeys,
          selectedKeys: selectedKeys,
          showIcon: false,
          treeData: getTreeData({
            filters: column.filters
          }),
          autoExpandParent: true,
          defaultExpandAll: true,
          filterTreeNode: searchValue.trim() ? node => {
            if (typeof filterSearch === 'function') {
              return filterSearch(searchValue, getFilterData(node));
            }
            return searchValueMatched(searchValue, node.title);
          } : undefined
        })));
      }
      const items = renderFilterItems({
        filters: column.filters || [],
        filterSearch,
        prefixCls,
        filteredKeys: getFilteredKeysSync(),
        filterMultiple,
        searchValue
      });
      const isEmpty = items.every(item => item === null);
      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(useFilter_FilterSearch, {
        filterSearch: filterSearch,
        value: searchValue,
        onChange: onSearch,
        tablePrefixCls: tablePrefixCls,
        locale: locale
      }), isEmpty ? empty : (/*#__PURE__*/react.createElement(es_menu/* default */.Z, {
        selectable: true,
        multiple: filterMultiple,
        prefixCls: `${dropdownPrefixCls}-menu`,
        className: dropdownMenuClass,
        onSelect: onSelectKeys,
        onDeselect: onSelectKeys,
        selectedKeys: selectedKeys,
        getPopupContainer: getPopupContainer,
        openKeys: openKeys,
        onOpenChange: onOpenChange,
        items: items
      })));
    };
    const getResetDisabled = () => {
      if (filterResetToDefaultFilteredValue) {
        return (0,isEqual/* default */.Z)((defaultFilteredValue || []).map(key => String(key)), selectedKeys, true);
      }
      return selectedKeys.length === 0;
    };
    dropdownContent = /*#__PURE__*/react.createElement(react.Fragment, null, getFilterComponent(), /*#__PURE__*/react.createElement("div", {
      className: `${prefixCls}-dropdown-btns`
    }, /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
      type: "link",
      size: "small",
      disabled: getResetDisabled(),
      onClick: () => onReset()
    }, locale.filterReset), /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
      type: "primary",
      size: "small",
      onClick: onConfirm
    }, locale.filterConfirm)));
  }
  // We should not block customize Menu with additional props
  if (column.filterDropdown) {
    dropdownContent = /*#__PURE__*/react.createElement(OverrideContext/* OverrideProvider */.J, {
      selectable: undefined
    }, dropdownContent);
  }
  const menu = () => (/*#__PURE__*/react.createElement(FilterWrapper, {
    className: `${prefixCls}-dropdown`
  }, dropdownContent));
  let filterIcon;
  if (typeof column.filterIcon === 'function') {
    filterIcon = column.filterIcon(filtered);
  } else if (column.filterIcon) {
    filterIcon = column.filterIcon;
  } else {
    filterIcon = /*#__PURE__*/react.createElement(FilterFilled/* default */.Z, null);
  }
  return /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-column`
  }, /*#__PURE__*/react.createElement("span", {
    className: `${tablePrefixCls}-column-title`
  }, children), /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
    dropdownRender: menu,
    trigger: ['click'],
    open: mergedVisible,
    onOpenChange: onVisibleChange,
    getPopupContainer: getPopupContainer,
    placement: direction === 'rtl' ? 'bottomLeft' : 'bottomRight',
    rootClassName: rootClassName
  }, /*#__PURE__*/react.createElement("span", {
    role: "button",
    tabIndex: -1,
    className: classnames_default()(`${prefixCls}-trigger`, {
      active: filtered
    }),
    onClick: e => {
      e.stopPropagation();
    }
  }, filterIcon)));
};
/* harmony default export */ var useFilter_FilterDropdown = (FilterDropdown);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useFilter/index.js
"use client";






const collectFilterStates = (columns, init, pos) => {
  let filterStates = [];
  (columns || []).forEach((column, index) => {
    var _a;
    const columnPos = getColumnPos(index, pos);
    if (column.filters || 'filterDropdown' in column || 'onFilter' in column) {
      if ('filteredValue' in column) {
        // Controlled
        let filteredValues = column.filteredValue;
        if (!('filterDropdown' in column)) {
          filteredValues = (_a = filteredValues === null || filteredValues === void 0 ? void 0 : filteredValues.map(String)) !== null && _a !== void 0 ? _a : filteredValues;
        }
        filterStates.push({
          column,
          key: getColumnKey(column, columnPos),
          filteredKeys: filteredValues,
          forceFiltered: column.filtered
        });
      } else {
        // Uncontrolled
        filterStates.push({
          column,
          key: getColumnKey(column, columnPos),
          filteredKeys: init && column.defaultFilteredValue ? column.defaultFilteredValue : undefined,
          forceFiltered: column.filtered
        });
      }
    }
    if ('children' in column) {
      filterStates = [].concat((0,toConsumableArray/* default */.Z)(filterStates), (0,toConsumableArray/* default */.Z)(collectFilterStates(column.children, init, columnPos)));
    }
  });
  return filterStates;
};
function injectFilter(prefixCls, dropdownPrefixCls, columns, filterStates, locale, triggerFilter, getPopupContainer, pos, rootClassName) {
  return columns.map((column, index) => {
    const columnPos = getColumnPos(index, pos);
    const {
      filterOnClose = true,
      filterMultiple = true,
      filterMode,
      filterSearch
    } = column;
    let newColumn = column;
    if (newColumn.filters || newColumn.filterDropdown) {
      const columnKey = getColumnKey(newColumn, columnPos);
      const filterState = filterStates.find(_ref => {
        let {
          key
        } = _ref;
        return columnKey === key;
      });
      newColumn = Object.assign(Object.assign({}, newColumn), {
        title: renderProps => (/*#__PURE__*/react.createElement(useFilter_FilterDropdown, {
          tablePrefixCls: prefixCls,
          prefixCls: `${prefixCls}-filter`,
          dropdownPrefixCls: dropdownPrefixCls,
          column: newColumn,
          columnKey: columnKey,
          filterState: filterState,
          filterOnClose: filterOnClose,
          filterMultiple: filterMultiple,
          filterMode: filterMode,
          filterSearch: filterSearch,
          triggerFilter: triggerFilter,
          locale: locale,
          getPopupContainer: getPopupContainer,
          rootClassName: rootClassName
        }, renderColumnTitle(column.title, renderProps)))
      });
    }
    if ('children' in newColumn) {
      newColumn = Object.assign(Object.assign({}, newColumn), {
        children: injectFilter(prefixCls, dropdownPrefixCls, newColumn.children, filterStates, locale, triggerFilter, getPopupContainer, columnPos, rootClassName)
      });
    }
    return newColumn;
  });
}
const generateFilterInfo = filterStates => {
  const currentFilters = {};
  filterStates.forEach(_ref2 => {
    let {
      key,
      filteredKeys,
      column
    } = _ref2;
    const keyAsString = key;
    const {
      filters,
      filterDropdown
    } = column;
    if (filterDropdown) {
      currentFilters[keyAsString] = filteredKeys || null;
    } else if (Array.isArray(filteredKeys)) {
      const keys = flattenKeys(filters);
      currentFilters[keyAsString] = keys.filter(originKey => filteredKeys.includes(String(originKey)));
    } else {
      currentFilters[keyAsString] = null;
    }
  });
  return currentFilters;
};
const getFilterData = (data, filterStates, childrenColumnName) => {
  const filterDatas = filterStates.reduce((currentData, filterState) => {
    const {
      column: {
        onFilter,
        filters
      },
      filteredKeys
    } = filterState;
    if (onFilter && filteredKeys && filteredKeys.length) {
      return currentData
      // shallow copy
      .map(record => Object.assign({}, record)).filter(record => filteredKeys.some(key => {
        const keys = flattenKeys(filters);
        const keyIndex = keys.findIndex(k => String(k) === String(key));
        const realKey = keyIndex !== -1 ? keys[keyIndex] : key;
        // filter children
        if (record[childrenColumnName]) {
          record[childrenColumnName] = getFilterData(record[childrenColumnName], filterStates, childrenColumnName);
        }
        return onFilter(realKey, record);
      }));
    }
    return currentData;
  }, data);
  return filterDatas;
};
const getMergedColumns = rawMergedColumns => rawMergedColumns.flatMap(column => {
  if ('children' in column) {
    return [column].concat((0,toConsumableArray/* default */.Z)(getMergedColumns(column.children || [])));
  }
  return [column];
});
const useFilter = props => {
  const {
    prefixCls,
    dropdownPrefixCls,
    mergedColumns: rawMergedColumns,
    onFilterChange,
    getPopupContainer,
    locale: tableLocale,
    rootClassName
  } = props;
  const warning = (0,_util_warning/* devUseWarning */.ln)('Table');
  const mergedColumns = react.useMemo(() => getMergedColumns(rawMergedColumns || []), [rawMergedColumns]);
  const [filterStates, setFilterStates] = react.useState(() => collectFilterStates(mergedColumns, true));
  const mergedFilterStates = react.useMemo(() => {
    const collectedStates = collectFilterStates(mergedColumns, false);
    if (collectedStates.length === 0) {
      return collectedStates;
    }
    let filteredKeysIsAllNotControlled = true;
    let filteredKeysIsAllControlled = true;
    collectedStates.forEach(_ref3 => {
      let {
        filteredKeys
      } = _ref3;
      if (filteredKeys !== undefined) {
        filteredKeysIsAllNotControlled = false;
      } else {
        filteredKeysIsAllControlled = false;
      }
    });
    // Return if not controlled
    if (filteredKeysIsAllNotControlled) {
      // Filter column may have been removed
      const keyList = (mergedColumns || []).map((column, index) => getColumnKey(column, getColumnPos(index)));
      return filterStates.filter(_ref4 => {
        let {
          key
        } = _ref4;
        return keyList.includes(key);
      }).map(item => {
        const col = mergedColumns[keyList.findIndex(key => key === item.key)];
        return Object.assign(Object.assign({}, item), {
          column: Object.assign(Object.assign({}, item.column), col),
          forceFiltered: col.filtered
        });
      });
    }
     false ? 0 : void 0;
    return collectedStates;
  }, [mergedColumns, filterStates]);
  const filters = react.useMemo(() => generateFilterInfo(mergedFilterStates), [mergedFilterStates]);
  const triggerFilter = filterState => {
    const newFilterStates = mergedFilterStates.filter(_ref5 => {
      let {
        key
      } = _ref5;
      return key !== filterState.key;
    });
    newFilterStates.push(filterState);
    setFilterStates(newFilterStates);
    onFilterChange(generateFilterInfo(newFilterStates), newFilterStates);
  };
  const transformColumns = innerColumns => injectFilter(prefixCls, dropdownPrefixCls, innerColumns, mergedFilterStates, tableLocale, triggerFilter, getPopupContainer, undefined, rootClassName);
  return [transformColumns, mergedFilterStates, filters];
};

/* harmony default export */ var hooks_useFilter = (useFilter);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useLazyKVMap.js

const useLazyKVMap = (data, childrenColumnName, getRowKey) => {
  const mapCacheRef = react.useRef({});
  function getRecordByKey(key) {
    var _a;
    if (!mapCacheRef.current || mapCacheRef.current.data !== data || mapCacheRef.current.childrenColumnName !== childrenColumnName || mapCacheRef.current.getRowKey !== getRowKey) {
      const kvMap = new Map();
      function dig(records) {
        records.forEach((record, index) => {
          const rowKey = getRowKey(record, index);
          kvMap.set(rowKey, record);
          if (record && typeof record === 'object' && childrenColumnName in record) {
            dig(record[childrenColumnName] || []);
          }
        });
      }
      dig(data);
      mapCacheRef.current = {
        data,
        childrenColumnName,
        kvMap,
        getRowKey
      };
    }
    return (_a = mapCacheRef.current.kvMap) === null || _a === void 0 ? void 0 : _a.get(key);
  }
  return [getRecordByKey];
};
/* harmony default export */ var hooks_useLazyKVMap = (useLazyKVMap);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/extendsObject.js
var extendsObject = __webpack_require__(69267);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/usePagination.js
var usePagination_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


const DEFAULT_PAGE_SIZE = 10;
function getPaginationParam(mergedPagination, pagination) {
  const param = {
    current: mergedPagination.current,
    pageSize: mergedPagination.pageSize
  };
  const paginationObj = pagination && typeof pagination === 'object' ? pagination : {};
  Object.keys(paginationObj).forEach(pageProp => {
    const value = mergedPagination[pageProp];
    if (typeof value !== 'function') {
      param[pageProp] = value;
    }
  });
  return param;
}
function usePagination(total, onChange, pagination) {
  const _a = pagination && typeof pagination === 'object' ? pagination : {},
    {
      total: paginationTotal = 0
    } = _a,
    paginationObj = usePagination_rest(_a, ["total"]);
  const [innerPagination, setInnerPagination] = (0,react.useState)(() => ({
    current: 'defaultCurrent' in paginationObj ? paginationObj.defaultCurrent : 1,
    pageSize: 'defaultPageSize' in paginationObj ? paginationObj.defaultPageSize : DEFAULT_PAGE_SIZE
  }));
  // ============ Basic Pagination Config ============
  const mergedPagination = (0,extendsObject/* default */.Z)(innerPagination, paginationObj, {
    total: paginationTotal > 0 ? paginationTotal : total
  });
  // Reset `current` if data length or pageSize changed
  const maxPage = Math.ceil((paginationTotal || total) / mergedPagination.pageSize);
  if (mergedPagination.current > maxPage) {
    // Prevent a maximum page count of 0
    mergedPagination.current = maxPage || 1;
  }
  const refreshPagination = (current, pageSize) => {
    setInnerPagination({
      current: current !== null && current !== void 0 ? current : 1,
      pageSize: pageSize || mergedPagination.pageSize
    });
  };
  const onInternalChange = (current, pageSize) => {
    var _a;
    if (pagination) {
      (_a = pagination.onChange) === null || _a === void 0 ? void 0 : _a.call(pagination, current, pageSize);
    }
    refreshPagination(current, pageSize);
    onChange(current, pageSize || (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize));
  };
  if (pagination === false) {
    return [{}, () => {}];
  }
  return [Object.assign(Object.assign({}, mergedPagination), {
    onChange: onInternalChange
  }), refreshPagination];
}
/* harmony default export */ var hooks_usePagination = (usePagination);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js + 1 modules
var CaretDownOutlined = __webpack_require__(96334);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CaretUpOutlined.js + 1 modules
var CaretUpOutlined = __webpack_require__(6157);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(35691);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useSorter.js
"use client";









const ASCEND = 'ascend';
const DESCEND = 'descend';
const getMultiplePriority = column => {
  if (typeof column.sorter === 'object' && typeof column.sorter.multiple === 'number') {
    return column.sorter.multiple;
  }
  return false;
};
const getSortFunction = sorter => {
  if (typeof sorter === 'function') {
    return sorter;
  }
  if (sorter && typeof sorter === 'object' && sorter.compare) {
    return sorter.compare;
  }
  return false;
};
const nextSortDirection = (sortDirections, current) => {
  if (!current) {
    return sortDirections[0];
  }
  return sortDirections[sortDirections.indexOf(current) + 1];
};
const collectSortStates = (columns, init, pos) => {
  let sortStates = [];
  const pushState = (column, columnPos) => {
    sortStates.push({
      column,
      key: getColumnKey(column, columnPos),
      multiplePriority: getMultiplePriority(column),
      sortOrder: column.sortOrder
    });
  };
  (columns || []).forEach((column, index) => {
    const columnPos = getColumnPos(index, pos);
    if (column.children) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      }
      sortStates = [].concat((0,toConsumableArray/* default */.Z)(sortStates), (0,toConsumableArray/* default */.Z)(collectSortStates(column.children, init, columnPos)));
    } else if (column.sorter) {
      if ('sortOrder' in column) {
        // Controlled
        pushState(column, columnPos);
      } else if (init && column.defaultSortOrder) {
        // Default sorter
        sortStates.push({
          column,
          key: getColumnKey(column, columnPos),
          multiplePriority: getMultiplePriority(column),
          sortOrder: column.defaultSortOrder
        });
      }
    }
  });
  return sortStates;
};
const injectSorter = (prefixCls, columns, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, pos) => {
  const finalColumns = (columns || []).map((column, index) => {
    const columnPos = getColumnPos(index, pos);
    let newColumn = column;
    if (newColumn.sorter) {
      const sortDirections = newColumn.sortDirections || defaultSortDirections;
      const showSorterTooltip = newColumn.showSorterTooltip === undefined ? tableShowSorterTooltip : newColumn.showSorterTooltip;
      const columnKey = getColumnKey(newColumn, columnPos);
      const sorterState = sorterStates.find(_ref => {
        let {
          key
        } = _ref;
        return key === columnKey;
      });
      const sortOrder = sorterState ? sorterState.sortOrder : null;
      const nextSortOrder = nextSortDirection(sortDirections, sortOrder);
      let sorter;
      if (column.sortIcon) {
        sorter = column.sortIcon({
          sortOrder
        });
      } else {
        const upNode = sortDirections.includes(ASCEND) && (/*#__PURE__*/react.createElement(CaretUpOutlined/* default */.Z, {
          className: classnames_default()(`${prefixCls}-column-sorter-up`, {
            active: sortOrder === ASCEND
          })
        }));
        const downNode = sortDirections.includes(DESCEND) && (/*#__PURE__*/react.createElement(CaretDownOutlined/* default */.Z, {
          className: classnames_default()(`${prefixCls}-column-sorter-down`, {
            active: sortOrder === DESCEND
          })
        }));
        sorter = /*#__PURE__*/react.createElement("span", {
          className: classnames_default()(`${prefixCls}-column-sorter`, {
            [`${prefixCls}-column-sorter-full`]: !!(upNode && downNode)
          })
        }, /*#__PURE__*/react.createElement("span", {
          className: `${prefixCls}-column-sorter-inner`,
          "aria-hidden": "true"
        }, upNode, downNode));
      }
      const {
        cancelSort,
        triggerAsc,
        triggerDesc
      } = tableLocale || {};
      let sortTip = cancelSort;
      if (nextSortOrder === DESCEND) {
        sortTip = triggerDesc;
      } else if (nextSortOrder === ASCEND) {
        sortTip = triggerAsc;
      }
      const tooltipProps = typeof showSorterTooltip === 'object' ? Object.assign({
        title: sortTip
      }, showSorterTooltip) : {
        title: sortTip
      };
      newColumn = Object.assign(Object.assign({}, newColumn), {
        className: classnames_default()(newColumn.className, {
          [`${prefixCls}-column-sort`]: sortOrder
        }),
        title: renderProps => {
          const columnSortersClass = `${prefixCls}-column-sorters`;
          const renderColumnTitleWrapper = /*#__PURE__*/react.createElement("span", {
            className: `${prefixCls}-column-title`
          }, renderColumnTitle(column.title, renderProps));
          const renderSortTitle = /*#__PURE__*/react.createElement("div", {
            className: columnSortersClass
          }, renderColumnTitleWrapper, sorter);
          if (showSorterTooltip) {
            if (typeof showSorterTooltip !== 'boolean' && (showSorterTooltip === null || showSorterTooltip === void 0 ? void 0 : showSorterTooltip.target) === 'sorter-icon') {
              return /*#__PURE__*/react.createElement("div", {
                className: `${columnSortersClass} ${prefixCls}-column-sorters-tooltip-target-sorter`
              }, renderColumnTitleWrapper, /*#__PURE__*/react.createElement(tooltip/* default */.Z, Object.assign({}, tooltipProps), sorter));
            }
            return /*#__PURE__*/react.createElement(tooltip/* default */.Z, Object.assign({}, tooltipProps), renderSortTitle);
          }
          return renderSortTitle;
        },
        onHeaderCell: col => {
          var _a;
          const cell = ((_a = column.onHeaderCell) === null || _a === void 0 ? void 0 : _a.call(column, col)) || {};
          const originOnClick = cell.onClick;
          const originOKeyDown = cell.onKeyDown;
          cell.onClick = event => {
            triggerSorter({
              column,
              key: columnKey,
              sortOrder: nextSortOrder,
              multiplePriority: getMultiplePriority(column)
            });
            originOnClick === null || originOnClick === void 0 ? void 0 : originOnClick(event);
          };
          cell.onKeyDown = event => {
            if (event.keyCode === KeyCode/* default */.Z.ENTER) {
              triggerSorter({
                column,
                key: columnKey,
                sortOrder: nextSortOrder,
                multiplePriority: getMultiplePriority(column)
              });
              originOKeyDown === null || originOKeyDown === void 0 ? void 0 : originOKeyDown(event);
            }
          };
          const renderTitle = safeColumnTitle(column.title, {});
          const displayTitle = renderTitle === null || renderTitle === void 0 ? void 0 : renderTitle.toString();
          // Inform the screen-reader so it can tell the visually impaired user which column is sorted
          if (sortOrder) {
            cell['aria-sort'] = sortOrder === 'ascend' ? 'ascending' : 'descending';
          } else {
            cell['aria-label'] = displayTitle || '';
          }
          cell.className = classnames_default()(cell.className, `${prefixCls}-column-has-sorters`);
          cell.tabIndex = 0;
          if (column.ellipsis) {
            cell.title = (renderTitle !== null && renderTitle !== void 0 ? renderTitle : '').toString();
          }
          return cell;
        }
      });
    }
    if ('children' in newColumn) {
      newColumn = Object.assign(Object.assign({}, newColumn), {
        children: injectSorter(prefixCls, newColumn.children, sorterStates, triggerSorter, defaultSortDirections, tableLocale, tableShowSorterTooltip, columnPos)
      });
    }
    return newColumn;
  });
  return finalColumns;
};
const stateToInfo = sorterState => {
  const {
    column,
    sortOrder
  } = sorterState;
  return {
    column,
    order: sortOrder,
    field: column.dataIndex,
    columnKey: column.key
  };
};
const generateSorterInfo = sorterStates => {
  const activeSorters = sorterStates.filter(_ref2 => {
    let {
      sortOrder
    } = _ref2;
    return sortOrder;
  }).map(stateToInfo);
  // =========== Legacy compatible support ===========
  // https://github.com/ant-design/ant-design/pull/19226
  if (activeSorters.length === 0 && sorterStates.length) {
    const lastIndex = sorterStates.length - 1;
    return Object.assign(Object.assign({}, stateToInfo(sorterStates[lastIndex])), {
      column: undefined,
      order: undefined,
      field: undefined,
      columnKey: undefined
    });
  }
  if (activeSorters.length <= 1) {
    return activeSorters[0] || {};
  }
  return activeSorters;
};
const getSortData = (data, sortStates, childrenColumnName) => {
  const innerSorterStates = sortStates.slice().sort((a, b) => b.multiplePriority - a.multiplePriority);
  const cloneData = data.slice();
  const runningSorters = innerSorterStates.filter(_ref3 => {
    let {
      column: {
        sorter
      },
      sortOrder
    } = _ref3;
    return getSortFunction(sorter) && sortOrder;
  });
  // Skip if no sorter needed
  if (!runningSorters.length) {
    return cloneData;
  }
  return cloneData.sort((record1, record2) => {
    for (let i = 0; i < runningSorters.length; i += 1) {
      const sorterState = runningSorters[i];
      const {
        column: {
          sorter
        },
        sortOrder
      } = sorterState;
      const compareFn = getSortFunction(sorter);
      if (compareFn && sortOrder) {
        const compareResult = compareFn(record1, record2, sortOrder);
        if (compareResult !== 0) {
          return sortOrder === ASCEND ? compareResult : -compareResult;
        }
      }
    }
    return 0;
  }).map(record => {
    const subRecords = record[childrenColumnName];
    if (subRecords) {
      return Object.assign(Object.assign({}, record), {
        [childrenColumnName]: getSortData(subRecords, sortStates, childrenColumnName)
      });
    }
    return record;
  });
};
const useFilterSorter = props => {
  const {
    prefixCls,
    mergedColumns,
    sortDirections,
    tableLocale,
    showSorterTooltip,
    onSorterChange
  } = props;
  const [sortStates, setSortStates] = react.useState(collectSortStates(mergedColumns, true));
  const getColumnKeys = (columns, pos) => {
    const newKeys = [];
    columns.forEach((item, index) => {
      const columnPos = getColumnPos(index, pos);
      newKeys.push(getColumnKey(item, columnPos));
      if (Array.isArray(item.children)) {
        const childKeys = getColumnKeys(item.children, columnPos);
        newKeys.push.apply(newKeys, (0,toConsumableArray/* default */.Z)(childKeys));
      }
    });
    return newKeys;
  };
  const mergedSorterStates = react.useMemo(() => {
    let validate = true;
    const collectedStates = collectSortStates(mergedColumns, false);
    // Return if not controlled
    if (!collectedStates.length) {
      const mergedColumnsKeys = getColumnKeys(mergedColumns);
      return sortStates.filter(_ref4 => {
        let {
          key
        } = _ref4;
        return mergedColumnsKeys.includes(key);
      });
    }
    const validateStates = [];
    function patchStates(state) {
      if (validate) {
        validateStates.push(state);
      } else {
        validateStates.push(Object.assign(Object.assign({}, state), {
          sortOrder: null
        }));
      }
    }
    let multipleMode = null;
    collectedStates.forEach(state => {
      if (multipleMode === null) {
        patchStates(state);
        if (state.sortOrder) {
          if (state.multiplePriority === false) {
            validate = false;
          } else {
            multipleMode = true;
          }
        }
      } else if (multipleMode && state.multiplePriority !== false) {
        patchStates(state);
      } else {
        validate = false;
        patchStates(state);
      }
    });
    return validateStates;
  }, [mergedColumns, sortStates]);
  // Get render columns title required props
  const columnTitleSorterProps = react.useMemo(() => {
    var _a, _b;
    const sortColumns = mergedSorterStates.map(_ref5 => {
      let {
        column,
        sortOrder
      } = _ref5;
      return {
        column,
        order: sortOrder
      };
    });
    return {
      sortColumns,
      // Legacy
      sortColumn: (_a = sortColumns[0]) === null || _a === void 0 ? void 0 : _a.column,
      sortOrder: (_b = sortColumns[0]) === null || _b === void 0 ? void 0 : _b.order
    };
  }, [mergedSorterStates]);
  const triggerSorter = sortState => {
    let newSorterStates;
    if (sortState.multiplePriority === false || !mergedSorterStates.length || mergedSorterStates[0].multiplePriority === false) {
      newSorterStates = [sortState];
    } else {
      newSorterStates = [].concat((0,toConsumableArray/* default */.Z)(mergedSorterStates.filter(_ref6 => {
        let {
          key
        } = _ref6;
        return key !== sortState.key;
      })), [sortState]);
    }
    setSortStates(newSorterStates);
    onSorterChange(generateSorterInfo(newSorterStates), newSorterStates);
  };
  const transformColumns = innerColumns => injectSorter(prefixCls, innerColumns, mergedSorterStates, triggerSorter, sortDirections, tableLocale, showSorterTooltip);
  const getSorters = () => generateSorterInfo(mergedSorterStates);
  return [transformColumns, mergedSorterStates, columnTitleSorterProps, getSorters];
};
/* harmony default export */ var useSorter = (useFilterSorter);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/hooks/useTitleColumns.js


const fillTitle = (columns, columnTitleProps) => {
  const finalColumns = columns.map(column => {
    const cloneColumn = Object.assign({}, column);
    cloneColumn.title = renderColumnTitle(column.title, columnTitleProps);
    if ('children' in cloneColumn) {
      cloneColumn.children = fillTitle(cloneColumn.children, columnTitleProps);
    }
    return cloneColumn;
  });
  return finalColumns;
};
const useTitleColumns = columnTitleProps => {
  const filledColumns = react.useCallback(columns => fillTitle(columns, columnTitleProps), [columnTitleProps]);
  return [filledColumns];
};
/* harmony default export */ var hooks_useTitleColumns = (useTitleColumns);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/RcTable/index.js
"use client";


/**
 * Same as `rc-table` but we modify trigger children update logic instead.
 */
const RcTable = (0,es.genTable)((prev, next) => {
  const {
    _renderTimes: prevRenderTimes
  } = prev;
  const {
    _renderTimes: nextRenderTimes
  } = next;
  return prevRenderTimes !== nextRenderTimes;
});
/* harmony default export */ var table_RcTable = (RcTable);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/RcTable/VirtualTable.js
"use client";


/**
 * Same as `rc-table` but we modify trigger children update logic instead.
 */
const RcVirtualTable = (0,es.genVirtualTable)((prev, next) => {
  const {
    _renderTimes: prevRenderTimes
  } = prev;
  const {
    _renderTimes: nextRenderTimes
  } = next;
  return prevRenderTimes !== nextRenderTimes;
});
/* harmony default export */ var VirtualTable = (RcVirtualTable);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var cssinjs_es = __webpack_require__(20693);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.1/node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(99978);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(13587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(61372);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(53557);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/bordered.js

const genBorderedStyle = token => {
  const {
    componentCls,
    lineWidth,
    lineType,
    tableBorderColor,
    tableHeaderBg,
    tablePaddingVertical,
    tablePaddingHorizontal,
    calc
  } = token;
  const tableBorder = `${(0,cssinjs_es.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
  const getSizeBorderStyle = (size, paddingVertical, paddingHorizontal) => ({
    [`&${componentCls}-${size}`]: {
      [`> ${componentCls}-container`]: {
        [`> ${componentCls}-content, > ${componentCls}-body`]: {
          [`
            > table > tbody > tr > th,
            > table > tbody > tr > td
          `]: {
            [`> ${componentCls}-expanded-row-fixed`]: {
              margin: `${(0,cssinjs_es.unit)(calc(paddingVertical).mul(-1).equal())}
              ${(0,cssinjs_es.unit)(calc(calc(paddingHorizontal).add(lineWidth)).mul(-1).equal())}`
            }
          }
        }
      }
    }
  });
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}${componentCls}-bordered`]: Object.assign(Object.assign(Object.assign({
        // ============================ Title =============================
        [`> ${componentCls}-title`]: {
          border: tableBorder,
          borderBottom: 0
        },
        // ============================ Content ============================
        [`> ${componentCls}-container`]: {
          borderInlineStart: tableBorder,
          borderTop: tableBorder,
          [`
            > ${componentCls}-content,
            > ${componentCls}-header,
            > ${componentCls}-body,
            > ${componentCls}-summary
          `]: {
            '> table': {
              // ============================= Cell =============================
              [`
                > thead > tr > th,
                > thead > tr > td,
                > tbody > tr > th,
                > tbody > tr > td,
                > tfoot > tr > th,
                > tfoot > tr > td
              `]: {
                borderInlineEnd: tableBorder
              },
              // ============================ Header ============================
              '> thead': {
                '> tr:not(:last-child) > th': {
                  borderBottom: tableBorder
                },
                '> tr > th::before': {
                  backgroundColor: 'transparent !important'
                }
              },
              // Fixed right should provides additional border
              [`
                > thead > tr,
                > tbody > tr,
                > tfoot > tr
              `]: {
                [`> ${componentCls}-cell-fix-right-first::after`]: {
                  borderInlineEnd: tableBorder
                }
              },
              // ========================== Expandable ==========================
              [`
                > tbody > tr > th,
                > tbody > tr > td
              `]: {
                [`> ${componentCls}-expanded-row-fixed`]: {
                  margin: `${(0,cssinjs_es.unit)(calc(tablePaddingVertical).mul(-1).equal())} ${(0,cssinjs_es.unit)(calc(calc(tablePaddingHorizontal).add(lineWidth)).mul(-1).equal())}`,
                  '&::after': {
                    position: 'absolute',
                    top: 0,
                    insetInlineEnd: lineWidth,
                    bottom: 0,
                    borderInlineEnd: tableBorder,
                    content: '""'
                  }
                }
              }
            }
          }
        },
        // ============================ Scroll ============================
        [`&${componentCls}-scroll-horizontal`]: {
          [`> ${componentCls}-container > ${componentCls}-body`]: {
            '> table > tbody': {
              [`
                > tr${componentCls}-expanded-row,
                > tr${componentCls}-placeholder
              `]: {
                '> th, > td': {
                  borderInlineEnd: 0
                }
              }
            }
          }
        }
      }, getSizeBorderStyle('middle', token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle)), getSizeBorderStyle('small', token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall)), {
        // ============================ Footer ============================
        [`> ${componentCls}-footer`]: {
          border: tableBorder,
          borderTop: 0
        }
      }),
      // ============================ Nested ============================
      [`${componentCls}-cell`]: {
        [`${componentCls}-container:first-child`]: {
          // :first-child to avoid the case when bordered and title is set
          borderTop: 0
        },
        // https://github.com/ant-design/ant-design/issues/35577
        '&-scrollbar:not([rowspan])': {
          boxShadow: `0 ${(0,cssinjs_es.unit)(lineWidth)} 0 ${(0,cssinjs_es.unit)(lineWidth)} ${tableHeaderBg}`
        }
      },
      [`${componentCls}-bordered ${componentCls}-cell-scrollbar`]: {
        borderInlineEnd: tableBorder
      }
    }
  };
};
/* harmony default export */ var bordered = (genBorderedStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/ellipsis.js

const genEllipsisStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-cell-ellipsis`]: Object.assign(Object.assign({}, style/* textEllipsis */.vS), {
        wordBreak: 'keep-all',
        // Fixed first or last should special process
        [`
          &${componentCls}-cell-fix-left-last,
          &${componentCls}-cell-fix-right-first
        `]: {
          overflow: 'visible',
          [`${componentCls}-cell-content`]: {
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        },
        [`${componentCls}-column-title`]: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          wordBreak: 'keep-all'
        }
      })
    }
  };
};
/* harmony default export */ var ellipsis = (genEllipsisStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/empty.js
// ========================= Placeholder ==========================
const genEmptyStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-tbody > tr${componentCls}-placeholder`]: {
        textAlign: 'center',
        color: token.colorTextDisabled,
        [`
          &:hover > th,
          &:hover > td,
        `]: {
          background: token.colorBgContainer
        }
      }
    }
  };
};
/* harmony default export */ var empty = (genEmptyStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/expand.js


const genExpandStyle = token => {
  const {
    componentCls,
    antCls,
    motionDurationSlow,
    lineWidth,
    paddingXS,
    lineType,
    tableBorderColor,
    tableExpandIconBg,
    tableExpandColumnWidth,
    borderRadius,
    tablePaddingVertical,
    tablePaddingHorizontal,
    tableExpandedRowBg,
    paddingXXS,
    expandIconMarginTop,
    expandIconSize,
    expandIconHalfInner,
    expandIconScale,
    calc
  } = token;
  const tableBorder = `${(0,cssinjs_es.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
  const expandIconLineOffset = calc(paddingXXS).sub(lineWidth).equal();
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-expand-icon-col`]: {
        width: tableExpandColumnWidth
      },
      [`${componentCls}-row-expand-icon-cell`]: {
        textAlign: 'center',
        [`${componentCls}-row-expand-icon`]: {
          display: 'inline-flex',
          float: 'none',
          verticalAlign: 'sub'
        }
      },
      [`${componentCls}-row-indent`]: {
        height: 1,
        float: 'left'
      },
      [`${componentCls}-row-expand-icon`]: Object.assign(Object.assign({}, (0,style/* operationUnit */.Nd)(token)), {
        position: 'relative',
        float: 'left',
        width: expandIconSize,
        height: expandIconSize,
        color: 'inherit',
        lineHeight: (0,cssinjs_es.unit)(expandIconSize),
        background: tableExpandIconBg,
        border: tableBorder,
        borderRadius,
        transform: `scale(${expandIconScale})`,
        '&:focus, &:hover, &:active': {
          borderColor: 'currentcolor'
        },
        '&::before, &::after': {
          position: 'absolute',
          background: 'currentcolor',
          transition: `transform ${motionDurationSlow} ease-out`,
          content: '""'
        },
        '&::before': {
          top: expandIconHalfInner,
          insetInlineEnd: expandIconLineOffset,
          insetInlineStart: expandIconLineOffset,
          height: lineWidth
        },
        '&::after': {
          top: expandIconLineOffset,
          bottom: expandIconLineOffset,
          insetInlineStart: expandIconHalfInner,
          width: lineWidth,
          transform: 'rotate(90deg)'
        },
        // Motion effect
        '&-collapsed::before': {
          transform: 'rotate(-180deg)'
        },
        '&-collapsed::after': {
          transform: 'rotate(0deg)'
        },
        '&-spaced': {
          '&::before, &::after': {
            display: 'none',
            content: 'none'
          },
          background: 'transparent',
          border: 0,
          visibility: 'hidden'
        }
      }),
      [`${componentCls}-row-indent + ${componentCls}-row-expand-icon`]: {
        marginTop: expandIconMarginTop,
        marginInlineEnd: paddingXS
      },
      [`tr${componentCls}-expanded-row`]: {
        '&, &:hover': {
          '> th, > td': {
            background: tableExpandedRowBg
          }
        },
        // https://github.com/ant-design/ant-design/issues/25573
        [`${antCls}-descriptions-view`]: {
          display: 'flex',
          table: {
            flex: 'auto',
            width: '100%'
          }
        }
      },
      // With fixed
      [`${componentCls}-expanded-row-fixed`]: {
        position: 'relative',
        margin: `${(0,cssinjs_es.unit)(calc(tablePaddingVertical).mul(-1).equal())} ${(0,cssinjs_es.unit)(calc(tablePaddingHorizontal).mul(-1).equal())}`,
        padding: `${(0,cssinjs_es.unit)(tablePaddingVertical)} ${(0,cssinjs_es.unit)(tablePaddingHorizontal)}`
      }
    }
  };
};
/* harmony default export */ var expand = (genExpandStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/filter.js


const genFilterStyle = token => {
  const {
    componentCls,
    antCls,
    iconCls,
    tableFilterDropdownWidth,
    tableFilterDropdownSearchWidth,
    paddingXXS,
    paddingXS,
    colorText,
    lineWidth,
    lineType,
    tableBorderColor,
    headerIconColor,
    fontSizeSM,
    tablePaddingHorizontal,
    borderRadius,
    motionDurationSlow,
    colorTextDescription,
    colorPrimary,
    tableHeaderFilterActiveBg,
    colorTextDisabled,
    tableFilterDropdownBg,
    tableFilterDropdownHeight,
    controlItemBgHover,
    controlItemBgActive,
    boxShadowSecondary,
    filterDropdownMenuBg,
    calc
  } = token;
  const dropdownPrefixCls = `${antCls}-dropdown`;
  const tableFilterDropdownPrefixCls = `${componentCls}-filter-dropdown`;
  const treePrefixCls = `${antCls}-tree`;
  const tableBorder = `${(0,cssinjs_es.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
  return [{
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-filter-column`]: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      [`${componentCls}-filter-trigger`]: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginBlock: calc(paddingXXS).mul(-1).equal(),
        marginInline: `${(0,cssinjs_es.unit)(paddingXXS)} ${(0,cssinjs_es.unit)(calc(tablePaddingHorizontal).div(2).mul(-1).equal())}`,
        padding: `0 ${(0,cssinjs_es.unit)(paddingXXS)}`,
        color: headerIconColor,
        fontSize: fontSizeSM,
        borderRadius,
        cursor: 'pointer',
        transition: `all ${motionDurationSlow}`,
        '&:hover': {
          color: colorTextDescription,
          background: tableHeaderFilterActiveBg
        },
        '&.active': {
          color: colorPrimary
        }
      }
    }
  }, {
    // Dropdown
    [`${antCls}-dropdown`]: {
      [tableFilterDropdownPrefixCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
        minWidth: tableFilterDropdownWidth,
        backgroundColor: tableFilterDropdownBg,
        borderRadius,
        boxShadow: boxShadowSecondary,
        overflow: 'hidden',
        // Reset menu
        [`${dropdownPrefixCls}-menu`]: {
          // https://github.com/ant-design/ant-design/issues/4916
          // https://github.com/ant-design/ant-design/issues/19542
          maxHeight: tableFilterDropdownHeight,
          overflowX: 'hidden',
          border: 0,
          boxShadow: 'none',
          borderRadius: 'unset',
          backgroundColor: filterDropdownMenuBg,
          '&:empty::after': {
            display: 'block',
            padding: `${(0,cssinjs_es.unit)(paddingXS)} 0`,
            color: colorTextDisabled,
            fontSize: fontSizeSM,
            textAlign: 'center',
            content: '"Not Found"'
          }
        },
        [`${tableFilterDropdownPrefixCls}-tree`]: {
          paddingBlock: `${(0,cssinjs_es.unit)(paddingXS)} 0`,
          paddingInline: paddingXS,
          [treePrefixCls]: {
            padding: 0
          },
          [`${treePrefixCls}-treenode ${treePrefixCls}-node-content-wrapper:hover`]: {
            backgroundColor: controlItemBgHover
          },
          [`${treePrefixCls}-treenode-checkbox-checked ${treePrefixCls}-node-content-wrapper`]: {
            '&, &:hover': {
              backgroundColor: controlItemBgActive
            }
          }
        },
        [`${tableFilterDropdownPrefixCls}-search`]: {
          padding: paddingXS,
          borderBottom: tableBorder,
          '&-input': {
            input: {
              minWidth: tableFilterDropdownSearchWidth
            },
            [iconCls]: {
              color: colorTextDisabled
            }
          }
        },
        [`${tableFilterDropdownPrefixCls}-checkall`]: {
          width: '100%',
          marginBottom: paddingXXS,
          marginInlineStart: paddingXXS
        },
        // Operation
        [`${tableFilterDropdownPrefixCls}-btns`]: {
          display: 'flex',
          justifyContent: 'space-between',
          padding: `${(0,cssinjs_es.unit)(calc(paddingXS).sub(lineWidth).equal())} ${(0,cssinjs_es.unit)(paddingXS)}`,
          overflow: 'hidden',
          borderTop: tableBorder
        }
      })
    }
  },
  // Dropdown Menu & SubMenu
  {
    // submenu of table filter dropdown
    [`${antCls}-dropdown ${tableFilterDropdownPrefixCls}, ${tableFilterDropdownPrefixCls}-submenu`]: {
      // Checkbox
      [`${antCls}-checkbox-wrapper + span`]: {
        paddingInlineStart: paddingXS,
        color: colorText
      },
      '> ul': {
        maxHeight: 'calc(100vh - 130px)',
        overflowX: 'hidden',
        overflowY: 'auto'
      }
    }
  }];
};
/* harmony default export */ var filter = (genFilterStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/fixed.js
const genFixedStyle = token => {
  const {
    componentCls,
    lineWidth,
    colorSplit,
    motionDurationSlow,
    zIndexTableFixed,
    tableBg,
    zIndexTableSticky,
    calc
  } = token;
  const shadowColor = colorSplit;
  // Follow style is magic of shadow which should not follow token:
  return {
    [`${componentCls}-wrapper`]: {
      [`
        ${componentCls}-cell-fix-left,
        ${componentCls}-cell-fix-right
      `]: {
        position: 'sticky !important',
        zIndex: zIndexTableFixed,
        background: tableBg
      },
      [`
        ${componentCls}-cell-fix-left-first::after,
        ${componentCls}-cell-fix-left-last::after
      `]: {
        position: 'absolute',
        top: 0,
        right: {
          _skip_check_: true,
          value: 0
        },
        bottom: calc(lineWidth).mul(-1).equal(),
        width: 30,
        transform: 'translateX(100%)',
        transition: `box-shadow ${motionDurationSlow}`,
        content: '""',
        pointerEvents: 'none'
      },
      [`${componentCls}-cell-fix-left-all::after`]: {
        display: 'none'
      },
      [`
        ${componentCls}-cell-fix-right-first::after,
        ${componentCls}-cell-fix-right-last::after
      `]: {
        position: 'absolute',
        top: 0,
        bottom: calc(lineWidth).mul(-1).equal(),
        left: {
          _skip_check_: true,
          value: 0
        },
        width: 30,
        transform: 'translateX(-100%)',
        transition: `box-shadow ${motionDurationSlow}`,
        content: '""',
        pointerEvents: 'none'
      },
      [`${componentCls}-container`]: {
        position: 'relative',
        '&::before, &::after': {
          position: 'absolute',
          top: 0,
          bottom: 0,
          zIndex: calc(zIndexTableSticky).add(1).equal({
            unit: false
          }),
          width: 30,
          transition: `box-shadow ${motionDurationSlow}`,
          content: '""',
          pointerEvents: 'none'
        },
        '&::before': {
          insetInlineStart: 0
        },
        '&::after': {
          insetInlineEnd: 0
        }
      },
      [`${componentCls}-ping-left`]: {
        [`&:not(${componentCls}-has-fix-left) ${componentCls}-container::before`]: {
          boxShadow: `inset 10px 0 8px -8px ${shadowColor}`
        },
        [`
          ${componentCls}-cell-fix-left-first::after,
          ${componentCls}-cell-fix-left-last::after
        `]: {
          boxShadow: `inset 10px 0 8px -8px ${shadowColor}`
        },
        [`${componentCls}-cell-fix-left-last::before`]: {
          backgroundColor: 'transparent !important'
        }
      },
      [`${componentCls}-ping-right`]: {
        [`&:not(${componentCls}-has-fix-right) ${componentCls}-container::after`]: {
          boxShadow: `inset -10px 0 8px -8px ${shadowColor}`
        },
        [`
          ${componentCls}-cell-fix-right-first::after,
          ${componentCls}-cell-fix-right-last::after
        `]: {
          boxShadow: `inset -10px 0 8px -8px ${shadowColor}`
        }
      },
      // Gapped fixed Columns do not show the shadow
      [`${componentCls}-fixed-column-gapped`]: {
        [`
        ${componentCls}-cell-fix-left-first::after,
        ${componentCls}-cell-fix-left-last::after,
        ${componentCls}-cell-fix-right-first::after,
        ${componentCls}-cell-fix-right-last::after
      `]: {
          boxShadow: 'none'
        }
      }
    }
  };
};
/* harmony default export */ var fixed = (genFixedStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/pagination.js

const genPaginationStyle = token => {
  const {
    componentCls,
    antCls,
    margin
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Pagination ==========================
      [`${componentCls}-pagination${antCls}-pagination`]: {
        margin: `${(0,cssinjs_es.unit)(margin)} 0`
      },
      [`${componentCls}-pagination`]: {
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: token.paddingXS,
        '> *': {
          flex: 'none'
        },
        '&-left': {
          justifyContent: 'flex-start'
        },
        '&-center': {
          justifyContent: 'center'
        },
        '&-right': {
          justifyContent: 'flex-end'
        }
      }
    }
  };
};
/* harmony default export */ var pagination = (genPaginationStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/radius.js

const genRadiusStyle = token => {
  const {
    componentCls,
    tableRadius
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [componentCls]: {
        // https://github.com/ant-design/ant-design/issues/39115#issuecomment-1362314574
        [`${componentCls}-title, ${componentCls}-header`]: {
          borderRadius: `${(0,cssinjs_es.unit)(tableRadius)} ${(0,cssinjs_es.unit)(tableRadius)} 0 0`
        },
        [`${componentCls}-title + ${componentCls}-container`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0,
          // https://github.com/ant-design/ant-design/issues/41975
          [`${componentCls}-header, table`]: {
            borderRadius: 0
          },
          'table > thead > tr:first-child': {
            'th:first-child, th:last-child, td:first-child, td:last-child': {
              borderRadius: 0
            }
          }
        },
        '&-container': {
          borderStartStartRadius: tableRadius,
          borderStartEndRadius: tableRadius,
          'table > thead > tr:first-child': {
            '> *:first-child': {
              borderStartStartRadius: tableRadius
            },
            '> *:last-child': {
              borderStartEndRadius: tableRadius
            }
          }
        },
        '&-footer': {
          borderRadius: `0 0 ${(0,cssinjs_es.unit)(tableRadius)} ${(0,cssinjs_es.unit)(tableRadius)}`
        }
      }
    }
  };
};
/* harmony default export */ var radius = (genRadiusStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/rtl.js
const genStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-wrapper-rtl`]: {
      direction: 'rtl',
      table: {
        direction: 'rtl'
      },
      [`${componentCls}-pagination-left`]: {
        justifyContent: 'flex-end'
      },
      [`${componentCls}-pagination-right`]: {
        justifyContent: 'flex-start'
      },
      [`${componentCls}-row-expand-icon`]: {
        float: 'right',
        '&::after': {
          transform: 'rotate(-90deg)'
        },
        '&-collapsed::before': {
          transform: 'rotate(180deg)'
        },
        '&-collapsed::after': {
          transform: 'rotate(0deg)'
        }
      },
      [`${componentCls}-container`]: {
        '&::before': {
          insetInlineStart: 'unset',
          insetInlineEnd: 0
        },
        '&::after': {
          insetInlineStart: 0,
          insetInlineEnd: 'unset'
        },
        [`${componentCls}-row-indent`]: {
          float: 'right'
        }
      }
    }
  };
};
/* harmony default export */ var rtl = (genStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/selection.js

const genSelectionStyle = token => {
  const {
    componentCls,
    antCls,
    iconCls,
    fontSizeIcon,
    padding,
    paddingXS,
    headerIconColor,
    headerIconHoverColor,
    tableSelectionColumnWidth,
    tableSelectedRowBg,
    tableSelectedRowHoverBg,
    tableRowHoverBg,
    tablePaddingHorizontal,
    calc
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Selections ==========================
      [`${componentCls}-selection-col`]: {
        width: tableSelectionColumnWidth,
        [`&${componentCls}-selection-col-with-dropdown`]: {
          width: calc(tableSelectionColumnWidth).add(fontSizeIcon).add(calc(padding).div(4)).equal()
        }
      },
      [`${componentCls}-bordered ${componentCls}-selection-col`]: {
        width: calc(tableSelectionColumnWidth).add(calc(paddingXS).mul(2)).equal(),
        [`&${componentCls}-selection-col-with-dropdown`]: {
          width: calc(tableSelectionColumnWidth).add(fontSizeIcon).add(calc(padding).div(4)).add(calc(paddingXS).mul(2)).equal()
        }
      },
      [`
        table tr th${componentCls}-selection-column,
        table tr td${componentCls}-selection-column,
        ${componentCls}-selection-column
      `]: {
        paddingInlineEnd: token.paddingXS,
        paddingInlineStart: token.paddingXS,
        textAlign: 'center',
        [`${antCls}-radio-wrapper`]: {
          marginInlineEnd: 0
        }
      },
      [`table tr th${componentCls}-selection-column${componentCls}-cell-fix-left`]: {
        zIndex: calc(token.zIndexTableFixed).add(1).equal({
          unit: false
        })
      },
      [`table tr th${componentCls}-selection-column::after`]: {
        backgroundColor: 'transparent !important'
      },
      [`${componentCls}-selection`]: {
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column'
      },
      [`${componentCls}-selection-extra`]: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        cursor: 'pointer',
        transition: `all ${token.motionDurationSlow}`,
        marginInlineStart: '100%',
        paddingInlineStart: (0,cssinjs_es.unit)(calc(tablePaddingHorizontal).div(4).equal()),
        [iconCls]: {
          color: headerIconColor,
          fontSize: fontSizeIcon,
          verticalAlign: 'baseline',
          '&:hover': {
            color: headerIconHoverColor
          }
        }
      },
      // ============================= Rows =============================
      [`${componentCls}-tbody`]: {
        [`${componentCls}-row`]: {
          [`&${componentCls}-row-selected`]: {
            [`> ${componentCls}-cell`]: {
              background: tableSelectedRowBg,
              '&-row-hover': {
                background: tableSelectedRowHoverBg
              }
            }
          },
          [`> ${componentCls}-cell-row-hover`]: {
            background: tableRowHoverBg
          }
        }
      }
    }
  };
};
/* harmony default export */ var selection = (genSelectionStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/size.js

const genSizeStyle = token => {
  const {
    componentCls,
    tableExpandColumnWidth,
    calc
  } = token;
  const getSizeStyle = (size, paddingVertical, paddingHorizontal, fontSize) => ({
    [`${componentCls}${componentCls}-${size}`]: {
      fontSize,
      [`
        ${componentCls}-title,
        ${componentCls}-footer,
        ${componentCls}-cell,
        ${componentCls}-thead > tr > th,
        ${componentCls}-tbody > tr > th,
        ${componentCls}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
        padding: `${(0,cssinjs_es.unit)(paddingVertical)} ${(0,cssinjs_es.unit)(paddingHorizontal)}`
      },
      [`${componentCls}-filter-trigger`]: {
        marginInlineEnd: (0,cssinjs_es.unit)(calc(paddingHorizontal).div(2).mul(-1).equal())
      },
      [`${componentCls}-expanded-row-fixed`]: {
        margin: `${(0,cssinjs_es.unit)(calc(paddingVertical).mul(-1).equal())} ${(0,cssinjs_es.unit)(calc(paddingHorizontal).mul(-1).equal())}`
      },
      [`${componentCls}-tbody`]: {
        // ========================= Nest Table ===========================
        [`${componentCls}-wrapper:only-child ${componentCls}`]: {
          marginBlock: (0,cssinjs_es.unit)(calc(paddingVertical).mul(-1).equal()),
          marginInline: `${(0,cssinjs_es.unit)(calc(tableExpandColumnWidth).sub(paddingHorizontal).equal())} ${(0,cssinjs_es.unit)(calc(paddingHorizontal).mul(-1).equal())}`
        }
      },
      // https://github.com/ant-design/ant-design/issues/35167
      [`${componentCls}-selection-extra`]: {
        paddingInlineStart: (0,cssinjs_es.unit)(calc(paddingHorizontal).div(4).equal())
      }
    }
  });
  return {
    [`${componentCls}-wrapper`]: Object.assign(Object.assign({}, getSizeStyle('middle', token.tablePaddingVerticalMiddle, token.tablePaddingHorizontalMiddle, token.tableFontSizeMiddle)), getSizeStyle('small', token.tablePaddingVerticalSmall, token.tablePaddingHorizontalSmall, token.tableFontSizeSmall))
  };
};
/* harmony default export */ var size = (genSizeStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/sorter.js
const genSorterStyle = token => {
  const {
    componentCls,
    marginXXS,
    fontSizeIcon,
    headerIconColor,
    headerIconHoverColor
  } = token;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-thead th${componentCls}-column-has-sorters`]: {
        outline: 'none',
        cursor: 'pointer',
        // why left 0s? Avoid column header move with transition when left is changed
        // https://github.com/ant-design/ant-design/issues/50588
        transition: `all ${token.motionDurationSlow}, left 0s`,
        '&:hover': {
          background: token.tableHeaderSortHoverBg,
          '&::before': {
            backgroundColor: 'transparent !important'
          }
        },
        '&:focus-visible': {
          color: token.colorPrimary
        },
        // https://github.com/ant-design/ant-design/issues/30969
        [`
          &${componentCls}-cell-fix-left:hover,
          &${componentCls}-cell-fix-right:hover
        `]: {
          background: token.tableFixedHeaderSortActiveBg
        }
      },
      [`${componentCls}-thead th${componentCls}-column-sort`]: {
        background: token.tableHeaderSortBg,
        '&::before': {
          backgroundColor: 'transparent !important'
        }
      },
      [`td${componentCls}-column-sort`]: {
        background: token.tableBodySortBg
      },
      [`${componentCls}-column-title`]: {
        position: 'relative',
        zIndex: 1,
        flex: 1
      },
      [`${componentCls}-column-sorters`]: {
        display: 'flex',
        flex: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&::after': {
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          content: '""'
        }
      },
      [`${componentCls}-column-sorters-tooltip-target-sorter`]: {
        '&::after': {
          content: 'none'
        }
      },
      [`${componentCls}-column-sorter`]: {
        marginInlineStart: marginXXS,
        color: headerIconColor,
        fontSize: 0,
        transition: `color ${token.motionDurationSlow}`,
        '&-inner': {
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center'
        },
        '&-up, &-down': {
          fontSize: fontSizeIcon,
          '&.active': {
            color: token.colorPrimary
          }
        },
        [`${componentCls}-column-sorter-up + ${componentCls}-column-sorter-down`]: {
          marginTop: '-0.3em'
        }
      },
      [`${componentCls}-column-sorters:hover ${componentCls}-column-sorter`]: {
        color: headerIconHoverColor
      }
    }
  };
};
/* harmony default export */ var sorter = (genSorterStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/sticky.js

const genStickyStyle = token => {
  const {
    componentCls,
    opacityLoading,
    tableScrollThumbBg,
    tableScrollThumbBgHover,
    tableScrollThumbSize,
    tableScrollBg,
    zIndexTableSticky,
    stickyScrollBarBorderRadius,
    lineWidth,
    lineType,
    tableBorderColor
  } = token;
  const tableBorder = `${(0,cssinjs_es.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-sticky`]: {
        '&-holder': {
          position: 'sticky',
          zIndex: zIndexTableSticky,
          background: token.colorBgContainer
        },
        '&-scroll': {
          position: 'sticky',
          bottom: 0,
          height: `${(0,cssinjs_es.unit)(tableScrollThumbSize)} !important`,
          zIndex: zIndexTableSticky,
          display: 'flex',
          alignItems: 'center',
          background: tableScrollBg,
          borderTop: tableBorder,
          opacity: opacityLoading,
          '&:hover': {
            transformOrigin: 'center bottom'
          },
          // fake scrollbar style of sticky
          '&-bar': {
            height: tableScrollThumbSize,
            backgroundColor: tableScrollThumbBg,
            borderRadius: stickyScrollBarBorderRadius,
            transition: `all ${token.motionDurationSlow}, transform none`,
            position: 'absolute',
            bottom: 0,
            '&:hover, &-active': {
              backgroundColor: tableScrollThumbBgHover
            }
          }
        }
      }
    }
  };
};
/* harmony default export */ var sticky = (genStickyStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/summary.js

const genSummaryStyle = token => {
  const {
    componentCls,
    lineWidth,
    tableBorderColor,
    calc
  } = token;
  const tableBorder = `${(0,cssinjs_es.unit)(lineWidth)} ${token.lineType} ${tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}-summary`]: {
        position: 'relative',
        zIndex: token.zIndexTableFixed,
        background: token.tableBg,
        '> tr': {
          '> th, > td': {
            borderBottom: tableBorder
          }
        }
      },
      [`div${componentCls}-summary`]: {
        boxShadow: `0 ${(0,cssinjs_es.unit)(calc(lineWidth).mul(-1).equal())} 0 ${tableBorderColor}`
      }
    }
  };
};
/* harmony default export */ var summary = (genSummaryStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/virtual.js

const genVirtualStyle = token => {
  const {
    componentCls,
    motionDurationMid,
    lineWidth,
    lineType,
    tableBorderColor,
    calc
  } = token;
  const tableBorder = `${(0,cssinjs_es.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
  const rowCellCls = `${componentCls}-expanded-row-cell`;
  return {
    [`${componentCls}-wrapper`]: {
      // ========================== Row ==========================
      [`${componentCls}-tbody-virtual`]: {
        [`${componentCls}-tbody-virtual-holder-inner`]: {
          [`
            & > ${componentCls}-row, 
            & > div:not(${componentCls}-row) > ${componentCls}-row
          `]: {
            display: 'flex',
            boxSizing: 'border-box',
            width: '100%'
          }
        },
        [`${componentCls}-cell`]: {
          borderBottom: tableBorder,
          transition: `background ${motionDurationMid}`
        },
        [`${componentCls}-expanded-row`]: {
          [`${rowCellCls}${rowCellCls}-fixed`]: {
            position: 'sticky',
            insetInlineStart: 0,
            overflow: 'hidden',
            width: `calc(var(--virtual-width) - ${(0,cssinjs_es.unit)(lineWidth)})`,
            borderInlineEnd: 'none'
          }
        }
      },
      // ======================== Border =========================
      [`${componentCls}-bordered`]: {
        [`${componentCls}-tbody-virtual`]: {
          '&:after': {
            content: '""',
            insetInline: 0,
            bottom: 0,
            borderBottom: tableBorder,
            position: 'absolute'
          },
          [`${componentCls}-cell`]: {
            borderInlineEnd: tableBorder,
            [`&${componentCls}-cell-fix-right-first:before`]: {
              content: '""',
              position: 'absolute',
              insetBlock: 0,
              insetInlineStart: calc(lineWidth).mul(-1).equal(),
              borderInlineStart: tableBorder
            }
          }
        },
        // Empty placeholder
        [`&${componentCls}-virtual`]: {
          [`${componentCls}-placeholder ${componentCls}-cell`]: {
            borderInlineEnd: tableBorder,
            borderBottom: tableBorder
          }
        }
      }
    }
  };
};
/* harmony default export */ var virtual = (genVirtualStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/style/index.js



















const genTableStyle = token => {
  const {
    componentCls,
    fontWeightStrong,
    tablePaddingVertical,
    tablePaddingHorizontal,
    tableExpandColumnWidth,
    lineWidth,
    lineType,
    tableBorderColor,
    tableFontSize,
    tableBg,
    tableRadius,
    tableHeaderTextColor,
    motionDurationMid,
    tableHeaderBg,
    tableHeaderCellSplitColor,
    tableFooterTextColor,
    tableFooterBg,
    calc
  } = token;
  const tableBorder = `${(0,cssinjs_es.unit)(lineWidth)} ${lineType} ${tableBorderColor}`;
  return {
    [`${componentCls}-wrapper`]: Object.assign(Object.assign({
      clear: 'both',
      maxWidth: '100%'
    }, (0,style/* clearFix */.dF)()), {
      [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
        fontSize: tableFontSize,
        background: tableBg,
        borderRadius: `${(0,cssinjs_es.unit)(tableRadius)} ${(0,cssinjs_es.unit)(tableRadius)} 0 0`,
        // https://github.com/ant-design/ant-design/issues/47486
        scrollbarColor: `${token.tableScrollThumbBg} ${token.tableScrollBg}`
      }),
      // https://github.com/ant-design/ant-design/issues/17611
      table: {
        width: '100%',
        textAlign: 'start',
        borderRadius: `${(0,cssinjs_es.unit)(tableRadius)} ${(0,cssinjs_es.unit)(tableRadius)} 0 0`,
        borderCollapse: 'separate',
        borderSpacing: 0
      },
      // ============================= Cell ==============================
      [`
          ${componentCls}-cell,
          ${componentCls}-thead > tr > th,
          ${componentCls}-tbody > tr > th,
          ${componentCls}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
        position: 'relative',
        padding: `${(0,cssinjs_es.unit)(tablePaddingVertical)} ${(0,cssinjs_es.unit)(tablePaddingHorizontal)}`,
        overflowWrap: 'break-word'
      },
      // ============================ Title =============================
      [`${componentCls}-title`]: {
        padding: `${(0,cssinjs_es.unit)(tablePaddingVertical)} ${(0,cssinjs_es.unit)(tablePaddingHorizontal)}`
      },
      // ============================ Header ============================
      [`${componentCls}-thead`]: {
        [`
          > tr > th,
          > tr > td
        `]: {
          position: 'relative',
          color: tableHeaderTextColor,
          fontWeight: fontWeightStrong,
          textAlign: 'start',
          background: tableHeaderBg,
          borderBottom: tableBorder,
          transition: `background ${motionDurationMid} ease`,
          "&[colspan]:not([colspan='1'])": {
            textAlign: 'center'
          },
          [`&:not(:last-child):not(${componentCls}-selection-column):not(${componentCls}-row-expand-icon-cell):not([colspan])::before`]: {
            position: 'absolute',
            top: '50%',
            insetInlineEnd: 0,
            width: 1,
            height: '1.6em',
            backgroundColor: tableHeaderCellSplitColor,
            transform: 'translateY(-50%)',
            transition: `background-color ${motionDurationMid}`,
            content: '""'
          }
        },
        '> tr:not(:last-child) > th[colspan]': {
          borderBottom: 0
        }
      },
      // ============================ Body ============================
      [`${componentCls}-tbody`]: {
        '> tr': {
          '> th, > td': {
            transition: `background ${motionDurationMid}, border-color ${motionDurationMid}`,
            borderBottom: tableBorder,
            // ========================= Nest Table ===========================
            [`
              > ${componentCls}-wrapper:only-child,
              > ${componentCls}-expanded-row-fixed > ${componentCls}-wrapper:only-child
            `]: {
              [componentCls]: {
                marginBlock: (0,cssinjs_es.unit)(calc(tablePaddingVertical).mul(-1).equal()),
                marginInline: `${(0,cssinjs_es.unit)(calc(tableExpandColumnWidth).sub(tablePaddingHorizontal).equal())}
                ${(0,cssinjs_es.unit)(calc(tablePaddingHorizontal).mul(-1).equal())}`,
                [`${componentCls}-tbody > tr:last-child > td`]: {
                  borderBottom: 0,
                  '&:first-child, &:last-child': {
                    borderRadius: 0
                  }
                }
              }
            }
          },
          '> th': {
            position: 'relative',
            color: tableHeaderTextColor,
            fontWeight: fontWeightStrong,
            textAlign: 'start',
            background: tableHeaderBg,
            borderBottom: tableBorder,
            transition: `background ${motionDurationMid} ease`
          }
        }
      },
      // ============================ Footer ============================
      [`${componentCls}-footer`]: {
        padding: `${(0,cssinjs_es.unit)(tablePaddingVertical)} ${(0,cssinjs_es.unit)(tablePaddingHorizontal)}`,
        color: tableFooterTextColor,
        background: tableFooterBg
      }
    })
  };
};
const prepareComponentToken = token => {
  const {
    colorFillAlter,
    colorBgContainer,
    colorTextHeading,
    colorFillSecondary,
    colorFillContent,
    controlItemBgActive,
    controlItemBgActiveHover,
    padding,
    paddingSM,
    paddingXS,
    colorBorderSecondary,
    borderRadiusLG,
    controlHeight,
    colorTextPlaceholder,
    fontSize,
    fontSizeSM,
    lineHeight,
    lineWidth,
    colorIcon,
    colorIconHover,
    opacityLoading,
    controlInteractiveSize
  } = token;
  const colorFillSecondarySolid = new dist_module/* TinyColor */.C(colorFillSecondary).onBackground(colorBgContainer).toHexShortString();
  const colorFillContentSolid = new dist_module/* TinyColor */.C(colorFillContent).onBackground(colorBgContainer).toHexShortString();
  const colorFillAlterSolid = new dist_module/* TinyColor */.C(colorFillAlter).onBackground(colorBgContainer).toHexShortString();
  const baseColorAction = new dist_module/* TinyColor */.C(colorIcon);
  const baseColorActionHover = new dist_module/* TinyColor */.C(colorIconHover);
  const expandIconHalfInner = controlInteractiveSize / 2 - lineWidth;
  const expandIconSize = expandIconHalfInner * 2 + lineWidth * 3;
  return {
    headerBg: colorFillAlterSolid,
    headerColor: colorTextHeading,
    headerSortActiveBg: colorFillSecondarySolid,
    headerSortHoverBg: colorFillContentSolid,
    bodySortBg: colorFillAlterSolid,
    rowHoverBg: colorFillAlterSolid,
    rowSelectedBg: controlItemBgActive,
    rowSelectedHoverBg: controlItemBgActiveHover,
    rowExpandedBg: colorFillAlter,
    cellPaddingBlock: padding,
    cellPaddingInline: padding,
    cellPaddingBlockMD: paddingSM,
    cellPaddingInlineMD: paddingXS,
    cellPaddingBlockSM: paddingXS,
    cellPaddingInlineSM: paddingXS,
    borderColor: colorBorderSecondary,
    headerBorderRadius: borderRadiusLG,
    footerBg: colorFillAlterSolid,
    footerColor: colorTextHeading,
    cellFontSize: fontSize,
    cellFontSizeMD: fontSize,
    cellFontSizeSM: fontSize,
    headerSplitColor: colorBorderSecondary,
    fixedHeaderSortActiveBg: colorFillSecondarySolid,
    headerFilterHoverBg: colorFillContent,
    filterDropdownMenuBg: colorBgContainer,
    filterDropdownBg: colorBgContainer,
    expandIconBg: colorBgContainer,
    selectionColumnWidth: controlHeight,
    stickyScrollBarBg: colorTextPlaceholder,
    stickyScrollBarBorderRadius: 100,
    expandIconMarginTop: (fontSize * lineHeight - lineWidth * 3) / 2 - Math.ceil((fontSizeSM * 1.4 - lineWidth * 3) / 2),
    headerIconColor: baseColorAction.clone().setAlpha(baseColorAction.getAlpha() * opacityLoading).toRgbString(),
    headerIconHoverColor: baseColorActionHover.clone().setAlpha(baseColorActionHover.getAlpha() * opacityLoading).toRgbString(),
    expandIconHalfInner,
    expandIconSize,
    expandIconScale: controlInteractiveSize / expandIconSize
  };
};
const zIndexTableFixed = 2;
// ============================== Export ==============================
/* harmony default export */ var table_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Table', token => {
  const {
    colorTextHeading,
    colorSplit,
    colorBgContainer,
    controlInteractiveSize: checkboxSize,
    headerBg,
    headerColor,
    headerSortActiveBg,
    headerSortHoverBg,
    bodySortBg,
    rowHoverBg,
    rowSelectedBg,
    rowSelectedHoverBg,
    rowExpandedBg,
    cellPaddingBlock,
    cellPaddingInline,
    cellPaddingBlockMD,
    cellPaddingInlineMD,
    cellPaddingBlockSM,
    cellPaddingInlineSM,
    borderColor,
    footerBg,
    footerColor,
    headerBorderRadius,
    cellFontSize,
    cellFontSizeMD,
    cellFontSizeSM,
    headerSplitColor,
    fixedHeaderSortActiveBg,
    headerFilterHoverBg,
    filterDropdownBg,
    expandIconBg,
    selectionColumnWidth,
    stickyScrollBarBg,
    calc
  } = token;
  const tableToken = (0,cssinjs_utils_es.mergeToken)(token, {
    tableFontSize: cellFontSize,
    tableBg: colorBgContainer,
    tableRadius: headerBorderRadius,
    tablePaddingVertical: cellPaddingBlock,
    tablePaddingHorizontal: cellPaddingInline,
    tablePaddingVerticalMiddle: cellPaddingBlockMD,
    tablePaddingHorizontalMiddle: cellPaddingInlineMD,
    tablePaddingVerticalSmall: cellPaddingBlockSM,
    tablePaddingHorizontalSmall: cellPaddingInlineSM,
    tableBorderColor: borderColor,
    tableHeaderTextColor: headerColor,
    tableHeaderBg: headerBg,
    tableFooterTextColor: footerColor,
    tableFooterBg: footerBg,
    tableHeaderCellSplitColor: headerSplitColor,
    tableHeaderSortBg: headerSortActiveBg,
    tableHeaderSortHoverBg: headerSortHoverBg,
    tableBodySortBg: bodySortBg,
    tableFixedHeaderSortActiveBg: fixedHeaderSortActiveBg,
    tableHeaderFilterActiveBg: headerFilterHoverBg,
    tableFilterDropdownBg: filterDropdownBg,
    tableRowHoverBg: rowHoverBg,
    tableSelectedRowBg: rowSelectedBg,
    tableSelectedRowHoverBg: rowSelectedHoverBg,
    zIndexTableFixed,
    zIndexTableSticky: calc(zIndexTableFixed).add(1).equal({
      unit: false
    }),
    tableFontSizeMiddle: cellFontSizeMD,
    tableFontSizeSmall: cellFontSizeSM,
    tableSelectionColumnWidth: selectionColumnWidth,
    tableExpandIconBg: expandIconBg,
    tableExpandColumnWidth: calc(checkboxSize).add(calc(token.padding).mul(2)).equal(),
    tableExpandedRowBg: rowExpandedBg,
    // Dropdown
    tableFilterDropdownWidth: 120,
    tableFilterDropdownHeight: 264,
    tableFilterDropdownSearchWidth: 140,
    // Virtual Scroll Bar
    tableScrollThumbSize: 8,
    // Mac scroll bar size
    tableScrollThumbBg: stickyScrollBarBg,
    tableScrollThumbBgHover: colorTextHeading,
    tableScrollBg: colorSplit
  });
  return [genTableStyle(tableToken), pagination(tableToken), summary(tableToken), sorter(tableToken), filter(tableToken), bordered(tableToken), radius(tableToken), expand(tableToken), summary(tableToken), empty(tableToken), selection(tableToken), fixed(tableToken), sticky(tableToken), ellipsis(tableToken), size(tableToken), rtl(tableToken), virtual(tableToken)];
}, prepareComponentToken, {
  unitless: {
    expandIconScale: true
  }
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/InternalTable.js
"use client";





























const InternalTable_EMPTY_LIST = [];
const InternalTable = (props, ref) => {
  var _a, _b;
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    size: customizeSize,
    bordered,
    dropdownPrefixCls: customizeDropdownPrefixCls,
    dataSource,
    pagination,
    rowSelection,
    rowKey = 'key',
    rowClassName,
    columns,
    children,
    childrenColumnName: legacyChildrenColumnName,
    onChange,
    getPopupContainer,
    loading,
    expandIcon,
    expandable,
    expandedRowRender,
    expandIconColumnIndex,
    indentSize,
    scroll,
    sortDirections,
    locale,
    showSorterTooltip = {
      target: 'full-header'
    },
    virtual
  } = props;
  const warning = (0,_util_warning/* devUseWarning */.ln)('Table');
  if (false) {}
  const baseColumns = react.useMemo(() => columns || (0,useColumns/* convertChildrenToColumns */.L)(children), [columns, children]);
  const needResponsive = react.useMemo(() => baseColumns.some(col => col.responsive), [baseColumns]);
  const screens = (0,useBreakpoint/* default */.Z)(needResponsive);
  const mergedColumns = react.useMemo(() => {
    const matched = new Set(Object.keys(screens).filter(m => screens[m]));
    return baseColumns.filter(c => !c.responsive || c.responsive.some(r => matched.has(r)));
  }, [baseColumns, screens]);
  const tableProps = (0,omit/* default */.Z)(props, ['className', 'style', 'columns']);
  const {
    locale: contextLocale = en_US/* default */.Z,
    direction,
    table,
    renderEmpty,
    getPrefixCls,
    getPopupContainer: getContextPopupContainer
  } = react.useContext(context/* ConfigContext */.E_);
  const mergedSize = (0,useSize/* default */.Z)(customizeSize);
  const tableLocale = Object.assign(Object.assign({}, contextLocale.Table), locale);
  const rawData = dataSource || InternalTable_EMPTY_LIST;
  const prefixCls = getPrefixCls('table', customizePrefixCls);
  const dropdownPrefixCls = getPrefixCls('dropdown', customizeDropdownPrefixCls);
  const [, token] = (0,useToken/* default */.ZP)();
  const rootCls = (0,useCSSVarCls/* default */.Z)(prefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = table_style(prefixCls, rootCls);
  const mergedExpandable = Object.assign(Object.assign({
    childrenColumnName: legacyChildrenColumnName,
    expandIconColumnIndex
  }, expandable), {
    expandIcon: (_a = expandable === null || expandable === void 0 ? void 0 : expandable.expandIcon) !== null && _a !== void 0 ? _a : (_b = table === null || table === void 0 ? void 0 : table.expandable) === null || _b === void 0 ? void 0 : _b.expandIcon
  });
  const {
    childrenColumnName = 'children'
  } = mergedExpandable;
  const expandType = react.useMemo(() => {
    if (rawData.some(item => item === null || item === void 0 ? void 0 : item[childrenColumnName])) {
      return 'nest';
    }
    if (expandedRowRender || (expandable === null || expandable === void 0 ? void 0 : expandable.expandedRowRender)) {
      return 'row';
    }
    return null;
  }, [rawData]);
  const internalRefs = {
    body: react.useRef()
  };
  // ============================ Width =============================
  const getContainerWidth = useContainerWidth(prefixCls);
  // ============================= Refs =============================
  const rootRef = react.useRef(null);
  const tblRef = react.useRef(null);
  useProxyImperativeHandle(ref, () => Object.assign(Object.assign({}, tblRef.current), {
    nativeElement: rootRef.current
  }));
  // ============================ RowKey ============================
  const getRowKey = react.useMemo(() => {
    if (typeof rowKey === 'function') {
      return rowKey;
    }
    return record => record === null || record === void 0 ? void 0 : record[rowKey];
  }, [rowKey]);
  const [getRecordByKey] = hooks_useLazyKVMap(rawData, childrenColumnName, getRowKey);
  // ============================ Events =============================
  const changeEventInfo = {};
  const triggerOnChange = function (info, action) {
    let reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var _a, _b, _c, _d;
    const changeInfo = Object.assign(Object.assign({}, changeEventInfo), info);
    if (reset) {
      (_a = changeEventInfo.resetPagination) === null || _a === void 0 ? void 0 : _a.call(changeEventInfo);
      // Reset event param
      if ((_b = changeInfo.pagination) === null || _b === void 0 ? void 0 : _b.current) {
        changeInfo.pagination.current = 1;
      }
      // Trigger pagination events
      if (pagination) {
        (_c = pagination.onChange) === null || _c === void 0 ? void 0 : _c.call(pagination, 1, (_d = changeInfo.pagination) === null || _d === void 0 ? void 0 : _d.pageSize);
      }
    }
    if (scroll && scroll.scrollToFirstRowOnChange !== false && internalRefs.body.current) {
      (0,scrollTo/* default */.Z)(0, {
        getContainer: () => internalRefs.body.current
      });
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(changeInfo.pagination, changeInfo.filters, changeInfo.sorter, {
      currentDataSource: getFilterData(getSortData(rawData, changeInfo.sorterStates, childrenColumnName), changeInfo.filterStates, childrenColumnName),
      action
    });
  };
  /**
   * Controlled state in `columns` is not a good idea that makes too many code (1000+ line?) to read
   * state out and then put it back to title render. Move these code into `hooks` but still too
   * complex. We should provides Table props like `sorter` & `filter` to handle control in next big
   * version.
   */
  // ============================ Sorter =============================
  const onSorterChange = (sorter, sorterStates) => {
    triggerOnChange({
      sorter,
      sorterStates
    }, 'sort', false);
  };
  const [transformSorterColumns, sortStates, sorterTitleProps, getSorters] = useSorter({
    prefixCls,
    mergedColumns,
    onSorterChange,
    sortDirections: sortDirections || ['ascend', 'descend'],
    tableLocale,
    showSorterTooltip
  });
  const sortedData = react.useMemo(() => getSortData(rawData, sortStates, childrenColumnName), [rawData, sortStates]);
  changeEventInfo.sorter = getSorters();
  changeEventInfo.sorterStates = sortStates;
  // ============================ Filter ============================
  const onFilterChange = (filters, filterStates) => {
    triggerOnChange({
      filters,
      filterStates
    }, 'filter', true);
  };
  const [transformFilterColumns, filterStates, filters] = hooks_useFilter({
    prefixCls,
    locale: tableLocale,
    dropdownPrefixCls,
    mergedColumns,
    onFilterChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    rootClassName: classnames_default()(rootClassName, rootCls)
  });
  const mergedData = getFilterData(sortedData, filterStates, childrenColumnName);
  changeEventInfo.filters = filters;
  changeEventInfo.filterStates = filterStates;
  // ============================ Column ============================
  const columnTitleProps = react.useMemo(() => {
    const mergedFilters = {};
    Object.keys(filters).forEach(filterKey => {
      if (filters[filterKey] !== null) {
        mergedFilters[filterKey] = filters[filterKey];
      }
    });
    return Object.assign(Object.assign({}, sorterTitleProps), {
      filters: mergedFilters
    });
  }, [sorterTitleProps, filters]);
  const [transformTitleColumns] = hooks_useTitleColumns(columnTitleProps);
  // ========================== Pagination ==========================
  const onPaginationChange = (current, pageSize) => {
    triggerOnChange({
      pagination: Object.assign(Object.assign({}, changeEventInfo.pagination), {
        current,
        pageSize
      })
    }, 'paginate');
  };
  const [mergedPagination, resetPagination] = hooks_usePagination(mergedData.length, onPaginationChange, pagination);
  changeEventInfo.pagination = pagination === false ? {} : getPaginationParam(mergedPagination, pagination);
  changeEventInfo.resetPagination = resetPagination;
  // ============================= Data =============================
  const pageData = react.useMemo(() => {
    if (pagination === false || !mergedPagination.pageSize) {
      return mergedData;
    }
    const {
      current = 1,
      total,
      pageSize = DEFAULT_PAGE_SIZE
    } = mergedPagination;
     false ? 0 : void 0;
    // Dynamic table data
    if (mergedData.length < total) {
      if (mergedData.length > pageSize) {
         false ? 0 : void 0;
        return mergedData.slice((current - 1) * pageSize, current * pageSize);
      }
      return mergedData;
    }
    return mergedData.slice((current - 1) * pageSize, current * pageSize);
  }, [!!pagination, mergedData, mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.current, mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.pageSize, mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.total]);
  // ========================== Selections ==========================
  const [transformSelectionColumns, selectedKeySet] = hooks_useSelection({
    prefixCls,
    data: mergedData,
    pageData,
    getRowKey,
    getRecordByKey,
    expandType,
    childrenColumnName,
    locale: tableLocale,
    getPopupContainer: getPopupContainer || getContextPopupContainer
  }, rowSelection);
  const internalRowClassName = (record, index, indent) => {
    let mergedRowClassName;
    if (typeof rowClassName === 'function') {
      mergedRowClassName = classnames_default()(rowClassName(record, index, indent));
    } else {
      mergedRowClassName = classnames_default()(rowClassName);
    }
    return classnames_default()({
      [`${prefixCls}-row-selected`]: selectedKeySet.has(getRowKey(record, index))
    }, mergedRowClassName);
  };
  // ========================== Expandable ==========================
  // Pass origin render status into `rc-table`, this can be removed when refactor with `rc-table`
  mergedExpandable.__PARENT_RENDER_ICON__ = mergedExpandable.expandIcon;
  // Customize expandable icon
  mergedExpandable.expandIcon = mergedExpandable.expandIcon || expandIcon || ExpandIcon(tableLocale);
  // Adjust expand icon index, no overwrite expandIconColumnIndex if set.
  if (expandType === 'nest' && mergedExpandable.expandIconColumnIndex === undefined) {
    mergedExpandable.expandIconColumnIndex = rowSelection ? 1 : 0;
  } else if (mergedExpandable.expandIconColumnIndex > 0 && rowSelection) {
    mergedExpandable.expandIconColumnIndex -= 1;
  }
  // Indent size
  if (typeof mergedExpandable.indentSize !== 'number') {
    mergedExpandable.indentSize = typeof indentSize === 'number' ? indentSize : 15;
  }
  // ============================ Render ============================
  const transformColumns = react.useCallback(innerColumns => transformTitleColumns(transformSelectionColumns(transformFilterColumns(transformSorterColumns(innerColumns)))), [transformSorterColumns, transformFilterColumns, transformSelectionColumns]);
  let topPaginationNode;
  let bottomPaginationNode;
  if (pagination !== false && (mergedPagination === null || mergedPagination === void 0 ? void 0 : mergedPagination.total)) {
    let paginationSize;
    if (mergedPagination.size) {
      paginationSize = mergedPagination.size;
    } else {
      paginationSize = mergedSize === 'small' || mergedSize === 'middle' ? 'small' : undefined;
    }
    const renderPagination = position => (/*#__PURE__*/react.createElement(es_pagination/* default */.Z, Object.assign({}, mergedPagination, {
      className: classnames_default()(`${prefixCls}-pagination ${prefixCls}-pagination-${position}`, mergedPagination.className),
      size: paginationSize
    })));
    const defaultPosition = direction === 'rtl' ? 'left' : 'right';
    const {
      position
    } = mergedPagination;
    if (position !== null && Array.isArray(position)) {
      const topPos = position.find(p => p.includes('top'));
      const bottomPos = position.find(p => p.includes('bottom'));
      const isDisable = position.every(p => `${p}` === 'none');
      if (!topPos && !bottomPos && !isDisable) {
        bottomPaginationNode = renderPagination(defaultPosition);
      }
      if (topPos) {
        topPaginationNode = renderPagination(topPos.toLowerCase().replace('top', ''));
      }
      if (bottomPos) {
        bottomPaginationNode = renderPagination(bottomPos.toLowerCase().replace('bottom', ''));
      }
    } else {
      bottomPaginationNode = renderPagination(defaultPosition);
    }
  }
  // >>>>>>>>> Spinning
  let spinProps;
  if (typeof loading === 'boolean') {
    spinProps = {
      spinning: loading
    };
  } else if (typeof loading === 'object') {
    spinProps = Object.assign({
      spinning: true
    }, loading);
  }
  const wrapperClassNames = classnames_default()(cssVarCls, rootCls, `${prefixCls}-wrapper`, table === null || table === void 0 ? void 0 : table.className, {
    [`${prefixCls}-wrapper-rtl`]: direction === 'rtl'
  }, className, rootClassName, hashId);
  const mergedStyle = Object.assign(Object.assign({}, table === null || table === void 0 ? void 0 : table.style), style);
  const emptyText = typeof (locale === null || locale === void 0 ? void 0 : locale.emptyText) !== 'undefined' ? locale.emptyText : (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty('Table')) || /*#__PURE__*/react.createElement(defaultRenderEmpty/* default */.Z, {
    componentName: "Table"
  });
  // ========================== Render ==========================
  const TableComponent = virtual ? VirtualTable : table_RcTable;
  // >>> Virtual Table props. We set height here since it will affect height collection
  const virtualProps = {};
  const listItemHeight = react.useMemo(() => {
    const {
      fontSize,
      lineHeight,
      padding,
      paddingXS,
      paddingSM
    } = token;
    const fontHeight = Math.floor(fontSize * lineHeight);
    switch (mergedSize) {
      case 'large':
        return padding * 2 + fontHeight;
      case 'small':
        return paddingXS * 2 + fontHeight;
      default:
        return paddingSM * 2 + fontHeight;
    }
  }, [token, mergedSize]);
  if (virtual) {
    virtualProps.listItemHeight = listItemHeight;
  }
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    ref: rootRef,
    className: wrapperClassNames,
    style: mergedStyle
  }, /*#__PURE__*/react.createElement(spin/* default */.Z, Object.assign({
    spinning: false
  }, spinProps), topPaginationNode, /*#__PURE__*/react.createElement(TableComponent, Object.assign({}, virtualProps, tableProps, {
    ref: tblRef,
    columns: mergedColumns,
    direction: direction,
    expandable: mergedExpandable,
    prefixCls: prefixCls,
    className: classnames_default()({
      [`${prefixCls}-middle`]: mergedSize === 'middle',
      [`${prefixCls}-small`]: mergedSize === 'small',
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-empty`]: rawData.length === 0
    }, cssVarCls, rootCls, hashId),
    data: pageData,
    rowKey: getRowKey,
    rowClassName: internalRowClassName,
    emptyText: emptyText,
    // Internal
    internalHooks: es.INTERNAL_HOOKS,
    internalRefs: internalRefs,
    transformColumns: transformColumns,
    getContainerWidth: getContainerWidth
  })), bottomPaginationNode)));
};
/* harmony default export */ var table_InternalTable = (/*#__PURE__*/react.forwardRef(InternalTable));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/Table.js
"use client";







const Table = (props, ref) => {
  const renderTimesRef = react.useRef(0);
  renderTimesRef.current += 1;
  return /*#__PURE__*/react.createElement(table_InternalTable, Object.assign({}, props, {
    ref: ref,
    _renderTimes: renderTimesRef.current
  }));
};
const ForwardTable = /*#__PURE__*/react.forwardRef(Table);
ForwardTable.SELECTION_COLUMN = SELECTION_COLUMN;
ForwardTable.EXPAND_COLUMN = es.EXPAND_COLUMN;
ForwardTable.SELECTION_ALL = SELECTION_ALL;
ForwardTable.SELECTION_INVERT = SELECTION_INVERT;
ForwardTable.SELECTION_NONE = SELECTION_NONE;
ForwardTable.Column = table_Column;
ForwardTable.ColumnGroup = table_ColumnGroup;
ForwardTable.Summary = es.Summary;
if (false) {}
/* harmony default export */ var table_Table = (ForwardTable);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/index.js
"use client";


/* harmony default export */ var table = (table_Table);

/***/ }),

/***/ 98351:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TM: function() { return /* binding */ initComponentToken; },
/* harmony export */   Yk: function() { return /* binding */ genTreeStyle; }
/* harmony export */ });
/* unused harmony exports genBaseStyle, genDirectoryStyle, prepareComponentToken */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20693);
/* harmony import */ var _checkbox_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67533);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13587);
/* harmony import */ var _style_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11037);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53557);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61372);





// ============================ Keyframes =============================
const treeNodeFX = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.Keyframes('ant-tree-node-fx-do-not-use', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});
// ============================== Switch ==============================
const getSwitchStyle = (prefixCls, token) => ({
  [`.${prefixCls}-switcher-icon`]: {
    display: 'inline-block',
    fontSize: 10,
    verticalAlign: 'baseline',
    svg: {
      transition: `transform ${token.motionDurationSlow}`
    }
  }
});
// =============================== Drop ===============================
const getDropIndicatorStyle = (prefixCls, token) => ({
  [`.${prefixCls}-drop-indicator`]: {
    position: 'absolute',
    // it should displayed over the following node
    zIndex: 1,
    height: 2,
    backgroundColor: token.colorPrimary,
    borderRadius: 1,
    pointerEvents: 'none',
    '&:after': {
      position: 'absolute',
      top: -3,
      insetInlineStart: -6,
      width: 8,
      height: 8,
      backgroundColor: 'transparent',
      border: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.lineWidthBold)} solid ${token.colorPrimary}`,
      borderRadius: '50%',
      content: '""'
    }
  }
});
const genBaseStyle = (prefixCls, token) => {
  const {
    treeCls,
    treeNodeCls,
    treeNodePadding,
    titleHeight,
    nodeSelectedBg,
    nodeHoverBg
  } = token;
  const treeCheckBoxMarginHorizontal = token.paddingXS;
  return {
    [treeCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), {
      background: token.colorBgContainer,
      borderRadius: token.borderRadius,
      transition: `background-color ${token.motionDurationSlow}`,
      [`&${treeCls}-rtl`]: {
        // >>> Switcher
        [`${treeCls}-switcher`]: {
          '&_close': {
            [`${treeCls}-switcher-icon`]: {
              svg: {
                transform: 'rotate(90deg)'
              }
            }
          }
        }
      },
      [`&-focused:not(:hover):not(${treeCls}-active-focused)`]: Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .genFocusOutline */ .oN)(token)),
      // =================== Virtual List ===================
      [`${treeCls}-list-holder-inner`]: {
        alignItems: 'flex-start'
      },
      [`&${treeCls}-block-node`]: {
        [`${treeCls}-list-holder-inner`]: {
          alignItems: 'stretch',
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            flex: 'auto'
          },
          // >>> Drag
          [`${treeNodeCls}.dragging`]: {
            position: 'relative',
            '&:after': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: 0,
              bottom: treeNodePadding,
              insetInlineStart: 0,
              border: `1px solid ${token.colorPrimary}`,
              opacity: 0,
              animationName: treeNodeFX,
              animationDuration: token.motionDurationSlow,
              animationPlayState: 'running',
              animationFillMode: 'forwards',
              content: '""',
              pointerEvents: 'none'
            }
          }
        }
      },
      // ===================== TreeNode =====================
      [treeNodeCls]: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: `0 0 ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(treeNodePadding)} 0`,
        outline: 'none',
        '&-rtl': {
          direction: 'rtl'
        },
        // Disabled
        '&-disabled': {
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            color: token.colorTextDisabled,
            cursor: 'not-allowed',
            '&:hover': {
              background: 'transparent'
            }
          }
        },
        [`&-active ${treeCls}-node-content-wrapper`]: {
          background: token.controlItemBgHover
        },
        [`&:not(${treeNodeCls}-disabled).filter-node ${treeCls}-title`]: {
          color: token.colorPrimary,
          fontWeight: 500
        },
        '&-draggable': {
          cursor: 'grab',
          [`${treeCls}-draggable-icon`]: {
            // https://github.com/ant-design/ant-design/issues/41915
            flexShrink: 0,
            width: titleHeight,
            lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(titleHeight),
            textAlign: 'center',
            visibility: 'visible',
            opacity: 0.2,
            transition: `opacity ${token.motionDurationSlow}`,
            [`${treeNodeCls}:hover &`]: {
              opacity: 0.45
            }
          },
          [`&${treeNodeCls}-disabled`]: {
            [`${treeCls}-draggable-icon`]: {
              visibility: 'hidden'
            }
          }
        }
      },
      // >>> Indent
      [`${treeCls}-indent`]: {
        alignSelf: 'stretch',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        '&-unit': {
          display: 'inline-block',
          width: titleHeight
        }
      },
      // >>> Drag Handler
      [`${treeCls}-draggable-icon`]: {
        visibility: 'hidden'
      },
      // >>> Switcher
      [`${treeCls}-switcher`]: Object.assign(Object.assign({}, getSwitchStyle(prefixCls, token)), {
        position: 'relative',
        flex: 'none',
        alignSelf: 'stretch',
        width: titleHeight,
        margin: 0,
        lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(titleHeight),
        textAlign: 'center',
        cursor: 'pointer',
        userSelect: 'none',
        transition: `all ${token.motionDurationSlow}`,
        marginInlineEnd: token.calc(token.calc(titleHeight).sub(token.controlInteractiveSize)).div(2).equal(),
        '&-noop': {
          cursor: 'unset'
        },
        '&:before': {
          pointerEvents: 'none',
          content: '""',
          width: titleHeight,
          height: titleHeight,
          position: 'absolute',
          left: {
            _skip_check_: true,
            value: 0
          },
          top: 0,
          borderRadius: token.borderRadius,
          transition: `all ${token.motionDurationSlow}`
        },
        [`&:not(${treeCls}-switcher-noop):hover:before`]: {
          backgroundColor: token.colorBgTextHover
        },
        '&_close': {
          [`${treeCls}-switcher-icon`]: {
            svg: {
              transform: 'rotate(-90deg)'
            }
          }
        },
        '&-loading-icon': {
          color: token.colorPrimary
        },
        '&-leaf-line': {
          position: 'relative',
          zIndex: 1,
          display: 'inline-block',
          width: '100%',
          height: '100%',
          // https://github.com/ant-design/ant-design/issues/31884
          '&:before': {
            position: 'absolute',
            top: 0,
            insetInlineEnd: token.calc(titleHeight).div(2).equal(),
            bottom: token.calc(treeNodePadding).mul(-1).equal(),
            marginInlineStart: -1,
            borderInlineEnd: `1px solid ${token.colorBorder}`,
            content: '""'
          },
          '&:after': {
            position: 'absolute',
            width: token.calc(token.calc(titleHeight).div(2).equal()).mul(0.8).equal(),
            height: token.calc(titleHeight).div(2).equal(),
            borderBottom: `1px solid ${token.colorBorder}`,
            content: '""'
          }
        }
      }),
      // >>> Checkbox
      [`${treeCls}-checkbox`]: {
        top: 'initial',
        marginInlineEnd: treeCheckBoxMarginHorizontal,
        alignSelf: 'flex-start',
        marginTop: token.marginXXS
      },
      // >>> Title
      // add `${treeCls}-checkbox + span` to cover checkbox `${checkboxCls} + span`
      [`${treeCls}-node-content-wrapper, ${treeCls}-checkbox + span`]: {
        position: 'relative',
        zIndex: 'auto',
        minHeight: titleHeight,
        margin: 0,
        padding: `0 ${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(token.paddingXS).div(2).equal())}`,
        color: 'inherit',
        lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(titleHeight),
        background: 'transparent',
        borderRadius: token.borderRadius,
        cursor: 'pointer',
        transition: `all ${token.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
        '&:hover': {
          backgroundColor: nodeHoverBg
        },
        [`&${treeCls}-node-selected`]: {
          backgroundColor: nodeSelectedBg
        },
        // Icon
        [`${treeCls}-iconEle`]: {
          display: 'inline-block',
          width: titleHeight,
          height: titleHeight,
          lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(titleHeight),
          textAlign: 'center',
          verticalAlign: 'top',
          '&:empty': {
            display: 'none'
          }
        }
      },
      // https://github.com/ant-design/ant-design/issues/28217
      [`${treeCls}-unselectable ${treeCls}-node-content-wrapper:hover`]: {
        backgroundColor: 'transparent'
      },
      // ==================== Draggable =====================
      [`${treeCls}-node-content-wrapper`]: Object.assign({
        lineHeight: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(titleHeight),
        userSelect: 'none'
      }, getDropIndicatorStyle(prefixCls, token)),
      [`${treeNodeCls}.drop-container`]: {
        '> [draggable]': {
          boxShadow: `0 0 0 2px ${token.colorPrimary}`
        }
      },
      // ==================== Show Line =====================
      '&-show-line': {
        // ================ Indent lines ================
        [`${treeCls}-indent`]: {
          '&-unit': {
            position: 'relative',
            height: '100%',
            '&:before': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: token.calc(titleHeight).div(2).equal(),
              bottom: token.calc(treeNodePadding).mul(-1).equal(),
              borderInlineEnd: `1px solid ${token.colorBorder}`,
              content: '""'
            },
            '&-end': {
              '&:before': {
                display: 'none'
              }
            }
          }
        },
        // ============== Cover Background ==============
        [`${treeCls}-switcher`]: {
          background: 'transparent',
          '&-line-icon': {
            // https://github.com/ant-design/ant-design/issues/32813
            verticalAlign: '-0.15em'
          }
        }
      },
      [`${treeNodeCls}-leaf-last`]: {
        [`${treeCls}-switcher`]: {
          '&-leaf-line': {
            '&:before': {
              top: 'auto !important',
              bottom: 'auto !important',
              height: `${(0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__.unit)(token.calc(titleHeight).div(2).equal())} !important`
            }
          }
        }
      }
    })
  };
};
// ============================ Directory =============================
const genDirectoryStyle = token => {
  const {
    treeCls,
    treeNodeCls,
    treeNodePadding,
    directoryNodeSelectedBg,
    directoryNodeSelectedColor
  } = token;
  return {
    [`${treeCls}${treeCls}-directory`]: {
      // ================== TreeNode ==================
      [treeNodeCls]: {
        position: 'relative',
        // Hover color
        '&:before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: treeNodePadding,
          insetInlineStart: 0,
          transition: `background-color ${token.motionDurationMid}`,
          content: '""',
          pointerEvents: 'none'
        },
        '&:hover': {
          '&:before': {
            background: token.controlItemBgHover
          }
        },
        // Elements
        '> *': {
          zIndex: 1
        },
        // >>> Switcher
        [`${treeCls}-switcher`]: {
          transition: `color ${token.motionDurationMid}`
        },
        // >>> Title
        [`${treeCls}-node-content-wrapper`]: {
          borderRadius: 0,
          userSelect: 'none',
          '&:hover': {
            background: 'transparent'
          },
          [`&${treeCls}-node-selected`]: {
            color: directoryNodeSelectedColor,
            background: 'transparent'
          }
        },
        // ============= Selected =============
        '&-selected': {
          [`
            &:hover::before,
            &::before
          `]: {
            background: directoryNodeSelectedBg
          },
          // >>> Switcher
          [`${treeCls}-switcher`]: {
            color: directoryNodeSelectedColor
          },
          // >>> Title
          [`${treeCls}-node-content-wrapper`]: {
            color: directoryNodeSelectedColor,
            background: 'transparent'
          }
        }
      }
    }
  };
};
// ============================== Merged ==============================
const genTreeStyle = (prefixCls, token) => {
  const treeCls = `.${prefixCls}`;
  const treeNodeCls = `${treeCls}-treenode`;
  const treeNodePadding = token.calc(token.paddingXS).div(2).equal();
  const treeToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__.mergeToken)(token, {
    treeCls,
    treeNodeCls,
    treeNodePadding
  });
  return [
  // Basic
  genBaseStyle(prefixCls, treeToken),
  // Directory
  genDirectoryStyle(treeToken)];
};
const initComponentToken = token => {
  const {
    controlHeightSM
  } = token;
  return {
    titleHeight: controlHeightSM,
    nodeHoverBg: token.controlItemBgHover,
    nodeSelectedBg: token.controlItemBgActive
  };
};
const prepareComponentToken = token => {
  const {
    colorTextLightSolid,
    colorPrimary
  } = token;
  return Object.assign(Object.assign({}, initComponentToken(token)), {
    directoryNodeSelectedColor: colorTextLightSolid,
    directoryNodeSelectedBg: colorPrimary
  });
};
/* harmony default export */ __webpack_exports__.ZP = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__/* .genStyleHooks */ .I$)('Tree', (token, _ref) => {
  let {
    prefixCls
  } = _ref;
  return [{
    [token.componentCls]: (0,_checkbox_style__WEBPACK_IMPORTED_MODULE_4__/* .getStyle */ .C2)(`${prefixCls}-checkbox`, token)
  }, genTreeStyle(prefixCls, token), (0,_style_motion__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(token)];
}, prepareComponentToken));

/***/ }),

/***/ 65420:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var _ant_design_icons_es_icons_CaretDownFilled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48261);
/* harmony import */ var _ant_design_icons_es_icons_FileOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82235);
/* harmony import */ var _ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8298);
/* harmony import */ var _ant_design_icons_es_icons_MinusSquareOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61838);
/* harmony import */ var _ant_design_icons_es_icons_PlusSquareOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67223);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82187);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_reactNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81864);
"use client";









const SwitcherIconCom = props => {
  const {
    prefixCls,
    switcherIcon,
    treeNodeProps,
    showLine,
    switcherLoadingIcon
  } = props;
  const {
    isLeaf,
    expanded,
    loading
  } = treeNodeProps;
  if (loading) {
    if (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(switcherLoadingIcon)) {
      return switcherLoadingIcon;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_LoadingOutlined__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      className: `${prefixCls}-switcher-loading-icon`
    });
  }
  let showLeafIcon;
  if (showLine && typeof showLine === 'object') {
    showLeafIcon = showLine.showLeafIcon;
  }
  if (isLeaf) {
    if (!showLine) {
      return null;
    }
    if (typeof showLeafIcon !== 'boolean' && !!showLeafIcon) {
      const leafIcon = typeof showLeafIcon === 'function' ? showLeafIcon(treeNodeProps) : showLeafIcon;
      const leafCls = `${prefixCls}-switcher-line-custom-icon`;
      if (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(leafIcon)) {
        return (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_3__/* .cloneElement */ .Tm)(leafIcon, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(leafIcon.props.className || '', leafCls)
        });
      }
      return leafIcon;
    }
    return showLeafIcon ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_FileOutlined__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      className: `${prefixCls}-switcher-line-icon`
    })) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: `${prefixCls}-switcher-leaf-line`
    }));
  }
  const switcherCls = `${prefixCls}-switcher-icon`;
  const switcher = typeof switcherIcon === 'function' ? switcherIcon(treeNodeProps) : switcherIcon;
  if (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(switcher)) {
    return (0,_util_reactNode__WEBPACK_IMPORTED_MODULE_3__/* .cloneElement */ .Tm)(switcher, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(switcher.props.className || '', switcherCls)
    });
  }
  if (switcher !== undefined) {
    return switcher;
  }
  if (showLine) {
    return expanded ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_MinusSquareOutlined__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      className: `${prefixCls}-switcher-line-icon`
    })) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_PlusSquareOutlined__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      className: `${prefixCls}-switcher-line-icon`
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons_es_icons_CaretDownFilled__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    className: switcherCls
  });
};
/* harmony default export */ __webpack_exports__.Z = (SwitcherIconCom);

/***/ })

}]);