/**
 * 一,call apply 在特定的作用域中调用函数
 * 每个函数都包含两个非继承而来的方法
 * @param  {[type]} num1 [description]
 * @param  {[type]} num2 [description]
 * @return {[type]}      [description]
 */
//apply(运行函数的作用域(this),参数数组(array实例或arguments对象))
//在严格模式下 this值不会转型为window 除非明确把函数添加到某个对象或是调用apply()或call(),否则this的值是undefined
function sum(num1,num2){
	return num1 + num2 ;
}
function callSum1(num1,num2){
	return sum.apply(this,arguments);
}
function callSum2(num1,num2){
	return sum.apply(this,[num1,num2]);
}
console.log(callSum1(10,10));			//20
console.log(callSum2(10,10));			//20

//call和apply方法的作用相同,接收参数的方式不同
//call(this,其余参数)其余参数都是直接传递给函数,传递给函数的参数必须逐个列举出来
function sum(num1,num2){
	return num1 + num2 ;
}
function callSum(num1,num2){
	return sum.call(this,num1,num2);
}
console.log(callSum(10,10));			//20


/**
 * 二,call,apply扩充函数运行的作用域(真正强大的地方)
 * 对方不需要与方法产生任何的耦合关系
 * @type {String}
 */
var color = 'red' ;
var o = {color : 'blue'} ;
function sayColor(){
	console.log(this.color);			//red
}
sayColor();								//red
sayColor.call(this);					//red
sayColor.call(o);						//blue



/**
 * bind 创建一个函数的实例 其this值会绑定到传给bind()函数的值
 * @type {String}
 */
var color = 'red' ;
var o = {color : 'blue'} ;
function sayColor(){
	console.log(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();						//blue


