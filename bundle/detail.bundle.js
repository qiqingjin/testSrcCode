/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bundle";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Cynthia
	* @Date:   2017-05-07 14:04:29
	* @Last Modified by:   Cynthia
	* @Last Modified time: 2017-05-07 14:20:50
	*/

	'use strict';

	__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/*
	* @Author: Claire
	* @Date:   2017-03-06 13:23:38
	* @Last Modified by:   Cynthia
	* @Last Modified time: 2017-03-06 15:03:15
	*/

	'use strict';

	/*(function(a){
		console.log(a.name);
	})
	({name: 'hello'})*/

	console.log('success');

/***/ })
/******/ ]);