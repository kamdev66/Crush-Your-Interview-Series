//show the different ways of selecting an element from DOM?


// 1. getElementById(): Selects an element with a specific id.
const element = document.getElementById("element-id");

// 2. querySelector(): Selects the first element that matches a CSS selector.
const element1 = document.querySelector(".element-class");
const element2 = document.querySelector("#element-id");
const element3 = document.querySelector("p");

//3. querySelectorAll(): Selects all elements that match a CSS selector. 
const elements1 = document.querySelectorAll(".element-class");

//4. getElementsByClassName(): Selects all elements with a specific class. 
const elements2 = document.getElementsByClassName("element-class");

//5. getElementsByTagName(): Selects all elements with a specific tag name. 
const elements = document.getElementsByTagName("p");

