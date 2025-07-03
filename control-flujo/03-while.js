// Cuales son los numeros pares
let i = 0

while(i < 10){

    if (i % 2 == 0){
        
    console.log(' Numero par: ', i);

       //Dato importante: al iterar colocarlo fuera del bucle if para que pueda funcionar correctamente.
       
    }
         i=i+1 //i=1+1 es lo mismo
         //es importante dejar fuera del if esta condicion i++ para evitar un bucle infinito en caso de no cumplirse la condicion.
}

console.log("fuera del while");