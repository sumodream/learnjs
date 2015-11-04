/**
 * window.color访问全局color变量 全局变量是window对象的属性
 * @type {String}
 */
var color = 'pink';
function sayColor(){
    console.log(window.color);      //pink
}
//使用直接通过window对象调用这个函数
window.sayColor();

//立即调用的函数表达式 返回this的值 取得Global对象
var global = function(){
    return this;
}();