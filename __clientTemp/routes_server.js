
var manifest = {"jsChunksByName":{"Homepage":"Homepage.bundle.js","common":"common.bundle.js"},"jsChunksById":{"0":"Homepage.bundle.js","1":"common.bundle.js"},"cssChunksByName":{},"hash":"37ea13d1f71d92f7febd"};
function unwrapEs6Module(module) { return module.__esModule ? module.default : module }
var coreJsMiddleware = require("E:\\Projects\\Sloths\\randomsloths\\node_modules\\react-server-core-middleware\\index.js").coreJsMiddleware;
var coreCssMiddleware = require("E:\\Projects\\Sloths\\randomsloths\\node_modules\\react-server-core-middleware\\index.js").coreCssMiddleware;
module.exports = {
	middleware:[
		coreJsMiddleware("//0.0.0.0:3001/", manifest),
		coreCssMiddleware("//0.0.0.0:3001/", manifest),
		
	],
	routes:{
		Homepage: {
			path: "/",
			method: undefined,
			page: {
				default: function() {
					return {
						done: function(cb) {
							try {
								cb(unwrapEs6Module(require("..\\pages\\hello-world.js")));
							} catch (e) {
								console.error('Failed to load page at "..\\pages\\hello-world.js"', e.stack);
							}
						}
					};
				},
			},
		},
	}
};