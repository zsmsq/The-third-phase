function test(){
    console.log('test')
}

function add(){
    console.log('加法')
}

// 暴露
// module.exports = test;

// 可以暴露任意数据
// module.exports = 123;

// 可以暴露多个数据
// module.exports = {test,add}

// 通过 exports 进行暴露
exports.test = test;
exports.add = add;

// 不能使用这种方式暴露
// exports = 'xxxx'