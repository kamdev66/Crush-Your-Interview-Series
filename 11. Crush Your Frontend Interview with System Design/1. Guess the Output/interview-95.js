//How can you remove a property or value from an object ?

const myChannel={
    channelName:"Future Forward",
    playlist:"javascript",
    video:45
}
const {video,...updatedChannel}=myChannel;   //here,I'm using rest operator.
console.log(updatedChannel); //{ channelName: 'Future Forward', playlist: 'javascript' }


//Explanation:--
// This code defines an object myChannel with three properties: channelName, 
// playlist, and video. The channelName property has a value of "Future Forward", 
// the playlist property has a value of "javascript", and the video property has 
// a value of 45.

// The second line of the code uses object destructuring to create a new object 
// called updatedChannel that contains all properties of the myChannel object 
// except for the video property. The video property is assigned to its own 
// variable called video, using the "rest" syntax which allows the remaining 
// properties to be collected into a new object.
