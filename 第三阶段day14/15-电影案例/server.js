// 引入模块
let express = require('express')
// 获取所有的电影数据
let data = require('./data.json')
// ejs下载不引入
// 引入 body-parser
let bodyParser = require('body-parser')
let fs = require('fs')


// 创建应用对象
let app = express();
// 设置模板引擎
app.set('view engin','ejs')
app.set('views','./views')
// 在 views 文件夹中创建 .ejs 文件

// 封装函数  :根据 id 值获取相对应的电影数据
let getMovieInfo = (id)=>{
    for(let i=0;i<data.movies.length;i++){
        if(id === data.movies[i].id){
            // 返回值：id值对应的电影数据
            return data.movies[i];
        }
    }
}

// 静态资源中间件 (处理本地外部文件生效)
app.use(express.static('./public'))  //参数是 静态资源所在文件夹

// 使用 body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }))

// 搭建路由
// 第一个路由：电影详情页面
app.get('/movie/:id.html',(request,response)=>{
    // 获取路由参数
    let id = Number(request.params.id);
    // 根据 id 值获取相对应的电影数据
    let movieInfo = getMovieInfo(id)
    
    // 渲染数据
    response.render('detail.ejs',{movieInfo})
})

// 第二个路由：电影添加页面显示
app.get('/movie/create',(request,response)=>{
    // 渲染数据
    response.render('create.ejs')
})
// 第三个路由：电影添加页面提交成功
app.post('/movie',(request,response)=>{
    // 把 tags中的字符串变成数组
    request.body.tags = request.body.tags.split(',')

    // 给 request.body 添加id属性
    // request.body.id = data.mid + 1;
    // data.mid = request.body.id;

    request.body.id = ++data.mid;

    // 把 请求体数据 写入到data.json中
    // 如果直接写入，会发生覆盖操作
    // 如果是追加写入，追加的位置不对

    // 把请求体数据 通过js语法添加到数组中
    data.movies.push(request.body)
    // 把整体的数据添加到data.json中（覆盖操作）
    fs.writeFile(__dirname+'/data.json',JSON.stringify(data),err=>{
        if(err) throw err;
    })

    response.send('电影数据添加成功')
})

// 第四个路由：电影列表页面
app.get('/movieList',(request,response)=>{
    let movieSInfo = data.movies;

    // 渲染数据
    response.render('list.ejs',{movieSInfo})
})


app.listen(6060,()=>{
    console.log('服务启动成功')
})







