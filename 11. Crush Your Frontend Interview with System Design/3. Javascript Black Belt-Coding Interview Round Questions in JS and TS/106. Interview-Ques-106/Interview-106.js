class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function getLength(head){
    let length=0;
    let temp=head;
    while(temp!==null){
        length+=1;
        temp=temp.next;
    }
    return length;
}

function printLength(head){
    if(!head){
        return -1;
    }
    const len=getLength(head);
    let temp=head;
    let mid=len/2;
    while(Math.floor(mid)!=0){
        temp=temp.next;
        mid=mid-1;
    }
    return temp.data;
}

let head=new Node(10);
head.next=new Node(2);
head.next.next=new Node(12);

console.log('printLength',printLength(head));