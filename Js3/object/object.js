/**
 * 关于基本数据类型和引用类型的差别
 * @type {Object}
 */
var a = new Object();
 	a.value = 1 ,
	b = a ,
	b.value = 2 ;
console.log(a.value);    //2


var a = 1 ,
	b = a ,
	b = 2 ;
console.log(a);			//1


