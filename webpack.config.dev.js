var path = require('path');
var webpack = require('webpack');
var config = {
  devtool: 'eval',
  entry: [
     'webpack-hot-middleware/client',
     path.resolve(__dirname, 'src/main.js'),
    'bootstrap-sass!./src/bootstrap-sass.config.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      //JSX
      { test: /\.js?$/, loaders: [ 'babel'], include: path.join(__dirname, 'src') },
      { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.jpg?$/,    loader: "url?limit=10000&mimetype=application/jpeg" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;


