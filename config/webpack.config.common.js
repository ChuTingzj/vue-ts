const dotenv = require('dotenv')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const envFile = path.resolve(__dirname, `/.env.${process.env.NODE_ENV}`)
const result = dotenv.config({
  path: fs.existsSync(envFile) ? envFile : path.resolve(__dirname, '../.env.development')
})
if (result.error) throw result.error
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.ts')
  },
  output: {
    publicPath: '/',
    assetModuleFilename: 'images/[name].[hash:8][ext]',
    clean: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.ts', '.vue', '.tsx', '.jsx', '.d.ts', '...']
  },
  plugins: [
    new VueLoaderPlugin(),
    new CaseSensitivePathsWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
      filename: 'index.html',
      scriptLoading: 'defer',
      title: 'Chu-Ting'
    }),
    new ProgressBarPlugin({
      format: ` build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      process: {
        env: { ...result.parsed }
      }
    })
  ],
  module: {
    noParse: /^(vue|vue-router|pinia)$/,
    rules: [
      {
        oneOf: [
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            type: 'asset',
            generator: {
              filename: 'media/[name].[hash:8][ext]'
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
            type: 'asset',
            generator: {
              filename: 'fonts/[name].[hash:8][ext]'
            }
          },
          {
            test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024
              }
            }
          },
          {
            test: /\.(svg)(\?.*)?$/,
            type: 'asset/resource'
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/vue-loader'),
              cacheIdentifier: '15b08a76',
              babelParserPlugins: ['jsx']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      }
    ]
  }
}
