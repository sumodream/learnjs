/**
 * 4.混合构造原型模式
 * 将实例属性定义在构造函数中
 * 将共享的方法,属性定义在原型中
 * 每个实例属性又有自己的实例属性 还有共享的 节省内存
 * 还支持向构造函数传递参数
 * @param {[type]} name [description]
 * @param {[type]} age  [description]
 * @param {[type]} job  [description]
 */
function Person(name,age,job){
    this.name = name ;
    this,age = age ;
    this.job = job ;
    this.friends = ['abc','bcd'] ;
}
Person.prototype = {
    constructor : Person ,
    sayName :function(){
        console.log(this.name);
    }
};
var p1 = new Person('sumo',20,'student');
var p2 = new Person('summore',21,'worker');
//还支持向构造函数传递参数
p1.friends.push('lily');
console.log(p1.friends);                    //[ 'abc', 'bcd', 'lily' ]
console.log(p2.friends);                    //[ 'abc', 'bcd' ]
console.log(p1.sayName === p2.sayName);     //true
console.log(p1.friends === p2.friends);     //false
console.log(p1);                            //{ name: 'sumo',ob: 'student',friends: [ 'abc', 'bcd', 'lily' ] }

/**
 * 5.动态原型模式
 * 在sayName()不存在的情况下 才会将此添加到原型中  只在初次调用构造函数时执行
 * 此后 原型完成初始化 不需再做修改
 * 使用动态原型模式 不能使用对象字面量重写原型 若在创建实例后重写原型 会切断现实例与新原型之间的关系
 * @param {[type]} name [description]
 * @param {[type]} age  [description]
 * @param {[type]} job  [description]
 */
function Persongo(name,age,job){
    this.name = name ;
    this,age = age ;
    this.job = job ;
}
//在sayName()方法不存在时加入到原型中
if(typeof this.sayName != 'function'){
    Persongo.prototype.sayName = function(){
        console.log(this.name);
    };
}
var p3 = new Persongo('a',2,'se');
p3.sayName();                                   //a



/**
 * 6.寄生构造函数模式
 * 除了在实例化中加了new  其他例如创建新对象 初始化属性和方法 return对象 之外 就是工厂模式
 * 创建的对象 与构造函数之间没有什么关系
 */
//SpecialArray()大写构造函数
function SpecialArray(){
    //创建新对象
    var values = new Array();
    //初始化属性和方法
    values.push.apply(values,arguments);
    values.toPipedString = function(){
        return this.join('|');
    };
    //return对象
    return values;
}
//new 创建新实例
var colors = new SpecialArray('red','pink','orange');
console.log(colors.toPipedString());                    //red|pink|orange


/**
 * 7.稳妥构造函数模式
 * 和寄生构造函数模式类似 只是木有this , new 
 * 适用于安全环境下
 * 创建的对象 与构造函数之间没有什么关系
 */
function Personsafe(name,age,job){
    var o = new Object();
    o.name = name ;
    o.age = age ;
    o.job = job ;
    o.sayName = function(){
        console.log(name);
    };
    return o ;
}
var p4 = Personsafe('qaz',12,'doc');
p4.sayName();                           //qaz
