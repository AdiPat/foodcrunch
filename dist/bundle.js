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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/helper.js":
/*!**************************!*\
  !*** ./app/js/helper.js ***!
  \**************************/
/*! exports provided: API_KEY, KEYCODE_ENTER, setElemAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_KEY\", function() { return API_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEYCODE_ENTER\", function() { return KEYCODE_ENTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setElemAttribute\", function() { return setElemAttribute; });\n//export const API_KEY = '319407a59aa179e729d6738f2c6fb9b3';\n//export const API_KEY = 'd3ab033003c2e546e131f5b45402e3e9';\nconst API_KEY = '6119bf7b7a678b3229923a6a3c13d861';\nconst KEYCODE_ENTER = 13;\n\nconst setElemAttribute = (elem, attr, val) => {\n    elem.setAttribute(attr, val);\n}\n\n//# sourceURL=webpack:///./app/js/helper.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./app/js/helper.js\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/base */ \"./app/js/views/base.js\");\n/* harmony import */ var _views_SearchView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/SearchView */ \"./app/js/views/SearchView.js\");\n/* harmony import */ var _views_CardView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/CardView */ \"./app/js/views/CardView.js\");\n/* harmony import */ var _views_RecipeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/RecipeView */ \"./app/js/views/RecipeView.js\");\n/* harmony import */ var _models_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Search */ \"./app/js/models/Search.js\");\n/* harmony import */ var _models_Recipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/Recipe */ \"./app/js/models/Recipe.js\");\n\n\n\n\n\n\n\n\nconsole.log(1, _views_SearchView__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar state = {};\n\nconst searchCallback = () => {\n    const searchStr = _views_SearchView__WEBPACK_IMPORTED_MODULE_2__[\"getSearchInput\"]();\n    // send it to searchModel\n    state.search = new _models_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"](searchStr);\n    // Get search Results from searchModel and pass the result to search model\n    // clear Results\n    _views_SearchView__WEBPACK_IMPORTED_MODULE_2__[\"clearResults\"]();\n\n\n    state.search.getResults(1, _views_SearchView__WEBPACK_IMPORTED_MODULE_2__[\"displayResults\"]);\n\n    // Send results to SearchView to display\n    console.log(state.search.data);\n};\n\nconst selectCard = (e) => {\n    let elemCard;\n    // console.log(e.target.classList);\n    // check class\n    if (e.target.classList.contains(_views_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMClassNames\"].searchCardTitle) || e.target.classList.contains(_views_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMClassNames\"].searchCardImage))\n        elemCard = e.target.parentNode;\n    else if (e.target.classList.contains(_views_base__WEBPACK_IMPORTED_MODULE_1__[\"DOMClassNames\"].searchCard))\n        elemCard = e.target;\n    console.log(elemCard);\n    // highlight card\n    if (elemCard) {\n        _views_CardView__WEBPACK_IMPORTED_MODULE_3__[\"highlightCard\"](elemCard);\n        const recipeId = _views_CardView__WEBPACK_IMPORTED_MODULE_3__[\"getCardId\"](elemCard);\n        console.log(recipeId);\n        return elemCard;\n    }\n    \n};\n\nconst printData = (data) => {\n    console.log(data);\n}\n\nconst setupRecipe = async (rId) => {\n    state.recipe = new _models_Recipe__WEBPACK_IMPORTED_MODULE_6__[\"default\"](rId);\n    await state.recipe.fetchRecipe();\n    _views_RecipeView__WEBPACK_IMPORTED_MODULE_4__[\"displayRecipe\"](state.recipe.data);\n}\n\nconst setupEventHandlers = () => {\n\n    // search button\n    _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].searchButton.addEventListener('click', searchCallback);\n    // search on enter key press\n    document.addEventListener('keydown', (e) => {\n        if (e.keyCode === _helper__WEBPACK_IMPORTED_MODULE_0__[\"KEYCODE_ENTER\"])\n            searchCallback();\n    });\n    // select card and display recipe info\n    _views_base__WEBPACK_IMPORTED_MODULE_1__[\"elements\"].searchResultsBox.addEventListener('click', (e) => {\n        const elemCard = selectCard(e);\n        const rId = _views_CardView__WEBPACK_IMPORTED_MODULE_3__[\"getCardId\"](elemCard);\n       // state.recipe = new RecipeModel(rId);\n        setupRecipe(rId);\n        // Fetch Recipe using Recipe Model\n        //state.recipe = {};\n        //await state.recipe.fetchRecipe();\n        // Display Recipe info using RecipeView\n    });\n};\n\nconst init = () => {\n    setupEventHandlers();\n};\n\n\ninit();\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ "./app/js/models/Recipe.js":
/*!*********************************!*\
  !*** ./app/js/models/Recipe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipeModel; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ \"./app/js/helper.js\");\n\n\nclass RecipeModel {\n    \n    constructor(rId) {\n        this.recipe_id = rId;\n    }\n    \n    async fetchRecipe() {\n        const url = `https://www.food2fork.com/api/get?key=${_helper__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY\"]}&rId=${this.recipe_id}`;\n        const response = await fetch(url);\n        const data = await response.json();\n        this.data = data.recipe;\n    }\n    \n}\n\n//# sourceURL=webpack:///./app/js/models/Recipe.js?");

/***/ }),

/***/ "./app/js/models/Search.js":
/*!*********************************!*\
  !*** ./app/js/models/Search.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchModel; });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ \"./app/js/helper.js\");\n// API KEY 319407a59aa179e729d6738f2c6fb9b3\n//const API_KEY = '319407a59aa179e729d6738f2c6fb9b3';\n\n\nclass SearchModel {\n    \n    constructor(searchQuery) {\n        this.query = searchQuery;/*m,*/;\n    }\n    \n    parseQuery(query) {\n        let words = query.split(' ');\n        //console.log(words);\n        const finalQuery = words.join('%20');\n        //console.log(finalQuery);\n        return finalQuery;\n    }\n    \n    getResults(pageNum, callback) {\n        //console.log(this);\n        if(!this.parsedQuery)\n            this.parsedQuery = this.parseQuery(this.query);\n        //console.log(parsedSearchQuery);\n        const queryStr = `https://www.food2fork.com/api/search?key=${_helper__WEBPACK_IMPORTED_MODULE_0__[\"API_KEY\"]}&q=${this.parsedQuery}&page=${pageNum}`;\n        console.log(\"getResults(): URL\", queryStr);\n        // perform api call\n        fetch(queryStr).then((response) => {\n            return response.json();\n        }).then( (data) => {\n           this.data = data;\n           callback(this.data);\n        });\n    }\n    \n    \n}\n\n//# sourceURL=webpack:///./app/js/models/Search.js?");

/***/ }),

/***/ "./app/js/views/CardView.js":
/*!**********************************!*\
  !*** ./app/js/views/CardView.js ***!
  \**********************************/
/*! exports provided: getCardId, highlightCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCardId\", function() { return getCardId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highlightCard\", function() { return highlightCard; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./app/js/views/base.js\");\n\n\nconst getCardId = (cardElem) => {\n    return cardElem.getAttribute('data-id');\n};\n\nconst highlightCard = (cardElem) => {\n     // remove previously highlighted class\n     const prevCard = document.querySelector(`.${_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMClassNames\"].searchCardSelected}`);\n    \n     // reset previous card settings\n     if(prevCard) {\n         prevCard.classList.toggle(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMClassNames\"].searchCardSelected);\n         prevCard.style.order = 0;\n         prevCard.parentNode.style.order = 0;\n     }\n         \n    \n    cardElem.classList.toggle(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMClassNames\"].searchCardSelected);\n    \n    // push to top\n    cardElem.style.order = -1;\n    cardElem.parentNode.style.order = -1;\n};\n\n//# sourceURL=webpack:///./app/js/views/CardView.js?");

/***/ }),

/***/ "./app/js/views/RecipeView.js":
/*!************************************!*\
  !*** ./app/js/views/RecipeView.js ***!
  \************************************/
/*! exports provided: displayRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayRecipe\", function() { return displayRecipe; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./app/js/views/base.js\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ \"./app/js/helper.js\");\n\n\n\n\nconst populateIngredients = (ing) => {\n    // clearList\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeIngredientsList.innerHTML = \"\";\n    ing.forEach((e) => {\n        const listMarkup = `<li class=\"recipe-ingredients__item\">\n                                <i class=\"icon ion-md-star\"></i>\n                                ${e}</li>`;\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeIngredientsList.insertAdjacentHTML('beforeend', listMarkup);\n    });\n};\n\nconst setRecipeData = (recipeData) => {\n    //console.log(recipeData);\n    // set id \n    _helper__WEBPACK_IMPORTED_MODULE_1__[\"setElemAttribute\"](_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeInfo, 'data-id', recipeData.recipe_id);\n    //\n    _helper__WEBPACK_IMPORTED_MODULE_1__[\"setElemAttribute\"](_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeImage, 'src', recipeData.image_url);\n\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeTitle.innerHTML = recipeData.title;\n\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipePublisher.innerHTML = recipeData.publisher;\n\n    _helper__WEBPACK_IMPORTED_MODULE_1__[\"setElemAttribute\"](_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeURL, 'href', recipeData.source_url);\n    \n    populateIngredients(recipeData.ingredients);\n};\n\n\nconst displayRecipe = (recipeData) => {\n    // set to 0 \n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeInfo.style.padding = '0';\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeInfo.style.height = '1px';\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeInfo.style.opacity = '0';\n    \n    console.log(recipeData);\n    setRecipeData(recipeData);\n    \n    // make container visibile\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeInfo.style.padding = '2.5rem';\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeInfo.style.height = '40rem';\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].recipeInfo.style.opacity = '1';\n};\n\n//# sourceURL=webpack:///./app/js/views/RecipeView.js?");

/***/ }),

/***/ "./app/js/views/SearchView.js":
/*!************************************!*\
  !*** ./app/js/views/SearchView.js ***!
  \************************************/
/*! exports provided: getSearchInput, clearResults, displayResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchInput\", function() { return getSearchInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearResults\", function() { return clearResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayResults\", function() { return displayResults; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./app/js/views/base.js\");\n\n\n\n// Returns non empty string entered in the search box\nconst getSearchInput = () => {\n    const searchInputStr = _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchInput.value;\n    \n    if(searchInputStr) // nonempty\n        return searchInputStr;\n};\n\nconst createSearchCard = (cardId, cardTitle, cardImg) => {\n    //console.log(cardId, cardTitle, cardImg);\n    const cardMarkup = `<div class=\"search-card\" data-id=\"${cardId}\">\n                            <h2 class=\"search-card__title\">${cardTitle}</h2>\n                            <img class=\"search-card__img\" src=\"${cardImg}\" />\n                        </div>`;\n    return cardMarkup;\n}\n\nconst clearResults = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchResultsBox.innerHTML = \"\";\n};\n\nconst displayResults = (results) => {\n    // clear Results \n    //console.log(\"Results: \", results);\n    const recipeList = results.recipes;\n    results.recipes.forEach((recipe, idx) => {\n        const cardMarkup = createSearchCard(recipe.recipe_id, recipe.title, recipe.image_url);\n        \n        // after 3 entries , fill the next row\n        if(idx%3 == 0) {\n            // insert new row\n            const rowMarkup = '<div class=\"search-results\"></div>';\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].searchResultsBox.insertAdjacentHTML('beforeend', rowMarkup);\n        }\n        \n        const resultRows = document.querySelectorAll(_base__WEBPACK_IMPORTED_MODULE_0__[\"DOMStrings\"].searchResults);\n        const lastRow = resultRows[resultRows.length - 1];\n        lastRow.insertAdjacentHTML('beforeend', cardMarkup);\n    });\n}\n\n//# sourceURL=webpack:///./app/js/views/SearchView.js?");

/***/ }),

/***/ "./app/js/views/base.js":
/*!******************************!*\
  !*** ./app/js/views/base.js ***!
  \******************************/
/*! exports provided: elements, DOMStrings, DOMClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMStrings\", function() { return DOMStrings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMClassNames\", function() { return DOMClassNames; });\nconst elements = {\n  searchInput: document.querySelector('.search__input'),\n  searchButton: document.querySelector('#search-btn'),\n  mainContainer: document.querySelector('.main-container'),\n  appBox: document.querySelector('.app-box'),\n  searchResultsBox: document.querySelector('.search-results-box'),\n  searchCard: document.querySelector('.search-card'),\n  recipeInfo: document.querySelector('.recipe-info'),\n  recipeImage: document.querySelector('.recipe-body__graphic-img'),\n  recipeTitle: document.querySelector('.recipe-header__title'),\n  recipePublisher: document.querySelector('.recipe-header__publisher'),\n  recipeIngredientsList: document.querySelector('.recipe-ingredients__list'),\n  recipeURL: document.querySelector('.recipe-srcurl')\n};\n\nconst DOMStrings = {\n  searchResults: '.search-results',\n  searchCard: '.search-card',\n  searchCardSelected: '.search-card--selected',\n  searchCardTitle: '.search-card__title',\n  searchCardImage: '.search-card__img'\n};\n\nconst DOMClassNames = {\n  searchCard: 'search-card',\n  searchCardSelected: 'search-card--selected',\n  searchCardTitle: 'search-card__title',\n  searchCardImage: 'search-card__img'\n};\n\n//# sourceURL=webpack:///./app/js/views/base.js?");

/***/ })

/******/ });