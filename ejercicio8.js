/*
8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen
 */


var esPar = (element) => element%2 == 0;



function cuantosCumplen(funcion, vector){
    var contador = 0;

    for (const iterator of vector) {
    
        if(funcion(iterator)){
            contador++;
        }
    }    

    return contador;
}

 console.log(cuantosCumplen(esPar, [3,7,22,44,78]));