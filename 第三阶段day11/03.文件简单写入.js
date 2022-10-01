// 1.引入 fs 模块
let fs = require('fs') 

// 2.简单文件写入    (writeFileSync  同步)  （writeFile 异步）
// 参数1：路径（相对路径，绝对路径）
// 参数2：书写的内容
// 参数3：可选项
// 没有回调函数
fs.writeFileSync('./admin.txt','')