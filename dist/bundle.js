/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/error.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/error.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".api-error-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.api-error-container p {\\r\\n  font-size: 2em;\\r\\n  color: white;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n.api-error-container img {\\r\\n  width: 30%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/css/error.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/loader.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/loader.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".loader-container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.loader {\\r\\n  width: 80px;\\r\\n  height: 80px;\\r\\n  border: 10px solid whitesmoke;\\r\\n  border-top: 10px solid gray;\\r\\n  border-radius: 50%;\\r\\n  animation: spin 2s linear infinite;\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  0% {\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n  100% {\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/css/loader.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.location {\\r\\n  padding: 20px;\\r\\n  flex: 1 1 40%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n/*Search box*/\\r\\n.location-search-container {\\r\\n  width: 100%;\\r\\n  flex: 1 1 5%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  position: relative;\\r\\n}\\r\\n.location-search {\\r\\n  width: 300px;\\r\\n  height: 30px;\\r\\n  padding: 5px 15px;\\r\\n  background-color: rgba(255, 255, 255, 1);\\r\\n  border-radius: 15px;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  transition: width 0.3s;\\r\\n}\\r\\n.location-search input {\\r\\n  width: 92%;\\r\\n  height: 100%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 14px;\\r\\n  color: gray;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n.location-search button {\\r\\n  width: 8%;\\r\\n  height: 100%;\\r\\n  background: none;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n  font-size: 14px;\\r\\n  color: gray;\\r\\n  transition: color 0.3s ease-in;\\r\\n}\\r\\n.location-search button:hover {\\r\\n  color: black;\\r\\n}\\r\\n.input-error-div {\\r\\n  width: 50%;\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  background: white;\\r\\n  position: absolute;\\r\\n  top: 50px;\\r\\n  opacity: 0;\\r\\n  transform: translateY(-10px);\\r\\n  transition: all 0.4s ease;\\r\\n}\\r\\n.input-error {\\r\\n  color: gray;\\r\\n  font-size: 0.9em;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n}\\r\\n\\r\\n/*Location Weather Content*/\\r\\n.location-weather {\\r\\n  width: 100%;\\r\\n  padding: 20px;\\r\\n  flex: 1 1 95%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.location-weather > * {\\r\\n  flex-basis: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n.location-weather p {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  color: rgba(255, 255, 255, 1);\\r\\n}\\r\\n.location-weather-icon-container {\\r\\n  justify-content: center;\\r\\n  height: 150px;\\r\\n}\\r\\n.location-weather-icon {\\r\\n  height: 100%;\\r\\n  width: auto;\\r\\n  filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(218deg) brightness(112%)\\r\\n    contrast(100%);\\r\\n}\\r\\n.location-weather-temp-container {\\r\\n  justify-content: center;\\r\\n}\\r\\n.location-weather-temp {\\r\\n  font-size: 4em;\\r\\n}\\r\\n.location-weather-type {\\r\\n  font-size: 1.5em;\\r\\n}\\r\\n.location-weather-info-container {\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n.location-weather-place {\\r\\n  font-size: 1.5em;\\r\\n}\\r\\n\\r\\n.info {\\r\\n  padding: 20px;\\r\\n  background: white;\\r\\n  flex: 1 1 60%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.info > * {\\r\\n  flex-basis: 100%;\\r\\n}\\r\\n.info-general,\\r\\n.info-forecast {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n.info-general-title-container,\\r\\n.info-forecast-title-container {\\r\\n  flex: 1 1 10%;\\r\\n  border-bottom: 2px solid gray;\\r\\n}\\r\\n.info h2 {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  color: gray;\\r\\n  font-size: 1.5em;\\r\\n}\\r\\n.info-general-content,\\r\\n.info-forecast-content {\\r\\n  flex: 1 1 90%;\\r\\n  padding: 20px 0;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 20px;\\r\\n}\\r\\n.info-general-content > *,\\r\\n.info-forecast-content > * {\\r\\n  flex: 1 1 100px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n}\\r\\n.info-general-content img,\\r\\n.info-forecast-content img {\\r\\n  width: 80px;\\r\\n  height: auto;\\r\\n}\\r\\n.info-general-content p,\\r\\n.info-forecast-content p,\\r\\n.info-general-content h5,\\r\\n.info-forecast-content h5 {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  color: gray;\\r\\n}\\r\\n.info-general-content p,\\r\\n.info-forecast-content p,\\r\\n.info-general-content h5 {\\r\\n  font-size: 15px;\\r\\n}\\r\\n.info-forecast-content h5 {\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n/*RESPONSIVENESS*/\\r\\n@media (max-width: 1000px) {\\r\\n  body {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n  .location-weather-icon-container,\\r\\n  .location-weather-temp-container,\\r\\n  .location-weather-info-container {\\r\\n    transform: scale(0.8);\\r\\n  }\\r\\n  .info h2 {\\r\\n    font-size: 1.2em;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 600px) {\\r\\n  .info-general-content img,\\r\\n  .info-forecast-content img {\\r\\n    width: 70px;\\r\\n  }\\r\\n  .info-general-content p,\\r\\n  .info-forecast-content p,\\r\\n  .info-general-content h5,\\r\\n  .info-forecast-content h5 {\\r\\n    font-size: 14px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 400px) {\\r\\n  .location-search {\\r\\n    width: 200px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/toggle-btn.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/toggle-btn.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".info-general-title-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.toggle {\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n  width: 50px;\\r\\n  height: 25px;\\r\\n}\\r\\n\\r\\n.toggle input {\\r\\n  opacity: 0;\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.toggle-slider {\\r\\n  background: gray;\\r\\n  border-radius: 2em;\\r\\n  position: absolute;\\r\\n  cursor: pointer;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n}\\r\\n\\r\\n.temperature-units {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 0 7px 0px 5px;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.celcius,\\r\\n.fahrenheit {\\r\\n  font-size: 0.8em;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  transition: all 0.4s;\\r\\n}\\r\\n.celcius {\\r\\n  color: gray;\\r\\n}\\r\\n.fahrenheit {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.toggle-slider:before {\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n  border-radius: 50%;\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  left: 2.5px;\\r\\n  bottom: 2.5px;\\r\\n  background-color: white;\\r\\n  transition: all 0.4s;\\r\\n}\\r\\n\\r\\ninput:checked + .toggle-slider:before {\\r\\n  left: 27.5px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/css/toggle-btn.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://weather/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack://weather/./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addMilliseconds\n * @category Millisecond Helpers\n * @summary Add the specified number of milliseconds to the given date.\n *\n * @description\n * Add the specified number of milliseconds to the given date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the milliseconds added\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Add 750 milliseconds to 10 July 2014 12:45:30.000:\n * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)\n * //=> Thu Jul 10 2014 12:45:30.750\n */\n\nfunction addMilliseconds(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);\n  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);\n  return new Date(timestamp + amount);\n}\n\n//# sourceURL=webpack://weather/./node_modules/date-fns/esm/addMilliseconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/addSeconds/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/addSeconds/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addSeconds)\n/* harmony export */ });\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ \"./node_modules/date-fns/esm/addMilliseconds/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name addSeconds\n * @category Second Helpers\n * @summary Add the specified number of seconds to the given date.\n *\n * @description\n * Add the specified number of seconds to the given date.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Date|Number} date - the date to be changed\n * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.\n * @returns {Date} the new date with the seconds added\n * @throws {TypeError} 2 arguments required\n *\n * @example\n * // Add 30 seconds to 10 July 2014 12:45:00:\n * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)\n * //=> Thu Jul 10 2014 12:45:30\n */\n\nfunction addSeconds(dirtyDate, dirtyAmount) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);\n  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);\n  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, amount * 1000);\n}\n\n//# sourceURL=webpack://weather/./node_modules/date-fns/esm/addSeconds/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * var result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(unixTime * 1000);\n}\n\n//# sourceURL=webpack://weather/./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://weather/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/css/error.css":
/*!***************************!*\
  !*** ./src/css/error.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./error.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/error.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_error_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather/./src/css/error.css?");

/***/ }),

/***/ "./src/css/loader.css":
/*!****************************!*\
  !*** ./src/css/loader.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./loader.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/loader.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loader_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather/./src/css/loader.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather/./src/css/style.css?");

/***/ }),

/***/ "./src/css/toggle-btn.css":
/*!********************************!*\
  !*** ./src/css/toggle-btn.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toggle_btn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./toggle-btn.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/toggle-btn.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_toggle_btn_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_toggle_btn_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather/./src/css/toggle-btn.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertDateToTime\": () => (/* binding */ convertDateToTime),\n/* harmony export */   \"getDayOfTheWeek\": () => (/* binding */ getDayOfTheWeek)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/addSeconds/index.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n\r\n\r\nfunction convertDateToTime(unixTime, timezoneShift) {\r\n  const date = convertUTCToTimezone(unixTime, timezoneShift);\r\n  const hour = date.getHours();\r\n  const minute = date.getMinutes();\r\n  if (minute < 10) {\r\n    return `${hour}h0${minute}`;\r\n  }\r\n  return `${hour}h${minute}`;\r\n}\r\n\r\nfunction getDayOfTheWeek(unixTime, timezoneShift) {\r\n  const date = convertUTCToTimezone(unixTime, timezoneShift);\r\n  let day = \"\";\r\n\r\n  switch (date.getDay()) {\r\n    case 0:\r\n      day = \"Sun\";\r\n      break;\r\n    case 1:\r\n      day = \"Mon\";\r\n      break;\r\n    case 2:\r\n      day = \"Tue\";\r\n      break;\r\n    case 3:\r\n      day = \"Wed\";\r\n      break;\r\n    case 4:\r\n      day = \"Thu\";\r\n      break;\r\n    case 5:\r\n      day = \"Fri\";\r\n      break;\r\n    case 6:\r\n      day = \"Sat\";\r\n  }\r\n  return day;\r\n}\r\n\r\nfunction convertUTCToTimezone(unixTime, timezoneShift) {\r\n  const utcDate = convertUnixToUTC(unixTime);\r\n  const timezoneTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.default)(utcDate, timezoneShift);\r\n  return timezoneTime;\r\n}\r\n\r\nfunction convertUnixToUTC(unixTime) {\r\n  const systemDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(unixTime);\r\n  const utcDate = new Date(\r\n    systemDate.getUTCFullYear(),\r\n    systemDate.getUTCMonth(),\r\n    systemDate.getUTCDate(),\r\n    systemDate.getUTCHours(),\r\n    systemDate.getUTCMinutes(),\r\n    systemDate.getUTCSeconds()\r\n  );\r\n  return utcDate;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/date.js?");

/***/ }),

/***/ "./src/dom-error.js":
/*!**************************!*\
  !*** ./src/dom-error.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAllErrors\": () => (/* binding */ displayAllErrors)\n/* harmony export */ });\n/* harmony import */ var _icons_aplication_error_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/aplication/error.svg */ \"./src/icons/aplication/error.svg\");\n\r\n\r\nfunction displayAllErrors() {\r\n  displayError(\".location-weather\");\r\n  displayError(\".info-general-content\");\r\n  displayError(\".info-forecast-content\");\r\n}\r\n\r\nfunction displayError(contentContainerClass) {\r\n  //Remove loader before displaying the error\r\n  const contentContainer = document.querySelector(contentContainerClass);\r\n  contentContainer.innerHTML = \"\";\r\n\r\n  //Generate error and container\r\n  const errorContainer = document.createElement(\"div\");\r\n  errorContainer.classList.add(\"api-error-container\");\r\n  let error;\r\n\r\n  if (contentContainerClass === \".location-weather\") {\r\n    error = document.createElement(\"p\");\r\n    error.classList.add(\"api-error-p\");\r\n    error.textContent = \"Could not find location\";\r\n  } else {\r\n    error = document.createElement(\"img\");\r\n    error.classList.add(\"api-error-img\");\r\n    error.src = _icons_aplication_error_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n  }\r\n\r\n  //Append to container\r\n  errorContainer.appendChild(error);\r\n  contentContainer.appendChild(errorContainer);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/dom-error.js?");

/***/ }),

/***/ "./src/dom-forecast-section.js":
/*!*************************************!*\
  !*** ./src/dom-forecast-section.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateForecastInfoSection\": () => (/* binding */ generateForecastInfoSection)\n/* harmony export */ });\n/* harmony import */ var _weather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-icons */ \"./src/weather-icons.js\");\n/* harmony import */ var _toggle_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-btn */ \"./src/toggle-btn.js\");\n\r\n\r\n\r\nfunction generateForecastInfoSection(infoWeatherData) {\r\n  //Remove loader before generating the section\r\n  const contentContainer = document.querySelector(\".info-forecast-content\");\r\n  contentContainer.innerHTML = \"\";\r\n\r\n  generateForecastSectionElements();\r\n  generateForecastSectionValues(infoWeatherData);\r\n}\r\n\r\nfunction generateForecastSectionElements() {\r\n  for (let i = 1; i <= 5; i++) {\r\n    //Create elements\r\n    const dayContainer = document.createElement(\"div\");\r\n    dayContainer.classList.add(`info-day${i}-container`);\r\n    const titleContainer = document.createElement(\"h5\");\r\n    titleContainer.classList.add(`info-day${i}-title`);\r\n    const iconContainer = document.createElement(\"img\");\r\n    iconContainer.classList.add(`info-day${i}-icon`);\r\n    const valueContainer = document.createElement(\"p\");\r\n    valueContainer.classList.add(`info-day${i}-value`);\r\n    dayContainer.appendChild(titleContainer);\r\n    dayContainer.appendChild(iconContainer);\r\n    dayContainer.appendChild(valueContainer);\r\n\r\n    //Append elements to container\r\n    const contentContainer = document.querySelector(\".info-forecast-content\");\r\n    contentContainer.appendChild(dayContainer);\r\n  }\r\n}\r\n\r\nfunction generateForecastSectionValues(infoWeatherData) {\r\n  //Get current unit\r\n  const tempUnit = (0,_toggle_btn__WEBPACK_IMPORTED_MODULE_1__.getUnitNames)()[0];\r\n\r\n  //Get elements\r\n  for (let i = 1; i <= 5; i++) {\r\n    const dayNumber = `day${i}`;\r\n\r\n    //Get elements\r\n    const titleContainer = document.querySelector(`.info-${dayNumber}-title`);\r\n    const valueContainer = document.querySelector(`.info-${dayNumber}-value`);\r\n    const iconContainer = document.querySelector(`.info-${dayNumber}-icon`);\r\n\r\n    //Generate values\r\n    titleContainer.textContent = `${infoWeatherData.forecast[dayNumber].day}`.toUpperCase();\r\n    valueContainer.textContent = `${infoWeatherData.forecast[dayNumber].min}/${infoWeatherData.forecast[dayNumber].max}${tempUnit}`;\r\n    iconContainer.src = (0,_weather_icons__WEBPACK_IMPORTED_MODULE_0__.generateWeatherIcon)(\r\n      `${infoWeatherData.forecast[dayNumber].weather}`\r\n    );\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/dom-forecast-section.js?");

/***/ }),

/***/ "./src/dom-general-info-section.js":
/*!*****************************************!*\
  !*** ./src/dom-general-info-section.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateGeneralInfoSection\": () => (/* binding */ generateGeneralInfoSection)\n/* harmony export */ });\n/* harmony import */ var _icons_aplication_feels_like_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/aplication/feels-like.svg */ \"./src/icons/aplication/feels-like.svg\");\n/* harmony import */ var _icons_aplication_sunrise_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/aplication/sunrise.svg */ \"./src/icons/aplication/sunrise.svg\");\n/* harmony import */ var _icons_aplication_sunset_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/aplication/sunset.svg */ \"./src/icons/aplication/sunset.svg\");\n/* harmony import */ var _icons_aplication_wind_speed_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/aplication/wind-speed.svg */ \"./src/icons/aplication/wind-speed.svg\");\n/* harmony import */ var _icons_aplication_humidity_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/aplication/humidity.svg */ \"./src/icons/aplication/humidity.svg\");\n/* harmony import */ var _toggle_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle-btn */ \"./src/toggle-btn.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction generateGeneralInfoSection(locationWeatherData, infoWeatherData) {\r\n  //Remove loader before generating the section\r\n  const contentContainer = document.querySelector(\".info-general-content\");\r\n  contentContainer.innerHTML = \"\";\r\n\r\n  generateGeneralInfoElements();\r\n  generateGeneralInfoValues(infoWeatherData);\r\n}\r\n\r\nfunction generateGeneralInfoElements() {\r\n  //Create elements\r\n  for (let i = 1; i <= 5; i++) {\r\n    //Create elements\r\n    const container = document.createElement(\"div\");\r\n    const icon = document.createElement(\"img\");\r\n    const title = document.createElement(\"h5\");\r\n    const text = document.createElement(\"p\");\r\n    container.appendChild(icon);\r\n    container.appendChild(title);\r\n    container.appendChild(text);\r\n\r\n    //Append elements to container\r\n    const contentContainer = document.querySelector(\".info-general-content\");\r\n    contentContainer.appendChild(container);\r\n  }\r\n}\r\n\r\nfunction generateGeneralInfoValues(infoWeatherData) {\r\n  //Get current unit\r\n  const tempUnit = (0,_toggle_btn__WEBPACK_IMPORTED_MODULE_5__.getUnitNames)()[0];\r\n  const speedUnit = (0,_toggle_btn__WEBPACK_IMPORTED_MODULE_5__.getUnitNames)()[1];\r\n\r\n  //Get elements\r\n  const contentContainer = document.querySelector(\".info-general-content\");\r\n  const allIcon = contentContainer.querySelectorAll(\"img\");\r\n  const allTitle = contentContainer.querySelectorAll(\"h5\");\r\n  const allText = contentContainer.querySelectorAll(\"p\");\r\n\r\n  //Set icons\r\n  allIcon[0].src = _icons_aplication_feels_like_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n  allIcon[1].src = _icons_aplication_sunrise_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n  allIcon[2].src = _icons_aplication_sunset_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n  allIcon[3].src = _icons_aplication_wind_speed_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n  allIcon[4].src = _icons_aplication_humidity_svg__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\n  //Set titles\r\n  allTitle[0].textContent = \"FEELS LIKE\";\r\n  allTitle[1].textContent = \"SUNRISE\";\r\n  allTitle[2].textContent = \"SUNSET\";\r\n  allTitle[3].textContent = \"WIND SPEED\";\r\n  allTitle[4].textContent = \"HUMIDITY\";\r\n\r\n  //Set values\r\n  allText[0].textContent = `${infoWeatherData.feelsLike}${tempUnit}`;\r\n  allText[1].textContent = `${infoWeatherData.sunrise}`;\r\n  allText[2].textContent = `${infoWeatherData.sunset}`;\r\n  allText[3].textContent = `${infoWeatherData.windSpeed} ${speedUnit}`;\r\n  allText[4].textContent = `${infoWeatherData.humidity}%`;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/dom-general-info-section.js?");

/***/ }),

/***/ "./src/dom-location-section.js":
/*!*************************************!*\
  !*** ./src/dom-location-section.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateLocationSection\": () => (/* binding */ generateLocationSection)\n/* harmony export */ });\n/* harmony import */ var _toggle_btn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-btn */ \"./src/toggle-btn.js\");\n/* harmony import */ var _weather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-icons */ \"./src/weather-icons.js\");\n\r\n\r\n\r\nfunction generateLocationSection(locationWeatherData) {\r\n  //Remove loader before generating the section\r\n  const contentContainer = document.querySelector(\".location-weather\");\r\n  contentContainer.innerHTML = \"\";\r\n\r\n  generateLocationSectionElements();\r\n  generateLocationSectionValues(locationWeatherData);\r\n}\r\n\r\nfunction generateLocationSectionElements() {\r\n  //Create elements\r\n  const iconContainer = document.createElement(\"div\");\r\n  iconContainer.classList.add(\"location-weather-icon-container\");\r\n  const weatherIcon = document.createElement(\"img\");\r\n  weatherIcon.classList.add(\"location-weather-icon\");\r\n  iconContainer.appendChild(weatherIcon);\r\n\r\n  const weatherInfoContainer = document.createElement(\"div\");\r\n  weatherInfoContainer.classList.add(\"location-weather-temp-container\");\r\n  const tempContainer = document.createElement(\"p\");\r\n  tempContainer.classList.add(\"location-weather-temp\");\r\n  const weatherContainer = document.createElement(\"p\");\r\n  weatherContainer.classList.add(\"location-weather-type\");\r\n  weatherInfoContainer.appendChild(tempContainer);\r\n  weatherInfoContainer.appendChild(weatherContainer);\r\n\r\n  const locationInfoContainer = document.createElement(\"div\");\r\n  locationInfoContainer.classList.add(\"location-weather-info-container\");\r\n  const placeContainer = document.createElement(\"p\");\r\n  placeContainer.classList.add(\"location-weather-place\");\r\n  locationInfoContainer.appendChild(placeContainer);\r\n\r\n  //Append elements to container\r\n  const contentContainer = document.querySelector(\".location-weather\");\r\n  contentContainer.appendChild(iconContainer);\r\n  contentContainer.appendChild(weatherInfoContainer);\r\n  contentContainer.appendChild(locationInfoContainer);\r\n}\r\n\r\nfunction generateLocationSectionValues(locationWeatherData) {\r\n  //Get current unit\r\n  const tempUnit = (0,_toggle_btn__WEBPACK_IMPORTED_MODULE_0__.getUnitNames)()[0];\r\n\r\n  //Get elements\r\n  const weatherIcon = document.querySelector(\".location-weather-icon\");\r\n  const tempContainer = document.querySelector(\".location-weather-temp\");\r\n  const weatherContainer = document.querySelector(\".location-weather-type\");\r\n  const placeContainer = document.querySelector(\".location-weather-place\");\r\n\r\n  //Generate values\r\n  weatherIcon.src = (0,_weather_icons__WEBPACK_IMPORTED_MODULE_1__.generateWeatherIcon)(\r\n    locationWeatherData.currentWeather,\r\n    locationWeatherData.timeOfDay\r\n  );\r\n  tempContainer.textContent = `${locationWeatherData.currentTemp}${tempUnit}`;\r\n  weatherContainer.textContent = `${locationWeatherData.currentWeather}`;\r\n  placeContainer.textContent = `${locationWeatherData.city}, ${locationWeatherData.country}`;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/dom-location-section.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateWeatherPage\": () => (/* binding */ generateWeatherPage),\n/* harmony export */   \"generateAllLoaders\": () => (/* binding */ generateAllLoaders)\n/* harmony export */ });\n/* harmony import */ var _dom_location_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-location-section */ \"./src/dom-location-section.js\");\n/* harmony import */ var _dom_general_info_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-general-info-section */ \"./src/dom-general-info-section.js\");\n/* harmony import */ var _dom_forecast_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-forecast-section */ \"./src/dom-forecast-section.js\");\n/* harmony import */ var _weather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-icons */ \"./src/weather-icons.js\");\n\r\n\r\n\r\n\r\n\r\nfunction generateAllLoaders() {\r\n  generateLoader(\".location-weather\");\r\n  generateLoader(\".info-general-content\");\r\n  generateLoader(\".info-forecast-content\");\r\n}\r\n\r\nfunction generateLoader(contentContainerClass) {\r\n  //Remove all existing elements before generating the loader\r\n  const contentContainer = document.querySelector(contentContainerClass);\r\n  contentContainer.innerHTML = \"\";\r\n\r\n  //Generate loader and container\r\n  const loaderContainer = document.createElement(\"div\");\r\n  loaderContainer.classList.add(\"loader-container\");\r\n  const loader = document.createElement(\"div\");\r\n  loader.classList.add(\"loader\");\r\n\r\n  //Append to container\r\n  loaderContainer.appendChild(loader);\r\n  contentContainer.appendChild(loaderContainer);\r\n}\r\n\r\nfunction generateWeatherPage(locationWeatherData, infoWeatherData) {\r\n  (0,_dom_location_section__WEBPACK_IMPORTED_MODULE_0__.generateLocationSection)(locationWeatherData);\r\n  generateInfoSection(locationWeatherData, infoWeatherData);\r\n  changeColorByWeather(locationWeatherData);\r\n}\r\n\r\nfunction generateInfoSection(locationWeatherData, infoWeatherData) {\r\n  (0,_dom_general_info_section__WEBPACK_IMPORTED_MODULE_1__.generateGeneralInfoSection)(locationWeatherData, infoWeatherData);\r\n  (0,_dom_forecast_section__WEBPACK_IMPORTED_MODULE_2__.generateForecastInfoSection)(infoWeatherData);\r\n}\r\n\r\nfunction changeColorByWeather(locationWeatherData) {\r\n  //Location section background\r\n  const locationSection = document.querySelector(\".location\");\r\n  locationSection.style.background = (0,_weather_icons__WEBPACK_IMPORTED_MODULE_3__.generateWeatherColors)(\r\n    locationWeatherData.currentWeather,\r\n    locationWeatherData.timeOfDay\r\n  )[0];\r\n\r\n  //Toggle button\r\n  const toggleButton = document.querySelector(\".toggle-slider\");\r\n  toggleButton.style.background = (0,_weather_icons__WEBPACK_IMPORTED_MODULE_3__.generateWeatherColors)(\r\n    locationWeatherData.currentWeather,\r\n    locationWeatherData.timeOfDay\r\n  )[1];\r\n\r\n  //Info section icons\r\n  const infoSection = document.querySelector(\".info\");\r\n  const allIcons = infoSection.querySelectorAll(\"img\");\r\n\r\n  allIcons.forEach((icon) => {\r\n    icon.style.filter = (0,_weather_icons__WEBPACK_IMPORTED_MODULE_3__.generateWeatherColors)(\r\n      locationWeatherData.currentWeather,\r\n      locationWeatherData.timeOfDay\r\n    )[2];\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/dom.js?");

/***/ }),

/***/ "./src/fetch-data.js":
/*!***************************!*\
  !*** ./src/fetch-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchWeatherData\": () => (/* binding */ fetchWeatherData)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _toggle_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-btn */ \"./src/toggle-btn.js\");\n/* harmony import */ var _store_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store-data */ \"./src/store-data.js\");\n/* harmony import */ var _dom_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-error */ \"./src/dom-error.js\");\n\r\n\r\n\r\n\r\n\r\nasync function fetchWeatherData(location) {\r\n  try {\r\n    const API_KEY = \"d3bb1e3bed4381c130b23c941a594404\";\r\n    const unit = (0,_toggle_btn__WEBPACK_IMPORTED_MODULE_1__.getUnitType)();\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateAllLoaders)();\r\n\r\n    //Fetch data\r\n    const fetchedCurrentWeatherData = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=${unit}`,\r\n      { mode: \"cors\" }\r\n    );\r\n    const fetchedForecastWeatherData = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=${unit}`,\r\n      { mode: \"cors\" }\r\n    );\r\n\r\n    //Get json\r\n    const fullWeatherData = await fetchedCurrentWeatherData.json();\r\n    const fullForecastData = await fetchedForecastWeatherData.json();\r\n\r\n    //Store data\r\n    const locationWeatherData = (0,_store_data__WEBPACK_IMPORTED_MODULE_2__.storeLocationWeatherData)(fullWeatherData);\r\n    const infoWeatherData = (0,_store_data__WEBPACK_IMPORTED_MODULE_2__.storeInfoWeatherData)(\r\n      fullWeatherData,\r\n      fullForecastData\r\n    );\r\n\r\n    //Generate the page\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateWeatherPage)(locationWeatherData, infoWeatherData);\r\n  } catch (error) {\r\n    (0,_dom_error__WEBPACK_IMPORTED_MODULE_3__.displayAllErrors)();\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/fetch-data.js?");

/***/ }),

/***/ "./src/icons/aplication/error.svg":
/*!****************************************!*\
  !*** ./src/icons/aplication/error.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"613d7f40f63e7ca55d04.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/aplication/error.svg?");

/***/ }),

/***/ "./src/icons/aplication/feels-like.svg":
/*!*********************************************!*\
  !*** ./src/icons/aplication/feels-like.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68caee2f71c475b5e078.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/aplication/feels-like.svg?");

/***/ }),

/***/ "./src/icons/aplication/humidity.svg":
/*!*******************************************!*\
  !*** ./src/icons/aplication/humidity.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8735be59889e1e3280ed.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/aplication/humidity.svg?");

/***/ }),

/***/ "./src/icons/aplication/sunrise.svg":
/*!******************************************!*\
  !*** ./src/icons/aplication/sunrise.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9695a6b5f8ecd3e30259.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/aplication/sunrise.svg?");

/***/ }),

/***/ "./src/icons/aplication/sunset.svg":
/*!*****************************************!*\
  !*** ./src/icons/aplication/sunset.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44275c39ad3e558fdac1.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/aplication/sunset.svg?");

/***/ }),

/***/ "./src/icons/aplication/wind-speed.svg":
/*!*********************************************!*\
  !*** ./src/icons/aplication/wind-speed.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd74a4dde8275263486e.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/aplication/wind-speed.svg?");

/***/ }),

/***/ "./src/icons/weather/ash.svg":
/*!***********************************!*\
  !*** ./src/icons/weather/ash.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"db983a0922633a90aa73.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/ash.svg?");

/***/ }),

/***/ "./src/icons/weather/clear-day.svg":
/*!*****************************************!*\
  !*** ./src/icons/weather/clear-day.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c23e7855e1cb8ac7c36d.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/clear-day.svg?");

/***/ }),

/***/ "./src/icons/weather/clear-night.svg":
/*!*******************************************!*\
  !*** ./src/icons/weather/clear-night.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91c54d35a1d823193fe7.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/clear-night.svg?");

/***/ }),

/***/ "./src/icons/weather/clouds.svg":
/*!**************************************!*\
  !*** ./src/icons/weather/clouds.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba3686e4a3d64a9dc5cf.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/clouds.svg?");

/***/ }),

/***/ "./src/icons/weather/drizzle.svg":
/*!***************************************!*\
  !*** ./src/icons/weather/drizzle.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4843a199da459ce5d58c.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/drizzle.svg?");

/***/ }),

/***/ "./src/icons/weather/dust-sand.svg":
/*!*****************************************!*\
  !*** ./src/icons/weather/dust-sand.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9858829fbac6db396ed7.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/dust-sand.svg?");

/***/ }),

/***/ "./src/icons/weather/haze-fog.svg":
/*!****************************************!*\
  !*** ./src/icons/weather/haze-fog.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c3d1014174434d5d708.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/haze-fog.svg?");

/***/ }),

/***/ "./src/icons/weather/mist.svg":
/*!************************************!*\
  !*** ./src/icons/weather/mist.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9f89c012c14bc7187187.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/mist.svg?");

/***/ }),

/***/ "./src/icons/weather/rain.svg":
/*!************************************!*\
  !*** ./src/icons/weather/rain.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"90fd14198e4b9af0dd81.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/rain.svg?");

/***/ }),

/***/ "./src/icons/weather/smoke.svg":
/*!*************************************!*\
  !*** ./src/icons/weather/smoke.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"27d773eaaa631862b96f.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/smoke.svg?");

/***/ }),

/***/ "./src/icons/weather/snow.svg":
/*!************************************!*\
  !*** ./src/icons/weather/snow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"41a01da10b2c84abde09.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/snow.svg?");

/***/ }),

/***/ "./src/icons/weather/squall-tornado.svg":
/*!**********************************************!*\
  !*** ./src/icons/weather/squall-tornado.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"14b8fdcb58e3ad112ec3.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/squall-tornado.svg?");

/***/ }),

/***/ "./src/icons/weather/thunderstorm.svg":
/*!********************************************!*\
  !*** ./src/icons/weather/thunderstorm.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"989e9cae9a9800e23f85.svg\";\n\n//# sourceURL=webpack://weather/./src/icons/weather/thunderstorm.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_toggle_btn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/toggle-btn.css */ \"./src/css/toggle-btn.css\");\n/* harmony import */ var _css_loader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/loader.css */ \"./src/css/loader.css\");\n/* harmony import */ var _css_error_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/error.css */ \"./src/css/error.css\");\n/* harmony import */ var _fetch_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetch-data */ \"./src/fetch-data.js\");\n/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-box */ \"./src/search-box.js\");\n/* harmony import */ var _input_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-error */ \"./src/input-error.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet currentLocation = \"Cairo\";\r\n(0,_fetch_data__WEBPACK_IMPORTED_MODULE_4__.fetchWeatherData)(currentLocation);\r\n\r\n//Add listener to search box\r\nfunction addListenerToSearchButton() {\r\n  const locationSearchButton = document.querySelector(\r\n    \".location-search-button\"\r\n  );\r\n  const locationSearchInput = document.querySelector(\".location-search-input\");\r\n\r\n  //Add click event\r\n  locationSearchButton.addEventListener(\"click\", searchEvent);\r\n\r\n  //Add keyboard event\r\n  window.addEventListener(\"keyup\", (event) => {\r\n    if (event.key === \"Enter\" && locationSearchInput.value !== \"\") {\r\n      searchEvent();\r\n    }\r\n  });\r\n}\r\n\r\nfunction searchEvent() {\r\n  const locationSearchInput = document.querySelector(\".location-search-input\");\r\n\r\n  //Throw error if the text is invalid\r\n  if (locationSearchInput.validity.valid) {\r\n    (0,_input_error__WEBPACK_IMPORTED_MODULE_6__.eraseInputError)();\r\n  } else {\r\n    (0,_input_error__WEBPACK_IMPORTED_MODULE_6__.showInputError)(locationSearchInput);\r\n    return;\r\n  }\r\n\r\n  //Get location and data\r\n  currentLocation = (0,_search_box__WEBPACK_IMPORTED_MODULE_5__.getCurrentLocation)();\r\n  (0,_fetch_data__WEBPACK_IMPORTED_MODULE_4__.fetchWeatherData)(currentLocation);\r\n}\r\n\r\naddListenerToSearchButton();\r\n\r\n//Add listener to toggle\r\nfunction addListenerToToggle() {\r\n  const toggleCheckbox = document.querySelector(\".toggle-checkbox\");\r\n  const unitCelcius = document.querySelector(\".celcius\");\r\n  const unitFahrenheit = document.querySelector(\".fahrenheit\");\r\n  toggleCheckbox.addEventListener(\"change\", () => {\r\n    if (toggleCheckbox.checked) {\r\n      unitCelcius.style.color = \"white\";\r\n      unitFahrenheit.style.color = \"gray\";\r\n    } else {\r\n      unitCelcius.style.color = \"gray\";\r\n      unitFahrenheit.style.color = \"white\";\r\n    }\r\n    (0,_fetch_data__WEBPACK_IMPORTED_MODULE_4__.fetchWeatherData)(currentLocation);\r\n  });\r\n}\r\naddListenerToToggle();\r\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/input-error.js":
/*!****************************!*\
  !*** ./src/input-error.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showInputError\": () => (/* binding */ showInputError),\n/* harmony export */   \"eraseInputError\": () => (/* binding */ eraseInputError)\n/* harmony export */ });\nfunction showInputError(searchInput) {\r\n  const errorDiv = document.querySelector(\".input-error-div\");\r\n  const error = document.querySelector(\".input-error\");\r\n\r\n  errorDiv.style.opacity = \"1\";\r\n  errorDiv.style.transform = \"translateY(0)\";\r\n\r\n  if (searchInput.validity.typeMismatch) {\r\n    error.textContent = `The location name is not valid.`;\r\n  } else if (searchInput.validity.tooShort) {\r\n    error.textContent = `The location name should be at least ${searchInput.minLength} characters long. You have entered ${searchInput.value.length}.`;\r\n  } else if (searchInput.validity.tooLong) {\r\n    error.textContent = `The location name should be less than ${searchInput.maxLength} characters. You have entered ${searchInput.value.length}.`;\r\n  } else if (searchInput.validity.patternMismatch) {\r\n    error.textContent = `The location name should contain only letters and spaces. You can search by city name or city name and country code separated by a comma. Use ISO 3166 country codes`;\r\n  }\r\n}\r\n\r\nfunction eraseInputError() {\r\n  const errorDiv = document.querySelector(\".input-error-div\");\r\n  errorDiv.style.opacity = \"0\";\r\n  errorDiv.style.transform = \"translateY(-10px)\";\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/input-error.js?");

/***/ }),

/***/ "./src/search-box.js":
/*!***************************!*\
  !*** ./src/search-box.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentLocation\": () => (/* binding */ getCurrentLocation)\n/* harmony export */ });\nfunction getCurrentLocation() {\r\n  const locationSearchInput = document.querySelector(\".location-search-input\");\r\n  return locationSearchInput.value;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/search-box.js?");

/***/ }),

/***/ "./src/store-data.js":
/*!***************************!*\
  !*** ./src/store-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storeLocationWeatherData\": () => (/* binding */ storeLocationWeatherData),\n/* harmony export */   \"storeInfoWeatherData\": () => (/* binding */ storeInfoWeatherData)\n/* harmony export */ });\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ \"./src/date.js\");\n\r\n\r\nfunction storeLocationWeatherData(fullWeatherData) {\r\n  const locationWeatherData = {\r\n    city: fullWeatherData.name,\r\n    country: fullWeatherData.sys.country,\r\n    currentTemp: fullWeatherData.main.temp.toFixed(0),\r\n    currentWeather: fullWeatherData.weather[0].main,\r\n    timeOfDay: fullWeatherData.weather[0].icon.slice(-1),\r\n  };\r\n  return locationWeatherData;\r\n}\r\n\r\nfunction storeInfoWeatherData(fullWeatherData, fullForecastData) {\r\n  const infoWeatherData = {\r\n    feelsLike: fullWeatherData.main.feels_like.toFixed(0),\r\n    sunrise: (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDateToTime)(\r\n      fullWeatherData.sys.sunrise,\r\n      fullWeatherData.timezone\r\n    ),\r\n    sunset: (0,_date__WEBPACK_IMPORTED_MODULE_0__.convertDateToTime)(\r\n      fullWeatherData.sys.sunset,\r\n      fullWeatherData.timezone\r\n    ),\r\n    windSpeed: fullWeatherData.wind.speed,\r\n    humidity: fullWeatherData.main.humidity,\r\n    forecast: {\r\n      day1: getParameters(\r\n        fullForecastData.list,\r\n        fullWeatherData.timezone,\r\n        0,\r\n        8\r\n      ),\r\n      day2: getParameters(\r\n        fullForecastData.list,\r\n        fullWeatherData.timezone,\r\n        8,\r\n        16\r\n      ),\r\n      day3: getParameters(\r\n        fullForecastData.list,\r\n        fullWeatherData.timezone,\r\n        16,\r\n        24\r\n      ),\r\n      day4: getParameters(\r\n        fullForecastData.list,\r\n        fullWeatherData.timezone,\r\n        24,\r\n        32\r\n      ),\r\n      day5: getParameters(\r\n        fullForecastData.list,\r\n        fullWeatherData.timezone,\r\n        32,\r\n        40\r\n      ),\r\n    },\r\n  };\r\n  return infoWeatherData;\r\n}\r\n\r\nfunction getParameters(fullArray, timezoneShift, indexStart, indexEnd) {\r\n  const minAndMaxTemp = getMinAndMaxTemp(fullArray, indexStart, indexEnd);\r\n  return {\r\n    min: minAndMaxTemp[0],\r\n    max: minAndMaxTemp[1],\r\n    weather: fullArray[indexStart].weather[0].main,\r\n    day: (0,_date__WEBPACK_IMPORTED_MODULE_0__.getDayOfTheWeek)(fullArray[indexStart].dt, timezoneShift),\r\n  };\r\n}\r\n\r\nfunction getMinAndMaxTemp(fullArray, indexStart, indexEnd) {\r\n  const currentDayArray = fullArray.slice(indexStart, indexEnd);\r\n  const tempArray = currentDayArray.reduce((previousValue, currentValue) => {\r\n    previousValue.push(currentValue.main.temp);\r\n    return previousValue;\r\n  }, []);\r\n  const minTemp = Math.min(...tempArray).toFixed(0);\r\n  const maxTemp = Math.max(...tempArray).toFixed(0);\r\n  return [minTemp, maxTemp];\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/store-data.js?");

/***/ }),

/***/ "./src/toggle-btn.js":
/*!***************************!*\
  !*** ./src/toggle-btn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUnitType\": () => (/* binding */ getUnitType),\n/* harmony export */   \"getUnitNames\": () => (/* binding */ getUnitNames)\n/* harmony export */ });\nfunction getUnitType() {\r\n  const toggleCheckbox = document.querySelector(\".toggle-checkbox\");\r\n  if (toggleCheckbox.checked) {\r\n    return \"imperial\";\r\n  } else {\r\n    return \"metric\";\r\n  }\r\n}\r\n\r\nfunction getUnitNames() {\r\n  const unitType = getUnitType();\r\n  if (unitType === \"imperial\") {\r\n    return [\"°F\", \"mph\"];\r\n  } else {\r\n    return [\"°C\", \"m/s\"];\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/toggle-btn.js?");

/***/ }),

/***/ "./src/weather-icons.js":
/*!******************************!*\
  !*** ./src/weather-icons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateWeatherIcon\": () => (/* binding */ generateWeatherIcon),\n/* harmony export */   \"generateWeatherColors\": () => (/* binding */ generateWeatherColors)\n/* harmony export */ });\n/* harmony import */ var _icons_weather_ash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/weather/ash.svg */ \"./src/icons/weather/ash.svg\");\n/* harmony import */ var _icons_weather_clear_day_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/weather/clear-day.svg */ \"./src/icons/weather/clear-day.svg\");\n/* harmony import */ var _icons_weather_clear_night_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/weather/clear-night.svg */ \"./src/icons/weather/clear-night.svg\");\n/* harmony import */ var _icons_weather_clouds_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/weather/clouds.svg */ \"./src/icons/weather/clouds.svg\");\n/* harmony import */ var _icons_weather_drizzle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/weather/drizzle.svg */ \"./src/icons/weather/drizzle.svg\");\n/* harmony import */ var _icons_weather_dust_sand_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/weather/dust-sand.svg */ \"./src/icons/weather/dust-sand.svg\");\n/* harmony import */ var _icons_weather_haze_fog_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/weather/haze-fog.svg */ \"./src/icons/weather/haze-fog.svg\");\n/* harmony import */ var _icons_weather_mist_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/weather/mist.svg */ \"./src/icons/weather/mist.svg\");\n/* harmony import */ var _icons_weather_rain_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/weather/rain.svg */ \"./src/icons/weather/rain.svg\");\n/* harmony import */ var _icons_weather_smoke_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/weather/smoke.svg */ \"./src/icons/weather/smoke.svg\");\n/* harmony import */ var _icons_weather_snow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/weather/snow.svg */ \"./src/icons/weather/snow.svg\");\n/* harmony import */ var _icons_weather_squall_tornado_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/weather/squall-tornado.svg */ \"./src/icons/weather/squall-tornado.svg\");\n/* harmony import */ var _icons_weather_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/weather/thunderstorm.svg */ \"./src/icons/weather/thunderstorm.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst weatherObject = {\r\n  Ash: {\r\n    icon: _icons_weather_ash_svg__WEBPACK_IMPORTED_MODULE_0__,\r\n    color: \"#C31432\",\r\n    filter:\r\n      \"invert(21%) sepia(96%) saturate(4187%) hue-rotate(340deg) brightness(76%) contrast(100%)\",\r\n    background: \"linear-gradient(#240B36, #C31432)\",\r\n  },\r\n  Clear: {\r\n    day: {\r\n      icon: _icons_weather_clear_day_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n      color: \"#FC4A1A\",\r\n      filter:\r\n        \"invert(52%) sepia(85%) saturate(5041%) hue-rotate(348deg) brightness(97%) contrast(103%)\",\r\n      background: \"linear-gradient(#FC4A1A, #F7B733)\",\r\n    },\r\n    night: {\r\n      icon: _icons_weather_clear_night_svg__WEBPACK_IMPORTED_MODULE_2__,\r\n      color: \"#004E92\",\r\n      filter:\r\n        \"invert(19%) sepia(94%) saturate(1703%) hue-rotate(191deg) brightness(96%) contrast(101%)\",\r\n      background: \"linear-gradient(#000428, #004E92)\",\r\n    },\r\n  },\r\n  Clouds: {\r\n    icon: _icons_weather_clouds_svg__WEBPACK_IMPORTED_MODULE_3__,\r\n    color: \"#1488CC\",\r\n    filter:\r\n      \"invert(45%) sepia(61%) saturate(4575%) hue-rotate(179deg) brightness(92%) contrast(84%)\",\r\n    background: \"linear-gradient(#2B32B2, #1488CC)\",\r\n  },\r\n  Drizzle: {\r\n    icon: _icons_weather_drizzle_svg__WEBPACK_IMPORTED_MODULE_4__,\r\n    color: \"#0575E6\",\r\n    filter:\r\n      \"invert(28%) sepia(69%) saturate(2232%) hue-rotate(196deg) brightness(103%) contrast(97%)\",\r\n    background: \"linear-gradient(#021B79, #0575E6)\",\r\n  },\r\n  Dust: {\r\n    icon: _icons_weather_dust_sand_svg__WEBPACK_IMPORTED_MODULE_5__,\r\n    color: \"#E35D5D\",\r\n    filter:\r\n      \"invert(45%) sepia(60%) saturate(535%) hue-rotate(311deg) brightness(94%) contrast(103%)\",\r\n    background: \"linear-gradient(#E53935, #E35D5D)\",\r\n  },\r\n  Sand: {\r\n    icon: _icons_weather_dust_sand_svg__WEBPACK_IMPORTED_MODULE_5__,\r\n    color: \"#E35D5D\",\r\n    filter:\r\n      \"invert(45%) sepia(60%) saturate(535%) hue-rotate(311deg) brightness(94%) contrast(103%)\",\r\n    background: \"linear-gradient(#E53935, #E35D5D)\",\r\n  },\r\n  Haze: {\r\n    icon: _icons_weather_haze_fog_svg__WEBPACK_IMPORTED_MODULE_6__,\r\n    color: \"#F56217\",\r\n    filter:\r\n      \"invert(62%) sepia(50%) saturate(6589%) hue-rotate(350deg) brightness(96%) contrast(100%)\",\r\n    background: \"linear-gradient(#0B486B, #F56217)\",\r\n  },\r\n  Fog: {\r\n    icon: _icons_weather_haze_fog_svg__WEBPACK_IMPORTED_MODULE_6__,\r\n    color: \"#F56217\",\r\n    filter:\r\n      \"invert(62%) sepia(50%) saturate(6589%) hue-rotate(350deg) brightness(96%) contrast(100%)\",\r\n    background: \"linear-gradient(#0B486B, #F56217)\",\r\n  },\r\n  Mist: {\r\n    icon: _icons_weather_mist_svg__WEBPACK_IMPORTED_MODULE_7__,\r\n    color: \"#136A8A\",\r\n    filter:\r\n      \"invert(30%) sepia(8%) saturate(4604%) hue-rotate(152deg) brightness(108%) contrast(90%)\",\r\n    background: \"linear-gradient(#136A8A, #267871)\",\r\n  },\r\n  Rain: {\r\n    icon: _icons_weather_rain_svg__WEBPACK_IMPORTED_MODULE_8__,\r\n    color: \"#0575E6\",\r\n    filter:\r\n      \"invert(28%) sepia(69%) saturate(2232%) hue-rotate(196deg) brightness(103%) contrast(97%)\",\r\n    background: \"linear-gradient(#021B79, #0575E6)\",\r\n  },\r\n  Smoke: {\r\n    icon: _icons_weather_smoke_svg__WEBPACK_IMPORTED_MODULE_9__,\r\n    color: \"#2C5364\",\r\n    filter:\r\n      \"invert(26%) sepia(73%) saturate(334%) hue-rotate(153deg) brightness(91%) contrast(89%)\",\r\n    background: \"linear-gradient(#0F2027, #2C5364)\",\r\n  },\r\n  Snow: {\r\n    icon: _icons_weather_snow_svg__WEBPACK_IMPORTED_MODULE_10__,\r\n    color: \"#4568DC\",\r\n    filter:\r\n      \"invert(37%) sepia(27%) saturate(2801%) hue-rotate(202deg) brightness(95%) contrast(90%)\",\r\n    background: \"linear-gradient(#4568DC, #B06AB3)\",\r\n  },\r\n  Squall: {\r\n    icon: _icons_weather_squall_tornado_svg__WEBPACK_IMPORTED_MODULE_11__,\r\n    color: \"#734B6D\",\r\n    filter:\r\n      \"invert(32%) sepia(20%) saturate(854%) hue-rotate(258deg) brightness(95%) contrast(90%)\",\r\n    background: \"linear-gradient(#42275A, #734B6D)\",\r\n  },\r\n  Tornado: {\r\n    icon: _icons_weather_squall_tornado_svg__WEBPACK_IMPORTED_MODULE_11__,\r\n    color: \"#734B6D\",\r\n    filter:\r\n      \"invert(32%) sepia(20%) saturate(854%) hue-rotate(258deg) brightness(95%) contrast(90%)\",\r\n    background: \"linear-gradient(#42275A, #734B6D)\",\r\n  },\r\n  Thunderstorm: {\r\n    icon: _icons_weather_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_12__,\r\n    color: \"#232526\",\r\n    filter:\r\n      \"invert(12%) sepia(8%) saturate(278%) hue-rotate(156deg) brightness(99%) contrast(95%)\",\r\n    background: \"linear-gradient(#232526, #414345)\",\r\n  },\r\n};\r\n\r\nfunction generateWeatherIcon(currentWeather, currentTimeOfDay = \"d\") {\r\n  if (currentWeather === \"Clear\") {\r\n    if (currentTimeOfDay === \"d\") {\r\n      return weatherObject[currentWeather].day.icon;\r\n    } else {\r\n      return weatherObject[currentWeather].night.icon;\r\n    }\r\n  }\r\n  return weatherObject[currentWeather].icon;\r\n}\r\n\r\nfunction generateWeatherColors(currentWeather, currentTimeOfDay = \"d\") {\r\n  if (currentWeather === \"Clear\") {\r\n    if (currentTimeOfDay === \"d\") {\r\n      return [\r\n        weatherObject[currentWeather].day.background,\r\n        weatherObject[currentWeather].day.color,\r\n        weatherObject[currentWeather].day.filter,\r\n      ];\r\n    } else {\r\n      return [\r\n        weatherObject[currentWeather].night.background,\r\n        weatherObject[currentWeather].night.color,\r\n        weatherObject[currentWeather].night.filter,\r\n      ];\r\n    }\r\n  }\r\n  return [\r\n    weatherObject[currentWeather].background,\r\n    weatherObject[currentWeather].color,\r\n    weatherObject[currentWeather].filter,\r\n  ];\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather/./src/weather-icons.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;