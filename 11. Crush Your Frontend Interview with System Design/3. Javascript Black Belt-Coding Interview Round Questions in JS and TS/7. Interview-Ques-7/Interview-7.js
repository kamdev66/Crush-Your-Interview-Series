function almostIncreasingSequence(sequence) {
   let count=0;

   for (let i=1;i<sequence.length;i++){
      if(sequence[i]<=sequence[i-1]){
        count++;

        if(count>1){
          return false;
        }

        if(i>=2&&sequence[i]<=sequence[i-2]){
          sequence[i]=sequence[i-1]
        }
      }
   }
   return true;
}

// Test cases
console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
