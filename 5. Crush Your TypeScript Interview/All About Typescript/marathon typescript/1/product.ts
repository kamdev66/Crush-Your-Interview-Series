type Address={
    Street:string,
    City:string,
    Pin:number
}
function showData(obj:Address){
    console.log(obj.Street,obj.City,obj.Pin);  //"Gandhi MAidan",  "Jehanabad",  804407 
}
showData({Street:'Gandhi MAidan',City:'Jehanabad',Pin:804407})