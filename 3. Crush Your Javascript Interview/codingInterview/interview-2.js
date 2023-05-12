// TODO: INTERVIEW-7:
// How To Implement Stack in Javascript?
class Stack {
  constructor() {
    this.items = [];
    this.countData = 0;
  }

  // check if the stack is empty
  isEmpty() {
    return this.countData == 0;
  }

  //size of the stack
  size() {
    return this.countData;
  }

  //empty the stack
  clear() {
    this.items = [];
  }

  // check the last element of the stack
  peekTop() {
    if (this.countData == 0) {
      return "Stack is Empty";
    }
    return this.items[this.countData - 1];
  }

  // check the element of the stack of the specific position
  peek(pos) {
    var top = this.countData - 1;
    if (top - pos + 1 < 0) return "invalid index";
    else return this.items[top - pos + 1];
  }

  // add element to the stack
  push(data) {
    this.countData++;
    this.items.push(data);
  }

  //remove element to the stack
  pop() {
    if (this.items.length == 0) return "Stack is Underflow";
    this.countData--;
    return this.items.pop();
  }

  //print all the element present in the stack
  printAllStackElement() {
    if (this.countData == 0) {
      return "can not Print,Stack is Empty";
    }
    var ele = "";
    for (var i = this.items.length - 1; i >= 0; i--) ele += this.items[i] + " ";
    return ele;
  }
}

const myStack = new Stack();
myStack.push("10");
myStack.push("20");
myStack.push("30");
myStack.push("40");
console.log("Top element is :", myStack.peekTop());
myStack.push("50");
console.log("Popped element in stack is:", myStack.pop());
console.log("Top element at position 2 is:", myStack.peek(2));
console.log("elements in stack are:", myStack.printAllStackElement());
console.log("is my Stack empty? ", myStack.isEmpty());
console.log("Size of the stack is ", myStack.size());
