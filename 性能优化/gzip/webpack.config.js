/*
 * @Author: your name
 * @Date: 2021-11-25 11:35:53
 * @LastEditTime: 2021-11-25 13:12:54
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /未命名文件夹/webpack/性能优化/gzip/webpack.config.js
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CmpressionWebpackPlugin = require("compression-webpack-plugin")
module.exports = {
  mode: "production",
  optimization: {
    // splitChunks: {
    //   chunks: "all"
    // }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CmpressionWebpackPlugin({
      test: /\.js/,
      minRatio: 0.5
    })
  ]
};
