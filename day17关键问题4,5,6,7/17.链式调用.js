//需求：读取 ./resource 中的三个文件 整理之和
//     打印的是 1-3.html 文件合并后的结果
// 之前的方法
// let fs = require('fs')
// fs.readFile('./resource/1.html',(err,data1)=>{
//     if(err) throw err;
//     fs.readFile('./resource/2.html',(err,data2)=>{
//         if(err) throw err;
//         fs.readFile('./resource/3.html',(err,data3)=>{
//             if(err) throw err;
//             console.log(data1 + data2 + data3)
//         })
//     })
// })

// 链式调用
let fs = require('fs')
let p = new Promise((resolve,reject)=>{
    fs.readFile('./resource/1.html',(err,data)=>{
        if(err){
            reject(err)
        }else{
            resolve(data) 
        }
    })
})
p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./resource/2.html',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve([value,data])
            }
        })
    })
})
.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./resource/3.html',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve([...value,data])
            }
        })
    })
})
.then(value=>{
    console.log(value.join(' '))
})
.catch(reason=>{
    console.log(reason)
})