//How To Implement Stack in Javascript?

class Stack{
    constructor(){
        this.items=[];
        this.countData=0;
    }

    //check if the stack is empty
    isEmpty(){
        return this.countData==0;
    }

    //size of the stack
    size(){
        return this.countData;
    }

    //empty the stack
    clear(){
        this.items=[];
    }

    //check the last element of the stack
    peekTop(){
        if(this.countData==0){
            return "Stack is Empty"
        }
        return this.items[this.countData-1];
    }

    //check the element of the stack of the specific position
    peek(pos){
        var top=this.countData-1;
        if(top-pos+1<0){
            return "Invalid Index";
        }else{
            return this.items[top-pos+1];
        }
    }

    //add element to the Stack
    push(data){
        this.countData++;
        this.items.push(data);
    }

    //remove element from the Stack
    pop(){
        if(this.items.length==0){
            return "Stack is Already Empty";
        }
        this.countData--;
        return this.items.pop();
    }

    //print all the element present in the stack
    printAllStackElement(){
        if(this.countData==0){
            return "can not Print,Stack is empty";
        }
        var ele="";
        for(var i=this.items.length-1;i>=0;i--){
            ele+=this.items[i]+" ";

        }
        return ele;
    }
}

const myStack=new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(100);
myStack.push(150);
myStack.push(200);
console.log("Top element:::",myStack.peekTop());
console.log("Popped Element::",myStack.pop());
console.log("Element at pos 2 is::",myStack.peek(2));
console.log('is Stack empty?',myStack.isEmpty());
console.log('size of the Stack',myStack.size());
console.log('Elements in stack are::',myStack.printAllStackElement())


