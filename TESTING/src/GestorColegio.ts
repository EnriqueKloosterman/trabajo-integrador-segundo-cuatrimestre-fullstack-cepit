import { Persona } from "./Persona";
import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Materias } from "./Materias";
import { Contrato } from "./Contrato";
import { Matricula } from "./Matricula";
import * as fs from "fs";
const readLineSync = require('readline-sync')
const colegioJSON ='colegio.json'


export class GestorColegio{
    private colegio: Persona[] = [];
    constructor(colegio: Persona[]){
        this.colegio = colegio;
    };

    read(){ return fs.readFileSync('colegioJSON')};
    data() { return JSON.parse(fs.readFileSync('colegioJSON', 'utf8'))}

    agregarMaterias(materia: string){
        const newMateria = new Materias(materia);
        // this.colegio.push(newMateria);
    }
    setMatricula(cursando: boolean, fecha: Date){
        const newMatricula = new Matricula(fecha);
    }
    // setAlumno(nombre: string, apellido: string, edad: number, dni: number, mail: string, matricula: Matricula){
    //     const newAlumno = new Alumno(nombre, apellido, edad, dni, mail, matricula);
    //     this.colegio.push(newAlumno);
    //     const cole = JSON.stringify(this.colegio)
    //     fs.writeFileSync(colegioJSON, cole, 'utf8');
    // }
    setAlumno(alumno: any){
        const newAlumno = alumno
        this.colegio.push(newAlumno);
        const cole = JSON.stringify(this.colegio)
        fs.writeFileSync(colegioJSON, cole, 'utf8');
    }
}

export function getPeople(colegio: string){
    try {
        const data = JSON.parse(fs.readFileSync(colegioJSON, 'utf8'));
        const school = data.map((data: any) => new Alumno(data.nombre, data.apellido, data.edad, data.dni, data.mail, data.matricula));
        return school;
    } catch (error) {
        console.log(error);
        return [];
        
    }
}
