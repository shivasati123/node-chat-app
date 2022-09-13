const io = require('socket.io')(3000 , { cors: { origin: '*' } })

io.on("connection" ,(socket)=>{
    console.log("new user there")
    socket.on("user",(name)=>{
        console.log(name)
        socket.broadcast.emit("new-user",name)
    })
})