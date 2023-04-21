import * as fs from "fs";
import { Persona } from "./Persona";
import { Alumno } from "./Alumno";
import { Materia } from "./Materia";
import { Profesor } from "./Profesor";
import { Contrato } from "./Contrato";
import { log } from "console";


const readLineSync = require("readline-sync");
const alumnosJSON = "alumnos.json";
const profesoresJSON = "profesores.json"
const students = JSON.parse(fs.readFileSync(alumnosJSON, 'utf-8'));
const teachers = JSON.parse(fs.readFileSync(profesoresJSON, 'utf-8'));

export class Gestor{
    private alumno: Persona[] = [];

    public constructor(alumno: Persona[]){
        this.alumno = alumno;

    }


    setAlumno(){
        const materiaNombre = readLineSync.question("Ingrese el nombre de la materia: ").toLowerCase();
        const notaMateria = readLineSync.question("Nota de la materia: ").toLowerCase();
        const materia = new Materia(materiaNombre, notaMateria);
        const name = readLineSync.question("Nombre del alumno: ").toLowerCase();
        const lastName = readLineSync.question("Apellido del Alumno: ").toLowerCase();
        const dni = readLineSync.question("DNI: ");
        const email = readLineSync.question("Email: ")
        const matricula = readLineSync.question("matricula: ");
        const fechaMatriculacion = readLineSync.question("Fecha de Matriculacion(yyyy/mm/dd): ");
        const estudiante = new Alumno(name, lastName, dni, email, matricula, fechaMatriculacion);
        estudiante.setMateria(materia);
        students.push(estudiante);
        fs.writeFileSync(alumnosJSON, JSON.stringify(students, null, 2), 'utf-8');
    }


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




    public getAlumno(lastName: string): Persona[] {
        const alumnoBuscado = this.alumno.filter(alumno => alumno.lastName === lastName);
        console.log(alumnoBuscado);
        return alumnoBuscado; 
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

