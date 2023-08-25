// GUESS THE OUTPUT ??

const channel={
    channelName:"Future Forward",
    video:30
}
delete channel.video;
const getChannel=channel.video; 


console.log(channel);  //{ channelName: 'Future Forward' }
console.log(getChannel);  //undefined

