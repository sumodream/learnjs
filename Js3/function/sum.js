/**
 * 函数是对象,函数名是指针
 * 使用不带圆括号的函数名是访问函数指针,而非调用函数
 * sum和anotherSum都指向同一个函数
 * @param  {[type]} num1 [description]
 * @param  {[type]} num2 [description]
 * @return {[type]}      [description]
 */
function sum(num1,num2){
    return num1+num2 ;
}
console.log(sum(10,10));            //20
var anotherSum = sum ;
//anotherSum也可以被调用并返回结果
console.log(anotherSum(10,10));     //20
//即使sum为空 仍可正常调用anotherSum
sum = null ;
console.log(anotherSum(10,10));     //20


/*console.log(sum(10,10));
var sum = function (num1,num2){return num1+num2;};*/

console.log(sum(10,10));
function sum(num1,num2){return num1+num2;}
