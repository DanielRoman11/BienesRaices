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

eval("__webpack_require__.r(__webpack_exports__);\n(function() {\r\n  const lng = -74.0490971;\r\n  const lat = 4.6771137;\r\n  var mapa = L.map('mapaHome').setView([lat, lng ], 13);\r\n\r\n  let markers = new L.FeatureGroup().addTo(mapa);\r\n\r\n  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n  }).addTo(mapa);\r\n\r\n  const filtros = {\r\n    categoria: '',\r\n    precio: ''\r\n  }\r\n\r\n  let propiedades = [];\r\n\r\n  const categoriasSelect = document.getElementById('categorias');\r\n  const preciosSelect = document.getElementById('precios');\r\n\r\n  const mostrarPropiedades = propiedades =>{\r\n    //? Limpiando los markers cada vez que se itera sobre un arreglo de propiedades\r\n    markers.clearLayers();\r\n\r\n    var markerIcon = new L.Icon({\r\n      iconUrl: 'https://cdn-icons-png.flaticon.com/512/9428/9428182.png',\r\n      // shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',\r\n      iconSize: [25, 40],\r\n      shadowSize: [41, 41],\r\n      iconAnchor: [12, 41],\r\n      popupAnchor: [1, -34],\r\n    });\r\n    propiedades.forEach(propiedad => {\r\n\r\n      const marker = new L.marker([propiedad?.lat, propiedad?.lng], \r\n        {\r\n          icon: markerIcon\r\n        })\r\n        .addTo(mapa)\r\n        .bindPopup(`<div class=\"text-xs\">\r\n        <img src=\"/uploads/${propiedad.imagen}\" class=\"max-h-32 block mx-auto\" alt=\"${propiedad.descripcion}\"/>\r\n        <br>\r\n        <strong>Dirección:</strong> ${propiedad.calle != \"\" ? propiedad.calle : \"Dirección no disponible\"} <br> \r\n        <strong>Precio:</strong> ${propiedad.precio.nombre} <br>\r\n        <strong>Tratante:</strong> ${propiedad.usuario.nombre} <br>\r\n        <strong>Última Actualización:</strong> ${new Date(propiedad.updatedAt).toLocaleDateString()} <br>\r\n        <a href=\"/propiedades/propiedad/${propiedad.id}\" class=\"border-2 border-[#706f2b] block p-2 text-center font-bold uppercase\">Ver Propiedad</a>\r\n        </div>`\r\n       )\r\n\r\n       markers.addLayer(marker);\r\n    });\r\n  }\r\n\r\n  categoriasSelect.addEventListener(\"change\", (e) => {\r\n    filtros.categoria = +e.target.value;\r\n    filtrarPropiedades();\r\n  });\r\n\r\n  preciosSelect.addEventListener(\"change\", (e) => {\r\n    filtros.precio = +e.target.value\r\n    filtrarPropiedades();\r\n  });\r\n\r\n  const obtenerPropiedades = async() => {\r\n    try {\r\n      const url = 'api/propiedades';\r\n      const respuesta = await fetch(url);\r\n      propiedades = await respuesta.json();\r\n\r\n      mostrarPropiedades(propiedades)\r\n\r\n    } catch (error) {\r\n      console.error(error);\r\n    }\r\n  }\r\n\r\n  const cantidad_propiedades = document.createElement(\"p\");\r\n  cantidad_propiedades.classList.add('pt-5')\r\n  const filtrarPropiedades = () => {\r\n    const resultado = propiedades\r\n      .filter(propiedad => filtros.categoria ? filtros.categoria === propiedad.categoriaID : propiedad)\r\n      .filter(propiedad => filtros.precio ? filtros.precio === propiedad.precioID : propiedad)\r\n    \r\n    mostrarPropiedades(resultado)\r\n\r\n    const filterbox = document.getElementById(\"filterbox\");\r\n    \r\n    if(cantidad_propiedades.innerText == \"\"){\r\n      filterbox.insertAdjacentElement('afterend', cantidad_propiedades)\r\n      cantidad_propiedades.innerText = `Propiedades mostradas: ${resultado.length}`;\r\n    } else {\r\n      cantidad_propiedades.innerText = `Propiedades mostradas: ${resultado.length}`;\r\n    }\r\n  }\r\n\r\n\r\n\r\n  obtenerPropiedades()\r\n  })();\r\n  \n\n//# sourceURL=webpack://node_bootcamp/./src/js/Mapahome.js?");

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