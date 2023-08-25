//GUESS THE OUTPUT ??

console.log(1); 
new Promise(resolve => {
  console.log(2); 
  return setTimeout(() => {
    console.log(3)
    resolve()
  }, 0)
})
setTimeout(function(){console.log(4)}, 1000); 
setTimeout(function(){console.log(5)}, 0); 
console.log(6);

//output:- 1 2 6 3 5 4

//NOTE:- Here's a step by step explanation:

// 1. console.log(1) logs the number 1 to the console immediately.
// 2. new Promise(resolve => { ... }) creates a new Promise and logs the number 2 immediately.
// 3. return setTimeout(() => { ... }, 0) schedules a timer to log the number 3 to the console after 0 milliseconds.
// 4. setTimeout(function(){console.log(4)}, 1000); schedules a timer to log the number 4 to the console after 1000 milliseconds.
// 5. setTimeout(function(){console.log(5)}, 0); schedules a timer to log the number 5 to the console after 0 milliseconds.
// 6. console.log(6); logs the number 6 to the console immediately.
// Since JavaScript is single-threaded, all synchronous code is executed before any timers are executed. The timers are placed in the queue and will be executed once the call stack is empty. That's why 5 and 3 get logged before 4.