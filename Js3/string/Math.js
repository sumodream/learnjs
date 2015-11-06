/**
 * 单体内置对象 Global和Math
 * max min 可接收任意多个数值参数
 * 避免多余的if语句中确定一组的大小值
 * @type {[type]}
 */
var max = Math.max(3,43,122,26);        
console.log(max);                   //122
var min = Math.min(3,43,122,26);
console.log(min);                   //3

var value = [1,2,3,4,5];
//将Math对象作为apply的第一个参数 正确设置this值 可将任何数组作为第二个参数
var max = Math.max.apply(Math,value);
console.log(max);                   //5


/**
 * 舍入方法
 * ceil()向上取整
 * round()标准四舍五入
 * floor()向下取整
 */
console.log(Math.ceil(24.1));       //25
console.log(Math.ceil(24.5));       //25
console.log(Math.ceil(24.9));       //25

console.log(Math.round(24.1));      //24
console.log(Math.round(24.5));      //25
console.log(Math.round(24.9));      //25

console.log(Math.floor(24.1));      //24
console.log(Math.floor(24.5));      //24
console.log(Math.floor(24.9));      //24

/**
 * 选择Math.floor()是Math.random()总返回一个小数
 */
//值 = Math.floor(Math.random()*可能值的总数 + 第一个可能的值)
//总共10个(1到10)
var num = Math.floor(Math.random()*10+1);
//总共9个(2到10)
var num = Math.floor(Math.random()*9+2);

function selectFrom(lowerValue,upperValue){
    var choice = upperValue - lowerValue + 1 ;
    return Math.floor(Math.random()*choice+lowerValue);
}
var num1 = selectFrom(2,10);
console.log(num1);              //随机数

var colors = ['red','blue','green','pink','gray','black','orange','white','purple'];
var color = colors[selectFrom(0,colors.length-1)];
console.log(color);             //随机字符串数组