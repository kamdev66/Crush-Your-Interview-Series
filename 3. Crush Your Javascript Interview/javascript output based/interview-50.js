//GUESS THE OUTPUT ??

async function demo() {return 10}
console.log(demo()) // Promise { 10 }

// NOTE:- Once the function is declared with async. it always returns a Promise, 
// no matter if the internal logic is synchronous or asynchronous.