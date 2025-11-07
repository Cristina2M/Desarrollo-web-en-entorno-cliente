const movimientoRaton=() => {
    document.body.addEventListener("mousemove", (event)=> {
        document.getElementById("div1").textContent = `(${event.pageX},${event.pageY})`;
    });
}

(function () {
    movimientoRaton();
})();