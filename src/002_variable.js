/*变量：
        严格控制大小写
        全局变量：在方法外部的申明的变量 方法内部 没有加var的变量
        局部变量：在方法内部 使用var的变量
        基本数据类型
        引用类型
        typeof操作符
*/

var a = 3; // number  全局变量

/*  变量一共有两种:全局变量:在整个运行程序中都有效 如下面的 var a=3;
                   局部变量:只在方法体中是有效的 如下面的 var a =2;
                            出了方法体会出现undefined 如下面的var b=2;
*/

/*
        function test(){
            //var a=2;  //局部变量
            //var b=2;  //局部变量
            c =5;       //全局变量 这种方法并不经常使用
            console.log(a);

        }
        test(); 
        console.log(c);//此时JavaScript执行顺序起作用 只有在test()之后再console.log(c)才会起作用
         
        //console.log(b);
*/
//JavaScript是弱类型的脚本语言 根据赋值决定变量的类型
//Number类型 ：整数和小数
var a1 = 10;
var a2 = 10.5;
var a3 = NaN; //not a number
var a4 = 1 / 0; //正无穷
var a5 = 070; //8进制和16进制(0xA)
console.log(a4); //Infinity
console.log(a5); //56

/*
        var a6=0.1;
        var a7=0.2;
        if(a6+a7==0.3){           //不要这样测试 因为浮点数值的精度是17位
            console.log('等于0.3');
        }else{
            console.log('不等于0.3');   //此为结果
        }
*/

var a8 = parseInt("aaabbcc");
//console.log(a8);              //NaN 

var a9 = parseInt("12abc");
//console.log(a9);              //12 截掉不是数字的字符

//undefined 数据类型  他的值只有一个 表示变量申明了 但是没有被赋值
var b1;
console.log(b1);

//Null 空值
var b2 = null;
console.log(b2);

//String 字符串类型         
var str1 = "我是字符串1";
var str2 = "abc";
console.log(str1); //我是字符串1
console.log(str2); //abc

//Boolean
var flag1 = false;
var flag2 = true;
console.log(flag1);

//引用数据类型
var arr = [1, 2, 3]; //数组类型
var date = new Date(); //日期类型
var obj = {}; //空对象

//typeof 操作符 用来判断数据类型
var a = 10; //number
var b = 10.3; //number
var c = true; //boolean
var d = 'abcd'; //string
var e = new Date(); //object
var f = NaN; //number
var g = [1, 2, 3]; //object
var h = undefined; //undefined
var i = null; //object 表示一个空对象的引用

console.log(typeof i);