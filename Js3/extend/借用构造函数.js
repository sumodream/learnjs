/**
 * 2.构造函数的继承(很少单独使用)
 * 在子类构造函数内部调用超类的型构造函数
 * 在未来新建的SubType下调用 其他再次调用的只具有超类原始的
 * 方法在构造函数中定义无法使用函数的复用 在超类型中定义的方法在子类中是不可见的 所有类型都只能使用构造函数模式 (不可取)
 */
function SuperType(){
	this.colors = ['red','pink','orange'];
}
function SubType(){
	SuperType.call(this);
}
var s1 = new SubType();
s1.colors.push('black');
console.log(s1.colors);					//[ 'red', 'pink', 'orange', 'black' ]
var s2 = new SubType();
console.log(s2.colors);					//[ 'red', 'pink', 'orange' ]

//可在子类型构造函数向超类型构造函数传递参数
function SuperType1(name){
	this.name = name ;
}
function SubType1(){
	//调用父类的属性
	SuperType1.call(this,'Sumo');
	this.age = 20 ;
}
var s3 = new SubType1()
console.log(s3);					//{ name: 'Sumo', age: 20 }
console.log(s3.name);				//Sumo
console.log(s3.age);				//20


