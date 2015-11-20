var path = require('path');
var webpack = require('webpack');
var config = {
  devtool: 'eval',
  entry: [
     'webpack-hot-middleware/client',
    'bootstrap-sass!./src/bootstrap-sass.config.js',
     path.resolve(__dirname, 'src/main.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      //JSX
      { test: /\.js?$/,
        loader:  'babel',
        include: path.join(__dirname, 'src'),
        query: {
                stage: 0,
                plugins: ['react-transform'],
                extra: {
                "react-transform": {
                  "transforms": [{
                      "transform": "react-transform-hmr",
                      "imports": ["react"],
                      "locals": ["module"]
                  }, {
                      "transform": "react-transform-catch-errors",
                      "imports": ["react", "redbox-react"]
                  }]
                }
            }
        }
      },
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


