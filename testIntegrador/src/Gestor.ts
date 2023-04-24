import * as fs from "fs";
import { Persona } from "./Persona";
import { Alumno } from "./Alumno";
import { Materia } from "./Materia";
import { Profesor } from "./Profesor";
import { Contrato } from "./Contrato";

const readLineSync = require("readline-sync");
const alumnosJSON = "alumnos.json";
const profesoresJSON = "profesores.json"
const students = JSON.parse(fs.readFileSync(alumnosJSON, 'utf-8'));
const teachers = JSON.parse(fs.readFileSync(profesoresJSON, 'utf-8'));

export class Gestor{
    private perosona: Persona[] = [];
    public constructor(perosona: Persona[]){
        this.perosona = perosona;
    }
    //* crea un nuevo alumno
    setAlumno(){
        const name = readLineSync.question("Nombre del alumno: ").toLowerCase();
        const lastName = readLineSync.question("Apellido del Alumno: ").toLowerCase();
        const dni = readLineSync.question("DNI: ");
        const email = readLineSync.question("Email: ")
        const matricula = readLineSync.question("matricula: ");
        const fechaMatriculacion = readLineSync.question("Fecha de Matriculacion(yyyy/mm/dd): ").toLocaleString();
        const estudiante = new Alumno(name, lastName, dni, email, matricula, fechaMatriculacion,);

        for (let i = 0; i < 3; i++) {
            const materiaNombre = readLineSync.question(`Ingrese el nombre de la materia ${i + 1}: `).toLowerCase();
            const notaMateria = readLineSync.question(`Nota de la materia ${i + 1}: `);
            const materia = new Materia(materiaNombre, notaMateria);
            estudiante.setMateria(materia);
        }
        students.push(estudiante);
        fs.writeFileSync(alumnosJSON, JSON.stringify(students, null, 2), 'utf-8');
    }
    //* crea un nuevo profesor
    setProfesor(){
        const name = readLineSync.question("Nombre del profesor: ").toLowerCase();
        const lastName = readLineSync.question("Apellido del Profesor: ").toLowerCase();
        const dni = readLineSync.question("DNI: ");
        const email = readLineSync.question("Email: ")
        const materia = readLineSync.question("Materia: ")
        const startingDate = readLineSync.question("Fecha de inicio(yyyy/mm/dd): ");
        const expiringDate = readLineSync.question("Fecha de expiración(yyyy/mm/dd: ");
        const contrato = new Contrato(startingDate, expiringDate)
        const profesor = new Profesor(name, lastName, dni, email, materia, contrato);
        teachers.push(profesor);
        fs.writeFileSync(profesoresJSON, JSON.stringify(teachers, null, 2), 'utf-8');
    }
    //! *****
        //* metodos alumno
    //! ****

    //*busca las materias de un alumno
    getMateriasAlumno(lastName: string): any[] {
        const alumnoEncontrado = students.find((alumno: any) => alumno.lastName === lastName);
        if (alumnoEncontrado) {           
            return alumnoEncontrado.materia;
        } else {
            console.log("No se encontró ningún alumno con ese apellido.");
            return [];
        }
    }

    //* buscar promedios por alumno
    getPromedioAlumno(lastName: string): number {
        const alumnoEncontrado = students.find((alumno: any) => alumno.lastName === lastName);
        if (alumnoEncontrado) {
            let sumaNota = 0;
            for(let i = 0; i < alumnoEncontrado.materia.length; i++){
                sumaNota += parseFloat(alumnoEncontrado.materia[i].nota);
            }
            const promedio = sumaNota / alumnoEncontrado.materia.length
            // console.log(`promedio: ${promedio}`);
            return promedio;
        }else{
            console.log("No se encontró ningún alumno con ese apellido.");
            return 0;
        }
    }

    //* obtiene un alumno cons sus notas y promedio
    getAlumno(lastName:string): any[]{
        const alumnoEncontrado = students.find((alumno: any) => alumno.lastName === lastName);
        if(alumnoEncontrado){
            const name = alumnoEncontrado.name;
            const lastName = alumnoEncontrado.lastName;
            const dni = alumnoEncontrado.dni;
            const email = alumnoEncontrado.email;
            const matricula = alumnoEncontrado.matricula;
            const fechaMatriculacion = alumnoEncontrado.fechaMatriculacion.toLocaleString();

            console.log(`nombre: ${name}\napellido: ${lastName}\n$nro de documento: ${dni}\n$email: ${email}\nmatricula: ${matricula}\nfecha de matriculación: ${fechaMatriculacion}`);
            const materias = this.getMateriasAlumno(alumnoEncontrado.lastName);
            for(let i = 0; i < materias.length; i++){
                console.log(`Materia ${i + 1}: ${materias[i].materia} Nota: ${materias[i].nota}`)
                }
            const promedio = this.getPromedioAlumno(alumnoEncontrado.lastName)
            console.log(`promedio ${promedio}` );
            return [name, lastName, materias, promedio];
            
        }else{
            console.log("No se encontró ningún alumno con ese apellido.");
            return [];
        }
    }

    //* busca todos los alumnos con sus notas promedios
    getPromedioAlumnos() {
        for (let i = 0; i < students.length; i++) {
            const alumno = students[i];
            console.log(`Alumno: ${alumno.name} ${alumno.lastName}`);
            const materias = this.getMateriasAlumno(alumno.lastName);
            for(let i = 0; i < materias.length; i++){
                console.log(`Materia ${i + 1}: ${materias[i].materia} Nota: ${materias[i].nota}`)
                }
            let sumaNotas = 0;
            for (let j = 0; j < materias.length; j++) {
                sumaNotas += parseFloat(materias[j].nota);
            }
            const promedio = sumaNotas / materias.length;
            console.log(`Promedio: ${promedio}\n`);
        }
    }

    //! *****
        //* metodos profesor
    //! ****

    //* busca un profesor por su apellido
    getProfesor(profesor: string) {
        const profesorEncontrado = teachers.find((profesor: any) => profesor === profesor);
        console.log(profesorEncontrado);
        return profesorEncontrado
    }

    //* muestra todos los prfesores
    getProfesores() {
        console.log(teachers);
        return teachers
        
    }
    


}
export function getPeople() {
    try {
        const data = JSON.parse(fs.readFileSync(alumnosJSON, 'utf8'));
        const school = data.map((data: any) => new Alumno(data.name, data.lastName, data.dni, data.email, data.matricula, data.fechaMatriculacion));
        return school;
    } catch (error) {
        console.log(error);
        return [];
    }
}

