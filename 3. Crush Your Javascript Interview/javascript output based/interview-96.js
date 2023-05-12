//Different types of loops in JavaScript that can be used to iterate over 
// the elements of an array:

// :-loops is used to iterate over the elements of an array

const courses=[
    {name:"javascript",video:30,enrolled:45},
    {name:"react",video:20,enrolled:55},
    {name:"mongodb",video:40,enrolled:65},
    {name:"nodejs",video:50,enrolled:75}
]

//1. For loop
for(var i=0;i<courses.length;i++){
    console.log(courses[i].name);
}
// output:-
// javascript
// react
// mongodb
// nodejs

//2. forEach()
courses.forEach((course)=>{
    console.log(`courseName:${course.name} Enrolled:${course.enrolled}`);
})
//output:-
// courseName:javascript Enrolled:45
// courseName:react Enrolled:55
// courseName:mongodb Enrolled:65
// courseName:nodejs Enrolled:75


//3. for of :-
for(var course of courses){
    console.log(course.name);
}
// output:-
// javascript
// react
// mongodb
// nodejs

//4. while loop:-
var i=0;
while(i<courses.length){
    console.log(courses[i].name);
    i++;
}
// output:-
// javascript
// react
// mongodb
// nodejs


//5. Do while loop:-
var index=0;
do{
    console.log(courses[index].name);
    index++; 
}while(index<courses.length)
// output:-
// javascript
// react
// mongodb
// nodejs


//6. Map():-
courses.map(course=>console.log(course.name));
// output:-
// javascript
// react
// mongodb
// nodejs

  