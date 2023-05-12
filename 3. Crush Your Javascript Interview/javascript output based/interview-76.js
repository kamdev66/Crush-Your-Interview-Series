//Difference between Classic Inheritance and Prototypical Inheritance?

// :--
//1. Classic Inheritance:- Classic inheritance is based on the idea of classes and objects,
// where a class acts as a blueprint for creating objects.In this model,Inheritance is
// achieved by defining a class that inherits from another class.classic inheritance
// allows for multiple inheritance, which means that a class can inherit from multiple
// base classes

//2. Prototypical Inheritance:- Prototypical inheritance, on the other hand, is based
// on the idea of prototypes. In this model, objects inherit from other objects, rather
// than from classes. An object can serve as a prototype for other objects, and
// inheritance is achieved by creating new objects that reference the original prototype.
// The new objects inherit the properties and methods of the prototype, but can also add
// or modify them.prototypical inheritance only allows for single inheritance, where an
// object can only inherit from one prototype.

//example of Prototypical Inheritance:-
let person = {
  name: "",
  getName: function () {
    return this.name;
  },
  getMarks: function () {
    return this.marks;
  },
};
let student = Object.create(person);
student.name = "Dev";
student.marks = 40;
console.log(student.getName()); // "Dev"
console.log(student.getMarks()); // 40

// Explanation:-
// Here, the person object serves as a prototype for the student object.
// The student object inherits the name property and the getName method from the student
// prototype, but it can also add its own properties, such as 'marks'. When we call the
// getName method on the student object, it outputs "Dev".

//example of Classic Inheritance:-
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  getMarks() {
    return this.marks;
  }
}

class Student extends Person {
  constructor(name, marks) {
    super(name);
    this.marks = marks;
  }
}

let boy = new Student("Dev", 30);
console.log(boy.getName()); // "Dev"
console.log(boy.getMarks()); // 30

//explanation:- 
// Here, we define an Person class and a Student class that inherits from the 
// Person class. The Student class has its own constructor that takes a name and a marks 
// argument, and it calls the super method to pass the name argument to the Person 
// class. The Student class can access the properties and methods defined in the Person 
// class and can also add its own properties and methods.
