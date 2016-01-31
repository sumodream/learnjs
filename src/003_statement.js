/* 运算符：此时没有总结 自己多看看书并总结*/

 
     	var a1=10;
     	var a2=10.0;
     	if(a1==a2){
     		console.log('相等');   //相等
     	} 
    	
     	//js 数据自动转换的机制


     	var a=1;               //number
     	var b=true;			   //boolean
     	//==表示可以经过自动转换 比较的是数值
     	//===表示可以经过自动转换 先比较值 再比较数据类型 这个不太常用
     	if(a===b){
     		console.log('相等');
     	}else{
     		console.log('不相等');    //不相等
     	}

		//三目运算符
		var c=10/2>4?5:3;
		console.log(c);    //5

		//关于for循环的特点 分别为正常循环 死循环 改编为while循环

		for(var i=0;i<5;i++){
			console.log(i);   //0 1 2 3 4 
		}


		//死循环
		
/*		for( ; ;){
			console.log('执行体');    //无数执行体
		}*/


		//while循环

		var i=0;
		while(i<5){
			console.log('执行');      //执行 执行 执行 执行 执行   
			i++;
		}

		for(;i<5;i++){
			console.log('for执行');   //for执行 for执行 for执行 for执行 for执行		
        }
