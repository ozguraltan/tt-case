const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const sass = require('sass')
const fibers = require('fibers')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const baseConfig = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
let config = merge(baseConfig, {
  entry: {
    'main': './src/main.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[contenthash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]'
              }
            }
          }
        ]
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^8.0.0
            options: {
              implementation: sass,
              sassOptions: {
                indentedSyntax: true // optional
              },
              prependData: "@import '@/scss/variables.scss'"
            }
          }
        ]
      }
    ]
  }
})

if (!isProduction) {
  config = merge(config, {
    output: {
      filename: '[name].js',
      publicPath: 'http://localhost:9998/dist'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve('./src/index.html')
      }),
      new VuetifyLoaderPlugin()
    ],
    devtool: 'source-map',
    devServer: {
      writeToDisk: true,
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:9998/dist',
      hot: true,
      inline: true,
      historyApiFallback: true,
      port: 9998,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  })
} else {
  config = merge(config, {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
              return `vendor.${packageName.replace('@', '')}`
            }
          }
        }
      },
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve('./src/index.html'),
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        })
      ]
    },
    plugins: [
      new TerserPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contentHash].css'
      }),
      new VuetifyLoaderPlugin()
    ]
  })
}

module.exports = config
