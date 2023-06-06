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

/***/ "./case1/machine.js":
/*!**************************!*\
  !*** ./case1/machine.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_doce_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/doce.png */ \"./images/doce.png\");\n/* harmony import */ var _images_pirulito_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pirulito.png */ \"./images/pirulito.png\");\n/* harmony import */ var _images_chocolate_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/chocolate.png */ \"./images/chocolate.png\");\n/* harmony import */ var _images_moeda1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/moeda1.png */ \"./images/moeda1.png\");\n/* harmony import */ var _images_nota2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/nota2.png */ \"./images/nota2.png\");\n/* harmony import */ var _images_nota5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/nota5.png */ \"./images/nota5.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst list = document.querySelectorAll(\".inserir\");\r\nconst listD = document.querySelectorAll(\".doce\");\r\nconst valor = document.querySelector(\".valor\");\r\nconst escolhido = document.querySelector(\".escolhido\");\r\nconst btnComprar = document.querySelector(\".btnComprar\");\r\nconst imgSaida = document\r\n  .querySelector(\".saidaDoce\")\r\n  .getElementsByTagName(\"img\");\r\nconst valorTroco = document.querySelector(\".valorTroco\");\r\nvar refEscolhido;\r\nvar transformado;\r\nvar soma = 0;\r\n\r\nfunction somandoValor() {\r\n  if (String(this.classList).includes(\"1\") && soma < 10) {\r\n    soma += 1;\r\n    valor.innerHTML = `R$${soma},00`;\r\n  } else if (String(this.classList).includes(\"2\") && soma < 9) {\r\n    soma += 2;\r\n    valor.innerHTML = `R$${soma},00`;\r\n  } else if (String(this.classList).includes(\"3\") && soma < 6) {\r\n    soma += 5;\r\n    valor.innerHTML = `R$${soma},00`;\r\n  } else if (soma == 10) {\r\n    alert(\"Este é o maximo de valor que nossa maquina aceita !! (R$10,00)\");\r\n  } else {\r\n    alert(\r\n      \"Você não pode inserir este valor de entrada mais, pois, nosso limite é R$10\"\r\n    );\r\n  }\r\n  if (soma > 5) {\r\n    listD[0].className = listD[0].className.replace(\"disable\", \"active\");\r\n  }\r\n  if (soma > 6) {\r\n    listD[1].className = listD[1].className.replace(\"disable\", \"active\");\r\n  }\r\n  if (soma > 7) {\r\n    listD[2].className = listD[2].className.replace(\"disable\", \"active\");\r\n  }\r\n}\r\n\r\nfunction selecionar() {\r\n  if (String(this.classList).includes(\"active\")) {\r\n    refEscolhido = this;\r\n    transformado = String(this.classList).replace(\"active\", \" \");\r\n    escolhido.innerHTML = `${transformado}`;\r\n  }\r\n}\r\n\r\nfunction comprar() {\r\n  if (transformado.includes(\"A\") && soma > 5) {\r\n    valor.innerHTML = \"R$0,00\";\r\n    valorTroco.innerHTML = `R$${soma - 6},00`;\r\n    soma = 0;\r\n    imgSaida[0].hidden = false;\r\n    imgSaida[0].src = refEscolhido.getElementsByTagName(\"img\")[0].src;\r\n  } else if (transformado.includes(\"B\") && soma > 6) {\r\n    valor.innerHTML = \"R$0,00\";\r\n    valorTroco.innerHTML = `R$${soma - 7},00`;\r\n    soma = 0;\r\n    imgSaida[0].hidden = false;\r\n    imgSaida[0].src = refEscolhido.getElementsByTagName(\"img\")[0].src;\r\n  } else if (transformado.includes(\"C\") && soma > 7) {\r\n    valor.innerHTML = \"R$0,00\";\r\n    valorTroco.innerHTML = `R$${soma - 8},00`;\r\n    soma = 0;\r\n    imgSaida[0].hidden = false;\r\n    imgSaida[0].src = refEscolhido.getElementsByTagName(\"img\")[0].src;\r\n  }\r\n  escolhido.innerHTML = \"~NA~\";\r\n  transformado = \"\";\r\n}\r\n\r\nlist.forEach((item) => item.addEventListener(\"click\", somandoValor));\r\n\r\nlistD.forEach((item) => item.addEventListener(\"click\", selecionar));\r\nbtnComprar.addEventListener(\"click\", comprar);\r\n\n\n//# sourceURL=webpack://uc_a3_tc/./case1/machine.js?");

/***/ }),

/***/ "./images/chocolate.png":
/*!******************************!*\
  !*** ./images/chocolate.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./images/chocolate.png\");\n\n//# sourceURL=webpack://uc_a3_tc/./images/chocolate.png?");

/***/ }),

/***/ "./images/doce.png":
/*!*************************!*\
  !*** ./images/doce.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./images/doce.png\");\n\n//# sourceURL=webpack://uc_a3_tc/./images/doce.png?");

/***/ }),

/***/ "./images/moeda1.png":
/*!***************************!*\
  !*** ./images/moeda1.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./images/moeda1.png\");\n\n//# sourceURL=webpack://uc_a3_tc/./images/moeda1.png?");

/***/ }),

/***/ "./images/nota2.png":
/*!**************************!*\
  !*** ./images/nota2.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./images/nota2.png\");\n\n//# sourceURL=webpack://uc_a3_tc/./images/nota2.png?");

/***/ }),

/***/ "./images/nota5.png":
/*!**************************!*\
  !*** ./images/nota5.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./images/nota5.png\");\n\n//# sourceURL=webpack://uc_a3_tc/./images/nota5.png?");

/***/ }),

/***/ "./images/pirulito.png":
/*!*****************************!*\
  !*** ./images/pirulito.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./images/pirulito.png\");\n\n//# sourceURL=webpack://uc_a3_tc/./images/pirulito.png?");

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
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./case1/machine.js");
/******/ 	
/******/ })()
;