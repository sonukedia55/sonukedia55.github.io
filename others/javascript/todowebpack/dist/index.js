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
/*! exports provided: updateOverall, createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOverall", function() { return updateOverall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeader", function() { return createHeader; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.scss */ "./src/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/main */ "./src/main/main.js");



function updateOverall() {
  const heading = `${_main_main__WEBPACK_IMPORTED_MODULE_2__["todoHandler"].getTodo().reduce((sum, i) => sum + (i.status ? 1 : 0), 0)} / ${_main_main__WEBPACK_IMPORTED_MODULE_2__["todoHandler"].getTodo().length}`;
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateUI"])('.' + _header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['status'], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(heading));
}
function createHeader() {
  let todoList = _main_main__WEBPACK_IMPORTED_MODULE_2__["todoHandler"].getTodo();
  const heading = `${todoList.reduce((sum, i) => sum + (i.status ? 1 : 0), 0)} / ${todoList.length}`;
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['header']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['logo']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Todo App')]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_header_scss__WEBPACK_IMPORTED_MODULE_1___default.a['status']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(heading)])]);
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
/* harmony import */ var _notify_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify/notify */ "./src/notify/notify.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main */ "./src/main/main.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_4__);






(function () {
  function loadcomponent() {
    const element = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", ["container"], [Object(_header_header__WEBPACK_IMPORTED_MODULE_0__["createHeader"])(), Object(_main_main__WEBPACK_IMPORTED_MODULE_2__["createMain"])(), Object(_notify_notify__WEBPACK_IMPORTED_MODULE_1__["createNotify"])()]);
    return element;
  }

  document.body.appendChild(loadcomponent());
})();

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
/*! exports provided: eachTodo, todoHand, todoHandler, createMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eachTodo", function() { return eachTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoHand", function() { return todoHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoHandler", function() { return todoHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMain", function() { return createMain; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _notify_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notify/notify */ "./src/notify/notify.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header */ "./src/header/header.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.scss */ "./src/main/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_3__);





function updatingTodo(text) {
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateUI"])('.todoall', todoHandler.getTodo().map(a => {
    return eachTodo(a);
  }));
  Object(_header_header__WEBPACK_IMPORTED_MODULE_2__["updateOverall"])();

  if (text) {
    _notify_notify__WEBPACK_IMPORTED_MODULE_1__["notifyHandler"].addNotify(text);
  }
}

function eachTodo(data) {
  function checkboxChange() {
    todoHandler.updateStatus(this['data-id']);
    const updateEle = todoHandler.getTodo().filter(i => {
      return i.id == this['data-id'];
    })[0];
    const text = `${updateEle.todo} is marked as ${updateEle.status ? 'Checked' : 'Unchecked'}!`;
    updatingTodo(text);
  }

  function deleteTodo() {
    todoHandler.deleteTodo(this['data-id']);
    updatingTodo();
  }

  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['each']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['todotext']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('input', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['checkbox']], []), {
    onchange: checkboxChange,
    'data-id': data.id,
    type: 'checkbox',
    ...(data.status ? {
      checked: 'true'
    } : {})
  }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', [], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(data.todo)])]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['tododel']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['cross']], []), {
    onclick: deleteTodo,
    'data-id': data.id
  })])]);
}
function todoHand() {
  let todos = [{
    todo: "Hey1",
    id: '11',
    status: true
  }, {
    todo: "Hey2",
    id: '12',
    status: false
  }];
  return {
    getTodo: () => {
      return todos;
    },
    addTodo: obj => {
      todos.push(obj);
      console.log(todos);
    },
    deleteTodo: id => {
      todos = todos.filter(i => {
        return i.id != id;
      });
    },
    updateStatus: id => {
      todos.forEach(i => {
        i.status = i.id == id ? i.status ? false : true : i.status;
      });
    }
  };
}
const todoHandler = todoHand();
function createMain() {
  function addTodo(ev) {
    todoHandler.addTodo({
      todo: this.value,
      id: '111',
      status: false
    });
    this.value = "";
    updatingTodo(`${this.value} added!`);
  }

  let todos = todoHandler.getTodo();
  let inputElement = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('input', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['todoinput']], []), {
    placeholder: 'Enter todo'
  });
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['main']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['todos']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', ['todoall'], [...todos.map(a => {
    return eachTodo(a);
  })]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['each']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['todoinpu']], [inputElement]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_3___default.a['todoadd']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Add')]), {
    onclick: addTodo.bind(inputElement)
  })])])]);
}

/***/ }),

/***/ "./src/main/main.scss":
/*!****************************!*\
  !*** ./src/main/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"src-main-main__main","todos":"src-main-main__todos","each":"src-main-main__each","todotext":"src-main-main__todotext","checkbox":"src-main-main__checkbox","todoinput":"src-main-main__todoinput","todoadd":"src-main-main__todoadd","tododel":"src-main-main__tododel","cross":"src-main-main__cross"};

/***/ }),

/***/ "./src/notify/notify.js":
/*!******************************!*\
  !*** ./src/notify/notify.js ***!
  \******************************/
/*! exports provided: notifyHand, notifyHandler, createNotify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyHand", function() { return notifyHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyHandler", function() { return notifyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNotify", function() { return createNotify; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _notify_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify.scss */ "./src/notify/notify.scss");
/* harmony import */ var _notify_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notify_scss__WEBPACK_IMPORTED_MODULE_1__);


function notifyHand() {
  let notifyList = [];
  return {
    getNotify: () => {
      return notifyList;
    },
    addNotify: text => {
      notifyList.unshift(text);
      notifyList = notifyList.slice(0, 3);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateUI"])('.' + _notify_scss__WEBPACK_IMPORTED_MODULE_1___default.a['notifies'], notifyHandler.getNotify().map(a => {
        return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_notify_scss__WEBPACK_IMPORTED_MODULE_1___default.a['eachnoti']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(a)]);
      }));
    }
  };
}
const notifyHandler = notifyHand();
function createNotify() {
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_notify_scss__WEBPACK_IMPORTED_MODULE_1___default.a['notify']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_notify_scss__WEBPACK_IMPORTED_MODULE_1___default.a['notifies']], [])]);
}

/***/ }),

/***/ "./src/notify/notify.scss":
/*!********************************!*\
  !*** ./src/notify/notify.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"notify":"src-notify-notify__notify","notifies":"src-notify-notify__notifies","eachnoti":"src-notify-notify__eachnoti"};

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
  elm.innerHTML = "";

  if (Array.isArray(container)) {
    container.forEach((item, i) => {
      elm.appendChild(item);
    });
  } else {
    elm.appendChild(container);
  }
}
const T = t => document.createTextNode(t);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map