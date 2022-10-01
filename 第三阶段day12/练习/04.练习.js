// 引入模块
const { time } = require('console');
let http = require('http')
let url = require('url')

// 准备数据
const data = [
    {
        id:1,
        name: '孙燕姿',
        song: '逆光'
    },
    {
        id:2,
        name: '周杰伦',
        song: '不能说的密码'
    },
    {
        id:3,
        name:'林俊杰',
        song: '不为谁而作的歌'
    },
    {
        id:4,
        name: '五月天',
        song:'干杯'
    },
    {
        id: 5,
        name: '张艺兴',
        song: '莲'
    },
    {
        id:6,
        name:'刘德华',
        song:'冰雨'
    },
    {
        id: 7,
        name: '张学友',
        song: '情人'
    }
];

let server = http.createServer((request,response)=>{
    // 获取路径部分
    let path = url.parse(request.url,true).pathname;
    // 获取查询字符串
    let bg1 = url.parse(request.url,true).query.bg1;
    let bg2 = url.parse(request.url,true).query.bg2;

    let str = ''
    data.forEach(function(item){
        str += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.song}</td>
            </tr>
        `;
    })

  


    if(path === '/table'){
        response.end(`
        <!doctype html>
        <html lang="zh-CN">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
            <title>Bootstrap 101 Template</title>
        
            <!-- Bootstrap -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
        
            <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
            <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
            <!--[if lt IE 9]>
              <script src="https://cdn.jsdelivr.cn/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
              <script src="https://cdn.jsdelivr.cn/npm/respond.js@1.4.2/dest/respond.min.js"></script>
            <![endif]-->
          </head>
          <body>
            
            <div class="container" style="margin-top: 50px;">
                <table class="table table-bordered">
                    
                    ${str}
                    
                </table>
            </div>
        
            <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
            <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
            <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
            <script >
        
                $(function(){
                    $('table tr:even').css('background','${bg1}')
        
                    $('table tr:odd').css('background','${bg2}')
                })
        
            </script>
        </body>
        </html>
        `)
    }else{
        response.end('404aqg')
    }

})

server.listen(7070,()=>{
    console.log('成功')
})