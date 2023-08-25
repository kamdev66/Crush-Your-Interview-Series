TODO:
const a=10;
a=20; //gives error

const b={name:"DEV"}
b.name='Kamdev' //it will not give error

// why??
// :- when we try to re-assign 20 to a const variable 'a' we are trying to change memory reference.
// but in the case of 'b', we are not directly re-assigning {memory reference will be same but only the value inside 'b' object has changed}
