//原型    一切（引用类型）都是对象，对象是属性的集合
function show(){
	console.log(typeof(a));            			// undefined
	console.log(typeof(10));           			// number
	console.log(typeof('abc'));        			// string
	console.log(typeof(true));         			// boolean
	                                   			// undefined, number, string, boolean属于简单的值类型，不是对象

	console.log(typeof(function(){})); // function

	console.log(typeof([1,'a',true])); 			// object
	console.log(typeof({a:10,b:20}));  			// object
	console.log(typeof(null));         			// object
	console.log(typeof(new Number(10)));		// object
	                                   //函数、数组、对象、null、new Number(10)都是对象，他们都是引用类型
}

show();

//判断一个变量是不是对象非常简单。值类型的类型判断用typeof，引用类型的类型判断用instanceof。
//判断fn是否为对象
var fn = function(){};
console.log(fn instanceof Object);				// true

//对象--若干属性的集合
// obj是一个自定义的对象，其中a、b、c就是它的属性，而且在c的属性值还是一个对象，它又有name、year两个属性
var obj={
	a:10,
	b:function(x){
		alert(this.a+x);
	},
	c:{
		name:"Sumo",
		year:2015
	}
};

var fn = function () {
            alert(100);
        };
        fn.a = 10;
        fn.b = function () {
            alert(123);
        };
        fn.c = {
            name: "Sumo",
            year: 2015
        };

//在jQuery源码中，“jQuery”或者“$”，这个变量其实是一个函数
/*console.log(typeof ($));  // function
console.log($.trim(" ABC "));*/

//对象都是通过函数创建的
console.log(typeof (Object));  				// function
console.log(typeof (Array));   				// function

