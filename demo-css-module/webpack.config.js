const path = require("path");
module.exports = {
  entry: {
    index: "./src/main.jsx"
  },
  output: {
    filename: "build.js",
    path: path.join(__dirname, "/dist") // 输出文件路径
  },
  module: {
    rules: [
        {
            test:/\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',   //.jsx文件使用babel处理
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
        }
    ]
  }
};
