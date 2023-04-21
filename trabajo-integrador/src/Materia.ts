export class Materia{
    private materia: string;
    private nota: number;

    public constructor(materia: string, nota: number){
        this.materia = materia;
        this.nota = nota;
    }

    public getInfo(): Materia{
        return this;
    }
    public setNota(nota: number) {
        this.nota = nota;
}
    
    public getPromedio(): number {
        return this.nota;
    }
    
    public getDescripcion(): string {
        return `${this.materia}: ${this.nota}`;
    }
    
    public toJson(){
        return {
            materia: this.materia,
            nota: this.nota
        }
    }
}