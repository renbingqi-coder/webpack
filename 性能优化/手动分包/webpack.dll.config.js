/*
 * @Author: your name
 * @Date: 2021-11-25 11:20:04
 * @LastEditTime: 2021-11-25 15:53:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /未命名文件夹/webpack/性能优化/手动分包/webpack.dll.config.js
 */
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    jquery: ["jquery"],
    lodash: ["lodash"]
  },
  output: {
    filename: "dll/[name].js",
    library: "[name]" // 每个bundle暴露的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      // 导出的dll文件名
      path: path.resolve(__dirname, "dll", "[name].manifest.json"),
      // 对应的全局变量名
      name: "[name]"
    })
  ]
};
