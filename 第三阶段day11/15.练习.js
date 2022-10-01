// project
//      css   img   js
//      css  --- index.css 
//      img  --- logo.png
//       js  ---- index.js
//      project  --- index.html

// 同步
// let fs = require('fs')
// // 创建project文件夹
// fs.mkdirSync(__dirname + '/project')
// // 创建文件夹 css img js
// fs.mkdirSync(__dirname + '/project/css')
// fs.mkdirSync(__dirname + '/project/js')
// fs.mkdirSync(__dirname + '/project/img')
// // 创建文件 index.html
// fs.writeFileSync(__dirname + '/project/index.html','')
// // 创建文件 index.js logo.png index.css
// fs.writeFileSync(__dirname + '/project/css/index.css','')
// fs.writeFileSync(__dirname + '/project/js/index.js','')
// fs.writeFileSync(__dirname + '/project/img/logo.png','')

// 异步
// 回调函数 嵌套 回调函数 ：回调地狱  --- promise

let fs = require('fs')
// 创建project文件夹
fs.mkdir(__dirname + '/project',err=>{
    if(err) throw err;
    // 创建文件夹 css img js
    fs.mkdir(__dirname + '/project/css',err=>{
        if(err) throw err;
        // 创建文件 index.css
        fs.writeFile(__dirname + '/project/css/index.css','',err=>{
            if(err) throw err;
        })
    })
    fs.mkdir(__dirname + '/project/js',err=>{
        if(err) throw err;
        // 创建文件 index.js 
        fs.writeFile(__dirname + '/project/js/index.js','',err=>{
            if(err) throw err;
        })
    })
    fs.mkdir(__dirname + '/project/img',err=>{
        if(err) throw err;
        // 创建文件 logo.png
        fs.writeFile(__dirname + '/project/img/logo.png','',err=>{
            if(err) throw err;
        })
    })
    // 创建index.html文件
    fs.writeFile(__dirname + '/project/index.html','',err=>{
        if(err) throw err;
    })
})

