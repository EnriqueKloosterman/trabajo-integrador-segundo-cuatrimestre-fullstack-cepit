import { Materias } from "./Materias";
import { Matricula } from "./Matricula";
import { Persona } from "./Persona";

export class Alumno extends Persona{
    private materias: Materias[];

    public matricula: Matricula;
    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string, matricula: Matricula){
        super(nombre, apellido, edad, dni, mail, );
        this.materias = [];
        this.matricula = matricula;
    }

    public setMaterias(materias: Materias){
        this.materias.push(materias)
    }
}