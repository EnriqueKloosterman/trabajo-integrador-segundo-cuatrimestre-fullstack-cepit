import PersonaAbstarcta from "./AbstarctPersona";

export class Persona extends PersonaAbstarcta{
    public constructor(nombre: string, apellido: string, edad: number, dni: number, mail: string, contrato: boolean ){
        super(nombre, apellido, edad, dni, mail, contrato)
    }
}


    


