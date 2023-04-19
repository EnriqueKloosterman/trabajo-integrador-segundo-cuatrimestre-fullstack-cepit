export class Materia{
    private materia: string;
    private nota: number;

    constructor(materia: string, nota: number){
        this.materia = materia;
        this.nota = nota;
    }

    public getInfo(): Materia{
        return this;
    }
}