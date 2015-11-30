/**
 * [fun description]
 * @param  {[type]} n [description]
 * @param  {[type]} o [description]
 * @return {[type]}   [description]
 */
function fun(n,o){
	console.log(o);
	return {
		fun:function(m){
			return fun(m,n);
		}
	};
}
/*可以得知，第一个fun(0)是在调用第一层fun函数。第二个fun(1)是在调用前一个fun的返回值的fun函数，所以：
第后面几个fun(1),fun(2),fun(3),函数都是在调用第二层fun函数。
在第一次调用fun(0)时，o为undefined；
第二次调用fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；
第三次调用fun(2)时m为2，但依然是调用a.fun，所以还是闭包了第一次调用时的n，所以内部调用第一层的fun(2,0);所以o为0
第四次同理；*/
var a = fun(0);		//undefined
a.fun(1);			//0		
a.fun(2);			//0
a.fun(3);			//0
/*先从fun(0)开始看，肯定是调用的第一层fun函数；而他的返回值是一个对象，所以第二个fun(1)调用的是第二层fun函数，后面几个也是调用的第二层fun函数。
在第一次调用第一层fun(0)时，o为undefined；
第二次调用 .fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；
第三次调用 .fun(2)时m为2，此时当前的fun函数不是第一次执行的返回对象，而是第二次执行的返回对象。而在第二次执行第一层fun函数时时(1,0)所以n=1,o=0,返回时闭包了第二次的n，遂在第三次调用第三层fun函数时m=2,n=1，即调用第一层fun函数fun(2,1)，所以o为1；
第四次调用 .fun(3)时m为3，闭包了第三次调用的n，同理，最终调用第一层fun函数为fun(3,2)；所以o为2；*/
var b = fun(0).fun(1).fun(2).fun(3);	//undefined 0 1 2
/*fun(0)为执行第一层fun函数，.fun(1)执行的是fun(0)返回的第二层fun函数，这里语句结束，遂c存放的是fun(1)的返回值，而不是fun(0)的返回值，所以c中闭包的也是fun(1)第二次执行的n的值。c.fun(2)执行的是fun(1)返回的第二层fun函数，c.fun(3)执行的也是fun(1)返回的第二层fun函数。
在第一次调用第一层fun(0)时，o为undefined；
第二次调用 .fun(1)时m为1，此时fun闭包了外层函数的n，也就是第一次调用的n=0，即m=1，n=0，并在内部调用第一层fun函数fun(1,0);所以o为0；
第三次调用 .fun(2)时m为2，此时fun闭包的是第二次调用的n=1，即m=2，n=1，并在内部调用第一层fun函数fun(2,1);所以o为1；
第四次.fun(3)时同理，但依然是调用的第二次的返回值，遂最终调用第一层fun函数fun(3,1)，所以o还为1*/
var c = fun(0).fun(1);  //undefined 0
c.fun(2);			//1
c.fun(3);			//1

/**
    * 获取指定函数的函数名称（用于兼容IE）
    * @param {Function} fun 任意函数
    * 可知函数是匿名函数或是命名函数
    */
   //通过fun.name来判断是命名函数还是匿名函数
function getFunctionName(fun) {
    if (fun.name !== undefined)
        return fun.name;
    var ret = fun.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret;
}
