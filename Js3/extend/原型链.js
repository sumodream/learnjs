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
function SuperType(){
    this.colors = ['red','pink','orange'];
}
function SubType(){
}
SubType.prototype = new SuperType();
var s1 = new SubType();
s1.colors.push('black');
console.log(s1.colors);                 //[ 'red', 'pink', 'orange', 'black' ]

var s2 = new SubType();
console.log(s2.colors);                 //[ 'red', 'pink', 'orange', 'black' ]
s2.colors.push('blue');
console.log(s2.colors);                 //[ 'red', 'pink', 'orange', 'black', 'blue' ]