const path = require("path");
module.exports = {
  entry: {
    index: "./src/main.js"
  },
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist") // 输出文件路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      } //.css 文件使用 style-loader 和 css-loader 来处理
    ]
  }
};
