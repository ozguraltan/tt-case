const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isProduction = process.env.NODE_ENV === 'production';
const path = require('path')
let config = {
  mode: isProduction ? 'production' : 'development',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['*', '.js', '.vue', '.json']
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
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};



module.exports = config;
