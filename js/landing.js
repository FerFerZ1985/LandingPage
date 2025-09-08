let namesAndSurnames = "Carlos Soto"
var x = '2022'
let precioproducto = 0;
var esMayorDeEdad = true;
let persona = [20, 'Juan Perez', true, 1, 68]
const PROGRAM_NAME = "APLICACION DE LOGICA DE PROGRAMACION"

var tav = document.getElementById('output');
tav.innerHTML = x;

function changeVariable() {
    x = prompt('Dame el nuevo valor');
    tav.innerHTML = x;
}

let operadoresMath = (5 + 12 - 6) * (8 / (2 ** 3));

var edadPersona = 16;
var peso = 0;
let nacional = false;
const PRECIO = 20;
let estatura = 0;

function evaluarEdad() {
    edadPersona = parseInt(prompt('Por favor, indicar tu edad'));
    if (edadPersona >= 18) {
        alert('La persona es mayor de edad');
        evluarRequisitosMinimos();
    } else {
        alert('La persona no es mayor de edad');
        return;
    }
}

function evluarRequisitosMinimos() {
    peso = parseInt(prompt('Indique su peso'))
    if (edadPersona >= 16 && edadPersona <= 40 && peso >= 20) {
        alert('El candidato cumple con los requisitos y puede ser admitido');
        calcularCostoInscripcion();
        evaluarCategoria();
    } else {
        alert('El candidato no cumple con los requisitos minimos');
        return;
    }
    alert('Tu proceso de seleccion ha finalizado con exito')
}

function calcularCostoInscripcion() {
    let respuestaNacionalidad = prompt('Si eres nacional responde si, de lo contrario responde no')
    if (respuestaNacionalidad === 'si') {
        nacional = true;
    } else {
        nacional = false;
    }
    if ((edadPersona >= 20 && edadPersona <= 30) || nacional === true) {
        let precioConDescuento = 20 - (20 * 10 / 100);
        alert('El precio a pagar por ser nacional o estar en el rango de edad de 20 a 30 es: ' + precioConDescuento);
    } else {
        alert('El precio a pagar por ser extranjero: ' + PRECIO);
    }
}

function evaluarCategoria() {
    estatura = parseFloat (prompt('Por favor ingrese su estatura'));
    if (estatura != 1.68) {
        alert('Lo sentimos para practicar basketball solo se admiten personas con una estatura igual a 1.68');
    }else{
        alert('Felicidades has sido admitido para ser Basketbolista')
    }
}


function sumar (numero1, numero2){
    let resultado = numero1 + numero2;
    return resultado;
}

function multiplicar (x,y) {
    let z = x * y;
    return z;
}

function division (){
    var c = a / b;
    return c;
}
