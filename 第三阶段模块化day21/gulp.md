# gulp

### 介绍

  * gulp 是一个基于 Nodejs 的自动化构建工具，中文主页: http://www.gulpjs.com.cn/
  * 能自动化地完成 javascript/less/html/image/css 等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务

### 使用步骤：
1. 安装 nodejs

3. 全局安装 gulp
    ```shell
	npm install gulp -g
    ```
  
4. 局部安装 gulp
    ```shell
    npm init 
    npm install gulp -D
    ```
    
5. 创建一个简单的应用，文件结构如下：
  
    ```js
	|- gulpfile.js  								//gulp配置文件
	|- package.json
	```
	
5. 配置编码: gulpfile.js

    ```js
    //引入gulp模块
    const gulp = require('gulp');
    
    //定义任务
    gulp.task('任务名', async function() {
      // 将你的任务的任务代码放在这
    });
    ```

6. 构建命令: 
    ```shell
    gulp 任务名
    ```

    > The following tasks did not complete: default
    >
    > Did you forget to signal async completion?
    >
    > 错误的解决方法：
    >
    > 1. 返回一个可读流
    > 2. 传入一个回调并执行
    > 3. 回调函数设置为 async 函数

### gulp 插件

gulp 插件是专门针对 gulp 开发的工具包（npm包），用来实现特定的功能。

#### gulp-babel 语法转换

Babel 是一个 JavaScript 编译器，可以将新的 JS 语法（ES6、7、8）转化为浏览器识别的 ES5 语法。

gulp-babel 是 babel 为 gulp 封装的插件

1. 安装插件： 

    ```shell
    npm install --save-dev gulp-babel @babel/core @babel/preset-env
    ```
    
    @babel/core 是 babel 的核心包
    
    @babel/preset-env  预设的包 (babel-preset-es2015)
    
2. gulpfile.js 引入：

    ```js
    const babel = require('gulp-babel');
    ```

3. 定义任务:
    ```js
    gulp.task('babel', () => {
        return gulp.src('./src/js/*.js')
            .pipe(babel({ //进行语法转换
                presets: ['@babel/env']
            })).pipe(gulp.dest('build/js'))//输出到指定目录
    });
    ```

4. 运行命令：
    ```
    gulp babel
    ```
> 经过 babel 转换后的 ES6 模块化语法变成了 CommonJs 语法，还需要用 browserify 转换 

#### gulp-browserify 转换 CommonJs 模块化语法

1. 安装插件：

   ```shell
   npm install --save-dev gulp-browserify gulp-rename
   ```
3. 修改 gulpfile.js 引入：
    ```js
    const browserify = require('gulp-browserify');
    const rename = require('gulp-rename');
    ```

4. 定义任务:
    ```js
    gulp.task('browserify', function() {
      return gulp.src('./build/js/app.js')
        .pipe(browserify())					//将CommonJs语法转换为浏览器能识别的语法
        .pipe(rename('bundle.js'))			//为了防止冲突将文件重命名
        .pipe(gulp.dest('build/js'))		//输出到指定位置
    });
    ```

5. 运行命令
    ```shell
    gulp browserify
    ```



#### gulp-uglify 压缩 JavaScript

1. 安装插件
    ```shell script
    npm install --save-dev gulp-uglify
    ```

2. 引入插件
    ```js
    const uglify = require('gulp-uglify');
    ```

3. 定义任务
    ```js
    gulp.task('uglify', function () {
      return gulp.src('bundle/js/built.js')
        .pipe(uglify())  //压缩js
        .pipe(rename('dist.min.js'))
        .pipe(gulp.dest('dist/js'))
    });
    ```

4. 运行命令
    ```shell script
    gulp uglify
    ```

#### 配置默认任务，让多个任务依次执行

定义默认任务

```js
gulp.task('default', gulp.series('babel', 'browserify', 'uglify'));
```



#### gulp-less 编译 less 文件及使用 less-plugin-autoprefix 扩展前缀

1. 安装插件 
    ```shell script
    npm install gulp-less less-plugin-autoprefix --save-dev
    ```
2. 引入插件
    ```js
    const less = require('gulp-less');
    const LessAutoprefix = require('less-plugin-autoprefix');
    const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
    ```

3. 定义任务：
    ```js
    gulp.task('less', function () {
      return gulp.src('./src/less/*.less')
        .pipe(less({
          plugins: [autoprefix]//自动扩展前缀
        }))
        .pipe(gulp.dest('./build/css'));
    });
    ```
6. 运行命令：
    ```shell
    gulp less 
    ```

#### 使用 gulp-concat 合并 CSS 文件
1. 安装插件
    ```shell script
    npm install --save-dev gulp-concat
    ```

2. 引入
    ```js
    const concat = require('gulp-concat');
    ```

3. 定义任务
    ```js
    gulp.task('concat', function () {
        return gulp.src('./build/css/*.css')
            .pipe(concat('built.css'))
            .pipe(gulp.dest('./build/css/concat'));
    });
    ```
    
4. 运行命令：`gulp concat` 

#### gulp-cssmin 压缩 CSS 文件

1. 安装插件：
    ```shell script
    npm install --save-dev gulp-cssmin
    ```

2. 引入
    ```js
    const cssmin = require('gulp-cssmin');
    ```

3. 定义任务
    ```js
    gulp.task('cssmin', function () {
        return gulp.src('build/css/concat/built.css')
            .pipe(cssmin())
            .pipe(rename('dist.min.css'))
            .pipe(gulp.dest('dist/css'));
    });
    ```
#### gulp-htmlmin 压缩 HTML 文件
1. 安装插件
    ```shell script
    npm install --save gulp-htmlmin
    ```
2. 引入
    ```js
    const htmlmin = require('gulp-htmlmin');
    ```
3. 定义任务
    ```js
    gulp.task('htmlmin', () => {
      return gulp.src('src/index.html')
        .pipe(htmlmin({
          collapseWhitespace: true ,//去除空格
          removeComments:true //去除注释
        }))
        .pipe(gulp.dest('dist'));
    });
    ```

#### 自动化配置
1. 安装模块
    ```shell script
    npm install gulp-livereload gulp-connect opn --save-dev
    ```


2. 引入模块
    ```js
    const livereload = require('gulp-livereload');
    const connect = require('gulp-connect');
    const opn = require('opn');
    ```

3. 自动执行任务，编译代码
    ```js
    //1. 在所有可能要执行任务后面加上 .pipe(livereload());
    gulp.task('watch', function () {
        //2. 启动热加载服务
        livereload.listen();
        //3. 通过自己服务器打开项目，自动刷新
        connect.server({
            root: 'dist',
            port: 3000,
            livereload: true
        });
        //4. 自动打开浏览器
        opn('http://localhost:3000/index.html');
        //5. 监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
        gulp.watch('src/less/*.less', gulp.series(['less', 'concat', 'cssmin']));
        gulp.watch('./src/js/*.js', gulp.series(['babel', 'browserify', 'uglify']));
        gulp.watch('./src/index.html', gulp.series('htmlmin'));
    });
    ```


> 备注：必须要在 src 文件夹中修改 index.html 中引入样式和脚本的路径，gulp 不会自动处理路径。

<h3>关于文件夹的名称介绍</h3>

* src       源代码
* build     语法转换处理过后的代码
* dist      最终版, 优化过的代码