//Explain 'this' keyword in javascript ??

//:--
// The this keyword in JavaScript refers to the object that is executing the current
// function.

//Important points:-
//1. Method calls: When a function is called as a method of an object, 'this' refers
// to the that object .
const student = {
  name: "Dev",
  printName: function () {
    console.log(this.name);
  },
};
student.printName(); // "Dev"

//2. Constructor calls: When a function is called as a constructor with the new
// operator, this refers to the object being created.
class Youtube {
  constructor(channelName) {
    this.channelName = channelName;
  }
  printName() {
    console.log(this.channelName);
  }
}
const channel = new Youtube("DSA n Dev");
channel.printName(); // "DSA n Dev"

//3. Callbacks: When a function is passed as a callback to another function, this
// refers to the object that the callback is a property of, or to the global object
// if it is not a property of any object.
const obj = {
  channel: "dsa n dev",
  printChannel: function () {
    setTimeout(function () {
      console.log(this.channel);
    }, 1000);
  },
};
obj.printChannel(); // undefined

//Explanation:-In the above example, printChannel is a method on the 'obj' object that sets
//a timeout and logs the value of 'this.channel' after one second. When the timeout
//function is called, this refers to the global object, not obj, so this.channel is undefined.

//To fix this issue, we can use the bind method to set the value of 'this' explicitly:
const obj2 = {
  channel: "dsa n dev",
  printChannel: function () {
    setTimeout(
      function () {
        console.log(this.channel);
      }.bind(this),
      1000
    );
  },
};
obj2.printChannel(); // dsa n dev

//4. Arrow functions: Arrow functions do not have their own 'this', so 'this' refers
// to the 'this' value of the global context.
const obj1 = {
  channel: "dsa n dev",
  printChannel: function () {
    console.log(this.channel);
  },
  printChannelWithArrow: () => {
    console.log(this.channel);
  },
};
obj1.printChannel(); // "dsa n dev"
obj1.printChannelWithArrow(); // undefined

//Explanation:- printChannel is a regular function that logs the value of this.channel,
// which is "dsa n dev". On the other hand, printChannelWithArrow is an arrow function
// that logs the value of this.channel, which is undefined because arrow functions
// inherit the 'this' value of the global context, where channel is not defined.
