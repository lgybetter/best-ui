const webpack = require('webpack')
const config = require('../webpack.dist')

const compiler = webpack(config)

compiler.run(function (err, stats) {
  if (err) {
    return console.error(err)
  }
  console.log('webpack compiler done!')
})
