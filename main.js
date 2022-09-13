const socket  = io('http://localhost:3000')
const n =  prompt("enter your name")

socket.emit("user-joined" ,n)
function sendMessage(){
    console.log("hello moto")
    
    let value  =  document.getElementById("message").value
    data = {name : n , message : value}
    const para = document.createElement("p");
    para.innerText = "You" + ":" + value;
    document.body.appendChild(para);

    socket.emit("new-message" ,data)
}
socket.on("new-user",(name)=>{

    document.getElementById("text-1").innerHTML = name + " join the chat";
})
socket.on("message",(data)=>{
    const para = document.createElement("p");
    para.innerText = data.name + ":" + data.message;
    document.body.appendChild(para);
      
})
