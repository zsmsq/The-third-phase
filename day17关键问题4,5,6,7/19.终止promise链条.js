//7.中断promise链?
// 中断promise链条

let p = new Promise((resolve,reject)=>{
    resolve('ok')
})

p.then(value=>{
    console.log(111)
    // 中断链条
    return new Promise((resolve,reject)=>{})
},reason=>{
    console.log(222)
})
.then(value=>{
    console.log(333)
},reason=>{
    console.log(444)
})
.then(value=>{
    console.log(555)
},reason=>{
    console.log(666)
})
