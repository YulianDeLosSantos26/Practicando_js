//son operadores que evalúan expresiones booleanas

// OR ||: Devuelve true solo si alguna de las expresiones es True.

// NOT = ! :

// AND = && : Devuelve TRUE SOLO SI AMBAS EXPRESIONES IZQUIERDA Y DERECHA SON TRUE

let mayor = false;
let suscrito = true;

//console.log(true && true); //si alguno de los valores es false este dara false, en este caso dara true
//console.log(false && true); //en este caso dara false

console.log ('operador AND',mayor && suscrito);

//OR ||

console.log ('operador OR',mayor || suscrito);

// NOT ! 

console.log('operador not', !mayor); //mostrara true ya que se invierte el valor.