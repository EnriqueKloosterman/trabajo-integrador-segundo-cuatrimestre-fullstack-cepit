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

    public toJson(){
        return {
            materia: this.materia,
            nota: this.nota
        }
    }
}