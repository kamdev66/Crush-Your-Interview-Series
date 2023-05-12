//GUESS THE OUTPUT ?

function add(a){
    return function(b){
        return a+b;
    }
}
console.log(add(100)(200)); //300

// Explanation:-
// This pattern of returning a function from another function is called "currying".

// currying is the process of transforming a function with multiple arguments 
// into a sequence of functions, each taking a single argument

