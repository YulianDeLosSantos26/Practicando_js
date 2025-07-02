// Ejemplo haciendo uso de objetos con javascript

let nombre = "Yulian";
let apellido = "De Los Santos";
let edad = 21;
let empresa =  "Larasoft";

// al uso de  llaves se le dice {}  objeto literal
let ciudadano = {  
    //Dato importante no se el igual = sino los dos puntos :
    // Se le llama propiedad o llave valor a lo que esta dentro de las {} y en otros lenguajes atributos.

    nombre: "Yulian",
    apellido: "De los santos",
    edad : 21,
    empresa :"Larasoft",     

// dato extra al finalizar las propiedades se le puede colocar , coma o no, pero lo recomendable es que si
// para evitar problemas futuros si se usa control de versiones.
};

console.log(ciudadano);

//PARA ACCEDER A LA PROPIEDAD DE UN OBJETO
console.log (ciudadano.nombre); 

// //Esta forma con el punto . se utiliza para seleccionar para mostrar una propiedad en especifico.
//Es util cuando no podemos ver la definicion del objeto usarlo directo de esa forma con el punto.

//segunda forma usando la Notacion de parentesis cuadrados :
console.log( ciudadano['apellido']);
console.log (ciudadano.empresa);

//PARA MODIFICAR UNA PROPIEDAD o llave valor:

ciudadano.edad = 15;

//segunda forma modificar propiedad 

ciudadano['edad'] = 25;

console.log(ciudadano.edad);

/* consejo

si se va a utilizar para iterar todas las  propiedades de un objeto es mejor usar la segunda forma, de esta forma definiendo una variable nueva "llave".

let llave = 'edad';
ciudadano['llave'] = 26;



*/

//PARA ELIMINAR UNA PROPIEDAD

delete ciudadano.edad;

console.log(ciudadano);







