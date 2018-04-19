module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/chart/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/sungwooyang/Documents/work/madtail/cryptocurrency-udf/cryptocurrency-udf-web/pages/chart/history.js';


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
	var symbol = props.url.query.symbol || 'UPBIT:BTC-KRW';
	var codes = '\n    <head>\n\n\t\t<title>TradingView Charting Library demo -- Mobile (white)</title>\n\n\t\t<!-- Fix for iOS Safari zooming bug -->\n\t\t<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=Edge">\n\n\t\t<script type="text/javascript" src="/static/charting_library/charting_library.min.js"></script>\n\t\t<script type="text/javascript" src="/static/datafeeds/udf/dist/polyfills.js"></script>\n\t\t<script type="text/javascript" src="/static/datafeeds/udf/dist/bundle.js"></script>\n\n\t\t<script type="text/javascript">\n\t\t\tTradingView.onready(function()\n\t\t\t{\n\t\t\t\tvar widget = new TradingView.widget({\n\t\t\t\t\tfullscreen: true,\n\t\t\t\t\tsymbol: \'' + symbol + '\',\n\t\t\t\t\tallow_symbol_change: false,\n\t\t\t\t\tinterval: \'D\',\n\t\t\t\t\tcontainer_id: "tv_chart_container",\n\t\t\t\t\t//\tBEWARE: no trailing slash is expected in feed URL\n\t\t\t\t\tdatafeed: new Datafeeds.UDFCompatibleDatafeed("http://localhost:3000/chart"),\n\t\t\t\t\tlibrary_path: "/static/charting_library/",\n\t\t\t\t\tlocale: "en",\n\t\t\t\t\t//\tRegression Trend-related functionality is not implemented yet, so it\'s hidden for a while\n\t\t\t\t\tdrawings_access: { type: \'black\', tools: [ { name: "Regression Trend" } ] },\n\t\t\t\t\tdisabled_features: ["header_symbol_search", "header_settings", "header_compare", "header_undo_redo", "header_fullscreen_button", "left_toolbar", "use_localstorage_for_settings"],\n\t\t\t\t\ttime_frames:[],\n\t\t\t\t\tdebug: true,\n\t\t\t\t});\n\t\t\t})\n\t\t</script>\n\n\t</head>\n\n\t<body style="margin:0px;">\n\t\t<div id="tv_chart_container"></div>\n\t</body>\n\n    ';
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: codes }, __source: {
			fileName: _jsxFileName,
			lineNumber: 48
		}
	});
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/chart/history.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=history.js.map