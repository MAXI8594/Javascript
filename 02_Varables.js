/**
 * variable
 * 
 * 3 foirmar de definir las variables
 * 
 * var
 * lent
 * const
 *  
 */
 //variable con var

var nombre = 'maxi'; //x = 2
console.log(nombre);

var edad = 27 ;
console.log(edad);

var persona = {
    nombre: 'maxi',
    apellido: 'olivera',
    edad: 27,
    direccion: {
        calle:'av matienzo e itacumbu',
        numcasa: 600,
    },
    ciudadesvisitadas: [
        'Guayaquil',
        'Quito',
        'Salinas'
    ]
}

var ciudad;
ciudad = 'Quito';
ciudad = 'Guayaquil';
console.log(ciudad);



//variables con Lent

let nombre = 'maxi';
console.log(nombre);

{
    let saludo = 'hola soy maxi';
    console.log(saludo);
}
console.log(saludo);

{
    var saludo = 'hola soy maxi';
    console.log(saludo);
}
console.log(saludo);


//variabkes con Const

const PI =3.14;
console.log(PI);

var nombre = 'maxi';
var saludo = `Hola soy ${nombre}

como estas?`;
console.log(saludo);

