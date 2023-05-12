// TODO: INTERVIEW-8:
// How To Implement Queue in Javascript?
class Queue {
  constructor() {
    this.items = [];
  }

  // add element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  //remove the element from the queue
  dequeue() {
    return this.items.shift();
  }

  //returns the first element of the queue
  peek() {
    return this.items[0];
  }

  //check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  //size of the queue
  size() {
    return this.items.length;
  }

  //print all the element present in the queue
  printAllQueueElement() {
    var ele = "";
    for (var i = this.items.length - 1; i >= 0; i--) ele += this.items[i] + " ";
    return ele;
  }
}
const myQueue = new Queue();
myQueue.enqueue("10");
myQueue.enqueue("20");
myQueue.enqueue("30");
myQueue.enqueue("40");
console.log("First element in Queue is :", myQueue.peek());
myQueue.enqueue("50");
console.log("Popped element from Queue is:", myQueue.dequeue());
console.log("elements in Queue are:", myQueue.printAllQueueElement());
console.log("is my Queue empty? ", myQueue.isEmpty());
console.log("Size of the Queue is ", myQueue.size());
