// What is the order of alerts?
setTimeout(function () {
  alert('gorilla');
  setTimeout(function () {
    alert('classical inheritance');
  }, 0);
  alert('drumroll');
}, 0);

alert('banana');