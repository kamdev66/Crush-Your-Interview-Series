function foo(x) {
    x();
  
    function x() {
      console.log("foo");
    }
  }
  
  foo(function() {
    console.log("bar")
  });