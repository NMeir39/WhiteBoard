// var express = require('express');

// var app = express();
// var server = app.listen(3000);

// app.use(express.static('public'));

// var socket = require('socket.io');

// var io = socket(server);

// io.socket.on('connection', newConnection);

// function newConnection(socket) {
//     console.log (socket);
// }

const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const router = require('./router');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a connection!');

    socket.on('disconnect', () =>{
        console.log('user had left!');
    })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started at port 5000.`));
