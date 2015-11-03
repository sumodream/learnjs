/**
 * this 是在调用的他的函数的作用域下起作用  不是在声明的函数作用域下起作用
 * 函数的名字仅仅是一个包含指针的变量而已
 * 即使是不同的环境执行中 全局sayColor()函数与o.sayColor()指向的仍然是同一个函数
 * @type {String}
 */
window.color = 'red' ;
var o = {color : 'blue'} ;
function sayColor(){
	alert(this.color) ;		
}
sayColor();					//red

o.sayColor = sayColor ;
o.sayColor();				//blue

