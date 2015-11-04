/**
 * indexOf lastIndexOf 
 * indexOf(值)                       			按顺序显示的位置
 * lastIndexOf(值)                   			倒序显示的位置
 * indexOf(值,从第几个开始算的参数)  			按顺序显示的位置
 * lastIndexOf(值.倒数从第几个开始算的参数)  	倒序显示的位置
 * @type {Array}
 */						
var numbers = [1,2,3,4,5,4,3,2,1];
//按顺序显示值的位置
console.log(numbers.indexOf(4));     	//3
//倒序显示值的位置
console.log(numbers.lastIndexOf(4)); 	//5
//按顺序显示从第几个参数开始计算的值的位置
console.log(numbers.indexOf(4,4));   	//5
//按倒序显示从第几个参数开始计算的值的位置
console.log(numbers.lastIndexOf(4,4));  //3

//参照上面
var stringValue = 'hello world';
console.log(stringValue.indexOf('o'));		//4
console.log(stringValue.lastIndexOf('o'));	//7
console.log(stringValue.indexOf('o',6));		//7
console.log(stringValue.lastIndexOf('o',6));	//4


/**
 * 循环匹配所有的子字符串
 * @type {String}
 */
var stringValue1 = 'Lorem ipsad wdev dsfger dasde cvfbe fdfwe e dse';
var position = new Array();
var pos = stringValue1.indexOf('e');
while(pos > -1){
	position.push(pos);
	pos = stringValue1.indexOf('e',pos+1);
}
console.log(position);
console.log(position.length);







