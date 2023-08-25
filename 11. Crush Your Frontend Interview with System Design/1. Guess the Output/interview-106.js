TODO: 
const obj={a:1, b: function(){
  alert(1);
}}
obj1=JSON.parse(JSON.stringify(obj));
console.log(obj1);  //{a: 1}

// Note:- JSON.stringify() will ignore functions and the end object will not contain the property which
// has the function.