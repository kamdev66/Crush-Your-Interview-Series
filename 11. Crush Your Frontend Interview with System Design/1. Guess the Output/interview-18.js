// GUESS THE OUTPUT ??

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 5; i++) {
  setTimeout((i) => {
    console.log(i);
  }, 1000,i);
}