// 1.输出从 1 - 10
// let str = '';
// for(let i = 1 ; i <= 10 ;i++){
//     str += i + ' '
// }
// console.log(str)

// // 2.三角形
// // 行
// for(let i = 1;i<=5;i++){
//     let str = ''
//     // 星星数
//     for(let j=0;j<(2*i-1);j++){
//         str += '*'
//     }
//     console.log(str)
// }

// 3.金字塔
// 行
// for(let i = 1;i<=5;i++){
//     let str = ''
//     // 空格
//     for(let k=0;k<(5-i);k++){
//         str += ' '
//     }
//     // 星星数
//     for(let j=0;j<(2*i-1);j++){
//         str += '*'
//     }
//     console.log(str)
// }

// 4.九九乘法表
// 行
for(let i=1 ; i<=9 ;i++){
    let str = ''
    // 列
    for(let j=1 ; j<= i;j++){
        str += `${j}*${i}=${i*j}  `
    }
    console.log(str)
}