/**
 * Ciclos
 */

//While
var contador = 0;
while(contador <= 5){
    console.log('Hola mundo');
    contador += 1;
}
//Do While
var contador = 11;
do {
    console.log('Hola mundo');
    contador +=1
}while(contador <= 10)

//For
for (let i = 0; i < 5 ;i++){
    console.log('hola mundo');
}

//For in 
var persona = {
    nombre: 'maxi',
    apellido: 'olivera',
    edad: '27'
}
for (let clave in persona){
    console.log(clave, persona[clave]);
}

//For off
var arreglo = [1,2,3,4,5];
var nombre = 'maxi';
for (let valor of nombre){
    console.log(valor);
}
