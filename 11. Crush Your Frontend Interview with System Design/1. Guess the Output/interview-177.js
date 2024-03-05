// What is the result after code execution: 1, 2 or 3?
var x = 1;
var foo = {
  x: 2,
  bar: function () {
    x = 3;
    return this.x;
  },
};
var run = foo.bar;

alert(run());