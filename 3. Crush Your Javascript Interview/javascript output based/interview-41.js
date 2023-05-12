// GUESS THE OUTPUT ??

const p1=Promise.resolve(1);
const p2=Promise.reject(2);

const pAll=Promise.all([p1,p2]);
console.log(pAll);//promise rejected with the reason "2".

// NOTE:-The Promise.all method creates a new Promise that resolves when all the Promises in the passed iterable have resolved. If any of the Promises in the iterable are rejected, the Promise.all Promise will immediately be rejected with the value of the rejected Promise.

// :- In the code, p1 is a resolved Promise with the value of 1, and p2 is a rejected Promise with the value of 2. When the Promise.all method is called with the array [p1, p2], the Promise.all Promise will be rejected with the value of 2, since p2 is rejected.