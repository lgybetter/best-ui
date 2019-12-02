const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('./utils/resolve')

module.exports = {
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': resolve('examples'),
      '~': resolve('packages'),
      src: resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=eslint',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=babel'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            js: 'happypack/loader?id=babel'
          }
        }
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'eslint',
      loaders: [{
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }],
      verbose: false,
      threadPool: happyThreadPool
    }),
    new HappyPack({
      id: 'babel',
      loaders: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }],
      verbose: false,
      threadPool: happyThreadPool
    }),
    new VueLoaderPlugin()
  ]
}
