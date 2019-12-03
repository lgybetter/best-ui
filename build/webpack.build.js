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
    filename: 'index.js',
    library: 'BEST',
    libraryTarget: 'umd'
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
