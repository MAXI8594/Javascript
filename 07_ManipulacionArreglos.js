/**
 * manipulacion de arreglos
 */


//For Each
var letras = ['a','b','c','d','e'];
console.log(letras.length);

for (let i = 0; i < letras.length; i++){
    const element = letras [i];
    console.log(element);
}

var letras = ['a','b','c','d','e'];
letras.forEach((elemento)=> console.log(elemento));


//push shift pop

var letras = ['a','b','c','d','e'];
letras.push('f');
console.log(letras);
var prmerelemento = letras.shift()
//console.log(prmerelemento);
console.log(letras);
var ultimoelemento = letras.pop()
console.log(ultimoelemento);
console.log(letras);

//map
var estudiantes = ['maxi','brian','ada','jaime'];
var asistencia = estudiantes.map((nombre)=>{
    return{
        nombre: nombre,
        asistencia: false,
    }
})
console.log(estudiantes);
console.log(asistencia);


var estudiantes = ['maxi','brian','ada','jaime'];
var asistencia = estudiantes.map((nombre)=>`${nombre}.`)
console.log(estudiantes);
console.log(asistencia);

var productos = [
    {nombre:'camisa', precio :15},
    {nombre:'zapato', precio :20},
    {nombre:'pantalon', precio :25}
]
var productosImpuestos = productos.map((producto)=>{
    productos.impuesto = .12;
    return {
        ...producto,
        impuesto: .12
    }
})
var precios = productos.map((producto)=>producto.precio)
console.log(productos);
console.log(productosImpuestos);
console.log(precios);


//Filter
var estudiantes = [
    {nombre:'maxi', edad: 20, matriculado: true},
    {nombre:'jprge', edad: 20, matriculado: true},
    {nombre:'matias', edad: 22, matriculado: false},
    {nombre:'lucio', edad: 19, matriculado: true},
    {nombre:'ema', edad: 25, matriculado: true},
]
//var filtrado = estudiantes.filter((etudiante) => etudiante.edad >= 21);
var filtrado = estudiantes.filter((etudiante) => etudiante.edad >= 21 && etudiante.matriculado);
console.log(estudiantes);
console.log(filtrado);


//Reduce
var calificaciones = [3,5,6,8,9];
var sumas = calificaciones.reduce((acumulador,calificacion)=> acumulador + calificacion, 0);
console.log(calificaciones);
console.log(sumas/calificaciones.length);


var edades = [21,21,23,43,21,43,18,18,23,23];
var resultado = edades.reduce((acumulador,edad)=>{
    if(!acumulador[edad]){
    acumulador[edad] = 1
    }else{
        acumulador[edad] += 1
    }
    return acumulador
}, {})
console.log(edades);
console.log(resultado);


var ventas = [
    {nombre: 'camisas' ,precio: 15,totalvendidas: 10},
    {nombre: 'zapatillas' ,precio: 150,totalvendidas: 8},
    {nombre: 'pantalon' ,precio: 20,totalvendidas: 30},
]
var resultado = ventas.reduce((acumulador, productos) =>{
    let totlventas = productos.precio * productos.totalvendidas;
    acumulador[productos.nombre] = `$ ${totlventas}`;
    return acumulador
}, {})
console.log(ventas);
console.log(resultado);

var estudiantes = [
    {nombre:'maxi', edad: 20, matriculado: true},
    {nombre:'jprge', edad: 20, matriculado: true},
    {nombre:'matias', edad: 22, matriculado: false},
    {nombre:'lucio', edad: 19, matriculado: true},
    {nombre:'ema', edad: 25, matriculado: true},
];
var resultado = estudiantes
    .map((estudiante) => estudiante.matriculado)
    .reduce((acumulador, item) =>{
        if(item){
            acumulador.matriculado += 1
        }else {
            acumulador.nomatriculado += 1
        }
        return acumulador;
    }, {matriculado: 0, nomatriculado: 0})

console.log(estudiantes);
console.log(resultado);


// Some - every
var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.some((numero) => numero % 2 === 0 );
console.log(resultado);

var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.every((numero) => numero % 2 === 0 );
console.log(resultado);

//Find
var clientes = [
    { id:1, nombre: 'ada'},
    { id:2, nombre: 'katerine'},
    { id:3, nombre: 'maxi'},
    { id:4, nombre: 'juan'},
    { id:5, nombre: 'matias'}
]
var cliente = clientes.find((cliente)=> cliente.id === 1);
console.log(clientes);
console.log(cliente);

//Findindex
var clientes = [
    { id:1, nombre: 'ada'},
    { id:2, nombre: 'katerine'},
    { id:3, nombre: 'maxi'},
    { id:4, nombre: 'juan'},
    { id:5, nombre: 'matias'}
]
var posicion = clientes.findIndex((cliente)=> cliente.id === 2);
console.log(posicion);
console.log(clientes[posicion]);

//includes
var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('gato');
console.log(resultado);

//Join
var elementos = ['aire','fuego','agua'];
var resultado = elementos.join('.');
console.log(resultado);


//concat - sort - slice- splice

//concat
var array1 = [1,2,3,4,5];
var array2 = [6, 7,8,9, 0];
var array3 = array1.concat(array2);
var array4 = [...array1,...array2];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

//Sort
var array1 = [1,2,3,4,5,6, 7,8,9, 0];
console.log(array1.sort());

var meses = ['dic','ene', 'mar', 'feb'];
console.log(meses.sort());

var array = [1,1000,21,30,4];
var ordenado = array.sort((a,b) => b-a);
console.log(ordenado);

//Splice
var nombres =['gabriel','maxi','dayana'];
nombres.splice(1,1)
console.log(nombres);

//Slice
var nombres =['gabriel','maxi','dayana'];
var resultado = nombres.slice(1,2);
console.log(resultado);