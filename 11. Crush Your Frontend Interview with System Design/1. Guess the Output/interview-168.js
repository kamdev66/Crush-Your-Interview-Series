console.log('initial');
setTimeout(function() {
   console.log('setTimeout');
}, 0);
var promise = new Promise(function(resolve, reject) {
   resolve();
});
promise.then(function(resolve) {
   console.log('1st Promise');
})
.then(function(resolve) {
   console.log('2nd Promise');
});
console.log('final');