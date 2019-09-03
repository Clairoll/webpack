const path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口文件
  entry: {
    index: "./src/main.js"
  },
  // 输出文件
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist") // 输出文件路径
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=8192"
      } //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
    ]
  },
  plugins: [
      // 打包的时候生成html
    new HtmlwebpackPlugin({
      title: "Webpack-demos"
    })
  ]
};
