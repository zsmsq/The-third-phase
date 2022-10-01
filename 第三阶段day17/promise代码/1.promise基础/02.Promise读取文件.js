//读取 resource 文件夹 中的一个文件
// 之前方法
// let fs = require('fs')
// fs.readFile('./resource/1.html',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })

// 使用promise
let fs = require('fs')
// 1.创建 promise实例对象
let p = new Promise((resolve,reject)=>{
    // 2.处理异步语句
    fs.readFile('./resource/1.html',(err,data)=>{
        // 3.调用成功和失败的回调函数
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })

})
// 4.处理成功和失败的结果
p.then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})