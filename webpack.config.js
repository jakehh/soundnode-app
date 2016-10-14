var path = require('path');
var source = path.resolve(__dirname, 'app/src');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  /** Entry points **/
  entry: [
    path.resolve(source, 'index.jsx')
  ],

  /** Bundled outputs **/
  output: {
    path: path.join(__dirname, './app/dist'),
    filename: "[name].js",
    publicPath: "/dist/"
  },


  module: {
    loaders: [
      {
        /** Compiles JSX Files **/
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2016',
            'stage-0', // this enable JS.next features in stage-0
            'react'
          ]
        }
      },
      {
        /** Compiles ES2017 to ES5 **/
        test: /\.js$/,
        loader: 'babel',
        query: {
          plugins: [
            'transform-decorators-legacy',
            'syntax-decorators',
            'transform-decorators',
            'transform-function-bind'
          ],
          presets: ['es2016', 'react']
        },
        exclude: /node_modules/
      },
      {
        /** Support importing .html templates **/
        test: /\.html$/,
        loader: 'html'
      },
      {
        /** Compiles SASS and then Import the Compiled CSS **/
        test: /\.scss$/,
        loader: ["style", "css?locals&sourceMap", "sass?sourceMap"]
      },

      {
        test: /\.svg$/,
        loader: 'svg-loader'
      }
    ]
  },

  /** Plugins **/
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ],

  /** Resolve extensions **/
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
