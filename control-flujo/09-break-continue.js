//Continue: nos sirve para poder saltarnos una interacion en el loop
//Nos sirve para poder cerrar el loop
// se usa tambien en FOR, For in, For of y While DO

let i = 0
while(i < 6){
        i++ ;
    if(i === 3){
        continue;
}
        if(i === 5){
            break
        }
    console.log(i);
}
