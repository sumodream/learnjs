/**
 * every(数组项的值,数组的位置.数组对象本身)    //所有的项都得满足
 * some(数组项的值,数组的位置,数组对象本身) 	//满足一些即可
 * @type {Array}
 */
var  numbers = [1,2,3,4,5,4,3,2,1];
//every 所有item都得满足返回true或false
var everyResult = numbers.every(function(item,index,array){
	return (item > 2);
});
console.log(everyResult);    //false

//some 所有item都得满足返回true或false
var someResult = numbers.some(function(item,index,array){
	return (item > 2);
});
console.log(someResult);     //true