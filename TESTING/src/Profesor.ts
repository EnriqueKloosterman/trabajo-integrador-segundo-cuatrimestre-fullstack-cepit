import { Materias } from "./Materias";
import { Persona } from "./Persona";
import { Contrato } from "./Contrato";

export class Profesor extends Persona{
    private materias: Materias[];
    private contrato: Contrato[]
    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string, contrato: boolean){
        super(nombre, apellido, edad, dni, mail);
        this.materias = [];
    }
}