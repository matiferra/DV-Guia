/*
 7 - Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo
 */


 
function hayAlgunoNegativo(vector){

    var neg = (element) => element< 0;
    return vector.some(neg);

}

 console.log(hayAlgunoNegativo([1,-2,6])); 
 console.log(hayAlgunoNegativo([1,3,6])); 