/**
 * localCompare 比较两个字符串
 * 当原始字符串在字母表中比所选字符串参数大 则返回1
 * 当原始字符串在字母表中与所选字符串参数相等 则返回0
 * 当原始字符串在字母表中比所选字符串参数小 则返回-1
 * @type {String}
 */
var stringValue = 'pink';
//当原始字符串在字母表中比所选字符串参数大 则返回1
console.log(stringValue.localeCompare('blue'));         //1
//当原始字符串在字母表中与所选字符串参数相等 则返回0
console.log(stringValue.localeCompare('pink'));         //0
//当原始字符串在字母表中比所选字符串参数小 则返回-1
console.log(stringValue.localeCompare('yellow'));       //-1

//localCompare()返回的数值取决于实现 所以使用如下
//区分大小写,原始字符串为大写字母时在字母表中排在所选小写字母的前面(美国)
//我试验的基本上还是不区分大小写的
function determineOrder(value){
    var result = stringValue.localeCompare(value);
    if(result < 0){
        console.log("the '"+stringValue+"' comes before the string '"+value +"'.");
    }else if(result > 0){
        console.log("the '"+stringValue+"' comes after the string '"+value+"'.");
    }else{
        console.log("the '"+stringValue+"' is equal to the string '"+value+"'.");
    }
}
determineOrder('blue');
determineOrder('pink');
determineOrder('yellow');