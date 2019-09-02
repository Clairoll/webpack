# webpack 配置

## 一、初步接触webpack

```javascript
const path = require('path')
module.exports = {
    // 入口文件
    entry: {
        index:'./demo/src/main.js'
    },
    // 输出文件
    output: {
        filename:'build.js',
        path:path.join(__dirname,'/demo/dist') // 输出文件路径
    }
}
```



