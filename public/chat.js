//Default toma el server local, ingresar server
const socket = io()

let message = document.getElementById('message')
let username = document.getElementById('username')
let btn_send = document.getElementById('send')
var output = document.getElementById('output')
let actions = document.getElementById('actions')


btn_send.addEventListener('click',function(){
    socket.emit('chat:message',{
        username: username.value,
        message: message.value
    })
    message.value =""
   
})
message.addEventListener('keypress', function(){
    socket.emit('chat:typing',username.value)
});

socket.on('chat:message',(data)=>{
    output.innerHTML += `<p>
        <strong>${data.username}</strong>: ${data.message}
    </p>`
    actions.innerHTML= ""
});

socket.on('chat:typing',function(data){
    if(data.length >=1)
        actions.innerHTML = `<p>${data} is typing..</p>`
})


