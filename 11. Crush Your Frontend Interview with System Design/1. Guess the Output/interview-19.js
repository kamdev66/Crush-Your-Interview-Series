// GUESS THE OUTPUT??

function Func() {
    console.log(arguments.length); //3
  }
  Func(1, 2, 3);
  
  
  const arrowFunc = () => {
    console.log(arguments.length); //ReferenceError
  };
  arrowFunc(1, 2, 3);
  
  
  const arrowFuncWithRest = (...args) => {
    console.log(args.length); //3
  };
  arrowFuncWithRest(1, 2, 3);
