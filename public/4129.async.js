(self["webpackChunk"] = self["webpackChunk"] || []).push([[4129],{

/***/ 49105:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EG: function() { return /* binding */ fillInternalKey; },
/* harmony export */   HL: function() { return /* binding */ getPkScriprt; },
/* harmony export */   L7: function() { return /* binding */ calcFee; },
/* harmony export */   eo: function() { return /* binding */ getMvcBalance; },
/* harmony export */   lE: function() { return /* binding */ buildTx; },
/* harmony export */   o2: function() { return /* binding */ createPsbtInput; },
/* harmony export */   t4: function() { return /* binding */ getUtxos; },
/* harmony export */   xd: function() { return /* binding */ getUtxoBalance; }
/* harmony export */ });
/* unused harmony exports addUtxoSafe, toXOnly, updateInputKey, checkWalletAddress */
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(335);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25688);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10642);
/* harmony import */ var _mempool_mempool_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4940);
/* harmony import */ var _mempool_mempool_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mempool_mempool_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bitcoinjs_lib_src_psbt_bip371__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5465);
/* harmony import */ var _bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48507);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36379);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72898);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78488);











function toUint8Array(obj) {
  return new Uint8Array(Object.values(obj));
}
var TX_EMPTY_SIZE = 4 + 1 + 1 + 4;
var TX_INPUT_BASE = 32 + 4 + 1 + 4; // 41
var TX_INPUT_PUBKEYHASH = 107;
var TX_INPUT_SEGWIT = 27;
var TX_INPUT_TAPROOT = 17; // round up 16.5 bytes
var TX_OUTPUT_BASE = 8 + 1;
var TX_OUTPUT_PUBKEYHASH = 25;
var TX_OUTPUT_SCRIPTHASH = 23;
var TX_OUTPUT_SEGWIT = 22;
var TX_OUTPUT_SEGWIT_SCRIPTHASH = 34;
var TX_INPUT_SCRIPT_BASE = 0;
function selectUTXOs(utxos, targetAmount) {
  var totalAmount = new decimal_js__WEBPACK_IMPORTED_MODULE_3__/* .Decimal */ .t(0);
  var selectedUtxos = [];
  var _iterator = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(utxos),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var utxo = _step.value;
      selectedUtxos.push(utxo);
      totalAmount = totalAmount.add(utxo.satoshis);
      if (totalAmount.gte(targetAmount)) {
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (totalAmount.lt(targetAmount)) {
    throw new Error("Insufficient funds to reach the target amount");
  }
  return selectedUtxos;
}
function getTotalSatoshi(utxos) {
  return utxos.reduce(function (total, utxo) {
    return total.add(utxo.satoshis);
  }, new decimal_js__WEBPACK_IMPORTED_MODULE_3__/* .Decimal */ .t(0));
}
function calculateEstimatedFee(psbt, feeRate) {
  var tx = psbt.extractTransaction();
  var size = tx.virtualSize();
  return new Decimal(size).mul(feeRate);
}
function inputBytes(input) {
  // todo: script length

  if ((0,bitcoinjs_lib_src_psbt_bip371__WEBPACK_IMPORTED_MODULE_6__/* .isTaprootInput */ .xm)(input)) {
    return TX_INPUT_BASE + TX_INPUT_TAPROOT;
  }
  if (input.redeemScript) return TX_INPUT_BASE + input.redeemScript.length;
  if (input.nonWitnessUtxo) return TX_INPUT_BASE + TX_INPUT_PUBKEYHASH;
  if (input.witnessUtxo) return TX_INPUT_BASE + TX_INPUT_SEGWIT;
  return TX_INPUT_BASE + TX_INPUT_PUBKEYHASH;
}
function outputBytes(output) {
  var _output$address, _output$address2, _output$address3, _output$address4, _output$address5;
  // if output is op-return, use it's buffer size

  return TX_OUTPUT_BASE + (output.script ? output.script.length : (_output$address = output.address) !== null && _output$address !== void 0 && _output$address.startsWith("bc1") || (_output$address2 = output.address) !== null && _output$address2 !== void 0 && _output$address2.startsWith("tb1") ? ((_output$address3 = output.address) === null || _output$address3 === void 0 ? void 0 : _output$address3.length) === 42 // TODO: looks like something wrong here
  ? TX_OUTPUT_SEGWIT : TX_OUTPUT_SEGWIT_SCRIPTHASH : (_output$address4 = output.address) !== null && _output$address4 !== void 0 && _output$address4.startsWith("3") || (_output$address5 = output.address) !== null && _output$address5 !== void 0 && _output$address5.startsWith("2") ? TX_OUTPUT_SCRIPTHASH : TX_OUTPUT_PUBKEYHASH);
}
function transactionBytes(inputs, outputs) {
  var inputsSize = inputs.reduce(function (a, x) {
    return a + inputBytes(x);
  }, 0);
  var outputsSize = outputs.reduce(function (a, x, index) {
    return a + outputBytes(x);
  }, 0);
  console.log({
    inputsSize: inputsSize,
    outputsSize: outputsSize,
    TX_EMPTY_SIZE: TX_EMPTY_SIZE
  });
  return TX_EMPTY_SIZE + inputsSize + outputsSize;
}
function calcFee(psbt, feeRate) {
  var inputs = psbt.data.inputs;
  var outputs = psbt.txOutputs;
  var bytes = transactionBytes(inputs, outputs);
  return new decimal_js__WEBPACK_IMPORTED_MODULE_3__/* .Decimal */ .t(bytes).mul(feeRate).add(10);
}
function buildTx(_x, _x2, _x3, _x4, _x5, _x6) {
  return _buildTx.apply(this, arguments);
}
function _buildTx() {
  _buildTx = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee6(utxos, amount, feeRate, buildPsbtParams, address, buildPsbt) {
    var extract,
      signPsbt,
      selectedUTXOs,
      total,
      psbt,
      estimatedFee,
      _args6 = arguments;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          extract = _args6.length > 6 && _args6[6] !== undefined ? _args6[6] : false;
          signPsbt = _args6.length > 7 && _args6[7] !== undefined ? _args6[7] : true;
          selectedUTXOs = selectUTXOs(utxos, amount);
          total = getTotalSatoshi(selectedUTXOs);
          _context6.next = 6;
          return buildPsbt(buildPsbtParams, selectedUTXOs, total.minus(amount), true, false);
        case 6:
          psbt = _context6.sent;
          estimatedFee = calcFee(psbt, feeRate);
        case 8:
          if (!total.lt(amount.add(estimatedFee))) {
            _context6.next = 19;
            break;
          }
          if (!(selectedUTXOs.length === utxos.length)) {
            _context6.next = 11;
            break;
          }
          throw new Error("Insufficient funds");
        case 11:
          selectedUTXOs = selectUTXOs(utxos, amount.add(estimatedFee));
          total = getTotalSatoshi(selectedUTXOs);
          _context6.next = 15;
          return buildPsbt(buildPsbtParams, selectedUTXOs, total.minus(amount.add(estimatedFee)), true, false);
        case 15:
          psbt = _context6.sent;
          estimatedFee = calcFee(psbt, feeRate);
          _context6.next = 8;
          break;
        case 19:
          _context6.next = 21;
          return buildPsbt(buildPsbtParams, selectedUTXOs, total.minus(amount.add(estimatedFee)), false, signPsbt);
        case 21:
          psbt = _context6.sent;
          console.log(psbt, "psbt in buildTx");
          return _context6.abrupt("return", {
            psbt: psbt,
            fee: total.minus(psbt.txOutputs.reduce(function (acc, cur) {
              return acc + Number(cur.value);
            }, 0)).toString(),
            txId: !extract ? "" : psbt.extractTransaction().getId(),
            rawTx: !extract ? psbt.toHex() : psbt.extractTransaction().toHex(),
            txInputs: selectedUTXOs.map(function (utxo) {
              return {
                address: address,
                value: utxo.satoshis
              };
            }),
            txOutputs: psbt.txOutputs.map(function (out) {
              return {
                address: out.address || "",
                value: out.value
              };
            })
          });
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _buildTx.apply(this, arguments);
}
function createPsbtInput(_x7) {
  return _createPsbtInput.apply(this, arguments);
}
function _createPsbtInput() {
  _createPsbtInput = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee7(_ref) {
    var utxo, addressType, publicKey, script, network, payInput, tx, mempoolReturn, rawTx, _tx, _payments$p2sh, redeem;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          utxo = _ref.utxo, addressType = _ref.addressType, publicKey = _ref.publicKey, script = _ref.script, network = _ref.network;
          network = network || _config__WEBPACK_IMPORTED_MODULE_10__/* .curNetwork */ .eM;
          payInput = {
            hash: utxo.txId,
            index: utxo.vout,
            sequence: 0xffffffff // These are defaults. This line is not needed.
          };
          if (["P2TR"].includes(addressType)) {
            payInput["tapInternalKey"] = publicKey.subarray(1);
            payInput["witnessUtxo"] = {
              value: BigInt(utxo.satoshi),
              script: toUint8Array(script)
            };
          }
          if (["P2WPKH"].includes(addressType)) {
            payInput["witnessUtxo"] = {
              value: BigInt(utxo.satoshi),
              script: toUint8Array(script)
            };
          }
          if (!["P2PKH"].includes(addressType)) {
            _context7.next = 17;
            break;
          }
          if (!utxo.rawTx) {
            _context7.next = 11;
            break;
          }
          tx = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .Transaction */ .YW.fromHex(utxo.rawTx);
          payInput["nonWitnessUtxo"] = tx.toBuffer();
          _context7.next = 17;
          break;
        case 11:
          mempoolReturn = _mempool_mempool_js__WEBPACK_IMPORTED_MODULE_5___default()({
            hostname: "mempool.space",
            network: _config__WEBPACK_IMPORTED_MODULE_10__/* .curNetwork */ .eM === "testnet" ? "testnet" : "main"
          });
          _context7.next = 14;
          return mempoolReturn.bitcoin.transactions.getTxHex({
            txid: utxo.txId
          });
        case 14:
          rawTx = _context7.sent;
          _tx = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .Transaction */ .YW.fromHex(rawTx);
          payInput["nonWitnessUtxo"] = _tx.toBuffer();
        case 17:
          if (!["P2SH"].includes(addressType)) {
            _context7.next = 23;
            break;
          }
          _payments$p2sh = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .payments.p2sh */ .PP.p2sh({
            redeem: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .payments.p2wpkh */ .PP.p2wpkh({
              pubkey: publicKey,
              network: _config__WEBPACK_IMPORTED_MODULE_10__/* .TYPED_NETWORK */ .vM
            }),
            network: _config__WEBPACK_IMPORTED_MODULE_10__/* .TYPED_NETWORK */ .vM
          }), redeem = _payments$p2sh.redeem;
          if (redeem) {
            _context7.next = 21;
            break;
          }
          throw new Error("redeemScript");
        case 21:
          payInput.redeemScript = redeem.output;
          payInput["witnessUtxo"] = {
            value: BigInt(utxo.satoshi),
            script: toUint8Array(script)
          }; // { value: utxo.satoshi, script };
        case 23:
          return _context7.abrupt("return", payInput);
        case 24:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _createPsbtInput.apply(this, arguments);
}
function fillInternalKey(_x8) {
  return _fillInternalKey.apply(this, arguments);
}
function _fillInternalKey() {
  _fillInternalKey = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee8(_ref2) {
    var publicKey, addressType, payInput, _payments$p2sh2, redeem;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          publicKey = _ref2.publicKey, addressType = _ref2.addressType;
          payInput = {};
          if (["P2TR"].includes(addressType)) {
            payInput["tapInternalKey"] = publicKey.subarray(1);
          }
          if (!["P2SH"].includes(addressType)) {
            _context8.next = 9;
            break;
          }
          console.log("input.tapInternalKey");
          _payments$p2sh2 = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .payments.p2sh */ .PP.p2sh({
            redeem: bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .payments.p2wpkh */ .PP.p2wpkh({
              pubkey: publicKey,
              network: _config__WEBPACK_IMPORTED_MODULE_10__/* .TYPED_NETWORK */ .vM
            }),
            network: _config__WEBPACK_IMPORTED_MODULE_10__/* .TYPED_NETWORK */ .vM
          }), redeem = _payments$p2sh2.redeem;
          if (redeem) {
            _context8.next = 8;
            break;
          }
          throw new Error("redeemScript");
        case 8:
          payInput.redeemScript = redeem.output;
        case 9:
          return _context8.abrupt("return", payInput);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _fillInternalKey.apply(this, arguments);
}
var getUtxos = /*#__PURE__*/function () {
  var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(address, network) {
    var addressType, utxos, i, _utxos$i, txId, vout, ret;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // const mempoolReturn = mempoolJS({
          //   hostname: 'mempool.space',
          //   network: network === 'mainnet' ? 'main' : 'testnet',
          // })
          // const rawUtxoList = await mempoolReturn.bitcoin.addresses.getAddressTxsUtxo({
          //   address,
          // })
          // const utxos: API.UTXO[] = []
          // for (const utxoElement of rawUtxoList) {
          //   if (utxoElement.value > 1000) {
          //     utxos.push({
          //       txId: utxoElement.txid,
          //       vout: utxoElement.vout,
          //       satoshi: utxoElement.value,
          //       confirmed: utxoElement.status.confirmed,
          //       inscriptions: null,
          //       outputIndex: utxoElement.vout,
          //       satoshis: utxoElement.value,
          //     })
          //   }
          // }
          // return utxos
          addressType = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .determineAddressInfo */ .uY)(address).toUpperCase();
          _context.next = 3;
          return window.metaidwallet.btc.getUtxos({
            needRawTx: ["P2PKH"].includes(addressType),
            useUnconfirmed: true
          });
        case 3:
          utxos = _context.sent;
          i = 0;
        case 5:
          if (!(i < utxos.length)) {
            _context.next = 15;
            break;
          }
          _utxos$i = utxos[i], txId = _utxos$i.txId, vout = _utxos$i.vout;
          if (utxos[i].confirmed) {
            _context.next = 12;
            break;
          }
          _context.next = 10;
          return window.metaidwallet.btc.addSafeUtxo({
            address: address,
            unspentOutput: "".concat(txId, ":").concat(vout)
          });
        case 10:
          ret = _context.sent;
          console.log(ret, "addSafeUtxo");
        case 12:
          i++;
          _context.next = 5;
          break;
        case 15:
          return _context.abrupt("return", utxos);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getUtxos(_x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();
var addUtxoSafe = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address, utxos) {
    var i, _utxos$i2, txId, vout, ret;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log(utxos, "addUtxoSafe");
          i = 0;
        case 2:
          if (!(i < utxos.length)) {
            _context2.next = 17;
            break;
          }
          _context2.prev = 3;
          _utxos$i2 = utxos[i], txId = _utxos$i2.txId, vout = _utxos$i2.vout;
          _context2.next = 7;
          return window.metaidwallet.btc.addSafeUtxo({
            address: address,
            unspentOutput: "".concat(txId, ":").concat(vout)
          });
        case 7:
          ret = _context2.sent;
          console.log(ret, "addUtxoSafe");
          _context2.next = 14;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0);
        case 14:
          i++;
          _context2.next = 2;
          break;
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 11]]);
  }));
  return function addUtxoSafe(_x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}()));
function toXOnly(pubKey) {
  return pubKey.length === 32 ? pubKey : pubKey.slice(1, 33);
}
function updateInputKey(_x13) {
  return _updateInputKey.apply(this, arguments);
}
function _updateInputKey() {
  _updateInputKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(_ref5) {
    var publicKey, addressType, network, payInput, tapInternalKey, _payments$p2sh3, redeem;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          publicKey = _ref5.publicKey, addressType = _ref5.addressType, network = _ref5.network;
          payInput = {};
          if (["P2TR"].includes(addressType)) {
            tapInternalKey = toXOnly(publicKey);
            payInput["tapInternalKey"] = tapInternalKey;
          }
          if (!["P2SH"].includes(addressType)) {
            _context9.next = 9;
            break;
          }
          console.log("input.tapInternalKey");
          _payments$p2sh3 = payments.p2sh({
            redeem: payments.p2wpkh({
              pubkey: publicKey,
              network: TYPED_NETWORK
            }),
            network: TYPED_NETWORK
          }), redeem = _payments$p2sh3.redeem;
          if (redeem) {
            _context9.next = 8;
            break;
          }
          throw new Error("redeemScript");
        case 8:
          payInput.redeemScript = redeem.output;
        case 9:
          return _context9.abrupt("return", payInput);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _updateInputKey.apply(this, arguments);
}
var getUtxoBalance = /*#__PURE__*/function () {
  var _ref6 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(address) {
    var utxos;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (address) {
            _context3.next = 4;
            break;
          }
          _context3.next = 3;
          return window.metaidwallet.btc.getAddress();
        case 3:
          address = _context3.sent;
        case 4:
          _context3.next = 6;
          return getUtxos(address);
        case 6:
          utxos = _context3.sent;
          return _context3.abrupt("return", utxos.reduce(function (acc, cur) {
            return acc + cur.satoshis;
          }, 0));
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getUtxoBalance(_x14) {
    return _ref6.apply(this, arguments);
  };
}();
var getMvcBalance = /*#__PURE__*/function () {
  var _ref7 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(address) {
    var utxos;
    return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (address) {
            _context4.next = 4;
            break;
          }
          _context4.next = 3;
          return window.metaidwallet.getAddress();
        case 3:
          address = _context4.sent;
        case 4:
          if (address) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", 0);
        case 6:
          _context4.next = 8;
          return window.metaidwallet.getUtxos(address);
        case 8:
          utxos = _context4.sent;
          return _context4.abrupt("return", utxos.reduce(function (acc, cur) {
            return acc + cur.value;
          }, 0));
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getMvcBalance(_x15) {
    return _ref7.apply(this, arguments);
  };
}();
var checkWalletAddress = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(address) {
    var _address;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return window.metaidwallet.btc.getAddress();
        case 2:
          _address = _context5.sent;
          if (!(address !== _address)) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", {
            status: false,
            message: "Wallet address is not matched"
          });
        case 5:
          return _context5.abrupt("return", {
            status: true
          });
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function checkWalletAddress(_x16) {
    return _ref8.apply(this, arguments);
  };
}()));
var getPkScriprt = function getPkScriprt(address, network) {
  (0,bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .initEccLib */ .Wi)(_bitcoin_js_tiny_secp256k1_asmjs__WEBPACK_IMPORTED_MODULE_7__);
  var btcNetwork = network === "mainnet" ? bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .networks.bitcoin */ .QW.zO : bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .networks.testnet */ .QW.$g;
  var paymentPrevOutputScript = bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_4__/* .address.toOutputScript */ .Lk.toOutputScript(address, btcNetwork);
  return buffer__WEBPACK_IMPORTED_MODULE_8__.Buffer.from(paymentPrevOutputScript).toString("hex");
};

/***/ }),

/***/ 72898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LN: function() { return /* binding */ decryptPayloadAES; },
/* harmony export */   O3: function() { return /* binding */ checkImageSize; },
/* harmony export */   YY: function() { return /* binding */ isValidBitcoinAddress; },
/* harmony export */   _v: function() { return /* binding */ sleep; },
/* harmony export */   mG: function() { return /* binding */ getEffectiveBTCFeerate; },
/* harmony export */   uY: function() { return /* binding */ determineAddressInfo; },
/* harmony export */   wC: function() { return /* binding */ generateAESKey; },
/* harmony export */   wL: function() { return /* binding */ openWindowTarget; },
/* harmony export */   wv: function() { return /* binding */ formatMessage; },
/* harmony export */   yI: function() { return /* binding */ encryptPayloadAES; }
/* harmony export */ });
/* unused harmony exports sha256sum, handleSpecial, detectUrl, detectMentions */
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25778);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10642);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56283);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17078);






var ec = new elliptic__WEBPACK_IMPORTED_MODULE_3__.ec("secp256k1");
function generateAESKey() {
  // 32 字节 = 256 位
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().lib.WordArray.random(32);
  // 将密钥转换为十六进制字符串
  return key.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc).Hex);
}
function encryptPayloadAES(keyHex, payload) {
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Hex.parse(keyHex);
  var payloadWordArray = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Hex.parse(payload);
  var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().lib.WordArray.random(16);
  var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt(payloadWordArray, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_1___default().mode).CFB,
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_1___default().pad).NoPadding
  });
  var ivAndCiphertext = iv.concat(encrypted.ciphertext);
  return ivAndCiphertext.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc).Hex);
}
function decryptPayloadAES(keyHex, encryptedHex) {
  // 将 Hex 格式的密钥解析为 CryptoJS WordArray
  var key = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Hex.parse(keyHex);

  // 将加密内容解析为 WordArray
  var encryptedWordArray = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Hex.parse(encryptedHex);

  // 提取 IV（前 16 字节）
  var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().lib.WordArray.create(encryptedWordArray.words.slice(0, 4), 16);

  // 提取密文（去掉前 16 字节的 IV 部分）
  var ciphertext = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().lib.WordArray.create(encryptedWordArray.words.slice(4), encryptedWordArray.sigBytes - 16);

  // 使用 AES 解密
  var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.decrypt({
    ciphertext: ciphertext
  }, key, {
    iv: iv,
    mode: (crypto_js__WEBPACK_IMPORTED_MODULE_1___default().mode).CFB,
    padding: (crypto_js__WEBPACK_IMPORTED_MODULE_1___default().pad).NoPadding
  });

  // 去除多余的字节（可能是乱码）
  var rawData = decrypted.toString((crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc).Hex);

  // 因为输入是 Hex 字符串，去掉可能存在的填充字节
  return rawData.slice(0, ciphertext.sigBytes * 2);
}
function sha256sum(data) {
  return crypto.createHash("sha256").update(data).digest();
}
var handleSpecial = function handleSpecial(summary) {
  summary = summary.replace("<metaid_flag>", "metaid_flag").replace("<operation>", "operation").replace("<path>", "path").replace("<encryption>", "encryption").replace("<version>", "version").replace("<content-type>", "content-type").replace("<payload>", "payload");
  return summary;
};
var detectUrl = function detectUrl(summary) {
  var urlReg = /(https?:\/\/[^\s]+)/g;
  var urls = summary.match(urlReg);
  if (urls) {
    urls.forEach(function (url) {
      summary = summary.replace(url, "<a href=\"".concat(url, "\" target=\"_blank\" style=\"text-decoration: underline;\">").concat(url, "</a>"));
    });
  }
  return summary;
};
var detectMentions = function detectMentions(summary, mentions) {
  for (var _i = 0, _Object$entries = Object.entries(mentions); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    var mentionReg = new RegExp("@".concat(key, " "), "g");
    summary = summary.replace(mentionReg, "<a href=\"/user/".concat(key, "\"   >@").concat(key, " </a>"));
  }
  return summary;
};
var openWindowTarget = function openWindowTarget() {
  if (window.innerWidth > 768) {
    return "_blank";
  }
  return "_self";
};
function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
var formatMessage = function formatMessage(children) {
  var intl = (0,umi__WEBPACK_IMPORTED_MODULE_4__.getIntl)((0,umi__WEBPACK_IMPORTED_MODULE_4__.getLocale)());
  return intl.formatMessage({
    id: children,
    defaultMessage: children
  });
};
function checkImageSize(file) {
  return [true, ""];
  // if (file.size > 1024 * IMAGESIZE) {
  //   return [false, formatMessage("Image must smaller than 300k!")];
  // } else {
  //   return [true, ""];
  // }
}
function determineAddressInfo(address) {
  if (address.startsWith("bc1q")) {
    return "p2wpkh";
  }
  if (address.startsWith("tb1q")) {
    return "p2wpkh";
  }
  if (address.startsWith("bc1p")) {
    return "p2tr";
  }
  if (address.startsWith("tb1p")) {
    return "p2tr";
  }
  if (address.startsWith("1")) {
    return "p2pkh";
  }
  if (address.startsWith("3") || address.startsWith("2")) {
    return "p2sh";
  }
  if (address.startsWith("m") || address.startsWith("n")) {
    return "p2pkh";
  }
  return "unknown";
}
function isValidBitcoinAddress(address, network) {
  try {
    bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_2__/* .address.toOutputScript */ .Lk.toOutputScript(address, network === "mainnet" ? bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_2__/* .networks.bitcoin */ .QW.zO : bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_2__/* .networks.testnet */ .QW.$g);
    return true;
  } catch (_unused) {
    return false;
  }
}
function getEffectiveBTCFeerate(feeRate) {
  return feeRate === 1 ? 1.1 : feeRate;
}

/***/ }),

/***/ 22647:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 81388:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 96581:
/***/ (function() {

/* (ignored) */

/***/ })

}]);