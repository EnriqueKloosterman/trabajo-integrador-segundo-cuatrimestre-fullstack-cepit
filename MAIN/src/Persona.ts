import PersonaAbstarcta from "./AbstarctPersona";

export class Persona extends PersonaAbstarcta{
    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string ){
        super(nombre, apellido, edad, dni, mail)
    }
}


    


