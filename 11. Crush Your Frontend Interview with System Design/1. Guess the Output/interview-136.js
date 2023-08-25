function getFunc() {
    let value = "Hey !";
  
    let func = new Function("console.log(value)");
  
    return func;
  }
  
  getFunc()();
  