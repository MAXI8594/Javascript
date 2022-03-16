/**
 * operadores
 */

/**
 * operadores de asignacion
 * 
 */
var X = 2;
var y = true;
/**
  *operadores de adicion  
  *///*(+=)
var x= 2;
var y = 1;
x += y;
console.log(x);

//*operadpr de asignacion de resta (-=)
var x= 1;
var y = 2;
x -= y;
console.log(x);

//*operador de asignacion de multiplicacion (*=)
var x= 1;
var y = 2;
x *= y;
console.log(x);

//*operado de asignacion de division (/=)
var x= 1;
var y = 2;
x /= y;
console.log(x);
//*operador de asignacion de residuo (%=)
var x= 1;
var y = 2;
x %= y;
console.log(x);
//*operador de asignacion de exponenciacion (**=)
var x= 2;
var y = 3;
x **= y;
console.log(x);

/**
 * Operadores de comparacion
 */

//operador igual (==)
console.log(3==3);
console.log(3== '3');

//Operador no es igual (!=)
console.log(3!=3);

//Operador estrictamente igua
console.log(3===3);
console.log(3==='3');

//Operador de desigualdad estricta
console.log(3!=='3');

//operadores > , < , >=
console.log(3 > 4);
console.log(3 >= 3);
console.log(2 < 4);
console.log(2 <= 2);
/**
  *Operadores aritmeticos 
  */
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

//Operadores de incremento ( ++)

var numero =0;
//console.log(++ numero);
console.log(numero ++);

//Operador de decremento
var numero = 3;
console.log(numero --);
console.log(numero);

/**
 * Operadores Logicos
 */

// AND
console.log(true && true);
console.log(2 > 3 && 1 <= 2);

//OR
console.log(true || true);
console.log(false || false);

//NOT
console.log(!true );
console.log(!false);

//Operador de cadena ( + )
var nombre = 'maxi';
var apellido = 'olivera';
var nombrecompleto = nombre +' '+apellido;
console.log(nombrecompleto);

//Operador condicional (condicional ? val1 o val 2 )
console.log(2 > 3 ? 'es mayor' : 'es menor');

//operador de desetructuracion 
var persona = {
    nombre : 'maxi',
    apellido : 'olivera',
    profesion : 'militar',
};
var {nombre:xyz , apellido} = persona;
console.log(xyz);
console.log(apellido);
console.log(persona);

//Operador desectructuracion de arreglos
var arreglo = [1,2,3,4,5]

var [primeraPosicion, dos]= arreglo;
console.log(primeraPosicion);
console.log(dos);

/**
 * Operador de miembro o acceso de propiedad
 */
//Notacion punto
var persona = {
    nombre : 'maxi',
    apellido : 'olivera',
    profesion : 'militar',
};
console.log(persona.nombre);
console.log(persona.profesion);
//Notacion por corchetes
var persona = {
    nombre : 'maxi',
    apellido : 'olivera',
    profesion : 'militar',
};
console.log(persona['nombre']);

//notacion por corchetes en arreglos
var arreglo = [21,22,23,24,25,26]
console.log(arreglo [2]);


//Operacion de determinacion de tipo (typeof)
console.log(typeof 'maxi');
console.log(typeof 23);
console.log(typeof true);
