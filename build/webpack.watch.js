const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConf = require('./webpack.base')

const config = merge(baseConf, {
  mode: 'development',
  entry: './examples/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/template/index.html'
    })
  ]
})

module.exports = config
