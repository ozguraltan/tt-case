const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const isProduction = process.env.NODE_ENV === 'production';
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpackConfig = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const config = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: './src/main.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)([\?]?.*)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new VuetifyLoaderPlugin(),
  ]
}
module.exports = config
