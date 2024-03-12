const promise_1 = Promise.resolve("First");
const promise_2 = Promise.resolve("Second");
const promise_3 = Promise.reject("Third");
const promise_4 = Promise.resolve("Fourth");

const runPromises = async () => {
  const res1 = await Promise.all([promise_1, promise_2]);
  const res2 = await Promise.all([promise_3, promise_4]);
  return [res1, res2];
};

runPromises()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
