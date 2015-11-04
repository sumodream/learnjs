/**
 * 引用类型与传统面向程序设计的类相似 但实现不同
 * Object是基础类型 其他所有类型都从Object继承了基本的行为
 * Array类型是一组值的有序列表 提供操作和转换这些值的功能
 * RegExp类型是ECMAScript支持正则表达式的一个接口
 * 函数实际上是Function类型的实例 函数也是对象 拥有方法 增强其行为
 */
/**
 * 三种基本包装类型Boolean Number String共同点
 * 每个包装类型都能映射到同名的基本类型
 * 在读取模式下访问基本类型时 就会创建一个对应的基本包装类型的对象 方便数据操作
 * 操作基本类型值的语句一经执行完毕 会立即销毁新创建的包装对象
 */
/**
 * 在所有代码执行之前 作用域中就已经存在Global和Math 
 * 大多数ECMAScript不能直接访问Global对象 使用window
 * 全局变量和函数都是Global对象的属性
 * Math对象提供很多属性和方法 完成复杂的数学计算
 */

/**
 * 关于基本数据类型和引用类型的差别
 * @type {Object}
 */
var a = new Object();
 	a.value = 1 ,
	b = a ,
	b.value = 2 ;
console.log(a.value);    //2


var a = 1 ,
	b = a ,
	b = 2 ;
console.log(a);			//1


