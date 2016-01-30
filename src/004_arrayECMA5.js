/* 引用类型 数组新特性 */
/**
 *indexOf 和 lastIndexOf 方法
 *
 */
		var arr=[1,2,3,4,5,4,3,2,1];
		//1个参数时候表示传值 返回索引位置(index从0开始)
		//两个参数的时候，第一个参数表示起始位置，第二个参数还是值
		//var index=arr.indexOf(4);     //值为4的索引位置是3
		//var index=arr.indexOf(4,4);   //起始位置是5的值为4的索引是5
		//var index=arr.indexOf(true);  //-1
		//console.log(index);

		//他们查找的数组比较的时候是 ‘===’ 绝对的等于
		var index=arr.lastIndexOf(2);   //从后往前找的索引  //7
		console.log(index);   


/**
 *	5个新加迭代的方法
 *	every:对于数组每一个元素进行一个函数的运行 如果都返回true 最后则返回true 如果有一个返回false 最后结果则返回false
 *	filter:对于数组的每一个元素进行一个函数的运行 给定的函数去执行 把过滤后的结果返回 即过滤掉不符合条件的
 *	forEach:循环数组每一项的值 并执行一个方法
 *	map:对于数组的每一个元素进行一个函数的运行 可以经过函数执行完毕后 把新的结果返回
 *	some:对于数组每一个元素进行一个函数的运行 如果有一项返回true 最后则返回true 如果每一项返回false 最后结果则返回false
 *
 */

 		//every:  返回true 或是 false
		//		var arr=[1,2,3,4,5,4,3,2,1];
 		var result=arr.every(function(item,index,array){
 			return item > 1;
 		});
 		console.log(result);  //false


 		//filter:返回过滤后的结果
 		//		var arr=[1,2,3,4,5,4,3,2,1];
 		var result=arr.filter(function(item,index,array) {
 			return item > 2;
 		});
 		console.log(result);  //[ 3, 4, 5, 4, 3 ]


 		//forEach:循环返回数组每一项的值 并执行一个方法
 		//		var arr=[1,2,3,4,5,4,3,2,1];

 		var result=arr.forEach(function(item,index,array) {
 			console.log (item);
 		});
 		

 		//map:返回结果
 		//		var arr=[1,2,3,4,5,4,3,2,1];

 		var result=arr.map(function(item,index,array) {
 			return item * 2;
 		});
 		console.log(result);
	

 		//some:有一项满足则返回true 
 		//		var arr=[1,2,3,4,5,4,3,2,1];

 		var result=arr.some(function(item,index,array){
 			return item >= 5; //true
 			return item > 10; //false
 		});
 		console.log(result);


/**
 * reduce 和 reduceRight 方法  只是遍历的起始位置不同 从左遍历和从右遍历 
 *
 */ 

 		//前一个值，当前值，索引位置，array
 		//		var arr=[1,2,3,4,5,4,3,2,1];

 		var result=arr.reduce(function(prev,cur,index,array){
 			return  prev + cur ; //就是把前一个值和当前值相加的和
 		});
 		console.log(result);  //25  (1+2+3+4)*2+5

		var result=arr.reduceRight(function(prev,cur,index,array){
 			return  prev + cur ; //就是把右边的一个值和当前值相加的和
 		});
 		console.log(result);  //25  (1+2+3+4)*2+5
