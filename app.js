/* let titulo = document.querySelector('h1'); //Asginando el objeto h1, a la variable titulo
titulo.innerHTML = 'Juego del número secreto'; // colocando un titulo con la función innerHTML

let parrafo = document.querySelector('p'); //Selección del objeto p o parrafo
parrafo.innerHTML = 'Indica un número del 1 al 10'; //Asigar texto al objeto p */

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemnto(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //Asginando el objeto h1, a la variable titulo
    elementoHTML.innerHTML = texto; // colocando un titulo con la función innerHTML
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemnto('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}.` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemnto('p','El número secreto es menor.');
        } else {
            asignarTextoElemnto('p','El número secreto es mayor.');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemnto('p', 'Ya se sortearon todos los números posibles.')
    } else {

    //Si el número generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}
function condicionesIniciales() {
    asignarTextoElemnto('h1', 'Juego del número secreto');
    asignarTextoElemnto('p', `Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de invertvalo de números
    //Generar el número alaeatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
}

condicionesIniciales();