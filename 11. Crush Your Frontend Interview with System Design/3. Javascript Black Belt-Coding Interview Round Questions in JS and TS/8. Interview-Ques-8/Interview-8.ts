function alphabeticShift(inputString:string):string {
  const alphabet="abcdefghijklmnopqrstuvwxyz";

  const shiftedChars=inputString.split("").map((char)=>{
    if(char==='z'){
      return "a";
    }else{
      const currentIndex=alphabet.indexOf(char);
      return alphabet[currentIndex+1]
    }
  })
  console.log(shiftedChars);
  return shiftedChars.join("")
}
  
  // Test case
  console.log(alphabeticShift("crazy"));
  