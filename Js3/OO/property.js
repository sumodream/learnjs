/**
 * 特性(attribute)是内部值 属性(property)有各种特性
 * ECMAScript有两种属性:数据属性 访问器属性
 * @type {Object}
 */
/**
 * 1.数据属性(包含一个数据值的位置  在这个位置可以读取和写入值) 有四特性描述其行为
 * [[Configurable]] 能否通过delete删除属性从而重新定义属性 是否可配置
 * 能否修改属性的特性 能否把属性修改为访问器属性 默认true
 * [[Enumerable]] 能否通过for-in循环返回属性 默认true
 * [[Writable]] 能否修改属性的值 直接在对象上定义属性 默认true
 * [[Value]] 包含这个属性的数据值 默认undefined
 * @type {Object}
 */
var person = {
    name : 'sumo',
    sex  : 'female',
    job  : 'Front end Engineer'
};
console.log(person.name);       //sumo

/*var person = {
    name : 'sumo',
    sex  : 'female',
    job  : 'Front end Engineer',
    sayName : function(){
        alert(this.name);
    }
};*/
/**
 * name属性的值是只读的
 * 该属性的值设定为不可更改 即在非严格模式下 会忽略赋值操作 严格模式下 会报错
 * @type {Object}
 */
var person1 = {};
Object.defineProperty(person1,'name',{
    writable : false ,
    value : 'sumo'
});
console.log(person1.name);      //sumo
person1.name = 'sumore';
console.log(person1.name);      //sumo
//同上 不能从对象中删除属性
//可以多次调用defineProperty()方法修改同一个属性但是把configurable设置为false之后会有限制
var person2 = {};
Object.defineProperty(person2,'name',{
    configurable : false ,
    value : 'sumo'
});
console.log(person2.name);      //sumo
person2.name = 'sumore';
console.log(person2.name);      //sumo

//若调用delete 报错
/*var person3 = {};
Object.defineProperty(person3,'name',{
    configurable : false ,
    value : 'sumo'
});
Object.defineProperty(person3,'name',{
    configurable : true ,
    value : 'sumore'
});*/


/**
 * 2.访问器属性(不包含数据值) 设置一个属性的值会导致其他属性发生变化
 * [[Configurable]] 能否通过delete删除属性从而重新定义属性 是否可配置
 * 能否修改属性的特性 能否把属性修改为访问器属性 默认true
 * [[Enumerable]] 能否通过for-in循环返回属性 默认true
 * [[Get]] 在读取属性时调用的函数 返回有效的值 默认undefined
 * [[Set]] 在写入属性时调用的函数 并传入新值   默认undefined
 * @type {Object}
 */
//get和set可以只写其一  但若没有该方法 尝试写入或读取会报错或undefined
//不支持Object.defineProperty()方法的浏览器 不能修改[[Configurable]] [[Enumerable]] 
var book = {
    //_year 前面 _ 是常用的记号 表示只能通过对象方法访问的属性
    _year : 2015 ,
    edition : 2
};
Object.defineProperty(book,'year',{
    get : function(){
        return this._year ;
    },
    set : function(newValue){
        if(newValue > 2015){
            this._year = newValue ;
            this.edition += newValue - 2015 ;
        }
    }
});
book.year = 2016 ;
console.log(book.edition);      //3

//定义访问器的旧方法(不好使)
/*var book1 = {
    _year : 2015 ,
    edition : 2
};
book1._defineGetter_('year',function(){
    return this._year ;
});
book1._defineSetter_('year',function(newValue){
    if(newValue > 2015){
        this._year = newValue ;
        this.edition += newValue - 2015 ;
    }
});
book1.year = 2016 ;
console.log(book1.edition);*/

//定义多个属性(在同一时间创建的)
var book2 = {};
Object.defineProperties(book2,{
    _year : {
        value : 2015
    },
    edition : {
        value : 2
    },
    year : {
        get : function(){
            return this._year ;
        },
        set : function(newValue){
            if(newValue > 2015){
                this._year = newValue ;
                this.edition += newValue - 2015 ;
            }
        }
    }
});
var descriptor = Object.getOwnPropertyDescriptor(book2,'_year');
console.log(descriptor.value);           //2015
console.log(descriptor.configurable);    //false
console.log(typeof descriptor.get);      //undefined

var descriptor = Object.getOwnPropertyDescriptor(book2,'year');
console.log(descriptor.value);          //undefined
console.log(descriptor.enumerable);     //false
console.log(typeof descriptor.get);     //function  get指向getter函数的指针
