let playlist={
    name:"Crush Your Javascript Interview",
    video:30
}
// console.log(playlist);
let jsonString=JSON.stringify(playlist);
// console.log(jsonString);


let playlist1='{"name":"Crush Your Javascript","video":30}';
let obj=JSON.parse(playlist1);
console.log(obj);