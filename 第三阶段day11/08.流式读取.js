// 1.引入 fs 模块
let fs = require('fs')

// 2.创建读取流对象
let rs = fs.createReadStream('./index.html')  //参数：路径
// let rs = fs.createReadStream('./01.复习.mp4')

// 3.绑定 读取事件
rs.on('data', chunk =>{
    // chunk  一块儿 一堆儿 一坨儿
    // chunk 是 65536字节 byte = 64kb
    console.log(chunk.length)
})


// 事件介绍  ：open data end close
rs.on('open',()=>{
    console.log('在文件打开那一瞬间执行')
})
rs.on('end',()=>{
    console.log('文件读取动作完成那一瞬间执行')
})
rs.on('close',()=>{
    console.log('在文件关闭那一瞬间执行')
})