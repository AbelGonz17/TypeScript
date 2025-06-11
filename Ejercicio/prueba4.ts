interface EmpleadoBase{
    nombre: string;
    edad: number;
    salario: number;
    calcularSueldoTotal?(): number;
}

interface EmpleadoSenior extends EmpleadoBase{
    proyectosLiderados: number;
    calcularProductividad?():string;
}

let trabajadores: EmpleadoBase[] = [
    {
        nombre: "Ana",
        edad: 30,
        salario: 1500,
        calcularSueldoTotal: function(): number {
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
        calcularSueldoTotal: function(): number {
            return this.salario * 1.1; // Sueldo total con bonificación
        }
    },
];

const saliarioMayor1000 = trabajadores.filter(empleado => empleado.salario < 1000);

const nombresEmpleados = trabajadores.map(trabajador => ({
    nombre:trabajador.nombre,
    salario:trabajador.salario
}));

const totalSalarios = trabajadores.reduce((total, trabajador) => total + trabajador.salario,0);

console.log("Empleados con salario menor a 1000:", saliarioMayor1000);
console.log("Nombres y salarios de empleados:", nombresEmpleados);
console.log("Total de salarios:", totalSalarios);

