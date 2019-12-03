const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('./utils/resolve')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '@': resolve(process.cwd(), 'examples'),
      '~': resolve(process.cwd(), 'packages'),
      src: resolve(process.cwd(), 'src')
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
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
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}
