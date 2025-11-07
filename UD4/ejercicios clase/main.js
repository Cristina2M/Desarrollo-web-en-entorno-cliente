const inicializaEventos = () => {
    console.log("Eventos inicializados")
    document.getElementById("btn1").addEventListener("click", () => {
        alert("Has pulsado el boton");
    });
};


const eventosDiv=() => {
    document.getElementById("div1").addEventListener("mouseover", (event)=> {
        document.getElementById("div1").style.backgroundColor = 'green'; //color al que quiero que cambie
        document.getElementById("div1").textContent = `(${event.pageX},${event.pageY})`;
        // console.log('Objeto evento: ', event);
        console.log(`--- Evento: ${event.type} en div ${event.target.id} ---`);
        console.log(`¿Pulsaba el control? ${event.ctrlKey}`)
    });
    document.getElementById("div1").addEventListener("mouseout", (event)=> {
        document.getElementById("div1").style.backgroundColor = '#007bff'; //color original
        document.getElementById("div1").textContent = '1'; // contenido original
    });
}









(function () {
    inicializaEventos();
    eventosDiv();
}) ();




