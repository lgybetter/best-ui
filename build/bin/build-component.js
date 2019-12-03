const webpack = require('webpack')
const config = require('../webpack.component')

const compiler = webpack(config)

compiler.run(function (err, stats) {
  if (err) {
    return console.error(err)
  }
})
