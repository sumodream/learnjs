/**
 * trim 删除前置后缀空格 不改变原始字符串
 * @type {String}
 */
var stringValue = '     hello world     ';
var trimmedStringValue = stringValue.trim();
console.log(stringValue);               //     hello world     
console.log(trimmedStringValue);        //hello world

/**
 * toUpperCase toLocalUpperCase toLowerCase toLocalLowerCase大小写转换
 * toLocalUpperCase toLocalLowerCase针对特定地区实现(如土耳其)
 * @type {String}
 */
var stringValue1 = 'hello world';
console.log(stringValue1.toUpperCase());        //HELLO WORLD
console.log(stringValue1.toLowerCase());        //hello world

