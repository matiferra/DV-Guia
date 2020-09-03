/* 11 - Crea una clase Persona que tenga los atributos nombre y edad. 
Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.*/

class Persona {

    nombre;
    edad;
    DNI;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(){
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " anios de edad";
    }

}

var p1 = new Persona("Matias" , 28);
console.log("Clase Persona - Metodo presentarse()");
console.log(p1.presentarse());
console.log("");


/* 12 - Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
El método estudiando() que imprime el mensaje “Estudiando con ” y 
el nombre del profesor con el que se encuentra estudiando.
El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.
 */
class Estudiante extends Persona{

   profesor;   

   constructor(nombre, edad){
        super(nombre, edad);
   }

    estudiando(){
        return console.log("Estoy estudiando con el profesor " + this.profesor);
    }

    setProfesor(profesor){
        this.profesor = profesor;
    }
    
}

var e1 = new Estudiante("Estudiante 1");
var e2 = new Estudiante("Estudiante 2", 28);
var e3 = new Estudiante("Estudiante 3", 26);
var e4 = new Estudiante("Estudiante 4", 30);
e1.setProfesor("Profesor 1");
e2.setProfesor("Profesor 1");
console.log("Clase Estudiante - metodos presentarse() y estudiando()");
console.log(e1.presentarse());
e1.estudiando();
console.log(e2.presentarse());
e2.estudiando();

console.log("");
 
/*
13 - Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante.
 Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a 
 los cuales les está enseñando y el método addEstudiante(unEstudiante) que agregue a 
 ese estudiante a la lista.
 Además este método es responsable de manejar de agregar al
 objeto profesor como profesor del estudiante (manejo de doble referencia)
*/
 
class Profesor extends Persona {
    
    
    constructor(nombre){
        super(nombre);
        this.estudiantes = [];
    
    }

    enseniando(){
        console.log("Les estoy enseniando a estos alumnos: ");
        for (const iterator of this.estudiantes) {
            console.log(iterator.presentarse());
        }
    }

    addEstudiante(estudiante){
        this.estudiantes.push(estudiante);
        estudiante.setProfesor(this.nombre);
    }

}

    var profe = new Profesor("Profesor 2");
    console.log("Clase Profesor - metodos presentarse() y enseniando()");
    console.log(profe.presentarse());
    profe.addEstudiante(e2);
    profe.addEstudiante(e3);
    profe.addEstudiante(e4);
    profe.enseniando();

