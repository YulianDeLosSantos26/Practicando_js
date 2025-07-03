// Short-circuit

//VALORES FALSY:

// Falso
//false
//0
// ''
//null 
//undefined
//NaN

let nombre = "Yulian"
let username = nombre || "Anonimo";

console.log(username);

function fn1(){

    console.log("soy la funcion 1 ");
    // return false;
    return true;

}

function fn2(){

    console.log("soy la funcion 2 ");
    return true;

}
let x = fn1() && fn2();

// nos sirve para que si necesitamos que una logica anterior nos devuelva true usamos el operador and en una funcion.



