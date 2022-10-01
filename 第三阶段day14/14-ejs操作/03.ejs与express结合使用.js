let express = require('express')
// 1.下载ejs，不需要引入

let app = express();

// 2.设置ejs模板引擎
app.set('view engin','ejs')  //我们的模板引擎使用谁
app.set('views','./abc')   //模板引擎文件存在的位置

// 3.在  abc文件夹 中创建模板引擎文件   .ejs

// 准备数据
let title = '标题'
let arr = ['aaa','bbb','ccc']

app.get('/index',(request,response)=>{

    // 4.渲染数据(设置响应体)
    // 参数1：模板引擎的文件
    // 参数2：对象，对象中的内容是数据
    response.render('test.ejs',{title,arr})

})

app.listen(9090,()=>{
    console.log('成功')
})















