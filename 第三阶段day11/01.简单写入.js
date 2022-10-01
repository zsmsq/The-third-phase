// 1.引入 fs 模块
let fs = require('fs')   //require 需求，需要

// 2.文件简单写入
// 参数1：路径 （相对路径 绝对路径）
// 参数2：书写内容
// 参数3：可选项
// 参数4：回调函数 , 形参err

// 相对路径
// fs.writeFile('./index.html','白日依山尽',err=>{
//     if(err){
//         console.log('书写失败')
//     }else{
//         console.log('成功')
//     }
// })

// 绝对路径
// fs.writeFile('D:\\course\\work\\app.html','内容',err=>{
//     if(err){
//         console.log('失败')
//     }else{
//         console.log('成功')
//     }
// })

fs.writeFile('D:/course/workkkk/app2.html','内容22',err=>{
    // err 
    // 如果写入动作成功 ， err 变成 null 
    // 如果写入动作失败 ， err 变成一个对象，对象里面记录错误
    if(err){
        // console.log('失败')
        console.log(err)
    }else{
        console.log('成功')
    }
})