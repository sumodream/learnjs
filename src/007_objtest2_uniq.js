/*引用类型 objtest  去掉数组重复项*/
/*number 和 string 都化为 string 并且 '' 还是 '' */

		var arr=[1,2,3,2,4,2,3,6,'1','2','10','2','3','5','5','1','10','15','',''];

		//js对象的特性：在js对象中 key 是永远不会重复的
		
/*		var obj={};
		obj.name="张三";
		obj.age=20;
		console.log(obj.name);
		obj.name="王五";
		console.log(obj.name);*/


		// 1 把数组转成一个js的对象
		// 2 把数组中的值变成js对象中的key
		// 3 把这个对象再还原成数组

		// 1 把数组转成一个js的对象
		function toObject(arr){
			var obj ={};                    //私有的对象
			var j;                          //接收数组长度的变量
			for(var i=0 , j=arr.length;i<j;i++){
		// 2 把数组中的值变成js对象中的key
				obj[arr[i]]=true;          
			}
			return obj;	
		}
		//console.log(toObject(arr));  //{ '1': true,'2': true,'3': true,'4': true,'5': true,'6': true,'10': true,'15': true,'': true }
		// 3 把这个对象再还原成数组
		function keys(obj){
			var arr=[];                         //私有对象
			for (var attr in obj){
				//hasOwnProperty() 用于检测给定的属性在对象中是否存在或是否属于自己本身的属性
				if(obj.hasOwnProperty(attr)){   //YUI 底层代码
					arr.push(attr);
				}
			}
			return arr;
		}
		//index 
		//[ '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19' ]
		//console.log(keys(arr));
 
 		//综合的方法 去掉数组中的重复项
		function uniq(newarr){
			return keys(toObject(newarr));
		}
		//console.log(uniq(arr));   //[ '1', '2', '3', '4', '5', '6', '10', '15', '' ]



		var arr = [1,2,3,2,4,2,3,6,'1','2','10','2','3','5','5','1','10','15','',''];
		var toObject = function(arr){
			var obj={};
			for(var i = 0 ; i<arr.length;i++){
				obj[arr[i]]=true;
			}
			return obj;
		}
		var keys = function(obj){
			var arr = [];
			for(var attr in obj){
				if(obj.hasOwnProperty(attr)){
					arr.push(attr);
				}
			}
			return arr;
		}
		var uniq = function(newarr){
			return keys(toObject(newarr));
		}
		console.log(uniq(arr));
