var estudiante = [
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
var tutor = [
    {
        nombre: "Francisco",
        edad: 40,
        materia: "Matemáticas",
        evaluar: function (estudiante) {
            var promedio = estudiante.calificaciones.reduce(function (a, b) { return a + b; }, 0) / estudiante.calificaciones.length;
            return promedio >= 7 ? 1 : 0; // Retorna 1 si aprueba, 0 si no
        }
    },
    {
        nombre: "Silvia",
        edad: 35,
        materia: "Ciencias",
        evaluar: function (estudiante) {
            var promedio = estudiante.calificaciones.reduce(function (a, b) { return a + b; }, 0) / estudiante.calificaciones.length;
            return promedio >= 7 ? 1 : 0; // Retorna 1 si aprueba, 0 si no
        }
    }
];
function mostrarEstudiantes(estudiantes) {
    estudiantes.forEach(function (estudiante) {
        console.log("".concat(estudiante.nombre, " (").concat(estudiante.edad, " a\u00F1os) - Cursos: ").concat(estudiante.cursos.join(", ")));
    });
}
function evaluarEstudiantes(estudiantes, tutores) {
    estudiantes.forEach(function (estudiante) {
        tutores.forEach(function (tutor) {
            var resultado = tutor.evaluar(estudiante);
            console.log("El estudiante ".concat(estudiante.nombre, " ha sido ").concat(resultado ? "aprobado" : "reprobado", " en la materia ").concat(tutor.materia, " por el tutor ").concat(tutor.nombre, "."));
        });
    });
}
mostrarEstudiantes(estudiante);
evaluarEstudiantes(estudiante, tutor);
