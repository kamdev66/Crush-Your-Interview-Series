//We can't delete a local variable that has been declared 
// with var/let/const.
var channel = "Algorithm Baba";
var deleteChannel = () => {
  delete channel;
  return channel;
};

console.log(deleteChannel());