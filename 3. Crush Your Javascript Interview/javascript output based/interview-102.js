// TODO:
// we can modify const value in some cases:-
const c={name:'kamdev'};
c.name='Kamdev Kumar';   //it will not give error bcoz we are not re-assigning 'c' instead modifying the value inside it.
console.log(c);  //{name: "Kamdev Kumar"}

const d=['1','2']
d.push('Kamdev');
console.log(d);   //["1", "2", "Kamdev"]

c={name:'Dev'} //give error bcoz of re-assigning
d=['1','2','Kamdev']  //give error bcoz of re-assigning