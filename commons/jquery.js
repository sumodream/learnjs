/**
 * @author Sumo 
 * 此处也可以放在 033_design8.html中
 */
        //模拟jQuery底层链式编程
        //块级作用域
        //特点1: 程序启动的时候 里面代码直接执行了
        //alert('我执行了');
        //特点2:内部的成员变量 外部无法访问(除了不加var修饰的变量)
        //var a = 10;  //去掉var 就可以了 
        (function(window , undefined){
            // $ 最常用的对象 返回给外界 大型程序开发 一般使用'_'作为私有的对象(规范)
            function _$(arguments){
                //实现代码
                var idselector = /#\w+/ ; //正则表达式匹配id选择器
                this.dom ; //此属性 接收所得到的元素
                //如果匹配成功 则接收dom元素 arguments[0] = '#inp'
                if(idselector.test(arguments[0])){
                    this.dom = document.getElementById(arguments[0].substring(1));
                }else{
                    throw new Error ('arguments is error !');
                }
                
            }
            //在Function类上扩展一个可以链式调用的方法
            Function.prototype.method = function(methodName , fn){
                this.prototype[methodName] = fn ;
                return this ; //链式编程的关键
            };
            //在_$原型对象上加一些公共的方法
            _$.prototype = {
                constructor : _$ ,
                addEvent:function(type,fn){
                    //alert('addEvent被调用');
                    //给你得到的元素 注册事件
                    if(window.addEventListener){//FF判断
                        this.dom.addEventListener(type,fn);

                    }else if(window.attachEvent){//IE判断
                        this.dom.attachEvent('on'+type,fn);

                    }
                    
                    return this ;
                },
                setStyle:function(prop,val){
                    //alert('setStyle被调用');
                    this.dom.style[prop] = val ;
                    return this ;
                }
            };
            //window上先注册一个全局变量 与外界产生关系
            window.$ = _$;  
            //写一个准备的方法
            _$.onReady = function(fn){
                //1.实例化出来_$对象 真正的注册到window上
                window.$ = function(){
                    return new _$(arguments);
                };
                //2.执行传入进来的代码
                fn();
                //3.实现链式编程
                _$.method('addEvent',function(){
                    //nothing to do

                }).method('setStyle',function(){
                    //nothing to do 

                });
            };         
        })(window);//程序的入口 window传入作用域中
        