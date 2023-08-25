// TODO: Conditionally add a property to an object.
// :- 
const includeSalary=true;
const employee={
    id:1,
    name:"John",
    ...(includeSalary && {salary:2000})
}
// console.log(employee);  //{
//                              id: 1,
//                              name: "John",
//                              salary: 2000
//                           }