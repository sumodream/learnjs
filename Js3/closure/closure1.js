/**
 * 使用闭包的注意点
	1）由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，
	在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
	2）闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，
	把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），
	这时一定要小心，不要随便改变父函数内部变量的值。
 */
//闭包就是能够读取其他函数内部变量的函数
/*function f1(){
	var n = 999;
	//f2()闭包函数
	function f2(){
		console.log(n);
	}
	return f2;
}
var result = f1();
result();*/ //999

//闭包让读取的变量的值始终在内存中
/*function f1() {
	var n = 999;
	//nAdd 全局的匿名闭包函数
	nAdd = function() {
		n += 1;
	}

	function f2() {
		console.log(n);
	}
	return f2;
}
//result实际上就是闭包f2函数
var result = f1();
result(); //999
nAdd();
result();*/ //1000

var name = 'The Window';
var object = {
	name : 'My Object',
	getNameFunc:function(){
		return function(){
			return this.name;
		};
	}
};
console.log(object.getNameFunc()());  //undefined

var name = 'The Window';
var object = {
	name : 'My Object',
	getNameFunc:function(){
		var that = this;
		return function(){
			return that.name;
		};
	}
};
console.log(object.getNameFunc()()); //My Object

