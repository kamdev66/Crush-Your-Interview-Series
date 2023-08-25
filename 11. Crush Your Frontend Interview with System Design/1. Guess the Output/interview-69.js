//How do I return the response from an asynchronous call?

//method1:- By using a Callback function
const makeAsyncCall = (callback) => {
  setTimeout(() => {
    const response = { channelName: "DSA n Dev" };
    callback(response);
  }, 1000);
};

makeAsyncCall((response) => {
  console.log(response); //{channelName: "DSA n Dev"}
});

//method2:- By using Promise
const asyncCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { playlist: "Crush Your Javascript Interview" };
      resolve(response);
    }, 1000);
  });
};

asyncCall()
  .then((response) => {
    console.log(response); //{playlist: "Crush Your Javascript Interview"}
})
  .catch((error) => {
    console.error(error);
});

//Explanation:-asyncCall function returns a Promise. The Promise is resolved 
// with the response object when the asynchronous operation is complete, and can be 
// consumed using 'then' method. If an error occurs during the asynchronous operation,
// the Promise can be rejected using the reject method, and the error can be caught 
// using the catch method.


//method3:-by using async await
const makeAsyncCall1 = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = { playlist: "Javascript Interview Series" };
        resolve(response);
      }, 1000);
    });
  };
const checkResponse = async () => {
    try {
      const response = await makeAsyncCall1();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
};
checkResponse();

// Explanation:-makeAsyncCall1 function returns a Promise.checkResponse function is 
// declared as async, which allows it to await the result of the makeAsyncCall1 function. 
// When the asynchronous operation is complete, the resolved value of the Promise is 
// stored in the response variable.By using async and await, you can write asynchronous
// code that looks and behaves like synchronous code. The code inside the checkResponse 
// function will block and wait for the response from the makeAsyncCall1 function before
// continuing.
