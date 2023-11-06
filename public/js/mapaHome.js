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

/***/ "./src/js/Mapahome.js":
/*!****************************!*\
  !*** ./src/js/Mapahome.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function() {\r\n  const lng = -74.0490971;\r\n  const lat = 4.6771137;\r\n  var mapa = L.map('mapaHome').setView([lat, lng ], 13);\r\n\r\n  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n  }).addTo(mapa);\r\n\r\n  try {\r\n    const obtenerPropiedades = async() => {\r\n      const url = 'api/propiedades'\r\n      const respuesta = await fetch(url)\r\n      if(!respuesta.ok){\r\n        console.error(error);\r\n      }\r\n      const data = await respuesta.json();\r\n    }\r\n\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n})();\n\n//# sourceURL=webpack://node_bootcamp/./src/js/Mapahome.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/Mapahome.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;