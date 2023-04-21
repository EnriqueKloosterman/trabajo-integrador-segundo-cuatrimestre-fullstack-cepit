export class Contrato{
    fechaIncio: string;
    fechaFin: string;

    public constructor(fechaInicio: string, fechaFin: string){
        this.fechaInicio = new Date().toLocaleString();
        this.fechaFin = new Date().toLocaleString();
    }
    public getDuracion(): number {
        const inicio = new Date(this.fechaInicio);
        const fin = new Date(this.fechaFin);
        const diff = fin.getTime() - inicio.getTime();
        const days = diff / (1000 * 60 * 60 * 24);
        return days;
      }
    
      public estaVigente(): boolean {
        const hoy = new Date();
    
        
    
    }

   }

