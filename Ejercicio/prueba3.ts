interface EmpleadoP{
    nombre: string;
    edad: number;
    puesto: string;
    salario: number;
};

function mostrarEmpleados(empleados:EmpleadoP[])
{
   empleados.forEach(empleado => {
    console.log(`${empleado.nombre} (${empleado.puesto}) - $${empleado.salario}`);
    if(empleado.salario < 1000)
    {
        console.log(`¡Atención! ${empleado.nombre} tiene un salario muy bajo.`);
    }
   });
}

let empleados:EmpleadoP[] = [
    { nombre: "Ana", edad: 30, puesto: "Desarrolladora", salario: 1200 },
    { nombre: "Luis", edad: 25, puesto: "Diseñador", salario: 800 },
    { nombre: "Pedro", edad: 35, puesto: "Gerente", salario: 1500 }
];

mostrarEmpleados(empleados);
