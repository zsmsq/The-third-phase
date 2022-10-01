// 1.引入 fs 模块
let fs = require('fs')

// 2.简单读取方法
// 参数1：路径 （相对路径，绝对路径）
// 参数2：回调函数   err,data
fs.readFile('./index.html',(err,data)=>{  //异步
    // if(err){
    //     console.log(err)
    // }else{
    //     console.log(data)
    // }
    if(err) throw err;
    console.log(data.toString())
})

// 同步
let result = fs.readFileSync('./admin.html')
console.log(result.toString())