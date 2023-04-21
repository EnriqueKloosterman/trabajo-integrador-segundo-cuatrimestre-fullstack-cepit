export class Contrato{
    startingDate: string;
    expiringDate: string;

    public  constructor(startingDate: string, expiringDate: string){
        this.startingDate = new Date(startingDate).toLocaleString();
        this.expiringDate = new Date(expiringDate).toLocaleString();
    }

public  crearContrato(fechaInicio: string, fechaFin: string): Contrato {
    const contratoObj = new Contrato(fechaInicio, fechaFin);
    return contratoObj;
}

public  buscarContrato(fechaInicio: string): Contrato | undefined {

    return undefined; 
}

public borrarContrato() {
    
}
}






