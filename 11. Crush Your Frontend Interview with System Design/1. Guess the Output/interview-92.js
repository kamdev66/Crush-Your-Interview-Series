//GUESS THE OUTPUT ??

var num=1;
setTimeout(()=>{
    const num=2;
    const data={
        num:3,
        getNum(){
            return this.num;
        },
    };
    console.log(data.getNum());
    console.log(data.getNum.call(this));
},0);


// Explanation:-
// The first console.log statement outputs 3 because data.getNum is called with 
// its own scope, so this refers to data and this.num is equal to 3.

//The second console.log statement outputs 1 because data.getNum.call(this) 
// explicitly sets the context of this to the global object (this refers to the 
// global object because the code is not within a function), so this.num is 
// equal to num in the global scope, which is 1.