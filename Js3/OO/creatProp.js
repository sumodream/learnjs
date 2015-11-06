/**
 * 创建对象
 */
/**
 * 工厂模式(抽象创建具体对象的过程)
 * 用函数来封装以特定接口创建对象
 * 解决创建多个相似对象的问题
 * 但没有解决对象识别的问题(怎么知道一个对象的类型)
 */
function createPerson(name,age,job){
    var p     = new Object();
    p.name    = name ;
    p.age     = age ;
    p.job     = job ;
    p.sayName = function(){
        console.log(this.name);
    };
    return p ;
}
//可以无数次调用createPerson函数
var p1 = createPerson('a',28,'teacher');
var p2 = createPerson('b',18,'student');
console.log(p1);            //{ name: 'a', age: 28, job: 'teacher', sayName: [Function] }
console.log(p2);            //{ name: 'a', age: 28, job: 'teacher', sayName: [Function] }
p1.sayName();               //a
console.log(p1.constructor == createPerson);        //false
console.log(p1 instanceof Object);                  //true
console.log(p1 instanceof createPerson);            //false


/**
 * 构造函数模式(创建特定类型的对象object array 也可创建自定义类型函数 从而定义自定义对象类型的属性和方法)
 * 没有显式地创建对象 var p = new Object();
 * 直接将属性和方法赋值给this
 * 没有return语句
 * Person大写 以大写开头的是构造函数
 * 创建自定义的构造函数可以将它的实例标识为一种特定的类型 (胜工厂模式的地方)
 */
function Person(name,age,job){
    this.name    = name ;
    this.age     = age ;
    this.job     = job ;
    this.sayName = function(){
    console.log(this.name);
    };
}
/**
 * 要创建Person新实例 必须使用new操作符
 * 创建一个新对象
 * 将构造函数的作用域赋值给新对象(this指向新对象)
 * 执行构造函数中的代码(为新对象添加属性)
 * 返回新对象
 * @type {Person}
 */
//构造函数用new操作符调用
var p1 = new Person('c',12,'child');
var p2 = new Person('d',1,'baby');
p1.sayName();  
                         //c
//作为普通函数调用
/*Person('e',10);
window.sayName(); */                      //e

//在另一个对象的作用域中调用
var o = new Object();
Person.call(o,'f',12);
o.sayName();                              //f



//对象的constructor是用来标识对象类型的
console.log(p1.constructor == Person);              //true  
//instanceof检测数据类型
//在此例中创建的所有对象既是Object的实例 也是Person的实例
console.log(p1 instanceof Object);                  //true
console.log(p1 instanceof Person);                  //true
console.log(p2.constructor == Person);              //true  
console.log(p2 instanceof Object);                  //true
console.log(p2 instanceof Person);                  //true