
---
## NOTE:- Not using keys in map function


Instead of Doing like this:-

listItems.map((item)=><li>{item}</li>);


do like this:-
listItems.map((item,index)=><li key={index}>{item}</li>);
