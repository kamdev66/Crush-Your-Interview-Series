// GUESS THE OUTPUT??

console.log(typeof typeof typeof true);   //'string'

//NOTE:-The expression typeof true returns the string "boolean", then typeof "boolean" 
//returns the string "string",and finally typeof "string" returns the string "string",
//so the final value logged to the console is "string".