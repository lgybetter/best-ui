const merge = require('webpack-merge')
const baseConf = require('./webpack.base')
const { externals } = require('./config')
const { resolve } = require('./utils/resolve')

const components = require('../components.json')

const entrys = {}
Object.keys(components).forEach(component => {
  entrys[component] = components[component]
})

const config = merge(baseConf, {
  mode: 'production',
  entry: entrys,
  output: {
    path: resolve(process.cwd(), 'lib'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  externals
})

module.exports = config
