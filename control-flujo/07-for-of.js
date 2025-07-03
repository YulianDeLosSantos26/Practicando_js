//Iterar dentro de un array con For of que es una manera mas sencilla de hacerlo

let animales = ['perro', 'gato', 'vaca'];

for (let animal of animales){
    console.log(animal);
}

// De manera mas manual con el Loop while

let i = 0 //valor inicial = 0 del array

while(i < animales.length){
 
    console.log(animales[i]);
    i++;
}

