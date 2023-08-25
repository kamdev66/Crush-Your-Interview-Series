function getFunc() {
    let value = "Hello Friends !";
    let func = () => {
      alert(value);
    };
    return func;
  }
  
  getFunc()();
  