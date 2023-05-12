//Different types of cloning in js?

// In JavaScript, there are two main types of cloning: shallow cloning and deep cloning.:-

//1.Shallow cloning: Shallow cloning creates a new object that shares the same top-level
// properties as the original object. However, if the original object has nested objects,
// the new object will still reference those same nested objects, rather than creating
// new copies.

// ways to shallow clone an Object:-

//method1:- By using spread operator:-
let youtube = {
    channel: "DSA n Dev",
    video: 50,
    playlist: {
        react: "50",
        javascript: "10",
        nodejs: "20"
    }
};
let shallowClone = {...youtube};
console.log(shallowClone);//{channel: "DSA n Dev",playlist: {javascript: "10",nodejs: "20",react: "50"},video: 50}
console.log(youtube);     //{channel: "DSA n Dev",playlist: {javascript: "10",nodejs: "20",react: "50"},video: 50}
console.log(shallowClone==youtube);  //false


//method2:- By using Object.assign() method:-
let youtube1 = {
    channel: "DSA n Dev",
    video: 50,
    playlist: {
        react: "50",
        javascript: "10",
        nodejs: "20"
    }
};
let shallowClone1 = Object.assign({}, youtube1);
console.log(shallowClone1);//{channel: "DSA n Dev",playlist: {javascript: "10",nodejs: "20",react: "50"},video: 50}
console.log(youtube1);     //{channel: "DSA n Dev",playlist: {javascript: "10",nodejs: "20",react: "50"},video: 50}
console.log(shallowClone1==youtube1);  //false


