//通过形参来标识当前模块的依赖
/**
 * @param window  全局对象
 * @param $       jQuery 对象
 */
(function (window, $) {
    //数据
    let data = 'atguigu.com';

    //操作数据的函数
    function foo() { //用于暴露有函数
        console.log(`foo() ${data}`)
        $('body').css('background', 'pink')
    }

    function bar() {//用于暴露有函数
        console.log(`bar() ${data}`)
        otherFun() //内部调用
    }

    function otherFun() { //内部私有的函数
        console.log('otherFun()')
    }

    //暴露行为
    window.myModule = { foo, bar };
})(window, jQuery)