function sayHi(sName,sMessage){
	//尽量减少使用alert调试函数
	console.log("Hello "+sName+","+sMessage);
}

sayHi("Sumo","What's up?");

function sum(iNum1,iNum2){
	//和Java一样，函数在执行return语句后停止执行代码，因此return语句后的代码都不会被执行,不能直接在alert后调试
	return iNum1+iNum2;
	
}
	//将sum函数返回的值赋予一个变量
    var iResult=sum(1,1);
	console.log(iResult);

function sayHi(sMessage){
	//函数若没有返回值，那么可以调用没有参数的return运算符，随时退出函数，真正返回的值是undefined
	if(sMessage=="bye"){
		return;
	}
	console.log(sMessage);							//Sumo
}

//函数不能够重载，用相同的名字定义两个相同的函数真正使用的是后一个函数，使用arguments对象可避开这种限制
function sayHi(){
	if(arguments[0]=="bye"){
		return;
	}
	console.log(arguments[0]);						//2
	//还可以用arguments对象检测传递给函数的参数个数，并引用属性arguments.length，最多25，超过的将以undefined传递给函数
}

//原型方式
function Car(){
}
	Car.prototype.door=4;
 	Car.prototype.color = "red";
 	Car.prototype.mpg=23;
 	Car.prototype.showColor=function(){
 		console.log(this.color);
 	};
 	var oCar1=new Car();
 	var oCar2=new Car();
 	console.log(oCar1 instanceof Car);  			//true