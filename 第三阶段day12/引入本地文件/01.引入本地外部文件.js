let http = require('http')
let url = require('url')

let server = http.createServer((request,response)=>{
    // 获取路径部分
    let path = url.parse(request.url,true).pathname

    if(path === '/index.html'){
        response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" href="./index.css">
        </head>
        <body>
            <div id ="box">box</div>
            <script src="./index.js"></script>
        </body>
        </html>
        
        `)
    }else if(path === '/index.css'){
        response.end(`
        *{
            margin: 0;
            padding: 0;
        }
        #box{
            width: 200px;
            height: 200px;
            background: deeppink;
        }
        `)
    }else if(path === '/index.js'){
        response.end(`
        console.log(999)
        `)
    }
    else{
        response.end('404') 
    }

})

server.listen(8090,()=>{
    console.log('okkkk')
})