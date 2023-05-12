// GUESS THE OUTPUT ??

func1() 
function func1(){
	console.log('DSAnDev')  //'DSAnDev'
}

func2() //error
var func2 = () => console.log('test2')  //func2 is not a function

// NOTE:- Function declaration with function keyword can be hoisted. However, an arrow function cannot be hoisted, even if it is declared with var variable.