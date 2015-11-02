/**
 * reverse 翻转数组项的顺序
 * @type {Array}
 */
var number = [1,12,3,4,5];
number.reverse();
console.log(number);		//[ 5, 4, 3, 12, 1 ]


/**
 * sort 正序排序 
 * @type {Array}
 */
var number = [0,1,5,10,15];
number.sort();
//但会出现这种问题 比较过程中就拿第一个参数比较了
console.log(number);		//[ 0, 1, 10, 15, 5 ]

function compare(value1,value2){
	if(value1 < value2){
		return -1 ;
	}else if(value1 > value2){
		return 1 ;
	}else{
		return 0 ;
	}
}
var number = [0,1,5,10,15];
number.sort(compare);
console.log(number);		//[ 0, 1, 5, 10, 15 ]