(self["webpackChunk"] = self["webpackChunk"] || []).push([[7708],{

/***/ 37268:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAddresses = void 0;
var useAddresses = function (api) {
    var getAddress = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/address/" + params.address)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAddressTxs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data_1, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!params.after_txid) return [3 /*break*/, 2];
                    return [4 /*yield*/, api.get("/address/" + params.address + "/txs?after_txid=" + params.after_txid)];
                case 1:
                    data_1 = (_a.sent()).data;
                    return [2 /*return*/, data_1];
                case 2: return [4 /*yield*/, api.get("/address/" + params.address + "/txs")];
                case 3:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAddressTxsChain = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/address/" + params.address + "/txs/chain")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAddressTxsMempool = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/address/" + params.address + "/txs/mempool")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAddressTxsUtxo = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/address/" + params.address + "/utxo")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getAddress: getAddress,
        getAddressTxs: getAddressTxs,
        getAddressTxsChain: getAddressTxsChain,
        getAddressTxsMempool: getAddressTxsMempool,
        getAddressTxsUtxo: getAddressTxsUtxo,
    };
};
exports.useAddresses = useAddresses;


/***/ }),

/***/ 56462:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useBlocks = void 0;
var useBlocks = function (api) {
    var getBlock = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/block/" + params.hash)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockStatus = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/status")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockTxs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/txs/" + params.start_index)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockTxids = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/txids")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockTxid = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/txid/" + params.index)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockRaw = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/raw")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockHeader = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/header")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockHeight = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block-height/" + params.height)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlocks = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/blocks/" + params.start_height)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlocksTipHeight = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/blocks/tip/height")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlocksTipHash = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/blocks/tip/hash")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getBlock: getBlock,
        getBlocks: getBlocks,
        getBlockStatus: getBlockStatus,
        getBlockTxs: getBlockTxs,
        getBlockTxid: getBlockTxid,
        getBlockTxids: getBlockTxids,
        getBlockRaw: getBlockRaw,
        getBlockHeader: getBlockHeader,
        getBlockHeight: getBlockHeight,
        getBlocksTipHash: getBlocksTipHash,
        getBlocksTipHeight: getBlocksTipHeight,
    };
};
exports.useBlocks = useBlocks;


/***/ }),

/***/ 41146:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useDifficulty = void 0;
var useDifficulty = function (api) {
    var getDifficultyAdjustment = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/difficulty-adjustment")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getHashrate = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/mining/hashrate/" + params.interval)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getDifficultyAdjustment: getDifficultyAdjustment,
        getHashrate: getHashrate,
    };
};
exports.useDifficulty = useDifficulty;


/***/ }),

/***/ 31994:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useFees = void 0;
var useFees = function (api) {
    var getFeesRecommended = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/fees/recommended")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getFeesMempoolBlocks = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/fees/mempool-blocks")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getCPFP = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/cpfp/" + params.txid)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getFeesRecommended: getFeesRecommended,
        getFeesMempoolBlocks: getFeesMempoolBlocks,
        getCPFP: getCPFP,
    };
};
exports.useFees = useFees;


/***/ }),

/***/ 24586:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useLightning = void 0;
var useLightning = function (api) {
    var getNetworkStats = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/statistics/latest")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getNodesInCountry = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/country/" + params.country)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getNodesStatsPerCountry = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/countries")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getNodesHostedByISP = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/isp/" + params.isp)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getISPRanking = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/isp-ranking")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getLiquidityRanking = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/rankings/liquidity")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getConnectivityRanking = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/rankings/connectivity")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getOldestNodes = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/rankings/age")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getNodeStats = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/" + params.public_key)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getHistoricalNodeStats = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/nodes/" + params.public_key + "/statistics")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getChannel = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/channels/" + params.id)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getChannelsFromTxIds = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/channels/txids?txId[]=" + params.txId.join('&txId[]='))];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getChannelsFromNodePublicKey = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/channels?public_key=" + params.public_key + "&status=" + params.status + "&index=" + (params === null || params === void 0 ? void 0 : params.index))];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getChannelsGeodata = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/channels-geo")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getChannelsGeodataByPublicKey = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/lightning/channels-geo/" + params.public_key)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getNetworkStats: getNetworkStats,
        getNodesInCountry: getNodesInCountry,
        getNodesStatsPerCountry: getNodesStatsPerCountry,
        getNodesHostedByISP: getNodesHostedByISP,
        getISPRanking: getISPRanking,
        getLiquidityRanking: getLiquidityRanking,
        getConnectivityRanking: getConnectivityRanking,
        getOldestNodes: getOldestNodes,
        getNodeStats: getNodeStats,
        getHistoricalNodeStats: getHistoricalNodeStats,
        getChannel: getChannel,
        getChannelsFromTxIds: getChannelsFromTxIds,
        getChannelsFromNodePublicKey: getChannelsFromNodePublicKey,
        getChannelsGeodata: getChannelsGeodata,
        getChannelsGeodataByPublicKey: getChannelsGeodataByPublicKey,
    };
};
exports.useLightning = useLightning;


/***/ }),

/***/ 76923:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMempool = void 0;
var useMempool = function (api) {
    var getMempool = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/mempool")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getMempoolTxids = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/mempool/txids")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getMempoolRecent = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/mempool/recent")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getMempool: getMempool,
        getMempoolTxids: getMempoolTxids,
        getMempoolRecent: getMempoolRecent,
    };
};
exports.useMempool = useMempool;


/***/ }),

/***/ 7561:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTransactions = void 0;
var useTransactions = function (api) {
    var getTx = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxStatus = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/status")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxHex = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/hex")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxRaw = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/raw")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxMerkleBlockProof = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/merkleblock-proof")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxMerkleProof = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/merkle-proof")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxOutspend = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/outspend/" + params.vout)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxOutspends = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/outspends")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var postTx = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.post("/tx", params.txhex)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getTx: getTx,
        getTxStatus: getTxStatus,
        getTxHex: getTxHex,
        getTxRaw: getTxRaw,
        getTxMerkleBlockProof: getTxMerkleBlockProof,
        getTxMerkleProof: getTxMerkleProof,
        getTxOutspend: getTxOutspend,
        getTxOutspends: getTxOutspends,
        postTx: postTx,
    };
};
exports.useTransactions = useTransactions;


/***/ }),

/***/ 50927:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useWebsocket = void 0;
var ws_client_browser_1 = __webpack_require__(91515);
var ws_client_node_1 = __webpack_require__(36653);
var useWebsocket = function (hostname, network, protocol) {
    if (!protocol) {
        (hostname === null || hostname === void 0 ? void 0 : hostname.includes('localhost')) ? protocol = 'ws' : protocol = 'wss';
    }
    else if (protocol === 'http' || protocol === 'ws') {
        protocol = 'ws';
    }
    else {
        protocol = 'wss';
    }
    if (network && ['testnet', 'signet'].includes(network)) {
        network = "/" + network;
    }
    else {
        network = '';
    }
    var wsEndpoint = protocol + "://" + hostname + network + "/api/v1/ws";
    return {
        wsInit: function () { return ws_client_node_1.wsInit(wsEndpoint); },
        wsInitBrowser: function () { return ws_client_browser_1.wsInit(wsEndpoint); },
        wsWantData: function (ws, options) { return ws_client_node_1.wsWantData(ws, options); },
        wsWantDataBrowser: function (ws, options) { return ws_client_browser_1.wsWantData(ws, options); },
        wsStopData: function (ws) { return ws_client_node_1.wsStopData(ws); },
        wsStopDataBrowser: function (ws) { return ws_client_browser_1.wsStopData(ws); },
        wsTrackAddress: function (ws, address) { return ws_client_node_1.wsTrackAddress(ws, address); },
        wsTrackAddressBrowser: function (ws, address) { return ws_client_browser_1.wsTrackAddress(ws, address); },
        wsStopTrackingAddress: function (ws) { return ws_client_node_1.wsStopTrackingAddress(ws); },
        wsStopTrackingAddressBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingAddress(ws); },
        wsTrackAddresses: function (ws, addresses) { return ws_client_node_1.wsTrackAddresses(ws, addresses); },
        wsTrackAddressesBrowser: function (ws, addresses) { return ws_client_browser_1.wsTrackAddresses(ws, addresses); },
        wsStopTrackingAddresses: function (ws) { return ws_client_node_1.wsStopTrackingAddresses(ws); },
        wsStopTrackingAddressesBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingAddresses(ws); },
        wsTrackTransaction: function (ws, txid) { return ws_client_node_1.wsTrackTransaction(ws, txid); },
        wsTrackTransactionBrowser: function (ws, txid) { return ws_client_browser_1.wsTrackTransaction(ws, txid); },
        wsStopTrackingTransaction: function (ws) { return ws_client_node_1.wsStopTrackingTransaction(ws); },
        wsStopTrackingTransactionBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingTransaction(ws); },
        wsTrackRbfSummary: function (ws) { return ws_client_node_1.wsTrackRbfSummary(ws); },
        wsTrackRbfSummaryBrowser: function (ws) { return ws_client_browser_1.wsTrackRbfSummary(ws); },
        wsStopTrackingRbfSummary: function (ws) { return ws_client_node_1.wsStopTrackingRbfSummary(ws); },
        wsStopTrackingRbfSummaryBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingRbfSummary(ws); },
        wsTrackRbf: function (ws, fullRbf) { return ws_client_node_1.wsTrackRbf(ws, fullRbf); },
        wsTrackRbfBrowser: function (ws, fullRbf) { return ws_client_browser_1.wsTrackRbf(ws, fullRbf); },
        wsStopTrackingRbf: function (ws) { return ws_client_node_1.wsStopTrackingRbf(ws); },
        wsStopTrackingRbfBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingRbf(ws); },
        wsTrackMempoolBlock: function (ws, index) { return ws_client_node_1.wsTrackMempoolBlock(ws, index); },
        wsTrackMempoolBlockBrowser: function (ws, index) { return ws_client_browser_1.wsTrackMempoolBlock(ws, index); },
        wsStopTrackingMempoolBlock: function (ws) { return ws_client_node_1.wsStopTrackingMempoolBlock(ws); },
        wsStopTrackingMempoolBlockBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingMempoolBlock(ws); },
    };
};
exports.useWebsocket = useWebsocket;


/***/ }),

/***/ 86747:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAddresses = void 0;
var useAddresses = function (api) {
    var getAddress = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/address/" + params.address)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAddressTxs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data_1, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!params.after_txid) return [3 /*break*/, 2];
                    return [4 /*yield*/, api.get("/address/" + params.address + "/txs?after_txid=" + params.after_txid)];
                case 1:
                    data_1 = (_a.sent()).data;
                    return [2 /*return*/, data_1];
                case 2: return [4 /*yield*/, api.get("/address/" + params.address + "/txs")];
                case 3:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAddressTxsChain = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/address/" + params.address + "/txs/chain")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAddressTxsMempool = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/address/" + params.address + "/txs/mempool")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAddressTxsUtxo = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/address/" + params.address + "/utxo")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getAddress: getAddress,
        getAddressTxs: getAddressTxs,
        getAddressTxsChain: getAddressTxsChain,
        getAddressTxsMempool: getAddressTxsMempool,
        getAddressTxsUtxo: getAddressTxsUtxo,
    };
};
exports.useAddresses = useAddresses;


/***/ }),

/***/ 10654:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useAssets = void 0;
var useAssets = function (api) {
    var getAsset = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/asset/" + params.asset_id)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAssetIcon = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/asset/" + params.asset_id + "/icon")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAssetTxs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var paramsMempools, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paramsMempools = params.is_mempool === true ? '/mempool' : '/chain';
                    return [4 /*yield*/, api.get("/asset/" + params.asset_id + "/txs" + paramsMempools)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAssetSupply = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var paramDecimal, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paramDecimal = params.decimal === true ? '/decimal' : '';
                    return [4 /*yield*/, api.get("/asset/" + params.asset_id + "/supply" + paramDecimal)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getAssetsIcons = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/assets/icons")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getAsset: getAsset,
        getAssetIcon: getAssetIcon,
        getAssetTxs: getAssetTxs,
        getAssetSupply: getAssetSupply,
        getAssetsIcons: getAssetsIcons,
    };
};
exports.useAssets = useAssets;


/***/ }),

/***/ 50879:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useBlocks = void 0;
var useBlocks = function (api) {
    var getBlock = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/block/" + params.hash)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockStatus = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/status")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockTxs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/txs/" + params.start_index)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockTxids = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/txids")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockTxid = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/txid/" + params.index)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockRaw = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block/" + params.hash + "/raw")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlockHeight = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/block-height/" + params.height)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlocks = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/blocks/" + params.start_height)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlocksTipHeight = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/blocks/tip/height")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getBlocksTipHash = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/blocks/tip/hash")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getBlock: getBlock,
        getBlocks: getBlocks,
        getBlockStatus: getBlockStatus,
        getBlockTxs: getBlockTxs,
        getBlockTxid: getBlockTxid,
        getBlockTxids: getBlockTxids,
        getBlockRaw: getBlockRaw,
        getBlockHeight: getBlockHeight,
        getBlocksTipHash: getBlocksTipHash,
        getBlocksTipHeight: getBlocksTipHeight,
    };
};
exports.useBlocks = useBlocks;


/***/ }),

/***/ 62350:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useFees = void 0;
var useFees = function (api) {
    var getFeesRecommended = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/fees/recommended")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getFeesMempoolBlocks = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/fees/mempool-blocks")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getCPFP = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/v1/cpfp/" + params.txid)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getFeesRecommended: getFeesRecommended,
        getFeesMempoolBlocks: getFeesMempoolBlocks,
        getCPFP: getCPFP,
    };
};
exports.useFees = useFees;


/***/ }),

/***/ 83352:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMempool = void 0;
var useMempool = function (api) {
    var getMempool = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/mempool")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getMempoolTxids = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/mempool/txids")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getMempoolRecent = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/mempool/recent")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getMempool: getMempool,
        getMempoolTxids: getMempoolTxids,
        getMempoolRecent: getMempoolRecent,
    };
};
exports.useMempool = useMempool;


/***/ }),

/***/ 15929:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTransactions = void 0;
var useTransactions = function (api) {
    var getTx = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxStatus = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/status")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxHex = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/hex")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxRaw = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/raw")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxMerkleProof = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/merkle-proof")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxOutspend = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/outspend/" + params.vout)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var getTxOutspends = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.get("/tx/" + params.txid + "/outspends")];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    var postTx = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.post("/tx", params.txhex)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); };
    return {
        getTx: getTx,
        getTxStatus: getTxStatus,
        getTxHex: getTxHex,
        getTxRaw: getTxRaw,
        getTxMerkleProof: getTxMerkleProof,
        getTxOutspend: getTxOutspend,
        getTxOutspends: getTxOutspends,
        postTx: postTx,
    };
};
exports.useTransactions = useTransactions;


/***/ }),

/***/ 74598:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useWebsocket = void 0;
var ws_client_browser_1 = __webpack_require__(91515);
var ws_client_node_1 = __webpack_require__(36653);
var useWebsocket = function (hostname, network, protocol) {
    if (!protocol) {
        (hostname === null || hostname === void 0 ? void 0 : hostname.includes('localhost')) ? protocol = 'ws' : protocol = 'wss';
    }
    else if (protocol === 'http' || protocol === 'ws') {
        protocol = 'ws';
    }
    else {
        protocol = 'wss';
    }
    if (network && ['testnet', 'liquidtestnet'].includes(network)) {
        network = "/liquidtestnet";
    }
    else {
        network = '/liquid';
    }
    var wsEndpoint = protocol + "://" + hostname + network + "/api/v1/ws";
    return {
        wsInit: function () { return ws_client_node_1.wsInit(wsEndpoint); },
        wsInitBrowser: function () { return ws_client_browser_1.wsInit(wsEndpoint); },
        wsWantData: function (ws, options) { return ws_client_node_1.wsWantData(ws, options); },
        wsWantDataBrowser: function (ws, options) { return ws_client_browser_1.wsWantData(ws, options); },
        wsStopData: function (ws) { return ws_client_node_1.wsStopData(ws); },
        wsStopDataBrowser: function (ws) { return ws_client_browser_1.wsStopData(ws); },
        wsTrackAddress: function (ws, address) { return ws_client_node_1.wsTrackAddress(ws, address); },
        wsTrackAddressBrowser: function (ws, address) { return ws_client_browser_1.wsTrackAddress(ws, address); },
        wsStopTrackingAddress: function (ws) { return ws_client_node_1.wsStopTrackingAddress(ws); },
        wsStopTrackingAddressBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingAddress(ws); },
        wsTrackAddresses: function (ws, addresses) { return ws_client_node_1.wsTrackAddresses(ws, addresses); },
        wsTrackAddressesBrowser: function (ws, addresses) { return ws_client_browser_1.wsTrackAddresses(ws, addresses); },
        wsStopTrackingAddresses: function (ws) { return ws_client_node_1.wsStopTrackingAddresses(ws); },
        wsStopTrackingAddressesBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingAddresses(ws); },
        wsTrackTransaction: function (ws, txid) { return ws_client_node_1.wsTrackTransaction(ws, txid); },
        wsTrackTransactionBrowser: function (ws, txid) { return ws_client_browser_1.wsTrackTransaction(ws, txid); },
        wsStopTrackingTransaction: function (ws) { return ws_client_node_1.wsStopTrackingTransaction(ws); },
        wsStopTrackingTransactionBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingTransaction(ws); },
        wsTrackMempoolBlock: function (ws, index) { return ws_client_node_1.wsTrackMempoolBlock(ws, index); },
        wsTrackMempoolBlockBrowser: function (ws, index) { return ws_client_browser_1.wsTrackMempoolBlock(ws, index); },
        wsStopTrackingMempoolBlock: function (ws) { return ws_client_node_1.wsStopTrackingMempoolBlock(ws); },
        wsStopTrackingMempoolBlockBrowser: function (ws) { return ws_client_browser_1.wsStopTrackingMempoolBlock(ws); },
    };
};
exports.useWebsocket = useWebsocket;


/***/ }),

/***/ 4940:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__(14068);
var addresses_1 = __webpack_require__(37268);
var blocks_1 = __webpack_require__(56462);
var difficulty_1 = __webpack_require__(41146);
var fees_1 = __webpack_require__(31994);
var lightning_1 = __webpack_require__(24586);
var mempool_1 = __webpack_require__(76923);
var transactions_1 = __webpack_require__(7561);
var websocket_1 = __webpack_require__(50927);
var assets_1 = __webpack_require__(10654);
var addresses_2 = __webpack_require__(86747);
var blocks_2 = __webpack_require__(50879);
var fees_2 = __webpack_require__(62350);
var mempool_2 = __webpack_require__(83352);
var transactions_2 = __webpack_require__(15929);
var websocket_2 = __webpack_require__(74598);
var hostnameEndpointDefault = 'mempool.space';
var networkEndpointDefault = 'main';
var mempool = function (_a) {
    var _b = _a === void 0 ? {
        hostname: hostnameEndpointDefault,
        network: networkEndpointDefault,
    } : _a, hostname = _b.hostname, network = _b.network, protocol = _b.protocol, config = _b.config;
    if (!hostname)
        hostname = hostnameEndpointDefault;
    if (!network)
        network = networkEndpointDefault;
    var apiBitcoin = index_1.makeBitcoinAPI({
        hostname: hostname,
        network: network,
        protocol: protocol,
        config: config,
    }).api;
    var apiLiquid = index_1.makeLiquidAPI({
        hostname: hostname,
        network: network,
        protocol: protocol,
        config: config,
    }).api;
    return {
        bitcoin: {
            addresses: addresses_1.useAddresses(apiBitcoin),
            blocks: blocks_1.useBlocks(apiBitcoin),
            difficulty: difficulty_1.useDifficulty(apiBitcoin),
            fees: fees_1.useFees(apiBitcoin),
            lightning: lightning_1.useLightning(apiBitcoin),
            mempool: mempool_1.useMempool(apiBitcoin),
            transactions: transactions_1.useTransactions(apiBitcoin),
            websocket: websocket_1.useWebsocket(hostname, network, protocol),
        },
        liquid: {
            addresses: addresses_2.useAddresses(apiLiquid),
            assets: assets_1.useAssets(apiLiquid),
            blocks: blocks_2.useBlocks(apiLiquid),
            fees: fees_2.useFees(apiLiquid),
            mempool: mempool_2.useMempool(apiLiquid),
            transactions: transactions_2.useTransactions(apiLiquid),
            websocket: websocket_2.useWebsocket(hostname, network, protocol),
        },
    };
};
mempool.default = mempool;
module.exports = mempool;


/***/ }),

/***/ 14068:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeLiquidAPI = exports.makeBitcoinAPI = void 0;
var axios_1 = __importDefault(__webpack_require__(81012));
var makeBitcoinAPI = function (_a) {
    var hostname = _a.hostname, network = _a.network, protocol = _a.protocol, config = _a.config;
    if (!protocol) {
        (hostname === null || hostname === void 0 ? void 0 : hostname.includes('localhost')) ? protocol = 'http' : protocol = 'https';
    }
    if (network && ['testnet', 'signet'].includes(network)) {
        network = "/" + network;
    }
    else {
        network = '';
    }
    var api = axios_1.default.create(__assign({ baseURL: protocol + "://" + hostname + network + "/api/" }, config));
    return {
        api: api,
    };
};
exports.makeBitcoinAPI = makeBitcoinAPI;
var makeLiquidAPI = function (_a) {
    var hostname = _a.hostname, network = _a.network, protocol = _a.protocol, config = _a.config;
    if (!protocol) {
        (hostname === null || hostname === void 0 ? void 0 : hostname.includes('localhost')) ? protocol = 'http' : protocol = 'https';
    }
    if (network && ['testnet', 'liquidtestnet'].includes(network)) {
        network = "/liquidtestnet";
    }
    else {
        network = '/liquid';
    }
    var api = axios_1.default.create(__assign({ baseURL: protocol + "://" + hostname + network + "/api/" }, config));
    return {
        api: api,
    };
};
exports.makeLiquidAPI = makeLiquidAPI;
exports["default"] = {
    makeBitcoinAPI: exports.makeBitcoinAPI,
    makeLiquidAPI: exports.makeLiquidAPI,
};


/***/ }),

/***/ 91515:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wsStopTrackingMempoolBlock = exports.wsTrackMempoolBlock = exports.wsStopTrackingRbf = exports.wsTrackRbf = exports.wsStopTrackingRbfSummary = exports.wsTrackRbfSummary = exports.wsStopTrackingTransaction = exports.wsTrackTransaction = exports.wsStopTrackingAddresses = exports.wsTrackAddresses = exports.wsStopTrackingAddress = exports.wsTrackAddress = exports.wsStopData = exports.wsWantData = exports.wsInit = void 0;
var TIMEOUT_DURATION = 5000;
var MAX_RETRY_COUNT = 3;
var wsActionWrapper = function (ws, action) {
    var retryCount = 0;
    var sendData = function () {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(action));
        }
        else if (retryCount < MAX_RETRY_COUNT) {
            retryCount++;
            console.log("WebSocket connection is not open. Retrying...");
            setTimeout(sendData, TIMEOUT_DURATION);
        }
        else {
            console.log("WebSocket connection is not open. Max retry count reached.");
        }
    };
    sendData();
};
var wsInit = function (endpoint) {
    var ws = new WebSocket(endpoint);
    ws.addEventListener("open", function open() {
        ws.send(JSON.stringify({ action: "init" }));
    });
    return ws;
};
exports.wsInit = wsInit;
var wsWantData = function (ws, options) {
    wsActionWrapper(ws, { action: "want", data: options });
};
exports.wsWantData = wsWantData;
var wsStopData = function (ws) {
    wsActionWrapper(ws, { action: "want", data: [] });
};
exports.wsStopData = wsStopData;
var wsTrackAddress = function (ws, address) {
    wsActionWrapper(ws, { 'track-address': address });
};
exports.wsTrackAddress = wsTrackAddress;
var wsStopTrackingAddress = function (ws) {
    wsActionWrapper(ws, { 'track-address': 'stop' });
};
exports.wsStopTrackingAddress = wsStopTrackingAddress;
var wsTrackAddresses = function (ws, addresses) {
    wsActionWrapper(ws, { 'track-addresses': addresses });
};
exports.wsTrackAddresses = wsTrackAddresses;
var wsStopTrackingAddresses = function (ws) {
    wsActionWrapper(ws, { 'track-addresses': [] });
};
exports.wsStopTrackingAddresses = wsStopTrackingAddresses;
var wsTrackTransaction = function (ws, txid) {
    wsActionWrapper(ws, { 'track-tx': txid });
};
exports.wsTrackTransaction = wsTrackTransaction;
var wsStopTrackingTransaction = function (ws) {
    wsActionWrapper(ws, { 'track-tx': 'stop' });
};
exports.wsStopTrackingTransaction = wsStopTrackingTransaction;
var wsTrackRbfSummary = function (ws) {
    wsActionWrapper(ws, { 'track-rbf-summary': true });
};
exports.wsTrackRbfSummary = wsTrackRbfSummary;
var wsStopTrackingRbfSummary = function (ws) {
    wsActionWrapper(ws, { 'track-rbf-summary': false });
};
exports.wsStopTrackingRbfSummary = wsStopTrackingRbfSummary;
var wsTrackRbf = function (ws, fullRbf) {
    if (!fullRbf) {
        wsActionWrapper(ws, { 'track-rbf': 'all' });
    }
    else {
        wsActionWrapper(ws, { 'track-rbf': 'fullRbf' });
    }
};
exports.wsTrackRbf = wsTrackRbf;
var wsStopTrackingRbf = function (ws) {
    wsActionWrapper(ws, { 'track-rbf': 'stop' });
};
exports.wsStopTrackingRbf = wsStopTrackingRbf;
var wsTrackMempoolBlock = function (ws, index) {
    wsActionWrapper(ws, { 'track-mempool-block': index });
};
exports.wsTrackMempoolBlock = wsTrackMempoolBlock;
var wsStopTrackingMempoolBlock = function (ws) {
    wsActionWrapper(ws, { 'track-mempool-block': -1 });
};
exports.wsStopTrackingMempoolBlock = wsStopTrackingMempoolBlock;


/***/ }),

/***/ 36653:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wsStopTrackingMempoolBlock = exports.wsTrackMempoolBlock = exports.wsStopTrackingRbf = exports.wsTrackRbf = exports.wsStopTrackingRbfSummary = exports.wsTrackRbfSummary = exports.wsStopTrackingTransaction = exports.wsTrackTransaction = exports.wsStopTrackingAddresses = exports.wsTrackAddresses = exports.wsStopTrackingAddress = exports.wsTrackAddress = exports.wsStopData = exports.wsWantData = exports.wsInit = void 0;
var ws_1 = __importDefault(__webpack_require__(85183));
var TIMEOUT_DURATION = 5000;
var MAX_RETRY_COUNT = 3;
var wsActionWrapper = function (ws, action) {
    var retryCount = 0;
    var sendData = function () {
        if (ws.readyState === ws_1.default.OPEN) {
            ws.send(JSON.stringify(action));
        }
        else if (retryCount < MAX_RETRY_COUNT) {
            retryCount++;
            console.log("WebSocket connection is not open. Retrying...");
            setTimeout(sendData, TIMEOUT_DURATION);
        }
        else {
            console.log("WebSocket connection is not open. Max retry count reached.");
        }
    };
    sendData();
};
var wsInit = function (endpoint) {
    var ws = new ws_1.default(endpoint);
    ws.addEventListener("open", function open() {
        ws.send(JSON.stringify({ action: "init" }));
    });
    return ws;
};
exports.wsInit = wsInit;
var wsWantData = function (ws, options) {
    wsActionWrapper(ws, { action: "want", data: options });
};
exports.wsWantData = wsWantData;
var wsStopData = function (ws) {
    wsActionWrapper(ws, { action: "want", data: [] });
};
exports.wsStopData = wsStopData;
var wsTrackAddress = function (ws, address) {
    wsActionWrapper(ws, { 'track-address': address });
};
exports.wsTrackAddress = wsTrackAddress;
var wsStopTrackingAddress = function (ws) {
    wsActionWrapper(ws, { 'track-address': 'stop' });
};
exports.wsStopTrackingAddress = wsStopTrackingAddress;
var wsTrackAddresses = function (ws, addresses) {
    wsActionWrapper(ws, { 'track-addresses': addresses });
};
exports.wsTrackAddresses = wsTrackAddresses;
var wsStopTrackingAddresses = function (ws) {
    wsActionWrapper(ws, { 'track-addresses': [] });
};
exports.wsStopTrackingAddresses = wsStopTrackingAddresses;
var wsTrackTransaction = function (ws, txid) {
    wsActionWrapper(ws, { 'track-tx': txid });
};
exports.wsTrackTransaction = wsTrackTransaction;
var wsStopTrackingTransaction = function (ws) {
    wsActionWrapper(ws, { 'track-tx': 'stop' });
};
exports.wsStopTrackingTransaction = wsStopTrackingTransaction;
var wsTrackRbfSummary = function (ws) {
    wsActionWrapper(ws, { 'track-rbf-summary': true });
};
exports.wsTrackRbfSummary = wsTrackRbfSummary;
var wsStopTrackingRbfSummary = function (ws) {
    wsActionWrapper(ws, { 'track-rbf-summary': false });
};
exports.wsStopTrackingRbfSummary = wsStopTrackingRbfSummary;
var wsTrackRbf = function (ws, fullRbf) {
    if (!fullRbf) {
        wsActionWrapper(ws, { 'track-rbf': 'all' });
    }
    else {
        wsActionWrapper(ws, { 'track-rbf': 'fullRbf' });
    }
};
exports.wsTrackRbf = wsTrackRbf;
var wsStopTrackingRbf = function (ws) {
    wsActionWrapper(ws, { 'track-rbf': 'stop' });
};
exports.wsStopTrackingRbf = wsStopTrackingRbf;
var wsTrackMempoolBlock = function (ws, index) {
    wsActionWrapper(ws, { 'track-mempool-block': index });
};
exports.wsTrackMempoolBlock = wsTrackMempoolBlock;
var wsStopTrackingMempoolBlock = function (ws) {
    wsActionWrapper(ws, { 'track-mempool-block': -1 });
};
exports.wsStopTrackingMempoolBlock = wsStopTrackingMempoolBlock;


/***/ }),

/***/ 33737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/responsiveObserver.js
var responsiveObserver = __webpack_require__(76834);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(83756);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(72530);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/grid/hooks/useBreakpoint.js
var useBreakpoint = __webpack_require__(92873);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/constant.js
const DEFAULT_COLUMN_MAP = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
/* harmony default export */ var constant = (DEFAULT_COLUMN_MAP);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/DescriptionsContext.js

const DescriptionsContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var descriptions_DescriptionsContext = (DescriptionsContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(48894);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/hooks/useItems.js
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
    return Object.assign(Object.assign({}, restItem), {
      span: typeof span === 'number' ? span : (0,responsiveObserver/* matchScreen */.m9)(screens, span)
    });
  }), [mergedItems, screens]);
  return responsiveItems;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/hooks/useRow.js


function getFilledItem(rowItem, rowRestCol, span) {
  let clone = rowItem;
  let exceed = false;
  if (span === undefined || span > rowRestCol) {
    clone = Object.assign(Object.assign({}, rowItem), {
      span: rowRestCol
    });
    exceed = span !== undefined;
  }
  return [clone, exceed];
}
// Calculate the sum of span in a row
function getCalcRows(rowItems, mergedColumn) {
  const rows = [];
  let tmpRow = [];
  let rowRestCol = mergedColumn;
  let exceed = false;
  rowItems.filter(n => n).forEach((rowItem, index) => {
    const span = rowItem === null || rowItem === void 0 ? void 0 : rowItem.span;
    const mergedSpan = span || 1;
    // Additional handle last one
    if (index === rowItems.length - 1) {
      const [item, itemExceed] = getFilledItem(rowItem, rowRestCol, span);
      exceed = exceed || itemExceed;
      tmpRow.push(item);
      rows.push(tmpRow);
      return;
    }
    if (mergedSpan < rowRestCol) {
      rowRestCol -= mergedSpan;
      tmpRow.push(rowItem);
    } else {
      const [item, itemExceed] = getFilledItem(rowItem, rowRestCol, mergedSpan);
      exceed = exceed || itemExceed;
      tmpRow.push(item);
      rows.push(tmpRow);
      rowRestCol = mergedColumn;
      tmpRow = [];
    }
  });
  return [rows, exceed];
}
const useRow = (mergedColumn, items) => {
  const [rows, exceed] = (0,react.useMemo)(() => getCalcRows(items, mergedColumn), [items, mergedColumn]);
  if (false) {}
  return rows;
};
/* harmony default export */ var hooks_useRow = (useRow);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/Item.js
const DescriptionsItem = _ref => {
  let {
    children
  } = _ref;
  return children;
};
/* harmony default export */ var Item = (DescriptionsItem);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/Cell.js
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
    type
  } = props;
  const Component = component;
  if (bordered) {
    return /*#__PURE__*/react.createElement(Component, {
      className: classnames_default()({
        [`${itemPrefixCls}-item-label`]: type === 'label',
        [`${itemPrefixCls}-item-content`]: type === 'content'
      }, className),
      style: style,
      colSpan: span
    }, notEmpty(label) && /*#__PURE__*/react.createElement("span", {
      style: labelStyle
    }, label), notEmpty(content) && /*#__PURE__*/react.createElement("span", {
      style: contentStyle
    }, content));
  }
  return /*#__PURE__*/react.createElement(Component, {
    className: classnames_default()(`${itemPrefixCls}-item`, className),
    style: style,
    colSpan: span
  }, /*#__PURE__*/react.createElement("div", {
    className: `${itemPrefixCls}-item-container`
  }, (label || label === 0) && (/*#__PURE__*/react.createElement("span", {
    className: classnames_default()(`${itemPrefixCls}-item-label`, {
      [`${itemPrefixCls}-item-no-colon`]: !colon
    }),
    style: labelStyle
  }, label)), (content || content === 0) && (/*#__PURE__*/react.createElement("span", {
    className: classnames_default()(`${itemPrefixCls}-item-content`),
    style: contentStyle
  }, content))));
};
/* harmony default export */ var descriptions_Cell = (Cell);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/Row.js
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
    contentStyle: rootContentStyle
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
      key
    } = _ref3;
    if (typeof component === 'string') {
      return /*#__PURE__*/react.createElement(descriptions_Cell, {
        key: `${type}-${key || index}`,
        className: className,
        style: style,
        labelStyle: Object.assign(Object.assign({}, rootLabelStyle), labelStyle),
        contentStyle: Object.assign(Object.assign({}, rootContentStyle), contentStyle),
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
      style: Object.assign(Object.assign(Object.assign({}, rootLabelStyle), style), labelStyle),
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
      style: Object.assign(Object.assign(Object.assign({}, rootContentStyle), style), contentStyle),
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.21.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 39 modules
var es = __webpack_require__(20693);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(13587);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(61372);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(53557);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/style/index.js



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
        color: token.colorTextTertiary,
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.21.4_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/descriptions/index.js
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
      items
    } = props,
    restProps = descriptions_rest(props, ["prefixCls", "title", "extra", "column", "colon", "bordered", "layout", "children", "className", "rootClassName", "style", "size", "labelStyle", "contentStyle", "items"]);
  const {
    getPrefixCls,
    direction,
    descriptions
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('descriptions', customizePrefixCls);
  const screens = (0,useBreakpoint/* default */.Z)();
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
    contentStyle
  }), [labelStyle, contentStyle]);
  return wrapCSSVar(/*#__PURE__*/react.createElement(descriptions_DescriptionsContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement("div", Object.assign({
    className: classnames_default()(prefixCls, descriptions === null || descriptions === void 0 ? void 0 : descriptions.className, {
      [`${prefixCls}-${mergedSize}`]: mergedSize && mergedSize !== 'default',
      [`${prefixCls}-bordered`]: !!bordered,
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, className, rootClassName, hashId, cssVarCls),
    style: Object.assign(Object.assign({}, descriptions === null || descriptions === void 0 ? void 0 : descriptions.style), style)
  }, restProps), (title || extra) && (/*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-header`
  }, title && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-title`
  }, title), extra && /*#__PURE__*/react.createElement("div", {
    className: `${prefixCls}-extra`
  }, extra))), /*#__PURE__*/react.createElement("div", {
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

/***/ }),

/***/ 92873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75271);
/* harmony import */ var rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50979);
/* harmony import */ var _util_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32537);
/* harmony import */ var _util_responsiveObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76834);
"use client";





function useBreakpoint() {
  let refreshOnChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  const screensRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const forceUpdate = (0,_util_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const responsiveObserver = (0,_util_responsiveObserver__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
  (0,rc_util_es_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(() => {
    const token = responsiveObserver.subscribe(supportScreens => {
      screensRef.current = supportScreens;
      if (refreshOnChange) {
        forceUpdate();
      }
    });
    return () => responsiveObserver.unsubscribe(token);
  }, []);
  return screensRef.current;
}
/* harmony default export */ __webpack_exports__.Z = (useBreakpoint);

/***/ }),

/***/ 62518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

"use strict";
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

"use strict";
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

/***/ }),

/***/ 97148:
/***/ (function(module) {

!function(r,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(r,e,t){r=r||{};var n=e.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(r,e,t,o){return n.fromToBase(r,e,t,o)}t.en.relativeTime=o,n.fromToBase=function(e,n,i,d,u){for(var f,a,s,l=i.$locale().relativeTime||o,h=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,c=0;c<m;c+=1){var y=h[c];y.d&&(f=d?t(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var p=(r.rounding||Math.round)(Math.abs(f));if(s=f>0,p<=y.r||!y.r){p<=1&&c>0&&(y=h[c-1]);var v=l[y.l];u&&(p=u(""+p)),a="string"==typeof v?v.replace("%d",p):v(p,n,y.l,s);break}}if(n)return a;var M=s?l.future:l.past;return"function"==typeof M?M(a):M.replace("%s",a)},n.to=function(r,e){return i(r,e,this,!0)},n.from=function(r,e){return i(r,e,this)};var d=function(r){return r.$u?t.utc():t()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)}}}));

/***/ }),

/***/ 85183:
/***/ (function(module) {

"use strict";


module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};


/***/ }),

/***/ 81012:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(14224);
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];
// Axios v1.7.4 Copyright (c) 2024 Matt Zabriskie and contributors


var _asyncToGenerator = (__webpack_require__(87999)["default"]);
var _regeneratorRuntime = (__webpack_require__(90228)["default"]);
var _toConsumableArray = (__webpack_require__(15558)["default"]);
var _toArray = (__webpack_require__(57724)["default"]);
var _defineProperty = (__webpack_require__(82092)["default"]);
var _createForOfIteratorHelper = (__webpack_require__(335)["default"]);
var _objectSpread = (__webpack_require__(26068)["default"]);
var _classCallCheck = (__webpack_require__(25298)["default"]);
var _createClass = (__webpack_require__(17069)["default"]);
var _slicedToArray = (__webpack_require__(48305)["default"]);
var _typeof = (__webpack_require__(31759)["default"]);
var _wrapAsyncGenerator = (__webpack_require__(24661)["default"]);
var _awaitAsyncGenerator = (__webpack_require__(34067)["default"]);
var _asyncGeneratorDelegate = (__webpack_require__(56751)["default"]);
var _asyncIterator = (__webpack_require__(75487)["default"]);
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;
var getPrototypeOf = Object.getPrototypeOf;
var kindOf = function (cache) {
  return function (thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(Object.create(null));
var kindOfTest = function kindOfTest(type) {
  type = type.toLowerCase();
  return function (thing) {
    return kindOf(thing) === type;
  };
};
var typeOfTest = function typeOfTest(type) {
  return function (thing) {
    return _typeof(thing) === type;
  };
};

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
var isArray = Array.isArray;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
var isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
var isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
var isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
var isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
var isObject = function isObject(thing) {
  return thing !== null && _typeof(thing) === 'object';
};

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
var isBoolean = function isBoolean(thing) {
  return thing === true || thing === false;
};

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
var isPlainObject = function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }
  var prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
var isStream = function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
};

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
var isFormData = function isFormData(thing) {
  var kind;
  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');
var _map = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest),
  _map2 = _slicedToArray(_map, 4),
  isReadableStream = _map2[0],
  isRequest = _map2[1],
  isResponse = _map2[2],
  isHeaders = _map2[3];

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
var trim = function trim(str) {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref2$allOwnKeys = _ref2.allOwnKeys,
    allOwnKeys = _ref2$allOwnKeys === void 0 ? false : _ref2$allOwnKeys;
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  var i;
  var l;

  // Force an array if not already something iterable
  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    var keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var len = keys.length;
    var key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  var keys = Object.keys(obj);
  var i = keys.length;
  var _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = function () {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : __webpack_require__.g;
}();
var isContextDefined = function isContextDefined(context) {
  return !isUndefined(context) && context !== _global;
};

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  var _ref3 = isContextDefined(this) && this || {},
    caseless = _ref3.caseless;
  var result = {};
  var assignValue = function assignValue(val, key) {
    var targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (var i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
var extend = function extend(a, b, thisArg) {
  var _ref4 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    allOwnKeys = _ref4.allOwnKeys;
  forEach(b, function (val, key) {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys: allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
var stripBOM = function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
var inherits = function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
var toFlatObject = function toFlatObject(sourceObj, destObj, filter, propFilter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
var endsWith = function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
var toArray = function toArray(thing) {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  var i = thing.length;
  if (!isNumber(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
var isTypedArray = function (TypedArray) {
  // eslint-disable-next-line func-names
  return function (thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
var forEachEntry = function forEachEntry(obj, fn) {
  var generator = obj && obj[Symbol.iterator];
  var iterator = generator.call(obj);
  var result;
  while ((result = iterator.next()) && !result.done) {
    var pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
var matchAll = function matchAll(regExp, str) {
  var matches;
  var arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
var isHTMLForm = kindOfTest('HTMLFormElement');
var toCamelCase = function toCamelCase(str) {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
var hasOwnProperty = function (_ref5) {
  var hasOwnProperty = _ref5.hasOwnProperty;
  return function (obj, prop) {
    return hasOwnProperty.call(obj, prop);
  };
}(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
var isRegExp = kindOfTest('RegExp');
var reduceDescriptors = function reduceDescriptors(obj, reducer) {
  var descriptors = Object.getOwnPropertyDescriptors(obj);
  var reducedDescriptors = {};
  forEach(descriptors, function (descriptor, name) {
    var ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

var freezeMethods = function freezeMethods(obj) {
  reduceDescriptors(obj, function (descriptor, name) {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    var value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = function () {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
  var obj = {};
  var define = function define(arr) {
    arr.forEach(function (value) {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = function noop() {};
var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
var ALPHA = 'abcdefghijklmnopqrstuvwxyz';
var DIGIT = '0123456789';
var ALPHABET = {
  DIGIT: DIGIT,
  ALPHA: ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = function generateString() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var alphabet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ALPHABET.ALPHA_DIGIT;
  var str = '';
  var length = alphabet.length;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
var toJSONObject = function toJSONObject(obj) {
  var stack = new Array(10);
  var visit = function visit(source, i) {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        var target = isArray(source) ? [] : {};
        forEach(source, function (value, key) {
          var reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest('AsyncFunction');
var isThenable = function isThenable(thing) {
  return thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing["catch"]);
};

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

var _setImmediate = function (setImmediateSupported, postMessageSupported) {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? function (token, callbacks) {
    _global.addEventListener("message", function (_ref6) {
      var source = _ref6.source,
        data = _ref6.data;
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return function (cb) {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  }("axios@".concat(Math.random()), []) : function (cb) {
    return setTimeout(cb);
  };
}(typeof setImmediate === 'function', isFunction(_global.postMessage));
var asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof process !== 'undefined' && process.nextTick || _setImmediate;

// *********************

var utils$1 = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isBoolean: isBoolean,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isReadableStream: isReadableStream,
  isRequest: isRequest,
  isResponse: isResponse,
  isHeaders: isHeaders,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isRegExp: isRegExp,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isTypedArray: isTypedArray,
  isFileList: isFileList,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  forEachEntry: forEachEntry,
  matchAll: matchAll,
  isHTMLForm: isHTMLForm,
  hasOwnProperty: hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: reduceDescriptors,
  freezeMethods: freezeMethods,
  toObjectSet: toObjectSet,
  toCamelCase: toCamelCase,
  noop: noop,
  toFiniteNumber: toFiniteNumber,
  findKey: findKey,
  global: _global,
  isContextDefined: isContextDefined,
  ALPHABET: ALPHABET,
  generateString: generateString,
  isSpecCompliantForm: isSpecCompliantForm,
  toJSONObject: toJSONObject,
  isAsyncFn: isAsyncFn,
  isThenable: isThenable,
  setImmediate: _setImmediate,
  asap: asap
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils$1.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$1.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype$1 = AxiosError.prototype;
var descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(function (code) {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = function (error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype$1);
  utils$1.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, function (prop) {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  // eslint-disable-next-line no-param-reassign
  options = utils$1.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils$1.isUndefined(source[option]);
  });
  var metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  var visitor = options.visitor || defaultVisitor;
  var dots = options.dots;
  var indexes = options.indexes;
  var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  var useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    var arr = value;
    if (value && !path && _typeof(value) === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  var stack = [];
  var exposedHelpers = Object.assign(predicates, {
    defaultVisitor: defaultVisitor,
    convertValue: convertValue,
    isVisitable: isVisitable
  });
  function build(value, path) {
    if (utils$1.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      var result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  var charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
var prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  var _encode = encoder ? function (value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  var _encode = options && options.encode || encode;
  var serializeFn = options && options.serialize;
  var serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}
var InterceptorManager = /*#__PURE__*/function () {
  function InterceptorManager() {
    _classCallCheck(this, InterceptorManager);
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  _createClass(InterceptorManager, [{
    key: "use",
    value: function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
  }, {
    key: "eject",
    value: function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }

    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
  }, {
    key: "clear",
    value: function clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
  }, {
    key: "forEach",
    value: function forEach(fn) {
      utils$1.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }]);
  return InterceptorManager;
}();
var InterceptorManager$1 = InterceptorManager;
var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;
var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;
var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;
var platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};
var hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
var hasStandardBrowserEnv = function (product) {
  return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0;
}(typeof navigator !== 'undefined' && navigator.product);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
var hasStandardBrowserWebWorkerEnv = function () {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
}();
var origin = hasBrowserEnv && window.location.href || 'http://localhost';
var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv,
  origin: origin
});
var platform = _objectSpread(_objectSpread({}, utils), platform$1);
function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function visitor(value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  var obj = {};
  var keys = Object.keys(arr);
  var i;
  var len = keys.length;
  var key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    var name = path[index++];
    if (name === '__proto__') return true;
    var isNumericKey = Number.isFinite(+name);
    var isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    var result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    var obj = {};
    utils$1.forEachEntry(formData, function (name, value) {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitionalDefaults,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [function transformRequest(data, headers) {
    var contentType = headers.getContentType() || '';
    var hasJSONContentType = contentType.indexOf('application/json') > -1;
    var isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    var isFormData = utils$1.isFormData(data);
    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    var isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        var _FormData = this.env && this.env.FormData;
        return toFormData(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var JSONRequested = this.responseType === 'json';
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};
utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], function (method) {
  defaults.headers[method] = {};
});
var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = utils$1.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(rawHeaders) {
  var parsed = {};
  var key;
  var val;
  var i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
};
var $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  var tokens = Object.create(null);
  var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  var match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = function isValidHeaderName(str) {
  return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
};
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (w, _char, str) {
    return _char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  var accessorName = utils$1.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(function (methodName) {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function value(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = /*#__PURE__*/function (_Symbol$iterator, _Symbol$toStringTag) {
  function AxiosHeaders(headers) {
    _classCallCheck(this, AxiosHeaders);
    headers && this.set(headers);
  }
  _createClass(AxiosHeaders, [{
    key: "set",
    value: function set(header, valueOrRewrite, rewrite) {
      var self = this;
      function setHeader(_value, _header, _rewrite) {
        var lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error('header name must be a non-empty string');
        }
        var key = utils$1.findKey(self, lHeader);
        if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
          self[key || _header] = normalizeValue(_value);
        }
      }
      var setHeaders = function setHeaders(headers, _rewrite) {
        return utils$1.forEach(headers, function (_value, _header) {
          return setHeader(_value, _header, _rewrite);
        });
      };
      if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else if (utils$1.isHeaders(header)) {
        var _iterator2 = _createForOfIteratorHelper(header.entries()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
              key = _step2$value[0],
              value = _step2$value[1];
            setHeader(value, key, rewrite);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
  }, {
    key: "get",
    value: function get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        var key = utils$1.findKey(this, header);
        if (key) {
          var value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils$1.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils$1.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
  }, {
    key: "has",
    value: function has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        var key = utils$1.findKey(this, header);
        return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
  }, {
    key: "delete",
    value: function _delete(header, matcher) {
      var self = this;
      var deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          var key = utils$1.findKey(self, _header);
          if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
            delete self[key];
            deleted = true;
          }
        }
      }
      if (utils$1.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
  }, {
    key: "clear",
    value: function clear(matcher) {
      var keys = Object.keys(this);
      var i = keys.length;
      var deleted = false;
      while (i--) {
        var key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
  }, {
    key: "normalize",
    value: function normalize(format) {
      var self = this;
      var headers = {};
      utils$1.forEach(this, function (value, header) {
        var key = utils$1.findKey(headers, header);
        if (key) {
          self[key] = normalizeValue(value);
          delete self[header];
          return;
        }
        var normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self[header];
        }
        self[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this$constructor;
      for (var _len = arguments.length, targets = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        targets[_key2] = arguments[_key2];
      }
      return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(targets));
    }
  }, {
    key: "toJSON",
    value: function toJSON(asStrings) {
      var obj = Object.create(null);
      utils$1.forEach(this, function (value, header) {
        value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
      });
      return obj;
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
  }, {
    key: "toString",
    value: function toString() {
      return Object.entries(this.toJSON()).map(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
          header = _ref8[0],
          value = _ref8[1];
        return header + ': ' + value;
      }).join('\n');
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return 'AxiosHeaders';
    }
  }], [{
    key: "from",
    value: function from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
  }, {
    key: "concat",
    value: function concat(first) {
      var computed = new this(first);
      for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
        targets[_key3 - 1] = arguments[_key3];
      }
      targets.forEach(function (target) {
        return computed.set(target);
      });
      return computed;
    }
  }, {
    key: "accessor",
    value: function accessor(header) {
      var internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      var accessors = internals.accessors;
      var prototype = this.prototype;
      function defineAccessor(_header) {
        var lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype, _header);
          accessors[lHeader] = true;
        }
      }
      utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }]);
  return AxiosHeaders;
}(Symbol.iterator, Symbol.toStringTag);
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, function (_ref9, key) {
  var value = _ref9.value;
  var mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: function get() {
      return value;
    },
    set: function set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders);
var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  var config = this || defaults$1;
  var context = response || config;
  var headers = AxiosHeaders$1.from(context.headers);
  var data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
utils$1.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}
function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  var bytes = new Array(samplesCount);
  var timestamps = new Array(samplesCount);
  var head = 0;
  var tail = 0;
  var firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    var now = Date.now();
    var startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    var i = tail;
    var bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    var passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  var timestamp = 0;
  var threshold = 1000 / freq;
  var lastArgs;
  var timer;
  var invoke = function invoke(args) {
    var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  var throttled = function throttled() {
    var now = Date.now();
    var passed = now - timestamp;
    for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
      args[_key4] = arguments[_key4];
    }
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(function () {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  var flush = function flush() {
    return lastArgs && invoke(lastArgs);
  };
  return [throttled, flush];
}
var progressEventReducer = function progressEventReducer(listener, isDownloadStream) {
  var freq = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var bytesNotified = 0;
  var _speedometer = speedometer(50, 250);
  return throttle(function (e) {
    var loaded = e.loaded;
    var total = e.lengthComputable ? e.total : undefined;
    var progressBytes = loaded - bytesNotified;
    var rate = _speedometer(progressBytes);
    var inRange = loaded <= total;
    bytesNotified = loaded;
    var data = _defineProperty({
      loaded: loaded,
      total: total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null
    }, isDownloadStream ? 'download' : 'upload', true);
    listener(data);
  }, freq);
};
var progressEventDecorator = function progressEventDecorator(total, throttled) {
  var lengthComputable = total != null;
  return [function (loaded) {
    return throttled[0]({
      lengthComputable: lengthComputable,
      total: total,
      loaded: loaded
    });
  }, throttled[1]];
};
var asyncDecorator = function asyncDecorator(fn) {
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
      args[_key5] = arguments[_key5];
    }
    return utils$1.asap(function () {
      return fn.apply(void 0, args);
    });
  };
};
var isURLSameOrigin = platform.hasStandardBrowserEnv ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover its components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils$1.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();
var cookies = platform.hasStandardBrowserEnv ?
// Standard browser envs support document.cookie
{
  write: function write(name, value, expires, path, domain, secure) {
    var cookie = [name + '=' + encodeURIComponent(value)];
    utils$1.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
    utils$1.isString(path) && cookie.push('path=' + path);
    utils$1.isString(domain) && cookie.push('domain=' + domain);
    secure === true && cookie.push('secure');
    document.cookie = cookie.join('; ');
  },
  read: function read(name) {
    var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  },
  remove: function remove(name) {
    this.write(name, '', Date.now() - 86400000);
  }
} :
// Non-standard browser env (web workers, react-native) lack needed support.
{
  write: function write() {},
  read: function read() {
    return null;
  },
  remove: function remove() {}
};

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
var headersToObject = function headersToObject(thing) {
  return thing instanceof AxiosHeaders$1 ? _objectSpread({}, thing) : thing;
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({
        caseless: caseless
      }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  var mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: function headers(a, b) {
      return mergeDeepProperties(headersToObject(a), headersToObject(b), true);
    }
  };
  utils$1.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(config1[prop], config2[prop], prop);
    utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}
var resolveConfig = function resolveConfig(config) {
  var newConfig = mergeConfig({}, config);
  var data = newConfig.data,
    withXSRFToken = newConfig.withXSRFToken,
    xsrfHeaderName = newConfig.xsrfHeaderName,
    xsrfCookieName = newConfig.xsrfCookieName,
    headers = newConfig.headers,
    auth = newConfig.auth;
  newConfig.headers = headers = AxiosHeaders$1.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
  }
  var contentType;
  if (utils$1.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      var _ref10 = contentType ? contentType.split(';').map(function (token) {
          return token.trim();
        }).filter(Boolean) : [],
        _ref11 = _toArray(_ref10),
        type = _ref11[0],
        tokens = _ref11.slice(1);
      headers.setContentType([type || 'multipart/form-data'].concat(_toConsumableArray(tokens)).join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$1.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
      // Add xsrf header
      var xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var _config = resolveConfig(config);
    var requestData = _config.data;
    var requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    var responseType = _config.responseType,
      onUploadProgress = _config.onUploadProgress,
      onDownloadProgress = _config.onDownloadProgress;
    var onCanceled;
    var uploadThrottled, downloadThrottled;
    var flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }
    var request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = AxiosHeaders$1.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      var _progressEventReducer = progressEventReducer(onDownloadProgress, true);
      var _progressEventReducer2 = _slicedToArray(_progressEventReducer, 2);
      downloadThrottled = _progressEventReducer2[0];
      flushDownload = _progressEventReducer2[1];
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      var _progressEventReducer3 = progressEventReducer(onUploadProgress);
      var _progressEventReducer4 = _slicedToArray(_progressEventReducer3, 2);
      uploadThrottled = _progressEventReducer4[0];
      flushUpload = _progressEventReducer4[1];
      request.upload.addEventListener('progress', uploadThrottled);
      request.upload.addEventListener('loadend', flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function onCanceled(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }
    var protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
};
var composeSignals = function composeSignals(signals, timeout) {
  var controller = new AbortController();
  var aborted;
  var onabort = function onabort(cancel) {
    if (!aborted) {
      aborted = true;
      unsubscribe();
      var err = cancel instanceof Error ? cancel : this.reason;
      controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
    }
  };
  var timer = timeout && setTimeout(function () {
    onabort(new AxiosError("timeout ".concat(timeout, " of ms exceeded"), AxiosError.ETIMEDOUT));
  }, timeout);
  var unsubscribe = function unsubscribe() {
    if (signals) {
      timer && clearTimeout(timer);
      timer = null;
      signals.forEach(function (signal) {
        signal && (signal.removeEventListener ? signal.removeEventListener('abort', onabort) : signal.unsubscribe(onabort));
      });
      signals = null;
    }
  };
  signals.forEach(function (signal) {
    return signal && signal.addEventListener && signal.addEventListener('abort', onabort);
  });
  var signal = controller.signal;
  signal.unsubscribe = unsubscribe;
  return [signal, function () {
    timer && clearTimeout(timer);
    timer = null;
  }];
};
var composeSignals$1 = composeSignals;
var streamChunk = /*#__PURE__*/_regeneratorRuntime().mark(function streamChunk(chunk, chunkSize) {
  var len, pos, end;
  return _regeneratorRuntime().wrap(function streamChunk$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        len = chunk.byteLength;
        if (!(!chunkSize || len < chunkSize)) {
          _context.next = 5;
          break;
        }
        _context.next = 4;
        return chunk;
      case 4:
        return _context.abrupt("return");
      case 5:
        pos = 0;
      case 6:
        if (!(pos < len)) {
          _context.next = 13;
          break;
        }
        end = pos + chunkSize;
        _context.next = 10;
        return chunk.slice(pos, end);
      case 10:
        pos = end;
        _context.next = 6;
        break;
      case 13:
      case "end":
        return _context.stop();
    }
  }, streamChunk);
});
var readBytes = /*#__PURE__*/function () {
  var _ref = _wrapAsyncGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(iterable, chunkSize, encode) {
    var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _iteratorAbruptCompletion = false;
          _didIteratorError = false;
          _context2.prev = 2;
          _iterator = _asyncIterator(iterable);
        case 4:
          _context2.next = 6;
          return _awaitAsyncGenerator(_iterator.next());
        case 6:
          if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
            _context2.next = 27;
            break;
          }
          chunk = _step.value;
          _context2.t0 = _asyncGeneratorDelegate;
          _context2.t1 = _asyncIterator;
          _context2.t2 = streamChunk;
          if (!ArrayBuffer.isView(chunk)) {
            _context2.next = 15;
            break;
          }
          _context2.t3 = chunk;
          _context2.next = 18;
          break;
        case 15:
          _context2.next = 17;
          return _awaitAsyncGenerator(encode(String(chunk)));
        case 17:
          _context2.t3 = _context2.sent;
        case 18:
          _context2.t4 = _context2.t3;
          _context2.t5 = chunkSize;
          _context2.t6 = (0, _context2.t2)(_context2.t4, _context2.t5);
          _context2.t7 = (0, _context2.t1)(_context2.t6);
          _context2.t8 = _awaitAsyncGenerator;
          return _context2.delegateYield((0, _context2.t0)(_context2.t7, _context2.t8), "t9", 24);
        case 24:
          _iteratorAbruptCompletion = false;
          _context2.next = 4;
          break;
        case 27:
          _context2.next = 33;
          break;
        case 29:
          _context2.prev = 29;
          _context2.t10 = _context2["catch"](2);
          _didIteratorError = true;
          _iteratorError = _context2.t10;
        case 33:
          _context2.prev = 33;
          _context2.prev = 34;
          if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
            _context2.next = 38;
            break;
          }
          _context2.next = 38;
          return _awaitAsyncGenerator(_iterator["return"]());
        case 38:
          _context2.prev = 38;
          if (!_didIteratorError) {
            _context2.next = 41;
            break;
          }
          throw _iteratorError;
        case 41:
          return _context2.finish(38);
        case 42:
          return _context2.finish(33);
        case 43:
        case "end":
          return _context2.stop();
      }
    }, _callee, null, [[2, 29, 33, 43], [34,, 38, 42]]);
  }));
  return function readBytes(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var trackStream = function trackStream(stream, chunkSize, onProgress, onFinish, encode) {
  var iterator = readBytes(stream, chunkSize, encode);
  var bytes = 0;
  var done;
  var _onFinish = function _onFinish(e) {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    pull: function pull(controller) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$iterator$next, _done, value, len, loadedBytes;
        return _regeneratorRuntime().wrap(function _callee2$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return iterator.next();
            case 3:
              _yield$iterator$next = _context3.sent;
              _done = _yield$iterator$next.done;
              value = _yield$iterator$next.value;
              if (!_done) {
                _context3.next = 10;
                break;
              }
              _onFinish();
              controller.close();
              return _context3.abrupt("return");
            case 10:
              len = value.byteLength;
              if (onProgress) {
                loadedBytes = bytes += len;
                onProgress(loadedBytes);
              }
              controller.enqueue(new Uint8Array(value));
              _context3.next = 19;
              break;
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](0);
              _onFinish(_context3.t0);
              throw _context3.t0;
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee2, null, [[0, 15]]);
      }))();
    },
    cancel: function cancel(reason) {
      _onFinish(reason);
      return iterator["return"]();
    }
  }, {
    highWaterMark: 2
  });
};
var isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
var encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? function (encoder) {
  return function (str) {
    return encoder.encode(str);
  };
}(new TextEncoder()) : ( /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(str) {
    return _regeneratorRuntime().wrap(function _callee3$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.t0 = Uint8Array;
          _context4.next = 3;
          return new Response(str).arrayBuffer();
        case 3:
          _context4.t1 = _context4.sent;
          return _context4.abrupt("return", new _context4.t0(_context4.t1));
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee3);
  }));
  return function (_x4) {
    return _ref12.apply(this, arguments);
  };
}()));
var test = function test(fn) {
  try {
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key6 = 1; _key6 < _len5; _key6++) {
      args[_key6 - 1] = arguments[_key6];
    }
    return !!fn.apply(void 0, args);
  } catch (e) {
    return false;
  }
};
var supportsRequestStream = isReadableStreamSupported && test(function () {
  var duplexAccessed = false;
  var hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    }
  }).headers.has('Content-Type');
  return duplexAccessed && !hasContentType;
});
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var supportsResponseStream = isReadableStreamSupported && test(function () {
  return utils$1.isReadableStream(new Response('').body);
});
var resolvers = {
  stream: supportsResponseStream && function (res) {
    return res.body;
  }
};
isFetchSupported && function (res) {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(function (type) {
    !resolvers[type] && (resolvers[type] = utils$1.isFunction(res[type]) ? function (res) {
      return res[type]();
    } : function (_, config) {
      throw new AxiosError("Response type '".concat(type, "' is not supported"), AxiosError.ERR_NOT_SUPPORT, config);
    });
  });
}(new Response());
var getBodyLength = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(body) {
    return _regeneratorRuntime().wrap(function _callee4$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(body == null)) {
            _context5.next = 2;
            break;
          }
          return _context5.abrupt("return", 0);
        case 2:
          if (!utils$1.isBlob(body)) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", body.size);
        case 4:
          if (!utils$1.isSpecCompliantForm(body)) {
            _context5.next = 8;
            break;
          }
          _context5.next = 7;
          return new Request(body).arrayBuffer();
        case 7:
          return _context5.abrupt("return", _context5.sent.byteLength);
        case 8:
          if (!(utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body))) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", body.byteLength);
        case 10:
          if (utils$1.isURLSearchParams(body)) {
            body = body + '';
          }
          if (!utils$1.isString(body)) {
            _context5.next = 15;
            break;
          }
          _context5.next = 14;
          return encodeText(body);
        case 14:
          return _context5.abrupt("return", _context5.sent.byteLength);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee4);
  }));
  return function getBodyLength(_x5) {
    return _ref13.apply(this, arguments);
  };
}();
var resolveBodyLength = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(headers, body) {
    var length;
    return _regeneratorRuntime().wrap(function _callee5$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          length = utils$1.toFiniteNumber(headers.getContentLength());
          return _context6.abrupt("return", length == null ? getBodyLength(body) : length);
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee5);
  }));
  return function resolveBodyLength(_x6, _x7) {
    return _ref14.apply(this, arguments);
  };
}();
var fetchAdapter = isFetchSupported && ( /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(config) {
    var _resolveConfig, url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, _resolveConfig$withCr, withCredentials, fetchOptions, _ref16, _ref17, composedSignal, stopTimeout, finished, request, onFinish, requestContentLength, _request, contentTypeHeader, _progressEventDecorat, _progressEventDecorat2, onProgress, flush, response, isStreamResponse, options, responseContentLength, _ref18, _ref19, _onProgress, _flush, responseData;
    return _regeneratorRuntime().wrap(function _callee6$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _resolveConfig = resolveConfig(config), url = _resolveConfig.url, method = _resolveConfig.method, data = _resolveConfig.data, signal = _resolveConfig.signal, cancelToken = _resolveConfig.cancelToken, timeout = _resolveConfig.timeout, onDownloadProgress = _resolveConfig.onDownloadProgress, onUploadProgress = _resolveConfig.onUploadProgress, responseType = _resolveConfig.responseType, headers = _resolveConfig.headers, _resolveConfig$withCr = _resolveConfig.withCredentials, withCredentials = _resolveConfig$withCr === void 0 ? 'same-origin' : _resolveConfig$withCr, fetchOptions = _resolveConfig.fetchOptions;
          responseType = responseType ? (responseType + '').toLowerCase() : 'text';
          _ref16 = signal || cancelToken || timeout ? composeSignals$1([signal, cancelToken], timeout) : [], _ref17 = _slicedToArray(_ref16, 2), composedSignal = _ref17[0], stopTimeout = _ref17[1];
          onFinish = function onFinish() {
            !finished && setTimeout(function () {
              composedSignal && composedSignal.unsubscribe();
            });
            finished = true;
          };
          _context7.prev = 4;
          _context7.t0 = onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head';
          if (!_context7.t0) {
            _context7.next = 11;
            break;
          }
          _context7.next = 9;
          return resolveBodyLength(headers, data);
        case 9:
          _context7.t1 = requestContentLength = _context7.sent;
          _context7.t0 = _context7.t1 !== 0;
        case 11:
          if (!_context7.t0) {
            _context7.next = 15;
            break;
          }
          _request = new Request(url, {
            method: 'POST',
            body: data,
            duplex: "half"
          });
          if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
            headers.setContentType(contentTypeHeader);
          }
          if (_request.body) {
            _progressEventDecorat = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress))), _progressEventDecorat2 = _slicedToArray(_progressEventDecorat, 2), onProgress = _progressEventDecorat2[0], flush = _progressEventDecorat2[1];
            data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush, encodeText);
          }
        case 15:
          if (!utils$1.isString(withCredentials)) {
            withCredentials = withCredentials ? 'include' : 'omit';
          }
          request = new Request(url, _objectSpread(_objectSpread({}, fetchOptions), {}, {
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: withCredentials
          }));
          _context7.next = 19;
          return fetch(request);
        case 19:
          response = _context7.sent;
          isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
          if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
            options = {};
            ['status', 'statusText', 'headers'].forEach(function (prop) {
              options[prop] = response[prop];
            });
            responseContentLength = utils$1.toFiniteNumber(response.headers.get('content-length'));
            _ref18 = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [], _ref19 = _slicedToArray(_ref18, 2), _onProgress = _ref19[0], _flush = _ref19[1];
            response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, _onProgress, function () {
              _flush && _flush();
              isStreamResponse && onFinish();
            }, encodeText), options);
          }
          responseType = responseType || 'text';
          _context7.next = 25;
          return resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);
        case 25:
          responseData = _context7.sent;
          !isStreamResponse && onFinish();
          stopTimeout && stopTimeout();
          _context7.next = 30;
          return new Promise(function (resolve, reject) {
            settle(resolve, reject, {
              data: responseData,
              headers: AxiosHeaders$1.from(response.headers),
              status: response.status,
              statusText: response.statusText,
              config: config,
              request: request
            });
          });
        case 30:
          return _context7.abrupt("return", _context7.sent);
        case 33:
          _context7.prev = 33;
          _context7.t2 = _context7["catch"](4);
          onFinish();
          if (!(_context7.t2 && _context7.t2.name === 'TypeError' && /fetch/i.test(_context7.t2.message))) {
            _context7.next = 38;
            break;
          }
          throw Object.assign(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request), {
            cause: _context7.t2.cause || _context7.t2
          });
        case 38:
          throw AxiosError.from(_context7.t2, _context7.t2 && _context7.t2.code, config, request);
        case 39:
        case "end":
          return _context7.stop();
      }
    }, _callee6, null, [[4, 33]]);
  }));
  return function (_x8) {
    return _ref15.apply(this, arguments);
  };
}());
var knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: fetchAdapter
};
utils$1.forEach(knownAdapters, function (fn, value) {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value: value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value: value
    });
  }
});
var renderReason = function renderReason(reason) {
  return "- ".concat(reason);
};
var isResolvedHandle = function isResolvedHandle(adapter) {
  return utils$1.isFunction(adapter) || adapter === null || adapter === false;
};
var adapters = {
  getAdapter: function getAdapter(adapters) {
    adapters = utils$1.isArray(adapters) ? adapters : [adapters];
    var _adapters = adapters,
      length = _adapters.length;
    var nameOrAdapter;
    var adapter;
    var rejectedReasons = {};
    for (var i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      var id = void 0;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === undefined) {
          throw new AxiosError("Unknown adapter '".concat(id, "'"));
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || '#' + i] = adapter;
    }
    if (!adapter) {
      var reasons = Object.entries(rejectedReasons).map(function (_ref20) {
        var _ref21 = _slicedToArray(_ref20, 2),
          id = _ref21[0],
          state = _ref21[1];
        return "adapter ".concat(id, " ") + (state === false ? 'is not supported by the environment' : 'is not available in the build');
      });
      var s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
      throw new AxiosError("There is no suitable adapter to dispatch the request " + s, 'ERR_NOT_SUPPORT');
    }
    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  var adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(config, config.transformResponse, response);
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}
var VERSION = "1.7.4";
var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators$1[type] = function validator(thing) {
    return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
var deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function (value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (_typeof(options) !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var _validator = schema[opt];
    if (_validator) {
      var value = options[opt];
      var result = value === undefined || _validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator = {
  assertOptions: assertOptions,
  validators: validators$1
};
var validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
var Axios = /*#__PURE__*/function () {
  function Axios(instanceConfig) {
    _classCallCheck(this, Axios);
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  _createClass(Axios, [{
    key: "request",
    value: (function () {
      var _request2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(configOrUrl, config) {
        var dummy, stack;
        return _regeneratorRuntime().wrap(function _callee7$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return this._request(configOrUrl, config);
            case 3:
              return _context8.abrupt("return", _context8.sent);
            case 6:
              _context8.prev = 6;
              _context8.t0 = _context8["catch"](0);
              if (_context8.t0 instanceof Error) {
                Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();

                // slice off the Error: ... line
                stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                try {
                  if (!_context8.t0.stack) {
                    _context8.t0.stack = stack;
                    // match without the 2 top stack lines
                  } else if (stack && !String(_context8.t0.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
                    _context8.t0.stack += '\n' + stack;
                  }
                } catch (e) {
                  // ignore the case where "stack" is an un-writable property
                }
              }
              throw _context8.t0;
            case 10:
            case "end":
              return _context8.stop();
          }
        }, _callee7, this, [[0, 6]]);
      }));
      function request(_x9, _x10) {
        return _request2.apply(this, arguments);
      }
      return request;
    }())
  }, {
    key: "_request",
    value: function _request(configOrUrl, config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      var _config2 = config,
        transitional = _config2.transitional,
        paramsSerializer = _config2.paramsSerializer,
        headers = _config2.headers;
      if (transitional !== undefined) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators["boolean"]),
          forcedJSONParsing: validators.transitional(validators["boolean"]),
          clarifyTimeoutError: validators.transitional(validators["boolean"])
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils$1.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators["function"],
            serialize: validators["function"]
          }, true);
        }
      }

      // Set config.method
      config.method = (config.method || this.defaults.method || 'get').toLowerCase();

      // Flatten headers
      var contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
      headers && utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
        delete headers[method];
      });
      config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

      // filter out skipped interceptors
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      var i = 0;
      var len;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest.bind(this), undefined];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      var newConfig = config;
      i = 0;
      while (i < len) {
        var onFulfilled = requestInterceptorChain[i++];
        var onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
  }, {
    key: "getUri",
    value: function getUri(config) {
      config = mergeConfig(this.defaults, config);
      var fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  }]);
  return Axios;
}(); // Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
var CancelToken = /*#__PURE__*/function () {
  function CancelToken(executor) {
    _classCallCheck(this, CancelToken);
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;

    // eslint-disable-next-line func-names
    this.promise.then(function (cancel) {
      if (!token._listeners) return;
      var i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = function (onfulfilled) {
      var _resolve;
      // eslint-disable-next-line func-names
      var promise = new Promise(function (resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  _createClass(CancelToken, [{
    key: "throwIfRequested",
    value: function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }

    /**
     * Subscribe to the cancel signal
     */
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }

    /**
     * Unsubscribe from the cancel signal
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
  }], [{
    key: "source",
    value: function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    }
  }]);
  return CancelToken;
}();
var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(function (_ref22) {
  var _ref23 = _slicedToArray(_ref22, 2),
    key = _ref23[0],
    value = _ref23[1];
  HttpStatusCode[value] = key;
});
var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios$1(defaultConfig);
  var instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios$1.prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  utils$1.extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = function (thing) {
  return formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
};
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode$1;
axios["default"] = axios;
module.exports = axios;

/***/ })

}]);