/**
 * 1. Escribir un programa que calcule el número de segundos que existen en un día.

Para ello debemos multiplicar los segundos de un minuto, por los minutos de

una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
 */
var dia = 1;
var minutos =0;
var segundos =0;
var horas =0;
horas = dia*24;
minutos = horas *60;
segundos = minutos *60;
console.log(segundos);

/**
 * 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,

calcule el área de un rectángulo.
 */
var reactangulo ;
var ancho = 2;
var alto = 5;
reactangulo = 'El valor del rectagulo es ' + alto*ancho;
console.log(reactangulo);
/**
 * 3. Hacer un conversor de grados centígrados a grados Fahrenheit.

Para ello deberé multiplicar por 9/5 y sumar 32.

Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.
 */
var grado_centigrados=20;
var grados_fahrenheit=0;
grados_fahrenheit= ((grado_centigrados *(9/5))+32);
console.log(grados_fahrenheit);
