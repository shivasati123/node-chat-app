var socket = io('http://localhost:3000')
const n = prompt("enter a user name")
socket.emit("user",n)