let fs = require('fs')

let ws = fs.createWriteStream('./admin.html')  //参数是路径

ws.write('大大大阿达大大啊\r\n')

ws.close()
