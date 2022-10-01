// 同步
// console.log(111)
// console.log(222)
// console.log(333)
// console.log(444)

// 同步 优先于 异步 先执行

// 异步
console.log(111)
setTimeout(function(){
    console.log(222)
})

// 同步
// let fs = require('fs')

// fs.writeFileSync('./1.html','')
// fs.writeFileSync('./2.html','')
// fs.writeFileSync('./3.html','')

// 异步
// let fs = require('fs')

// fs.writeFile('./1.html','',err=>{})
// fs.writeFile('./2.html','',err=>{})
// fs.writeFile('./3.html','',err=>{})

// 为啥会有异步呢？效率高