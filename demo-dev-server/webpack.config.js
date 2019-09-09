var path = require("path");
var HtmlwebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  },
  plugins: [
    // 打包的时候生成html
    new HtmlwebpackPlugin({
      title: "Webpack-demos"
    })
  ],
  // 服务
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    compress: true, // 启动压缩
    port: 9999,// 启动服务端口
    hot:true ,// 启动热加载
  }
};
