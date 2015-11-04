/**
 * match()模式匹配
 * 本质上调用RegExp的exec()方法相同
 * match()只接受一个参数 要么是正则表达式 要么是RegExp对象
 * 返回一个数组
 * @type {String}
 */
var text = 'cat,bat,sat,fat';
var pattern = /.at/;
var matches = text.match(pattern);
console.log(matches.index);         //0
console.log(matches[0]);            //cat
console.log(pattern.lastIndex);     //0

/**
 * search()模式匹配
 * 和match类似 只接受一个参数
 * 返回字符串中第一个匹配项的索引 没有找到匹配项就返回-1
 * 该方法始终是从字符串开头向后查找模式
 * @type {[type]}
 */
var pos = text.search(/at/);
console.log(pos);               //1   at在字符串第一次出现的位置



/**
 * replace()模式匹配
 * 接受两个参数 第一个参数可以说RegExp对象 或是 一个字符串(该不会被转译成正则表达式)
 * 第二个参数可以是一个字符串或是函数
 * @type {[type]}
 */
//若第一个参数是字符串 则只会替换第一个子字符串
var replaceResult = text.replace('at','omd');
console.log(replaceResult);                    //comd,bat,sat,fat
//若要替换所有 需要将第一个字符串写成正则 且为全局g标志
var replaceResult1 = text.replace(/at/g,'omd');
console.log(replaceResult1);                    //comd,bomd,somd,fomd
//第二个参数是字符串 可用特殊字符序列
//$n 匹配第n个捕获组的子字符串
var result = text.replace(/(.at)/g,'word($1)');
console.log(result);            //word(cat),word(bat),word(sat),word(fat)
//第二个参数是一个函数 接收(模式匹配项,模式匹配项在字符串中的位置,原始字符串)
//返回一个字符串
function htmlEscape(text){
    return text.replace(/[<>"&]/g,function(match,pos,originalText){
        switch(match){
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '\"':
                return '&quot;';
        }
    });
}   //&lt;p class=&quot;greeting&quot;&gt;hello world!&lt;/p&gt;
    console.log(htmlEscape('<p class=\"greeting\">hello world!</p>'));


/**
 * split()模式匹配(微妙差别,多在浏览器上做测试)
 * 基于指定的分隔符将字符串分隔为多个子字符串 并将结果放在新的数组中
 * 可以说字符串 也可以是RegExp对象(不会将字符串看成是正则表达式)
 * 接收两个两个参数 第二个为可选(指定数组的大小,以确保返回的数组不会超过既定大小)
 * 通过正则 取得关于,的数组
 * @type {String}
 */
var colorText = 'red,green,pink,orange';
var color1 = colorText.split(',');
var color2 = colorText.split(',',3);
var color3 = colorText.split(/[^\,]+/);
console.log(color1);                //[ 'red', 'green', 'pink', 'orange' ]
console.log(color2);                //[ 'red', 'green', 'pink' ]
//正则 取得,数组 
//因为通过正则表达式指定的分隔符出现在字符串的开头(red) 或是结尾(orange),故会出现空字符串''
console.log(color3);                //[ '', ',', ',', ',', '' ]
