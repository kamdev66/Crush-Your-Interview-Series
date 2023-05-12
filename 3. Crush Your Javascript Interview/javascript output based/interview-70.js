//Replace all occurrences of a string in JavaScript?

//method1:- Using replace method with Regular Expression
let str = "dsa n dev dsa n dev".replace(/dsa/g, "DSAA");
console.log(str);//"DSAA n dev DSAA n dev"

// explanation:-replace() method takes two arguments: the string to search for and the
// string to replace it with.
// here,g (global) flag after the regular expression /dsa/. This flag tells the method
// to replace all occurrences, not just the first one. If you leave out the g flag, 
// only the first occurrence of the search string will be replaced.


//method2:- Using split() and join() method
let str1 = "DSA n Dev DSA n Dev DSA n Dev".split("DSA").join("DSAA");
console.log(str1);//"DSAA n Dev DSAA n Dev DSAA n Dev"


//method3:- Using replace with indexOf() method and loop
let str3 = "dsa n dev";
let search = "dsa";
let replace = "dev";
while (str3.indexOf(search) !== -1) {
    str3 = str3.replace(search, replace);
}
console.log(str3); //"dev n dev"