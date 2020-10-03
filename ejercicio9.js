/*
9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen
 */

var esPar = (element) => element % 2 == 0;



function rechazar(funcion, vector){
    var aux;

    aux = vector.filter((numero) => funcion(numero));

    return aux;
}

 console.log(rechazar(esPar, [3,7,22,44,78, 45, 88]));