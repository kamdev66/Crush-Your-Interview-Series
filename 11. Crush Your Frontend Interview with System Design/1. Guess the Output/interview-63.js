// How do you redeclare variables in switch block without an error?

// let books=1;
// switch(books){
//     case 0:
//         let bookName;
//     break;

//     case 1:
//         let bookName;  //this will give syntax error for redeclaration
//     break;

// }

let books=1;
switch(books){
    case 0:{
        let bookName="javascript";
        console.log(bookName);
        break;
    }
    case 1:{
        let bookName="react";
        console.log(bookName);  //react
        break;
    }
}
