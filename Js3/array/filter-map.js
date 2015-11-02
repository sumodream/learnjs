/**
 * filter指定的函数确定是否返回数组中的某一项
 * 查询符合条件的数组很有用
 * 返回一个数组
 * @type {Array}
 */
var number = [1,2,3,4,5,4,3,2,1];
var filterResult = number.filter(function(item,index,array) {
    return (item > 2);
});
console.log(filterResult);      //[ 3, 4, 5, 4, 3 ]


/**
 * map也返回一个数组,在原始数组中的对应的项上运行传入函数的结果
 * 适合创建包含的项与另一个数组一一对应的数组 
 * @type {Array}
 */
var mapResult = number.map(function(item,index,array){
    return item*2 ;
});
console.log(mapResult);         //[ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]


/**
 * forEach没有返回值 对数组中的每一项运行传入的函数 
 * 本质上和for循环迭代数组一样
 * @return {[type]} 
 */
number.forEach(function(item,index,array){
    //do something
});