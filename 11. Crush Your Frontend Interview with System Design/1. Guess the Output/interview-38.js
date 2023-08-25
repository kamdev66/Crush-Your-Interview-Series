// GUESS THE OUTPUT ??

const promise1=Promise.resolve("A");
const promise2=Promise.reject("Z");

Promise.race([promise1,promise2]).then(res=>console.log(res)); //A

// NOTE:-In the code, the Promise.race method is used to create a new Promise that settles as soon as one of the Promises in the passed array settles. In this case, the array contains two Promises, promise1 and promise2. promise1 is resolved with the value "A", and promise2 is rejected with the value "Z".
// Since promise1 settles first (it is resolved), the Promise.race Promise will also settle with the value "A". 

// const promise1=Promise.resolve("A");
// const promise2=Promise.resolve("Z");
// Promise.race([promise2,promise1]).then(res=>console.log(res));  //Z