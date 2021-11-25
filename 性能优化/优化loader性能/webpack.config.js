/*
 * @Author: your name
 * @Date: 2021-11-25 11:34:11
 * @LastEditTime: 2021-11-25 13:48:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /未命名文件夹/webpack/性能优化/优化loader性能/webpack.config.js
 */
module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // {
          //   loader: "cache-loader",
          //   options:{
          //     cacheDirectory: "./cache"
          //   }
          // },
          "thread-loader",
          "babel-loader"
        ]
      }
    ]
  }
};
