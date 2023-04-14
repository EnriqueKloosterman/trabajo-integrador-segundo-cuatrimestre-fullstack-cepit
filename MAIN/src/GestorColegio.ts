import { Persona } from "./Persona";
import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Materias } from "./Materias";
import { Contrato } from "./Contrato";
import { Matricula } from "./Matricula";
import * as fs from "fs";
const readLineSync = require('readline-sync')

const colegio =' colegio.json'

export class GestorColegio{
    public constructor(){
        const colegioJSON = fs.writeFileSync('colegio', '[]' )
    }

    read() { return fs.readFileSync('colegio')};
    data() { return JSON.parse(fs.readFileSync('colegio', 'utf8'))}
}

// agregarPersona(){
//     const 
// }