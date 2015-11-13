/**
 * 函数执行与函数名紧紧耦合在一起了 
 * 为了消除耦合  引用arguments.callee
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
//递归
function factorial(num){
	if(num <= 1){
		return 1 ;
	}else{
		return num * factorial(num-1);
	}
}
console.log(factorial(5));     //120


/**
 * 一,此时可以探讨没有重载的概念 将函数名想象成指针 
 * 第一个函数与第二个函数在位置上发生变化产生的结果是不同的
 * 结果会运行后面的函数
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
/**
 * 二,探讨函数内部属性 arguments用来保存函数参数 使用callee指向拥有arguments对象的函数
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
function factorial(num){
	if(num <= 1){
		return 1 ;
	}else{
		return num * arguments.callee(num-1);
	}
}
var trueFactorial = factorial ;
factorial = function(){
	return 0 ;
}
console.log(trueFactorial(5));		//120
console.log(factorial(5));			//0


