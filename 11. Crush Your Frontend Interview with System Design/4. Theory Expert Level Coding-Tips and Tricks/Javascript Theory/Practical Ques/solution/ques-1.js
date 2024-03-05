// 1. Implement a function that converts a Javascript value into a JSON string.

function convertToJSON(value) {
  try {
    return JSON.stringify(value);
  } catch (error) {
    console.error("Error converting to JSON:", error);
    return null;
  }
}
const obj = { key: "value", array: [1, 2, 3] };
const jsonString = convertToJSON(obj);
console.log(jsonString);
