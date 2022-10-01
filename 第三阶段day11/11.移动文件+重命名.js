// 1.引入 fs 模块
let fs = require('fs')

// 只能测试一次

// 重命名
// 参数1：原名字/原路径
// 参数2: 新名字/新路径
// 参数3：回调函数
// fs.rename('./index.html','./666.html',err=>{
//     if(err) throw err;
//     console.log('成功')
// })

// 移动文件
// fs.rename('./666.html','./abc/666.html',(err)=>{
//     if(err) throw err;
//     console.log('成功')
// })

// 移动文件 + 重命名
// fs.rename('./abc/666.html','./999.html',(err)=>{
//     if(err) throw err;
// })

// 同步
fs.renameSync('./admin.html','./abc/a.html')