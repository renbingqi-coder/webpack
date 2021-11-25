/*
 * @Author: your name
 * @Date: 2021-11-25 11:34:20
 * @LastEditTime: 2021-11-25 15:07:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /未命名文件夹/webpack/性能优化/热替换/webpack.config.js
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    hot: true
  },
  module:{
    rules:[
      {test:/\.css$/, use:["style-loader", "css-loader"]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
