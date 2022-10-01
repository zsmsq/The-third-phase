## CommonJS服务端模块化教程(Node.js模块化教程)

<h4>CommonJS模块化规范分成两大区域：</h4>

​    1.nodejs中的模块化规范(服务端)

​    2.browserify中的模块化规范（浏览器客户端）



<h4>基本语法：</h4>

​	1.暴露模块：

​				使用 module.exports = value    或者  exports.xxx = value

​	2.引入模块

​				使用 require('xxx')进行引入

​				如果 xxx 为第三方模块或者内置模块，xxx为包名(模块名) 

​				如果 xxx 为自定义模块，xxx为模块文件的路径



<h4>使用步骤：</h4>

1. 安装Node.js

2. 创建项目结构

  ```js
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
  |-main.js
  |-package.json
  ```
3. 模块化编码：

  * module1.js
    ```js
    module.exports = {
      data:'module1',
      foo(){
        console.log('foo()------',this.data);
      },
      bar(){
        console.log('bar()------',this.data);
      }
    }
    ```
  * module2.js
    ```js
    module.exports = function () {
      console.log('module2');
    }
    ```
  * module3.js
    ```js
    exports.foo = function () {
      console.log('foo()  module3');
    }
    
    exports.bar = function () {
      console.log('bar()  module3');
    }
    ```
  * 下载第三方模块uniq：，输入命令：```npm install uniq``` （uniq：从数组中就地删除所有重复项）

  * main.js 
    ```js
    let module1 = require('./modules/module1')
    let module2 = require('./modules/module2')
    let module3 = require('./modules/module3')
    let a = require('uniq')
    
    module1.foo()
    module1.bar()
    module2()
    module3.foo()
    module3.bar()
    
    let arr = [1,11,2,2,2,5,5,5,3,4,6,6,9,7,8]
    console.log(a(arr));
      
    ```
    4. 在node环境下运行app.js的两种方法(任选其一)：
  * 第一种方法：用命令启动: ```node main.js```
  * 第二种方法：使用vscode终端运行：```node main.js```

