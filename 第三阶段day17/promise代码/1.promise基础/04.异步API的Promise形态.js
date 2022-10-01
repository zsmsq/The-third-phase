/**
 * 作用: 读取文件的中的内容
 * 封装一个函数 mineReadFile
 * 参数        path 文件路径
 * 返回结果    Promise 对象
 */
// 封装函数
let fs = require('fs')
function mineReadFile(path){
    // 返回值：
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

// 使用封装函数
mineReadFile('./resource/2.html')
    .then(value=>{
        console.log(value.toString())
    },reason=>{
        console.log(reason)
    })