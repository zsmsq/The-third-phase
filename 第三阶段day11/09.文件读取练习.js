let fs = require('fs')


// // 读取文件
// fs.readFile('C:\\Windows/Boot\\BootDebuggerFiles.ini',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })

let result = fs.readFileSync('C:\\Windows\\addins\\FXSEXT.ecf').toString()
console.log(result)