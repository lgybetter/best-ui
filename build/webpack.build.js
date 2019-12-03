const merge = require('webpack-merge')
const baseConf = require('./webpack.base')
const { externals } = require('./config')
const { resolve } = require('./utils/resolve')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = merge(baseConf, {
  mode: 'production',
  entry: resolve(process.cwd(), 'src', 'index.js'),
  output: {
    path: resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'best-ui.js',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  externals,
  plugins: [
    new CleanWebpackPlugin()
  ]
})

module.exports = config
