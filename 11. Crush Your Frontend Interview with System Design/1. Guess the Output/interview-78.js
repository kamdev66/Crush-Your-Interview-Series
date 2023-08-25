//Explain Event Bubbling and Event Capturing ?

//:---
// Event bubbling and event capturing are two ways of propagating events in the Document
// Object Model (DOM). They refer to the order in which events are passed through the 
// elements in the DOM tree.

//1. Event Bubbling: In event bubbling, an event is first captured and handled by the 
// innermost element and then propagated to outer elements.The event is first triggered 
// on the target element and then propagated to its parent, grandparent, and so on until 
// it reaches the outermost element (usually the document object).


//2. Event Capturing: In event capturing, the event is first captured by the outermost 
// element and then propagated to inner elements.


//IMPORTANT NOTE:- The majority of events in the DOM use bubbling, where the event is 
// first triggered on the target element and then propagated up the DOM tree to its 
// parent elements. However, you can use the addEventListener method with the third 
// argument set to true to enable event capturing.


// Event Bubbling Example:
{/* <div id="div1">
  <p id="p1">
    <button id="button1">Click me</button>
  </p>
</div>

<script>
  // Get the button element
  const button1 = document.getElementById("button1");
  
  // Add a click event listener to the button using event bubbling
  button1.addEventListener("click", function() {
    console.log("Button1 clicked");
  });
  
  // Add a click event listener to the parent element (p1) using event bubbling
  const p1 = document.getElementById("p1");
  p1.addEventListener("click", function() {
    console.log("p1 clicked");
  });
  
  // Add a click event listener to the outermost element (div1) using event bubbling
  const div1 = document.getElementById("div1");
  div1.addEventListener("click", function() {
    console.log("div1 clicked");
  });
</script> */}



//Event Capturing Example:
{/* <div id="div1">
  <p id="p1">
    <button id="button1">Click me</button>
  </p>
</script>

<script>
  // Get the button element
  const button1 = document.getElementById("button1");
  
  // Add a click event listener to the button using event bubbling
  button1.addEventListener("click", function() {
    console.log("Button1 clicked");
  });
  
  // Add a click event listener to the parent element (p1) using event capturing
  const p1 = document.getElementById("p1");
  p1.addEventListener("click", function() {
    console.log("p1 clicked");
  }, true);
  
  // Add a click event listener to the outermost element (div1) using event capturing
  const div1 = document.getElementById("div1");
  div1.addEventListener("click", function() {
    console.log("div1 clicked");
  }, true);
</script> */}

