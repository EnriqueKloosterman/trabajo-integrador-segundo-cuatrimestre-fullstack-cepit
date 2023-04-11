import { Materias } from "./Materias";
import { Persona } from "./Persona";

export class Alumno extends Persona{
    private materias: Materias[];
    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string){
        super(nombre, apellido, edad, dni, mail);
        this.materias = [];
    }
}