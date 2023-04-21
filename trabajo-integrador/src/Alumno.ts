
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

    public static crearAlumno(
        name: string,
        lastName: string,
        dni: number,
        email: string,
        matricula: string,
        fechaMatriculacion: string
    ): Alumno {
        const alumnoObj = new Alumno(name, lastName,dni, email, matricula, fechaMatriculacion );
        // aquí se puede guardar el objeto Alumno en una base de datos o en una lista
        return alumnoObj;
    }
    
    public  buscarAlumno(matricula: string): Alumno | undefined {
        
        return undefined; 
    }
    
    public actualizarAlumno(
        name: string,
        lastName: string,
        dni: number,
        email: string,
        matricula: string,
        fechaMatriculacion: string
    ){
        
    }
    
    
    public borrarAlumno() {
    
    }
}
