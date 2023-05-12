// GUESS THE OUTPUT ??

(function(){
    setTimeout(()=>console.log(1),2000);
    console.log(2);
    setTimeout(()=>console.log(3),0);
    console.log(4);
})();

//output:- 2 4 3 1