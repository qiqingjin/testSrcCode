/*
* @Author: Cynthia
* @Date:   2017-05-02 21:26:36
* @Last Modified by:   Cynthia
* @Last Modified time: 2017-05-03 12:39:03
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
              cb();
            },1000);
		},
		function(a, cb){
			setTimeout(()=>{
              console.log('3', a);
              cb();
            },500);
		}
	]
}

// applyPluginsAsync
tapable.applyPluginsAsync('something', 'applyPluginsAsync', function(){console.log('end');});