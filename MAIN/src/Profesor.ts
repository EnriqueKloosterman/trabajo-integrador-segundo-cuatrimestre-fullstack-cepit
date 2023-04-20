import { Materia } from "./Materia";
import { Persona } from "./Persona";
import { Contrato } from "./Contrato";

export class Profesor extends Persona{
    private materias: Materia[];
    private contrato: Contrato[]
    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string, contrato: boolean){
        super(nombre, apellido, edad, dni, mail);
        this.materias = [];
    }
    public agregarMateria(materia: Materia): void {
        this.materias.push(materia);
      }
      public eliminarMateria(materia: Materia): void {
        this.materias.(materia);
      }



    }
