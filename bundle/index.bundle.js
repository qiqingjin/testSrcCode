/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"2":"temp"}[chunkId]||chunkId) + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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
	* @Date:   2017-03-06 14:51:16
	* @Last Modified by:   Cynthia
	* @Last Modified time: 2017-05-07 15:46:57
	*/

	'use strict';

	//require('./src/bundle_require.js');

	__webpack_require__(2);
	var Temp = __webpack_require__.e/* nsure */(2, function () {
		console.log('temp is loaded');
	});
	var temp = new Temp();
	console.log('temp is resolved');

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	* @Author: Cynthia
	* @Date:   2017-05-02 21:26:36
	* @Last Modified by:   Cynthia
	* @Last Modified time: 2017-05-03 21:28:52
	*/

	'use strict';

	var Tapable = __webpack_require__(3);
	var tapable = new Tapable();
	tapable._plugins = {
		"something": [function (a, cb) {
			setTimeout(function () {
				console.log('1', a);
				cb();
			}, 1500);
		}, function (a, cb) {
			setTimeout(function () {
				console.log('2', a);
				//出现错误
				cb(new Error('error message'));
			}, 1000);
		}, function (a, cb) {
			setTimeout(function () {
				console.log('3', a);
				cb();
			}, 500);
		}],
		"anything": [function (a, cb) {
			console.log('1', a);
			var b = a + 1;
			cb();
			return b;
		}, function (a, cb) {
			console.log('2', a);
			var b = a + 1;
			cb();
			return b;
		}, function (a, cb) {
			console.log('3', a);
			var b = a + 1;
			cb();
			return b;
		}]
	};
	//applyPluginsWaterfall
	tapable.applyPluginsWaterfall('anything', 0, function () {
		console.log('end');
	});

	// applyPluginsParallel
	//tapable. applyPluginsParallel('something', ' applyPluginsParallel', function(){console.log('end');});

	// applyPluginsAsync
	//tapable.applyPluginsAsync('something', 'applyPluginsAsync', function(){console.log('end');});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/

	// polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	// using the polyfill specifically to avoid the call to `Object.defineProperty` for performance reasons
	function fastFilter(fun /*, thisArg*/) {
		'use strict';

		if (this === void 0 || this === null) {
			throw new TypeError();
		}

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== 'function') {
			throw new TypeError();
		}

		var res = [];
		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		for (var i = 0; i < len; i++) {
			if (i in t) {
				var val = t[i];

				// NOTE: Technically this should Object.defineProperty at
				//       the next index, as push can be affected by
				//       properties on Object.prototype and Array.prototype.
				//       But that method's new, and collisions should be
				//       rare, so use the more-compatible alternative.
				if (fun.call(thisArg, val, i, t)) {
					res.push(val);
				}
			}
		}

		return res;
	}

	function Tapable() {
		this._plugins = {};
	}
	module.exports = Tapable;

	function copyProperties(from, to) {
		for (var key in from) {
			to[key] = from[key];
		}return to;
	}

	Tapable.mixin = function mixinTapable(pt) {
		copyProperties(Tapable.prototype, pt);
	};

	Tapable.prototype.applyPlugins = function applyPlugins(name) {
		if (!this._plugins[name]) return;
		var args = Array.prototype.slice.call(arguments, 1);
		var plugins = this._plugins[name];
		for (var i = 0; i < plugins.length; i++) {
			plugins[i].apply(this, args);
		}
	};

	Tapable.prototype.applyPlugins0 = function applyPlugins0(name) {
		var plugins = this._plugins[name];
		if (!plugins) return;
		for (var i = 0; i < plugins.length; i++) {
			plugins[i].call(this);
		}
	};

	Tapable.prototype.applyPlugins1 = function applyPlugins1(name, param) {
		var plugins = this._plugins[name];
		if (!plugins) return;
		for (var i = 0; i < plugins.length; i++) {
			plugins[i].call(this, param);
		}
	};

	Tapable.prototype.applyPlugins2 = function applyPlugins2(name, param1, param2) {
		var plugins = this._plugins[name];
		if (!plugins) return;
		for (var i = 0; i < plugins.length; i++) {
			plugins[i].call(this, param1, param2);
		}
	};

	Tapable.prototype.applyPluginsWaterfall = function applyPluginsWaterfall(name, init) {
		if (!this._plugins[name]) return init;
		var args = Array.prototype.slice.call(arguments, 2);
		var plugins = this._plugins[name];
		var current = init;
		for (var i = 0; i < plugins.length; i++) {
			current = plugins[i].apply(this, [current].concat(args));
		}return current;
	};

	Tapable.prototype.applyPluginsWaterfall0 = function applyPluginsWaterfall0(name, init) {
		var plugins = this._plugins[name];
		if (!plugins) return init;
		var current = init;
		for (var i = 0; i < plugins.length; i++) {
			current = plugins[i].call(this, current);
		}return current;
	};

	Tapable.prototype.applyPluginsBailResult = function applyPluginsBailResult(name) {
		if (!this._plugins[name]) return;
		var args = Array.prototype.slice.call(arguments, 1);
		var plugins = this._plugins[name];
		for (var i = 0; i < plugins.length; i++) {
			var result = plugins[i].apply(this, args);
			if (typeof result !== "undefined") {
				return result;
			}
		}
	};

	Tapable.prototype.applyPluginsBailResult1 = function applyPluginsBailResult1(name, param) {
		if (!this._plugins[name]) return;
		var plugins = this._plugins[name];
		for (var i = 0; i < plugins.length; i++) {
			var result = plugins[i].call(this, param);
			if (typeof result !== "undefined") {
				return result;
			}
		}
	};

	Tapable.prototype.applyPluginsAsyncSeries = Tapable.prototype.applyPluginsAsync = function applyPluginsAsyncSeries(name) {
		var args = Array.prototype.slice.call(arguments, 1);
		var callback = args.pop();
		var plugins = this._plugins[name];
		if (!plugins || plugins.length === 0) return callback();
		var i = 0;
		var _this = this;
		args.push(copyProperties(callback, function next(err) {
			if (err) return callback(err);
			i++;
			if (i >= plugins.length) {
				return callback();
			}
			plugins[i].apply(_this, args);
		}));
		plugins[0].apply(this, args);
	};

	Tapable.prototype.applyPluginsAsyncSeries1 = function applyPluginsAsyncSeries1(name, param, callback) {
		var plugins = this._plugins[name];
		if (!plugins || plugins.length === 0) return callback();
		var i = 0;
		var _this = this;
		var innerCallback = copyProperties(callback, function next(err) {
			if (err) return callback(err);
			i++;
			if (i >= plugins.length) {
				return callback();
			}
			plugins[i].call(_this, param, innerCallback);
		});
		plugins[0].call(this, param, innerCallback);
	};

	Tapable.prototype.applyPluginsAsyncSeriesBailResult = function applyPluginsAsyncSeriesBailResult(name) {
		var args = Array.prototype.slice.call(arguments, 1);
		var callback = args.pop();
		if (!this._plugins[name] || this._plugins[name].length === 0) return callback();
		var plugins = this._plugins[name];
		var i = 0;
		var _this = this;
		args.push(copyProperties(callback, function next() {
			if (arguments.length > 0) return callback.apply(null, arguments);
			i++;
			if (i >= plugins.length) {
				return callback();
			}
			plugins[i].apply(_this, args);
		}));
		plugins[0].apply(this, args);
	};

	Tapable.prototype.applyPluginsAsyncSeriesBailResult1 = function applyPluginsAsyncSeriesBailResult1(name, param, callback) {
		var plugins = this._plugins[name];
		if (!plugins || plugins.length === 0) return callback();
		var i = 0;
		var _this = this;
		var innerCallback = copyProperties(callback, function next(err, result) {
			if (arguments.length > 0) return callback(err, result);
			i++;
			if (i >= plugins.length) {
				return callback();
			}
			plugins[i].call(_this, param, innerCallback);
		});
		plugins[0].call(this, param, innerCallback);
	};

	Tapable.prototype.applyPluginsAsyncWaterfall = function applyPluginsAsyncWaterfall(name, init, callback) {
		if (!this._plugins[name] || this._plugins[name].length === 0) return callback(null, init);
		var plugins = this._plugins[name];
		var i = 0;
		var _this = this;
		var next = copyProperties(callback, function (err, value) {
			if (err) return callback(err);
			i++;
			if (i >= plugins.length) {
				return callback(null, value);
			}
			plugins[i].call(_this, value, next);
		});
		plugins[0].call(this, init, next);
	};

	Tapable.prototype.applyPluginsParallel = function applyPluginsParallel(name) {
		var args = Array.prototype.slice.call(arguments, 1);
		var callback = args.pop();
		if (!this._plugins[name] || this._plugins[name].length === 0) return callback();
		var plugins = this._plugins[name];
		var remaining = plugins.length;
		args.push(copyProperties(callback, function (err) {
			if (remaining < 0) return; // ignore
			if (err) {
				remaining = -1;
				return callback(err);
			}
			remaining--;
			if (remaining === 0) {
				return callback();
			}
		}));
		for (var i = 0; i < plugins.length; i++) {
			plugins[i].apply(this, args);
			if (remaining < 0) return;
		}
	};

	Tapable.prototype.applyPluginsParallelBailResult = function applyPluginsParallelBailResult(name) {
		var args = Array.prototype.slice.call(arguments, 1);
		var callback = args[args.length - 1];
		if (!this._plugins[name] || this._plugins[name].length === 0) return callback();
		var plugins = this._plugins[name];
		var currentPos = plugins.length;
		var currentResult;
		var done = [];
		for (var i = 0; i < plugins.length; i++) {
			args[args.length - 1] = function (i) {
				return copyProperties(callback, function () {
					if (i >= currentPos) return; // ignore
					done.push(i);
					if (arguments.length > 0) {
						currentPos = i + 1;
						done = fastFilter.call(done, function (item) {
							return item <= i;
						});
						currentResult = Array.prototype.slice.call(arguments);
					}
					if (done.length === currentPos) {
						callback.apply(null, currentResult);
						currentPos = 0;
					}
				});
			}(i);
			plugins[i].apply(this, args);
		}
	};

	Tapable.prototype.applyPluginsParallelBailResult1 = function applyPluginsParallelBailResult1(name, param, callback) {
		var plugins = this._plugins[name];
		if (!plugins || plugins.length === 0) return callback();
		var currentPos = plugins.length;
		var currentResult;
		var done = [];
		for (var i = 0; i < plugins.length; i++) {
			var innerCallback = function (i) {
				return copyProperties(callback, function () {
					if (i >= currentPos) return; // ignore
					done.push(i);
					if (arguments.length > 0) {
						currentPos = i + 1;
						done = fastFilter.call(done, function (item) {
							return item <= i;
						});
						currentResult = Array.prototype.slice.call(arguments);
					}
					if (done.length === currentPos) {
						callback.apply(null, currentResult);
						currentPos = 0;
					}
				});
			}(i);
			plugins[i].call(this, param, innerCallback);
		}
	};

	Tapable.prototype.plugin = function plugin(name, fn) {
		if (Array.isArray(name)) {
			name.forEach(function (name) {
				this.plugin(name, fn);
			}, this);
			return;
		}
		if (!this._plugins[name]) this._plugins[name] = [fn];else this._plugins[name].push(fn);
	};

	Tapable.prototype.apply = function apply() {
		for (var i = 0; i < arguments.length; i++) {
			arguments[i].apply(this);
		}
	};

/***/ })
/******/ ]);