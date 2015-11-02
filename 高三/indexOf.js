/**
 * indexOf lastIndexOf 
 * indexOf(值)                       			按顺序显示的位置
 * lastIndexOf(值)                   			倒序显示的位置
 * indexOf(值,从第几个开始算的参数)  			按顺序显示的位置
 * lastIndexOf(值.倒数从第几个开始算的参数)  	倒序显示的位置
 * @type {Array}
 */						
var numbers = [1,2,3,4,5,4,3,2,1];
console.log(numbers.indexOf(4));     	//3
console.log(numbers.lastIndexOf(4)); 	//5
console.log(numbers.indexOf(4,4));   	//5
console.log(numbers.lastIndexOf(4,4));  //3
