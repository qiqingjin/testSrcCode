/*
* @Author: Cynthia
* @Date:   2017-03-06 14:51:16
* @Last Modified by:   Cynthia
* @Last Modified time: 2017-05-15 19:46:25
*/

'use strict';

// require('./src/bundle_require.js');
require('./src/style/index.less');
let tpl = require('./src/loaders/test.tpl.html');

// require.ensure
/*require('./src/tapable/testTapable.js');
let Temp = require.ensure('./src/plugins/temp.js', function(){
	console.log('temp is loaded');
}, 'temp');
let temp = new Temp();
console.log('temp is resolved');*/