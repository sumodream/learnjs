/**
 * slice基于原始数字可创建一个或多个新的数组,slice不会改变原始的数组
 * slice返回起始和结束位置
 * slice(-index,-index)则使用数组长度加上-index得到的结果与此相同
 * @type {Array}
 */
//原始数组
var color = ['red','blue','green','pink','gray','black','orange','white','purple'];
//slice(index)返回从数字index开始后面所有的参数
var color1 = color.slice(1);
console.log(color1);   //[ 'blue','green','pink','gray','black','orange','white','purple' ]

//slice(index1,index2)返回数字index1开始后到index2 - 1这之间的所有参数
var color2 = color.slice(1,4); 
console.log(color2);   //[ 'blue', 'green', 'pink' ]

//slice不会改变原始的数组
console.log(color);	 //['red','blue','green','pink','gray','black','orange','white','purple']



/**
 * splice强大的数组方法 删除 插入 替换
 * splice 会改变原始数组
 * @type {Array}
 */
var color = ['red','blue','green','pink','gray','black','orange','white','purple'];
//splice(index,number)删除从index的位置之后的number数
var color1 = color.splice(0,2);
//返回number项对应的值
console.log(color1);		//[ 'red', 'blue' ]
//会改变原始数组
console.log(color);			//[ 'green', 'pink', 'gray', 'black', 'orange', 'white', 'purple' ]

//splice(index,0,item)插入增加从index开始的元素,置于index之后
//返回0对应的项目值
var color2 = color.splice(1,0,'yellow');
console.log(color2);    	//[]  
//返回在操作color1后对应的color的值
console.log(color);			//[ 'green','yellow', 'pink', 'gray', 'black', 'orange', 'white', 'purple' ]

//splice(index,number,item)替换将index之后的number项替换成item项
var color3 = color.splice(1,1,'red');
console.log(color3);		//[ 'yellow' ]
console.log(color);			//[ 'green','red', 'pink', 'gray', 'black', 'orange', 'white', 'purple' ]