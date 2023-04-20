import { Materia } from "./Materia";
import { Matricula } from "./Matricula";
import { Persona } from "./Persona";

export class Alumno extends Persona{
    private materia: Materia[];
    private promedio: number
    private matricula: Matricula[];
    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string, materia: Materias, promedio: number){
        super(nombre, apellido, edad, dni, mail, );
        this.materia = [];
        this.matricula = [];
    }

    public getMateria(): Materia[] {
        return this.materia;
    }

    public agregarMateria(materia: Materia):void{
        this.materia.push(materia);

    public eliminarMateria(materia: Materia): void {
        const index = this.materia.indexOf(materia);
        if (index > -1) {
            this.materia.splice(index, 1);
        }  
    }
}


  public getMatricula(): number {
    return this.matricula;
  }

  public setMatricula(Matricula: number): void {
    this.matricula = Matricula;
  }

  



 
 


  




    
