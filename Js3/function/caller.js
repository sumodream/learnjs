/**
 * caller 调用当前函数的函数引用
 * @return {[type]} [description]
 */
function outer(){
	inner();
}
function inner(){
	console.log(inner.caller);      			//null
}
outer();

function outer(){
	inner();
}
function inner(){
	console.log(arguments.callee.caller);		//null
}
outer();