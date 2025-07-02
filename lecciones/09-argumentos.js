
/*  

function suma(a, b){ // lo que pongamos dentro de la funcion se llama parametros

    return a + b
}

let resultado = suma(5, 10); // lo que pongamos dentro de este lado se llaman argumentos
console.log(resultado);
console.log( typeof suma);

*/

//USANDO ARGUMENTS
function suma(a, b){ // lo que pongamos dentro de la funcion se llama parametros
    console.log(arguments);
    return a + b;
}

let resultado = suma(5, 10, 1, 2, 3); // lo que pongamos dentro de este lado se llaman argumentos
console.log(resultado);
console.log( typeof suma);

