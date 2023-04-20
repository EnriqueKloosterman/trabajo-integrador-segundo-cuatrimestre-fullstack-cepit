
import * as fs from 'fs';
import { Persona } from "./Persona";
import { Materia } from "./Materia";

const alumnosJSON = "alumnos.json";


export class Alumno extends Persona{
    private matricula: string;
    private fechaMatriculacion: string;
    private materia: Materia[];

    public constructor(name: string, lastName: string, dni: number, email: string, matricula: string, fechaMatriculacion: string){
        super(name, lastName, dni, email);
        this.matricula = matricula;
        this.fechaMatriculacion = new Date(fechaMatriculacion).toLocaleDateString();
        this.materia = [];
    }

    public setMateria(materia: Materia){
        this.materia.push(materia);
    }

}