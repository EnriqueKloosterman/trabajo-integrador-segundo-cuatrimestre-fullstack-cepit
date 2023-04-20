import { Gestor, getPeople } from "./Gestor";
const student = getPeople();

const gestor = new Gestor(student);

// gestor.setAlumno();
gestor.setProfesor();



