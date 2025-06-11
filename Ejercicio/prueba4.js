var trabajadores = [
    {
        nombre: "Ana",
        edad: 30,
        salario: 1500,
        calcularSueldoTotal: function () {
            return this.salario * 1.2; // Sueldo total con bonificación
        }
    },
    {
        nombre: "Luis",
        edad: 25,
        salario: 1200
    },
    {
        nombre: "Pedro",
        edad: 35,
        salario: 2000,
        calcularSueldoTotal: function () {
            return this.salario * 1.1; // Sueldo total con bonificación
        }
    },
];
var saliarioMayor1000 = trabajadores.filter(function (empleado) { return empleado.salario < 1000; });
var nombresEmpleados = trabajadores.map(function (trabajador) { return ({
    nombre: trabajador.nombre,
    salario: trabajador.salario
}); });
var totalSalarios = trabajadores.reduce(function (total, trabajador) { return total + trabajador.salario; }, 0);
console.log("Empleados con salario menor a 1000:", saliarioMayor1000);
console.log("Nombres y salarios de empleados:", nombresEmpleados);
console.log("Total de salarios:", totalSalarios);
