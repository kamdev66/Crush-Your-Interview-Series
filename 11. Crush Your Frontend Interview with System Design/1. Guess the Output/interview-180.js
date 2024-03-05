// Which one of the function expression below would be the best choice for the `prototype-constructor` pattern (a, b, c)? Why?
function Man(name) {
  this.name = name;
}
// a
Man.prototype.getName = function () {
  return this.name;
};
// b
Man.prototype.getName = function getName() {
  return this.name;
};
// c
Man.prototype.getName = () => {
  return this.name;
};