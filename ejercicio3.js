/**3- Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función. */

function esPar(numero){
var numeroEs;
    if (numero%2 == 0 && numero != 0){
        numeroEs="Es par";
    } else if (numero%2 == 1){
        numeroEs="Es impar";
    } else {
        numeroEs="El numero es 0";
    }

    return numeroEs;
}

console.log(esPar(15));
console.log(esPar(10));
console.log(esPar(0));