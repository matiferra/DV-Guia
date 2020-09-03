/*
Define la función quienesAprobaron, que dada la información de un curso devuelve la información 
de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.
*/


var funcionFlecha = (nota) => nota > 4;


function quienesAprobaron(vectorDeVectores){
     var alumnosAprobados;

    
    alumnosAprobados = vectorDeVectores.filter((nota) => nota.every(funcionFlecha));

    return alumnosAprobados;
}


var aprobados = quienesAprobaron([[2,2,3],[5,7,6],[9,9,8]]);

for (const iterator of aprobados) {
    console.log(iterator);
}
