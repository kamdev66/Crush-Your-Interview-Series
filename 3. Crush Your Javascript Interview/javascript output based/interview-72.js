// 2. Deep cloning: Deep cloning creates a new object with all the properties and values
// of the original object, including all nested objects and arrays. The new object is a
// completely separate and independent copy of the original object.

//method1:- By using JSON.parse(JSON.stringify(obj))
let youtube = {
  channel: "DSA n Dev",
  video: 50,
  playlist: {
    react: "50",
    javascript: "10",
    nodejs: "20",
  },
};
let deepClone = JSON.parse(JSON.stringify(youtube));
console.log(deepClone); //{channel: "DSA n Dev",playlist: {javascript: "10",nodejs: "20",react: "50"},video: 50}
console.log(youtube); //{channel: "DSA n Dev",playlist: {javascript: "10",nodejs: "20",react: "50"},video: 50}

//method2:-By Using a custom function:
let youtube1 = {
  channel: "DSA n Dev",
  video: 50,
  playlist: {
    react: "50",
    javascript: "10",
    nodejs: "20",
  },
};
function deepClone(youtube1) {
  let clone = {};
  for (let key in youtube1) {
    if (youtube1[key] !== null && typeof youtube1[key] === "object") {
      clone[key] = deepClone(youtube1[key]);
    } else {
      clone[key] = youtube1[key];
    }
  }
  return clone;
}
let deepClone1 = deepClone(youtube1);
console.log(deepClone1); //{channel: "DSA n Dev",playlist: {javascript: "10",nodejs: "20",react: "50"},video: 50}
