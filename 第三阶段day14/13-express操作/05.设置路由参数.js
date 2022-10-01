let express = require('express')
let app = express();

// 搭建路由
// 设置路由参数
app.get('/:id.html',(request,response)=>{
    // 获取路由参数
    let id = request.params.id;
    console.log(id)

    // 设置响应
    response.send('设置第'+ id +'个产品的页面')
})


app.listen(80,()=>{
    console.log('running')
})


/* app.get('/1.html',(request,response)=>{
    // 设置响应
    response.send('设置第一个产品的页面')
})
app.get('/2.html',(request,response)=>{
    // 设置响应
    response.send('设置第2个产品的页面')
})
app.get('/3.html',(request,response)=>{
    // 设置响应
    response.send('设置第3个产品的页面')
}) */