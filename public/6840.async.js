"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6840],{

/***/ 16840:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ simpleVoteSchema; }
/* harmony export */ });
const simpleVoteSchema = {
  name: "simple-vote",
  nodeName: "SimpleVote",
  path: "/protocols/simple-vote",
  versions: [
    {
      version: 1,
      body: [
        {
          name: "symbol",
          type: "string"
        },
        {
          name: "voteTo",
          type: "array"
        },
        { name: "voteToOptionIdxs", type: "array" },
        { name: "voteComment", type: "string" },
        { name: "digest", type: "any" },
        { name: "signatures", type: "any" },
        { name: "voteTime", type: "any" }
      ]
    }
  ]
};



/***/ })

}]);