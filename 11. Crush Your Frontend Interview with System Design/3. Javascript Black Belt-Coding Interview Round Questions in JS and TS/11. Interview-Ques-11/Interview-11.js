function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const yourStrongest=Math.max(yourLeft,yourRight);
    const yourWeakest=Math.min(yourLeft,yourRight);

    const friendsStrongest=Math.max(friendsLeft,friendsRight);
    const friendsWeakest=Math.min(friendsLeft,friendsRight);

    return yourStrongest===friendsStrongest && yourWeakest===friendsWeakest

}

// Test cases
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
