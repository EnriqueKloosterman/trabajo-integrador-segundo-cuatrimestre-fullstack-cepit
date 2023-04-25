import readlineSync from 'readline-sync';
import { Gestor, getPeople } from "./Gestor";
const student = getPeople();


const gestor = new Gestor(student);


function menu() {
    let opcion = '';
    while (opcion !== '0') {
        console.log('1. Ingresar nuevo alumno: ');
        console.log('2. Ingresar Profesor: ');
        console.log('3. Promedio de todos los alumnos: ');
        console.log('4. Buscar Profesor: ');
        console.log('5. Buscar alumnos por profesor;');
        console.log('6. Buscar alumno por apellido');
        console.log('7. Listar profesores de un alumno');
        console.log('0. Salir');
        opcion = readlineSync.question('Ingrese una opcion: ');

    switch (opcion) {
        case '1':
            readlineSync.question('Ingresar alumno: ');
            console.clear();
            gestor.setAlumno()
            console.log('Alumno ingresado');
            break;
        
        case '2':
            readlineSync.question('Ingresar Profesor: ');
            console.clear();
            gestor.setProfesor();
            console.log('Profesor ingresado');
            break;
        
        case '3':
            console.clear();
            const promedioTodosLosAlumnos = gestor.getPromedioAlumnos();
            console.log(promedioTodosLosAlumnos);            
            break;
        
        case '4':
            const apellidoProfesor = readlineSync.question('Buscar profesor:');
            console.clear();
            const profesor = gestor.getProfesor(apellidoProfesor);
            console.log(profesor);
            break; 
            
        case '5':
            const apellidoAlunoXProfesor = readlineSync.question('Buscar los alumnos de un profesor:');
            console.clear();
            const profesorAlumnos = gestor.getAlumnosPorProfesor(apellidoAlunoXProfesor);
            console.log(profesorAlumnos);
            break;            

        case '6':
            const apellido = readlineSync.question('Ingrese el apellido del alumno: ');
            console.clear();
            const alumno = gestor.getAlumno(apellido);
            console.log(alumno);        
            break;
        case '7':
            const apellido2 = readlineSync.question('Ingrese el apellido del alumno: ');
            console.clear();
            gestor.getProfesoresPorAlumno(apellido2);
            break;
        case '0':
            console.log('Saliendo del programa...');
            break;
        default:
            console.log('Opcion invalida');
            break;
        }
    }
}

menu();