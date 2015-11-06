/**
 * 3.原型模式(每个函数都有prototype这个原型属性,是一个指针 指向一个对象)
 * 这个对象包含可以由特定类型的所有实例共享的属性和方法
 * 原型对象的好处是可以让所有对象实例共享他的属性和方法
 * 不必在构造函数中定义对象实例的信息 可以将这些信息直接添加到原型对象中
 */
function Person(){

}
Person.prototype.name = 'lily' ;
Person.prototype.age = 20;
Person.prototype.job = 'Front end Engineer';
Person.prototype.sayName = function(){
	console.log(this.name);
};
var p1 = new Person();
var p2 = new Person();
p1.sayName();										//lily
p2.sayName();										//lily
console.log(p1.sayName == p2.sayName);				//true

//Person.prototype -> Person Prototype(包含 constructor,name,age,job,sayName)
//Person的每个实例(p1,p2)都包含一个内部属性[[Prototype]] -> Person.prototype
//Person.Prototype.constructor -> Person
//通过isPrototypeOf判断以上关系
console.log(Person.prototype.isPrototypeOf(p1));	//true
console.log(Person.prototype.isPrototypeOf(p2));	//true
//Object.getPrototypeOf()方法返回[[Prototype]]的值
//返回的对象是这个对象的原型
console.log(Object.getPrototypeOf(p1) == Person.prototype);		//true
//取得原型对象中的name属性的值
console.log(Object.getPrototypeOf(p1).name);					//lily