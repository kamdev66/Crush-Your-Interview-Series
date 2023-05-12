/* 
1. concat:- It Joins two or more array into a single array
let arr1=[1,2];
let arr2=[3,4];
let arr3=[5,6];
let arr4=arr1.concat(arr2);
let arr5=arr1.concat(arr2,arr3);
console.log(arr4);  //[1, 2, 3, 4]
console.log(arr5);  //[1, 2, 3, 4, 5, 6]

we can also concat by using spread operator:-
let array1 = [1,2];
let array2 = [3,4];
let array3 = [5,6,7];
let array4 = [...array1, ...array2]
console.log(array4);


2. length:- used to get the length of an array or string.
var name = "Kyle";
console.log(name.length) // 4
var array = [1,2,3,4,5];
console.log(array.length); //5


3. Join:- Joins together elements of an array and transforms it into a string.
For example, we used “ and “ to connect all the elements in the array. You can use spaces “ “ or commas “,” or anything you want.
let students = ["Anthony", "Beth", "Cersi"];
let welcomeMessage = students.join(" and ")
console.log(welcomeMessage);  //Anthony and Beth and Cersi

4. Pop:- Removes the element at the very end of the array
let students = ["Anthony", "Beth", "Cersi" , "Dario"];
let removed = students.pop();
console.log(removed); //Dario
console.log(students); //["Anthony", "Beth", "Cersi"]


5. Push:- Adds an element at the end of an array
let students = ["Anthony", "Beth"];
students.push("George");
console.log(students);  //["Anthony", "Beth", "George"]


6. Shift:- Removes the element at the very beginning of the array
let students = ["Anthony", "Beth", "Cersi"];
students.shift();
console.log(students); //["Beth", "Cersi"]


7. unshift:- The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let students = [1,2,3,4,5];
students.unshift(20);
console.log(students);     //[20, 1, 2, 3, 4, 5]


8. slice:-  return elements starting from beginning index to ending index(plus one)
does not alter the original array

if One parameter , it Extracts elements starting at the given index up until the end of the array.
if two parameter , it extracts elements (beginning index, ending index + 1)


9. splice:- used to add, remove, or replace elements in array
------------>>>> when Two Parameters for splice method:-
1. first parameter is the index where you want to either add, remove, or replace elements
2. second parameter is the number of elements you want to remove from the array starting from the index mentioned in the first parameter
For example, we want to start adding, removing, or replacing elements in the array at index 3 as defined in the first parameter. (Remember, arrays use zero-based index). And we will remove 6 elements as defined in the second parameter
let array1 = [1,2,3,6,7,6,7,8,9];
array1.splice(3, 6)
console.log(array1); //[ 1, 2, 3 ]

------------>>> when Three or More Parameters for splice method:-
first parameter is the index where you want to either add, remove, or replace elements
second parameter is the number of elements you want to remove from the array starting from the index mentioned in the first parameter
the remaining parameters( can be infinitely many) are going to be inserted into the array starting from the index mentioned in the first parameter
For example:- we want to start adding, removing, or replacing elements in the array at index 3 as defined in the first parameter. (Remember, arrays use zero-based index). And we will remove 2 elements as defined in the second parameter. This will leave the array at [1,2,3,6,7,8,9]. Then, at index 3 as defined in the first parameter, we are going to insert the values specified by the remaining parameters. In this case, we have a third and fourth parameter. We insert those two at index 3. Obviously, if we had third, fourth, fifth,,,,,,,,, and twentieth parameters, we would insert all of them.
let array1 = [1,2,3,6,7,6,7,8,9];
array1.splice(3, 2, 4, 5 )
console.log(array1); // [1,2,3,4,5,6,7,8,9]


10. reverse:- reverses the order of the array
let array1 = [1,2,3,6,7,6,7,8,9];
console.log(array1.reverse()); // [ 9, 8, 7, 6, 7, 6, 3, 2, 1 ]

let string=['dev','sonu','kamdev'];
console.log(string.reverse());  //["kamdev", "sonu", "dev"]


11. sort():-The sort() method sorts the elements of an array and returns the same reference of array, now sorted. 
When you sort an array with .sort(), it assumes that you are sorting strings.
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);    //["Dec", "Feb", "Jan", "March"]


const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);     //[1, 100000, 21, 30, 4]

The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:
1. if it returns a negative value, the value in a will be ordered before b.
2. if it returns 0, the ordering of a and b won’t change.
3. if it returns a positive value, the value in b will be ordered before a.

//ASCENDING NUMBER SORT
let array1 = [5, 1, 8, 3];
array1.sort((a, b) =>  a-b);
console.log(array1) //[ 1, 3, 5, 8 ]

//DESCENDING NUMBER SORT
let array2 = [5, 1, 8, 3];
array2.sort((a, b) =>  b-a);
console.log(array2) //[ 8, 5, 3, 1 ]

//DESCENDING NUMBER SORT
let array3 = [5, 1, 8, 3];
array3.sort((a, b) =>  a-b).reverse();
console.log(array3) //[ 8, 5, 3, 1 ]


//ASCENDING ALPHABET SORT
let array1 = ["apples", "carrots", "zendaya", "tapioca"];
array1.sort();
console.log(array1)  //["apples", "carrots", "tapioca", "zendaya"]

//DESCENDING ALPHABET SORT
let array2 = ["apples", "carrots", "zendaya", "tapioca"];
array2.sort().reverse();
console.log(array2)  //["zendaya", "tapioca", "carrots", "apples"]


String Methods:-
1. concat:- joins two or more strings into a single string.
let name = "Kyle";
let age = 21;
let city = "Los Angeles"
let sentence = name.concat(" is " , age , " years old and lives in ", city);
console.log(sentence);  //Kyle is 21 years old and lives in Los Angeles


2. indexOf:- finds the index of the first occurrence of a string
             returns -1 if the string is not found

let sentence = "Publish today on Medium";
console.log(sentence.indexOf("today")) //8


3. lastIndexOf:- finds the index of the last occurrence of a string
                 returns -1 if the string is not found

let sentence = "a dog went to a dog park on a tuesday night. ";
console.log(sentence.lastIndexOf("a ")); //28


4. split:- converts strings into arrays
var name = "Kyle DeGuzman";
var nameArray = name.split(" ");
console.log(nameArray)   //["Kyle", "DeGuzman"]

var name = "Kyle DeGuzman";
var nameArray = name.split("");
console.log(nameArray)         //["K", "y", "l", "e", " ", "D", "e", ...]

var name = "Kyle DeGuzman";
var nameArray = name.split("e");
console.log(nameArray)          //["Kyl", " D", "Guzman"]


5. toLowerCase():- converts ALL letters in a string to lowercase
let name = "kYle";
let name1 = name.toLowerCase(); 
console.log(name1); //kyle


6. toUpperCase():- converts ALL letters in a string to uppercase
let name = "kYle";
let name = name.toUpperCase(); 
console.log(name); //KYLE


7. trim():- removes whitespace from left and right sides of the string.
let firstName = "Kyle\n\n\n\n";
let lastName = "Deguzman      ";  
console.log(firstName.trim() + lastName)   //KyleDeguzman 




*/