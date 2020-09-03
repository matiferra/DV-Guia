/*
5 - Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. 
Un alumno aprobó si todas sus notas son mayores o iguales a 4
*/

function aproboNota(nota){
    var resultado = false;
    if(nota>4){
        resultado = true;
    } 
    return resultado;
}

var funcionFlecha = (nota) => nota > 4;

function aprobo(notas){
    
    return notas.every(aproboNota);

}


console.log(aprobo([5,7,7,9]));