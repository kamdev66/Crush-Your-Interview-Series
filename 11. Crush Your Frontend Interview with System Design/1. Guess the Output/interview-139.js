let arr = Array.from(Array(10).keys());
function func(a) {
  console.log(arguments.length);
}
func(arr);
func(...arr);