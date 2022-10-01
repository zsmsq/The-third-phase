// 1.引入 fs 模块
let fs = require('fs')

// 数据
let data = { 
    "id": 4860, 
    "uuid": "5e398eef-f5cf-4ff6-a000-c24913de86dd", 
    "hitokoto": "世上所以不公平之事是由于当事人能力不足所致。", 
    "type": "a", 
    "from": "金木研", 
    "from_who": null, 
    "creator": "夕之树", 
    "creator_uid": 4248, 
    "reviewer": 4756, 
    "commit_from": "web", 
    "created_at": "1573331301", 
    "length": 22 
};

// 2.写入方法

// 参数2：是字符串
fs.writeFile('D:/data.txt',JSON.stringify(data),err => {
    // if(err){
    //     console.log(err)
    // }else{
    //     console.log('成功')
    // }

    // throw 抛出错误
    if(err) throw err;
    console.log('成功')

    // if(err){
    //     throw err;
    // }else{
    //     console.log('成功')
    // }

    // if(err){
    //     throw err;
    // }
    // console.log('成功')

    // if(err)  throw err;
    // console.log('成功')

    // 不对的
    // if(err) console.log(err)
    // console.log('成功')
 
})
