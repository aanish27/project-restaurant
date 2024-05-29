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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img.jpg */ \"./src/assets/img.jpg\");\n/* harmony import */ var _modules_add_content_to_div__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add-content-to-div */ \"./src/modules/add-content-to-div.js\");\nconsole.log(\"webpack Working\")\n;\n\n\nconst content = document.querySelector(\"#content\")\n\n\nconst about = document.querySelector('.about')\nconst home = document.querySelector('.home')\nconst contact = document.querySelector('.contact')\n\nabout.addEventListener('click' , () => {\n    if (content.firstChild) {\n        content.querySelectorAll(\"*\").forEach(e => e.remove());\n    }\n    (0,_modules_add_content_to_div__WEBPACK_IMPORTED_MODULE_1__.aboutContent)(content,_assets_img_jpg__WEBPACK_IMPORTED_MODULE_0__)\n})\nhome.addEventListener('click' , () => {\n    if (content.firstChild) {\n        content.querySelectorAll(\"*\").forEach(e => e.remove());\n    }\n    (0,_modules_add_content_to_div__WEBPACK_IMPORTED_MODULE_1__.homeContent)(content,_assets_img_jpg__WEBPACK_IMPORTED_MODULE_0__)\n})\n\ncontact.addEventListener('click' , () => {\n    if (content.firstChild) {\n        content.querySelectorAll(\"*\").forEach(e => e.remove());\n    }\n    (0,_modules_add_content_to_div__WEBPACK_IMPORTED_MODULE_1__.contactContent)(content,_assets_img_jpg__WEBPACK_IMPORTED_MODULE_0__)\n})\n\n\n\n\n\n\n//# sourceURL=webpack://project-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-content-to-div.js":
/*!*******************************************!*\
  !*** ./src/modules/add-content-to-div.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutContent: () => (/* binding */ aboutContent),\n/* harmony export */   contactContent: () => (/* binding */ contactContent),\n/* harmony export */   homeContent: () => (/* binding */ homeContent)\n/* harmony export */ });\n\n\n\nfunction homeContent(div,img) {\n    let bgImg = document.createElement(\"img\")\n    bgImg.src = img\n    bgImg.style.width = '600px'\n    bgImg.style.height = '600px'\n    let introText = document.createElement(\"p\")\n    let openText = document.createElement(\"p\")\n    introText.innerHTML = \"we are the best in the west\"\n    openText.innerHTML = \"we are oben from 7am to 9pm, come visit sheck out us\"\n    return div.append(bgImg,introText,openText)\n\n}\n\n\nfunction aboutContent(div,img) {\n    let bgImg = document.createElement(\"img\")\n    bgImg.src = img\n    bgImg.style.width = '600px'\n    bgImg.style.height = '600px'\n    let introText = document.createElement(\"p\")\n    let openText = document.createElement(\"p\")\n    introText.innerHTML = \"the story\"\n    openText.innerHTML = \"i dont even know\"\n    return div.append(bgImg,introText,openText)\n\n}\n\nfunction contactContent(div,img) {\n    let bgImg = document.createElement(\"img\")\n    bgImg.src = img\n    bgImg.style.width = '600px'\n    bgImg.style.height = '600px'\n    let introText = document.createElement(\"p\")\n    let openText = document.createElement(\"p\")\n    introText.innerHTML = \"contact\"\n    openText.innerHTML = \"+94100023003\"\n    return div.append(bgImg,introText,openText)\n\n}\n\n\n//# sourceURL=webpack://project-restaurant/./src/modules/add-content-to-div.js?");

/***/ }),

/***/ "./src/assets/img.jpg":
/*!****************************!*\
  !*** ./src/assets/img.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9dc9fe09cbdfdfa66c1.jpg\";\n\n//# sourceURL=webpack://project-restaurant/./src/assets/img.jpg?");

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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