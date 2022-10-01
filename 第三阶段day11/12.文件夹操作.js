// 1.引入 fs 模块
let fs = require('fs')


// 创建文件夹  --- 只能测试一次
// 参数1：路径+文件夹名
// 参数2：回调函数
// fs.mkdir('./新建文件夹',err=>{
//     if(err) throw err;
//     console.log('成功')
// })
// fs.mkdirSync('./aaa')


// 读取文件夹
// 参数1：路径
// 参数2：回调函数
// fs.readdir('./aaa',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// fs.readdir('./',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// 删除文件夹   只能测试一次
// 参数1：路径
// 参数2：回调函数

// 如果是空文件件，会直接删除
// 如果非空文件件，需要设置特殊参数 ，参数2：可选项  {recursive:true}


// fs.rmdir('./aaa',err=>{
//     if(err) throw err;
//     console.log('删除成功')
// })

fs.rmdir('./abc',{recursive:true},err=>{
    if(err) throw err;
    console.log('删除成功')
})