let sonido = new Audio();
sonido.src="../public/sounds/sonido.mp3";
let respuestaPorcentaje = document.getElementById('respuestaPorcentaje');
let respuestaTotal = document.getElementById('respuestaTotal');

function sacarPropina() {
    let monto = parseFloat(document.getElementById("monto").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(monto) || isNaN(porcentaje)) {
        alert("Ingrese un monto y un porcentaje válidos.");
        return;
    }

    let propina = (porcentaje / 100) * monto;
    let total = propina + monto;
    respuestaPorcentaje.innerHTML = `El porcentaje es: ${propina.toFixed(2)}`;
    respuestaTotal.innerHTML = `El total es: ${total.toFixed(2)}`;
    console.log(total);
    console.log(propina);
}
