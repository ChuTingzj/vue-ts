const webpack = require('webpack')
const path = require('path')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const common = require('./webpack.config.common')
const { merge } = require('webpack-merge')
module.exports = merge(common, {
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new EslintWebpackPlugin({
      fix: true,
      context: path.resolve(__dirname, '../src/'),
      cache: true,
      cacheLocation: path.resolve(__dirname, '../node_modules/.cache/eslint'),
      extensions: ['.vue', '.js', '.jsx', '.cjs', '.mjs', '.ts', '.tsx', '.cts', '.mts'],
      failOnWarning: false,
      failOnError: true,
      ignorePath: '.gitignore'
    }),
    new StylelintWebpackPlugin({
      context: path.resolve(__dirname, '../src/'),
      configFile: path.resolve(__dirname, '../stylelint.config.js'),
      fix: true,
      files: ['src/**/*.scss', 'src/**/*.css', 'src/**/*.sass']
    })
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
    host: '127.0.0.1'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ['\\.vue$'],
              happyPackMode: false
            }
          }
        ]
      },
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheCompression: false,
              cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/babel-loader')
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  }
})
