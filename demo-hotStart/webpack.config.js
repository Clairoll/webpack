var path = require("path");
var HtmlwebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
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
  // 热更新
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    port: 9999
  }
};
