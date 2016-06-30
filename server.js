const express = require('express');
const app = express();
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const compiler = require('webpack')(require('./webpack.config'));
app.use(devMiddleware(compiler, {
	publicPath: '/dist'
}));
app.use(hotMiddleware(compiler));

const publicRoutes = ['/', '/heavy', '/boring'];
app.get(publicRoutes, (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(process.env.PORT || 8080, () => console.info('server is up'));