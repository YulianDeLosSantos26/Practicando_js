//For in sirve para mostrar las propiedades de un objeto e iterar con ellas. 
//dato extra: a veces acortan la variable propiedades con la varibale tipo string prop.
let user = {
    id: 1, 
    name: 'Yulian',
    age: 21,
}

for (let propiedad in user){
    console.log(propiedad ,':', user[propiedad]); 
    // para acceder a los valores de las propiedades llamamos al objeto user y aca usamos [propiedad].

}

