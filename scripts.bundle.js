webpackJsonp([3],{

/***/ "../../../../raw-loader/index.js!../../../../chart.js/src/chart.js":
/***/ (function(module, exports) {

module.exports = "/**\n * @namespace Chart\n */\nvar Chart = require('./core/core.js')();\n\nrequire('./core/core.helpers')(Chart);\nrequire('./platforms/platform.js')(Chart);\nrequire('./core/core.canvasHelpers')(Chart);\nrequire('./core/core.element')(Chart);\nrequire('./core/core.plugin.js')(Chart);\nrequire('./core/core.animation')(Chart);\nrequire('./core/core.controller')(Chart);\nrequire('./core/core.datasetController')(Chart);\nrequire('./core/core.layoutService')(Chart);\nrequire('./core/core.scaleService')(Chart);\nrequire('./core/core.ticks.js')(Chart);\nrequire('./core/core.scale')(Chart);\nrequire('./core/core.interaction')(Chart);\nrequire('./core/core.tooltip')(Chart);\n\nrequire('./elements/element.arc')(Chart);\nrequire('./elements/element.line')(Chart);\nrequire('./elements/element.point')(Chart);\nrequire('./elements/element.rectangle')(Chart);\n\nrequire('./scales/scale.linearbase.js')(Chart);\nrequire('./scales/scale.category')(Chart);\nrequire('./scales/scale.linear')(Chart);\nrequire('./scales/scale.logarithmic')(Chart);\nrequire('./scales/scale.radialLinear')(Chart);\nrequire('./scales/scale.time')(Chart);\n\n// Controllers must be loaded after elements\n// See Chart.core.datasetController.dataElementType\nrequire('./controllers/controller.bar')(Chart);\nrequire('./controllers/controller.bubble')(Chart);\nrequire('./controllers/controller.doughnut')(Chart);\nrequire('./controllers/controller.line')(Chart);\nrequire('./controllers/controller.polarArea')(Chart);\nrequire('./controllers/controller.radar')(Chart);\n\nrequire('./charts/Chart.Bar')(Chart);\nrequire('./charts/Chart.Bubble')(Chart);\nrequire('./charts/Chart.Doughnut')(Chart);\nrequire('./charts/Chart.Line')(Chart);\nrequire('./charts/Chart.PolarArea')(Chart);\nrequire('./charts/Chart.Radar')(Chart);\nrequire('./charts/Chart.Scatter')(Chart);\n\n// Loading built-it plugins\nvar plugins = [];\n\nplugins.push(\n    require('./plugins/plugin.filler.js')(Chart),\n    require('./plugins/plugin.legend.js')(Chart),\n    require('./plugins/plugin.title.js')(Chart)\n);\n\nChart.plugins.register(plugins);\n\nmodule.exports = Chart;\nif (typeof window !== 'undefined') {\n\twindow.Chart = Chart;\n}\n"

/***/ }),

/***/ "../../../../script-loader/addScript.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ "../../../../script-loader/index.js!../../../../chart.js/src/chart.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../../../chart.js/src/chart.js"))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../script-loader/index.js!../../../../chart.js/src/chart.js");


/***/ })

},[3]);
//# sourceMappingURL=scripts.bundle.js.map