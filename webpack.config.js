const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    context: __dirname + '/src',
    entry: {
        app: ['./index.js'],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('dist'),
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: [path.resolve('./src')], exclude: /node_modules/ },
            { test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
        ]
    },
    stylus: {
        use: [require('nib')()]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
};
