// Comando para establecer la conexión
let socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');  
});

// Escuchar información del server 
socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor');
});

// Solicitar el ticket actual
socket.on('estadoActual', (resp)=>{
    label.text(resp.actual);
})


$('button').on('click', () => {
    // Solicitar nuevo ticket
    socket.emit('siguienteTicket', null ,(siguienteTicket)=>{
       label.text(siguienteTicket);
    }); 
})



