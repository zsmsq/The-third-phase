// fs 汇总

let fs = require('fs')

// 文件写入
// 简单写入
// 同步
fs.writeFileSync('./index.html','内容',{flag:'w'})
// 异步
fs.writeFile('./index.html','内容',{flag:'w'},err=>{
    if(err) throw err;
})

// 流式写入
// 创建写入流对象
let ws = fs.createWriteStream('./index.html')
// 调用写入方法
ws.write('内容 \r\n')
ws.write('内容 \r\n')
ws.write('内容 \r\n')
// 关闭写入流
ws.close()

// 文件读取
// 简单读取
// 同步
fs.readFileSync('./index.html')

// 异步
fs.readFile('./index.html',(err,data)=>{
    if(err) throw err;
    console.log(data.toString())
})

// 流式读取
// 创建读取流对象
let rs = fs.createReadStream('./index.html')
// 绑定事件
rs.on('data',chunk=>{
    // chunk 一块儿   64kb = 65536字节byte
    console.log(chunk.toString())
    console.log(chunk.length)
})

// 事件执行顺序：open --- data --- end --- close
// open文件打开一瞬间执行
rs.on('open',()=>{})
// end文件读取完成那一瞬间执行
rs.on('end',()=>{})
// close文件关闭一瞬间执行
rs.on('close',()=>{})

// 删除文件  --- 只能测试一次
// 同步
fs.unlinkSync('./index.html')
// 异步
fs.unlink('./index.html',err=>{
    if(err) throw err;
})

// 移动文件与重命名
// 同步
fs.renameSync('./index.html','../app.html')
// 异步
fs.rename('./index.html','../app.html',err=>{
    if(err) throw err;
})


// 文件夹操作
// 创建文件夹
// 异步
fs.mkdir('./xxx',err=>{
    if(err) throw err;
})
// 同步
fs.mkdirSync('./yyyy')

// 读取文件夹  ls
fs.readdir('../',(err,data)=>{
    if(err) throw err;
    console.log(data) //[文件名的列表]
})
let result = fs.readdirSync('./')

// 删除文件夹
// 如果是空文件夹，直接删除
// 如果是非空文件夹，需要设置参数
fs.rmdir('./xxx',{recursive:true},err=>{
    if(err) throw err;
})

// 路径问题
// nodejs fs模块中
// ./   当前命令行的工作目录
// ../   当前命令行的工作目录的上一层

// 如果直接写相对路径，在不同命令行的工作位置，文件产生位置不同
// 如果直接写绝对路径，更不行

// 需要一个相对比较灵活的绝对路径
// __dirname
// 拼串