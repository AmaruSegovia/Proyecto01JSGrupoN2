let sonido = new Audio();
sonido.src="../public/sounds/sonido.mp3";

let monto = 4000;
let porcentaje = 50;
let propina;

function init(){
    propina = (porcentaje / 100)*monto;
    console.log(propina);
}
