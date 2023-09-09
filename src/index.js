let sonido = new Audio();
sonido.src="../public/sounds/sonido.mp3"; 
let respuestaTotal = document.getElementById('salida'); 

function sacarPropina() {
    let monto = parseFloat(document.getElementById("monto").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(monto) || isNaN(porcentaje)) {
        alert("Ingrese un monto y un porcentaje válidos.");
        return;
    }

    let propina = (porcentaje / 100) * monto;
    let total = propina + monto;
    
    respuestaTotal.innerHTML = `
        <div id="respuestaTotal">
          <div class="Monto">
            <p>Cuenta</p>
            <p class="numero"> $ ${monto.toFixed(2)} </p>
          </div>
          <div class="Porcentaje">
            <p>Porcentaje</p>
            <p class="numero"> $ ${propina.toFixed(2)} </p>
          </div>
          <div class="Total">
            <p class="resaltar-text">TOTAL</p>
            <p class="resaltar-num"> $ ${total.toFixed(2)} </p>
          </div>
        </div>
    `;
}
