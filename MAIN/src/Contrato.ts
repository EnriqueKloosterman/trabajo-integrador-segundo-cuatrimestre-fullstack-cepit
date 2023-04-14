export class Contrato{
    fechaIncio: string;
    fechaFin: string;

    public constructor(fechaInicio: string, fechaFin: string){
        this.fechaIncio = new Date().toLocaleString();
        this.fechaFin = new Date().toLocaleString();
    }
}