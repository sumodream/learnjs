/*call  apply 简单的用法*/

		//call  apply 简单的用法：绑定一些函数 用于传递参数 调用

		function sum(x,y){
			return x+y;
		}
		function call1(num1,num2){
			return sum.call(this,num1,num2);
		}
		function apply1(num1,num2){
			return sum.apply(this,[num1,num2]);   //要用数组

		}
		console.log(call1(10,20));   //30
		console.log(apply1(20,40));  //60

 

 		//扩充作用域

/* 		window.color="red";
 		var obj={color:"blue"};
 		var obj2={color:"yellow"};
 		function showColor(){
 			console.log(this.color);
 		}
 		showColor.call(this);   //this  目前指 window
 		showColor.call(obj);*/


		//call 方法简单的模拟与实现
		//function方法
		function test1(a,b){
			return a+b;
		}
		//自定义的对象
		function Obj(x,y){     //函数名大写表示对象
			this.x=x;
			this.y=y;
			return x*y;
		}
		var o=new Obj(10,20);
		console.log(test1.call(o,o.x,o.y));   //30

		o.method=test1;
		o.method(o.x,o.y);
		console.log(o.method(o.x,o.y));   //30
		delete o.method;                 //临时定义的method删掉
