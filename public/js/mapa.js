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

/***/ "./src/js/mapa.js":
/*!************************!*\
  !*** ./src/js/mapa.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function() {\r\n  const lat = 4.6771137;\r\n  const lng = -74.0490971;\r\n  const mapa = L.map('mapa').setView([lat, lng ], 12);\r\n\r\n  // Utilizando Provider y Geocoder\r\n  const geocodeService = L.esri.Geocoding.geocodeService();\r\n\r\n  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n    maxZoom: 18,  \r\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n  }).addTo(mapa);\r\n\r\n  //* Crear Marcador\r\n  let marker = new L.marker([lat, lng], {\r\n    color: 'green',\r\n    fillColor: '#2ADB3B',\r\n    draggable: true,\r\n    autoPan: true\r\n  }).addTo(mapa);\r\n  \r\n  \r\n  //! Evento de arrastrar el marcador\r\n  marker.on('moveend', function(e){\r\n    marker = e.target\r\n    const posicion = marker.getLatLng();\r\n    mapa.panTo(new L.LatLng(posicion.lat, posicion.lng));\r\n    \r\n    //? Obtener información del las calles\r\n    geocodeService.reverse().latlng(posicion, 13).run(function(error, resultado){\r\n      marker.bindPopup(resultado.address.LongLabel).openPopup();\r\n      \r\n      document.querySelector(\".calle\").textContent = resultado?.address?.Address ?? \"\";\r\n      document.querySelector(\"#calle\").value = resultado?.address?.Address ?? \"\";\r\n      let lat = document.getElementById(\"lat\").value = resultado?.latlng?.lat ?? \"\";\r\n      let lng = document.getElementById(\"lng\").value = resultado?.latlng?.lng ?? \"\";\r\n    });\r\n  })\r\n  \r\n  //! Función para mover el marcador dando un click\r\n  function onMapClick(e){\r\n    marker.setLatLng(e.latlng)\r\n    const posicion = marker.getLatLng();\r\n\r\n    geocodeService.reverse().latlng(posicion, 12).run(function(error, resultado){//? Esto regresa las propiedades de la ubicación del marcador \r\n      marker.bindPopup(resultado.address.LongLabel).openPopup(); //? Obtener Información de la ubicación\r\n\r\n      //* Para mostrar en la vista\r\n      document.querySelector(\".calle\").textContent = resultado?.address?.Address ?? \"\";\r\n\r\n      //* Para almacenar en la base de datos\r\n      document.querySelector(\"#calle\").value = resultado?.address?.Address ?? \"\";\r\n      let lat = document.getElementById(\"lat\").value = resultado?.latlng?.lat ?? \"\";\r\n      let lng = document.getElementById(\"lng\").value = resultado?.latlng?.lng ?? \"\";\r\n    });\r\n  }\r\n  mapa.on('click', onMapClick);  \r\n  \r\n  \r\n})()\n\n//# sourceURL=webpack://node_bootcamp/./src/js/mapa.js?");

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
/******/ 	__webpack_modules__["./src/js/mapa.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;