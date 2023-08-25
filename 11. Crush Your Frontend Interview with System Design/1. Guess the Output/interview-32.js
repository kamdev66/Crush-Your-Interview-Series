// GUESS THE OUTPUT ??

(function(a){
    return (function(){
        console.log(a); //21
        a=6;
        console.log(a); //6
    })();
})(21);

//NOTE:- When the code is run, the outer IIFE is immediately invoked with 21 passed as an argument for a. The inner IIFE is then immediately invoked and logs a to the console. Since a is defined within the scope of the outer IIFE, it is accessible within the inner IIFE. The value of a is logged to the console as 21 before being reassigned to 6.