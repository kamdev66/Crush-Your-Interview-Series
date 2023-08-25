//How To Implement Queue in Javascript?

class Queue {
    constructor(){
        this.items=[];
    }

    //add element to the queue
    enqueue(element){
        this.items.push(element);
    }

    //remove the element from the queue
    dequeue(){
        return this.items.shift();
    }

    //returns the first element of the queue
    peek(){
        return this.items[0];
    }

    //check if the queue is empty
    isEmpty(){
        return this.items.length===0;
    }

    //size of the queue
    size(){
        return this.items.length;
    }

    //print all the element present in the queue
    printAllQueueElement(){
        var ele="";
        for(var i=this.items.length-1;i>=0;i--){
            ele+=this.items[i]+" "
        }
        return ele;
    }
}
const myQueue=new Queue();
myQueue.enqueue(10);
myQueue.enqueue(100);
myQueue.enqueue(10000);
myQueue.enqueue(1000);
console.log("first ele:::::",myQueue.peek()); //10
console.log("Popped ele::",myQueue.dequeue()); //10
console.log("first ele:::::",myQueue.peek()); //100
console.log("is Queue empty??",myQueue.isEmpty());//false
console.log("size of the queue::;",myQueue.size());//3
console.log("Elements in queue are:::",myQueue.printAllQueueElement()); //1000 10000 100




