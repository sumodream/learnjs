/*引用类型 Object 各种方法*/
/**
 * 和  方法
 *
 */
//Object 是所有类的基础类
//实例化对象
//var obj=new Object();
var obj = {}; //简单方便 推荐
//给对象设置属性
obj.name = "张三";
obj.age = 20;
obj.sex = "男";
//此处[]一定要用""(用''为undefined)
//此处也可以obj.birthday
obj["birthday"] = "2000-01-01";
obj.say = function() {
		console.log('hello world');
	}
	//访问对象的属性和方法
console.log(obj.name); //张三
console.log(obj.age); //20
console.log(obj.birthday); //2000-01-01
obj.say(); //hello world        //方法直接访问就可以
//delete 操作符 删除对象的属性或方法

delete obj.age; //删除年龄
delete obj.say; //删除方法
console.log(obj.name); //张三  
console.log(obj.age); // 删除年龄 undefined
console.log(obj.sex); //男
//obj.say();         // 删除方法 is not a function

//如何去遍历一个js对象  for-in 语句式

for (var attribute in obj) {
	console.log(attribute + ":" + obj[attribute]); //此时一定要用[] 不能用.(用.值为undefined)
	//name:张三sex:男birthday:2000-01-01		
}

//Constructor 保存对象的创建函数

console.log(obj.constructor); //[Function: Object]  //只执行此行函数看效果
var arr = [];
console.log(arr.constructor); //[Function: Array]

//hasOwnProperty(propertyName) 用于检测给定的属性在对象中是否存在或是否属于自己本身的属性

console.log(obj.hasOwnProperty("name")); //true
console.log(obj.isPrototypeOf('name')); //false   不是另外对象的原型
//isPrototypeOf(Object) 用于检测传入的对象是否是另外一个对象的原型

//propertyIsEnumerable(propertyName) 用于检测给定的属性是否能够使用for-in语句来枚举

console.log(obj.propertyIsEnumerable("say")); //false
console.log(obj.propertyIsEnumerable("age")); //false  其他值为""为true

//toLocalString() 返回对象的字符串表示 该字符串与执行环境的地区适应
//toString() 返回对象的字符串表示
console.log(obj.toString()); //[object Object]
//valueOf() 返回对象的字符串 数值 或布尔表示
console.log(obj.valueOf());  //{ name: '张三', sex: '男', birthday: '2000-01-01' }