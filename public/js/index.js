var socket = io();
socket.on('connect',function () {
    console.log('connect to server');
    socket.emit('createEmail',{
       name:"test",
        passowrd:'testtt'
    });
});

socket.on('disconnect',function () {
    console.log('disconnect to server');
});

socket.on('newEmail',function (e) {
    console.log(e);
});

socket.on('sendEmail',function (e) {
    console.log(e);
});