const webpack = require('webpack')

module.exports = {
  mode: 'development',

  entry: ['react-hot-loader/patch', process.cwd() + '/src/index.js'],

  output: {
    path: process.cwd() + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: process.cwd() + '/dist',
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-react']
        }
      }
    ]
  }
}
