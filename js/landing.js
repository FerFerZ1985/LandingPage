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
    estatura = parseFloat(prompt('Por favor ingrese su estatura'));
    if (estatura != 1.68) {
        alert('Lo sentimos para practicar basketball solo se admiten personas con una estatura igual a 1.68');
    } else {
        alert('Felicidades has sido admitido para ser Basketbolista')
    }
}


function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    return resultado;
}

function multiplicar(x, y) {
    let z = x * y;
    return z;
}

function division(a, b) {
    var c = a / b;
    return c;
}


function leerValores(simbolo) {
    try {
    var a = 0
    let x = parseFloat(prompt('Por favor ingrese el numero: 1'));
    let y = parseFloat(prompt('Por favor ingrese el numero: 2'));
    if (simbolo != '' && (simbolo === '+' || simbolo === '*' || simbolo == "/")) {
        if (simbolo === '+') {
            a = sumar(x, y);
        }
        if (simbolo === '*') {
            a = multiplicar(x, y);
        }
        if (simbolo === '/') {
            a = division(x, y);
        }
    } else {
        alert('Lo siento no podemos continuar porque el simbolo no puede estar vacio');
        return;
    }
    isNaN(a)
        throw 'Solo procesar numeros';
    tav.innerHTML = a;
    if (a <= 0) {
        tav.className += "alertaValorNegativo";
    }
    }catch (err){
        alert ('Lo siento, se presento un error: ' +err);
    }
}
function evaluar() {
    let iterar = true;
    while (iterar) {
        var respuesta = prompt('Quiere continuar iterando, responde si o no');
        if (respuesta != 'si') {
            iterar = false;
        }
    }
    alert('He salido del ciclo');
}


//let persona = [20, 'Juan Perez', true, 1, 68];

function evaluarCiclofor(){
    for (let contador = 0; contador < persona.length; contador ++) {
        alert('El valor que tiene guardado persona en la posicion ' + contador + ' es: ' + persona[contador]);
    }
}

