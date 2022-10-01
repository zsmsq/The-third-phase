// 创建buffer
// 方式一：直接创建
let buf1 = Buffer.alloc(10)  //长度为 10字节 的buffer
// <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf1)

// 方式二：不安全创建    每次出现的结果可能不一样
let buf2 = Buffer.allocUnsafe(10)   //长度为 10字节 的buffer
// <Buffer 18 92 2c f7 1b 02 00 00 f8 cd>   十六进制
console.log(buf2)

// 方式三：通过 from 方法创建
let buf3 = Buffer.from('iloveyou')
// <Buffer 69 6c 6f 76 65 79 6f 75>
// console.log(buf3)
// i  69 是什么关系？？？ ascii


// 读取buffer数据： [下标]
console.log(buf3[0])  //105
console.log(String.fromCharCode(buf3[0]))  //i

console.log('a'.charCodeAt())

// 把 buffer 数据 转化成 字符串
// console.log(buf3.toString())

// 设置 buffer数据
buf3[1] = 115;
// console.log(buf3.toString())

// buffer每一个元素大小是 1字节
// 1字节中表示数字的范围是 0-255，共256个

// 高位溢出 
// 365 ===》0001 0110 1101 ===》0110 1101 ===》109 ===》m
buf3[1] = 365;
console.log(buf3.toString())

// 一个 UTF-8 的中文字符大多数情况都是占 3 个字节
console.log(Buffer.from('我爱你'))
// <Buffer e6 88 91 e7 88 b1 e4 bd a0>