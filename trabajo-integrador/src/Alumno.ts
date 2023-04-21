
import * as fs from 'fs';
import { Persona } from "./Persona";
import { Materia } from "./Materia";

const alumnosJSON = "alumnos.json";


export class Alumno extends Persona{
    private matricula: string;
    private fechaMatriculacion: Date;
    public materia: Materia[];

    public constructor(name: string, lastName: string, dni: number, email: string, matricula: string, fechaMatriculacion: string){
        super(name, lastName, dni, email);
        this.matricula = matricula;
        this.fechaMatriculacion = new Date(fechaMatriculacion);
        this.materia = [];
    }

    public setMateria(materia: Materia){
        this.materia.push(materia);
    }

    public getLastName(): string {
        return super.getLastName();
    }

}