//GUESS THE OUTPUT ??

if(function f(){}){ console.log(f) } //ReferenceError

// NOTE:-  Function objects are truthy values, so the code inside the 'if' block is 
// executed. the internal block cannot access the function declaration because they 
// have a different block scope.
// However, since f is declared within the if block, it is a local variable and not 
// accessible outside of the block. Attempting to log 'f' outside of the 'if' block 
// results 'ReferenceError'
