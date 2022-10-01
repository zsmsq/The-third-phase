let express = require('express')

let app = express()

// 搭建路由
app.get('/app',(request,response)=>{
    // 设置响应体方法
    // write 可以进行多次调用，不能单独使用
    // end 调用一次，还可以单独使用
    // send 可以解决中文乱码问题
    // sendFile 返回一个文件中的内容 : 必须是绝对路径
    // download 下载文件
    // redirect  重定向

    // response.write('aaaa')
    // response.write('bbb')
    // response.write('cccc')
    // response.end('zzzz')

    // response.send('能不能出现乱码')

    // response.sendFile(__dirname+'/index.html')
    // response.sendFile(__dirname + '/package.json')

    // response.download('./package.json')
    //redirect （重定向）
    response.redirect('https://www.baidu.com')
    
})

app.listen(9090,()=>{
    console.log('running')
})