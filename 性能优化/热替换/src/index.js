/*
 * @Author: your name
 * @Date: 2021-11-25 11:34:20
 * @LastEditTime: 2021-11-25 15:08:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /未命名文件夹/webpack/性能优化/热替换/src/index.js
 */
import a from "./a";
// import "./index.css"
console.log(a,1);

if (module.hot) {
  // 是否开启了热更新
  module.hot.accept(); // 接受热更新
}
