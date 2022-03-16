/**
 * Control de flujo
 */

//Estructura IF
var llueve = true;
if (llueve) {
console.log('Necesito una sombrilla'); 
}


var administrador = 'administrador';
if (administrador === administrador) {
    console.log('Bienvenido al sistema');
}

const MAYORIA_DE_EDAD =18;
var edadPersona = 12;

if (edadPersona >= MAYORIA_DE_EDAD) {
    console.log('Es mayor de edad');
} else{
    console.log('Es menor de edad');
}

var semaforo = 'verde'
if (semaforo === 'verde'){
    console.log('Arranca');
} else if (semaforo === 'amarillo'){
    console.log('Listo?');
} else if (semaforo === 'rojo'){
    console.log('Motores apagados');
} else{
    console.log('Color no identificado');
}

//switch
var producto = 'mango';
switch (producto) {
    case 'papaya':
        console.log('Las papayas cuestan $1 cada kg');
        break;
    case 'naranja':
        console.log('Las naranjas cuestan $1 cada kg');
        break;
    case 'mango':
        console.log('Los mangos cuestan $1 cada kg');
        break;
    default:
        console.log('No disponemos de esa fruta');
}
