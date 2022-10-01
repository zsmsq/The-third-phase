// 批量添加文件

let fs = require('fs')

for(let i = 1 ; i <= 1000; i++){

    fs.writeFile('./bbb/'+ i +'.html','',err=>{
        if(err) throw err;
        // console.log('成功')
    })
}