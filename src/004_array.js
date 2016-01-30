/**
 *  引用类型 数组 各种方法
 *  数组本身也是对象
 *  js中的数组类似于Java里的map容器 长度即可随意改变 元素类型任意
 *  
 */

//var arr1=new Array();//此种方法比较麻烦 不推荐
var arr = [1, 2, 3, 4, true, 'abc', new Date()]; //最简单的形式
console.log(arr.length); //7
arr.length = 5;
console.log(arr); //  [ 1, 2, 3, 4, true ]                         //隐式的调用arr.toString()方法 即：[object object]

/**
 *push 和 pop 方法
 *
 */
var arr = [new Date(), false]; //会显示当前的时间加上push方法推送的元素
arr.push(1, 2, true);
var result = arr.push(2, 3, true); //push方法向数组中堆加元素 返回值为新数组的元素个数
console.log(arr); //[ Sat Jan 30 2016 20:49:51 GMT+0800 (中国标准时间),false,1,2,true,2,3,true ]
console.log(result); //8  //push方法向数组中堆加元素 返回值为新数组的元素个数
var obj = arr.pop(); // pop()方法中不需要任何元素 从数组的尾部移除一个元素 返回值是移除的元素
console.log(arr); //[ Sat Jan 30 2016 20:49:51 GMT+0800 (中国标准时间),false,1,2,true,2,3]
console.log(obj); //true  //返回值是移除的元素

/**
 *shift 和 unshift 方法
 *
 */
var arr = [1, 2, 3, true, new Date()];
var r1 = arr.shift(); //从头部移除一个元素 返回值为移除的元素
//console.log(arr);
//console.log(r1);
var r2 = arr.unshift(10, false); //从头部插入多个元素  返回新数组的长度
//console.log(arr);
//console.log(r2);

/**
 *splice 和 slice 方法(截取的方法)
 *splice 方法操作数组本身(改变原数组)
 *slice 方法不操作数组本身(不改变原数组)
 */
//splice方法：第一个参数：起始位置
//        第二个参数：表示截取的个数(删除的个数)
//        从第三个参数以后：表示追加的新元素的个数(从截取的位置开始追加)
var arr = [1, 2, 3, 4, 5];
//arr.splice(1,2,3,4,5);        //1,3,4,5,4,5
/*  arr.splice(1);                  //1 后面的参数都被截取了
      console.log(arr);  //[ 1 ]*/
var resulr = arr.splice(1, 0, 4); //第二个参数为零的话 第三个参数表示新增的元素 没有删除元素
console.log(arr); //[ 1, 4, 2, 3, 4, 5 ]
console.log(resulr); //[ 2, 3 ]   返回的是截取的内容

//slice方法：返回的是截取的内容 截取范围[左闭右开) 
var arr = [1, 2, 3, 4, 5];
var result = arr.slice(2, 4);
console.log(result); //[ 3, 4 ]             //正常的console.log(arr)期望情况应该是1,4,5 但结果是1,2,3,4,5  所以不操作数组本身 用返回值调用  
console.log(arr); //[ 1, 2, 3, 4, 5 ]  方法不操作数组本身
/**
 *contact 和 join 方法  不操作数组本身的方法
 *
 */
var arr1 = [1, 2, 3];
var arr2 = [true, 4, 5];
var result=arr1.concat(arr2); //合并连接的结果(不操作数组本身)
console.log(result);  //[ 1, 2, 3, true, 4, 5 ] 

var result = arr1.join('-'); //在每个元素之间加入内容(不操作数组本身)
console.log(arr1);  //[ 1, 2, 3 ]  原数组不改变
console.log(result); //1-2-3

/**
 *sort正序排序 和 revers倒序排序 方法  操作数组本身的方法
 *
 */
var arr1 = [5, 2, 1, 4, 3];
var arr2 = [10, 2, 4, 7, 1];
arr1.sort();                 //1,2,3,4,5
arr2.reverse();              //在把arr1.sort()方法注释掉后 按照集合的位置倒序排序 当两者都有时 倒序正常起来
console.log(arr1);  //[ 1, 2, 3, 4, 5 ]
console.log(arr2);  //[ 1, 7, 4, 2, 10 ]

arr2.sort();
//正序排序 期望情况应该是1,2,4,7,10  但结果是1,10,2,4,7 按字符串一个个比较的
console.log(arr2);    //[ 1, 10, 2, 4, 7 ]             


//为解决上面问题
function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
arr2.sort(compare); // 此时为正序排序 想倒序排序 只需更改return值
console.log(arr2);  //[ 1, 2, 4, 7, 10 ]