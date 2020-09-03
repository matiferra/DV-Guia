/*
10- Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento
*/

function contiene(elemento, vector){
    var elementoEncontrado = 0;
    
    elementoEncontrado = vector.find((element) => element == elemento);

    if(!elementoEncontrado == 0){
        return "Encontrado";
    } else {
        return "No se encontro";
    }

}

console.log(contiene(8,[2,4,5,8]));