const express = require('express')
const app = express()
const path=require('path');

const http=require('http').Server(app);
const port = process.env.port || 8000


//attach http server to the socket.io
const io=require('socket.io')(http);

//create a new connection
//this statement is going to create a new connecton from the server side
io.on('connection',socket =>{  //this method is going to take an event as a first parameter and event listener as a second parameter
//   console.log(socket.id)
console.log('A user connected')

socket.on('disconnect',()=>{
    console.log('A User disconnected');
})
socket.on('message',msg=>{
    console.log("Client Message:"+msg);
})

//emit event 
socket.emit('server',"msg from server");

}) 


//route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'src/index.html'))//in this parenthesis im going to call here path object
})
http.listen(port, () => console.log(`Example app listening on port ${port}!`))
//yaha pr app.listen ke place par http.listen krna pdega