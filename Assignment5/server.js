console.log("My socket server is running.");


var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(3000); //localhost port 3000
var io = socket(server);

app.use(express.static("public"));
io.sockets.on("connection", newConnection);

function newConnection(socket) {
    console.log("new connection" + socket.id);
    socket.on("mouse", mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }
}