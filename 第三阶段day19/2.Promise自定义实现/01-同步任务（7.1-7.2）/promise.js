
// // 1.声明一个构造函数
// function Promise(callback) {
//     //callback为执行器函数
//     let self = this;
//     this.promiseState = 'pending',
//     this.promiseResult = undefined;

//     function resolve(value) {
//         self.promiseState = 'fulfilled'
//         self.promiseResult = value;
//     }
//     function reject(reason) {
//         self.promiseState = 'rejected'
//         self.promiseResult = reason;
//     }
//     callback(resolve, reject)
// }
// Promise.prototype.then =function(onResolved, onRejected){
//     if (this.promiseState === 'fulfilled'){
//         onResolved(this.promiseResult);
//     }
//     if(this.promiseState === 'rejected'){
//         onRejected(this.promiseResult);
//     }
// }
// 1.声明一个 Promise 构造函数
function Promise(callback) {  //callback就是执行器函数
    // 保存 this
    let self = this;
    // 6.声明promise实例对象的默认状态和默认结果值
    this.promiseState = 'pending';
    this.promiseResult = undefined;

    // 4.声明 resolve 函数
    function resolve(value) {
        // 5.改变promise实例对象的状态和结果值
        self.promiseState = 'fulfilled';
        self.promiseResult = value;
    }
    // 4.声明 reject 函数
    function reject(reason) {
        // 5.改变promise实例对象的状态和结果值
        self.promiseState = 'rejected';
        self.promiseResult = reason;
    }

    // 3.调用 执行器函数
    callback(resolve, reject);
}
// 2.添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
    // 7.根据promise实例对象的状态，调用对应的回调函数
    // 7.1 如果 promise实例对象的状态是成功，调用 onResolved
    if (this.promiseState === 'fulfilled') {
        onResolved(this.promiseResult);
    }
    // 7.2 如果 promise实例对象的状态是失败，调用 onRejected
    if (this.promiseState === 'rejected') {
        onRejected(this.promiseResult);
    }

}