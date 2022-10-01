// 相对路径 
//      ./  当前文件所在的文件夹
//      ../  当前文件所在的文件夹的上一层

// 绝对路径
//      D:/course/work

// nodejs fs模块相对路径有点不一样
// ./    当前命令行的工作目录
// ../   当前命令行的工作目录的上层


// 由于每一个习惯不一样，直接书写相对路径不好，因为产生文件的位置可能不一样
// let fs = require('fs')
// fs.writeFile('../444.html','',err=>{
//     if(err) throw err;
//     console.log('成功')
// })

// 直接书写绝对路径，更不行
// let fs = require('fs')
// fs.writeFile('D:/course/work/666.html','',err=>{
//     if(err) throw err;
//     console.log('成功')
// })

// nodejs fs模块提供了一个 相对灵活的绝对路径
// __dirname : 当前文件所在文件夹的绝对路径
// 通过 字符串 拼串的形式，给我们搞一个 完整的 灵活的 绝对路径

// D:\course\work\09-fs操作 
// console.log(__dirname)

//  D:\course\work\09-fs操作/000.html 
let fs = require('fs')
fs.writeFile(__dirname + '\\000.html','',(err)=>{
    if(err) throw err;
    console.log('成功了')
})












