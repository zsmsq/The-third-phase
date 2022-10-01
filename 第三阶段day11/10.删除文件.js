// 1.引入 fs 模块
let fs = require('fs')

// 注意：测试只能测试一次

// 2.删除方法
// 参数1：路径 （相对路径 绝对路径）
// 参数2：回调函数 
// fs.unlink('./01.复习.mp4',err=>{
//     if(err) throw err;
//     console.log('删除成功')
// })

// 同步
fs.unlinkSync('./admin.txt')