new Promise((resolve, reject) => {
    console.log(4)
    resolve(5)
    console.log(6)
  }).then(() => console.log(7))
  .catch(() => console.log(8))
  .then(() => console.log(9))
  .catch(() => console.log(10))
  .then(() => console.log(11))
  .then(console.log)
  .finally(() => console.log(12))