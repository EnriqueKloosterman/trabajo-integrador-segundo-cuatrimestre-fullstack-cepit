export class Matricula{
    private cursando: boolean;
    private fecha: string

    public constructor(cursando: boolean, fecha: Date){
        this.cursando = cursando;
        this.fecha = new Date().toLocaleDateString();
        
    }

    public getInfo(): Matricula{
        return this;
    }
    public cambiarEstadoCursando(cursando: boolean): void {
        this.cursando = cursando;
      }


}