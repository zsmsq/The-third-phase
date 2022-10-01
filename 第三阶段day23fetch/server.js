let express = require('express')

let app = express();

// 搭建路由
// 页面显示
app.all('/index',(request,response)=>{
    response.sendFile(__dirname + '/05.reponse对象的介绍.html')
})

// 发送fetch
app.all('/fetch',(request,response)=>{
    response.send('后端人员准备的数据')
})

app.listen(8080,()=>{
    console.log('启动成功')
})