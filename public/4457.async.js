"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4457],{

/***/ 76560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Components_Buzz; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(81707);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SyncOutlined.js + 1 modules
var SyncOutlined = __webpack_require__(22694);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(81751);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(79063);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(17078);
// EXTERNAL MODULE: ./src/Components/Buzz/index.less
var Buzz = __webpack_require__(79816);
// EXTERNAL MODULE: ./src/Components/Buzz/RepostDetail.tsx + 2 modules
var RepostDetail = __webpack_require__(8451);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/Buzz/ForwardTweet.tsx



var RepostDetails = /*#__PURE__*/react.memo(function (_ref) {
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    loading = _ref.loading;
  if (!buzzItem || !buzzItem.address) return null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RepostDetail/* default */.Z, {
    buzzItem: buzzItem,
    loading: loading
  });
});
/* harmony default export */ var ForwardTweet = (RepostDetails);
// EXTERNAL MODULE: ./src/Components/Follow/index.tsx + 1 modules
var Follow = __webpack_require__(4447);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var buzz = __webpack_require__(518);
// EXTERNAL MODULE: ./src/utils/psbtBuild.ts
var psbtBuild = __webpack_require__(49105);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/image/index.js + 2 modules
var es_image = __webpack_require__(40371);
;// CONCATENATED MODULE: ./src/Components/Buzz/MediaRenderer/ImageRenderer.tsx





var ImageRenderer = function ImageRenderer(_ref) {
  var url = _ref.url,
    alt = _ref.alt,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  console.log('Rendering image with URL:', url);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.Z, {
    src: url,
    alt: alt,
    className: className,
    style: objectSpread2_default()({
      objectFit: 'cover',
      borderRadius: '8px',
      maxWidth: '100%',
      maxHeight: '400px'
    }, style),
    fallback: config/* FallbackImage */.vL,
    onClick: onClick,
    preview: {
      mask: false
    }
  });
};
/* harmony default export */ var MediaRenderer_ImageRenderer = (ImageRenderer);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(55576);
// EXTERNAL MODULE: ./node_modules/.pnpm/plyr-react@5.3.0_plyr@3.7.8_react@18.3.1/node_modules/plyr-react/esm/index.js + 1 modules
var esm = __webpack_require__(33444);
// EXTERNAL MODULE: ./node_modules/.pnpm/plyr-react@5.3.0_plyr@3.7.8_react@18.3.1/node_modules/plyr-react/plyr.css
var plyr = __webpack_require__(65537);
;// CONCATENATED MODULE: ./src/Components/Buzz/MediaRenderer/utils.ts


var FileType = /*#__PURE__*/function (FileType) {
  FileType["IMAGE"] = "image";
  FileType["VIDEO"] = "video";
  FileType["AUDIO"] = "audio";
  FileType["DOCUMENT"] = "document";
  FileType["ARCHIVE"] = "archive";
  FileType["OTHER"] = "other";
  return FileType;
}({});

// 图片格式
var IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'avif', 'bmp', 'ico'];

// 视频格式
var VIDEO_EXTENSIONS = ['mp4', 'webm', 'av1', 'avi', 'mov', 'wmv', 'flv', 'mkv', '3gp'];

// 音频格式
var AUDIO_EXTENSIONS = ['mp3', 'aac', 'wav', 'flac', 'ogg', 'wma', 'm4a'];

// 文档格式
var DOCUMENT_EXTENSIONS = ['pdf', 'doc', 'docx', 'txt', 'rtf'];

// 压缩包格式
var ARCHIVE_EXTENSIONS = ['zip', 'rar', '7z', 'tar', 'gz', 'bz2'];

/**
 * 从 URL 中提取文件扩展名
 */
function getFileExtension(url) {
  // 处理 metafile:// 格式
  if (url.startsWith('metafile://')) {
    var path = url.replace('metafile://', '');
    var _parts = path.split('.');
    return _parts.length > 1 ? _parts[_parts.length - 1].toLowerCase() : '';
  }

  // 处理普通 URL
  var parts = url.split('.');
  if (parts.length > 1) {
    var ext = parts[parts.length - 1].toLowerCase();
    // 移除可能的查询参数
    return ext.split('?')[0].split('#')[0];
  }
  return '';
}

/**
 * 根据文件扩展名判断文件类型
 */
function getFileType(url) {
  // 特殊处理：检查URL路径中的类型标识
  if (url.includes('/video/')) {
    return FileType.VIDEO;
  }
  if (url.includes('/audio/')) {
    return FileType.AUDIO;
  }
  if (url.includes('/image/')) {
    return FileType.IMAGE;
  }
  var extension = getFileExtension(url);

  // 如果没有扩展名，默认当作图片处理
  if (!extension) {
    return FileType.IMAGE;
  }
  if (IMAGE_EXTENSIONS.includes(extension)) {
    return FileType.IMAGE;
  }
  if (VIDEO_EXTENSIONS.includes(extension)) {
    return FileType.VIDEO;
  }
  if (AUDIO_EXTENSIONS.includes(extension)) {
    return FileType.AUDIO;
  }
  if (DOCUMENT_EXTENSIONS.includes(extension)) {
    return FileType.DOCUMENT;
  }
  if (ARCHIVE_EXTENSIONS.includes(extension)) {
    return FileType.ARCHIVE;
  }
  return FileType.OTHER;
}

/**
 * 处理文件 URL，支持新旧格式
 * 旧格式：/video/{pinid}
 * 新格式：metafile://{pinId}.{文件类型}
 */
function getFileUrl(url) {
  // 如果是 metafile:// 格式，转换为 MAN URL
  if (url.startsWith('metafile://')) {
    var fullPath = url.replace('metafile://', '');

    // 处理特殊格式：metafile://video/pinId, metafile://audio/pinId 等
    if (fullPath.startsWith('video/') || fullPath.startsWith('audio/') || fullPath.startsWith('image/')) {
      var pinId = fullPath.split('/')[1]; // 获取 / 后面的 pinId
      return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(pinId);
    }

    // 处理普通格式：metafile://pinId.ext
    return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(fullPath);
  }

  // 如果是旧的 /video/ 格式，保持兼容
  if (url.startsWith('/video/')) {
    var _pinId = url.replace('/video/', '');
    return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(_pinId);
  }

  // 如果已经是完整 URL，直接返回
  if (url.startsWith('http')) {
    return url;
  }

  // 其他情况，当作 pinId 处理
  return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(url);
}

/**
 * 从 URL 中提取 pinId
 */
function getPinId(url) {
  if (url.startsWith('metafile://')) {
    var fullPath = url.replace('metafile://', '');

    // 处理特殊格式：metafile://video/pinId, metafile://audio/pinId 等
    if (fullPath.startsWith('video/') || fullPath.startsWith('audio/') || fullPath.startsWith('image/')) {
      return fullPath.split('/')[1]; // 获取 / 后面的 pinId
    }

    // 处理普通格式：metafile://pinId.ext
    // 移除文件扩展名
    var parts = fullPath.split('.');
    return parts.length > 1 ? parts.slice(0, -1).join('.') : fullPath;
  }
  if (url.startsWith('/video/')) {
    return url.replace('/video/', '');
  }

  // 从完整 URL 中提取
  if (url.includes('/content/')) {
    var _parts2 = url.split('/content/');
    return _parts2[_parts2.length - 1];
  }
  return url;
}

/**
 * 从 URL 中提取文件名（不含扩展名）
 */
function getFileName(url) {
  // 处理 metafile:// 格式
  if (url.startsWith('metafile://')) {
    var path = url.replace('metafile://', '');
    var _parts3 = path.split('.');
    // 返回不含扩展名的部分
    return _parts3.length > 1 ? _parts3.slice(0, -1).join('.') : path;
  }

  // 处理普通 URL
  var pathPart = url.split('/').pop() || '';
  var parts = pathPart.split('.');
  // 返回不含扩展名的部分
  return parts.length > 1 ? parts.slice(0, -1).join('.') : pathPart;
}

/**
 * 获取文件类型的显示名称
 */
function getFileTypeDisplayName(fileType) {
  switch (fileType) {
    case FileType.IMAGE:
      return '图片';
    case FileType.VIDEO:
      return '视频';
    case FileType.AUDIO:
      return '音频';
    case FileType.DOCUMENT:
      return '文档';
    case FileType.ARCHIVE:
      return '压缩包';
    case FileType.OTHER:
    default:
      return '文件';
  }
}

/**
 * 获取文件类型的多语言显示名称
 */
function getFileTypeDisplayNameI18n(fileType) {
  switch (fileType) {
    case FileType.IMAGE:
      return formatMessage('Image');
    case FileType.VIDEO:
      return formatMessage('Video');
    case FileType.AUDIO:
      return formatMessage('Audio');
    case FileType.DOCUMENT:
      return formatMessage('Document');
    case FileType.ARCHIVE:
      return formatMessage('Archive');
    case FileType.OTHER:
    default:
      return formatMessage('File');
  }
}

/**
 * 获取文件类型对应的图标
 */
function getFileTypeIcon(fileType) {
  switch (fileType) {
    case FileType.IMAGE:
      return '🖼️';
    case FileType.VIDEO:
      return '🎥';
    case FileType.AUDIO:
      return '🎵';
    case FileType.DOCUMENT:
      return '📄';
    case FileType.ARCHIVE:
      return '📦';
    case FileType.OTHER:
    default:
      return '📎';
  }
}

/**
 * 根据文件扩展名获取MIME类型
 */
function getMimeType(extension) {
  var ext = extension.toLowerCase();

  // 图片格式
  if (IMAGE_EXTENSIONS.includes(ext)) {
    switch (ext) {
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg';
      case 'png':
        return 'image/png';
      case 'gif':
        return 'image/gif';
      case 'svg':
        return 'image/svg+xml';
      case 'webp':
        return 'image/webp';
      case 'avif':
        return 'image/avif';
      case 'bmp':
        return 'image/bmp';
      case 'ico':
        return 'image/x-icon';
      default:
        return 'image/jpeg';
    }
  }

  // 视频格式
  if (VIDEO_EXTENSIONS.includes(ext)) {
    switch (ext) {
      case 'mp4':
        return 'video/mp4';
      case 'webm':
        return 'video/webm';
      case 'avi':
        return 'video/x-msvideo';
      case 'mov':
        return 'video/quicktime';
      case 'wmv':
        return 'video/x-ms-wmv';
      case 'flv':
        return 'video/x-flv';
      case 'mkv':
        return 'video/x-matroska';
      case '3gp':
        return 'video/3gpp';
      default:
        return 'video/mp4';
    }
  }

  // 音频格式
  if (AUDIO_EXTENSIONS.includes(ext)) {
    switch (ext) {
      case 'mp3':
        return 'audio/mpeg';
      case 'aac':
        return 'audio/aac';
      case 'wav':
        return 'audio/wav';
      case 'flac':
        return 'audio/flac';
      case 'ogg':
        return 'audio/ogg';
      case 'wma':
        return 'audio/x-ms-wma';
      case 'm4a':
        return 'audio/mp4';
      default:
        return 'audio/mpeg';
    }
  }

  // 文档格式
  if (DOCUMENT_EXTENSIONS.includes(ext)) {
    switch (ext) {
      case 'pdf':
        return 'application/pdf';
      case 'doc':
        return 'application/msword';
      case 'docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case 'txt':
        return 'text/plain';
      case 'rtf':
        return 'application/rtf';
      default:
        return 'application/octet-stream';
    }
  }

  // 压缩包格式
  if (ARCHIVE_EXTENSIONS.includes(ext)) {
    switch (ext) {
      case 'zip':
        return 'application/zip';
      case 'rar':
        return 'application/vnd.rar';
      case '7z':
        return 'application/x-7z-compressed';
      case 'tar':
        return 'application/x-tar';
      case 'gz':
        return 'application/gzip';
      case 'bz2':
        return 'application/x-bzip2';
      default:
        return 'application/zip';
    }
  }
  return 'application/octet-stream';
}

/**
 * 获取预览URL（保留扩展名）
 * 预览时保留扩展名，让服务器能正确识别文件类型并设置Content-Type
 */
function getPreviewUrl(url) {
  return getFileUrl(url); // 预览时使用原始带扩展名的URL
}

/**
 * 获取下载URL（不含扩展名）
 * 下载时使用的URL应该去除文件扩展名
 */
function getDownloadUrl(url) {
  // 如果是 metafile:// 格式，转换为不含扩展名的 MAN URL
  if (url.startsWith('metafile://')) {
    var fullPath = url.replace('metafile://', '');

    // 处理特殊格式：metafile://video/pinId, metafile://audio/pinId 等
    if (fullPath.startsWith('video/') || fullPath.startsWith('audio/') || fullPath.startsWith('image/')) {
      var _pinId2 = fullPath.split('/')[1]; // 获取 / 后面的 pinId
      return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(_pinId2);
    }

    // 处理普通格式：metafile://pinId.ext
    // 移除文件扩展名，获取纯 pinId
    var parts = fullPath.split('.');
    var pinId = parts.length > 1 ? parts.slice(0, -1).join('.') : fullPath;
    return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(pinId);
  }

  // 如果是旧的 /video/ 格式，保持兼容
  if (url.startsWith('/video/')) {
    var _pinId3 = url.replace('/video/', '');
    return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(_pinId3);
  }

  // 如果已经是完整 URL，需要移除扩展名
  if (url.startsWith('http')) {
    // 先检查URL的路径部分是否包含扩展名
    try {
      var urlObj = new URL(url);
      var pathname = urlObj.pathname;
      var pathParts = pathname.split('/');
      var lastPart = pathParts[pathParts.length - 1];

      // 检查最后一部分是否包含扩展名
      var dotIndex = lastPart.lastIndexOf('.');
      if (dotIndex > 0) {
        var extension = lastPart.substring(dotIndex + 1);
        // 检查是否是有效的文件扩展名（长度小于5且只包含字母数字）
        if (extension.length <= 4 && /^[a-zA-Z0-9]+$/.test(extension)) {
          // 移除扩展名
          var nameWithoutExt = lastPart.substring(0, dotIndex);
          pathParts[pathParts.length - 1] = nameWithoutExt;
          urlObj.pathname = pathParts.join('/');
          var newUrl = urlObj.toString();
          return newUrl;
        }
      }
    } catch (e) {
      // 如果URL解析失败，使用字符串方法
      console.warn('Failed to parse URL, using string method:', e);
    }

    // 备用方法：使用字符串处理
    var urlParts = url.split('.');
    if (urlParts.length > 1) {
      var _lastPart = urlParts[urlParts.length - 1];
      // 检查最后一部分是否是文件扩展名（长度小于5且不包含特殊字符）
      if (_lastPart.length <= 4 && /^[a-zA-Z0-9]+(\?.*|#.*)?$/.test(_lastPart)) {
        // 移除扩展名，但保留可能的查询参数
        var extensionWithParams = _lastPart.split(/[?#]/);
        if (extensionWithParams[0].length <= 4) {
          return urlParts.slice(0, -1).join('.') + (extensionWithParams.length > 1 ? '?' + _lastPart.split('?').slice(1).join('?') : '');
        }
      }
    }
    return url;
  }

  // 其他情况，当作 pinId 处理，需要移除可能的扩展名
  if (url.includes('.')) {
    var _parts4 = url.split('.');
    if (_parts4.length > 1) {
      var _extension = _parts4[_parts4.length - 1];
      // 检查是否是有效的文件扩展名（长度小于5且只包含字母数字）
      if (_extension.length <= 4 && /^[a-zA-Z0-9]+$/.test(_extension)) {
        // 移除扩展名
        var fileNameWithoutExt = _parts4.slice(0, -1).join('.');
        return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(fileNameWithoutExt);
      }
    }
  }
  return "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(url);
}
;// CONCATENATED MODULE: ./src/Components/Buzz/MediaRenderer/VideoRenderer.tsx










// 用于处理分片视频的类型定义

function fetchChunksAndCombine(_x, _x2) {
  return _fetchChunksAndCombine.apply(this, arguments);
}
function _fetchChunksAndCombine() {
  _fetchChunksAndCombine = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(chunkUrls, dataType) {
    var responses, arrays, combined, videoBlob, videoUrl;
    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Promise.all(chunkUrls.map(function (url) {
            return fetch(url);
          }));
        case 2:
          responses = _context3.sent;
          _context3.next = 5;
          return Promise.all(responses.map(function (response) {
            return response.arrayBuffer();
          }));
        case 5:
          arrays = _context3.sent;
          combined = new Uint8Array(arrays.reduce(function (acc, curr) {
            return acc.concat(Array.from(new Uint8Array(curr)));
          }, []));
          videoBlob = new Blob([combined], {
            type: dataType
          });
          videoUrl = URL.createObjectURL(videoBlob);
          return _context3.abrupt("return", videoUrl);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _fetchChunksAndCombine.apply(this, arguments);
}
var VideoRenderer = function VideoRenderer(_ref) {
  var url = _ref.url,
    alt = _ref.alt,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel.showConf;
  var ref = (0,react.useRef)(null);
  var _useState = (0,react.useState)(),
    _useState2 = slicedToArray_default()(_useState, 2),
    videoSrc = _useState2[0],
    setVideoSrc = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    isIntersecting = _useState4[0],
    setIsIntersecting = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = slicedToArray_default()(_useState7, 2),
    isChunkedVideo = _useState8[0],
    setIsChunkedVideo = _useState8[1];
  var pinId = getPinId(url);
  console.log('VideoRenderer URL and pinId:', url, pinId);

  // 检查是否为分片视频
  var checkIfChunkedVideo = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    var response, contentType, metafile;
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(url);
        case 3:
          response = _context.sent;
          contentType = response.headers.get('content-type') || '';
          console.log('Fetched content type:', contentType);
          // 如果是 JSON 响应，可能是分片视频的元数据
          if (!(contentType.includes('application/json') || contentType.includes('text/plain'))) {
            _context.next = 13;
            break;
          }
          _context.next = 9;
          return response.json();
        case 9:
          metafile = _context.sent;
          if (!(metafile.chunkList && metafile.chunkList.length > 0)) {
            _context.next = 13;
            break;
          }
          setIsChunkedVideo(true);
          return _context.abrupt("return", metafile);
        case 13:
          if (!contentType.includes('video/')) {
            _context.next = 16;
            break;
          }
          setVideoSrc(url);
          return _context.abrupt("return", null);
        case 16:
          return _context.abrupt("return", null);
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.error('Error checking video type:', _context.t0);
          // 如果检查失败，尝试直接使用 URL
          setVideoSrc(url);
          return _context.abrupt("return", null);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 19]]);
  })), [url]);
  var processChunkedVideo = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
    var metafile, chunkUrls, processedUrl;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!isIntersecting || !isChunkedVideo)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return");
        case 2:
          setLoading(true);
          _context2.prev = 3;
          _context2.next = 6;
          return checkIfChunkedVideo();
        case 6:
          metafile = _context2.sent;
          if (!metafile) {
            _context2.next = 13;
            break;
          }
          chunkUrls = metafile.chunkList.map(function (chunk) {
            return url.replace(pinId, chunk.pinId);
          });
          _context2.next = 11;
          return fetchChunksAndCombine(chunkUrls, metafile.dataType);
        case 11:
          processedUrl = _context2.sent;
          setVideoSrc(processedUrl);
        case 13:
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](3);
          console.error('Error processing chunked video:', _context2.t0);
        case 18:
          _context2.prev = 18;
          setLoading(false);
          return _context2.finish(18);
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 15, 18, 21]]);
  })), [isIntersecting, isChunkedVideo, url, pinId, checkIfChunkedVideo]);

  // 初始化检查视频类型
  (0,react.useEffect)(function () {
    checkIfChunkedVideo();
  }, [checkIfChunkedVideo]);

  // 处理分片视频
  (0,react.useEffect)(function () {
    processChunkedVideo();
  }, [processChunkedVideo]);

  // 交叉观察器，用于懒加载
  (0,react.useEffect)(function () {
    var observer = new IntersectionObserver(function (_ref4) {
      var _ref5 = slicedToArray_default()(_ref4, 1),
        entry = _ref5[0];
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.75
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return function () {
      observer.disconnect();
    };
  }, []);
  console.log('VideoRenderer state:', {
    videoSrc: videoSrc,
    isChunkedVideo: isChunkedVideo,
    isIntersecting: isIntersecting,
    loading: loading
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: loading,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: ref,
      onClick: onClick
      // className={className}
      ,
      className: "video",
      style: {
        borderRadius: '16px',
        marginBottom: 12,
        overflow: 'hidden',
        width: '100%',
        height: '300px',
        '--plyr-color-main': showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
        // ...style,
      },
      children: videoSrc && /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* default */.Z, {
        source: {
          type: 'video',
          sources: [{
            src: videoSrc,
            type: 'video/mp4'
          }]
        },
        options: {
          controls: ["play-large", "play", "progress", "current-time", "mute", "fullscreen"],
          captions: {
            active: true,
            language: "auto",
            update: true
          },
          previewThumbnails: {
            enabled: false,
            src: ""
          }
        }
      })
    })
  });
};
/* harmony default export */ var MediaRenderer_VideoRenderer = (VideoRenderer);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SoundOutlined.js + 1 modules
var SoundOutlined = __webpack_require__(49089);
;// CONCATENATED MODULE: ./src/Components/Buzz/MediaRenderer/AudioRenderer.tsx








var Text = typography/* default */.Z.Text;
var AudioRenderer = function AudioRenderer(_ref) {
  var url = _ref.url,
    originalUrl = _ref.originalUrl,
    alt = _ref.alt,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  var extension = getFileExtension(originalUrl).toUpperCase();
  var fileName = getFileName(originalUrl);

  // 生成有意义的显示名称
  var getDisplayName = function getDisplayName() {
    if (alt && alt.trim()) {
      return alt.trim();
    }
    if (fileName && fileName.trim()) {
      return fileName.trim();
    }
    return (0,utils/* formatMessage */.wv)('Audio File');
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    className: className,
    style: objectSpread2_default()({
      marginBottom: 12
    }, style),
    bodyStyle: {
      padding: 12
    },
    onClick: onClick,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 12
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SoundOutlined/* default */.Z, {
        style: {
          fontSize: 24,
          color: '#1890ff'
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
          strong: true,
          children: getDisplayName()
        }), extension && /*#__PURE__*/(0,jsx_runtime.jsx)(Text, {
          type: "secondary",
          style: {
            marginLeft: 8
          },
          children: extension
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("audio", {
      controls: true,
      style: {
        width: '100%'
      },
      preload: "metadata",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("source", {
        src: url.replace(".".concat(extension.toLowerCase()), '')
      }), (0,utils/* formatMessage */.wv)('Your browser does not support audio playback')]
    })]
  });
};
/* harmony default export */ var MediaRenderer_AudioRenderer = (AudioRenderer);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FilePdfOutlined.js + 1 modules
var FilePdfOutlined = __webpack_require__(21794);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileTextOutlined.js + 1 modules
var FileTextOutlined = __webpack_require__(31178);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DownloadOutlined.js + 1 modules
var DownloadOutlined = __webpack_require__(30426);
;// CONCATENATED MODULE: ./src/Components/Buzz/MediaRenderer/DocumentRenderer.tsx










var DocumentRenderer_Text = typography/* default */.Z.Text;
var DocumentRenderer = function DocumentRenderer(_ref) {
  var url = _ref.url,
    originalUrl = _ref.originalUrl,
    alt = _ref.alt,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  var extension = getFileExtension(originalUrl).toLowerCase();
  var extensionUpper = extension.toUpperCase();
  var fileName = getFileName(originalUrl);
  var getIcon = function getIcon() {
    if (extension === 'pdf') {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(FilePdfOutlined/* default */.Z, {
        style: {
          fontSize: 32,
          color: '#ff4d4f'
        }
      });
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(FileTextOutlined/* default */.Z, {
      style: {
        fontSize: 32,
        color: '#1890ff'
      }
    });
  };
  var handleDownload = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(e) {
      var downloadUrl, generateFileName, downloadFileName, response, blob, mimeType, typedBlob, _url, link, _response, _blob, _mimeType, _typedBlob, _url2, _link;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.stopPropagation();
            downloadUrl = getDownloadUrl(originalUrl); // 生成一个有意义的文件名
            generateFileName = function generateFileName() {
              if (alt && alt.trim()) {
                return alt.trim();
              }
              if (fileName && fileName.trim()) {
                return fileName.trim();
              }
              // 从URL中提取pinId作为文件名
              var pinId = downloadUrl.split('/').pop() || '';
              if (pinId) {
                return pinId;
              }
              // 最后使用时间戳作为文件名
              return "file_".concat(Date.now());
            };
            downloadFileName = generateFileName();
            if (!(extension === 'pdf')) {
              _context.next = 37;
              break;
            }
            _context.prev = 5;
            message/* default */.ZP.loading((0,utils/* formatMessage */.wv)('Preparing download...'), 0);
            _context.next = 9;
            return fetch(downloadUrl);
          case 9:
            response = _context.sent;
            message/* default */.ZP.destroy();
            if (response.ok) {
              _context.next = 13;
              break;
            }
            throw new Error("".concat((0,utils/* formatMessage */.wv)('Server error'), ": ").concat(response.status));
          case 13:
            _context.next = 15;
            return response.blob();
          case 15:
            blob = _context.sent;
            // 确保blob具有正确的MIME类型
            mimeType = getMimeType(extension);
            typedBlob = new Blob([blob], {
              type: mimeType
            });
            _url = window.URL.createObjectURL(typedBlob);
            link = document.createElement('a');
            link.href = _url;
            // 使用生成的有意义的文件名
            link.download = downloadFileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(_url);
            message/* default */.ZP.success((0,utils/* formatMessage */.wv)('Download started'));
            _context.next = 35;
            break;
          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](5);
            message/* default */.ZP.destroy();
            console.error('Download failed:', _context.t0);
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Download failed, please try again'));
            // 如果fetch失败，回退到直接打开URL
            window.open(downloadUrl, '_blank');
          case 35:
            _context.next = 62;
            break;
          case 37:
            _context.prev = 37;
            _context.next = 40;
            return fetch(downloadUrl);
          case 40:
            _response = _context.sent;
            if (_response.ok) {
              _context.next = 43;
              break;
            }
            throw new Error("".concat((0,utils/* formatMessage */.wv)('Server error'), ": ").concat(_response.status));
          case 43:
            _context.next = 45;
            return _response.blob();
          case 45:
            _blob = _context.sent;
            _mimeType = getMimeType(extension);
            _typedBlob = new Blob([_blob], {
              type: _mimeType
            });
            _url2 = window.URL.createObjectURL(_typedBlob);
            _link = document.createElement('a');
            _link.href = _url2;
            _link.download = downloadFileName;
            document.body.appendChild(_link);
            _link.click();
            document.body.removeChild(_link);
            window.URL.revokeObjectURL(_url2);
            _context.next = 62;
            break;
          case 58:
            _context.prev = 58;
            _context.t1 = _context["catch"](37);
            console.error('Download failed:', _context.t1);
            // 如果fetch失败，回退到直接打开URL
            window.open(downloadUrl, '_blank');
          case 62:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 29], [37, 58]]);
    }));
    return function handleDownload(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    className: className,
    style: objectSpread2_default()({
      marginBottom: 12,
      cursor: 'pointer'
    }, style),
    bodyStyle: {
      padding: 16
    },
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: getIcon()
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DocumentRenderer_Text, {
          strong: true,
          style: {
            display: 'block',
            marginBottom: 4
          },
          children: alt || fileName || (0,utils/* formatMessage */.wv)('Document')
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DocumentRenderer_Text, {
          type: "secondary",
          children: [extensionUpper, " ", (0,utils/* formatMessage */.wv)('Document')]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DownloadOutlined/* default */.Z, {}),
          onClick: handleDownload,
          size: "small",
          children: (0,utils/* formatMessage */.wv)('Download')
        })
      })]
    })
  });
};
/* harmony default export */ var MediaRenderer_DocumentRenderer = (DocumentRenderer);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileZipOutlined.js + 1 modules
var FileZipOutlined = __webpack_require__(45805);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileOutlined.js + 1 modules
var FileOutlined = __webpack_require__(63488);
;// CONCATENATED MODULE: ./src/Components/Buzz/MediaRenderer/FileRenderer.tsx








var FileRenderer_Text = typography/* default */.Z.Text;
var FileRenderer = function FileRenderer(_ref) {
  var url = _ref.url,
    originalUrl = _ref.originalUrl,
    alt = _ref.alt,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  var extension = getFileExtension(originalUrl).toLowerCase();
  var extensionUpper = extension.toUpperCase();
  var fileType = getFileType(originalUrl);
  var fileName = getFileName(originalUrl);
  var getIcon = function getIcon() {
    if (fileType === FileType.ARCHIVE) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(FileZipOutlined/* default */.Z, {
        style: {
          fontSize: 32,
          color: '#722ed1'
        }
      });
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(FileOutlined/* default */.Z, {
      style: {
        fontSize: 32,
        color: '#8c8c8c'
      }
    });
  };
  var getFileTypeName = function getFileTypeName() {
    switch (fileType) {
      case FileType.ARCHIVE:
        return (0,utils/* formatMessage */.wv)('Archive');
      default:
        return (0,utils/* formatMessage */.wv)('File');
    }
  };
  var handleDownload = function handleDownload(e) {
    e.stopPropagation();
    var downloadUrl = getDownloadUrl(originalUrl);

    // 生成一个有意义的文件名
    var generateFileName = function generateFileName() {
      if (alt && alt.trim()) {
        return alt.trim();
      }
      if (fileName && fileName.trim()) {
        return fileName.trim();
      }
      // 从URL中提取pinId作为文件名
      var pinId = downloadUrl.split('/').pop() || '';
      if (pinId) {
        return pinId;
      }
      // 最后使用时间戳作为文件名
      return "file_".concat(Date.now());
    };

    // 对于非PDF文件，使用window.open可能更可靠
    window.open(downloadUrl, '_blank');
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
    className: className,
    style: objectSpread2_default()({
      marginBottom: 12,
      cursor: 'pointer'
    }, style),
    bodyStyle: {
      padding: 16
    },
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: getIcon()
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          flex: 1,
          minWidth: 0
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FileRenderer_Text, {
          strong: true,
          style: {
            display: 'block',
            marginBottom: 4
          },
          children: alt || fileName || getFileTypeName()
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FileRenderer_Text, {
          type: "secondary",
          children: [extensionUpper, " ", getFileTypeName()]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DownloadOutlined/* default */.Z, {}),
          onClick: handleDownload,
          size: "small",
          children: (0,utils/* formatMessage */.wv)('Download')
        })
      })]
    })
  });
};
/* harmony default export */ var MediaRenderer_FileRenderer = (FileRenderer);
;// CONCATENATED MODULE: ./src/Components/Buzz/MediaRenderer/index.tsx









var MediaRenderer = function MediaRenderer(_ref) {
  var url = _ref.url,
    alt = _ref.alt,
    className = _ref.className,
    style = _ref.style,
    onClick = _ref.onClick;
  // 处理 URL，支持旧格式和新格式
  var processedUrl = getFileUrl(url);
  var fileType = getFileType(url);
  var commonProps = {
    url: processedUrl,
    originalUrl: url,
    alt: alt,
    className: className,
    style: style,
    onClick: onClick
  };
  console.log('Rendering media with URL:', processedUrl, 'of type:', fileType);
  switch (fileType) {
    case FileType.IMAGE:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(MediaRenderer_ImageRenderer, objectSpread2_default()({}, commonProps));
    case FileType.VIDEO:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(MediaRenderer_VideoRenderer, objectSpread2_default()({}, commonProps));
    case FileType.AUDIO:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(MediaRenderer_AudioRenderer, objectSpread2_default()({}, commonProps));
    case FileType.DOCUMENT:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(MediaRenderer_DocumentRenderer, objectSpread2_default()({}, commonProps));
    case FileType.ARCHIVE:
    case FileType.OTHER:
    default:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(MediaRenderer_FileRenderer, objectSpread2_default()({}, commonProps));
  }
};
/* harmony default export */ var Buzz_MediaRenderer = (MediaRenderer);
// EXTERNAL MODULE: ./src/Components/Buzz/imageGallery.less
var imageGallery = __webpack_require__(73319);
;// CONCATENATED MODULE: ./src/Components/Buzz/EnhancedMediaGallery.tsx











/* harmony default export */ var EnhancedMediaGallery = (function (_ref) {
  var decryptContent = _ref.decryptContent;
  var _useLocation = (0,_umi_production_exports.useLocation)(),
    pathname = _useLocation.pathname;
  var _theme$useToken = theme/* default */.Z.useToken(),
    borderRadiusLG = _theme$useToken.token.borderRadiusLG;
  var _useState = (0,react.useState)('image-container'),
    _useState2 = slicedToArray_default()(_useState, 2),
    container = _useState2[0],
    setContainer = _useState2[1];
  var allFiles = (0,react.useMemo)(function () {
    var publicFiles = (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.publicFiles) || [];
    var encryptFiles = (decryptContent === null || decryptContent === void 0 ? void 0 : decryptContent.encryptFiles) || [];
    return [].concat(toConsumableArray_default()(publicFiles), toConsumableArray_default()(encryptFiles));
  }, [decryptContent]);
  var _useMemo = (0,react.useMemo)(function () {
      var images = [];
      var otherFiles = [];
      allFiles.forEach(function (file) {
        // 处理加密文件（base64 格式）
        if (file.startsWith('data:') || !file.includes('.') && file.length > 100) {
          images.push(file);
          return;
        }
        var fileType = getFileType(file);
        if (fileType === FileType.IMAGE) {
          images.push(file);
        } else {
          otherFiles.push(file);
        }
      });
      return {
        images: images,
        otherFiles: otherFiles
      };
    }, [allFiles]),
    images = _useMemo.images,
    otherFiles = _useMemo.otherFiles;
  var imageCount = images.length;
  (0,react.useEffect)(function () {
    setContainer('image-container');
  }, [pathname]);

  // 根据图片数量设置不同的样式类
  var getGridClass = function getGridClass(count) {
    switch (count) {
      case 1:
        return 'one-images';
      case 2:
        return 'two-images';
      case 3:
        return 'three-images';
      case 4:
        return 'four-images';
      case 5:
        return 'five-images';
      case 6:
        return 'six-images';
      case 7:
        return 'seven-images';
      case 8:
        return 'eight-images';
      case 9:
        return 'nine-images';
      default:
        return 'nine-images';
      // 超过 9 张图则不显示更多
    }
  };
  var renderImageFile = function renderImageFile(file, index) {
    // 处理加密文件（base64）
    if (file.startsWith('data:') || !file.includes('.') && file.length > 100) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.Z, {
        style: {
          objectFit: 'cover',
          height: '100%',
          borderRadius: borderRadiusLG,
          display: index > 8 ? 'none' : 'block'
        },
        src: file.startsWith('data:') ? file : "data:image/jpeg;base64,".concat(file),
        fallback: config/* FallbackImage */.vL,
        className: "image-item"
      }, "encrypt-".concat(index));
    }

    // 处理普通图片文件
    // 使用getDownloadUrl去除扩展名，保持与MediaRenderer一致的URL处理
    var imageUrl = getDownloadUrl(file);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.Z, {
      style: {
        objectFit: 'cover',
        height: '100%',
        maxHeight: 400,
        borderRadius: borderRadiusLG,
        display: index > 8 ? 'none' : 'block'
      },
      src: imageUrl,
      fallback: config/* FallbackImage */.vL,
      className: "image-item"
    }, "public-".concat(index));
  };
  var renderOtherFile = function renderOtherFile(file, index) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        marginBottom: 8
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz_MediaRenderer, {
        url: file,
        alt: "File ".concat(index + 1),
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      })
    }, "other-".concat(index));
  };
  if (allFiles.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      marginBottom: 12,
      marginTop: 12
    },
    children: [images.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setContainer('root');
      },
      id: "image-container",
      className: "image-container ".concat(getGridClass(imageCount)),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.Z.PreviewGroup, {
        preview: {
          onChange: function onChange(current, prev) {
            return console.log("current index: ".concat(current, ", prev index: ").concat(prev));
          },
          getContainer: function getContainer() {
            return document.getElementById(container);
          },
          movable: true,
          onVisibleChange: function onVisibleChange(visible, prevVisible) {
            if (!visible) {
              setContainer('image-container');
            }
          }
        },
        children: images.map(function (file, index) {
          return renderImageFile(file, index);
        })
      })
    }), otherFiles.map(function (file, index) {
      return renderOtherFile(file, index);
    })]
  });
});
// EXTERNAL MODULE: ./src/Components/Buzz/NFTGallery.tsx
var NFTGallery = __webpack_require__(43543);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./src/Components/Buzz/components/BuzzOrigin.tsx
var BuzzOrigin = __webpack_require__(43798);
// EXTERNAL MODULE: ./src/Components/Buzz/components/PayContent.tsx + 1 modules
var PayContent = __webpack_require__(96230);
// EXTERNAL MODULE: ./src/request/metaso.ts
var metaso = __webpack_require__(57828);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUserAvatar.tsx
var PendingUserAvatar = __webpack_require__(35711);
// EXTERNAL MODULE: ./src/Components/NumberFormat/index.tsx
var NumberFormat = __webpack_require__(38161);
;// CONCATENATED MODULE: ./src/Components/IDCoinBadge/index.tsx











/* harmony default export */ var IDCoinBadge = (function (_ref) {
  var address = _ref.address,
    IDCoin = _ref.IDCoin;
  var _useModel = (0,_umi_production_exports.useModel)('dashboard'),
    idCoinsAddress = _useModel.idCoinsAddress;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['coinData2', address],
      queryFn: function queryFn() {
        return (0,metaso/* fetchIDCoinInfoByAddress */.lh)({
          address: address
        });
      },
      enabled: Boolean(address) && !IDCoin && idCoinsAddress.includes(address)
    }),
    coinData2 = _useQuery.data,
    isFetching2 = _useQuery.isFetching;
  var IdCoin = (0,react.useMemo)(function () {
    if (IDCoin) return IDCoin;
    if (coinData2 !== null && coinData2 !== void 0 && coinData2.data && coinData2.data.tag === 'id-coins') return coinData2.data;
    return undefined;
  }, [coinData2, IDCoin]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: IdCoin && /*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.ZP, {
      color: "default",
      variant: "solid",
      shape: "round",
      size: "small",
      style: {
        padding: '0 4px 0 0',
        marginTop: 12,
        fontWeight: 500
      },
      onClick: function onClick() {
        IdCoin.totalMinted === IdCoin.mintCount ? window.open("https://www.metaid.market/idCoin/".concat(IdCoin.tick), (0,utils/* openWindowTarget */.wL)()) : window.open("https://www.metaid.market/inscribe/MRC-20/".concat(IdCoin.tick), (0,utils/* openWindowTarget */.wL)());
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserAvatar/* default */.Z, {
        address: IdCoin.address,
        size: 20
      }), " $", IdCoin.tick.toUpperCase(), "  ", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        style: {
          color: '#4EED2A',
          fontSize: 12
        },
        children: IdCoin.totalMinted === IdCoin.mintCount ? /*#__PURE__*/(0,jsx_runtime.jsx)(NumberFormat/* default */.Z, {
          value: IdCoin.floorPrice,
          suffix: "BTC",
          isBig: true,
          decimal: 8,
          tiny: true
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "link",
          size: "small",
          onClick: function onClick() {},
          children: "Mint"
        })
      })]
    })
  });
});
// EXTERNAL MODULE: ./src/Components/Buzz/TextWithTrans.tsx + 1 modules
var TextWithTrans = __webpack_require__(45550);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MessageOutlined.js + 1 modules
var MessageOutlined = __webpack_require__(16036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartFilled.js + 1 modules
var HeartFilled = __webpack_require__(43106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/HeartOutlined.js + 1 modules
var HeartOutlined = __webpack_require__(93342);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftFilled.js + 1 modules
var GiftFilled = __webpack_require__(71429);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/GiftOutlined.js + 1 modules
var GiftOutlined = __webpack_require__(94427);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UploadOutlined.js + 1 modules
var UploadOutlined = __webpack_require__(15739);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(32699);
// EXTERNAL MODULE: ./src/Components/Donate/index.tsx
var Donate = __webpack_require__(89614);
// EXTERNAL MODULE: ./src/Components/Comment/index.tsx + 3 modules
var Comment = __webpack_require__(79684);
// EXTERNAL MODULE: ./src/Components/NewPost/index.tsx + 2 modules
var NewPost = __webpack_require__(4457);
;// CONCATENATED MODULE: ./src/Components/Buzz/Actions.tsx

















/* harmony default export */ var Actions = (function (_ref) {
  var buzzItem = _ref.buzzItem,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
    _ref$donate = _ref.donate,
    donate = _ref$donate === void 0 ? [] : _ref$donate;
  var _useModel = (0,_umi_production_exports.useModel)("user"),
    btcConnector = _useModel.btcConnector,
    user = _useModel.user,
    isLogin = _useModel.isLogin,
    connect = _useModel.connect,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorPrimary = _theme$useToken.token.colorPrimary;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    showComment = _useState2[0],
    setShowComment = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    showGift = _useState4[0],
    setShowGift = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = slicedToArray_default()(_useState5, 2),
    likes = _useState6[0],
    setLikes = _useState6[1];
  var _useState7 = (0,react.useState)([]),
    _useState8 = slicedToArray_default()(_useState7, 2),
    donates = _useState8[0],
    setDonates = _useState8[1];
  var _useState9 = (0,react.useState)(0),
    _useState10 = slicedToArray_default()(_useState9, 2),
    donateCount = _useState10[0],
    setDonateCount = _useState10[1];
  var _useState11 = (0,react.useState)(false),
    _useState12 = slicedToArray_default()(_useState11, 2),
    handleLikeLoading = _useState12[0],
    setHandleLikeLoading = _useState12[1];
  var _useState13 = (0,react.useState)(false),
    _useState14 = slicedToArray_default()(_useState13, 2),
    showNewPost = _useState14[0],
    setShowNewPost = _useState14[1];
  (0,react.useEffect)(function () {
    var _buzzItem$like, _buzzItem$donate, _buzzItem$donateCount;
    if (!buzzItem) {
      return;
    }
    var _likes = (_buzzItem$like = buzzItem.like) !== null && _buzzItem$like !== void 0 ? _buzzItem$like : [];
    var _like = like !== null && like !== void 0 ? like : [];
    setLikes([].concat(toConsumableArray_default()(_likes), toConsumableArray_default()(_like.map(function (item) {
      return item.CreateMetaid;
    }))));
    var _donates = (_buzzItem$donate = buzzItem.donate) !== null && _buzzItem$donate !== void 0 ? _buzzItem$donate : [];
    var _donate = donate !== null && donate !== void 0 ? donate : [];
    setDonates([].concat(toConsumableArray_default()(_donates), toConsumableArray_default()(_donate.map(function (item) {
      return item.CreateMetaid;
    }))));
    setDonateCount((_buzzItem$donateCount = buzzItem.donateCount) !== null && _buzzItem$donateCount !== void 0 ? _buzzItem$donateCount : 0);
  }, [buzzItem, like, donate]);
  var isLiked = (0,react.useMemo)(function () {
    if (!buzzItem || !user) return false;
    return likes.includes(user.metaid);
  }, [likes]);
  var isDonatedUser = (0,react.useMemo)(function () {
    if (!buzzItem || !user) return false;
    return donates.includes(user.metaid);
  }, [donates]);
  var handleLike = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, pinId, likeEntity, likeRes, _likeEntity, _likeRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return _context.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            pinId = buzzItem.id;
            if (!isLiked) {
              _context.next = 10;
              break;
            }
            message/* default */.ZP.error("You have already liked that buzz...");
            return _context.abrupt("return");
          case 10:
            setHandleLikeLoading(true);
            _context.prev = 11;
            if (!(chain === "btc")) {
              _context.next = 22;
              break;
            }
            _context.next = 15;
            return btcConnector.use("like");
          case 15:
            likeEntity = _context.sent;
            _context.next = 18;
            return likeEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                flag: config/* FLAG */.BZ,
                contentType: "application/json;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee("like_service_fee_amount", "BTC")
              }
            });
          case 18:
            likeRes = _context.sent;
            if (!(0,lodash.isNil)(likeRes === null || likeRes === void 0 ? void 0 : likeRes.revealTxIds[0])) {
              setLikes([].concat(toConsumableArray_default()(likes), [user.metaid]));
              message/* default */.ZP.success("like buzz successfully");
            }
            _context.next = 29;
            break;
          case 22:
            _context.next = 24;
            return mvcConnector.use("like");
          case 24:
            _likeEntity = _context.sent;
            _context.next = 27;
            return _likeEntity.create({
              data: {
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: "like buzz",
                service: fetchServiceFee("like_service_fee_amount", "MVC")
                // feeRate: Number(mvcFeeRate),
              }
            });
          case 27:
            _likeRes = _context.sent;
            if (!(0,lodash.isNil)(_likeRes === null || _likeRes === void 0 ? void 0 : _likeRes.txid)) {
              setLikes([].concat(toConsumableArray_default()(likes), [user.metaid]));
              message/* default */.ZP.success("like buzz successfully");
            }
          case 29:
            _context.next = 37;
            break;
          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](11);
            console.log("error", _context.t0);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes("Cannot read properties of undefined") ? "User Canceled" : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
          case 37:
            setHandleLikeLoading(false);
          case 38:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[11, 31]]);
    }));
    return function handleLike() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "actions",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "text",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(MessageOutlined/* default */.Z, {}),
        onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
          var isPass;
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (isLogin) {
                  _context2.next = 3;
                  break;
                }
                message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                return _context2.abrupt("return");
              case 3:
                isPass = checkUserSetting();
                if (isPass) {
                  _context2.next = 6;
                  break;
                }
                return _context2.abrupt("return");
              case 6:
                showComment ? setShowComment(false) : setShowComment(true);
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })),
        children: buzzItem.commentCount
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "text",
        loading: handleLikeLoading,
        onClick: handleLike,
        icon: isLiked ? /*#__PURE__*/(0,jsx_runtime.jsx)(HeartFilled/* default */.Z, {
          style: {
            color: "red"
          }
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(HeartOutlined/* default */.Z, {}),
        children: likes.length
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "text",
        icon: isDonatedUser ? /*#__PURE__*/(0,jsx_runtime.jsx)(GiftFilled/* default */.Z, {
          style: {
            color: colorPrimary
          }
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(GiftOutlined/* default */.Z, {}),
        onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
          var isPass;
          return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (isLogin) {
                  _context3.next = 3;
                  break;
                }
                message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
                return _context3.abrupt("return");
              case 3:
                isPass = checkUserSetting();
                if (isPass) {
                  _context3.next = 6;
                  break;
                }
                return _context3.abrupt("return");
              case 6:
                showGift ? setShowGift(false) : setShowGift(true);
              case 7:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        })),
        children: donateCount
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "text",
        icon: /*#__PURE__*/(0,jsx_runtime.jsx)(UploadOutlined/* default */.Z, {}),
        onClick: function onClick() {
          if (!isLogin) {
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)("Please connect your wallet first"));
            return;
          }
          var isPass = checkUserSetting();
          if (!isPass) return;
          showNewPost ? setShowNewPost(false) : setShowNewPost(true);
        },
        children: buzzItem.forwardCount
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Comment/* default */.Z, {
      tweetId: buzzItem.id,
      onClose: function onClose() {
        setShowComment(false);
      },
      show: showComment
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NewPost/* default */.Z, {
      show: showNewPost,
      onClose: function onClose() {
        setShowNewPost(false);
      },
      quotePin: buzzItem
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Donate/* default */.Z, {
      donateAddress: buzzItem.creator,
      show: showGift,
      onClose: function onClose() {
        return setShowGift(false);
      },
      pinId: buzzItem.id,
      callback: function callback() {
        setDonateCount(donateCount + 1);
      }
    })]
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/Details.tsx


















var Paragraph = typography/* default */.Z.Paragraph,
  Details_Text = typography/* default */.Z.Text;











// TODO: use metaid manage state


/* harmony default export */ var Details = (function (_ref) {
  var _currentUserInfoData$, _currentUserInfoData$2, _currentUserInfoData$3, _currentUserInfoData$4;
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    refetch = _ref.refetch,
    _ref$isForward = _ref.isForward,
    isForward = _ref$isForward === void 0 ? false : _ref$isForward,
    loading = _ref.loading,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
    _ref$donate = _ref.donate,
    donate = _ref$donate === void 0 ? [] : _ref$donate,
    handleClick = _ref.handleClick;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary,
    colorBorder = _theme$useToken$token.colorBorder,
    colorBgBlur = _theme$useToken$token.colorBgBlur,
    colorBgContainer = _theme$useToken$token.colorBgContainer;
  var _useModel = (0,_umi_production_exports.useModel)("user"),
    user = _useModel.user,
    isLogin = _useModel.isLogin,
    chain = _useModel.chain;
  var _useModel2 = (0,_umi_production_exports.useModel)("dashboard"),
    manPubKey = _useModel2.manPubKey;
  var currentUserInfoData = (0,useQuery/* useQuery */.a)({
    queryKey: ["userInfo", buzzItem.creator],
    enabled: !(0,isNil/* default */.Z)(buzzItem === null || buzzItem === void 0 ? void 0 : buzzItem.creator),
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: buzzItem.creator
      });
    }
  });
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    showGift = _useState2[0],
    setShowGift = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = slicedToArray_default()(_useState3, 2),
    donateAmount = _useState4[0],
    setDonateAmount = _useState4[1];
  var _useState5 = (0,react.useState)(""),
    _useState6 = slicedToArray_default()(_useState5, 2),
    donateMessage = _useState6[0],
    setDonateMessage = _useState6[1];
  var _useState7 = (0,react.useState)(0),
    _useState8 = slicedToArray_default()(_useState7, 2),
    balance = _useState8[0],
    setBalance = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = slicedToArray_default()(_useState9, 2),
    donateLoading = _useState10[0],
    setDonateLoading = _useState10[1];
  var _useState11 = (0,react.useState)((0,utils/* determineAddressInfo */.uY)(buzzItem.address) === 'p2pkh' ? chain : 'btc'),
    _useState12 = slicedToArray_default()(_useState11, 2),
    selectedChain = _useState12[0],
    setSelectedChain = _useState12[1];
  (0,react.useEffect)(function () {
    var fetchBalance = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
        var bal, _bal;
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(isLogin && selectedChain === "btc")) {
                _context.next = 13;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return (0,psbtBuild/* getUtxoBalance */.xd)();
            case 4:
              bal = _context.sent;
              setBalance(bal);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to fetch balance:", _context.t0);
            case 11:
              _context.next = 24;
              break;
            case 13:
              if (!(isLogin && selectedChain === "mvc")) {
                _context.next = 24;
                break;
              }
              _context.prev = 14;
              _context.next = 17;
              return (0,psbtBuild/* getMvcBalance */.eo)();
            case 17:
              _bal = _context.sent;
              setBalance(_bal);
              _context.next = 24;
              break;
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](14);
              console.error("Failed to fetch balance:", _context.t1);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8], [14, 21]]);
      }));
      return function fetchBalance() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchBalance();
  }, [isLogin, selectedChain]);
  var payBuzz = (0,react.useMemo)(function () {
    try {
      var _summary = buzzItem.content;
      var isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
      var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
      return parseSummary.publicContent ? buzzItem : undefined;
    } catch (e) {
      console.error("Error parsing buzz content:", e);
      return undefined;
    }
  }, [buzzItem]);
  var quotePinId = (0,react.useMemo)(function () {
    if (isForward) return "";
    try {
      var _parseSummary$quotePi;
      var _summary = buzzItem.content;
      var isSummaryJson = _summary.startsWith("{") && _summary.endsWith("}");
      var parseSummary = isSummaryJson ? JSON.parse(_summary) : {};
      return isSummaryJson && !(0,isEmpty/* default */.Z)((_parseSummary$quotePi = parseSummary === null || parseSummary === void 0 ? void 0 : parseSummary.quotePin) !== null && _parseSummary$quotePi !== void 0 ? _parseSummary$quotePi : "") ? parseSummary.quotePin : "";
    } catch (e) {
      console.error("Error parsing buzz content:", e);
      return "";
    }
  }, [buzzItem, isForward]);
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(quotePinId),
      queryKey: ["buzzDetail", quotePinId],
      queryFn: function queryFn() {
        return (0,api/* fetchBuzzDetail */.uq)({
          pinId: quotePinId
        });
      }
    }),
    isQuoteLoading = _useQuery.isLoading,
    quoteDetailData = _useQuery.data;
  var _useQuery2 = (0,useQuery/* useQuery */.a)({
      enabled: !(0,isEmpty/* default */.Z)(payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id),
      queryKey: ["buzzAccessControl", payBuzz === null || payBuzz === void 0 ? void 0 : payBuzz.id],
      queryFn: function queryFn() {
        return (0,api/* getControlByContentPin */.up)({
          pinId: payBuzz.id
        });
      }
    }),
    accessControl = _useQuery2.data;
  var _useQuery3 = (0,useQuery/* useQuery */.a)({
      queryKey: ["buzzdecryptContent", buzzItem.id, chain, user.address],
      queryFn: function queryFn() {
        return (0,buzz/* decodePayBuzz */.ns)(buzzItem, manPubKey, isLogin);
      }
    }),
    decryptContent = _useQuery3.data,
    refetchDecrypt = _useQuery3.refetch,
    decryptLoading = _useQuery3.isLoading;
  var _textContent = (0,react.useMemo)(function () {
    if (!decryptContent) return "";
    var encryptContent = decryptContent.status === "purchased" ? decryptContent.encryptContent : "";
    return "".concat(decryptContent.publicContent).concat(decryptContent.publicContent && encryptContent ? "\n" : "").concat(encryptContent);
  }, [decryptContent]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    className: "tweet",
    loading: loading || decryptLoading,
    style: {
      width: "100%",
      borderColor: isForward ? colorBorder : colorBorderSecondary
    },
    styles: {
      header: {
        // height: ,
        borderColor: isForward ? colorBorder : colorBorderSecondary
      },
      body: {
        paddingTop: 12
      }
    },
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        height: "100%",
        padding: '12px 0'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "avatar",
          style: {
            cursor: "pointer",
            position: "relative"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
            src: (_currentUserInfoData$ = currentUserInfoData.data) === null || _currentUserInfoData$ === void 0 ? void 0 : _currentUserInfoData$.avatar,
            size: 40,
            onClick: function onClick(e) {
              e.stopPropagation();
              _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowIconComponent */._, {
            metaid: ((_currentUserInfoData$2 = currentUserInfoData.data) === null || _currentUserInfoData$2 === void 0 ? void 0 : _currentUserInfoData$2.metaid) || ""
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            cursor: "pointer"
          },
          onClick: function onClick(e) {
            e.stopPropagation();
            _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Details_Text, {
            style: {
              fontSize: 14,
              lineHeight: 1
            },
            children: [" ", ((_currentUserInfoData$3 = currentUserInfoData.data) === null || _currentUserInfoData$3 === void 0 ? void 0 : _currentUserInfoData$3.name) || "Unnamed"]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: "flex",
              gap: 8,
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Details_Text, {
              type: "secondary",
              style: {
                fontSize: 10,
                lineHeight: 1
              },
              children: (_currentUserInfoData$4 = currentUserInfoData.data) === null || _currentUserInfoData$4 === void 0 ? void 0 : _currentUserInfoData$4.metaid.slice(0, 8)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(BuzzOrigin/* default */.Z, {
              host: buzzItem.host
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(IDCoinBadge, {
        address: buzzItem.address
      })]
    }),
    children: [buzzItem.blocked && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      message: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "This Buzz has been blocked by the administrator."
      }),
      type: "warning",
      banner: true
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "content",
      style: {
        cursor: "pointer"
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          handleClick ? handleClick() : _umi_production_exports.history.push("/buzz/".concat(buzzItem.id));
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TextWithTrans/* default */.Z, {
          text: _textContent
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(NFTGallery/* default */.Z, {
          nfts: decryptContent.nfts
        }), decryptContent && /*#__PURE__*/(0,jsx_runtime.jsx)(EnhancedMediaGallery, {
          decryptContent: decryptContent
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(PayContent/* default */.Z, {
          decryptContent: decryptContent,
          accessControl: accessControl,
          refetchDecrypt: refetchDecrypt
        }), !(0,isEmpty/* default */.Z)(quotePinId) && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          style: {
            padding: 0,
            marginBottom: 12,
            boxShadow: "none"
          },
          variant: "borderless",
          styles: {
            body: {
              padding: 0
            }
          },
          loading: isQuoteLoading,
          children: (quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data) && /*#__PURE__*/(0,jsx_runtime.jsx)(ForwardTweet, {
            buzzItem: objectSpread2_default()(objectSpread2_default()({}, quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data.tweet), {}, {
              blocked: quoteDetailData === null || quoteDetailData === void 0 ? void 0 : quoteDetailData.data.blocked
            }),
            showActions: false
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            size: "small",
            type: "link",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
            style: {
              fontSize: 12
            },
            onClick: function onClick(e) {
              e.stopPropagation();
              var link = buzzItem.chainName === "btc" ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(buzzItem.genesisTransaction) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(buzzItem.genesisTransaction);
              window.open(link, "_blank");
            },
            children: buzzItem.genesisTransaction.slice(0, 8)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            icon: buzzItem.genesisHeight === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(SyncOutlined/* default */.Z, {
              spin: true
            }) : null,
            bordered: false,
            color: buzzItem.chainName === "mvc" ? "blue" : "orange",
            children: buzzItem.chainName.toUpperCase()
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: dayjs_min_default().unix(buzzItem.timestamp).format("YYYY-MM-DD HH:mm:ss")
          })]
        })]
      }), showActions && /*#__PURE__*/(0,jsx_runtime.jsx)(Actions, {
        buzzItem: buzzItem,
        like: like,
        donate: donate
      })]
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(83250);
// EXTERNAL MODULE: ./src/Components/MRC20Icon/index.tsx
var MRC20Icon = __webpack_require__(97691);
;// CONCATENATED MODULE: ./src/Components/Buzz/ChatGroup.tsx









/* harmony default export */ var ChatGroup = (function (_ref) {
  var groupId = _ref.groupId;
  var _useQuery = (0,useQuery/* useQuery */.a)({
      enabled: !(0,lodash.isEmpty)(groupId),
      queryKey: ["chatGroup", groupId],
      queryFn: function queryFn() {
        return (0,metaso/* fetchChatGroupInfo */.xX)({
          groupId: groupId
        });
      }
    }),
    isLoading = _useQuery.isLoading,
    data = _useQuery.data;
  var groupInfo = (0,react.useMemo)(function () {
    if (!data) return null;
    return data.data;
  }, [data]);
  var _theme$useToken = theme/* default */.Z.useToken(),
    colorFillAlter = _theme$useToken.token.colorFillAlter;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
      active: true
    }) : null, " ", groupInfo && /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Paragraph, {
      onClick: function onClick() {
        window.open("https://chat.show.now/talk/channels/public/".concat(groupId), '_blank');
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
        type: "secondary",
        children: "From the public group chat"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
        children: [" \"", groupInfo.roomName, "\""]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          marginBottom: 12,
          background: colorFillAlter,
          borderRadius: 12,
          padding: 16,
          gap: 20,
          marginTop: 16,
          flexWrap: 'wrap'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
          size: 60,
          tick: groupInfo.roomName,
          metadata: JSON.stringify({
            icon: groupInfo.roomIcon
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 4
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              backgroundImage: 'linear-gradient(264deg, #FFC051 0%, #F700FB 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontSize: 16,
              fontWeight: 600
            },
            children: [" ", groupInfo.roomName]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 4,
              flexWrap: 'wrap'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                type: "secondary",
                style: {
                  whiteSpace: 'nowrap'
                },
                children: "Creator:"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                style: {
                  whiteSpace: 'nowrap'
                },
                children: groupInfo.createUserInfo.name
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                type: "secondary",
                style: {
                  whiteSpace: 'nowrap'
                },
                children: "Member"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                style: {
                  whiteSpace: 'nowrap'
                },
                children: groupInfo.userCount
              })]
            })]
          })]
        })]
      })]
    })]
  });
});
// EXTERNAL MODULE: ./src/Components/Buzz/ImageGallery.tsx
var ImageGallery = __webpack_require__(97062);
;// CONCATENATED MODULE: ./src/Components/Buzz/ShareChatMessage.tsx





















var ShareChatMessage_Text = typography/* default */.Z.Text;
/* harmony default export */ var ShareChatMessage = (function (_ref) {
  var _currentUserInfoData$, _currentUserInfoData$2, _currentUserInfoData$3, _currentUserInfoData$4, _originUserInfo$data, _originUserInfo$data3, _originUserInfo$data5, _originUserInfo$data6, _originUserInfo$data7;
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 20 : _ref$padding,
    _ref$reLoading = _ref.reLoading,
    reLoading = _ref$reLoading === void 0 ? false : _ref$reLoading,
    refetch = _ref.refetch,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
    handleClick = _ref.handleClick,
    _ref$donate = _ref.donate,
    donate = _ref$donate === void 0 ? [] : _ref$donate,
    _ref$isForward = _ref.isForward,
    isForward = _ref$isForward === void 0 ? false : _ref$isForward;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorder = _theme$useToken$token.colorBorder,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary;
  var contentRef = (0,react.useRef)(null); // 引用内容容器
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var currentUserInfoData = (0,useQuery/* useQuery */.a)({
    queryKey: ["userInfo", buzzItem.creator],
    enabled: !(0,lodash.isNil)(buzzItem === null || buzzItem === void 0 ? void 0 : buzzItem.creator),
    queryFn: function queryFn() {
      return (0,api/* getUserInfo */.bG)({
        address: buzzItem.creator
      });
    }
  });
  var chatMessage = (0,react.useMemo)(function () {
    return JSON.parse((buzzItem === null || buzzItem === void 0 ? void 0 : buzzItem.content) || '{}');
  }, [buzzItem]);
  var originUserInfo = (0,useQuery/* useQuery */.a)({
    queryKey: ["userInfo", chatMessage.userMetaId],
    enabled: !(0,lodash.isNil)(chatMessage === null || chatMessage === void 0 ? void 0 : chatMessage.userMetaId),
    queryFn: function queryFn() {
      return (0,api/* getUserInfoByMetaid */.cg)({
        metaid: chatMessage.userMetaId
      });
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
    className: "tweet",
    style: {
      width: "100%",
      borderColor: isForward ? colorBorder : colorBorderSecondary
    },
    styles: {
      header: {
        // height: ,
        borderColor: isForward ? colorBorder : colorBorderSecondary
      },
      body: {
        paddingTop: 12
      }
    },
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        height: "100%",
        padding: '12px 0'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "avatar",
          style: {
            cursor: "pointer",
            position: "relative"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
            src: (_currentUserInfoData$ = currentUserInfoData.data) === null || _currentUserInfoData$ === void 0 ? void 0 : _currentUserInfoData$.avatar,
            size: 40,
            onClick: function onClick(e) {
              e.stopPropagation();
              _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowIconComponent */._, {
            metaid: ((_currentUserInfoData$2 = currentUserInfoData.data) === null || _currentUserInfoData$2 === void 0 ? void 0 : _currentUserInfoData$2.metaid) || ""
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            cursor: "pointer"
          },
          onClick: function onClick(e) {
            e.stopPropagation();
            _umi_production_exports.history.push("/profile/".concat(buzzItem.creator));
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ShareChatMessage_Text, {
            style: {
              fontSize: 14,
              lineHeight: 1
            },
            children: ((_currentUserInfoData$3 = currentUserInfoData.data) === null || _currentUserInfoData$3 === void 0 ? void 0 : _currentUserInfoData$3.name) || "Unnamed"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: "flex",
              gap: 8,
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ShareChatMessage_Text, {
              type: "secondary",
              style: {
                fontSize: 10,
                lineHeight: 1
              },
              children: (_currentUserInfoData$4 = currentUserInfoData.data) === null || _currentUserInfoData$4 === void 0 ? void 0 : _currentUserInfoData$4.metaid.slice(0, 8)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(BuzzOrigin/* default */.Z, {
              host: buzzItem.host
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(IDCoinBadge, {
        address: buzzItem.address
      })]
    }),
    children: [buzzItem.blocked && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
      message: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "This Buzz has been blocked by the administrator."
      }),
      type: "warning",
      banner: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "content",
      style: {
        cursor: "pointer"
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        onClick: function onClick() {
          handleClick ? handleClick() : _umi_production_exports.history.push("/buzz/".concat(buzzItem.id));
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TextWithTrans/* default */.Z, {
          text: chatMessage.comment
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(card/* default */.Z, {
          className: "tweet",
          style: {
            width: "100%",
            borderColor: isForward ? colorBorder : colorBorderSecondary
          },
          styles: {
            header: {
              // height: ,
              borderColor: isForward ? colorBorder : colorBorderSecondary
            },
            body: {
              paddingTop: 12
            }
          },
          title: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              height: "100%",
              padding: '12px 0'
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "avatar",
                style: {
                  cursor: "pointer",
                  position: "relative"
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
                  src: (_originUserInfo$data = originUserInfo.data) === null || _originUserInfo$data === void 0 ? void 0 : _originUserInfo$data.avatar,
                  size: 40,
                  onClick: function onClick(e) {
                    var _originUserInfo$data2;
                    e.stopPropagation();
                    _umi_production_exports.history.push("/profile/".concat((_originUserInfo$data2 = originUserInfo.data) === null || _originUserInfo$data2 === void 0 ? void 0 : _originUserInfo$data2.address));
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Follow/* FollowIconComponent */._, {
                  metaid: ((_originUserInfo$data3 = originUserInfo.data) === null || _originUserInfo$data3 === void 0 ? void 0 : _originUserInfo$data3.metaid) || ""
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  cursor: "pointer"
                },
                onClick: function onClick(e) {
                  var _originUserInfo$data4;
                  e.stopPropagation();
                  _umi_production_exports.history.push("/profile/".concat((_originUserInfo$data4 = originUserInfo.data) === null || _originUserInfo$data4 === void 0 ? void 0 : _originUserInfo$data4.address));
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ShareChatMessage_Text, {
                  style: {
                    fontSize: 14,
                    lineHeight: 1
                  },
                  children: [" ", ((_originUserInfo$data5 = originUserInfo.data) === null || _originUserInfo$data5 === void 0 ? void 0 : _originUserInfo$data5.name) || "Unnamed"]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: 8,
                    alignItems: 'center'
                  },
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ShareChatMessage_Text, {
                    type: "secondary",
                    style: {
                      fontSize: 10,
                      lineHeight: 1
                    },
                    children: (_originUserInfo$data6 = originUserInfo.data) === null || _originUserInfo$data6 === void 0 ? void 0 : _originUserInfo$data6.metaid.slice(0, 8)
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(BuzzOrigin/* default */.Z, {
                    host: buzzItem.host
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(IDCoinBadge, {
              address: (_originUserInfo$data7 = originUserInfo.data) === null || _originUserInfo$data7 === void 0 ? void 0 : _originUserInfo$data7.address
            })]
          }),
          children: [chatMessage.message.contentType === 'text/plain' && /*#__PURE__*/(0,jsx_runtime.jsx)(TextWithTrans/* default */.Z, {
            text: chatMessage.message.content
          }), chatMessage.message.protocol === '/protocols/simplefilegroupchat' && /*#__PURE__*/(0,jsx_runtime.jsx)(ImageGallery/* default */.Z, {
            decryptContent: {
              publicFiles: [chatMessage.message.content],
              publicContent: '',
              encryptContent: '',
              encryptFiles: [],
              buzzType: "normal",
              status: 'purchased'
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ChatGroup, {
            groupId: chatMessage.groupId
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              size: "small",
              type: "link",
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
              style: {
                fontSize: 12
              },
              onClick: function onClick(e) {
                e.stopPropagation();
                var link = chatMessage.message.chain === "btc" ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(chatMessage.message.txId) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(chatMessage.message.txId);
                window.open(link, "_blank");
              },
              children: chatMessage.message.txId.slice(0, 8)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
              bordered: false,
              color: chatMessage.message.chain === "btc" ? "orange" : "blue",
              children: chatMessage.message.chain === 'btc' ? 'BTC' : 'MVC'
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              type: "secondary",
              style: {
                fontSize: 12
              },
              children: dayjs_min_default().unix(chatMessage.message.timestamp).format("YYYY-MM-DD HH:mm:ss")
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          style: {
            marginTop: 20
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            size: "small",
            type: "link",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
            style: {
              fontSize: 12
            },
            onClick: function onClick(e) {
              e.stopPropagation();
              var link = buzzItem.chainName === "btc" ? "".concat(config/* curNetwork */.eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(buzzItem.genesisTransaction) : "https://".concat(config/* curNetwork */.eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(buzzItem.genesisTransaction);
              window.open(link, "_blank");
            },
            children: buzzItem.genesisTransaction.slice(0, 8)
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            icon: buzzItem.genesisHeight === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(SyncOutlined/* default */.Z, {
              spin: true
            }) : null,
            bordered: false,
            color: buzzItem.chainName === "mvc" ? "blue" : "orange",
            children: buzzItem.chainName.toUpperCase()
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            type: "secondary",
            style: {
              fontSize: 12
            },
            children: dayjs_min_default().unix(buzzItem.timestamp).format("YYYY-MM-DD HH:mm:ss")
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Actions, {
      buzzItem: buzzItem,
      like: like,
      donate: donate
    })]
  });
});
;// CONCATENATED MODULE: ./src/Components/Buzz/index.tsx




/* harmony default export */ var Components_Buzz = (function (_ref) {
  var buzzItem = _ref.buzzItem,
    _ref$showActions = _ref.showActions,
    showActions = _ref$showActions === void 0 ? true : _ref$showActions,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 20 : _ref$padding,
    _ref$reLoading = _ref.reLoading,
    reLoading = _ref$reLoading === void 0 ? false : _ref$reLoading,
    refetch = _ref.refetch,
    _ref$like = _ref.like,
    like = _ref$like === void 0 ? [] : _ref$like,
    handleClick = _ref.handleClick,
    _ref$donate = _ref.donate,
    donate = _ref$donate === void 0 ? [] : _ref$donate;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: buzzItem.path === '/protocols/sharechatmessage' ? /*#__PURE__*/(0,jsx_runtime.jsx)(ShareChatMessage, {
      buzzItem: buzzItem,
      like: like,
      donate: donate,
      showActions: showActions,
      padding: padding,
      reLoading: reLoading,
      refetch: refetch,
      handleClick: handleClick
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Details, {
      buzzItem: buzzItem,
      showActions: showActions,
      padding: padding,
      reLoading: reLoading,
      refetch: refetch,
      isForward: false,
      like: like,
      donate: donate,
      handleClick: handleClick
    })
  });
});

/***/ }),

/***/ 79684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Comment; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(17078);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
;// CONCATENATED MODULE: ./src/Components/UserInfo/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/UserInfo/index.tsx





/* harmony default export */ var UserInfo = (function (_ref) {
  var user = _ref.user;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "userInfo",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
      src: user.avatar
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "desc",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "name",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          children: user.name
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "metaid",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.Z.Text, {
          type: "secondary",
          children: [" MetaID:", user.metaid.slice(0, 8)]
        })
      })]
    })]
  });
});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileImageOutlined.js + 1 modules
var FileImageOutlined = __webpack_require__(48155);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SmileOutlined.js + 1 modules
var SmileOutlined = __webpack_require__(3622);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
;// CONCATENATED MODULE: ./src/entities/comment.ts

var commentEntitySchema = {
  name: 'comment',
  nodeName: 'paycomment',
  path: '/protocols/paycomment',
  versions: [{
    version: 1,
    body: [{
      name: 'content',
      type: 'string'
    }, {
      name: 'contentType',
      type: 'string'
    }, {
      name: 'commentTo',
      type: 'string'
    }]
  }]
};
/* harmony default export */ var comment = ((/* unused pure expression or super */ null && (commentEntitySchema)));
var getCommentEntitySchemaWithCustomHost = function getCommentEntitySchemaWithCustomHost(host) {
  return objectSpread2_default()(objectSpread2_default()({}, commentEntitySchema), {}, {
    path: "".concat(host).concat(commentEntitySchema.path)
  });
};
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/emoji-picker-react@4.13.2_react@18.3.1/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js + 1 modules
var emoji_picker_react_esm = __webpack_require__(60916);
;// CONCATENATED MODULE: ./src/Components/Comment/index.tsx


















var TextArea = input/* default */.Z.TextArea;
/* harmony default export */ var Comment = (function (_ref) {
  var show = _ref.show,
    _onClose = _ref.onClose,
    tweetId = _ref.tweetId;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin;
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    showEmojiPicker = _useState2[0],
    setShowEmojiPicker = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    content = _useState4[0],
    setContent = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    isAdding = _useState6[0],
    setIsAdding = _useState6[1];
  var handleAddComment = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, finalBody, _showConf$host, createRes, _showConf$host2, Comment, _createRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
            return _context.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            setIsAdding(true);
            _context.prev = 7;
            finalBody = {
              content: content,
              contentType: 'application/json;utf-8',
              commentTo: tweetId
            };
            console.log('finalBody', finalBody);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!(chain === 'btc')) {
              _context.next = 18;
              break;
            }
            _context.next = 13;
            return btcConnector.inscribe({
              inscribeDataArray: [{
                operation: 'create',
                path: "".concat((_showConf$host = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host !== void 0 ? _showConf$host : '', "/protocols/paycomment"),
                body: JSON.stringify(finalBody),
                contentType: 'application/json;utf-8',
                flag: config/* FLAG */.BZ
              }],
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee('comment_service_fee_amount', 'BTC'),
                network: config/* curNetwork */.eM
              }
            });
          case 13:
            createRes = _context.sent;
            console.log('create res for inscribe', createRes);
            if (!(0,isNil/* default */.Z)(createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0])) {
              message/* default */.ZP.success('comment successfully');
              setContent('');
              _onClose({
                CreateMetaid: user.metaid,
                chainName: 'btc',
                commentNum: 0,
                content: finalBody.content,
                createAddress: user.address,
                likeNum: 0,
                pinId: (createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0]) + 'i0',
                timestamp: Math.floor(Date.now() / 1000),
                donateNum: 0,
                forwardNum: 0,
                likeAddress: []
              });
            }
            _context.next = 25;
            break;
          case 18:
            _context.next = 20;
            return mvcConnector.load(getCommentEntitySchemaWithCustomHost((_showConf$host2 = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host2 !== void 0 ? _showConf$host2 : ''));
          case 20:
            Comment = _context.sent;
            _context.next = 23;
            return Comment.create({
              data: {
                body: JSON.stringify(finalBody)
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'create comment',
                service: fetchServiceFee('comment_service_fee_amount', 'MVC'),
                feeRate: Number(mvcFeeRate)
              }
            });
          case 23:
            _createRes = _context.sent;
            if (!(0,isNil/* default */.Z)(_createRes === null || _createRes === void 0 ? void 0 : _createRes.txid)) {
              message/* default */.ZP.success('comment successfully');
              setContent('');
              _onClose({
                CreateMetaid: user.metaid,
                chainName: 'mvc',
                commentNum: 0,
                content: finalBody.content,
                createAddress: user.address,
                likeNum: 0,
                pinId: (_createRes === null || _createRes === void 0 ? void 0 : _createRes.txid) + 'i0',
                timestamp: Math.floor(Date.now() / 1000),
                donateNum: 0,
                forwardNum: 0,
                likeAddress: []
              });
            }
          case 25:
            _context.next = 33;
            break;
          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](7);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            setIsAdding(false);
          case 33:
            setIsAdding(false);
          case 34:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[7, 27]]);
    }));
    return function handleAddComment() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      onClose: function onClose() {
        return _onClose();
      },
      show: show,
      modalWidth: 600,
      closable: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserInfo, {
          user: user
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
          rows: 6,
          placeholder: (0,utils/* formatMessage */.wv)('Post your reply'),
          style: {
            marginTop: 24
          },
          value: content,
          onChange: function onChange(e) {
            setContent(e.target.value);
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            marginTop: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              disabled: true,
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileImageOutlined/* default */.Z, {
                style: {
                  color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                }
              }),
              type: "text"
            }), window.innerWidth > 768 && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              onClick: function onClick() {
                setShowEmojiPicker(true);
              },
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(SmileOutlined/* default */.Z, {
                style: {
                  color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                }
              }),
              type: "text"
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            shape: "round",
            loading: isAdding,
            onClick: handleAddComment,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Comment"
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      onClose: function onClose() {
        setShowEmojiPicker(false);
      },
      show: showEmojiPicker,
      closable: true,
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "Select Emoji"
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(emoji_picker_react_esm/* default */.ZP, {
        onEmojiClick: function onEmojiClick(emoji) {
          setContent(function (prev) {
            return prev + emoji.emoji;
          });
        }
      })
    })]
  });
});

/***/ }),

/***/ 48246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ CommentItem; }
/* harmony export */ });
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15558);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _request_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9807);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(10991);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46116);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(99478);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(79063);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(33713);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(17675);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(27465);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17078);
/* harmony import */ var _UserInfo_PendingUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69101);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(81707);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(16036);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(43106);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(93342);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(94427);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(15739);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78488);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16483);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72898);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75271);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79684);
/* harmony import */ var _Donate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89614);
/* harmony import */ var _NewPost__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4457);
/* harmony import */ var _ResponPopup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(47467);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52676);





















var CommentItem = function CommentItem(_ref) {
  var _item$likeAddress, _item$pinId;
  var item = _ref.item,
    level = _ref.level;
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.useToken(),
    colorFillAlter = _theme$useToken.token.colorFillAlter;
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_5__.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector,
    isLogin = _useModel.isLogin,
    chain = _useModel.chain,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
    showDonate = _useState2[0],
    setShowDonate = _useState2[1];
  var _useModel2 = (0,umi__WEBPACK_IMPORTED_MODULE_5__.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(item.likeNum),
    _useState4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
    likeCount = _useState4[0],
    setLikeCount = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(item.donateNum),
    _useState6 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
    donateCount = _useState6[0],
    setDonateCount = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)((_item$likeAddress = item.likeAddress) !== null && _item$likeAddress !== void 0 ? _item$likeAddress : []),
    _useState8 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
    likeAddress = _useState8[0],
    setLikeAddress = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(item.forwardNum),
    _useState10 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),
    forwardCount = _useState10[0],
    setForwardCount = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(item.commentNum),
    _useState12 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState11, 2),
    commentCount = _useState12[0],
    setCommentCount = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
    _useState14 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState13, 2),
    handleLikeLoading = _useState14[0],
    setHandleLikeLoading = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
    _useState16 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState15, 2),
    showChildComment = _useState16[0],
    setShowChildComment = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]),
    _useState18 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState17, 2),
    childComment = _useState18[0],
    setChildComment = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
    _useState20 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState19, 2),
    showComment = _useState20[0],
    setShowComment = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
    _useState22 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState21, 2),
    loading = _useState22[0],
    setLoading = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false),
    _useState24 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3___default()(_useState23, 2),
    showNewPost = _useState24[0],
    setShowNewPost = _useState24[1];
  var handleLike = /*#__PURE__*/function () {
    var _ref2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee() {
      var pinId, likeEntity, likeRes, _likeEntity, _likeRes, _message, errorMessage, toastMessage;
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP.error((0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatMessage */ .wv)("Please connect your wallet first"));
            return _context.abrupt("return");
          case 3:
            if (!isLiked) {
              _context.next = 6;
              break;
            }
            antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP.error((0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatMessage */ .wv)("You have already liked this comment"));
            return _context.abrupt("return");
          case 6:
            pinId = item.pinId;
            setHandleLikeLoading(true);
            _context.prev = 8;
            if (!(chain === "btc")) {
              _context.next = 19;
              break;
            }
            _context.next = 12;
            return btcConnector.use("like");
          case 12:
            likeEntity = _context.sent;
            _context.next = 15;
            return likeEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                flag: _config__WEBPACK_IMPORTED_MODULE_7__/* .FLAG */ .BZ,
                contentType: "application/json;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .getEffectiveBTCFeerate */ .mG)(Number(feeRate)),
                service: fetchServiceFee("like_service_fee_amount", "BTC")
              }
            });
          case 15:
            likeRes = _context.sent;
            if (!(0,ramda__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(likeRes === null || likeRes === void 0 ? void 0 : likeRes.revealTxIds[0])) {
              setLikeCount(likeCount + 1);
              setLikeAddress([].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(likeAddress), [user.address]));
              antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP.success("like buzz successfully");
            }
            _context.next = 27;
            break;
          case 19:
            _context.next = 21;
            return mvcConnector.use("like");
          case 21:
            _likeEntity = _context.sent;
            _context.next = 24;
            return _likeEntity.create({
              data: {
                body: JSON.stringify({
                  isLike: "1",
                  likeTo: pinId
                }),
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/paylike")
              },
              options: {
                network: _config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM,
                signMessage: "like buzz",
                service: fetchServiceFee("like_service_fee_amount", "MVC"),
                feeRate: Number(mvcFeeRate)
              }
            });
          case 24:
            _likeRes = _context.sent;
            console.log("likeRes", _likeRes);
            if (!(0,ramda__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(_likeRes === null || _likeRes === void 0 ? void 0 : _likeRes.txid)) {
              setLikeCount(likeCount + 1);
              setLikeAddress([].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(likeAddress), [user.address]));
              antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP.success("like buzz successfully");
            }
          case 27:
            _context.next = 35;
            break;
          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](8);
            console.log("error", _context.t0);
            errorMessage = (_message = _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) !== null && _message !== void 0 ? _message : _context.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes("Cannot read properties of undefined") ? "User Canceled" : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP.error(toastMessage);
          case 35:
            setHandleLikeLoading(false);
          case 36:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[8, 29]]);
    }));
    return function handleLike() {
      return _ref2.apply(this, arguments);
    };
  }();
  var loadChildComment = /*#__PURE__*/function () {
    var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2() {
      var _commentRes$data;
      var commentRes, _commentRes$data$comm, list, commentSet;
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setLoading(true);
            _context2.next = 3;
            return (0,_request_api__WEBPACK_IMPORTED_MODULE_4__/* .fetchComments */ .tH)({
              pinId: item.pinId
            });
          case 3:
            commentRes = _context2.sent;
            if (commentRes && (_commentRes$data = commentRes.data) !== null && _commentRes$data !== void 0 && _commentRes$data.comments) {
              list = [].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()((_commentRes$data$comm = commentRes.data.comments) !== null && _commentRes$data$comm !== void 0 ? _commentRes$data$comm : []), _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(childComment));
              commentSet = new Set();
              list = list.filter(function (comment) {
                if (commentSet.has(comment.pinId)) {
                  return false;
                }
                commentSet.add(comment.pinId);
                return true;
              });
              setChildComment(list);
              setShowChildComment(true);
            }
            setLoading(false);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function loadChildComment() {
      return _ref3.apply(this, arguments);
    };
  }();
  var isLiked = (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(function () {
    return likeAddress.includes(user.address);
  }, [likeAddress, user.address]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_UserInfo_PendingUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      address: item.createAddress
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      style: {
        paddingLeft: 48,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        marginTop: 16
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z.Text, {
        children: item === null || item === void 0 ? void 0 : item.content
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
          size: "small",
          type: "link",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {}),
          style: {
            fontSize: 12
          },
          onClick: function onClick(e) {
            e.stopPropagation();
            var link = item.chainName === "btc" ? "".concat(_config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(item.pinId) : "https://".concat(_config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(item.pinId.slice(0, item.pinId.length - 2));
            window.open(link, "_blank");
          },
          children: item.pinId.slice(0, 8)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
          bordered: false,
          color: item.chainName === "mvc" ? "blue" : "orange",
          children: item.chainName.toUpperCase()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z.Text, {
          type: "secondary",
          style: {
            fontSize: 12
          },
          children: dayjs__WEBPACK_IMPORTED_MODULE_8___default().unix(item.timestamp).format("YYYY-MM-DD HH:mm:ss")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {}),
          onClick: /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3() {
            return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (isLogin) {
                    _context3.next = 3;
                    break;
                  }
                  antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP.error((0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatMessage */ .wv)("Please connect your wallet first"));
                  return _context3.abrupt("return");
                case 3:
                  setShowComment(true);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })),
          children: commentCount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
          type: "text",
          loading: handleLikeLoading,
          onClick: handleLike,
          icon: isLiked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
            style: {
              color: "red"
            }
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {}),
          children: likeCount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {}),
          onClick: function onClick() {
            return setShowDonate(true);
          },
          children: donateCount
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
          type: "text",
          icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {}),
          onClick: function onClick() {
            setShowNewPost(true);
          },
          children: forwardCount
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
        style: {
          margin: '8px 0'
        }
      }), commentCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [showChildComment && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: level < 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
            itemLayout: "horizontal",
            dataSource: childComment !== null && childComment !== void 0 ? childComment : [],
            renderItem: function renderItem(item) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(CommentItem, {
                item: item,
                level: level + 1
              }, item.pinId);
            }
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ResponPopup__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
            title: "Replies",
            onClose: function onClose() {
              setShowChildComment(false);
              setChildComment([]);
            },
            show: showChildComment && level >= 1,
            modalWidth: 680,
            bodyStyle: {
              padding: 24
            },
            closable: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_UserInfo_PendingUser__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                address: item.createAddress
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                style: {
                  paddingLeft: 48,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  marginTop: 16
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z.Text, {
                  children: item === null || item === void 0 ? void 0 : item.content
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                    size: "small",
                    type: "link",
                    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {}),
                    style: {
                      fontSize: 12
                    },
                    onClick: function onClick(e) {
                      e.stopPropagation();
                      var link = item.chainName === "btc" ? "".concat(_config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM === "testnet" ? "https://mempool.space/testnet/tx/" : "https://mempool.space/tx/").concat(item.pinId) : "https://".concat(_config__WEBPACK_IMPORTED_MODULE_7__/* .curNetwork */ .eM === "testnet" ? "test" : "www", ".mvcscan.com/tx/").concat(item.pinId.slice(0, item.pinId.length - 2));
                      window.open(link, "_blank");
                    },
                    children: item.pinId.slice(0, 8)
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    bordered: false,
                    color: item.chainName === "mvc" ? "blue" : "orange",
                    children: item.chainName.toUpperCase()
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z.Text, {
                    type: "secondary",
                    style: {
                      fontSize: 12
                    },
                    children: dayjs__WEBPACK_IMPORTED_MODULE_8___default().unix(item.timestamp).format("YYYY-MM-DD HH:mm:ss")
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    justifyContent: 'space-between'
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                    type: "text",
                    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {}),
                    onClick: /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4() {
                      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            if (isLogin) {
                              _context4.next = 3;
                              break;
                            }
                            antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .ZP.error((0,_utils_utils__WEBPACK_IMPORTED_MODULE_9__/* .formatMessage */ .wv)("Please connect your wallet first"));
                            return _context4.abrupt("return");
                          case 3:
                            setShowComment(true);
                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4);
                    })),
                    children: commentCount
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                    type: "text",
                    loading: handleLikeLoading,
                    onClick: handleLike,
                    icon: isLiked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
                      style: {
                        color: "red"
                      }
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {}),
                    children: likeCount
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                    type: "text",
                    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {}),
                    onClick: function onClick() {
                      return setShowDonate(true);
                    },
                    children: donateCount
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
                    type: "text",
                    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {}),
                    onClick: function onClick() {
                      setShowNewPost(true);
                    },
                    children: forwardCount
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
              orientation: "left",
              children: "All Replies"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
              itemLayout: "horizontal",
              dataSource: childComment !== null && childComment !== void 0 ? childComment : [],
              renderItem: function renderItem(item) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(CommentItem, {
                  item: item,
                  level: level + 1
                }, item.pinId);
              }
            })]
          })
        }), commentCount - childComment.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .ZP, {
          type: "link",
          onClick: loadChildComment,
          loading: loading,
          children: ["View all Reply  (", commentCount - childComment.length, ")"]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Comment__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
      tweetId: (_item$pinId = item.pinId) !== null && _item$pinId !== void 0 ? _item$pinId : '',
      onClose: function onClose(mockComment) {
        setShowComment(false);
        if (mockComment) {
          setChildComment([].concat(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1___default()(childComment), [mockComment]));
          setCommentCount(commentCount + 1);
          setShowChildComment(true);
        }
      },
      show: showComment
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_Donate__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      donateAddress: item.createAddress,
      show: showDonate,
      onClose: function onClose() {
        return setShowDonate(false);
      },
      pinId: item.pinId,
      callback: function callback() {
        setDonateCount(donateCount + 1);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_NewPost__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
      show: showNewPost,
      onClose: function onClose() {
        setShowNewPost(false);
      },
      quoteComment: item
    })]
  }, item.pinId);
};
/* harmony default export */ __webpack_exports__.Z = (function (_ref6) {
  var commentData = _ref6.commentData;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
      itemLayout: "horizontal",
      dataSource: commentData !== null && commentData !== void 0 ? commentData : [],
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(CommentItem, {
          item: item,
          level: 0
        }, item.pinId);
      }
    })
  });
});

/***/ }),

/***/ 89614:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90228);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87999);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48305);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UserInfo_PendingUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69101);
/* harmony import */ var _ResponPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47467);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46116);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(48008);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23533);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(37390);
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25688);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75271);
/* harmony import */ var umi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17078);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72898);
/* harmony import */ var _assets_btc_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33401);
/* harmony import */ var _assets_mvc_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61133);
/* harmony import */ var _utils_psbtBuild__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49105);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78488);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32699);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52676);


















/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    callback = _ref.callback,
    pinId = _ref.pinId,
    donateAddress = _ref.donateAddress;
  var _useModel = (0,umi__WEBPACK_IMPORTED_MODULE_7__.useModel)('user'),
    user = _useModel.user,
    chain = _useModel.chain,
    isLogin = _useModel.isLogin,
    checkUserSetting = _useModel.checkUserSetting,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate;
  var _useModel2 = (0,umi__WEBPACK_IMPORTED_MODULE_7__.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
    _useState2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
    donateAmount = _useState2[0],
    setDonateAmount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
    _useState4 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
    donateMessage = _useState4[0],
    setDonateMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
    _useState6 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),
    balance = _useState6[0],
    setBalance = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
    _useState8 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState7, 2),
    paying = _useState8[0],
    setPaying = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .determineAddressInfo */ .uY)(donateAddress) === 'p2pkh' ? chain : 'btc'),
    _useState10 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2___default()(_useState9, 2),
    selectedChain = _useState10[0],
    setSelectedChain = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    var fetchBalance = /*#__PURE__*/function () {
      var _ref2 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee() {
        var bal, _bal;
        return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(isLogin && selectedChain === "btc")) {
                _context.next = 13;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return (0,_utils_psbtBuild__WEBPACK_IMPORTED_MODULE_11__/* .getUtxoBalance */ .xd)();
            case 4:
              bal = _context.sent;
              setBalance(bal);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error("Failed to fetch balance:", _context.t0);
            case 11:
              _context.next = 24;
              break;
            case 13:
              if (!(isLogin && selectedChain === "mvc")) {
                _context.next = 24;
                break;
              }
              _context.prev = 14;
              _context.next = 17;
              return (0,_utils_psbtBuild__WEBPACK_IMPORTED_MODULE_11__/* .getMvcBalance */ .eo)();
            case 17:
              _bal = _context.sent;
              setBalance(_bal);
              _context.next = 24;
              break;
            case 21:
              _context.prev = 21;
              _context.t1 = _context["catch"](14);
              console.error("Failed to fetch balance:", _context.t1);
            case 24:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 8], [14, 21]]);
      }));
      return function fetchBalance() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchBalance();
  }, [isLogin, selectedChain]);
  var isLegacy = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(function () {
    return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .determineAddressInfo */ .uY)(donateAddress) === 'p2pkh';
  }, [donateAddress]);
  var onDonate = /*#__PURE__*/function () {
    var _ref3 = _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2() {
      var isPass, donateEntity, donateRes, _donateEntity, _donateRes, _message, errorMessage, toastMessage;
      return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (isLogin) {
              _context2.next = 3;
              break;
            }
            antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP.error((0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .formatMessage */ .wv)("Please connect your wallet first"));
            return _context2.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return");
          case 6:
            if (!(!donateAmount || parseFloat(donateAmount) <= 0)) {
              _context2.next = 9;
              break;
            }
            antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP.error("Please enter a valid amount");
            return _context2.abrupt("return");
          case 9:
            setPaying(true);
            _context2.prev = 10;
            if (!(selectedChain === "btc")) {
              _context2.next = 23;
              break;
            }
            _context2.next = 14;
            return btcConnector.use("simpledonate");
          case 14:
            donateEntity = _context2.sent;
            _context2.next = 17;
            return donateEntity.create({
              dataArray: [{
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: donateAddress,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: pinId,
                  message: donateMessage
                }),
                flag: _config__WEBPACK_IMPORTED_MODULE_12__/* .FLAG */ .BZ,
                contentType: "application/json;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              }],
              options: {
                noBroadcast: "no",
                feeRate: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_8__/* .getEffectiveBTCFeerate */ .mG)(Number(feeRate)),
                outputs: [{
                  address: donateAddress,
                  satoshis: new decimal_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(donateAmount).times(1e8).toString()
                }],
                service: fetchServiceFee("donate_service_fee_amount", "BTC")
              }
            });
          case 17:
            donateRes = _context2.sent;
            if (!donateRes.status) {
              _context2.next = 20;
              break;
            }
            throw new Error(donateRes.status);
          case 20:
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_13__.isNil)(donateRes === null || donateRes === void 0 ? void 0 : donateRes.revealTxIds[0])) {
              antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP.success("Donate successfully");
              onClose();
              callback && callback();
              setDonateAmount("");
              setDonateMessage("");
            }
            _context2.next = 37;
            break;
          case 23:
            if (!(selectedChain === "mvc")) {
              _context2.next = 36;
              break;
            }
            console.log(chain);
            _context2.next = 27;
            return mvcConnector.use("simpledonate");
          case 27:
            _donateEntity = _context2.sent;
            console.log(_donateEntity, 'donateEntity');
            _context2.next = 31;
            return _donateEntity.create({
              data: {
                body: JSON.stringify({
                  createTime: Date.now().toString(),
                  to: donateAddress,
                  coinType: chain,
                  amount: donateAmount,
                  toPin: pinId,
                  message: donateMessage
                }),
                flag: _config__WEBPACK_IMPORTED_MODULE_12__/* .FLAG */ .BZ,
                contentType: "application/json;utf-8",
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || "", "/protocols/simpledonate")
              },
              options: {
                network: _config__WEBPACK_IMPORTED_MODULE_12__/* .curNetwork */ .eM,
                signMessage: "donate buzz",
                service: fetchServiceFee("donate_service_fee_amount", "MVC"),
                outputs: [{
                  address: donateAddress,
                  satoshis: new decimal_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(donateAmount).times(1e8).toString()
                }]
              }
            });
          case 31:
            _donateRes = _context2.sent;
            console.log(_donateRes, 'donateRes');
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_13__.isNil)(_donateRes === null || _donateRes === void 0 ? void 0 : _donateRes.txid)) {
              antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP.success("Donate successfully");
              onClose();
              callback && callback();
              setDonateAmount("");
              setDonateMessage("");
            }
            _context2.next = 37;
            break;
          case 36:
            throw new Error("Donate not supported on this chain");
          case 37:
            _context2.next = 44;
            break;
          case 39:
            _context2.prev = 39;
            _context2.t0 = _context2["catch"](10);
            errorMessage = (_message = _context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.message) !== null && _message !== void 0 ? _message : _context2.t0;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage;
            antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .ZP.error(toastMessage);
          case 44:
            setPaying(false);
          case 45:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[10, 39]]);
    }));
    return function onDonate() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ResponPopup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    show: show,
    bodyStyle: {
      padding: 40
    },
    onClose: onClose,
    closable: true,
    modalWidth: 680,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UserInfo_PendingUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
      address: donateAddress
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      style: {
        width: "100%",
        marginTop: 12
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        style: {
          position: "relative"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.Title, {
          level: 4,
          style: {
            margin: "0 0 16px 0",
            fontSize: 16,
            fontWeight: 600
          },
          children: "Reward amount"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          style: {
            position: "absolute",
            right: 0,
            top: 0,
            color: "rgba(0, 0, 0, 0.45)",
            fontSize: 14
          },
          children: ["Availabile ", new decimal_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(balance).div(1e8).toFixed(8)]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: "12px",
            padding: "16px",
            marginBottom: "32px",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            maxWidth: "100%",
            boxSizing: "border-box"
          },
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            style: {
              flex: "1 1 0%",
              minWidth: 0,
              overflow: "hidden"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
              placeholder: "Enter amount",
              value: donateAmount,
              onChange: function onChange(e) {
                return setDonateAmount(e.target.value);
              },
              style: {
                border: "none",
                boxShadow: "none",
                fontSize: 16,
                padding: 0,
                color: "rgba(0, 0, 0, 0.88)",
                width: "100%"
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            style: {
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#F5F5F5",
              padding: "4px 12px",
              borderRadius: "20px"
            },
            children: isLegacy ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(antd__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
              value: selectedChain,
              onChange: function onChange(value) {
                return setSelectedChain(value);
              },
              style: {
                width: 100
              },
              options: [{
                value: 'btc',
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
                    src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_9__,
                    alt: "BTC",
                    width: 20,
                    height: 20
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                    children: "BTC"
                  })]
                })
              }, {
                value: 'mvc',
                label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
                    src: _assets_mvc_png__WEBPACK_IMPORTED_MODULE_10__,
                    alt: "MVC",
                    width: 20,
                    height: 20
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                    children: "MVC"
                  })]
                })
              }],
              variant: "borderless",
              dropdownStyle: {
                minWidth: 120
              }
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
                src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_9__,
                alt: "BTC",
                width: 20,
                height: 20,
                style: {
                  flexShrink: 0
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.Text, {
                style: {
                  fontSize: 14,
                  margin: 0,
                  color: "rgba(0, 0, 0, 0.88)"
                },
                children: "BTC"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z.Title, {
          level: 4,
          style: {
            margin: "24px 0 16px 0",
            fontSize: 16,
            fontWeight: 600
          },
          children: "Message"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            width: "100%",
            padding: "16px",
            marginBottom: "32px",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            maxWidth: "100%",
            boxSizing: "border-box"
          },
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(antd__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z.TextArea, {
            placeholder: "Enter message",
            value: donateMessage,
            onChange: function onChange(e) {
              return setDonateMessage(e.target.value);
            },
            style: {
              border: "none",
              boxShadow: "none",
              fontSize: 16,
              padding: 0,
              color: "rgba(0, 0, 0, 0.88)",
              width: "100%",
              resize: "none"
            },
            autoSize: {
              minRows: 2,
              maxRows: 4
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            display: "flex",
            justifyContent: "center"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(antd__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .ZP, {
            type: "primary",
            block: true,
            size: "large",
            shape: "round",
            loading: paying,
            onClick: onDonate,
            style: {
              width: "220px",
              height: "52px",
              background: "linear-gradient(270deg, #F824DA 0%, #FF5815 100%)",
              border: "none",
              fontSize: 16,
              fontWeight: 600,
              color: "#fff"
            },
            children: "Confirm"
          })
        })]
      })
    })]
  });
});

/***/ }),

/***/ 94436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10991);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62319);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38021);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86821);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37390);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9588);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79063);
/* harmony import */ var _Trans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57777);
/* harmony import */ var _assets_btc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33401);
/* harmony import */ var _assets_mvc_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61133);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52676);








/* harmony default export */ __webpack_exports__.Z = (function (_ref) {
  var chainNet = _ref.chainNet,
    setChainNet = _ref.setChainNet,
    BtcLabel = _ref.BtcLabel,
    MvcLabel = _ref.MvcLabel;
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z.useToken(),
    colorFillAlter = _theme$useToken.token.colorFillAlter;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      span: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Text, {
        strong: true,
        type: "secondary",
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
          children: "Select Network"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      span: 24,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          md: 12,
          xs: 24,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
            onClick: function onClick() {
              setChainNet('btc');
            },
            style: {
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: colorFillAlter
            },
            block: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: _assets_btc_png__WEBPACK_IMPORTED_MODULE_1__,
                style: {
                  height: 40,
                  width: 40
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Text, {
                children: "BTC Network"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
              checked: chainNet === 'btc'
            })]
          }), BtcLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              marginTop: 12
            },
            children: BtcLabel
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          md: 12,
          xs: 24,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP, {
            onClick: function onClick() {
              setChainNet('mvc');
            },
            style: {
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: colorFillAlter
            },
            block: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: 20
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: _assets_mvc_png__WEBPACK_IMPORTED_MODULE_2__,
                style: {
                  height: 40,
                  width: 40
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: 'column',
                  gap: 4
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Text, {
                  children: "MicrovisionChain"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                  style: {
                    fontSize: 8,
                    width: 80,
                    lineHeight: 1.2,
                    textAlign: 'center'
                  },
                  color: "orange",
                  bordered: false,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Trans__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
                    children: "Bitcoin Sidechain"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP, {
              checked: chainNet === 'mvc'
            })]
          }), MvcLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              marginTop: 12
            },
            children: MvcLabel
          })]
        })]
      })
    })]
  });
});

/***/ }),

/***/ 4457:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ NewPost; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(82092);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(335);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 29 modules
var _umi_production_exports = __webpack_require__(17078);
// EXTERNAL MODULE: ./src/Components/ResponPopup/index.tsx + 1 modules
var ResponPopup = __webpack_require__(47467);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(48008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(46116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/upload/index.js + 11 modules
var upload = __webpack_require__(39916);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(31218);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(86821);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(62319);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 17 modules
var typography = __webpack_require__(38021);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/mentions/index.js + 1 modules
var es_mentions = __webpack_require__(87907);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(37390);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/segmented/index.js + 1 modules
var segmented = __webpack_require__(60541);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input-number/index.js + 2 modules
var input_number = __webpack_require__(18105);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/checkbox/index.js + 3 modules
var es_checkbox = __webpack_require__(42657);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/result/index.js + 4 modules
var result = __webpack_require__(15025);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(99478);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UnlockOutlined.js + 1 modules
var UnlockOutlined = __webpack_require__(73646);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LockOutlined.js + 1 modules
var LockOutlined = __webpack_require__(31103);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(14258);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileTextOutlined.js + 1 modules
var FileTextOutlined = __webpack_require__(31178);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(24573);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ExclamationCircleOutlined.js + 1 modules
var ExclamationCircleOutlined = __webpack_require__(20860);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(66118);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/FileImageOutlined.js + 1 modules
var FileImageOutlined = __webpack_require__(48155);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SmileOutlined.js + 1 modules
var SmileOutlined = __webpack_require__(3622);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/VideoCameraOutlined.js + 1 modules
var VideoCameraOutlined = __webpack_require__(85347);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./src/utils/file.ts
var file = __webpack_require__(99915);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isNil.js
var isNil = __webpack_require__(27465);
// EXTERNAL MODULE: ./node_modules/.pnpm/ramda@0.30.1/node_modules/ramda/es/isEmpty.js + 16 modules
var isEmpty = __webpack_require__(42879);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(86173);
// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.74.3_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var useQuery = __webpack_require__(82296);
// EXTERNAL MODULE: ./src/Components/Buzz/index.tsx + 14 modules
var Buzz = __webpack_require__(76560);
// EXTERNAL MODULE: ./src/assets/btc.png
var btc = __webpack_require__(33401);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(72898);
// EXTERNAL MODULE: ./src/utils/buzz.ts
var utils_buzz = __webpack_require__(518);
// EXTERNAL MODULE: ./src/request/api.ts
var api = __webpack_require__(9807);
// EXTERNAL MODULE: ./src/Components/UserAvatar/index.tsx
var UserAvatar = __webpack_require__(29333);
// EXTERNAL MODULE: ./src/Components/Trans/index.tsx
var Trans = __webpack_require__(57777);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(10991);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(10443);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 5 modules
var spin = __webpack_require__(55576);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(47151);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.24.7_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/collapse/index.js + 3 modules
var collapse = __webpack_require__(8546);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(3642);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/Components/NFTModal/index.tsx

















/* harmony default export */ var NFTModal = (function (_ref) {
  var onClose = _ref.onClose,
    show = _ref.show,
    nfts = _ref.nfts,
    setNFTs = _ref.setNFTs;
  var _useIntl = (0,_umi_production_exports.useIntl)(),
    formatMessage = _useIntl.formatMessage;
  var _theme$useToken = theme/* default */.Z.useToken(),
    _theme$useToken$token = _theme$useToken.token,
    colorBorderSecondary = _theme$useToken$token.colorBorderSecondary,
    colorPrimary = _theme$useToken$token.colorPrimary;
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    chain = _useModel.chain,
    btcConnector = _useModel.btcConnector,
    mvcConnector = _useModel.mvcConnector;
  var _useState = (0,react.useState)(chain),
    _useState2 = slicedToArray_default()(_useState, 2),
    chainNetwork = _useState2[0],
    setChainNetwork = _useState2[1];
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['nfts', chainNetwork],
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var _collections$data;
          var address, collections, userNFTs, _iterator, _step, collection, _nfts;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                address = chainNetwork === 'btc' ? btcConnector.address : mvcConnector.address;
                _context.next = 3;
                return (0,api/* getUserNFTCollections */.SW)({
                  address: address,
                  cousor: 0,
                  size: 100
                });
              case 3:
                collections = _context.sent;
                userNFTs = [];
                if (!((_collections$data = collections.data) !== null && _collections$data !== void 0 && _collections$data.list)) {
                  _context.next = 25;
                  break;
                }
                _iterator = createForOfIteratorHelper_default()(collections.data.list);
                _context.prev = 7;
                _iterator.s();
              case 9:
                if ((_step = _iterator.n()).done) {
                  _context.next = 17;
                  break;
                }
                collection = _step.value;
                _context.next = 13;
                return (0,api/* getUserNFTCollectionItems */.G1)({
                  address: address,
                  cousor: 0,
                  size: 100,
                  pinId: collection.pinid
                });
              case 13:
                _nfts = _context.sent;
                userNFTs.push(objectSpread2_default()(objectSpread2_default()({}, collection), {}, {
                  items: _nfts.data.list.map(function (nft) {
                    try {
                      var img = JSON.parse(atob(nft.content)).attachment[0].content;
                      return objectSpread2_default()(objectSpread2_default()({}, nft), {}, {
                        previewImage: "".concat(config/* BASE_MAN_URL */.yC, "/content/").concat(img.replace('metafile://', ''))
                      });
                    } catch (e) {
                      return nft;
                    }
                  })
                }));
              case 15:
                _context.next = 9;
                break;
              case 17:
                _context.next = 22;
                break;
              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](7);
                _iterator.e(_context.t0);
              case 22:
                _context.prev = 22;
                _iterator.f();
                return _context.finish(22);
              case 25:
                return _context.abrupt("return", userNFTs);
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[7, 19, 22, 25]]);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    isLoading = _useQuery.isLoading,
    isFetching = _useQuery.isFetching,
    data = _useQuery.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: onClose,
    show: show,
    modalWidth: 640,
    closable: true,
    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "My NFT"
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
      options: [{
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "Bitcoin"
        }),
        value: 'btc'
      }, {
        label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
          children: "MVC"
        }),
        value: 'mvc'
      }],
      value: chainNetwork,
      onChange: function onChange(value) {
        setChainNetwork(value);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
      theme: {
        components: {
          Collapse: {
            headerBg: 'transparent',
            colorBorder: colorBorderSecondary
          }
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(spin/* default */.Z, {
        spinning: isLoading || isFetching,
        children: [!isLoading && (data !== null && data !== void 0 ? data : []).length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
          direction: "vertical",
          style: {
            width: '100%',
            marginTop: 20
          },
          children: (data !== null && data !== void 0 ? data : []).map(function (item) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
              style: {
                width: '100%'
              },
              defaultActiveKey: ['1'],
              expandIconPosition: "end",
              items: [{
                key: '1',
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  children: item.name
                }),
                styles: {
                  body: {
                    borderTop: '0px solid transparent'
                  }
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 20
                  },
                  children: item.items.map(function (nft) {
                    var _find = nfts.find(function (_nft) {
                      return _nft.itemPinId === nft.itemPinId;
                    });
                    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      style: {
                        position: 'relative',
                        cursor: 'pointer',
                        borderRadius: 8,
                        border: _find ? "1px solid ".concat(colorPrimary) : 'none',
                        overflow: 'hidden'
                      },
                      onClick: function onClick(item) {
                        if (!_find && nfts.length >= 2) {
                          message/* default */.ZP.error(formatMessage({
                            id: 'You can only select 2 NFTs'
                          }));
                          return;
                        }
                        setNFTs(!_find ? [].concat(toConsumableArray_default()(nfts), [nft]) : nfts.filter(function (_nft) {
                          return _nft.itemPinId !== nft.itemPinId;
                        }));
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                        size: "small",
                        style: {
                          position: 'absolute',
                          top: 4,
                          right: 4
                        },
                        variant: "filled",
                        color: "primary",
                        shape: "circle",
                        icon: _find ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckOutlined/* default */.Z, {}) : ''
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                        src: nft.previewImage,
                        alt: nft.name,
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }
                      })]
                    }, nft.itemPinId);
                  })
                })
              }]
            }, item.pinid);
          })
        })]
      })
    })]
  });
});
// EXTERNAL MODULE: ./src/Components/NewPost/SelectChain.tsx
var SelectChain = __webpack_require__(94436);
// EXTERNAL MODULE: ./src/entities/buzz.ts
var entities_buzz = __webpack_require__(95855);
// EXTERNAL MODULE: ./node_modules/.pnpm/idb@8.0.3/node_modules/idb/build/index.js
var build = __webpack_require__(22113);
;// CONCATENATED MODULE: ./src/utils/idb.ts



var DB_NAME = 'PostDraftDB';
var STORE_NAME = 'draft_files';
var dbPromise;
function getDB() {
  return _getDB.apply(this, arguments);
} // 批量保存上传项
function _getDB() {
  _getDB = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!dbPromise) {
            dbPromise = (0,build/* openDB */.X3)(DB_NAME, 1, {
              upgrade: function upgrade(db) {
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                  db.createObjectStore(STORE_NAME, {
                    keyPath: 'id'
                  });
                }
              }
            });
          }
          return _context.abrupt("return", dbPromise);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getDB.apply(this, arguments);
}
function saveUploadItemsToDraft(_x) {
  return _saveUploadItemsToDraft.apply(this, arguments);
}

// 获取所有文件
function _saveUploadItemsToDraft() {
  _saveUploadItemsToDraft = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(fileItems) {
    var db, tx;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!Array.isArray(fileItems) || fileItems.length === 0)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return");
        case 2:
          _context2.next = 4;
          return getDB();
        case 4:
          db = _context2.sent;
          tx = db.transaction(STORE_NAME, 'readwrite');
          fileItems.forEach(function (fileItem) {
            console.log('fileItem', fileItem);
            if (fileItem.file && fileItem.uid) {
              tx.store.put({
                id: fileItem.uid,
                file: fileItem.file,
                createdAt: Date.now()
              });
            }
          });
          _context2.next = 9;
          return tx.done;
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _saveUploadItemsToDraft.apply(this, arguments);
}
function getUploadDraftList() {
  return _getUploadDraftList.apply(this, arguments);
}

// 删除单个文件
function _getUploadDraftList() {
  _getUploadDraftList = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
    var db, all;
    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return getDB();
        case 2:
          db = _context3.sent;
          _context3.next = 5;
          return db.getAll(STORE_NAME);
        case 5:
          all = _context3.sent;
          return _context3.abrupt("return", all.map(function (item) {
            return {
              uid: item.id,
              file: item.file,
              previewUrl: URL.createObjectURL(item.file),
              createdAt: item.createdAt
            };
          }));
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _getUploadDraftList.apply(this, arguments);
}
function deleteDraftFile(_x2) {
  return _deleteDraftFile.apply(this, arguments);
}

// 清空所有
function _deleteDraftFile() {
  _deleteDraftFile = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(uid) {
    var db;
    return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return getDB();
        case 2:
          db = _context4.sent;
          _context4.next = 5;
          return db["delete"](STORE_NAME, uid);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _deleteDraftFile.apply(this, arguments);
}
function clearDraftFiles() {
  return _clearDraftFiles.apply(this, arguments);
}
function _clearDraftFiles() {
  _clearDraftFiles = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
    var db;
    return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return getDB();
        case 2:
          db = _context5.sent;
          _context5.next = 5;
          return db.clear(STORE_NAME);
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _clearDraftFiles.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/Components/MRC20Icon/index.tsx
var MRC20Icon = __webpack_require__(97691);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js
var debounce = __webpack_require__(66292);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./src/Components/UserInfo/PendingUserAvatar.tsx
var PendingUserAvatar = __webpack_require__(35711);
// EXTERNAL MODULE: ./node_modules/.pnpm/emoji-picker-react@4.13.2_react@18.3.1/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js + 1 modules
var emoji_picker_react_esm = __webpack_require__(60916);
// EXTERNAL MODULE: ./src/utils/IDCoinStore.ts
var IDCoinStore = __webpack_require__(29577);
// EXTERNAL MODULE: ./src/Components/CommentPanel/index.tsx
var CommentPanel = __webpack_require__(48246);
;// CONCATENATED MODULE: ./src/Components/NewPost/index.tsx
/* provided dependency */ var Buffer = __webpack_require__(36379)["Buffer"];




































var TextArea = input/* default */.Z.TextArea;
var getBase64 = function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};
/* harmony default export */ var NewPost = (function (_ref) {
  var _IdCoin$deployerUserI;
  var show = _ref.show,
    _onClose = _ref.onClose,
    quotePin = _ref.quotePin,
    quoteComment = _ref.quoteComment;
  var isQuoted = !(0,isNil/* default */.Z)(quotePin) || !(0,isNil/* default */.Z)(quoteComment);
  var _useModel = (0,_umi_production_exports.useModel)('user'),
    user = _useModel.user,
    btcConnector = _useModel.btcConnector,
    feeRate = _useModel.feeRate,
    mvcFeeRate = _useModel.mvcFeeRate,
    chain = _useModel.chain,
    mvcConnector = _useModel.mvcConnector,
    checkUserSetting = _useModel.checkUserSetting,
    isLogin = _useModel.isLogin,
    setMockBuzz = _useModel.setMockBuzz;
  var _useState = (0,react.useState)(chain),
    _useState2 = slicedToArray_default()(_useState, 2),
    chainNet = _useState2[0],
    setChainNet = _useState2[1];
  var _useModel2 = (0,_umi_production_exports.useModel)('dashboard'),
    showConf = _useModel2.showConf,
    fetchServiceFee = _useModel2.fetchServiceFee,
    manPubKey = _useModel2.manPubKey,
    admin = _useModel2.admin;
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    images = _useState4[0],
    setImages = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = slicedToArray_default()(_useState5, 2),
    otherFiles = _useState6[0],
    setOtherFiles = _useState6[1];
  var _useState7 = (0,react.useState)(),
    _useState8 = slicedToArray_default()(_useState7, 2),
    video = _useState8[0],
    _setVideo = _useState8[1];
  var _useState9 = (0,react.useState)(localStorage.getItem('tmp_content') || ''),
    _useState10 = slicedToArray_default()(_useState9, 2),
    content = _useState10[0],
    setContent = _useState10[1];
  var _useState11 = (0,react.useState)(''),
    _useState12 = slicedToArray_default()(_useState11, 2),
    encryptContent = _useState12[0],
    setEncryptContent = _useState12[1];
  var _useState13 = (0,react.useState)(false),
    _useState14 = slicedToArray_default()(_useState13, 2),
    isAdding = _useState14[0],
    setIsAdding = _useState14[1];
  var queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
  var _useState15 = (0,react.useState)(false),
    _useState16 = slicedToArray_default()(_useState15, 2),
    lock = _useState16[0],
    setLock = _useState16[1];
  var _useState17 = (0,react.useState)('mrc20'),
    _useState18 = slicedToArray_default()(_useState17, 2),
    payType = _useState18[0],
    setPayType = _useState18[1];
  var _useState19 = (0,react.useState)(0.00001),
    _useState20 = slicedToArray_default()(_useState19, 2),
    payAmount = _useState20[0],
    setPayAmount = _useState20[1];
  var _useState21 = (0,react.useState)(1),
    _useState22 = slicedToArray_default()(_useState21, 2),
    payMrc20Amount = _useState22[0],
    setPayMrc20Amount = _useState22[1];
  var _useState23 = (0,react.useState)(''),
    _useState24 = slicedToArray_default()(_useState23, 2),
    holdTokenID = _useState24[0],
    setHoldTokenID = _useState24[1];
  var _useState25 = (0,react.useState)(),
    _useState26 = slicedToArray_default()(_useState25, 2),
    mrc20 = _useState26[0],
    setMrc20 = _useState26[1];
  var _useState27 = (0,react.useState)(''),
    _useState28 = slicedToArray_default()(_useState27, 2),
    checkTokenID = _useState28[0],
    setCheckTokenID = _useState28[1];
  var _useState29 = (0,react.useState)([]),
    _useState30 = slicedToArray_default()(_useState29, 2),
    encryptFiles = _useState30[0],
    setEncryptFiles = _useState30[1];
  var _useState31 = (0,react.useState)(false),
    _useState32 = slicedToArray_default()(_useState31, 2),
    showNFTModal = _useState32[0],
    setShowNFTModal = _useState32[1];
  var _useState33 = (0,react.useState)([]),
    _useState34 = slicedToArray_default()(_useState33, 2),
    nfts = _useState34[0],
    setNFTs = _useState34[1];
  var _useState35 = (0,react.useState)({}),
    _useState36 = slicedToArray_default()(_useState35, 2),
    mentions = _useState36[0],
    setMentions = _useState36[1];
  var _useState37 = (0,react.useState)(false),
    _useState38 = slicedToArray_default()(_useState37, 2),
    showEmojiPicker = _useState38[0],
    setShowEmojiPicker = _useState38[1];
  var _useState39 = (0,react.useState)(false),
    _useState40 = slicedToArray_default()(_useState39, 2),
    loading = _useState40[0],
    setLoading = _useState40[1];
  var _useState41 = (0,react.useState)([]),
    _useState42 = slicedToArray_default()(_useState41, 2),
    users = _useState42[0],
    setUsers = _useState42[1];
  var ref = (0,react.useRef)(null);
  var _useState43 = (0,react.useState)('content'),
    _useState44 = slicedToArray_default()(_useState43, 2),
    lastFocus = _useState44[0],
    setLastFocus = _useState44[1];
  var loadGithubUsers = function loadGithubUsers(key) {
    if (!key) {
      setUsers([]);
      return;
    }
    console.log(key, "key");
    IDCoinStore/* default */.ZP.getByTickPrefix(key.toUpperCase()).then(function (res) {
      setLoading(false);
      setUsers(res);
    });
  };
  var debounceLoadGithubUsers = (0,react.useCallback)(debounce_default()(loadGithubUsers, 800), []);
  var onSearch = function onSearch(search) {
    console.log('Search:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };

  // const setImages = (images: any[]) => {
  //     images ? localStorage.setItem('tmp_images', JSON.stringify(images)) : localStorage.removeItem('tmp_images');
  //     _setImages(images);
  // }

  // const setContent = (_content: string) => {

  //     _setContent(_content);

  // }

  var setVideo = function setVideo(video) {
    // video ? localStorage.setItem('tmp_video', JSON.stringify(video)) : localStorage.removeItem('tmp_video');
    _setVideo(video);
  };
  var handleBeforeUpload = function handleBeforeUpload(file) {
    var isImage = file.type.startsWith('image/');
    if (!isImage) {
      message/* default */.ZP.error('You can only upload image file!');
      return upload/* default */.Z.LIST_IGNORE;
    }
    var _checkImageSize = (0,utils/* checkImageSize */.O3)(file),
      _checkImageSize2 = slicedToArray_default()(_checkImageSize, 2),
      check = _checkImageSize2[0],
      msg = _checkImageSize2[1];
    if (!check) {
      message/* default */.ZP.error(msg);
      return upload/* default */.Z.LIST_IGNORE;
    }
    var previewUrl = URL.createObjectURL(file);
    setImages(function (prevImages) {
      return [].concat(toConsumableArray_default()(prevImages), [{
        file: file,
        previewUrl: previewUrl
      }]);
    });
    saveUploadItemsToDraft([].concat(toConsumableArray_default()(images), [{
      file: file,
      previewUrl: previewUrl
    }]).map(function (item) {
      return {
        uid: item.file.uid,
        file: item.file,
        previewUrl: item.previewUrl
      };
    }));
    return false;
  };
  var handleOtherFilesUpload = function handleOtherFilesUpload(file) {
    var _fileName$split$pop;
    // 检查文件大小限制 (10MB)
    if (file.size > 1024 * 1024 * 10) {
      message/* default */.ZP.error('File size must be less than 10MB');
      return upload/* default */.Z.LIST_IGNORE;
    }

    // 获取文件扩展名
    var fileName = file.name;
    var extension = ((_fileName$split$pop = fileName.split('.').pop()) === null || _fileName$split$pop === void 0 ? void 0 : _fileName$split$pop.toLowerCase()) || '';

    // 支持的文件类型
    var supportedTypes = [
    // 文档类型
    'pdf', 'doc', 'docx', 'txt', 'rtf',
    // 压缩包类型  
    'zip', 'rar', '7z', 'tar', 'gz',
    // 音频类型
    'mp3', 'aac', 'wav', 'flac', 'ogg',
    // 其他类型
    'json', 'xml', 'csv'];
    if (!supportedTypes.includes(extension)) {
      message/* default */.ZP.error("Unsupported file type: ".concat(extension));
      return upload/* default */.Z.LIST_IGNORE;
    }
    var fileItem = {
      file: file,
      fileName: fileName,
      extension: extension,
      previewUrl: URL.createObjectURL(file)
    };
    setOtherFiles(function (prevFiles) {
      return [].concat(toConsumableArray_default()(prevFiles), [fileItem]);
    });
    return false;
  };
  var reset = function reset() {
    setContent('');
    setImages([]);
    setOtherFiles([]);
    setVideo(undefined);
    setEncryptContent('');
    setEncryptFiles([]);
    setNFTs([]);
    setLock(false);
    clearDraftFiles();
  };
  var handleVideoBeforeUpload = function handleVideoBeforeUpload(file) {
    var isVideo = file.type.startsWith('video/');
    if (!isVideo) {
      message/* default */.ZP.error('You can only upload video file!');
      return upload/* default */.Z.LIST_IGNORE;
    }
    if (file.size > 1024 * 1024 * 5) {
      message/* default */.ZP.error('The video size must be less than 5MB');
      return upload/* default */.Z.LIST_IGNORE;
    }
    var previewUrl = URL.createObjectURL(file);
    setVideo({
      file: file,
      previewUrl: previewUrl
    });
    return false;
  };
  var handleRemoveImage = function handleRemoveImage(index) {
    var _image$file;
    var image = images[index];
    setImages(function (prevImages) {
      return prevImages.filter(function (_, i) {
        return i !== index;
      });
    });
    deleteDraftFile(image.uid || ((_image$file = image.file) === null || _image$file === void 0 ? void 0 : _image$file.uid));
  };
  var handleRemoveOtherFile = function handleRemoveOtherFile(index) {
    setOtherFiles(function (prevFiles) {
      return prevFiles.filter(function (_, i) {
        return i !== index;
      });
    });
  };
  var handleRemoveVideo = function handleRemoveVideo() {
    setVideo(undefined);
  };
  var onCreateSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var isPass, _mentions, _i, _Object$entries, _Object$entries$_i, key, value, _images;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (isLogin) {
              _context.next = 3;
              break;
            }
            message/* default */.ZP.error((0,utils/* formatMessage */.wv)('Please connect your wallet first'));
            return _context.abrupt("return");
          case 3:
            isPass = checkUserSetting();
            if (isPass) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return");
          case 6:
            setIsAdding(true);
            _mentions = objectSpread2_default()({}, mentions);
            if (_mentions && Object.keys(_mentions).length > 0) {
              for (_i = 0, _Object$entries = Object.entries(_mentions); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = slicedToArray_default()(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                if (content.indexOf("@".concat(key, " ")) === -1) {
                  delete _mentions[key];
                }
              }
            }
            if (!(images.length !== 0)) {
              _context.next = 15;
              break;
            }
            _context.next = 12;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(images));
          case 12:
            _context.t0 = _context.sent;
            _context.next = 16;
            break;
          case 15:
            _context.t0 = [];
          case 16:
            _images = _context.t0;
            if (!lock) {
              _context.next = 21;
              break;
            }
            handleAddBuzzWhthLock(_mentions);
            _context.next = 23;
            break;
          case 21:
            _context.next = 23;
            return handleAddBuzz({
              content: content,
              mentions: _mentions,
              images: _images,
              otherFiles: otherFiles
            });
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onCreateSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  var _useQuery = (0,useQuery/* useQuery */.a)({
      queryKey: ['idCoin', user],
      enabled: Boolean(user && show),
      queryFn: function () {
        var _queryFn = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
          var address, ret, userInfo;
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return window.metaidwallet.btc.getAddress();
              case 2:
                address = _context2.sent;
                _context2.next = 5;
                return (0,api/* getDeployList */.By)({
                  address: address,
                  tickType: 'idcoins'
                });
              case 5:
                ret = _context2.sent;
                if (!(ret.data.length > 0)) {
                  _context2.next = 11;
                  break;
                }
                _context2.next = 9;
                return (0,api/* getUserInfo */.bG)({
                  address: address
                });
              case 9:
                userInfo = _context2.sent;
                return _context2.abrupt("return", objectSpread2_default()(objectSpread2_default()({}, ret.data[0]), {}, {
                  deployerUserInfo: userInfo
                }));
              case 11:
                return _context2.abrupt("return", undefined);
              case 12:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function queryFn() {
          return _queryFn.apply(this, arguments);
        }
        return queryFn;
      }()
    }),
    isLoading = _useQuery.isLoading,
    IdCoin = _useQuery.data;
  var handleAddBuzz = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(buzz) {
      var buzzEntity, fileTransactions, TxMap, finalBody, _yield$postVideo, metafile, transactions, fileOptions, _iterator, _step, image, fileEntity, imageRes, _fileEntity, finalAttachMetafileUri, i, _imageFile$fileName$s, fileOption, _ref4, _transactions, imageFile, extension, _fileEntity2, _loop, _i2, createRes, _showConf$host, _createRes2, _buzzEntity, _createRes, _message, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee3$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setIsAdding(true);
            _context4.next = 3;
            return btcConnector.use('buzz');
          case 3:
            buzzEntity = _context4.sent;
            fileTransactions = [];
            TxMap = new Map();
            _context4.prev = 6;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            finalBody = {
              content: buzz.content,
              contentType: 'application/json;utf-8'
              // mentions: mentions || {}
            };
            if (!(video && chainNet === 'mvc')) {
              _context4.next = 16;
              break;
            }
            _context4.next = 11;
            return (0,utils_buzz/* postVideo */.At)(video.file, (showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', chainNet, btcConnector, mvcConnector, mvcFeeRate);
          case 11:
            _yield$postVideo = _context4.sent;
            metafile = _yield$postVideo.metafile;
            transactions = _yield$postVideo.transactions;
            fileTransactions = transactions;
            finalBody.attachments = [metafile];
            // let chunkTransactions: MvcTransaction[] = [];

            // const chunkSize = 1024 * 1024 * 0.2
            // const { chunks, chunkNumber, sha256, fileSize, dataType, name } = await processFile(video.file, chunkSize);
            // let chunkPids: string[] = [];
            // const chunkList = []
            // for (let i = 0; i < chunks.length; i++) {
            //     const { chunk, hash } = chunks[i];
            //     const metaidData: InscribeData = {
            //         operation: "create",
            //         body: chunk,
            //         path: `${showConf?.host || ''}/file/chunk/${hash}`,
            //         contentType: "metafile/chunk;binary",
            //         encoding: "base64",
            //         flag: "metaid",
            //     };
            //     if (chain === 'btc') {
            //         // todo
            //     } else {
            //         const serialAction = (i + 1) % 2 === 0 ? 'finish' : "combo";
            //         const { transactions, txid } = await mvcConnector!.createPin(
            //             metaidData,
            //             {
            //                 network: curNetwork,
            //                 signMessage: "file chunk",
            //                 serialAction: serialAction,
            //                 transactions: chunkTransactions,
            //             }
            //         );
            //         if (txid) {
            //             TxMap.set(hash, txid)
            //         }
            //         if (transactions) {
            //             transactions.forEach(tx => {
            //                 if (!TxMap.has(hash)) {
            //                     TxMap.set(hash, tx)
            //                 }
            //             })
            //         }

            //         // chunkList.push({
            //         //     sha256: hash,
            //         //     pinId: txid ? `${txid}i0` : transactions![transactions!.length - 1].txComposer.getTxId() + 'i0'
            //         // })
            //         chunkTransactions = transactions as MvcTransaction[];
            //     }
            // }
            // console.log('chunkPids', chunkPids);
            // const metaidData: InscribeData = {
            //     operation: "create",
            //     body: JSON.stringify({
            //         chunkList:chunks.map(({hash, chunk}) => ({
            //             sha256: hash,
            //             pinId: typeof TxMap.get(hash) === 'string' ? TxMap.get(hash)+'i0' : (TxMap.get(hash) as MvcTransaction).txComposer.getTxId() + 'i0'
            //         })),
            //         fileSize,
            //         chunkSize,
            //         dataType,
            //         name,
            //         chunkNumber,
            //         sha256,
            //     }),
            //     path: `${showConf?.host || ''}/file/index/${uuidv4()}`,
            //     contentType: "metafile/index;utf-8",
            //     flag: "metaid",
            // };

            // console.log('metaidData', metaidData);
            // const { transactions: pinTransations } = await mvcConnector!.createPin(
            //     metaidData,
            //     {
            //         network: curNetwork,
            //         signMessage: "file index",
            //         serialAction: "combo",
            //         transactions: [...chunkTransactions],
            //     }
            // );
            // fileTransactions = pinTransations as MvcTransaction[];
            // finalBody.attachments = [...finalBody.attachments || [], 'metafile://video/' + fileTransactions[fileTransactions.length - 1].txComposer.getTxId() + 'i0']
          case 16:
            if ((0,isEmpty/* default */.Z)(buzz.images)) {
              _context4.next = 52;
              break;
            }
            fileOptions = [];
            _iterator = createForOfIteratorHelper_default()(buzz.images);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                image = _step.value;
                fileOptions.push({
                  body: Buffer.from(image.data, 'hex').toString('base64'),
                  contentType: "".concat(image.fileType, ";binary"),
                  encoding: 'base64',
                  flag: config/* FLAG */.BZ,
                  path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/file")
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            if (!(chainNet === 'btc')) {
              _context4.next = 31;
              break;
            }
            _context4.next = 23;
            return btcConnector.use('file');
          case 23:
            fileEntity = _context4.sent;
            _context4.next = 26;
            return fileEntity.create({
              dataArray: fileOptions,
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate))
              }
            });
          case 26:
            imageRes = _context4.sent;
            console.log('imageRes', imageRes);
            finalBody.attachments = [].concat(toConsumableArray_default()(finalBody.attachments || []), toConsumableArray_default()(imageRes.revealTxIds.map(function (rid) {
              return 'metafile://' + rid + 'i0';
            })));
            _context4.next = 52;
            break;
          case 31:
            _context4.next = 33;
            return mvcConnector.use('file');
          case 33:
            _fileEntity = _context4.sent;
            finalAttachMetafileUri = [];
            i = 0;
          case 36:
            if (!(i < fileOptions.length)) {
              _context4.next = 51;
              break;
            }
            fileOption = fileOptions[i];
            _context4.next = 40;
            return _fileEntity.create({
              data: fileOption,
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'upload image file',
                serialAction: 'combo',
                transactions: fileTransactions,
                feeRate: mvcFeeRate
              }
            });
          case 40:
            _ref4 = _context4.sent;
            _transactions = _ref4.transactions;
            if (_transactions) {
              _context4.next = 44;
              break;
            }
            throw new Error('upload image file failed');
          case 44:
            // 获取对应图片的扩展名
            imageFile = buzz.images[i];
            extension = imageFile.fileName ? ".".concat((_imageFile$fileName$s = imageFile.fileName.split('.').pop()) === null || _imageFile$fileName$s === void 0 ? void 0 : _imageFile$fileName$s.toLowerCase()) : '';
            finalAttachMetafileUri.push('metafile://' + _transactions[_transactions.length - 1].txComposer.getTxId() + 'i0' + extension);
            fileTransactions = _transactions;
          case 48:
            i++;
            _context4.next = 36;
            break;
          case 51:
            finalBody.attachments = [].concat(toConsumableArray_default()(finalBody.attachments || []), finalAttachMetafileUri);
          case 52:
            if (!(chainNet === 'mvc' && buzz.otherFiles && buzz.otherFiles.length > 0)) {
              _context4.next = 63;
              break;
            }
            _context4.next = 55;
            return mvcConnector.use('file');
          case 55:
            _fileEntity2 = _context4.sent;
            _loop = /*#__PURE__*/regeneratorRuntime_default()().mark(function _loop() {
              var otherFile, fileData, fileOption, _ref5, transactions, extension, metafileUri;
              return regeneratorRuntime_default()().wrap(function _loop$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    otherFile = buzz.otherFiles[_i2];
                    _context3.next = 3;
                    return new Promise(function (resolve, reject) {
                      var reader = new FileReader();
                      reader.onload = function () {
                        var arrayBuffer = reader.result;
                        var uint8Array = new Uint8Array(arrayBuffer);

                        // 分块处理大文件，避免堆栈溢出
                        var binaryString = '';
                        var chunkSize = 8192; // 8KB chunks
                        for (var _i3 = 0; _i3 < uint8Array.length; _i3 += chunkSize) {
                          var chunk = uint8Array.slice(_i3, _i3 + chunkSize);
                          binaryString += String.fromCharCode.apply(null, Array.from(chunk));
                        }
                        var base64String = btoa(binaryString);
                        resolve(base64String);
                      };
                      reader.onerror = reject;
                      reader.readAsArrayBuffer(otherFile.file);
                    });
                  case 3:
                    fileData = _context3.sent;
                    fileOption = {
                      body: fileData,
                      contentType: "".concat(otherFile.file.type || 'application/octet-stream', ";binary"),
                      encoding: 'base64',
                      flag: config/* FLAG */.BZ,
                      path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/file")
                    };
                    _context3.next = 7;
                    return _fileEntity2.create({
                      data: fileOption,
                      options: {
                        network: config/* curNetwork */.eM,
                        signMessage: 'upload other file',
                        serialAction: 'combo',
                        transactions: fileTransactions,
                        feeRate: mvcFeeRate
                      }
                    });
                  case 7:
                    _ref5 = _context3.sent;
                    transactions = _ref5.transactions;
                    if (transactions) {
                      _context3.next = 11;
                      break;
                    }
                    throw new Error('upload other file failed');
                  case 11:
                    // 添加文件扩展名到metafile URI
                    extension = otherFile.extension ? ".".concat(otherFile.extension) : '';
                    metafileUri = 'metafile://' + transactions[transactions.length - 1].txComposer.getTxId() + 'i0' + extension;
                    finalBody.attachments = [].concat(toConsumableArray_default()(finalBody.attachments || []), [metafileUri]);
                    fileTransactions = transactions;
                  case 15:
                  case "end":
                    return _context3.stop();
                }
              }, _loop);
            });
            _i2 = 0;
          case 58:
            if (!(_i2 < buzz.otherFiles.length)) {
              _context4.next = 63;
              break;
            }
            return _context4.delegateYield(_loop(), "t0", 60);
          case 60:
            _i2++;
            _context4.next = 58;
            break;
          case 63:
            //   await sleep(5000);

            if (!(0,isNil/* default */.Z)(quotePin)) {
              finalBody.quotePin = quotePin.id;
            }
            if (!(0,isNil/* default */.Z)(quoteComment)) {
              finalBody.quotePin = quoteComment.pinId;
            }
            if (nfts.length > 0) {
              finalBody.attachments = [].concat(toConsumableArray_default()(nfts.map(function (nft) {
                return "metafile://nft/mrc721/".concat(nft.itemPinId);
              })), toConsumableArray_default()(finalBody.attachments || []));
            }
            if (!(chainNet === 'btc')) {
              _context4.next = 75;
              break;
            }
            console.log('finalBody', {
              body: JSON.stringify(finalBody),
              contentType: 'application/json;utf-8',
              flag: config/* FLAG */.BZ,
              path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/simplebuzz")
            });
            _context4.next = 70;
            return buzzEntity.create({
              dataArray: [{
                body: JSON.stringify(finalBody),
                contentType: 'application/json;utf-8',
                flag: config/* FLAG */.BZ,
                path: "".concat((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '', "/protocols/simplebuzz")
              }],
              options: {
                noBroadcast: 'no',
                feeRate: (0,utils/* getEffectiveBTCFeerate */.mG)(Number(feeRate)),
                service: fetchServiceFee('post_service_fee_amount')
                // service: {
                //     address: environment.service_address,
                //     satoshis: environment.service_staoshi,
                // },
                // network: environment.network,
              }
            });
          case 70:
            createRes = _context4.sent;
            console.log('create res for inscribe', createRes);
            if (!(0,isNil/* default */.Z)(createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0])) {
              // await sleep(5000);
              queryClient.invalidateQueries({
                queryKey: ['homebuzzesnew']
              });
              message/* default */.ZP.success("".concat(isQuoted ? 'repost' : 'create', " buzz successfully"));
              reset();
              _onClose();
              setMockBuzz({
                chainName: chainNet,
                commentCount: 0,
                content: JSON.stringify(finalBody),
                creator: user.address,
                blocked: false,
                id: (createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0]) + 'i0',
                likeCount: 0,
                host: ((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '').toLowerCase(),
                number: 0,
                donate: [],
                MogoID: '',
                address: user.address,
                contentBody: null,
                contentLength: 0,
                contentType: 'text/plain;utf-8',
                createMetaId: user.metaid,
                dataValue: 0,
                donateCount: 0,
                encryption: '0',
                genesisFee: 0,
                genesisHeight: 0,
                genesisTransaction: createRes === null || createRes === void 0 ? void 0 : createRes.revealTxIds[0],
                hot: 0,
                initialOwner: user.address,
                isTransfered: false,
                status: 0,
                timestamp: Math.floor(new Date().getTime() / 1000),
                operation: 'create',
                path: "/protocols/simplebuzz",
                output: '',
                outputValue: 1,
                parentPath: '',
                pop: '',
                popLv: -1,
                preview: "",
                shareCount: 0,
                metaid: user.metaid,
                txIndex: 0,
                txInIndex: 0,
                offset: 0,
                location: '',
                originalPath: '',
                version: '1.0.0',
                contentTypeDetect: 'text/plain;utf-8',
                contentSummary: JSON.stringify(finalBody),
                originalId: '',
                mrc20MintId: [],
                like: []
              });
              _umi_production_exports.history.push('/home/new', {
                buzzId: new Date().getTime()
              });
            }
            _context4.next = 89;
            break;
          case 75:
            _context4.next = 77;
            return mvcConnector.load((0,entities_buzz/* getBuzzSchemaWithCustomHost */.Q)((_showConf$host = showConf === null || showConf === void 0 ? void 0 : showConf.host) !== null && _showConf$host !== void 0 ? _showConf$host : ''));
          case 77:
            _buzzEntity = _context4.sent;
            if (true) {
              _context4.next = 84;
              break;
            }
            _context4.next = 81;
            return _buzzEntity.create({
              data: {
                body: JSON.stringify(objectSpread2_default()({}, finalBody))
              },
              options: {
                assistDomian: config/* ASSIST_ENDPOINT */.FF,
                network: config/* curNetwork */.eM,
                signMessage: 'create buzz',
                serialAction: 'finish',
                transactions: fileTransactions,
                service: fetchServiceFee('post_service_fee_amount', 'MVC'),
                feeRate: mvcFeeRate
              }
            });
          case 81:
            _createRes = _context4.sent;
            _context4.next = 87;
            break;
          case 84:
            _context4.next = 86;
            return _buzzEntity.create({
              data: {
                body: JSON.stringify(objectSpread2_default()({}, finalBody))
              },
              options: {
                network: config/* curNetwork */.eM,
                signMessage: 'create buzz',
                serialAction: 'finish',
                transactions: fileTransactions,
                service: fetchServiceFee('post_service_fee_amount', 'MVC'),
                feeRate: mvcFeeRate
              }
            });
          case 86:
            _createRes = _context4.sent;
          case 87:
            console.log(fileTransactions.map(function (tx) {
              return tx.txComposer.getTxId();
            }));
            if (!(0,isNil/* default */.Z)((_createRes2 = _createRes) === null || _createRes2 === void 0 ? void 0 : _createRes2.txid)) {
              // await sleep(5000);
              queryClient.invalidateQueries({
                queryKey: ['homebuzzesnew']
              });
              message/* default */.ZP.success("".concat(isQuoted ? 'repost' : 'create', " buzz successfully"));
              reset();
              _onClose();
              setNFTs([]);
              setMockBuzz({
                chainName: chainNet,
                commentCount: 0,
                content: JSON.stringify(finalBody),
                creator: user.address,
                blocked: false,
                id: _createRes.txid + 'i0',
                likeCount: 0,
                host: ((showConf === null || showConf === void 0 ? void 0 : showConf.host) || '').toLowerCase(),
                number: 0,
                donate: [],
                MogoID: '',
                address: user.address,
                contentBody: null,
                contentLength: 0,
                contentType: 'text/plain;utf-8',
                createMetaId: user.metaid,
                dataValue: 0,
                donateCount: 0,
                encryption: '0',
                genesisFee: 0,
                genesisHeight: 0,
                genesisTransaction: _createRes.txid,
                hot: 0,
                initialOwner: user.address,
                isTransfered: false,
                status: 0,
                timestamp: Math.floor(new Date().getTime() / 1000),
                operation: 'create',
                path: "/protocols/simplebuzz",
                output: '',
                outputValue: 1,
                parentPath: '',
                pop: '',
                popLv: -1,
                preview: "",
                shareCount: 0,
                metaid: user.metaid,
                txIndex: 0,
                txInIndex: 0,
                offset: 0,
                location: '',
                originalPath: '',
                version: '1.0.0',
                contentTypeDetect: 'text/plain;utf-8',
                contentSummary: JSON.stringify(finalBody),
                originalId: '',
                mrc20MintId: [],
                like: []
              });
              _umi_production_exports.history.push('/home/new', {
                buzzId: new Date().getTime()
              });
            }
          case 89:
            _context4.next = 99;
            break;
          case 91:
            _context4.prev = 91;
            _context4.t1 = _context4["catch"](6);
            console.log('error', _context4.t1);
            errorMessage = (_message = _context4.t1 === null || _context4.t1 === void 0 ? void 0 : _context4.t1.message) !== null && _message !== void 0 ? _message : _context4.t1;
            localStorage.setItem('tmp_content', content);
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            setIsAdding(false);
          case 99:
            setIsAdding(false);
          case 100:
          case "end":
            return _context4.stop();
        }
      }, _callee3, null, [[6, 91]]);
    }));
    return function handleAddBuzz(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleAddBuzzWhthLock = /*#__PURE__*/function () {
    var _ref6 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(mentions) {
      var encryptImages, publicImages, _yield$postPayBuzz, payload, pid, _message2, errorMessage, toastMessage;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setIsAdding(true);
            _context5.prev = 1;
            if (admin !== null && admin !== void 0 && admin.domainName) {
              _context5.next = 4;
              break;
            }
            throw new Error('The administrator has not set a domain. Please ask the administrator to configure a domain to proceed.');
          case 4:
            encryptImages = images.filter(function (image) {
              return encryptFiles.includes(image.previewUrl);
            });
            publicImages = images.filter(function (image) {
              return !encryptFiles.includes(image.previewUrl);
            });
            if (!(encryptImages.length === 0 && !encryptContent)) {
              _context5.next = 8;
              break;
            }
            throw new Error('Please input encrypt content or encrypt images');
          case 8:
            if (payType) {
              _context5.next = 10;
              break;
            }
            throw new Error('Please select pay type');
          case 10:
            if (!(payType === 'mrc20' && !IdCoin)) {
              _context5.next = 12;
              break;
            }
            throw new Error('Please Launch Your Unique ID-COIN');
          case 12:
            if (!(payType === 'btc' && payAmount <= 0)) {
              _context5.next = 14;
              break;
            }
            throw new Error('Please input valid pay amount');
          case 14:
            if (!(payType === 'paymrc20' && !mrc20)) {
              _context5.next = 16;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 16:
            if (!(payType === 'paymrc20' && checkTokenID !== 'success')) {
              _context5.next = 18;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 18:
            if (!(payType === 'paymrc20' && payMrc20Amount <= 0)) {
              _context5.next = 20;
              break;
            }
            throw new Error('Please input valid MRC20 token amount');
          case 20:
            if (!(payType === 'holdmrc20' && !mrc20)) {
              _context5.next = 22;
              break;
            }
            throw new Error('Please input valid MRC20 token ID or tick');
          case 22:
            _context5.t0 = utils_buzz/* postPayBuzz */.Vb;
            _context5.t1 = content;
            _context5.t2 = mentions || {};
            _context5.t3 = (quotePin === null || quotePin === void 0 ? void 0 : quotePin.id) || (quoteComment === null || quoteComment === void 0 ? void 0 : quoteComment.pinId);
            _context5.next = 28;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(encryptImages));
          case 28:
            _context5.t4 = _context5.sent;
            _context5.next = 31;
            return (0,file/* image2Attach */.V6)((0,file/* convertToFileList */.nU)(publicImages));
          case 31:
            _context5.t5 = _context5.sent;
            _context5.t6 = encryptContent;
            _context5.t7 = nfts.map(function (nft) {
              return "metafile://nft/mrc721/".concat(nft.itemPinId);
            });
            _context5.t8 = (admin === null || admin === void 0 ? void 0 : admin.domainName) || '';
            _context5.t9 = {
              content: _context5.t1,
              mentions: _context5.t2,
              quotePin: _context5.t3,
              encryptImages: _context5.t4,
              publicImages: _context5.t5,
              encryptContent: _context5.t6,
              nfts: _context5.t7,
              manDomain: _context5.t8
            };
            _context5.t10 = String(payAmount);
            _context5.t11 = user.address;
            _context5.t12 = chainNet === 'btc' ? feeRate : mvcFeeRate;
            _context5.t13 = (showConf === null || showConf === void 0 ? void 0 : showConf.host) || '';
            _context5.t14 = chainNet;
            _context5.t15 = btcConnector;
            _context5.t16 = mvcConnector;
            _context5.t17 = manPubKey || '';
            _context5.t18 = fetchServiceFee('post_service_fee_amount', chainNet === 'btc' ? 'BTC' : "MVC");
            _context5.t19 = String(payType);
            _context5.t20 = IdCoin;
            _context5.t21 = mrc20;
            _context5.t22 = String(payMrc20Amount);
            _context5.next = 51;
            return (0, _context5.t0)(_context5.t9, _context5.t10, _context5.t11, _context5.t12, _context5.t13, _context5.t14, _context5.t15, _context5.t16, _context5.t17, _context5.t18, _context5.t19, _context5.t20, _context5.t21, _context5.t22);
          case 51:
            _yield$postPayBuzz = _context5.sent;
            payload = _yield$postPayBuzz.payload;
            pid = _yield$postPayBuzz.pid;
            reset();
            _onClose();
            queryClient.invalidateQueries({
              queryKey: ['homebuzzesnew']
            });
            // setMockBuzz({
            //     chainName: chainNet,
            //     commentCount: 0,
            //     content: JSON.stringify(payload),
            //     creator: user.address,
            //     blocked: false,
            //     id: pid,
            //     likeCount: 0,
            //     host: (showConf?.host || '').toLowerCase(),
            //     number: 0,
            //     donate: [],
            //     MogoID: '',
            //     address: user.address,
            //     contentBody: null,
            //     contentLength: 0,
            //     contentType: 'text/plain;utf-8',
            //     createMetaId: user.metaid,
            //     dataValue: 0,
            //     donateCount: 0,
            //     encryption: '0',
            //     genesisFee: 0,
            //     genesisHeight: 0,
            //     genesisTransaction: pid.substring(0, pid.length - 2),
            //     hot: 0,
            //     initialOwner: user.address,
            //     isTransfered: false,
            //     status: 0,
            //     timestamp: Math.floor(new Date().getTime() / 1000),
            //     operation: 'create',
            //     path: `/protocols/paybuzz`,
            //     output: '',
            //     outputValue: 1,
            //     parentPath: '',
            //     pop: '',
            //     popLv: -1,
            //     preview: "",
            //     shareCount: 0,
            //     metaid: user.metaid,
            //     txIndex: 0,
            //     txInIndex: 0,
            //     offset: 0,
            //     location: '',
            //     originalPath: '',
            //     version: '1.0.0',
            //     contentTypeDetect: 'text/plain;utf-8',
            //     contentSummary: JSON.stringify(payload),
            //     originalId: '',
            //     mrc20MintId: [],
            //     like: []

            // })

            _umi_production_exports.history.push('/home/new', {
              buzzId: new Date().getTime()
            });
            _context5.next = 67;
            break;
          case 60:
            _context5.prev = 60;
            _context5.t23 = _context5["catch"](1);
            console.log('error', _context5.t23);
            errorMessage = (_message2 = _context5.t23 === null || _context5.t23 === void 0 ? void 0 : _context5.t23.message) !== null && _message2 !== void 0 ? _message2 : _context5.t23;
            toastMessage = errorMessage !== null && errorMessage !== void 0 && errorMessage.includes('Cannot read properties of undefined') ? 'User Canceled' : errorMessage; // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message/* default */.ZP.error(toastMessage);
            localStorage.setItem('tmp_content', content);
          case 67:
            setIsAdding(false);
          case 68:
          case "end":
            return _context5.stop();
        }
      }, _callee4, null, [[1, 60]]);
    }));
    return function handleAddBuzzWhthLock(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    var didCancel = false;
    var fetchMrc20Info = /*#__PURE__*/function () {
      var _ref7 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
        var params, _yield$getMRC20Info, code, message, data;
        return regeneratorRuntime_default()().wrap(function _callee5$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (holdTokenID) {
                _context6.next = 2;
                break;
              }
              return _context6.abrupt("return");
            case 2:
              setCheckTokenID('validating');
              params = {};
              if (holdTokenID.length > 24) {
                params.id = holdTokenID;
              } else {
                params.tick = holdTokenID.toUpperCase();
              }
              console.log('params', params);
              _context6.next = 8;
              return (0,api/* getMRC20Info */.tl)(params);
            case 8:
              _yield$getMRC20Info = _context6.sent;
              code = _yield$getMRC20Info.code;
              message = _yield$getMRC20Info.message;
              data = _yield$getMRC20Info.data;
              if (!didCancel) {
                _context6.next = 14;
                break;
              }
              return _context6.abrupt("return");
            case 14:
              if (!(data && data.mrc20Id)) {
                _context6.next = 20;
                break;
              }
              setMrc20(data);
              setCheckTokenID('success');
              return _context6.abrupt("return");
            case 20:
              setMrc20(undefined);
              setCheckTokenID('error');
            case 22:
            case "end":
              return _context6.stop();
          }
        }, _callee5);
      }));
      return function fetchMrc20Info() {
        return _ref7.apply(this, arguments);
      };
    }();
    fetchMrc20Info();
    return function () {
      didCancel = true;
    };
  }, [holdTokenID]);
  (0,react.useEffect)(function () {
    if (show) {
      getUploadDraftList().then(function (drafts) {
        console.log('drafts', drafts);
        setImages(drafts || []);
      });
    }
  }, [show]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ResponPopup/* default */.Z, {
    onClose: function onClose() {
      localStorage.setItem('tmp_content', content);
      _onClose();
    },
    show: show,
    modalWidth: 640,
    closable: true,
    title: !isQuoted ? /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "New Buzz"
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
      children: "Repost"
    }),
    children: [isQuoted && /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
      style: {
        margin: 24
      },
      styles: {
        body: {
          padding: quotePin ? 0 : 24
        }
      },
      children: quotePin ? /*#__PURE__*/(0,jsx_runtime.jsx)(Buzz/* default */.Z, {
        buzzItem: quotePin,
        showActions: false
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(CommentPanel/* CommentItem */.H, {
        item: quoteComment,
        level: 1
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
        gutter: [12, 12],
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SelectChain/* default */.Z, {
          chainNet: chainNet,
          setChainNet: setChainNet
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            strong: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Public"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_mentions/* default */.Z, {
            autoSize: {
              minRows: 4,
              maxRows: 16
            },
            placeholder: isQuoted ? (0,utils/* formatMessage */.wv)("Add a comment") : (0,utils/* formatMessage */.wv)("post_placeholder"),
            value: content,
            onChange: function onChange(value) {
              console.log('value', value);
              setContent(value);
            },
            loading: loading,
            onSearch: onSearch,
            options: users.map(function (_ref8) {
              var tick = _ref8.tick,
                deployerAddress = _ref8.deployerAddress;
              return {
                key: deployerAddress,
                value: tick.toUpperCase(),
                className: 'antd-demo-dynamic-option',
                label: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PendingUserAvatar/* default */.Z, {
                    address: deployerAddress,
                    size: 24
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    children: tick.toUpperCase()
                  })]
                })
              };
            }),
            onSelect: function onSelect(value) {
              console.log('onSelect', value);
              setMentions(objectSpread2_default()(objectSpread2_default()({}, mentions), {}, defineProperty_default()({}, value.value, value.key)));
            },
            onFocus: function onFocus() {
              setLastFocus('content');
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
          span: 24,
          style: {
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: "center"
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
            strong: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Encrypt"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            icon: !lock ? /*#__PURE__*/(0,jsx_runtime.jsx)(UnlockOutlined/* default */.Z, {
              style: {
                color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
              }
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(LockOutlined/* default */.Z, {
              style: {
                color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
              }
            }),
            onClick: function onClick() {
              return setLock(!lock);
            }
          })]
        }), lock && /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(TextArea, {
            autoSize: {
              minRows: 4,
              maxRows: 16
            },
            onFocus: function onFocus() {
              setLastFocus('decrypt');
            },
            placeholder: (0,utils/* formatMessage */.wv)("encrypt content"),
            value: encryptContent,
            onChange: function onChange(e) {
              return setEncryptContent(e.target.value);
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
          span: 24,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            style: {
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: 16
            },
            children: [nfts.map(function (nft, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  position: 'relative',
                  marginRight: 8,
                  marginBottom: 8,
                  width: 100,
                  height: 100
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: nft.previewImage,
                  alt: "preview-".concat(index),
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    return setNFTs(nfts.filter(function (_nft, i) {
                      return nft.itemPinId !== _nft.itemPinId;
                    }));
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    top: 4,
                    right: 4
                  },
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
                })]
              }, "nft" + index);
            }), images.map(function (image, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  position: 'relative',
                  marginRight: 8,
                  marginBottom: 8,
                  width: 100,
                  height: 100
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: image.previewUrl,
                  alt: "preview-".concat(index),
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    return handleRemoveImage(index);
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    top: 4,
                    right: 4
                  },
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
                }), lock && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    console.log('encryptFiles', encryptFiles);
                    if (encryptFiles.includes(image.previewUrl)) {
                      setEncryptFiles(encryptFiles.filter(function (item) {
                        return item !== image.previewUrl;
                      }));
                    } else {
                      setEncryptFiles([].concat(toConsumableArray_default()(encryptFiles), [image.previewUrl]));
                    }
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    bottom: 4,
                    right: 4
                  },
                  icon: !encryptFiles.includes(image.previewUrl) ? /*#__PURE__*/(0,jsx_runtime.jsx)(UnlockOutlined/* default */.Z, {
                    style: {
                      color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(LockOutlined/* default */.Z, {
                    style: {
                      color: showConf === null || showConf === void 0 ? void 0 : showConf.brandColor
                    }
                  })
                })]
              }, index);
            }), video && chainNet === 'mvc' && !lock && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                position: 'relative',
                marginRight: 8,
                marginBottom: 8,
                width: 100,
                height: 100
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("video", {
                src: video.previewUrl
                // controls
                ,
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                onClick: function onClick() {
                  return handleRemoveVideo();
                },
                size: "small",
                style: {
                  position: 'absolute',
                  top: 4,
                  right: 4
                },
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
              })]
            }), chainNet === 'mvc' && otherFiles.map(function (file, index) {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  position: 'relative',
                  marginRight: 8,
                  marginBottom: 8,
                  width: 100,
                  height: 100,
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #d9d9d9',
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 4
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FileTextOutlined/* default */.Z, {
                  style: {
                    fontSize: 24,
                    color: '#8c8c8c'
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
                  style: {
                    fontSize: 10,
                    textAlign: 'center',
                    wordBreak: 'break-all',
                    marginTop: 4
                  },
                  children: file.fileName
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  onClick: function onClick() {
                    return handleRemoveOtherFile(index);
                  },
                  size: "small",
                  style: {
                    position: 'absolute',
                    top: 4,
                    right: 4
                  },
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.Z, {})
                })]
              }, "other-".concat(index));
            })]
          })
        }), lock && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
            span: 24,
            style: {
              justifyContent: 'space-between',
              display: 'flex',
              alignItems: "center",
              flexWrap: 'wrap',
              gap: 20
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              strong: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                children: "Payment method"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(segmented/* default */.Z, {
              options: [{
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Pay With BTC"
                }),
                value: 'btc'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Pay With MRC20"
                }),
                value: 'paymrc20'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Hold ID Coin"
                }),
                value: 'mrc20'
              }, {
                label: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                  children: "Hold MRC20"
                }),
                value: 'holdmrc20'
              }],
              value: payType,
              onChange: function onChange(value) {
                setPayType(value);
              }
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
            span: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                display: 'flex',
                marginTop: 20,
                flexDirection: 'column'
              },
              children: [lock && payType === 'btc' && /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                variant: "filled",
                value: payAmount,
                onChange: function onChange(value) {
                  setPayAmount(value);
                },
                style: {
                  flexGrow: 1,
                  width: '100%'
                },
                suffix: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                  src: btc,
                  style: {
                    height: 20,
                    width: 20
                  }
                })
              }), lock && payType === 'paymrc20' && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                style: {
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                  prefix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  value: holdTokenID,
                  style: {
                    flexGrow: 1
                  },
                  onChange: function onChange(e) {
                    setHoldTokenID(e.target.value);
                  },
                  status: !mrc20 ? 'warning' : '',
                  suffix: checkTokenID === 'validating' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : checkTokenID === 'error' ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExclamationCircleOutlined/* default */.Z, {
                    style: {
                      color: 'red'
                    }
                  }) : checkTokenID === 'success' ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleOutlined/* default */.Z, {
                    style: {
                      color: 'green'
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  placeholder: (0,utils/* formatMessage */.wv)("please input mrc20 id or tick")
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
                  controls: false,
                  variant: "filled",
                  value: payMrc20Amount,
                  onChange: function onChange(value) {
                    setPayMrc20Amount(value);
                  },
                  style: {
                    flexGrow: 1,
                    width: '100%'
                  },
                  suffix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {})
                })]
              }), lock && payType === 'mrc20' && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                    children: "loading"
                  })
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                  children: IdCoin ? /*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.Z, {
                    defaultChecked: true,
                    disabled: true,
                    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                      style: {
                        display: 'flex',
                        gap: 8,
                        flexWrap: 'wrap',
                        alignItems: "center",
                        justifyContent: 'flex-end',
                        flexGrow: 1
                      },
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserAvatar/* default */.Z, {
                        src: (_IdCoin$deployerUserI = IdCoin.deployerUserInfo) === null || _IdCoin$deployerUserI === void 0 ? void 0 : _IdCoin$deployerUserI.avatar,
                        size: 32
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                        className: "right",
                        style: {
                          flexGrow: 1
                        },
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap'
                          },
                          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                            children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Title, {
                              level: 4,
                              style: {
                                margin: 0
                              },
                              children: IdCoin.tick
                            })
                          })
                        })
                      })]
                    })
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(result/* default */.ZP, {
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                    title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "Launch Your Unique ID-COIN Now!"
                    }),
                    subTitle: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                      children: "It seems you haven't issued your personal ID-COIN yet. Head over to MetaID.market to create your ID-COIN and unlock new possibilities in the decentralized ecosystem. Start building your on-chain identity today!"
                    }),
                    extra: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                      onClick: function onClick() {
                        window.open(config/* curNetwork */.eM === 'testnet' ? 'https://testnet.metaid.market/launch' : 'https://metaid.market/launch', (0,utils/* openWindowTarget */.wL)());
                      },
                      type: "primary",
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
                        wrapper: true,
                        children: "Launch Me"
                      })
                    }, "console")
                  })
                })
              }), lock && payType === 'holdmrc20' && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                  prefix: mrc20 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MRC20Icon/* default */.Z, {
                    size: 20,
                    tick: mrc20.tick,
                    metadata: mrc20.metadata
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  value: holdTokenID,
                  style: {
                    flexGrow: 1
                  },
                  onChange: function onChange(e) {
                    setHoldTokenID(e.target.value);
                  },
                  status: !mrc20 ? 'warning' : '',
                  suffix: checkTokenID === 'validating' ? /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingOutlined/* default */.Z, {}) : checkTokenID === 'error' ? /*#__PURE__*/(0,jsx_runtime.jsx)(ExclamationCircleOutlined/* default */.Z, {
                    style: {
                      color: 'red'
                    }
                  }) : checkTokenID === 'success' ? /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleOutlined/* default */.Z, {
                    style: {
                      color: 'green'
                    }
                  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {}),
                  placeholder: (0,utils/* formatMessage */.wv)("please input mrc20 id or tick")
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {})]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
            beforeUpload: handleBeforeUpload,
            showUploadList: false,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileImageOutlined/* default */.Z, {}),
              variant: "text",
              color: "primary"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            onClick: function onClick() {
              return setShowNFTModal(true);
            },
            variant: "text",
            color: "primary",
            children: "NFT"
          }), window.innerWidth > 768 && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "text",
            icon: /*#__PURE__*/(0,jsx_runtime.jsx)(SmileOutlined/* default */.Z, {}),
            variant: "text",
            color: "primary",
            onClick: function onClick() {
              return setShowEmojiPicker(!showEmojiPicker);
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
            beforeUpload: handleVideoBeforeUpload,
            showUploadList: false,
            accept: "video/mp4",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              disabled: chainNet === 'btc' || lock,
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(VideoCameraOutlined/* default */.Z, {}),
              variant: "text",
              color: "primary"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(upload/* default */.Z, {
            beforeUpload: handleOtherFilesUpload,
            showUploadList: false,
            accept: ".pdf,.doc,.docx,.txt,.rtf,.zip,.rar,.7z,.tar,.gz,.mp3,.aac,.wav,.flac,.ogg,.json,.xml,.csv",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              disabled: chainNet === 'btc' || lock,
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(FileTextOutlined/* default */.Z, {}),
              variant: "text",
              color: "primary",
              title: "Upload other files (PDF, DOC, ZIP, MP3, etc.)"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            type: "text",
            onClick: reset,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              wrapper: true,
              children: "Reset"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            shape: "round",
            style: {
              background: showConf === null || showConf === void 0 ? void 0 : showConf.gradientColor,
              color: showConf === null || showConf === void 0 ? void 0 : showConf.colorButton
            },
            loading: isAdding,
            onClick: onCreateSubmit,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
              children: "Post"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NFTModal, {
      show: showNFTModal,
      onClose: function onClose() {
        setShowNFTModal(false);
      },
      nfts: nfts,
      setNFTs: setNFTs
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ResponPopup/* default */.Z, {
      onClose: function onClose() {
        setShowEmojiPicker(false);
      },
      show: showEmojiPicker,
      closable: true,
      title: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* default */.Z, {
        children: "Select Emoji"
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(emoji_picker_react_esm/* default */.ZP, {
        onEmojiClick: function onEmojiClick(emoji) {
          if (lock && lastFocus === 'decrypt') {
            setEncryptContent(function (prev) {
              return prev + emoji.emoji;
            });
          } else {
            setContent(function (prev) {
              return prev + emoji.emoji;
            });
          }
        }
      })
    })]
  });
});

/***/ }),

/***/ 38161:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25688);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);





var NumberFormat = function NumberFormat(props) {
  var prefix = props.prefix,
    suffix = props.suffix,
    wrapper = props.wrapper,
    style = props.style;
  var beautyNumber = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var value = props.value,
      _props$precision = props.precision,
      precision = _props$precision === void 0 ? 16 : _props$precision,
      _props$isBig = props.isBig,
      isBig = _props$isBig === void 0 ? false : _props$isBig,
      decimal = props.decimal,
      _props$tiny = props.tiny,
      tiny = _props$tiny === void 0 ? false : _props$tiny;
    var _value = value;
    if (Number.isNaN(Number(_value))) return '--';
    if (isBig && decimal) {
      if (String(_value).indexOf('.') > -1) {
        _value = new decimal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(new decimal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(_value).times(1e8)).div(Math.pow(10, Number(decimal) + 8));
      } else {
        _value = new decimal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(_value || '0').div(Math.pow(10, Number(decimal)));
      }
    }
    try {
      if (tiny && Number(_value) < 0.0000001 && Number(_value) > 0) {
        var string = String(parseFloat(String(_value)));
        var ret = string.replace('.', '').match(/(\d+)e-(\d+)/);
        var left = '';
        var dex = '';
        if (ret && ret[1] && ret[2]) {
          left = ret[1].substring(0, precision);
          dex = String(Number(ret[2]) - 1);
        }
        return {
          type: 'tiny',
          left: left,
          dex: dex
        };
      }
    } catch (err) {
      return '--';
    }
    return Number(_value).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: precision
    });
  }, [props]);
  if (wrapper) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
      style: style,
      children: [prefix, typeof beautyNumber === 'string' ? beautyNumber : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: ["0.0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          style: {
            fontSize: '0.8em',
            top: "0.2em",
            position: "relative"
          },
          children: beautyNumber.dex
        }), beautyNumber.left]
      }), suffix]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [prefix, typeof beautyNumber === 'string' ? beautyNumber : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: ["0.0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        style: {
          fontSize: '0.8em',
          top: "0.2em",
          position: "relative"
        },
        children: beautyNumber.dex
      }), beautyNumber.left]
    }), suffix]
  });
};
/* harmony default export */ __webpack_exports__.Z = (NumberFormat);

/***/ }),

/***/ 95855:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ getBuzzSchemaWithCustomHost; }
/* harmony export */ });
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26068);
/* harmony import */ var _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);

var buzzSchema = {
  name: "buzz",
  nodeName: "simplebuzz",
  path: "/protocols/simplebuzz",
  versions: [{
    version: 1,
    body: [{
      name: "content",
      type: "string"
    }, {
      name: "contentType",
      type: "string"
    }, {
      name: "quotePin",
      type: "string"
    }, {
      name: "attachments",
      type: "array"
    }]
  }]
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (buzzSchema)));
var getBuzzSchemaWithCustomHost = function getBuzzSchemaWithCustomHost(host) {
  return _Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(_Users_liuhaihua_shownow_shownow_frontend_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({}, buzzSchema), {}, {
    path: "".concat(host).concat(buzzSchema.path)
  });
};

/***/ })

}]);