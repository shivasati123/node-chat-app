const io = require('socket.io')(3000)

io.on("connection" ,(socket)=>{
    console.log("new user there")
    socket.on("user",(name)=>{
        socket.emit.broadcast("new-user",name)
    })
})