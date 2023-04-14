export class Matricula{
    private cursando: boolean;
    private fecha: string

    public constructor( fecha: Date){
        this.cursando = true;
        this.fecha = new Date().toLocaleDateString();
        
    }

    public getInfo(): Matricula{
        return this;
    }
}