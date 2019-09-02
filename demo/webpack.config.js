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