import { Materias } from "./Materias";
import { Persona } from "./Persona";

export class Profesor extends Persona{
    private materias: Materias[];
    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string, contrato: boolean){
        super(nombre, apellido, edad, dni, mail, contrato);
        this.materias = [];
    }
}