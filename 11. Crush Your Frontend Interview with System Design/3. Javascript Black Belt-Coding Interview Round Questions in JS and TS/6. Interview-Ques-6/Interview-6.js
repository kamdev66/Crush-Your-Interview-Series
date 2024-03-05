function allLongestStrings(inputArray) {
    let maxLength=0;

    for(const str of inputArray){
        maxLength=Math.max(maxLength,str.length);
    }

    const longestStrings=inputArray.filter(str=>str.length===maxLength)
    return longestStrings;

}

console.log(allLongestStrings(["abaer", "aaerr", "ad", "vcd", "aba"]));