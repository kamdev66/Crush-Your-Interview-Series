var x = 3;
var obj = {
  x: 2,
  foo: {
    x: 1,
    bar: function () {
      return this.x;
    },
  },
};
var func = obj.foo.bar;
console.log(func());
console.log(obj.foo.bar());