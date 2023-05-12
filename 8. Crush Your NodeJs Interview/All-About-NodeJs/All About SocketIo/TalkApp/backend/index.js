const express = require('express')
const { Server } = require("socket.io");
//server create krne k liye http chahiye
const http=require('http');
const cors=require('cors')

const app = express()
app.use(cors())
const port = process.env.port || 5050;

//create server
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:["http://localhost:3000","http://localhost:3001"],
        methods:["GET,POST"]
    }
})

io.on("connection", (socket) => {
   // console.log(socket.id)
  
    socket.on("joinRoom", room => {
          socket.join(room);
    })
  
    socket.on("newMessage", ({newMessage, room}) => {
      io.in(room).emit("getLatestMessage", newMessage)
    })
  
  });

app.get('/', (req, res) => res.send('TalkApp Started!!'));

server.listen(port, () => console.log(`Example app listening on port ${port}!`));