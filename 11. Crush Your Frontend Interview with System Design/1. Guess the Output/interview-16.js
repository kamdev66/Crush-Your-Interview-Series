// GUESS THE OUTPUT ??

setTimeout(function () {
  console.log("A");
}, 0);
Promise.resolve()
  .then(function () {
    console.log("B");
  })
  .then(function () {
    console.log("C");
  });
console.log("D");

//D B C A
