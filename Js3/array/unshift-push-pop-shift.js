/**
 * 增加删除元素
 * @type {Array}
 */
//原始数组
var color = ['red','pink','yellow','black','orange'];
//unshift在数组首位添加元素
var	color1 = color.unshift('white');
//unshift原始数组返回增加后的数组
console.log(color);     //[ 'white', 'red', 'pink', 'yellow', 'black', 'orange' ]
//unshift返回值为更新后的数组长度
console.log(color1);	//6


//push在数组尾部添加元素
var color2 = color.push('blue','green');
//push原始数组返回增加后的数组
console.log(color);		//[ 'white','red','pink','yellow','black','orange','blue','green' ]
//push返回值为更新后的数组长度
console.log(color2);	//6


//shift删除数组首位的元素
var color3 = color.shift();		
//shift原始数组返回删除后的数组
console.log(color);			//[ 'red','pink','yellow','black','orange','blue','green' ]
//shift返回删除的元素
console.log(color3);		//white


//pop删除数组尾部的元素
var color4 = color.pop();
//pop原始数组返回删除后的数组
console.log(color);			//[ 'red','pink','yellow','black','orange','blue' ]
//pop返回删除后的元素
console.log(color4);		//green

