/**
 * 函数表达式
 * 定义函数的方式:函数声明 函数表达式
 */
/**
 * 1.递归函数
 * 一个函数通过名字调用自身
 */
/*function factorial(num){
    if(num <= 1){
        return 1 ;
    }else{
        return num * factorial(num-1);
    }
}
//console.log(factorial(4));            //24
var newFactorial = factorial ;
factorial = null ;
console.log(newFactorial(4));*/           //出错 使用arguments.callee解决 也解决函数耦合情况

//arguments.callee()
/*function factorial(num){
    if(num <= 1){
        return 1 ;
    }else{
        return num * arguments.callee(num -1)
    }
}
var newFactorial = factorial;
factorial = null ;
console.log(newFactorial(4)); */              //24

//严格模式下 使用命名函数表达式
var factorial = (function f(num){
    if(num <= 1 ){
        return 1 ;
    }else{
        return num * f(num-1);
    }
});
console.log(factorial(4));                      //24