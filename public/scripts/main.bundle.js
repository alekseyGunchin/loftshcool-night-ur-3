/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/module */ \"./src/scripts/modules/module.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbW9kdWxlcy9tb2R1bGUnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ }),

/***/ "./src/scripts/modules/module.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/module.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar btns = document.getElementsByClassName('btn-entrance__link');\nvar log = document.getElementsByClassName('form-entrance__login');\nvar welc = document.getElementsByClassName('form-entrance__welcome');\nvar main = document.getElementsByClassName('btn-form__link-login');\nbtns[0].onclick = function () {\n    log[0].classList.add(\"form-entrance_active\");\n    welc[0].classList.remove(\"form-entrance_active\");\n};\nmain[1].onclick = function () {\n    log[0].classList.remove(\"form-entrance_active\");\n    welc[0].classList.add(\"form-entrance_active\");\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL21vZHVsZS5qcz8zMTVjIl0sIm5hbWVzIjpbImJ0bnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsb2ciLCJ3ZWxjIiwibWFpbiIsIm9uY2xpY2siLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsT0FBT0MsU0FBU0Msc0JBQVQsQ0FBZ0Msb0JBQWhDLENBQVg7QUFDQSxJQUFJQyxNQUFNRixTQUFTQyxzQkFBVCxDQUFnQyxzQkFBaEMsQ0FBVjtBQUNBLElBQUlFLE9BQU9ILFNBQVNDLHNCQUFULENBQWdDLHdCQUFoQyxDQUFYO0FBQ0EsSUFBSUcsT0FBT0osU0FBU0Msc0JBQVQsQ0FBZ0Msc0JBQWhDLENBQVg7QUFDQUYsS0FBSyxDQUFMLEVBQVFNLE9BQVIsR0FBa0IsWUFBVztBQUN6QkgsUUFBSSxDQUFKLEVBQU9JLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLHNCQUFyQjtBQUNBSixTQUFLLENBQUwsRUFBUUcsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsc0JBQXpCO0FBQ0gsQ0FIRDtBQUlBSixLQUFLLENBQUwsRUFBUUMsT0FBUixHQUFrQixZQUFXO0FBQ3pCSCxRQUFJLENBQUosRUFBT0ksU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0Isc0JBQXhCO0FBQ0FMLFNBQUssQ0FBTCxFQUFRRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixzQkFBdEI7QUFDSCxDQUhEIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvbW9kdWxlcy9tb2R1bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi1lbnRyYW5jZV9fbGluaycpO1xyXG52YXIgbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1lbnRyYW5jZV9fbG9naW4nKTtcclxudmFyIHdlbGMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWVudHJhbmNlX193ZWxjb21lJyk7XHJcbnZhciBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLWZvcm1fX2xpbmstbG9naW4nKTtcclxuYnRuc1swXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsb2dbMF0uY2xhc3NMaXN0LmFkZChcImZvcm0tZW50cmFuY2VfYWN0aXZlXCIpO1xyXG4gICAgd2VsY1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybS1lbnRyYW5jZV9hY3RpdmVcIik7XHJcbn1cclxubWFpblsxXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsb2dbMF0uY2xhc3NMaXN0LnJlbW92ZShcImZvcm0tZW50cmFuY2VfYWN0aXZlXCIpO1xyXG4gICAgd2VsY1swXS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbnRyYW5jZV9hY3RpdmVcIik7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/module.js\n");

/***/ })

/******/ });