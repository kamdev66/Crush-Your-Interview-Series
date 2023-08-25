//Serialize Specific Properties in Javascript:-

let youtube = {
    channel: "dsa n dev",
    playlist: "javascript",
    video: 30
};
const res=JSON.stringify(youtube,['playlist','video','channel']) 
console.log(res); //{"playlist":"javascript","video":30,"channel":"dsa n dev"}