(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["@js8path/js8path-test-data"] = factory();
	else
		root["@js8path/js8path-test-data"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-data.json */ \"./src/test-data.json\");\nvar _test_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./test-data.json */ \"./src/test-data.json\", 1);\nvar cov_abf0ybwe9 = function () {\n  var path = \"C:\\\\Users\\\\jjkun\\\\WebstormProjects\\\\js8path\\\\js8path-test-data\\\\src\\\\main.js\";\n  var hash = \"b79246552041f2dea515364a83f2d972d2d36837\";\n  var global = new Function(\"return this\")();\n  var gcv = \"__coverage__\";\n  var coverageData = {\n    path: \"C:\\\\Users\\\\jjkun\\\\WebstormProjects\\\\js8path\\\\js8path-test-data\\\\src\\\\main.js\",\n    statementMap: {},\n    fnMap: {},\n    branchMap: {},\n    s: {},\n    f: {},\n    b: {},\n    _coverageSchema: \"43e27e138ebf9cfc5966b082cf9a028302ed4184\",\n    hash: \"b79246552041f2dea515364a83f2d972d2d36837\"\n  };\n  var coverage = global[gcv] || (global[gcv] = {});\n\n  if (coverage[path] && coverage[path].hash === hash) {\n    return coverage[path];\n  }\n\n  return coverage[path] = coverageData;\n}();\n\n/*\r\n    main entry point for @js8path/js8path-test-data\r\n    main.js\r\n*/\n // FixMe: add some code to sanitize the data so only all items match schema\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_test_data_json__WEBPACK_IMPORTED_MODULE_0__);\n\n//# sourceURL=webpack://@js8path/js8path-test-data/./src/main.js?");

/***/ }),

/***/ "./src/test-data.json":
/*!****************************!*\
  !*** ./src/test-data.json ***!
  \****************************/
/*! exports provided: rawXml, reporterAppData, js8pathData, default */
/***/ (function(module) {


/***/ })

/******/ });
});