const io = require("socket.io")(3000,{ cors: { origin: '*' } })

var users = {};

io.on("connection" , socket =>{
  console.log("connection established")
  socket.on("user-joined",name =>{
    console.log(name)
    users[socket.id] = name;
    console.log(name)
    socket.broadcast.emit('new-user', name)
  })

  socket.on("new-message" , (data)=>{
    socket.broadcast.emit("message", data)
  })
})