/*
* @Author: Cynthia
* @Date:   2017-05-07 13:57:30
* @Last Modified by:   Cynthia
* @Last Modified time: 2017-05-07 16:18:10
*/

'use strict';

function HTMLPlugin(){

}

HTMLPlugin.prototype.apply = function(compiler){
	compiler.plugin('emit', function(compilation, callback){
		compilation.chunks.forEach(function(chunk){
			console.log('chunk.name', chunk.name);
			console.log('======================================================');
			//console.log('chunk.modules', chunk.modules.length);

			chunk.modules.forEach(function(module){
				console.log('module', module.resource);
				module.fileDependencies.forEach(function(filepath){
					//console.log('filepath', filepath);
				});
			});

			chunk.files.forEach(function(filename){
				let source = compilation.assets[filename].source();
				//console.log('file', source);
			})
		});

		callback();
	});
}

module.exports = HTMLPlugin;