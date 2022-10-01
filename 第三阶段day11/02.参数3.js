// 1.引入 fs 模块
let fs = require('fs')

// 2.文件简单写入方法
// 参数3：默认不设置，会发生覆盖操作  flag : 'w'
//         flag : 'r'  只读权限
//         flag : 'a'  追加
fs.writeFile('./index.html','黄河入海流',{flag:'a'},err=>{
    if(err){
        console.log(err)
    }else{
        console.log('成功')
    }
})