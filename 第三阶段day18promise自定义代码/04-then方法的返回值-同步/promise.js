// 1.声明一个 Promise 构造函数
function Promise(callback){  //callback就是执行器函数
    // 保存 this
    let self = this;
    // 6.声明promise实例对象的默认状态和默认结果值
    this.promiseState = 'pending';
    this.promiseResult = undefined;

    // 2.2 声明一个数组： 我们准备一个容器
    this.callbacks = [];
    
    // 4.声明 resolve 函数
    function resolve(value){
        // 3.1 在每次修改promise实例对象状态之前，需要判断
        // 判断promise实例对象状态是否修改过
        if(self.promiseState !== 'pending') return;
        
        // 5.改变promise实例对象的状态和结果值
        self.promiseState = 'fulfilled';
        self.promiseResult = value;

        // 2.4一旦时间到了，promise实例对象的状态就会发生改变
        // 我们要把对应的处理的回调函数取出来，进行调用
        self.callbacks.forEach(function(item){
            item.onResolved(value)
        })

    }
    // 4.声明 reject 函数
    function reject(reason){  
        // 3.1 在每次修改promise实例对象状态之前，需要判断
        // 判断promise实例对象状态是否修改过
        if(self.promiseState !== 'pending') return;
        
        // 5.改变promise实例对象的状态和结果值
        self.promiseState = 'rejected';
        self.promiseResult = reason;
        // 2.4一旦时间到了，promise实例对象的状态就会发生改变
        // 我们要把对应的处理的回调函数取出来，进行调用
        self.callbacks.forEach(function(item){
            item.onRejected(reason)
        })
    }

    // 3.调用 执行器函数
    callback(resolve,reject);
}
// 2.添加 then 方法
Promise.prototype.then = function(onResolved,onRejected){
    // 4.1 then方法的返回值是一个全新的promise实例对象
    return new Promise((resolve,reject)=>{

        // 7.根据promise实例对象的状态，调用对应的回调函数
        // 7.1 如果 promise实例对象的状态是成功，调用 onResolved
        if(this.promiseState === 'fulfilled'){
            // 4.2 保存函数的返回值
            let res = onResolved(this.promiseResult);
            // 4.3 判断函数的返回值res是不是promise实例对象  
           
           
            if(res instanceof Promise){
                // 如果res是promise实例对象
                res.then(v=>{
                    resolve(v)
                },r=>{
                    reject(r)
                })
            }else{
                // 如果res不是promise实例对象，状态成功，结果值是res
                resolve(res);
            }

        }
        // 7.2 如果 promise实例对象的状态是失败，调用 onRejected
        if(this.promiseState === 'rejected'){
            let res = onRejected(this.promiseResult);
            if(res instanceof Promise){
                res.then(v=>{
                    resolve(v)
                },r=>{
                    reject(r)
                })
            }else{
                resolve(res)
            }
        }
        // 2.1 添加处理默认状态pending的语句
        // 如果有延时定时器，我们会走这个逻辑
        if(this.promiseState === 'pending'){
            // 由于延时定时器时间到了，
            // promise实例对象的状态
            // 到底是成功还是失败，不确定

            // 我们准备一个容器（数组），
            // 把处理promise实例对象的结果的回调函数保存起来
            // 一旦promise实例对象修改状态，
            // 我们把对应的回调函数取出来就可以了

            // 2.3 把处理promise实例对象的结果的回调函数保存到数组中
            this.callbacks.push({onResolved,onRejected})

        }
    })
}