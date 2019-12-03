const merge = require('webpack-merge')
const baseConf = require('./webpack.base')
const { resolve } = require('./utils/resolve')

const config = merge(baseConf, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: 'best-ui.min.js',
    libraryTarget: 'umd'
  }
})

module.exports = config
