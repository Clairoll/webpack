var path = require("path");
var HtmlwebpackPlugin = require("html-webpack-plugin");
var {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/main.js",

  plugins: [
    // 每次打包清理dist文件夹，然后生成新的dist文件夹
    new CleanWebpackPlugin(),
    // 打包的时候生成html
    new HtmlwebpackPlugin({
      title: "Webpack-demos"
    })
  ],
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist")
  }
};
