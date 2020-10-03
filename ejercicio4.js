/*Métodos de arrays
En esta sección debes resolver todo con los métodos forEach, map, some, filter, every, find y sort

4- Define una función que dado un array de números nos dice si alguno es par.

*/

function algunoEsPar(vector){
    return vector.some((element) => element % 2 == 0);
}

console.log(algunoEsPar([1,5,2]));
console.log(algunoEsPar([1,5,3]));
console.log(algunoEsPar([1,5,0]));