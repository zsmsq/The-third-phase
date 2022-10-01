## CommonJS 浏览器端模块化教程
<h3>1.创建项目结构</h3>

  ```
  |-js
    |-dist //生成编译完js的目录
    |-src //源码所在的目录（我们编写的、没经过工具处理的代码，叫做源码）
      |-module1.js
      |-module2.js
      |-module3.js
      |-main.js
  |-index.html
  ```

<h3>2.模块化编码</h3>

  * module1.js
    ```
    module.exports = {
      foo() {
        console.log('moudle1 foo()')
      }
    }
    ```
  * module2.js
    ```
    module.exports = function () {
      console.log('module2()')
    }
    ```
  * module3.js
    ```
    exports.foo = function () {
      console.log('module3 foo()')
    }
    
    exports.bar = function () {
      console.log('module3 bar()')
    }
    ```
  * 下载第三方模块uniq：```npm install uniq```
  
  * main.js
    ```
    //引用模块
    let module1 = require('./module1')
    let module2 = require('./module2')
    let module3 = require('./module3')
    
    let uniq = require('uniq')
    
    //使用模块
    module1.foo()
    module2()
    module3.foo()
    module3.bar()
    
    console.log(uniq([1, 3, 1, 4, 3]))
    ```

### 3. 下载 browserify
  * 全局安装browserify，命令: ```npm install browserify -g```
    备注：若此步骤报错，请使用管理员身份打开vscode，再次执行即可；或使用管理员身份打开cmd执行。

### 4. 执行处理命令
  * 第一步，cd到指定文件夹  即：03_CommonJS-Browserify 文件夹
  * 第二步，输入命令```browserify ./js/src/main.js -o ./js/dist/bundle.js```
  * ​              即 ```browserify 入口文件路径 -o 出口文件路径```

### 5. 页面使用引入:
  ```html
  <script type="text/javascript" src="js/dist/bundle.js"></script> 
  ```