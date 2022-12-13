/*eslint-disable */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** *** */ (() => {
  // webpackBootstrap
  /** *** */

  /** *** */ const __webpack_modules__ = {
    /***/ './modules/displayBook.js':
      /*! ********************************!*\
  !*** ./modules/displayBook.js ***!
  \******************************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DisplayBooks)\n/* harmony export */ });\nconst bookDisplayContainer = document.querySelector('.bookDisplayContainer');\nconst information = JSON.parse(localStorage.getItem('books')) || [];\n\nclass DisplayBooks {\n  displayBook() {\n    information.forEach((book) => {\n      const bookTitle = document.createElement('p');\n      const remove = document.createElement('button');\n      remove.textContent = 'Remove';\n      remove.type = 'button';\n      remove.classList.add('remove');\n      const bookDiv = document.createElement('div');\n      bookDiv.classList.add('book-div');\n      bookTitle.innerHTML = `${book.name} by ${book.author}`;\n      bookDiv.append(bookTitle, remove);\n      bookDisplayContainer.appendChild(bookDiv);\n    });\n    \n  }\n}\n\n\n//# sourceURL=webpack://awesome-books/./modules/displayBook.js?"
        );
        /***/
      },

    /***/ './modules/navbarFunctionality.js':
      /*! ****************************************!*\
  !*** ./modules/navbarFunctionality.js ***!
  \*************************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavbarFunctionality)\n/* harmony export */ });\nconst awesomeBooks = document.querySelector('.allAwesomeBooks');\nconst addBook = document.querySelector('#addBook');\nconst contact = document.querySelector('.contact');\n\nclass NavbarFunctionality {\n  showList() {\n    awesomeBooks.style.display = 'block';\n    contact.style.display = 'none';\n    addBook.style.display = 'none';\n  }\n\n  showNew() {\n    awesomeBooks.style.display = 'none';\n    contact.style.display = 'none';\n    addBook.style.display = 'block';\n  }\n\n  showContact() {\n    awesomeBooks.style.display = 'none';\n    contact.style.display = 'block';\n    addBook.style.display = 'none';\n  }\n}\n\n\n//# sourceURL=webpack://awesome-books/./modules/navbarFunctionality.js?"
        );
        /***/
      },

    /***/ './modules/removeBook.js':
      /*! *******************************!*\
  !*** ./modules/removeBook.js ***!
  \****************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RemoveBook)\n/* harmony export */ });\nconst information = JSON.parse(localStorage.getItem('books')) || [];\nconst bookDisplayContainer = document.querySelector('.bookDisplayContainer');\n\nclass RemoveBook {\n  removeBook(button, index) {\n    bookDisplayContainer.removeChild(button.parentElement);\n    information.splice(index, 1);\n    localStorage.setItem('books', JSON.stringify(information));\n    location.reload();\n  }\n}\n\n\n//# sourceURL=webpack://awesome-books/./modules/removeBook.js?"
        );
        /***/
      },

    /***/ './modules/storeBook.js':
      /*! ******************************!*\
  !*** ./modules/storeBook.js ***!
  \***************************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookStore)\n/* harmony export */ });\nconst information = JSON.parse(localStorage.getItem('books')) || [];\nconst title = document.querySelector('.title');\nconst author = document.querySelector('.author');\n\nclass BookStore {\n  storeBook() {\n    const newBook = {\n      name: title.value,\n      author: author.value,\n    };\n    information.push(newBook);\n    localStorage.setItem('books', JSON.stringify(information));\n    return newBook;\n  }\n}\n\n\n//# sourceURL=webpack://awesome-books/./modules/storeBook.js?"
        );
        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/index.css':
      /*! *************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \************************************************************ */
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/* @import url(\'https://fonts.cdnfonts.com/css/lt-asus-print\'); */\\n\\n.bookDisplayContainer {\\n  border: black 4px solid;\\n}\\n\\n.allAwesomeBooks {\\n  margin: 2%;\\n}\\n\\n.allAwesomeBooks h1 {\\n  text-align: center;\\n}\\n\\n.book-div {\\n  font-family: \'LT Asus Print\', sans-serif;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0.3rem 2rem;\\n  font-size: 23px;\\n  font-weight: 700;\\n  height: auto;\\n}\\n\\n.book-div:nth-child(odd) {\\n  background: #b9bdc1;\\n}\\n\\n.remove {\\n  font-family: \'LT Asus Print\', sans-serif;\\n  background: white;\\n  color: black;\\n  border: black 3px solid;\\n  box-shadow: 2px 3px;\\n  font-weight: 600;\\n  height: 2rem;\\n}\\n\\n.add-new-book {\\n  font-family: \'LT Asus Print\', sans-serif;\\n  font-size: 30px;\\n  font-weight: bold;\\n}\\n\\n.title,\\n.author,\\n.add-btn {\\n  border: black 2px solid;\\n  font-family: \'LT Asus Print\', sans-serif;\\n  font-weight: bold;\\n}\\n\\n.black-bar {\\n  display: block;\\n  background: black;\\n  height: 3px;\\n  width: 5rem;\\n}\\n\\n.add-btn {\\n  border: black 3px solid;\\n  box-shadow: 2px 3px;\\n}\\n\\n.navbar {\\n  border: black 4px solid;\\n  margin: 2%;\\n}\\n\\n.awesome {\\n  margin-left: 10px;\\n}\\n\\n.navlist ul {\\n  display: flex;\\n  gap: 10px;\\n  list-style: none;\\n  padding: 0;\\n  margin: auto;\\n}\\n\\n.navlist {\\n  margin-right: 10px;\\n}\\n\\n.list-items {\\n  font-size: 20px;\\n  font-weight: 700;\\n}\\n\\n.list-items a:link,\\n.list-items a:visited {\\n  text-decoration: none;\\n  color: black;\\n}\\n\\n.list-items a:hover,\\n.list-items a:active {\\n  color: blue;\\n}\\n\\nfooter {\\n  margin: 2%;\\n  border: black 4px solid;\\n  padding-left: 20px;\\n  height: 70px;\\n  align-items: center;\\n}\\n\\nfooter p {\\n  margin: auto;\\n  font-size: 23px;\\n  font-weight: 700;\\n  padding: 16px;\\n}\\n\\n.contact {\\n  margin: 80px 20%;\\n  font-size: 18px;\\n  font-weight: 600;\\n  display: none;\\n}\\n\\n#addBook {\\n  display: none;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://awesome-books/./src/index.css?./node_modules/css-loader/dist/cjs.js'
        );
        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://awesome-books/./node_modules/css-loader/dist/runtime/api.js?'
        );
        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*! **************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \************************************************************* */
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://awesome-books/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );
        /***/
      },

    /***/ './src/index.css':
      /*! ***********************!*\
  !*** ./src/index.css ***!
  \********************** */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://awesome-books/./src/index.css?'
        );
        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://awesome-books/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );
        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://awesome-books/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );
        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://awesome-books/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );
        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://awesome-books/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );
        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://awesome-books/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );
        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://awesome-books/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );
        /***/
      },

    /***/ './src/index.js':
      /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_displayBook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/displayBook */ \"./modules/displayBook.js\");\n/* harmony import */ var _modules_storeBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/storeBook */ \"./modules/storeBook.js\");\n/* harmony import */ var _modules_removeBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/removeBook */ \"./modules/removeBook.js\");\n/* harmony import */ var _modules_navbarFunctionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/navbarFunctionality */ \"./modules/navbarFunctionality.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\n\nconst displayBooks = new _modules_displayBook__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst storeBook = new _modules_storeBook__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst removeBook = new _modules_removeBook__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst navbarFunctionality = new _modules_navbarFunctionality__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n/* eslint-disable no-restricted-globals */\nconst bookDisplayContainer = document.querySelector('.bookDisplayContainer');\nconst form = document.querySelector('form');\nconst title = document.querySelector('.title');\nconst author = document.querySelector('.author');\n\nconst list = document.querySelector('#list');\nconst addNew = document.querySelector('#addNew');\nconst contactLink = document.querySelector('#contact');\nconst addBook = document.querySelector('#addBook');\n// class BookList {\n//   information = JSON.parse(localStorage.getItem('books')) || [];\n\n// storeBook() {\n//   const newBook = {\n//     name: title.value,\n//     author: author.value,\n//   };\n//   this.information.push(newBook);\n//   localStorage.setItem('books', JSON.stringify(this.information));\n//   return newBook;\n// }\n\n// displayBooks() {\n//   this.information.forEach((book) => {\n//     const bookTitle = document.createElement('p');\n//     const remove = document.createElement('button');\n//     remove.textContent = 'Remove';\n//     remove.type = 'button';\n//     remove.classList.add('remove');\n//     const bookDiv = document.createElement('div');\n//     bookDiv.classList.add('book-div');\n//     bookTitle.innerHTML = `${book.name} by ${book.author}`;\n//     bookDiv.append(bookTitle, remove);\n//     bookDisplayContainer.appendChild(bookDiv);\n//   });\n// }\n\n// removeBook(button, index) {\n//   bookDisplayContainer.removeChild(button.parentElement);\n//   this.information.splice(index, 1);\n//   localStorage.setItem('books', JSON.stringify(this.information));\n//   location.reload();\n// }\n\n// static showList() {\n//   awesomeBooks.style.display = 'block';\n//   contact.style.display = 'none';\n//   addBook.style.display = 'none';\n// }\n\n// static showNew() {\n//   awesomeBooks.style.display = 'none';\n//   contact.style.display = 'none';\n//   addBook.style.display = 'block';\n// }\n\n// static showContact() {\n//   awesomeBooks.style.display = 'none';\n//   contact.style.display = 'block';\n//   addBook.style.display = 'none';\n// }\n// }\n\n// const bookCollection = new BookList();\n// bookCollection.displayBooks();\ndisplayBooks.displayBook();\naddBook.style.display = 'block';\nconst remove = document.querySelectorAll('.remove');\n\nremove.forEach((btn, index) => {\n  btn.addEventListener('click', () => {\n    removeBook.removeBook(btn, index);\n  });\n});\n\nif (bookDisplayContainer.childElementCount === 0) {\n  const defaultMessage = document.createElement('p');\n  defaultMessage.classList.add('text-center', 'fs-3');\n  defaultMessage.innerText = 'No Awesome Books';\n  bookDisplayContainer.appendChild(defaultMessage);\n}\n\nform.addEventListener('submit', (e) => {\n  if (title.value !== null && author.value !== null) {\n    storeBook.storeBook();\n    location.reload();\n    title.value = '';\n    author.value = '';\n  }\n  e.preventDefault();\n});\n\nlist.addEventListener('click', (e) => {\n  e.preventDefault();\n  navbarFunctionality.showList();\n});\n\naddNew.addEventListener('click', (e) => {\n  e.preventDefault();\n  navbarFunctionality.showNew();\n});\n\ncontactLink.addEventListener('click', (e) => {\n  e.preventDefault();\n  navbarFunctionality.showContact();\n});\n\n\n//# sourceURL=webpack://awesome-books/./src/index.js?"
        );
        /***/
      },

    /** *** */
  };
  /** ********************************************************************* */
  /** *** */ // The module cache
  /** *** */ const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ // The require function
  /** *** */ function __webpack_require__(moduleId) {
    /** *** */ // Check if module is in cache
    /** *** */ const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ if (cachedModule !== undefined) {
      /** *** */ return cachedModule.exports;
      /** *** */
    }
    /** *** */ // Create a new module (and put it into the cache)
    /** *** */ const module = (__webpack_module_cache__[moduleId] = {
      /** *** */ id: moduleId,
      /** *** */ // no module.loaded needed
      /** *** */ exports: {},
      /** *** */
    });
    /** *** */
    /** *** */ // Execute the module function
    /** *** */ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /** *** */
    /** *** */ // Return the exports of the module
    /** *** */ return module.exports;
    /** *** */
  }
  /** *** */
  /** ********************************************************************* */
  /** *** */ /* webpack/runtime/compat get default export */
  /** *** */ (() => {
    /** *** */ // getDefaultExport function for compatibility with non-harmony modules
    /** *** */ __webpack_require__.n = (module) => {
      /** *** */ const getter =
        module && module.__esModule
          ? /** *** */ () => module.default
          : /** *** */ () => module;
      /** *** */ __webpack_require__.d(getter, { a: getter });
      /** *** */ return getter;
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/define property getters */
  /** *** */ (() => {
    /** *** */ // define getter functions for harmony exports
    /** *** */ __webpack_require__.d = (exports, definition) => {
      /** *** */ for (const key in definition) {
        /** *** */ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /** *** */ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /** *** */
        }
        /** *** */
      }
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ (() => {
    /** *** */ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/make namespace object */
  /** *** */ (() => {
    /** *** */ // define __esModule on exports
    /** *** */ __webpack_require__.r = (exports) => {
      /** *** */ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /** *** */
      }
      /** *** */ Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */
    };
    /** *** */
  })();
  /** *** */
  /** *** */ /* webpack/runtime/nonce */
  /** *** */ (() => {
    /** *** */ __webpack_require__.nc = undefined;
    /** *** */
  })();
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ // startup
  /** *** */ // Load entry module and return exports
  /** *** */ // This entry module can't be inlined because the eval devtool is used.
  /** *** */ const __webpack_exports__ = __webpack_require__('./src/index.js');
  /** *** */
  /** *** */
})();
/* eslint-enable */
