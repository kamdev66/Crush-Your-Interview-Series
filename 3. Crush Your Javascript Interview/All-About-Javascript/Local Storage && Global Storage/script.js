localStorage.setItem('name','Kamdev');
localStorage.setItem('place','patna');

console.log(localStorage.getItem('name'));  //kamdev
localStorage.removeItem('name') //if key is removed,then value is also removed.

localStorage.clear()  //if we want to remove everything from our localStorage


//---------------------Session Storage---------------------------------------
sessionStorage.setItem('name','Kamdev');
sessionStorage.setItem('place','patna');

console.log(sessionStorage.getItem('name'));  //kamdev
sessionStorage.removeItem('name') //if key is removed,then value is also removed.

sessionStorage.clear()  //if we want to remove everything from our SessionStorage


//-----------------------Cookies-------------------------------------------------
//Cookies have an expiry date,we need to set expiry date here

//for setting a cookie
document.cookie="userName=John Doe; expires= 29 Jun 2023 12:00:00 UTC";