const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const port  = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'../public');

var app = express();

const server  = http.createServer(app);

app.use(express.static(publicPath));

var io = socketIO(server);
// you cannot do io.emit ,io.on is very special event
io.on('connection',(socket)=>{

    socket.emit('newEmail',{
        name:"howard",
        email:"howardzhai@gmail.com"
    });

    socket.on('createEmail',(e)=>{
        console.log(e);
    });
    console.log('new user connect');
    socket.on('disconnect',()=>{
        console.log("server is disconnect");
    });
});

server.listen(port,()=>{
    console.log("app running");
});

