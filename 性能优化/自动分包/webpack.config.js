/*
 * @Author: your name
 * @Date: 2021-11-25 11:34:32
 * @LastEditTime: 2021-11-25 16:43:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /未命名文件夹/webpack/性能优化/自动分包/webpack.config.js
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  // 开发阶段一般不需要分包
  mode: "production",
  //入口
  entry: {
    index:'./src/index'
    // page1: "./src/page1",
    // page2: "./src/page2"
  },
  // 出口
  output: {
    filename: "[name].[hash:5].js"
  },
  // 公共代码启动一个新的chunk   分包策略是新建一个chunk 最终生成一个单独的bundle
  optimization: {
    // 分包策略
    splitChunks: {
      //分包配置
      chunks: "all",
      // maxSize: 60000,
      // automaticNameDelimiter: ".",
      minChunks: 1,
      minSize: 0,
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 1
        }
      }
    }
  },
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:5].css",
      chunkFilename: "common.[hash:5].css"
    }),
    new HtmlWebpackPlugin({
      template:"./public/index.html",
      chunks: ["page1"]
    })
  ],
  stats: {
    colors: true,
    chunks: false,
    modules: false
  }
};
