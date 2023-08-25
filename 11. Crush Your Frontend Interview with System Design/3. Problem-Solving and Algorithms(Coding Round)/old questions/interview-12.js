// TODO: Check property exist in object
// :-
const employee={
  id:1,
  name:"John",
  salary:5000
}

const isSalaryExist= 'salary' in employee;
console.log(isSalaryExist); //true

const isSalaryExist1= 'salar' in employee;
console.log(isSalaryExist); //false

// NOTE:-
// The 'in' operator returns the boolean value true/false.
// The 'in' operator returns true if a property exists in the object or its prototype chain.
