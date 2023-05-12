//Check if Array is Sorted or not:-

//method1:- O(n*n)
function isSorted(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[i]){
        return false;
      }
    }
  }
  return true;
}
console.log(isSorted([45,2,1,7]));  //false


//method2:-O(n)
function isSorted1(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
      return false;
    }
  }
  return true;
}
console.log(isSorted([1,2,3,4])); //true