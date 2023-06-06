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

/***/ "./case2/script.js":
/*!*************************!*\
  !*** ./case2/script.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_automato_case2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/automato-case2.png */ \"./images/automato-case2.png\");\n\r\n\r\n// Variaveis globais\r\nvar valor = 2\r\nvar tl_elevador = gsap.timeline({ defaults: { duration: valor } })\r\nvar tl_automato = gsap.timeline({ defaults: { duration: 2 } })\r\nvar sequencia_andar = []\r\nvar andar = \"a1\"\r\nconst list = document.querySelectorAll('.list');\r\n\r\n// Função para a nav bar\r\nfunction ativandoLink() {\r\n    list.forEach((item) => item.classList.remove('active'));\r\n    this.classList.add('active');\r\n}\r\nlist.forEach((item) => item.addEventListener('click', ativandoLink));\r\n\r\n// Função para os botões de cada andar (fora do painel)\r\nfunction funcionandoBtn(elemento) {\r\n    var texto = ''\r\n    var tln = gsap.timeline({ defaults: { duration: 2 } })\r\n    if (andar != elemento.className.substr(-2) && !elemento.className.includes('active')) {\r\n        elemento.className += ' active'\r\n        texto = '.' + elemento.className.replace(/\\s/g, '.')\r\n        console.log(texto)\r\n        tln.to(texto, { backgroundColor: 'green' })\r\n        elemento.className = elemento.className.replace(' active', '')\r\n        texto = texto.replace('.active', '')\r\n        sequencia(elemento)\r\n        tl_elevador.to(texto, { backgroundColor: 'rgb(88, 88, 88)' }, \"-=1\")\r\n    }\r\n}\r\n\r\n// Movimentação do elevador\r\nfunction mover(dados) {\r\n    for (var dado = 0; dado <= dados.length; dado++) {\r\n        if (String(dados[dado]).includes('a1') && andar != dados[dado]) {\r\n            if (String(dados[dado]).includes('a1') && andar == 'a2') {\r\n                tl_automato.to('.bolinha', { x: -480, y: -80 })\r\n                    .to('.bolinha', { x: 0, y: 0 })\r\n            } else if (String(dados[dado]).includes('a1') && andar == 'a3') {\r\n                tl_automato.to('.bolinha', { x: -320, y: -80, duration: 3 })\r\n                    .to('.bolinha', { x: 0, y: 0, duration: 3 })\r\n            } else if (String(dados[dado]).includes('a1') && andar == 'a4') {\r\n                tl_automato.to('.bolinha', { x: -160, y: -80, duration: 4 })\r\n                    .to('.bolinha', { x: 0, y: 0, duration: 4 })\r\n            }\r\n            valor = Math.abs(parseInt(andar.substr(-1)) - parseInt(String(dados[dado]).substr(-1))) + 1\r\n            tl_elevador.to('.box', { y: 0, duration: valor, delay: .3 })\r\n                .to('.box', { backgroundColor: '#6fb936', duration: 1 })\r\n                .to('.box', { backgroundColor: 'red', duration: 1 })\r\n                .to('.box', { backgroundColor: 'gray', duration: .6 })\r\n            andar = dados[dado]\r\n        } else if (String(dados[dado]).includes('a2') && andar != dados[dado]) {\r\n            if (String(dados[dado]).includes('a2') && andar == 'a1') {\r\n                tl_automato.to('.bolinha', { x: 160, y: -80 })\r\n                    .to('.bolinha', { x: 0, y: -160 })\r\n            } else if (String(dados[dado]).includes('a2') && andar == 'a3') {\r\n                tl_automato.to('.bolinha', { x: -320, y: -240 })\r\n                    .to('.bolinha', { x: 0, y: -160 })\r\n            } else if (String(dados[dado]).includes('a2') && andar == 'a4') {\r\n                tl_automato.to('.bolinha', { x: -160, y: -240, duration: 3 })\r\n                    .to('.bolinha', { x: 0, y: -160, duration: 3 })\r\n            }\r\n            valor = Math.abs(parseInt(andar.substr(-1)) - parseInt(String(dados[dado]).substr(-1))) + 1\r\n            tl_elevador.to('.box', { y: -75, duration: valor, delay: .3 })\r\n                .to('.box', { backgroundColor: '#6fb936', duration: 1 })\r\n                .to('.box', { backgroundColor: 'red', duration: 1 })\r\n                .to('.box', { backgroundColor: 'gray', duration: .6 })\r\n            andar = dados[dado]\r\n        } else if (String(dados[dado]).includes('a3') && andar != dados[dado]) {\r\n            if (String(dados[dado]).includes('a3') && andar == 'a1') {\r\n                tl_automato.to('.bolinha', { x: 160, y: -240, duration: 3 })\r\n                    .to('.bolinha', { x: 0, y: -320, duration: 3 })\r\n            } else if (String(dados[dado]).includes('a3') && andar == 'a2') {\r\n                tl_automato.to('.bolinha', { x: 320, y: -240 })\r\n                    .to('.bolinha', { x: 0, y: -320 })\r\n            } else if (String(dados[dado]).includes('a3') && andar == 'a4') {\r\n                tl_automato.to('.bolinha', { x: -160, y: -400 })\r\n                    .to('.bolinha', { x: 0, y: -320 })\r\n            }\r\n            valor = Math.abs(parseInt(andar.substr(-1)) - parseInt(String(dados[dado]).substr(-1))) + 1\r\n            tl_elevador.to('.box', { y: -150, duration: valor, delay: .3 })\r\n                .to('.box', { backgroundColor: '#6fb936', duration: 1 })\r\n                .to('.box', { backgroundColor: 'red', duration: 1 })\r\n                .to('.box', { backgroundColor: 'gray', duration: .6 })\r\n            andar = dados[dado]\r\n        } else if (String(dados[dado]).includes('a4') && andar != dados[dado]) {\r\n            if (String(dados[dado]).includes('a4') && andar == 'a1') {\r\n                tl_automato.to('.bolinha', { x: 160, y: -400, duration: 4 })\r\n                    .to('.bolinha', { x: 0, y: -480, duration: 4 })\r\n            } else if (String(dados[dado]).includes('a4') && andar == 'a2') {\r\n                tl_automato.to('.bolinha', { x: 320, y: -400, duration: 3 })\r\n                    .to('.bolinha', { x: 0, y: -480, duration: 3 })\r\n            } else if (String(dados[dado]).includes('a4') && andar == 'a3') {\r\n                tl_automato.to('.bolinha', { x: 480, y: -400 })\r\n                    .to('.bolinha', { x: 0, y: -480 })\r\n            }\r\n            valor = Math.abs(parseInt(andar.substr(-1)) - parseInt(String(dados[dado]).substr(-1))) + 1\r\n            tl_elevador.to('.box', { y: -225, duration: valor, delay: .3 })\r\n                .to('.box', { backgroundColor: '#6fb936', duration: 1 })\r\n                .to('.box', { backgroundColor: 'red', duration: 1 })\r\n                .to('.box', { backgroundColor: 'gray', duration: .6 })\r\n            andar = dados[dado]\r\n        }\r\n        dados.shift()\r\n    }\r\n}\r\n\r\n// Gerendo sequencia para o elevador movimentar (usando tanto os botões do painel interno como o de cada andar)\r\nfunction sequencia(elemento) {\r\n    valor = elemento.className.substr(-2)\r\n    console.log(valor, \"|| após o mover\" )\r\n    sequencia_andar.push(String(valor))\r\n    mover(sequencia_andar)\r\n}\r\n\r\nvar btnsPainel = document.getElementsByClassName('btnp');\r\n\r\nbtnsPainel[0].addEventListener('click', () => sequencia(btnsPainel[0]), false)\r\nbtnsPainel[1].addEventListener('click', () => sequencia(btnsPainel[1]), false)\r\nbtnsPainel[2].addEventListener('click', () => sequencia(btnsPainel[2]), false)\r\nbtnsPainel[3].addEventListener('click', () => sequencia(btnsPainel[3]), false)\r\n\r\nvar btnsAndar = document.getElementsByClassName('btn');\r\n\r\nbtnsAndar[0].addEventListener('click', () => funcionandoBtn(btnsAndar[0]), false)\r\nbtnsAndar[1].addEventListener('click', () => funcionandoBtn(btnsAndar[1]), false)\r\nbtnsAndar[2].addEventListener('click', () => funcionandoBtn(btnsAndar[2]), false)\r\nbtnsAndar[3].addEventListener('click', () => funcionandoBtn(btnsAndar[3]), false)\r\n\n\n//# sourceURL=webpack://uc_a3_tc/./case2/script.js?");

/***/ }),

/***/ "./images/automato-case2.png":
/*!***********************************!*\
  !*** ./images/automato-case2.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./images/automato-case2.png\");\n\n//# sourceURL=webpack://uc_a3_tc/./images/automato-case2.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./case2/script.js");
/******/ 	
/******/ })()
;