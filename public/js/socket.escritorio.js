let socket = io();
var searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
let label = $('small');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);


$('button').on('click', ()=>{
    socket.emit('atenderTicket', {escritorio: escritorio}, (res) => {
        
        if(res === 'No hay tickets'){
            label.text(res);
            alert(res);
            return;
        }

        label.text('Ticket ' + res.numero);
    });
})