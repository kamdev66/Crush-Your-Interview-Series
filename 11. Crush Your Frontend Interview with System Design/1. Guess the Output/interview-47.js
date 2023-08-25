// GUESS THE OUTPUT ??

var obj1 = {num: 10}
var obj2 = obj1
obj2.num = 20
console.log(obj1) // {num: 20}

// NOTE:-In JavaScript, objects are passed by reference, not by value. So, when you assign obj1 to obj2, you are creating a reference to the same object in memory. Any changes made to obj2 will be reflected in obj1 and vice versa.