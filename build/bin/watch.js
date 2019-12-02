const webpack = require('webpack')
const config = require('../webpack.watch')
const middleware = require('webpack-dev-middleware')

const compiler = webpack(config)
const express = require('express')
const app = express()

app.use(
  middleware(compiler, {
  })
)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
