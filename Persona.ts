export class Persona{
    private nombre: string;
    private apellido: string;
    private edad: number;
    private dni: number;
    private mail: string;

    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.mail = mail;        
    }
    


}