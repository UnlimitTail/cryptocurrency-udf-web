webpackHotUpdate(3,{

/***/ "./pages/chart/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/sungwooyang/Documents/work/madtail/cryptocurrency-udf/cryptocurrency-udf-web/pages/chart/history.js';

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();



var _default = function _default(props) {
	console.log('#props', props);
	var symbol = props.query.symbol || 'UPBIT:BTC-KRW';
	var codes = '\n    <head>\n\n\t\t<title>TradingView Charting Library demo -- Mobile (white)</title>\n\n\t\t<!-- Fix for iOS Safari zooming bug -->\n\t\t<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=Edge">\n\n\t\t<script type="text/javascript" src="/static/charting_library/charting_library.min.js"></script>\n\t\t<script type="text/javascript" src="/static/datafeeds/udf/dist/polyfills.js"></script>\n\t\t<script type="text/javascript" src="/static/datafeeds/udf/dist/bundle.js"></script>\n\n\t\t<script type="text/javascript">\n\t\t\tTradingView.onready(function()\n\t\t\t{\n\t\t\t\tvar widget = new TradingView.widget({\n\t\t\t\t\tfullscreen: true,\n\t\t\t\t\tsymbol: \'\',\n\t\t\t\t\tallow_symbol_change: false,\n\t\t\t\t\tinterval: \'D\',\n\t\t\t\t\tcontainer_id: "tv_chart_container",\n\t\t\t\t\t//\tBEWARE: no trailing slash is expected in feed URL\n\t\t\t\t\tdatafeed: new Datafeeds.UDFCompatibleDatafeed("http://localhost:3000/chart"),\n\t\t\t\t\tlibrary_path: "/static/charting_library/",\n\t\t\t\t\tlocale: "en",\n\t\t\t\t\t//\tRegression Trend-related functionality is not implemented yet, so it\'s hidden for a while\n\t\t\t\t\tdrawings_access: { type: \'black\', tools: [ { name: "Regression Trend" } ] },\n\t\t\t\t\tdisabled_features: ["header_symbol_search", "header_settings", "header_compare", "header_undo_redo", "header_fullscreen_button", "left_toolbar", "use_localstorage_for_settings"],\n\t\t\t\t\ttime_frames:[],\n\t\t\t\t\tdebug: true,\n\t\t\t\t});\n\t\t\t})\n\t\t</script>\n\n\t</head>\n\n\t<body style="margin:0px;">\n\t\t<div id="tv_chart_container"></div>\n\t</body>\n\n    ';
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: codes }, __source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(_default, 'default', '/Users/sungwooyang/Documents/work/madtail/cryptocurrency-udf/cryptocurrency-udf-web/pages/chart/history.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/chart/history")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.4e30f881ec413a018445.hot-update.js.map