/**
 * slice  substring substr
 * 全部都不改变原始字符串
 * @type {String}
 */
/*var stringValue = "hello world";
//第一个参数从index位置开始至最后截取
console.log(stringValue.slice(3));				//lo world
console.log(stringValue.substring(3));			//lo world
console.log(stringValue.substr(3));				//lo world
//slice substring第二个参数截取的是index-1之间的字符串
console.log(stringValue.slice(3, 7));			//lo w
console.log(stringValue.substring(3,7));		//lo w
//substr第二个参数指返回的字符个数
console.log(stringValue.substr(3,7));			//lo worl*/

/**
 * [stringValue description]
 * @type {String}
 */
var stringValue = "hello world";
//slice第一个为负数 + 字符串长度 开始截取
console.log(stringValue.slice(-3));				//rld
//substring 第一个为负数 是将负数变为0 开始截取
console.log(stringValue.substring(-3));			//hello world
//substr 第一个为负数 + 字符串长度 开始截取
console.log(stringValue.substr(-3));			//rld
//slice 第二个为负数 从第一个index开始 到第二个index + length 结束
console.log(stringValue.slice(3, -4));			//lo w
//substring 第二个为负数 将第二个负数变为0 但这个方法会将较小的数作为开始位置 即为(0,3)
console.log(stringValue.substring(3,-4));		//hel
//substr第二个为负数 将负数变为0 即参照正数时返回字符串的个数 即空字符串
console.log(stringValue.substr(3,-4));			//空字符串