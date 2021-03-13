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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/header/header.js":
/*!******************************!*\
  !*** ./src/header/header.js ***!
  \******************************/
/*! exports provided: createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeader", function() { return createHeader; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);


function createHeader() {
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['header']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['logo']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Todo App')]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['status']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('5 / 8')])]);
}

/***/ }),

/***/ "./src/header/header.scss":
/*!********************************!*\
  !*** ./src/header/header.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"src-header-header__header","logo":"src-header-header__logo","status":"src-header-header__status"};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ "./src/header/header.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main */ "./src/main/main.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);





function loadcomponent() {
  const element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["createElement"])('div', ['container'], [Object(_header_header__WEBPACK_IMPORTED_MODULE_0__["createHeader"])(), Object(_main_main__WEBPACK_IMPORTED_MODULE_1__["createMain"])()]);
  return element;
}

document.body.appendChild(loadcomponent());

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/*! exports provided: eachTodo, createMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachTodo", function() { return eachTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMain", function() { return createMain; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./src/main/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_1__);


function eachTodo(data) {
  function checkboxChange() {
    console.log(this['data-id']);
    console.log(Object.keys(this));
  }

  function deleteTodo() {
    console.log(this['data-id']);
    console.log(Object.keys(this));
  }

  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a['each']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a['todotext']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('input', [_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a['checkbox']], []), {
    onchange: checkboxChange,
    'data-id': data.id,
    type: 'checkbox',
    ...(data.status ? {
      checked: 'true'
    } : {})
  }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', [], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(data.todo)])]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a['tododel']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a['cross']], []), {
    onclick: deleteTodo,
    'data-id': data.id
  })])]);
}
function createMain() {
  const todos = [{
    todo: "Hey1",
    id: '11',
    status: true
  }, {
    todo: "Hey2",
    id: '12',
    status: false
  }];
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a['main']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a['todos']], todos.map(a => {
    return eachTodo(a);
  }))]);
}

/***/ }),

/***/ "./src/main/main.scss":
/*!****************************!*\
  !*** ./src/main/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"src-main-main__main","todos":"src-main-main__todos","each":"src-main-main__each","todotext":"src-main-main__todotext","checkbox":"src-main-main__checkbox","tododel":"src-main-main__tododel","cross":"src-main-main__cross"};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: createElement, withStyle, withAttr, updateUI, T */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyle", function() { return withStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAttr", function() { return withAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return updateUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
function createElement(obj, classList, childList, id) {
  const el = document.createElement(obj);

  if (classList && classList.length) {
    el.className = classList.join(" ");
  }

  if (childList) {
    childList.forEach((item, i) => {
      el.appendChild(item);
    });
  }

  if (id) el.setAttribute('id', id);
  return el;
}
function withStyle(el, stylelist) {
  Object.keys(stylelist).map((item, i) => {
    el.style[item] = stylelist[item];
  });
  return el;
}
function withAttr(el, attr) {
  Object.keys(attr).forEach((item, i) => {
    el[item] = attr[item];
  });
  return el;
}
function updateUI(el, container) {
  const elm = document.querySelector(el);

  if (elm.children.length) {
    elm.replaceChild(container, elm.firstChild);
  } else {
    elm.appendChild(container);
  }
}
const T = t => document.createTextNode(t);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map