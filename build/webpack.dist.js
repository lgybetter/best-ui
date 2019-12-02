const merge = require('webpack-merge')
const baseConf = require('./webpack.base')

const config = merge(baseConf, {
  mode: 'production',
  entry: './src/index.js'
})

module.exports = config
