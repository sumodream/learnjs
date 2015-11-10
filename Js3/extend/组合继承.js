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
console.log(s4 instanceof SuperType);					//true
console.log(s5 instanceof SubType);						//true
console.log(s5 instanceof SuperType);					//true
//SubType SuperType 原型链中有s4 s5实例 故在操作时都能访问到
console.log(SubType.prototype.isPrototypeOf(s4));		//true
console.log(SubType.prototype.isPrototypeOf(s5));		//true
console.log(SuperType.prototype.isPrototypeOf(s4));		//true
console.log(SuperType.prototype.isPrototypeOf(s5));		//true

//补充hasOwnProperty 与 isPrototypeOf 作对比
//判断一个属性是定义在对象本身而不是继承自原型链，我们需要使用从 Object.prototype 继承而来的 hasOwnProperty 方法
//只能获取自定义属性 不能获取原型链中的属性
//无法检测出该对象的原型链中是否有该属性 该属性必须是对象本身的一个成员
//hasOwnProperty 方法是 Javascript 中唯一一个处理对象属性而不会往上遍历原型链的。
// Poisoning Object.prototype
// 继承自原型链的返回false
Object.prototype.bar = 1;
var foo = {
	goo: undefined
};
console.log(foo.hasOwnProperty('bar')); // false
console.log(foo.hasOwnProperty('goo')); // true