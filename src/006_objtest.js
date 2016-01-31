/*引用类型 objectest  模拟Java里的Map*/
		//var obj=new Object();   //function object

		function Map(){
			//private 保存 
			var obj={};    //空的对象容器 承装键值对
			//put 方法
			this.put=function(key,value){
				obj[key]=value;   //把键值对绑定到obj对象上

			}
			//size 方法 获得map个数
			this.size=function(){
				var count=0;
				for(var attr in obj){
					count++;
				}
				return count;
			}

			//get 方法 根据key 得到value
			this.get=function(key){
				//不考虑为0的情况为第一个条件时 当"02"值为0时显示是null  使程序严谨就得加后面的条件
				if(obj[key] || obj[key]===0 || obj[key]===false){          
					
					return obj[key];   //获取的是value值
				}else{
					return null;
				}
			}

			//remove 删除方法
			this.remove=function(key){
				if(obj[key] || obj[key]===0 || obj[key]===false){          
					delete obj[key];
				}
			}

			//eachMap  遍历Map容器的方法
			//fn 回调函数 函数传递进来再遍历
			this.eachMap=function(fn){
					for(var attr in obj){

						fn(attr,obj[attr]);
					}
			}
		}


		//模拟Java里的Map
		var m=new Map();
		m.put("01","abc");
		m.put("02",0); 
		m.put("03",true);
		m.put("04",new Date()); 

		console.log(m.size());  //4
		console.log(m.get("02"));  //0
		m.remove("03");       
		console.log(m.get("03"));  //null

		m.eachMap(function(key,value){  
			//console.log(key +":" + value);  //01:abc 02:0 03:true 04:Sun Jan 31 2016 00:40:44 GMT+0800 (中国标准时间) 		
		});
