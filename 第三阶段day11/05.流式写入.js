// 1.引入 fs 模块
let fs = require('fs')

// 2.创建写入流对象
let ws = fs.createWriteStream('./admin.html')  //参数是路径

// 3.调用写入方法
ws.write('浔阳江头夜送客，\r\n')
ws.write('枫叶荻花秋瑟瑟。\r\n')
ws.write('主人下马客在船，\r\n')
ws.write('举酒欲饮无管弦。\r\n')

// 4.关闭写入流
ws.close()

// \r\n 
// \r  回车
// \n  换行






