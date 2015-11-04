/**
 * 1.URI编码
 * encodeURI 可解析空格 %20 (有效的URI不能包含某些字符 如空格)用特殊的UTF-8替换无效的字符 让浏览器被理解接收 
 * encodeURI不会对本身属于URI的特殊字符进行编码(冒号,反斜杠,问号,井号)
 * encodeURIComponent 任何非标准字符进行编码
 * @type {String}
 */
/**
 * 可以对整个URI使用encodeURI 对附加在现有的URI后面的字符串使用encodeURIComponent()
 * 但encodeURIComponent使用较多 在实践中常见的是对查询字符串参数而不是对基础URI进行编码
 * @type {String}
 */
var uri = 'http://www.baidu.com/illegal value.htm#start';
//http://www.baidu.com/illegal%20value.htm#start
console.log(encodeURI(uri));
//http%3A%2F%2Fwww.baidu.com%2Fillegal%20value.htm%23start
console.log(encodeURIComponent(uri));
/**
 * decodeURI decodeURIComponent反解析
 * decodeURI只能对encodeURI替换的字符进行解析 %20为空格 不能解析其他 如%23为#
 * decodeURIComponent可对encodeURIComponent进行解析 所有特殊字符
 * @type {String}
 */
var uri1 = 'http%3A%2F%2Fwww.baidu.com%2Fillegal%20value.htm%23start';
//http%3A%2F%2Fwww.baidu.com%2Fillegal value.htm%23start
console.log(decodeURI(uri1));
//http://www.baidu.com/illegal value.htm#start
console.log(decodeURIComponent(uri1));




