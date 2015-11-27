//原型方式  每个函数function都有一个prototype  每个对象都有一个__proto__，可成为隐式原型
function Car(){//所有属性定义的Car对象的属性指向showColor()函数的指针
}
	Car.prototype.doors=4;
 	Car.prototype.color = "red";
 	Car.prototype.mpg=23;
 	Car.prototype.showColor=function(){
 		console.log(this.color);
 	};
 	var oCar1=new Car();
 	var oCar2=new Car();
 	console.log(oCar1 instanceof Car);//使用instanceof引用类型运算符检查给变量指向的对象的类型				//true


function Car(){
}
Car.prototype.color="blue";
Car.prototype.doors=5;
Car.prototype.mpg=25;
//属性drivers是指向Array对象的指针
Car.prototype.drivers=new Array("Sumo","Lily");
Car.prototype.showColor=function(){
	console.log(this.color);
};
var oCar1=new Car();
var oCar2=new Car();
oCar1.drivers.push("Rose");
console.log(oCar1.drivers);						//[ 'Sumo', 'Lily', 'Rose' ]
console.log(oCar2.drivers);						//[ 'Sumo', 'Lily', 'Rose' ]

