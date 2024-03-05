function adjacentElementsProduct(inputArray:number[]):number {
  let maxProduct=Number.NEGATIVE_INFINITY;
  console.log(maxProduct);
  for(let i=0;i<inputArray.length-1;i++){
    const product=inputArray[i]*inputArray[i+1];
    if(product>maxProduct){
        maxProduct=product
    }
  }
  return maxProduct;
}
  
  console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
  