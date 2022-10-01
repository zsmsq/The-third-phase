// 入口文件
import {a1} from './m1'
// 引入 css 模块
import '../css/app.css';
// 引入 less 模块
import '../less/app.less';

import '@babel/polyfill';
// 移除入口文件中的 『import  '@babel/polyfill'』  ---因为体积大
// // 引入 polyfill  语法兼容
// import '@babel/polyfill';

console.log(a1)

// 错误的测试
// let a = 100;
// for(let i = 0;i < a ;i++){
//     console.log(i)
// }
// // var a = 200;

// let b = 200;
// console.log(b)

// console.log(5 == '5')

// alert(123)

let p = new Promise((resolve,reject)=>{
    resolve('ok')
    reject('err')
})
p.then(value=>{
    console.log(value)
},reason=>{
    console.log(reason)
})

console.log(111)
console.log(222)
console.log(333)
// 书写错误的代码
// lat c = 300;

