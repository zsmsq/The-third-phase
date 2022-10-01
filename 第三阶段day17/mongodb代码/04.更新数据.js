// 1.下载 mongoose
// 2.引入 mongoose
let mongoose = require('mongoose');

// 3.连接数据库
// xianh5 代表数据库的名称
// 如果有该数据库，直接使用
// 如果没有该数据库，会自动创建
mongoose.connect('mongodb://127.0.0.1:27017/xianh5')

// 4.绑定连接成功的事件
mongoose.connection.on('open',function(){

    // 5.创建文档结构对象    Schema结构
    let userSchema = new mongoose.Schema({
        // 属性值要书写数据类型
        username : String,
        age : Number,
        gender : String
    })

    // 6.创建文档模型    参数1：集合名称   参数2：文档结构对象  
    let userModel = mongoose.model('users',userSchema)

    // 7.增删改查
    // 更新一条数据
    // userModel.updateOne({username:'马锴'},{username:'handsome'},(err,data)=>{
    //     if(err) throw err;
    //     console.log(data)
    // })

    // 批量更新数据
    userModel.updateMany({username:'毛毛'},{username:'beauty'},(err,data)=>{
        if(err) throw err;
        console.log(data)
    })



})