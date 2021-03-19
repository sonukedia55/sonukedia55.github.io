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

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/*! exports provided: apiHandler, apiRequester */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiHandler", function() { return apiHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRequester", function() { return apiRequester; });
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/main */ "./src/main/main.js");


function apiHand() {
  const apiTypes = ["GET", "POST", "PUT", "PATCH"];
  const activeMethod = {
    method: "GET",
    url: "",
    body: ""
  };
  let headerList = [];
  const historyList = localStorage.getItem("apiHistory") ? JSON.parse(localStorage.getItem("apiHistory")) : [];
  return {
    getApiType: () => {
      return apiTypes;
    },
    getApiHistory: () => {
      return historyList;
    },
    addApiHistory: v => {
      historyList.push(v);
      localStorage.setItem("apiHistory", JSON.stringify(historyList));
    },
    getApiHeader: () => {
      return headerList;
    },
    addApiHeader: data => {
      headerList.push(data);
    },
    updateHeaderAll: v => {
      headerList = v;
    },
    updateApiHeader: ({
      key,
      value,
      index,
      action
    }) => {
      if (action && action == "d") {
        headerList = headerList.filter((i, ind) => {
          return ind != index;
        });
      } else {
        headerList[index].key = key ? key : headerList[index].key;
        headerList[index].value = value ? value : headerList[index].value;
      }
    },
    getActiveMethod: () => {
      return activeMethod;
    },
    updateActiveMethod: ({
      method,
      url,
      body
    }) => {
      activeMethod.method = method ? method : activeMethod.method;
      activeMethod.url = url ? url : activeMethod.url;
      activeMethod.body = body ? body : activeMethod.body;
    }
  };
}

const apiHandler = apiHand();
function apiRequester() {
  const activeMethod = apiHandler.getActiveMethod();
  console.log(apiHandler.getApiHeader());
  let buildHeader = {};
  apiHandler.getApiHeader().forEach(item => {
    buildHeader[item.key] = item.value;
  });
  let options = {
    method: activeMethod.method,
    url: activeMethod.url,
    headers: buildHeader,
    ...(activeMethod.body.length ? {
      json: JSON.parse(activeMethod.body)
    } : {})
  };
  console.log(options);
  Object(_main_main__WEBPACK_IMPORTED_MODULE_0__["updateApiResponse"])("Requesting..."); // request(options, function (error, response, body) {
  //   if (response) {
  //     apiHandler.addApiHistory({
  //       method: options.method,
  //       url: options.url,
  //       header: apiHandler.getApiHeader(),
  //       body: activeMethod.body,
  //       status: response.statusCode,
  //     });
  //   }
  //   if (error) {
  //     let errBody = error;
  //     if (typeof errBody == "string") {
  //       console.log("hMSgFGena", errBody);
  //     }
  //   }
  //   if (body) {
  //     console.log("hMSgFGen");
  //     console.log(body);
  //     updateApiResponse(body);
  //   }
  // });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main */ "./src/main/main.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);




function createBody() {
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a['container'], [Object(_main_main__WEBPACK_IMPORTED_MODULE_1__["createHeader"])(), Object(_main_main__WEBPACK_IMPORTED_MODULE_1__["createMainBody"])()]);
}

Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateUI"])('body', createBody());

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
/*! exports provided: createHeader, updateApiResponse, createMainBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeader", function() { return createHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateApiResponse", function() { return updateApiResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMainBody", function() { return createMainBody; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.scss */ "./src/main/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_2__);



function createHeader() {
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement2"])("div", {
    className: _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['header']
  }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement2"])("div", {
    className: _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['logo']
  }, "API Tester"), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement2"])("div", {
    className: _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['status']
  }, "Demo Project"));
}
function updateApiResponse(response) {
  response = typeof response != "string" ? JSON.stringify(response) : response;
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateUI"])('#responses', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(response));
  updateHistoryView();
}

function loadHistory() {
  const ix = this['data-i'];
  const historyVal = _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].getApiHistory().filter((i, ind) => {
    return ind == ix;
  })[0];
  let dataH = historyVal.header;
  _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].updateHeaderAll(dataH);
  updateHeaderView();
  document.querySelector(`.${_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['apiurl']}`).value = historyVal.url;
  document.querySelector(`.${_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['methodlist']}`).value = historyVal.method;
  document.querySelector(`.${_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['reqdivtextarea']}`).value = historyVal.body;
}

function updateHistoryView() {
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateUI"])('#historylist', _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].getApiHistory().map(historyListEach));
}

function addheader() {
  _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].addApiHeader({
    key: '',
    value: ''
  });
  updateHeaderView();
}

function editheader() {
  const i = this['data-i'];
  const action = this['data-a'];
  let req = {
    index: i,
    action: action
  };
  if (action == "k") req.key = this.value;
  if (action == "v") req.value = this.value;
  _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].updateApiHeader(req);
  if (action == "d") updateHeaderView();
}

const headerListEach = (item, i) => {
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement2"])("div", {
    className: _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['headereach']
  }, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement2"])("input", {
    className: _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['headereachkey'],
    value: item.key,
    onkeyup: editheader,
    placeholder: 'Key',
    "data-i": i,
    "data-a": 'k'
  }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement2"])("input", {
    className: _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['headereachvalue'],
    value: item.value,
    onkeyup: editheader,
    placeholder: 'Value',
    "data-i": i,
    "data-a": 'v'
  }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement2"])("div", {
    className: _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['cross'],
    onclick: editheader,
    placeholder: 'Value',
    "data-i": i,
    "data-a": 'd'
  })); // return createElement('div',styles['headereach'],[
  //   withAttr(createElement('input',styles['headereachkey']),{value:item.key,onkeyup:editheader,placeholder:'Key','data-i':i,'data-a':'k'}),
  //   withAttr(createElement('input',styles['headereachvalue']),{value:item.value,onkeyup:editheader,placeholder:'Value','data-i':i,'data-a':'v'}),
  //   withAttr(createElement('div',styles['cross']),{onclick:editheader,'data-i':i,'data-a':'d'})
  // ])
};

function updateHeaderView() {
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["updateUI"])('#headerslist', _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].getApiHeader().map(headerListEach));
}

const historyListEach = (item, i) => {
  let title = "/" + item.url.split("/").slice(3).join("/");
  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['historyeach'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['historyhead'], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(title)), {
    onclick: loadHistory,
    'data-i': i
  }), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['historybody'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['historybodymethod'], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(item.method)), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['historybodystatus'], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(item.status))])]);
};

function createMainBody() {
  const methodListMap = item => {
    return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('option', [], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])(item)]), {
      value: item
    });
  };

  function methodchange() {
    _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].updateActiveMethod({
      method: this.value
    });
  }

  function bodyChange() {
    _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].updateActiveMethod({
      body: this.value
    });
  }

  function urlChange() {
    _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].updateActiveMethod({
      url: this.value
    });
  }

  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['main'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['left'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['lefttitle'], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('History')), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['historylisthere'], _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].getApiHistory().map(historyListEach), 'historylist')]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['right'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['rightinner'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('h3', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['apititle'], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Test an API')), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['apiurlbox'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['lefturl'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', [_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['coltitle']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Method')]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('select', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['methodlist'], _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].getApiType().map(methodListMap)), {
    onchange: methodchange
  })]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['righturl'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', [_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['coltitle']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('API endpoint')]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('input', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['apiurl']), {
    placeholder: 'Enter URL',
    onkeyup: urlChange
  })]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('button', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['buttonsend'], Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('SEND')), {
    onclick: _api_api__WEBPACK_IMPORTED_MODULE_1__["apiRequester"]
  })]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['requestapi'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['headersdiv'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', [_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['coltitle']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Headers')]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['headerslist'], _api_api__WEBPACK_IMPORTED_MODULE_1__["apiHandler"].getApiHeader().map(headerListEach), "headerslist"), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('button', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['headersaddbutton'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('+ Add header')]), {
    onclick: addheader
  })]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['requestbodydiv'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', [_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['coltitle']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Request Body')]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["withAttr"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('textarea', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['reqdivtextarea'], []), {
    placeholder: "Enter request body here",
    onchange: bodyChange
  })])])]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', _main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['rightresponse'], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', [_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['coltitle']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Response')]), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])('div', [_main_scss__WEBPACK_IMPORTED_MODULE_2___default.a['respbody']], [Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["T"])('Response will be displayed here')], "responses")])])]);
}

/***/ }),

/***/ "./src/main/main.scss":
/*!****************************!*\
  !*** ./src/main/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"src-main-main__header","logo":"src-main-main__logo","status":"src-main-main__status","main":"src-main-main__main","left":"src-main-main__left","lefttitle":"src-main-main__lefttitle","historyeach":"src-main-main__historyeach","historyhead":"src-main-main__historyhead","historybody":"src-main-main__historybody","historybodymethod":"src-main-main__historybodymethod","historybodystatus":"src-main-main__historybodystatus","right":"src-main-main__right","rightinner":"src-main-main__rightinner","apititle":"src-main-main__apititle","apiurlbox":"src-main-main__apiurlbox","lefturl":"src-main-main__lefturl","methodlist":"src-main-main__methodlist","righturl":"src-main-main__righturl","apiurl":"src-main-main__apiurl","buttonsend":"src-main-main__buttonsend","requestapi":"src-main-main__requestapi","headersdiv":"src-main-main__headersdiv","headerslist":"src-main-main__headerslist","headereach":"src-main-main__headereach","headereachkey":"src-main-main__headereachkey","headereachvalue":"src-main-main__headereachvalue","requestbodydiv":"src-main-main__requestbodydiv","reqdivtextarea":"src-main-main__reqdivtextarea","rightresponse":"src-main-main__rightresponse","respbody":"src-main-main__respbody","coltitle":"src-main-main__coltitle","cross":"src-main-main__cross"};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: createElement, createElement2, withStyle, withAttr, updateUI, T */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement2", function() { return createElement2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyle", function() { return withStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAttr", function() { return withAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUI", function() { return updateUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
function createElement(obj, classList, childList, id) {
  const el = document.createElement(obj);
  classList = Array.isArray(classList) ? classList : [classList];

  if (classList && classList.length) {
    el.className = classList.join(" ");
  }

  if (childList) {
    childList = Array.isArray(childList) ? childList : [childList];
    childList.forEach((item, i) => {
      el.appendChild(item);
    });
  }

  if (id) el.setAttribute('id', id);
  return el;
}
function createElement2(elm, {
  className,
  ...args
}, ...childList) {
  const {
    style,
    ...attr
  } = args;
  let el = document.createElement(elm);
  className = Array.isArray(className) ? className : [className];

  if (className && className.length) {
    el.className = className.join(" ");
  }

  if (childList) {
    childList.forEach((item, i) => {
      if (typeof item == "string") {
        item = T(item);
      }

      el.appendChild(item);
    });
  }

  if (attr) {
    el = withAttr(el, attr);
  } // if(id)el.setAttribute('id',id)


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