;
function mostrarEmpleados(empleados) {
    empleados.forEach(function (empleado) {
        console.log("".concat(empleado.nombre, " (").concat(empleado.puesto, ") - $").concat(empleado.salario));
        if (empleado.salario < 1000) {
            console.log("\u00A1Atenci\u00F3n! ".concat(empleado.nombre, " tiene un salario muy bajo."));
        }
    });
}
var empleados = [
    { nombre: "Ana", edad: 30, puesto: "Desarrolladora", salario: 1200 },
    { nombre: "Luis", edad: 25, puesto: "Diseñador", salario: 800 },
    { nombre: "Pedro", edad: 35, puesto: "Gerente", salario: 1500 }
];
mostrarEmpleados(empleados);
