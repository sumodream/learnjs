var stringValue = "hello world";
console.log(stringValue.length);		//11
//返回该位置的字符
console.log(stringValue.charAt(1));		//e
//返回该位置的字符编码
console.log(stringValue.charCodeAt(1));	//101
//特定访问字符
console.log(stringValue[1]);			//e

/**
 * join concat
 * join只可以连接数组 只接受一个参数 若参数为空 则以逗号隔开
 * concat可以连接string类型和array类型
 * concat连接的字符串和数组中的字符串最终返回的是一个新数组
 * @type {String}
 */
var stringValue = "hello world";
//concat接受多个字符串
console.log(stringValue.concat('!', 'js',' css',' html')); //hello world! js css html
//原字符串不变
console.log(stringValue);					//hello world
//join不能接受string  会报错
//console.log(stringValue.join('/'));		//join is not a function
var stringValue1 = ['hello','world'];  
//join接受数组
console.log(stringValue1.join('/'));	//hello/world
//concat也可接受数组 放在数组后面 形成新的数组
console.log(stringValue1.concat('js'));	//[ 'hello', 'world', 'js' ]



