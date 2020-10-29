const path = require('path')
const webpack = require("webpack")
const Autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  watch: true,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../../public/dist'),
    filename: 'app.bundle.[contenthash:8].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app-[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      filename: '../../views/index.hbs'
    })
  ],
};