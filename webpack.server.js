const config = require('./webpack.config');

config.entry.app = [
		'webpack-dev-server/client?http://0.0.0.0:8080',
    	'webpack/hot/only-dev-server',
    	...config.entry.app
    ];

module.exports = config;	