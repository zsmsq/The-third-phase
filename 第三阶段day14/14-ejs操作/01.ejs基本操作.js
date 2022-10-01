// 需要下载 ejs
// 1.引入 ejs
let ejs = require('ejs')

// 2.渲染数据
let result = ejs.render('<h1><%= title %></h1>',{title:'大标题'})
console.log(result)