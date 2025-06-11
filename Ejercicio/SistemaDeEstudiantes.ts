interface personaBase{
    nombre: string;
    edad: number;
}

interface estudianteC extends personaBase{
    cursos: string[];
    calificaciones: number[];
}

interface tutor extends personaBase{
    materia: string;
    evaluar(estudiante: estudianteC): number;
}

const estudiante: estudianteC[] = [
    {
        nombre: "Ana",
        edad: 20,
        cursos: ["Matemáticas", "Historia"],
        calificaciones: [8, 9]
    },
    {
        nombre: "Luis",
        edad: 22,
        cursos: ["Ciencias", "Literatura"],
        calificaciones: [7, 6]
    },
    {
        nombre: "Pedro",
        edad: 21,
        cursos: ["Física", "Química"],
        calificaciones: [9, 10]
    }
];

const tutor: tutor[] = [
    {
        nombre:"Francisco",
        edad: 40,
        materia: "Matemáticas",
        evaluar(estudiante: estudianteC): number {
            const promedio = estudiante.calificaciones.reduce((a, b) => a + b, 0) / estudiante.calificaciones.length;
            return promedio >= 7 ? 1 : 0; // Retorna 1 si aprueba, 0 si no
        }

    },
    {
        nombre: "Silvia",
        edad: 35,
        materia: "Ciencias",
        evaluar(estudiante: estudianteC): number {
            const promedio = estudiante.calificaciones.reduce((a, b) => a + b, 0) / estudiante.calificaciones.length;
            return promedio >= 7 ? 1 : 0; // Retorna 1 si aprueba, 0 si no
        }
    }
];

function mostrarEstudiantes(estudiantes:estudianteC[])
{
   estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre} (${estudiante.edad} años) - Cursos: ${estudiante.cursos.join(", ")}`);
   });
}

function evaluarEstudiantes(estudiantes: estudianteC[], tutores: tutor[])
{
    estudiantes.forEach(estudiante => {
        tutores.forEach(tutor => {
            const resultado = tutor.evaluar(estudiante);
            console.log(`El estudiante ${estudiante.nombre} ha sido ${resultado ? "aprobado" : "reprobado"} en la materia ${tutor.materia} por el tutor ${tutor.nombre}.`);
        });
    });
}

mostrarEstudiantes(estudiante);
evaluarEstudiantes(estudiante, tutor);
