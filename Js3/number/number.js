var num = 10 ;
console.log(num.toString());			//10
console.log(num.toString(2));			//1010
console.log(num.toString(8));			//12
console.log(num.toString(10));			//10
console.log(num.toString(16));			//a
//小数点后两位
console.log(num.toFixed(2));			//10.00
var num1 = 10.0005 ;
console.log(num1.toFixed(3));			//10.001


/**
 * Number对象是Number类型的实例 基本类型的数值则不是
 * @type {Number}
 */
var numObject = new Number(10) ;
var numValue = 10 ;
//typeof  判断基本类型
console.log(typeof numObject);				//object
console.log(typeof numValue);				//number
//instanceof 判断引用类型
console.log(numObject instanceof Number);	//true
console.log(numValue instanceof Number);	//false