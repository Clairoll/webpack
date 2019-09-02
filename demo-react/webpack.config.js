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
            }
        ]
    }
}