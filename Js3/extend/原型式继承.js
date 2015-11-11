/**
 * 4.原型式继承
 * 必须有一个对象作为另一个对象的基础
 * 返回的新对象 将person作为原型 
 * 
 * @param  {[type]} o [description]
 * @return {[type]}   [description]
 */
function object(o){
	//临时的构造函数
	function F(){}
		F.prototype = o ;
		//返回临时类型的新实例
		return new F();
}
//基本类型值属性  引用类型值属性
var person = {
	name : "sumo",
	age : 18 ,
	friends : ['s','u']
};
var anotherPerson = object(person);
anotherPerson.name = 'ss' ;
anotherPerson.friends.push('m');

var otherPerson = object(person);
otherPerson.name  = 'uu';
otherPerson.friends.push('o');
console.log(person.friends);					//[ 's', 'u', 'm', 'o' ]

//Object.create()
//规范原型式继承 接收两个参数 (1)新对象原型的对象 (2)为新对视定义额外属性的对象 
var person1 = {
	name : "sumo",
	age : 18 ,
	friends : ['s','u']
};
var anotherPerson = Object.create(person1);
anotherPerson.name = 'ss' ;
anotherPerson.friends.push('m');

var otherPerson = Object.create(person1);
otherPerson.name  = 'uu';
otherPerson.friends.push('o');
console.log(person1.friends);					//[ 's', 'u', 'm', 'o' ]
console.log(otherPerson.name);					//uu


//Object.create()第二个参数与Object.defineProperties()方法的第二个参数格式相同
//指定的任何属性会覆盖原型对象上的同名属性
var twoPerson = Object.create(person1,{
	name : {
		value : 'asd'
	}
});
console.log(twoPerson.name);					//asd