// TODO: INTERVIEW-4
//what is the use of JSON.parse() and JSON.stringify():-
// JSON.stringify() takes a JavaScript object and returns a JSON string.
let playlist1 = {
    name: "Crush Your JavaScript Interview",
    video: 30
  };
  let jsonString = JSON.stringify(playlist1);
  console.log(jsonString); //{"name":"Crush Your JavaScript Interview","video":30}

// JSON.parse() takes a JSON string and converts it back into a JavaScript object. 
let playlist = '{"name":"Crush Your Javascript Interview","video":30}';
let obj = JSON.parse(playlist);
console.log(obj);