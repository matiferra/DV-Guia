/*
9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen
 */

var esPar = (element) => element%2 == 0;



function cuantosNOCumplen(funcion, vector){
    var contador = 0;

    for (const iterator of vector) {
    
        if(!funcion(iterator)){
            contador++;
        }
    }    

    return contador;
}

 console.log(cuantosNOCumplen(esPar, [3,7,22,44,78]));