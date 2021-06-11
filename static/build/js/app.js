/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ */ \"./src/js/index.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n// JS\n // SCSS\n\n // SVG\n\nfunction requireAll(r) {\n  r.keys().forEach(r);\n}\n\nrequireAll(__webpack_require__(\"./src/img/svg sync recursive \\\\.svg$\")); // CSS//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2luZGV4LmpzP2RhODQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSlNcbmltcG9ydCAnLi9qcy8nOyAvLyBTQ1NTXG5cbmltcG9ydCAnLi9zY3NzL21haW4uc2Nzcyc7IC8vIFNWR1xuXG5mdW5jdGlvbiByZXF1aXJlQWxsKHIpIHtcbiAgci5rZXlzKCkuZm9yRWFjaChyKTtcbn1cblxucmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4vaW1nL3N2Zy8nLCB0cnVlLCAvXFwuc3ZnJC8pKTsgLy8gQ1NTIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/components/hello.js":
/*!************************************!*\
  !*** ./src/js/components/hello.js ***!
  \************************************/
/***/ (function() {

eval("console.log('hello from component');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVsbG8uanM/MzVkYSJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVoiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnaGVsbG8gZnJvbSBjb21wb25lbnQnKTsiXSwiZmlsZSI6Ii4vc3JjL2pzL2NvbXBvbmVudHMvaGVsbG8uanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/hello.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello */ \"./src/js/components/hello.js\");\n/* harmony import */ var _components_hello__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_hello__WEBPACK_IMPORTED_MODULE_0__);\n // import './components/formComponent';\n// import textFit from 'textfit';\n// Main js file\n\nvar isTouch = false;\n\nif ('ontouchstart' in document.documentElement) {\n  isTouch = true;\n}\n\ndocument.body.className += isTouch ? ' touch' : ' no-touch';\nvar mainWrap = document.querySelector('main');\n\nfunction toggle(selector, cls) {\n  var target = document.querySelectorAll(selector);\n\n  if (target) {\n    target.forEach(function (text) {\n      text.addEventListener('click', function () {\n        this.classList.toggle(cls);\n      });\n    });\n  }\n} //\n// toggle('.header__trigger','is-open');\n//example footer height detect\n// function _getAbsoluteHeight(el) {\n//     el = (typeof el === 'string') ? document.querySelector(el) : el;\n//     var styles = window.getComputedStyle(el);\n//     var margin = parseFloat(styles['marginTop']) +\n//                  parseFloat(styles['marginBottom']);\n//     return Math.ceil(el.offsetHeight + margin);\n// }\n// //footer height variable\n// function setVariableFooterHeight(){\n//     setTimeout(() => {\n//         const footerH = _getAbsoluteHeight('.footer');\n//         if(footerH !== 0){\n//             document.documentElement.style.setProperty('--footerHeight', footerH + 'px');\n//         }\n//     }, 200);\n// }\n// setVariableFooterHeight();\n// window.addEventListener(\"orientationchange\", function() {\n//     setVariableFooterHeight();\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2pzL2luZGV4LmpzP2QyZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVsbG8nOyAvLyBpbXBvcnQgJy4vY29tcG9uZW50cy9mb3JtQ29tcG9uZW50Jztcbi8vIGltcG9ydCB0ZXh0Rml0IGZyb20gJ3RleHRmaXQnO1xuLy8gTWFpbiBqcyBmaWxlXG5cbnZhciBpc1RvdWNoID0gZmFsc2U7XG5cbmlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgaXNUb3VjaCA9IHRydWU7XG59XG5cbmRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9IGlzVG91Y2ggPyAnIHRvdWNoJyA6ICcgbm8tdG91Y2gnO1xudmFyIG1haW5XcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG5mdW5jdGlvbiB0b2dnbGUoc2VsZWN0b3IsIGNscykge1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgaWYgKHRhcmdldCkge1xuICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoY2xzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59IC8vXG4vLyB0b2dnbGUoJy5oZWFkZXJfX3RyaWdnZXInLCdpcy1vcGVuJyk7XG4vL2V4YW1wbGUgZm9vdGVyIGhlaWdodCBkZXRlY3Rcbi8vIGZ1bmN0aW9uIF9nZXRBYnNvbHV0ZUhlaWdodChlbCkge1xuLy8gICAgIGVsID0gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcbi8vICAgICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuLy8gICAgIHZhciBtYXJnaW4gPSBwYXJzZUZsb2F0KHN0eWxlc1snbWFyZ2luVG9wJ10pICtcbi8vICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChzdHlsZXNbJ21hcmdpbkJvdHRvbSddKTtcbi8vICAgICByZXR1cm4gTWF0aC5jZWlsKGVsLm9mZnNldEhlaWdodCArIG1hcmdpbik7XG4vLyB9XG4vLyAvL2Zvb3RlciBoZWlnaHQgdmFyaWFibGVcbi8vIGZ1bmN0aW9uIHNldFZhcmlhYmxlRm9vdGVySGVpZ2h0KCl7XG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IGZvb3RlckggPSBfZ2V0QWJzb2x1dGVIZWlnaHQoJy5mb290ZXInKTtcbi8vICAgICAgICAgaWYoZm9vdGVySCAhPT0gMCl7XG4vLyAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9vdGVySGVpZ2h0JywgZm9vdGVySCArICdweCcpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSwgMjAwKTtcbi8vIH1cbi8vIHNldFZhcmlhYmxlRm9vdGVySGVpZ2h0KCk7XG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIHNldFZhcmlhYmxlRm9vdGVySGVpZ2h0KCk7XG4vLyB9KTsiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./src/scss/main.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./src/scss/main.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS51c2VbNF0hLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzQwZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./src/scss/main.scss\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!../../node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!./node_modules/postcss-loader/src/index.js??ruleSet[1].rules[5].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].use[4]!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL3Njc3MvbWFpbi5zY3NzPzJjOWQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNV0udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNV0udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS51c2VbNF0hLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ }),

/***/ "./src/img/svg/arrow.svg":
/*!*******************************!*\
  !*** ./src/img/svg/arrow.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"arrow\",\n  \"use\": \"arrow-usage\",\n  \"viewBox\": \"0 0 156.73 83.36\",\n  \"content\": \"<symbol xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 156.73 83.36\\\" id=\\\"arrow\\\">\\r\\n    <defs>\\r\\n        <style>\\r\\n            #arrow .cls-1 {\\r\\n                fill: none;\\r\\n                stroke-linecap: round;\\r\\n                stroke-linejoin: round;\\r\\n                stroke-width: 10px;\\r\\n            }\\r\\n        </style>\\r\\n    </defs>\\r\\n    <polyline class=\\\"cls-1\\\" points=\\\"151.73 5 78.36 78.36 5 5\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL3N2Zy9hcnJvdy5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2ltZy9zdmcvYXJyb3cuc3ZnP2Q1MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiYXJyb3dcIixcbiAgXCJ1c2VcIjogXCJhcnJvdy11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTU2LjczIDgzLjM2XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTU2LjczIDgzLjM2XFxcIiBpZD1cXFwiYXJyb3dcXFwiPlxcclxcbiAgICA8ZGVmcz5cXHJcXG4gICAgICAgIDxzdHlsZT5cXHJcXG4gICAgICAgICAgICAjYXJyb3cgLmNscy0xIHtcXHJcXG4gICAgICAgICAgICAgICAgZmlsbDogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDEwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgPC9zdHlsZT5cXHJcXG4gICAgPC9kZWZzPlxcclxcbiAgICA8cG9seWxpbmUgY2xhc3M9XFxcImNscy0xXFxcIiBwb2ludHM9XFxcIjE1MS43MyA1IDc4LjM2IDc4LjM2IDUgNVxcXCIgLz5cXHJcXG48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/img/svg/arrow.svg\n");

/***/ }),

/***/ "./src/img/svg/delivery.svg":
/*!**********************************!*\
  !*** ./src/img/svg/delivery.svg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"delivery\",\n  \"use\": \"delivery-usage\",\n  \"viewBox\": \"0 0 38 38\",\n  \"content\": \"<symbol viewBox=\\\"0 0 38 38\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"delivery\\\">\\r\\n<path d=\\\"M28.7001 22.5931C26.0589 22.5931 23.9102 24.7418 23.9102 27.3831C23.9102 30.0243 26.0589 32.173 28.7001 32.173C31.3418 32.173 33.49 30.0243 33.49 27.3831C33.49 24.7418 31.3413 22.5931 28.7001 22.5931ZM28.7001 29.778C27.3793 29.778 26.3051 28.7039 26.3051 27.3831C26.3051 26.0623 27.3793 24.9881 28.7001 24.9881C30.0209 24.9881 31.0951 26.0623 31.0951 27.3831C31.0951 28.7039 30.0209 29.778 28.7001 29.778Z\\\" fill=\\\"#520055\\\" />\\r\\n<path d=\\\"M12.3339 22.5931C9.69265 22.5931 7.54395 24.7418 7.54395 27.3831C7.54395 30.0243 9.69265 32.173 12.3339 32.173C14.9751 32.173 17.1238 30.0243 17.1238 27.3831C17.1238 24.7418 14.9751 22.5931 12.3339 22.5931ZM12.3339 29.778C11.0131 29.778 9.93891 28.7039 9.93891 27.3831C9.93891 26.0623 11.0131 24.9881 12.3339 24.9881C13.6543 24.9881 14.7288 26.0623 14.7288 27.3831C14.7288 28.7039 13.6547 29.778 12.3339 29.778Z\\\" fill=\\\"#520055\\\" />\\r\\n<path d=\\\"M31.9252 8.88294C31.7217 8.4786 31.3077 8.22351 30.8551 8.22351H24.5483V10.6185H30.1166L33.3773 17.104L35.5176 16.0278L31.9252 8.88294Z\\\" fill=\\\"#520055\\\" />\\r\\n<path d=\\\"M25.1078 26.2257H16.0469V28.6207H25.1078V26.2257Z\\\" fill=\\\"#520055\\\" />\\r\\n<path d=\\\"M8.74098 26.2257H4.58978C3.92834 26.2257 3.39233 26.7618 3.39233 27.4232C3.39233 28.0846 3.92842 28.6206 4.58978 28.6206H8.74106C9.40249 28.6206 9.9385 28.0845 9.9385 27.4232C9.9385 26.7617 9.40242 26.2257 8.74098 26.2257Z\\\" fill=\\\"#520055\\\" />\\r\\n<path d=\\\"M37.748 18.9051L35.3926 15.8714C35.1663 15.5793 34.817 15.4084 34.4469 15.4084H25.7452V7.02606C25.7452 6.36462 25.2092 5.82861 24.5478 5.82861H4.58978C3.92834 5.82861 3.39233 6.36469 3.39233 7.02606C3.39233 7.68742 3.92842 8.2235 4.58978 8.2235H23.3503V16.6058C23.3503 17.2673 23.8864 17.8033 24.5477 17.8033H33.8605L35.6045 20.0497V26.2256H32.2914C31.63 26.2256 31.094 26.7616 31.094 27.423C31.094 28.0844 31.63 28.6204 32.2914 28.6204H36.8019C37.4633 28.6204 37.9993 28.0844 37.9994 27.423V19.6395C37.9994 19.3737 37.9108 19.115 37.748 18.9051Z\\\" fill=\\\"#520055\\\" />\\r\\n<path d=\\\"M8.66194 20.1586H3.1535C2.49206 20.1586 1.95605 20.6947 1.95605 21.356C1.95605 22.0175 2.49214 22.5535 3.1535 22.5535H8.66187C9.3233 22.5535 9.85931 22.0174 9.85931 21.356C9.85939 20.6947 9.3233 20.1586 8.66194 20.1586Z\\\" fill=\\\"#520055\\\" />\\r\\n<path d=\\\"M11.416 15.4482H1.19745C0.536082 15.4482 0 15.9843 0 16.6458C0 17.3072 0.536082 17.8432 1.19745 17.8432H11.416C12.0774 17.8432 12.6134 17.3071 12.6134 16.6458C12.6134 15.9844 12.0774 15.4482 11.416 15.4482Z\\\" fill=\\\"#520055\\\" />\\r\\n<path d=\\\"M13.372 10.7384H3.1535C2.49206 10.7384 1.95605 11.2745 1.95605 11.9358C1.95605 12.5973 2.49214 13.1333 3.1535 13.1333H13.372C14.0334 13.1333 14.5695 12.5972 14.5695 11.9358C14.5695 11.2745 14.0334 10.7384 13.372 10.7384Z\\\" fill=\\\"#520055\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL3N2Zy9kZWxpdmVyeS5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2ltZy9zdmcvZGVsaXZlcnkuc3ZnP2Y2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiZGVsaXZlcnlcIixcbiAgXCJ1c2VcIjogXCJkZWxpdmVyeS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMzggMzhcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMzggMzhcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcImRlbGl2ZXJ5XFxcIj5cXHJcXG48cGF0aCBkPVxcXCJNMjguNzAwMSAyMi41OTMxQzI2LjA1ODkgMjIuNTkzMSAyMy45MTAyIDI0Ljc0MTggMjMuOTEwMiAyNy4zODMxQzIzLjkxMDIgMzAuMDI0MyAyNi4wNTg5IDMyLjE3MyAyOC43MDAxIDMyLjE3M0MzMS4zNDE4IDMyLjE3MyAzMy40OSAzMC4wMjQzIDMzLjQ5IDI3LjM4MzFDMzMuNDkgMjQuNzQxOCAzMS4zNDEzIDIyLjU5MzEgMjguNzAwMSAyMi41OTMxWk0yOC43MDAxIDI5Ljc3OEMyNy4zNzkzIDI5Ljc3OCAyNi4zMDUxIDI4LjcwMzkgMjYuMzA1MSAyNy4zODMxQzI2LjMwNTEgMjYuMDYyMyAyNy4zNzkzIDI0Ljk4ODEgMjguNzAwMSAyNC45ODgxQzMwLjAyMDkgMjQuOTg4MSAzMS4wOTUxIDI2LjA2MjMgMzEuMDk1MSAyNy4zODMxQzMxLjA5NTEgMjguNzAzOSAzMC4wMjA5IDI5Ljc3OCAyOC43MDAxIDI5Ljc3OFpcXFwiIGZpbGw9XFxcIiM1MjAwNTVcXFwiIC8+XFxyXFxuPHBhdGggZD1cXFwiTTEyLjMzMzkgMjIuNTkzMUM5LjY5MjY1IDIyLjU5MzEgNy41NDM5NSAyNC43NDE4IDcuNTQzOTUgMjcuMzgzMUM3LjU0Mzk1IDMwLjAyNDMgOS42OTI2NSAzMi4xNzMgMTIuMzMzOSAzMi4xNzNDMTQuOTc1MSAzMi4xNzMgMTcuMTIzOCAzMC4wMjQzIDE3LjEyMzggMjcuMzgzMUMxNy4xMjM4IDI0Ljc0MTggMTQuOTc1MSAyMi41OTMxIDEyLjMzMzkgMjIuNTkzMVpNMTIuMzMzOSAyOS43NzhDMTEuMDEzMSAyOS43NzggOS45Mzg5MSAyOC43MDM5IDkuOTM4OTEgMjcuMzgzMUM5LjkzODkxIDI2LjA2MjMgMTEuMDEzMSAyNC45ODgxIDEyLjMzMzkgMjQuOTg4MUMxMy42NTQzIDI0Ljk4ODEgMTQuNzI4OCAyNi4wNjIzIDE0LjcyODggMjcuMzgzMUMxNC43Mjg4IDI4LjcwMzkgMTMuNjU0NyAyOS43NzggMTIuMzMzOSAyOS43NzhaXFxcIiBmaWxsPVxcXCIjNTIwMDU1XFxcIiAvPlxcclxcbjxwYXRoIGQ9XFxcIk0zMS45MjUyIDguODgyOTRDMzEuNzIxNyA4LjQ3ODYgMzEuMzA3NyA4LjIyMzUxIDMwLjg1NTEgOC4yMjM1MUgyNC41NDgzVjEwLjYxODVIMzAuMTE2NkwzMy4zNzczIDE3LjEwNEwzNS41MTc2IDE2LjAyNzhMMzEuOTI1MiA4Ljg4Mjk0WlxcXCIgZmlsbD1cXFwiIzUyMDA1NVxcXCIgLz5cXHJcXG48cGF0aCBkPVxcXCJNMjUuMTA3OCAyNi4yMjU3SDE2LjA0NjlWMjguNjIwN0gyNS4xMDc4VjI2LjIyNTdaXFxcIiBmaWxsPVxcXCIjNTIwMDU1XFxcIiAvPlxcclxcbjxwYXRoIGQ9XFxcIk04Ljc0MDk4IDI2LjIyNTdINC41ODk3OEMzLjkyODM0IDI2LjIyNTcgMy4zOTIzMyAyNi43NjE4IDMuMzkyMzMgMjcuNDIzMkMzLjM5MjMzIDI4LjA4NDYgMy45Mjg0MiAyOC42MjA2IDQuNTg5NzggMjguNjIwNkg4Ljc0MTA2QzkuNDAyNDkgMjguNjIwNiA5LjkzODUgMjguMDg0NSA5LjkzODUgMjcuNDIzMkM5LjkzODUgMjYuNzYxNyA5LjQwMjQyIDI2LjIyNTcgOC43NDA5OCAyNi4yMjU3WlxcXCIgZmlsbD1cXFwiIzUyMDA1NVxcXCIgLz5cXHJcXG48cGF0aCBkPVxcXCJNMzcuNzQ4IDE4LjkwNTFMMzUuMzkyNiAxNS44NzE0QzM1LjE2NjMgMTUuNTc5MyAzNC44MTcgMTUuNDA4NCAzNC40NDY5IDE1LjQwODRIMjUuNzQ1MlY3LjAyNjA2QzI1Ljc0NTIgNi4zNjQ2MiAyNS4yMDkyIDUuODI4NjEgMjQuNTQ3OCA1LjgyODYxSDQuNTg5NzhDMy45MjgzNCA1LjgyODYxIDMuMzkyMzMgNi4zNjQ2OSAzLjM5MjMzIDcuMDI2MDZDMy4zOTIzMyA3LjY4NzQyIDMuOTI4NDIgOC4yMjM1IDQuNTg5NzggOC4yMjM1SDIzLjM1MDNWMTYuNjA1OEMyMy4zNTAzIDE3LjI2NzMgMjMuODg2NCAxNy44MDMzIDI0LjU0NzcgMTcuODAzM0gzMy44NjA1TDM1LjYwNDUgMjAuMDQ5N1YyNi4yMjU2SDMyLjI5MTRDMzEuNjMgMjYuMjI1NiAzMS4wOTQgMjYuNzYxNiAzMS4wOTQgMjcuNDIzQzMxLjA5NCAyOC4wODQ0IDMxLjYzIDI4LjYyMDQgMzIuMjkxNCAyOC42MjA0SDM2LjgwMTlDMzcuNDYzMyAyOC42MjA0IDM3Ljk5OTMgMjguMDg0NCAzNy45OTk0IDI3LjQyM1YxOS42Mzk1QzM3Ljk5OTQgMTkuMzczNyAzNy45MTA4IDE5LjExNSAzNy43NDggMTguOTA1MVpcXFwiIGZpbGw9XFxcIiM1MjAwNTVcXFwiIC8+XFxyXFxuPHBhdGggZD1cXFwiTTguNjYxOTQgMjAuMTU4NkgzLjE1MzVDMi40OTIwNiAyMC4xNTg2IDEuOTU2MDUgMjAuNjk0NyAxLjk1NjA1IDIxLjM1NkMxLjk1NjA1IDIyLjAxNzUgMi40OTIxNCAyMi41NTM1IDMuMTUzNSAyMi41NTM1SDguNjYxODdDOS4zMjMzIDIyLjU1MzUgOS44NTkzMSAyMi4wMTc0IDkuODU5MzEgMjEuMzU2QzkuODU5MzkgMjAuNjk0NyA5LjMyMzMgMjAuMTU4NiA4LjY2MTk0IDIwLjE1ODZaXFxcIiBmaWxsPVxcXCIjNTIwMDU1XFxcIiAvPlxcclxcbjxwYXRoIGQ9XFxcIk0xMS40MTYgMTUuNDQ4MkgxLjE5NzQ1QzAuNTM2MDgyIDE1LjQ0ODIgMCAxNS45ODQzIDAgMTYuNjQ1OEMwIDE3LjMwNzIgMC41MzYwODIgMTcuODQzMiAxLjE5NzQ1IDE3Ljg0MzJIMTEuNDE2QzEyLjA3NzQgMTcuODQzMiAxMi42MTM0IDE3LjMwNzEgMTIuNjEzNCAxNi42NDU4QzEyLjYxMzQgMTUuOTg0NCAxMi4wNzc0IDE1LjQ0ODIgMTEuNDE2IDE1LjQ0ODJaXFxcIiBmaWxsPVxcXCIjNTIwMDU1XFxcIiAvPlxcclxcbjxwYXRoIGQ9XFxcIk0xMy4zNzIgMTAuNzM4NEgzLjE1MzVDMi40OTIwNiAxMC43Mzg0IDEuOTU2MDUgMTEuMjc0NSAxLjk1NjA1IDExLjkzNThDMS45NTYwNSAxMi41OTczIDIuNDkyMTQgMTMuMTMzMyAzLjE1MzUgMTMuMTMzM0gxMy4zNzJDMTQuMDMzNCAxMy4xMzMzIDE0LjU2OTUgMTIuNTk3MiAxNC41Njk1IDExLjkzNThDMTQuNTY5NSAxMS4yNzQ1IDE0LjAzMzQgMTAuNzM4NCAxMy4zNzIgMTAuNzM4NFpcXFwiIGZpbGw9XFxcIiM1MjAwNTVcXFwiIC8+XFxyXFxuPC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/svg/delivery.svg\n");

/***/ }),

/***/ "./src/img/svg/gift.svg":
/*!******************************!*\
  !*** ./src/img/svg/gift.svg ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"gift\",\n  \"use\": \"gift-usage\",\n  \"viewBox\": \"0 0 24 24\",\n  \"content\": \"<symbol viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"gift\\\">\\r\\n<path d=\\\"M21.3587 6.40072H20.3567H18.7971C19.7098 5.81903 20.3092 4.86262 20.3092 3.7812C20.3092 2.01158 18.71 0.572021 16.7447 0.572021C15.0769 0.572021 13.1021 3.47186 11.9999 5.34609C10.8976 3.47218 8.92215 0.572021 7.25475 0.572021C5.28937 0.572021 3.69017 2.01189 3.69017 3.7812C3.69017 4.86262 4.28924 5.81903 5.20231 6.40072H3.79609H2.64132C1.50007 6.40072 0.571289 7.34277 0.571289 8.50041V11.8295C0.571289 12.6542 1.04338 13.367 1.72669 13.7101V21.3288C1.72669 22.4871 2.65515 23.4292 3.79609 23.4292H20.3564C21.4979 23.4292 22.4264 22.4871 22.4264 21.3288V13.6256C23.0258 13.2576 23.4284 12.5917 23.4284 11.8301V8.50073C23.4287 7.34309 22.5003 6.40072 21.3587 6.40072ZM2.64132 12.0161C2.5398 12.0161 2.45714 11.9325 2.45714 11.8298V8.50041C2.45714 8.39772 2.5398 8.31417 2.64132 8.31417H11.0566V12.0157L2.64132 12.0161ZM12.9428 8.31417H21.3587C21.4602 8.31417 21.5429 8.39772 21.5429 8.50041V11.8295C21.5429 11.9322 21.4602 12.0157 21.3587 12.0157H12.9428V8.31417ZM16.7443 2.48547C17.6543 2.48547 18.4231 3.07896 18.4231 3.7812C18.4231 4.48344 17.6543 5.07693 16.7443 5.07693H14.4153C15.3692 3.67915 16.3493 2.56839 16.7443 2.48547ZM7.22866 2.48388C7.64354 2.56807 8.62859 3.67947 9.58377 5.07756H7.25475C6.34482 5.07756 5.57602 4.48407 5.57602 3.78184C5.57602 3.0796 6.34482 2.48547 7.22866 2.48388ZM3.61254 21.3295V13.9295H11.0569V21.516H3.79609C3.69489 21.5163 3.61254 21.4325 3.61254 21.3295ZM20.3567 21.5163H12.9428V13.9295H20.5409V21.3292C20.5409 21.4325 20.4582 21.5163 20.3567 21.5163Z\\\" fill=\\\"#520055\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL3N2Zy9naWZ0LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL25hbWUvLi9zcmMvaW1nL3N2Zy9naWZ0LnN2Zz9mMjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImdpZnRcIixcbiAgXCJ1c2VcIjogXCJnaWZ0LXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAyNCAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwiZ2lmdFxcXCI+XFxyXFxuPHBhdGggZD1cXFwiTTIxLjM1ODcgNi40MDA3MkgyMC4zNTY3SDE4Ljc5NzFDMTkuNzA5OCA1LjgxOTAzIDIwLjMwOTIgNC44NjI2MiAyMC4zMDkyIDMuNzgxMkMyMC4zMDkyIDIuMDExNTggMTguNzEgMC41NzIwMjEgMTYuNzQ0NyAwLjU3MjAyMUMxNS4wNzY5IDAuNTcyMDIxIDEzLjEwMjEgMy40NzE4NiAxMS45OTk5IDUuMzQ2MDlDMTAuODk3NiAzLjQ3MjE4IDguOTIyMTUgMC41NzIwMjEgNy4yNTQ3NSAwLjU3MjAyMUM1LjI4OTM3IDAuNTcyMDIxIDMuNjkwMTcgMi4wMTE4OSAzLjY5MDE3IDMuNzgxMkMzLjY5MDE3IDQuODYyNjIgNC4yODkyNCA1LjgxOTAzIDUuMjAyMzEgNi40MDA3MkgzLjc5NjA5SDIuNjQxMzJDMS41MDAwNyA2LjQwMDcyIDAuNTcxMjg5IDcuMzQyNzcgMC41NzEyODkgOC41MDA0MVYxMS44Mjk1QzAuNTcxMjg5IDEyLjY1NDIgMS4wNDMzOCAxMy4zNjcgMS43MjY2OSAxMy43MTAxVjIxLjMyODhDMS43MjY2OSAyMi40ODcxIDIuNjU1MTUgMjMuNDI5MiAzLjc5NjA5IDIzLjQyOTJIMjAuMzU2NEMyMS40OTc5IDIzLjQyOTIgMjIuNDI2NCAyMi40ODcxIDIyLjQyNjQgMjEuMzI4OFYxMy42MjU2QzIzLjAyNTggMTMuMjU3NiAyMy40Mjg0IDEyLjU5MTcgMjMuNDI4NCAxMS44MzAxVjguNTAwNzNDMjMuNDI4NyA3LjM0MzA5IDIyLjUwMDMgNi40MDA3MiAyMS4zNTg3IDYuNDAwNzJaTTIuNjQxMzIgMTIuMDE2MUMyLjUzOTggMTIuMDE2MSAyLjQ1NzE0IDExLjkzMjUgMi40NTcxNCAxMS44Mjk4VjguNTAwNDFDMi40NTcxNCA4LjM5NzcyIDIuNTM5OCA4LjMxNDE3IDIuNjQxMzIgOC4zMTQxN0gxMS4wNTY2VjEyLjAxNTdMMi42NDEzMiAxMi4wMTYxWk0xMi45NDI4IDguMzE0MTdIMjEuMzU4N0MyMS40NjAyIDguMzE0MTcgMjEuNTQyOSA4LjM5NzcyIDIxLjU0MjkgOC41MDA0MVYxMS44Mjk1QzIxLjU0MjkgMTEuOTMyMiAyMS40NjAyIDEyLjAxNTcgMjEuMzU4NyAxMi4wMTU3SDEyLjk0MjhWOC4zMTQxN1pNMTYuNzQ0MyAyLjQ4NTQ3QzE3LjY1NDMgMi40ODU0NyAxOC40MjMxIDMuMDc4OTYgMTguNDIzMSAzLjc4MTJDMTguNDIzMSA0LjQ4MzQ0IDE3LjY1NDMgNS4wNzY5MyAxNi43NDQzIDUuMDc2OTNIMTQuNDE1M0MxNS4zNjkyIDMuNjc5MTUgMTYuMzQ5MyAyLjU2ODM5IDE2Ljc0NDMgMi40ODU0N1pNNy4yMjg2NiAyLjQ4Mzg4QzcuNjQzNTQgMi41NjgwNyA4LjYyODU5IDMuNjc5NDcgOS41ODM3NyA1LjA3NzU2SDcuMjU0NzVDNi4zNDQ4MiA1LjA3NzU2IDUuNTc2MDIgNC40ODQwNyA1LjU3NjAyIDMuNzgxODRDNS41NzYwMiAzLjA3OTYgNi4zNDQ4MiAyLjQ4NTQ3IDcuMjI4NjYgMi40ODM4OFpNMy42MTI1NCAyMS4zMjk1VjEzLjkyOTVIMTEuMDU2OVYyMS41MTZIMy43OTYwOUMzLjY5NDg5IDIxLjUxNjMgMy42MTI1NCAyMS40MzI1IDMuNjEyNTQgMjEuMzI5NVpNMjAuMzU2NyAyMS41MTYzSDEyLjk0MjhWMTMuOTI5NUgyMC41NDA5VjIxLjMyOTJDMjAuNTQwOSAyMS40MzI1IDIwLjQ1ODIgMjEuNTE2MyAyMC4zNTY3IDIxLjUxNjNaXFxcIiBmaWxsPVxcXCIjNTIwMDU1XFxcIiAvPlxcclxcbjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/img/svg/gift.svg\n");

/***/ }),

/***/ "./src/img/svg/graph.svg":
/*!*******************************!*\
  !*** ./src/img/svg/graph.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"graph\",\n  \"use\": \"graph-usage\",\n  \"viewBox\": \"0 0 18 23\",\n  \"content\": \"<symbol viewBox=\\\"0 0 18 23\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"graph\\\">\\r\\n<path d=\\\"M2.76924 6.23064H1.38462C0.619618 6.23064 0 6.85094 0 7.61526V20.7691C0 21.5341 0.619618 22.1537 1.38462 22.1537H2.76924C3.53424 22.1537 4.15385 21.5341 4.15385 20.7691V7.61526C4.15385 6.85026 3.53424 6.23064 2.76924 6.23064ZM9.6923 -0.00012207H8.30768C7.54271 -0.00012207 6.92309 0.619496 6.92309 1.3845V20.7691C6.92309 21.5341 7.54271 22.1537 8.30771 22.1537H9.69232C10.4574 22.1537 11.0769 21.5341 11.0769 20.7691V1.3845C11.0769 0.619496 10.4573 -0.00012207 9.6923 -0.00012207ZM16.6154 11.0768H15.2308C14.4658 11.0768 13.8462 11.6964 13.8462 12.4614V20.7691C13.8462 21.5341 14.4658 22.1537 15.2308 22.1537H16.6154C17.3804 22.1537 18 21.5341 18 20.7691V12.4614C18 11.6964 17.3804 11.0768 16.6154 11.0768Z\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL3N2Zy9ncmFwaC5zdmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uYW1lLy4vc3JjL2ltZy9zdmcvZ3JhcGguc3ZnPzlmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL2Jyb3dzZXItc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9icm93c2VyLXNwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiZ3JhcGhcIixcbiAgXCJ1c2VcIjogXCJncmFwaC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTggMjNcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCB2aWV3Qm94PVxcXCIwIDAgMTggMjNcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcImdyYXBoXFxcIj5cXHJcXG48cGF0aCBkPVxcXCJNMi43NjkyNCA2LjIzMDY0SDEuMzg0NjJDMC42MTk2MTggNi4yMzA2NCAwIDYuODUwOTQgMCA3LjYxNTI2VjIwLjc2OTFDMCAyMS41MzQxIDAuNjE5NjE4IDIyLjE1MzcgMS4zODQ2MiAyMi4xNTM3SDIuNzY5MjRDMy41MzQyNCAyMi4xNTM3IDQuMTUzODUgMjEuNTM0MSA0LjE1Mzg1IDIwLjc2OTFWNy42MTUyNkM0LjE1Mzg1IDYuODUwMjYgMy41MzQyNCA2LjIzMDY0IDIuNzY5MjQgNi4yMzA2NFpNOS42OTIzIC0wLjAwMDEyMjA3SDguMzA3NjhDNy41NDI3MSAtMC4wMDAxMjIwNyA2LjkyMzA5IDAuNjE5NDk2IDYuOTIzMDkgMS4zODQ1VjIwLjc2OTFDNi45MjMwOSAyMS41MzQxIDcuNTQyNzEgMjIuMTUzNyA4LjMwNzcxIDIyLjE1MzdIOS42OTIzMkMxMC40NTc0IDIyLjE1MzcgMTEuMDc2OSAyMS41MzQxIDExLjA3NjkgMjAuNzY5MVYxLjM4NDVDMTEuMDc2OSAwLjYxOTQ5NiAxMC40NTczIC0wLjAwMDEyMjA3IDkuNjkyMyAtMC4wMDAxMjIwN1pNMTYuNjE1NCAxMS4wNzY4SDE1LjIzMDhDMTQuNDY1OCAxMS4wNzY4IDEzLjg0NjIgMTEuNjk2NCAxMy44NDYyIDEyLjQ2MTRWMjAuNzY5MUMxMy44NDYyIDIxLjUzNDEgMTQuNDY1OCAyMi4xNTM3IDE1LjIzMDggMjIuMTUzN0gxNi42MTU0QzE3LjM4MDQgMjIuMTUzNyAxOCAyMS41MzQxIDE4IDIwLjc2OTFWMTIuNDYxNEMxOCAxMS42OTY0IDE3LjM4MDQgMTEuMDc2OCAxNi42MTU0IDExLjA3NjhaXFxcIiAvPlxcclxcbjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/img/svg/graph.svg\n");

/***/ }),

/***/ "./src/img/svg/guarantee.svg":
/*!***********************************!*\
  !*** ./src/img/svg/guarantee.svg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"guarantee\",\n  \"use\": \"guarantee-usage\",\n  \"viewBox\": \"0 0 32 32\",\n  \"content\": \"<symbol viewBox=\\\"0 0 32 32\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"guarantee\\\">\\r\\n<g clip-path=\\\"url(#guarantee_clip0)\\\">\\r\\n<path d=\\\"M28.7293 5.18247L16.4793 0.0964092C16.1724 -0.0309658 15.8275 -0.0310283 15.5207 0.0964092L3.27069 5.18247C2.80413 5.37622 2.5 5.83172 2.5 6.33691V12.5197C2.5 21.033 7.64556 28.691 15.5276 31.9082C15.8304 32.0317 16.1696 32.0317 16.4724 31.9082C24.3543 28.691 29.5 21.0331 29.5 12.5197V6.33691C29.5 5.83172 29.1959 5.37622 28.7293 5.18247ZM27 12.5197C27 19.7569 22.75 26.4192 16 29.3931C9.43038 26.4987 5 19.953 5 12.5197V7.17141L16 2.60428L27 7.17141V12.5197ZM14.6184 16.7331L19.9911 11.3604C20.4792 10.8723 21.2707 10.8722 21.7589 11.3604C22.2471 11.8486 22.247 12.64 21.7588 13.1282L15.5022 19.3847C15.014 19.873 14.2226 19.8728 13.7345 19.3847L10.2411 15.8913C9.75294 15.4032 9.75294 14.6117 10.2411 14.1236C10.7293 13.6355 11.5208 13.6354 12.0089 14.1236L14.6184 16.7331Z\\\" fill=\\\"#520055\\\" />\\r\\n</g>\\r\\n<defs>\\r\\n<clipPath id=\\\"guarantee_clip0\\\">\\r\\n<rect width=\\\"32\\\" height=\\\"32\\\" fill=\\\"white\\\" transform=\\\"translate(0 0.000854492)\\\" />\\r\\n</clipPath>\\r\\n</defs>\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL3N2Zy9ndWFyYW50ZWUuc3ZnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmFtZS8uL3NyYy9pbWcvc3ZnL2d1YXJhbnRlZS5zdmc/ODI2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvYnJvd3Nlci1zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL2Jyb3dzZXItc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJndWFyYW50ZWVcIixcbiAgXCJ1c2VcIjogXCJndWFyYW50ZWUtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDMyIDMyXCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgdmlld0JveD1cXFwiMCAwIDMyIDMyXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGlkPVxcXCJndWFyYW50ZWVcXFwiPlxcclxcbjxnIGNsaXAtcGF0aD1cXFwidXJsKCNndWFyYW50ZWVfY2xpcDApXFxcIj5cXHJcXG48cGF0aCBkPVxcXCJNMjguNzI5MyA1LjE4MjQ3TDE2LjQ3OTMgMC4wOTY0MDkyQzE2LjE3MjQgLTAuMDMwOTY1OCAxNS44Mjc1IC0wLjAzMTAyODMgMTUuNTIwNyAwLjA5NjQwOTJMMy4yNzA2OSA1LjE4MjQ3QzIuODA0MTMgNS4zNzYyMiAyLjUgNS44MzE3MiAyLjUgNi4zMzY5MVYxMi41MTk3QzIuNSAyMS4wMzMgNy42NDU1NiAyOC42OTEgMTUuNTI3NiAzMS45MDgyQzE1LjgzMDQgMzIuMDMxNyAxNi4xNjk2IDMyLjAzMTcgMTYuNDcyNCAzMS45MDgyQzI0LjM1NDMgMjguNjkxIDI5LjUgMjEuMDMzMSAyOS41IDEyLjUxOTdWNi4zMzY5MUMyOS41IDUuODMxNzIgMjkuMTk1OSA1LjM3NjIyIDI4LjcyOTMgNS4xODI0N1pNMjcgMTIuNTE5N0MyNyAxOS43NTY5IDIyLjc1IDI2LjQxOTIgMTYgMjkuMzkzMUM5LjQzMDM4IDI2LjQ5ODcgNSAxOS45NTMgNSAxMi41MTk3VjcuMTcxNDFMMTYgMi42MDQyOEwyNyA3LjE3MTQxVjEyLjUxOTdaTTE0LjYxODQgMTYuNzMzMUwxOS45OTExIDExLjM2MDRDMjAuNDc5MiAxMC44NzIzIDIxLjI3MDcgMTAuODcyMiAyMS43NTg5IDExLjM2MDRDMjIuMjQ3MSAxMS44NDg2IDIyLjI0NyAxMi42NCAyMS43NTg4IDEzLjEyODJMMTUuNTAyMiAxOS4zODQ3QzE1LjAxNCAxOS44NzMgMTQuMjIyNiAxOS44NzI4IDEzLjczNDUgMTkuMzg0N0wxMC4yNDExIDE1Ljg5MTNDOS43NTI5NCAxNS40MDMyIDkuNzUyOTQgMTQuNjExNyAxMC4yNDExIDE0LjEyMzZDMTAuNzI5MyAxMy42MzU1IDExLjUyMDggMTMuNjM1NCAxMi4wMDg5IDE0LjEyMzZMMTQuNjE4NCAxNi43MzMxWlxcXCIgZmlsbD1cXFwiIzUyMDA1NVxcXCIgLz5cXHJcXG48L2c+XFxyXFxuPGRlZnM+XFxyXFxuPGNsaXBQYXRoIGlkPVxcXCJndWFyYW50ZWVfY2xpcDBcXFwiPlxcclxcbjxyZWN0IHdpZHRoPVxcXCIzMlxcXCIgaGVpZ2h0PVxcXCIzMlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAgMC4wMDA4NTQ0OTIpXFxcIiAvPlxcclxcbjwvY2xpcFBhdGg+XFxyXFxuPC9kZWZzPlxcclxcbjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/img/svg/guarantee.svg\n");

/***/ }),

/***/ "./src/img/svg/play.svg":
/*!******************************!*\
  !*** ./src/img/svg/play.svg ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"play\",\n  \"use\": \"play-usage\",\n  \"viewBox\": \"0 0 22 22\",\n  \"content\": \"<symbol viewBox=\\\"0 0 22 22\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"play\\\">\\r\\n<g clip-path=\\\"url(#play_clip0)\\\">\\r\\n<path d=\\\"M18.7773 3.2255C14.4796 -1.07226 7.52295 -1.07286 3.22459 3.2255C-1.07322 7.52322 -1.0739 14.48 3.22459 18.7783C7.52234 23.0761 14.479 23.0767 18.7773 18.7783C23.0751 14.4806 23.0758 7.52386 18.7773 3.2255ZM14.3085 11.7149L10.179 14.9268C9.59223 15.3831 8.72113 14.9692 8.72113 14.2137V7.79013C8.72113 7.03999 9.58655 6.61616 10.179 7.07707L14.3085 10.2889C14.7734 10.6505 14.7729 11.3537 14.3085 11.7149Z\\\" fill=\\\"#DD352E\\\" />\\r\\n</g>\\r\\n<defs>\\r\\n<clipPath id=\\\"play_clip0\\\">\\r\\n<rect width=\\\"22\\\" height=\\\"22\\\" fill=\\\"white\\\" transform=\\\"translate(0 -0.00012207)\\\" />\\r\\n</clipPath>\\r\\n</defs>\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ __webpack_exports__[\"default\"] = (symbol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1nL3N2Zy9wbGF5LnN2Zy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL25hbWUvLi9zcmMvaW1nL3N2Zy9wbGF5LnN2Zz8wZDMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9icm93c2VyLXN5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvYnJvd3Nlci1zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInBsYXlcIixcbiAgXCJ1c2VcIjogXCJwbGF5LXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAyMiAyMlwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIHZpZXdCb3g9XFxcIjAgMCAyMiAyMlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwicGxheVxcXCI+XFxyXFxuPGcgY2xpcC1wYXRoPVxcXCJ1cmwoI3BsYXlfY2xpcDApXFxcIj5cXHJcXG48cGF0aCBkPVxcXCJNMTguNzc3MyAzLjIyNTVDMTQuNDc5NiAtMS4wNzIyNiA3LjUyMjk1IC0xLjA3Mjg2IDMuMjI0NTkgMy4yMjU1Qy0xLjA3MzIyIDcuNTIzMjIgLTEuMDczOSAxNC40OCAzLjIyNDU5IDE4Ljc3ODNDNy41MjIzNCAyMy4wNzYxIDE0LjQ3OSAyMy4wNzY3IDE4Ljc3NzMgMTguNzc4M0MyMy4wNzUxIDE0LjQ4MDYgMjMuMDc1OCA3LjUyMzg2IDE4Ljc3NzMgMy4yMjU1Wk0xNC4zMDg1IDExLjcxNDlMMTAuMTc5IDE0LjkyNjhDOS41OTIyMyAxNS4zODMxIDguNzIxMTMgMTQuOTY5MiA4LjcyMTEzIDE0LjIxMzdWNy43OTAxM0M4LjcyMTEzIDcuMDM5OTkgOS41ODY1NSA2LjYxNjE2IDEwLjE3OSA3LjA3NzA3TDE0LjMwODUgMTAuMjg4OUMxNC43NzM0IDEwLjY1MDUgMTQuNzcyOSAxMS4zNTM3IDE0LjMwODUgMTEuNzE0OVpcXFwiIGZpbGw9XFxcIiNERDM1MkVcXFwiIC8+XFxyXFxuPC9nPlxcclxcbjxkZWZzPlxcclxcbjxjbGlwUGF0aCBpZD1cXFwicGxheV9jbGlwMFxcXCI+XFxyXFxuPHJlY3Qgd2lkdGg9XFxcIjIyXFxcIiBoZWlnaHQ9XFxcIjIyXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMCAtMC4wMDAxMjIwNylcXFwiIC8+XFxyXFxuPC9jbGlwUGF0aD5cXHJcXG48L2RlZnM+XFxyXFxuPC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/img/svg/play.svg\n");

/***/ }),

/***/ "./src/img/svg sync recursive \\.svg$":
/*!**********************************!*\
  !*** ./src/img/svg/ sync \.svg$ ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./arrow.svg": "./src/img/svg/arrow.svg",
	"./delivery.svg": "./src/img/svg/delivery.svg",
	"./gift.svg": "./src/img/svg/gift.svg",
	"./graph.svg": "./src/img/svg/graph.svg",
	"./guarantee.svg": "./src/img/svg/guarantee.svg",
	"./play.svg": "./src/img/svg/play.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img/svg sync recursive \\.svg$";

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkname"] = self["webpackChunkname"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0&port=8081"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map