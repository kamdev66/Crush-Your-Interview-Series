function alphabetSubsequence(s:string) :boolean{
  const chars = s.split("");
  console.log(chars);

  for (let i = 1; i < chars.length; i++) {
    console.log(chars[i]?.charCodeAt(0));
    if (chars[i]?.charCodeAt(0) <= chars[i - 1]?.charCodeAt(0)) {
      return false;
    }
  }
  return true;
  }
  
  // Test cases
  console.log(alphabetSubsequence("effg"));
  console.log(alphabetSubsequence("cdce"));
  console.log(alphabetSubsequence("ace"));
  console.log(alphabetSubsequence("bxz"));
  