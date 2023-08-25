function foo() {
    bar();
  
    return;
  
    function bar() {
      console.log("bar");
    }
  }
  
  foo();