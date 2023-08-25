function func(a, b) {
    arguments[1] = 2;
    console.log(b);
  }
  func(1);