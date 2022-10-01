let ejs = require('ejs')
let fs = require('fs')

// 准备数据
let title = '标题'
let arr = ['aaa','bbb','ccc']

let fileRes = fs.readFileSync('./index.html').toString();

let result = ejs.render(fileRes,{title,arr})
console.log(result)
// <% %>   js的语法语句
// <%= %>   具体的值