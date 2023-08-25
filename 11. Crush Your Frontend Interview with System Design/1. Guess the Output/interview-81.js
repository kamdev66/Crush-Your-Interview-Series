//GUESS THE OUTPUT ??

const channelInfo = ({ channelName, playlist }) => {
  return `${channelName} - ${playlist}`;
};

const channel = {
  channelType: "educational",
  channelName: "DSA n Dev",
  playlist: "Crush Your Javascript Interview",
};

console.log(channelInfo(channel)); //"DSA n Dev - Crush Your Javascript Interview"

// Explanation:-parameter destructuring allows us to extract the values of specific 
// properties from an object and pass them as separate variables to a function.
// This way, you can use these properties directly in the function without having to 
// access them through the object.
// In this code, instead of accessing 'channel.channelName' and 'channel.playlist', 
// you can use the variables 'channelName' and 'playlist' directly.
