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


/**
 * 不能通过实例重写原型中的值
 * 在实例中添加属性 会覆盖原型的属性
 */
function Personnew(){
}
Personnew.prototype.name = 'rose';
Personnew.prototype.age = 18 ;
Personnew.prototype.job = 'student' ;
Personnew.prototype.sayName = function(){
	console.log(this.name);
};
var a1 = new Personnew();
var a2 = new Personnew();
//hasOwnProperty()检测一个属性是否存在于实例中还是原型中 只在给属性存在于实例中才返回true
//in 操作符检测存在于实例或是原型中 都返回true
console.log(a1.hasOwnProperty('name'));				//false
console.log('name' in a1);							//true
a1.name = 'apple' ;
console.log(a1.name);								//apple  实例
console.log(a2.name);								//rose   原型
console.log(a1.hasOwnProperty('name'));				//true
console.log(a2.hasOwnProperty('name'));				//false
console.log('name' in a1);							//true
delete a1.name;
console.log(a1.name);								//rose   删除过后的 来自原型
console.log(a2.hasOwnProperty('name'));				//false
console.log('name' in a1);							//true

//检测属性存在于实例中还是原型中 
//hasOwnProperty()只在实例中返回true 
//for-in 实例原型都返回true
function hasPrototypeProperty(object,name){
	return !object.hasOwnProperty(name) && (name in object);
}
function Personin(){
}
Personin.prototype.name = 'lemmon';
Personin.prototype.age = 18 ;
Personin.prototype.job = 'student' ;
Personin.prototype.sayName = function(){
	console.log(this.name);
};
var a3 = new Personin();
//in
console.log(hasPrototypeProperty(a3,'name'));			//true   原型
a3.name = 'mm' ;
console.log(a3.name);
//hasOwnProperty()
console.log(hasPrototypeProperty(a3,'name'));			//false  实例

//Object.keys()取得对象上所有可枚举的实例属性
var keys = Object.keys(Personin.prototype);
console.log(keys);                                      //[ 'name', 'age', 'job', 'sayName' ]
var a4 = new Personin();
a4.name = 'sat' ;
a4.age = 7 ;
var a4keys = Object.keys(a4);
console.log(a4);                                        //{ name: 'sat', age: 7 }
//得到所有实例属性 无论是否枚举
//不可枚举的constructor属性
//以上两种可取代for-in循环
var keys = Object.getOwnPropertyNames(Personin.prototype);
console.log(keys);                                      //[ 'constructor', 'name', 'age', 'job', 'sayName' ]

//简化原型模式写法
function Person(){

}
Person.prototype = {
    //此时constructor不能指向Person
    //没创建一个函数 会同时创建prototype对象 自动获取constructor属性 此时的写法重写了默认的prototype对象
    //固constructor属性变成了新对象的constructor属性(指向Object构造函数) 不能指向Person函数
    //下面这句可以让constructor指向Person函数
    constructor : Person,
    name : 'sumo',
    age : 18 ,
    job : 'wfe',
    sayName : function(){
        console.log(this.name);
    }
};
var a5 = new Person();
console.log(a5 instanceof Object);          //true
console.log(a5 instanceof Person);          //true
//没有constructor : Person,时 false
console.log(a5.constructor == Person);      //false    ||   true
console.log(a5.constructor == Object);      //true     ||   false


//原型模式最大的弊端 --原型中的属性被实例所共享
//有时候实例需要有单独的属性
function Personshare(){

}
Personshare.prototype = {
    constructor : Personshare ,
    name : 'momo' ,
    age : 18 ,
    job : 'fee' ,
    friends : ['sumo','summore'],
    sayName : function(){
        console.log(this.name);
    }
};
var a6 = new Personshare();
var a7 = new Personshare();
a6.friends.push('sumomo');
console.log(a6.friends);                    //[ 'sumo', 'summore', 'sumomo' ]
console.log(a7.friends);                    //[ 'sumo', 'summore', 'sumomo' ]
console.log(a6.friends === a7.friends);     //true