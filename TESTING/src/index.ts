//extencion better comments

//!           rojo
//*           verde
//?           azul
//todo        naranja

import { Persona } from "./Persona";
import { Alumno } from "./Alumno";
// import { Profesor } from "./Profesor";
import { Materias } from "./Materias";
// import { Contrato } from "./Contrato";
import { Matricula } from "./Matricula";
import { GestorColegio, getPeople } from "./GestorColegio";
import * as fs from "fs";
const readLineSync = require('readline-sync')

const curso = getPeople('colegioJSON');

const gestor = new GestorColegio(curso)
// gestor.agregarMaterias('lengua');
const cursada = new Materias('Lengua')
// gestor.setMatricula(true, new Date());
const matri = new Matricula(new Date())
// gestor.setAlumno('Juan', 'Montoto', 28, 12345678, 'mail@mail.com', matri )
const alum = new Alumno('Juan', 'Montoto', 28, 12345678, 'mail@mail.com', matri);
alum.setMaterias(cursada);
gestor.setAlumno(alum)



