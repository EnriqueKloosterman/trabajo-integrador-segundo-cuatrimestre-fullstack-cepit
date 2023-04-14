import InterfacePersona from "./InterfacePersona";

export default abstract class PersonaAbstarcta implements InterfacePersona{
    nombre: string;
    apellido: string;
    edad: number;
    dni: number;
    mail: string;


    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.mail = mail;

    }
}