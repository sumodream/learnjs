/**
 * 继承的几种方式
 */
/**
 * 1.原型链继承(极少使用)
 * 引用类型值的原型属性会被所有的实例共享
 * 这是为什么在构造函数中 不在原型对象中定义属性的原因
 * 不可在子类型构造函数中向超类型构造函数传递参数
 * 经此后实例属性成为原型属性
 */
/*function SuperType(){
	this.colors = ['red','pink','orange'];
}
function SubType(){
}
SubType.prototype = new SuperType();
var s1 = new SubType();
s1.colors.push('black');
console.log(s1.colors);					//[ 'red', 'pink', 'orange', 'black' ]

var s2 = new SubType();
console.log(s2.colors);					//[ 'red', 'pink', 'orange', 'black' ]
s2.colors.push('blue');
console.log(s2.colors);					//[ 'red', 'pink', 'orange', 'black', 'blue' ]*/

/**
 * 2.构造函数的继承(很少单独使用)
 * 在子类构造函数内部调用超类的型构造函数
 * 在未来新建的SubType下调用 其他再次调用的只具有超类原始的
 * 方法在构造函数中定义无法使用函数的复用 在超类型中定义的方法在子类中是不可见的 所有类型都只能使用构造函数模式 (不可取)
 */
/*function SuperType(){
	this.colors = ['red','pink','orange'];
}
function SubType(){
	SuperType.call(this);
}
var s1 = new SubType();
s1.colors.push('black');
console.log(s1.colors);					//[ 'red', 'pink', 'orange', 'black' ]
var s2 = new SubType();
console.log(s2.colors);					//[ 'red', 'pink', 'orange' ]*/

//可在子类型构造函数向超类型构造函数传递参数
/*function SuperType(name){
	this.name = name ;
}
function SubType(){
	//调用父类的属性
	SuperType.call(this,'Sumo');
	this.age = 20 ;
}
var s3 = new SubType()
console.log(s3);					//{ name: 'Sumo', age: 20 }
console.log(s3.name);				//Sumo
console.log(s3.age);				//20*/

/**
 * 3.组合继承(伪经典继承)
 * 
 */
function SuperType(name){
	this.name = name ;
	this.colors = [ 'red', 'pink', 'orange' ] ;
}
SuperType.prototype.sayName = function(){
	console.log(this.name);
}
function SubType(name,age){
	//继承属性
	SuperType.call(this,name);
	this.age = age ;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function(){
	console.log(this.age);
};
var s4 = new SubType('S',12);
s4.colors.push('black');
console.log(s4.colors);						//[ 'red', 'pink', 'orange', 'black' ]
s4.sayName();								//S
s4.sayAge();								//12

var s5 = new SubType('U',13);
console.log(s5.colors);						//[ 'red', 'pink', 'orange' ]
s5.sayName();								//U
s5.sayAge();								//13

/**
 * 使用instanceof isPrototypeOf()识别基于组合继承创建的对象
 * instanceof 判断一个变量是否是某个对象的实例
 * isPrototypeOf()判断指定的对象是否存在于另一个对象的原型链中
 */
//SubType 继承 SuperType 类型 故 s4,s5 都是其实例对象
console.log(s4 instanceof SubType);					//true
console.log(s4 instanceof SuperType);				//true
console.log(s5 instanceof SubType);					//true
console.log(s5 instanceof SuperType);				//true
//SubType SuperType 原型链中有s4 s5实例 故在操作时都能访问到
console.log(SubType.prototype.isPrototypeOf(s4));		//true
console.log(SubType.prototype.isPrototypeOf(s5));		//true
console.log(SuperType.prototype.isPrototypeOf(s4));		//true
console.log(SuperType.prototype.isPrototypeOf(s5));		//true

//补充hasOwnProperty 与 isPrototypeOf 作对比
//hasOwnProperty判断一个对象是否有给出的属性或对象 
//无法检测出该对象的原型链中是否有该属性 该属性必须是对象本身的一个成原