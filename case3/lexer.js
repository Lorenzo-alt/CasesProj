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

/***/ "./case3/lexer.js":
/*!************************!*\
  !*** ./case3/lexer.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.css */ \"./style/style.css\");\nconst moo = __webpack_require__(/*! moo */ \"./node_modules/moo/moo.js\");\r\n\r\n\r\n// Para a Nav Bar da pagina\r\nconst list = document.querySelectorAll('.list');\r\n\r\nfunction ativandoLink() {\r\n  list.forEach((item) => item.classList.remove('active'));\r\n  this.classList.add('active');\r\n}\r\nlist.forEach((item) => item.addEventListener('click', ativandoLink));\r\n\r\n// Tabela de simbolos [id | tipo]\r\nconst tblSimbolos = [\r\n  {id: 0, name: 'identificador_variavel'},\r\n  {id: 1, name: 'numero_int'},\r\n  {id: 2, name: 'numero_flutuante'},\r\n  {id: 3, name: 'char'},\r\n  {id: 4, name: 'string'},\r\n  {id: 5, name: 'opd_igualdade'},\r\n  {id: 6, name: 'opd_not_igualdade'},\r\n  {id: 7, name: 'op_maior'},\r\n  {id: 8, name: 'op_menor'},\r\n  {id: 9, name: 'opd_maior_igual'},\r\n  {id: 10, name: 'opd_menor_igual'},\r\n  {id: 11, name: 'op_atribuicao'},\r\n  {id: 12, name: 'op_soma'},\r\n  {id: 13, name: 'op_subtracao'},\r\n  {id: 14, name: 'op_multiplicacao'},\r\n  {id: 15, name: 'op_div'},\r\n  {id: 16, name: 'opd_soma_igualdade'},\r\n  {id: 17, name: 'opd_sub_igualdade'},\r\n  {id: 18, name: 'opd_incremento'},\r\n  {id: 19, name: 'opd_decremento'},\r\n  {id: 20, name: 'op_not'},\r\n  {id: 21, name: 'opd_and'},\r\n  {id: 22, name: 'opd_or'},\r\n  {id: 23, name: 'op_or_bb'},\r\n  {id: 24, name: 'op_and_bb_e'},\r\n  {id: 25, name: 'op_selecao_objt'},\r\n  {id: 76, name: 'op_lib_header'},\r\n  {id: 26, name: 'simb_ponto_virgula'},\r\n  {id: 27, name: 'simb_virgula'},\r\n  {id: 28, name: 'simb_abrir_parenteses'},\r\n  {id: 29, name: 'simb_fechar_parenteses'},\r\n  {id: 30, name: 'simb_abre_chave'},\r\n  {id: 31, name: 'simb_fecha_chave'},\r\n  {id: 32, name: 'kw_int'},\r\n  {id: 33, name: 'kw_float'},\r\n  {id: 34, name: 'kw_long'},\r\n  {id: 35, name: 'kw_long'},\r\n  {id: 36, name: 'kw_char'},\r\n  {id: 37, name: 'kw_if'},\r\n  {id: 38, name: 'kw_else'},\r\n  {id: 39, name: 'kw_while'},\r\n  {id: 40, name: 'kw_do'},\r\n  {id: 41, name: 'kw_for'},\r\n  {id: 42, name: 'kw_printf'},\r\n  {id: 43, name: 'kw_scanf'},\r\n  {id: 44, name: 'kw_void'},\r\n  {id: 45, name: 'kw_main'},\r\n  {id: 46, name: 'kw_return'},\r\n  {id: 97, name: 'comentario_l'},\r\n  {id: 98, name: 'comentario_ml'},\r\n  {id: 99, name: 'erro'},\r\n]\r\n\r\n//Função para verificar o ID para o TOKEN\r\nfunction verificarTbl(n){\r\n  for (let item of tblSimbolos){\r\n    if (item.name == n){\r\n      return item.id\r\n    }\r\n  }\r\n}\r\n\r\n// Definindo Lexemas\r\nlet lexer = moo.compile({\r\n  EB: /[ \\t]+/,\r\n  NL: { match: /\\n/, lineBreaks: true },\r\n  comentario_l: /\\/\\/.*$/,\r\n  comentario_ml: /\\/\\*[\\s\\S]*?\\*\\//,\r\n  numero_flutuante: { match: /[+-]?[0-9]+\\.[0-9]+/, value: (str) => Number(str) },\r\n  erro_float: /[+-]?\\d+\\.[\\w\\.]*/,\r\n  erro_identificador: /\\d+[a-zA-Z]+[\\w]*/,\r\n  numero_int: { match: /[+-]?\\d+/, value: (str) => Number(str) },\r\n  char: /'.?'/,\r\n  string: /\"(?:[^\\\\]|\\\\.)*?\"/,\r\n  simb_abrir_parenteses: '(',\r\n  simb_fechar_parenteses: ')',\r\n  simb_abre_chave: '{',\r\n  simb_fecha_chave: '}',\r\n  simb_abre_colchetes: '[',\r\n  simb_fecha_colchetes: ']',\r\n  identificador_variavel: {match: /(?![0-9_])\\w+/, type: moo.keywords({\r\n    kw_int: 'int',\r\n      kw_float: 'float',\r\n      kw_long: 'long',\r\n      kw_double: 'double',\r\n      kw_char: 'char',\r\n      kw_if: 'if',\r\n      kw_else: 'else',\r\n      kw_while: 'while',\r\n      kw_do: 'do',\r\n      kw_for: 'for',\r\n      kw_printf: 'printf',\r\n      kw_scanf: 'scanf',\r\n      kw_void: 'void',\r\n      kw_main: 'main',\r\n      kw_return: 'return',\r\n  })\r\n  },\r\n  opd_igualdade: /==/,\r\n  opd_not_igualdade: /!=/,\r\n  opd_maior_igual: />=/,\r\n  op_maior: '>',\r\n  opd_menor_igual: /<=/,\r\n  op_menor: '<',\r\n  opd_soma_igualdade: /\\+=/,\r\n  opd_sub_igualdade: /-=/,\r\n  opd_incremento: /\\+\\+/,\r\n  opd_decremento: /--/,\r\n  op_atribuicao: '=',\r\n  op_soma: '+',\r\n  op_subtracao: '-',\r\n  op_multiplicacao: /(?<!\\/)\\*(?!\\/)/,\r\n  op_div: /(?<!\\*)\\/(?!\\*)/,\r\n  simb_ponto_virgula: ';',\r\n  simb_virgula: ',',\r\n  op_not: '!',\r\n  opd_and: /&&/,\r\n  opd_or: /\\|\\|/,\r\n  op_or_bb: '|',\r\n  op_and_bb_e: '&',\r\n  op_selecao_objt: '.',\r\n  op_lib_header: '#',\r\n  erro_comentario_not_close: /\\/\\*[\\s\\S]*/,\r\n  erro_desconhecido: /./,\r\n})\r\n\r\n// Função para verificação de erros referente a comprimento de tokens X\r\nfunction medirToken(token){\r\n  return token.length\r\n}\r\n\r\n// ANALISADOR !\r\n// Evento do Analisador\r\nvar btnA = document.getElementsByClassName('btn-analisar')\r\nbtnA[0].addEventListener('click', function () {\r\n  const textAreaCod = document.querySelector('#textarea-cod')\r\n  const textAreaResp = document.querySelector('#textarea-resp')\r\n  const divDeTokens = document.querySelector('.area-tokens-lexer')\r\n  if (divDeTokens.hasChildNodes()) {\r\n    while (divDeTokens.firstChild) {\r\n      divDeTokens.removeChild(divDeTokens.lastChild);\r\n    }\r\n  }\r\n  textAreaResp.value = ''\r\n  lexer.reset(textAreaCod.value);\r\n  while (true) {\r\n    const token = lexer.next();\r\n    var btnToken = document.createElement('div');\r\n    if (!token) {\r\n      break;\r\n    }\r\n    if ((token.type == 'EB') || (token.type == 'NL') || token.type == 'comentario_l' || token.type == 'comentario_ml' ) {\r\n      continue\r\n    } else if (token.type != 'NL' ) {\r\n      var idToken = verificarTbl(token.type)\r\n      if(!String(token.type).includes('opd')){\r\n        if(String(token.type).includes('erro_')){\r\n          idToken = 99\r\n        }else if(String(token.type).includes('identificador_')){\r\n          if (medirToken(String(token.value)) > 31){\r\n            token.type = 'erro_identificador'\r\n            idToken = 99\r\n          }\r\n        }else if(String(token.type).includes('string')){\r\n          if(medirToken(String(token.value)) > 2047){\r\n            token.type = 'erro_string_length'\r\n            idToken = 99\r\n          }\r\n        }else if(String(token.type).includes('numero_in')){\r\n          if((Number(token.value) > 2147483647) || (Number(token.value) < -2147483648)){\r\n            token.type = 'erro_int_length'\r\n            idToken = 99\r\n          }\r\n        }else if(String(token.type).includes('numero_flutuante')){\r\n          if((Number(token.value) > Number(3.4e+4932)) || (Number(token.value) < Number(3.4e-4932))){\r\n            token.type = 'erro_float_length'\r\n            idToken = 99\r\n          }\r\n        }\r\n        btnToken.innerHTML = token.value\r\n      }else{\r\n        btnToken.innerHTML = token.value.replace(/\\s/g, '')\r\n      }\r\n      btnToken.className = `token ${token.type}`.replace(/_/g, ' ')\r\n      divDeTokens.appendChild(btnToken)\r\n      textAreaResp.value += `Token\\nID: ${idToken} | Tipo: ${token.type}\\nSimbolo / Valor: { ${token.value} }\\nCaluna: ${token.col} | Linha: ${token.line}\\n\\n`\r\n    }\r\n  }\r\n  if (divDeTokens.hasChildNodes()){\r\n    divDeTokens.style.display = \"block\"\r\n  }else{\r\n    divDeTokens.style.display = \"none\"\r\n  }\r\n});\n\n//# sourceURL=webpack://uc_a3_tc/./case3/lexer.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://uc_a3_tc/./style/style.css?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"./case3/lexer": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkuc_a3_tc"] = self["webpackChunkuc_a3_tc"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_moo_moo_js"], () => (__webpack_require__("./case3/lexer.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;