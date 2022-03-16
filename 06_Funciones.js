/**
 * Funciones
 */

//declarativa
function saludar (){
    console.log('hola soy maxi');
}

saludar();

function saludar (nombre){
    console.log(`hola soy ${nombre}`);
}

saludar('maxi');


function saludar (nombre){
    return `hola soy ${nombre}`
}

var saludo = saludar('maxi');
console.log(saludo);


//Funciones de expresion

var suma = function(a,b){
    return a + b;
}

console.log(suma(2,2));

//funciones flecha

var restar = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number'){ 
    return a - b;
}else{
    return 'solo se puede restar numeros';
}
}
console.log(restar(4,'2'));



var multp = (a, b) =>a * b;
console.log(multp(2,2));