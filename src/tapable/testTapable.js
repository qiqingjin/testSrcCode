/*
* @Author: Cynthia
* @Date:   2017-05-02 21:26:36
* @Last Modified by:   Cynthia
* @Last Modified time: 2017-05-03 21:28:52
*/

'use strict';
var Tapable = require('./Tapable.js');
var tapable = new Tapable();
tapable._plugins = {
	"something": [
		function(a, cb){
			setTimeout(()=>{
              console.log('1', a);
              cb();
            },1500);
		},
		function(a, cb){
			setTimeout(()=>{
              console.log('2', a);
              //出现错误
              cb(new Error('error message'));
            },1000);
		},
		function(a, cb){
			setTimeout(()=>{
              console.log('3', a);
              cb();
            },500);
		}
	],
	"anything": [
		function(a, cb){
			console.log('1', a);
			let b = a+1;
			cb();
			return b;
		},
		function(a, cb){
			console.log('2', a);
			let b = a+1;
			cb();
			return b;
		},
		function(a, cb){
			console.log('3', a);
			let b = a+1;
			cb();
			return b;
		}
	]
}
//applyPluginsWaterfall
tapable. applyPluginsWaterfall('anything', 0, function(){console.log('end');});

// applyPluginsParallel
//tapable. applyPluginsParallel('something', ' applyPluginsParallel', function(){console.log('end');});

// applyPluginsAsync
//tapable.applyPluginsAsync('something', 'applyPluginsAsync', function(){console.log('end');});