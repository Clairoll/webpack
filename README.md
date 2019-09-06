# webpack 学习记录文档

## 一、安装

### 前提条件

确认自己装了最新版的<a herf="https://nodejs.org/en/">node.js</a>，写此篇文档时我所用的node版本为`v10.15.1`，webpack版本为`v4.39.3`，webpack-cli的版本为`v3.3.7`

### 安装webpack

#### 第一步：初始化项目

使用`npm init -y `初始化项目生成package.json文件

<img src="./images/init.png"/>

#### 第二步: 下载

使用`npm i webpack webpack-cli —save` 下载

#### 第三步: 修改package.json文件

```json
{
  "name": "mywebpack",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "webpack": "^4.39.3",
    "webpack-cli": "^3.3.7"
  },
  "devDependencies": {},
  "description": ""
}

```

#### 第四步: 入口以及输出配置webpack

在package.json 的同级目录下创建webpack.config.js文件

```javascript
const path = require('path')
module.exports = {
    // 入口文件
    entry: {
        index:'./src/main.js'
    },
    // 输出文件
    output: {
        filename:'build.js',
        path:path.join(__dirname,'/dist') // 输出文件路径
    }
}
```

运行 `npm run build`就可以使用webpack进行打包了



## 二、webpack配置

### 加载css

使用`npm i css-loader style-loader` ，具体可以看案例<a href="./demo-css">demo-css</a>

webpack配置

```javascript
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

```





