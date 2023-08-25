// GUESS THE OUTPUT ??

const delay = async (item) => new Promise(
	resolve => setTimeout(() => {
		console.log(item);
		resolve(item)
	}, Math.random() * 100)
)
console.log(1)
let arr = [3,4,5,6]
arr.forEach(async (item) => await delay(item))
console.log(2)

//output:- 1 2 and 3 4 5 6 me se jo phle resolve hoga wo(it will change everytime)

// NOTE :- 
// 1. The code logs the number 1 immediately.
// 2. The code creates an array arr containing the numbers 3, 4, 5, and 6.
// 3. arr.forEach(async (item) => await delay(item)) iterates over the elements in the arr array and asynchronously logs each number to the console after a random delay (0 to 100 milliseconds) using the delay function.
// 4. await delay(item) makes the iteration wait for the delay to resolve, so each number is logged in the order that their respective timers resolve.
// 5. The code logs the number 2 immediately after the forEach loop has completed.