import * as readlineSync from 'readline-sync';

enum Categoria{
    Basura = "Basura",
    Agua = "Agua",
    Mantenimiento = "Mantenimiento",
    comida = "Comida",
    Gym = "Gym",
    Otros = "Otros"
}

type Gasto = {
    descripcion: string;
    monto: number;
    categoria: Categoria;
}

let gastos: Gasto[] = [];

let seguir = true;

while (seguir) {
    const descripcion = readlineSync.question('Ingrese la descripción del gasto: ');
    const monto = readlineSync.questionFloat('Ingrese el monto del gasto: ');

    console.log('Seleccione la categoría del gasto:');
    Object.values(Categoria).forEach((cat, index) => {
        console.log(`${index + 1}. ${cat}`);
    });

    const categoriaSeleccionada = readlineSync.questionInt('Ingrese categoria (1-4): ');
    const categoria = Object.values(Categoria)[categoriaSeleccionada - 1];

    gastos.push({descripcion, monto, categoria});   

    const respuesta = readlineSync.question('¿Desea agregar otro gasto? (s/n): ');
    if (respuesta.toLowerCase() !== 's') {
        seguir = false;
    }
}

console.log('\nResumen de gastos:');
gastos.forEach(gasto => {
    console.log(`Descripción: ${gasto.descripcion}, Monto: $${gasto.monto.toFixed(2)}, Categoría: ${gasto.categoria}`);
});
const totalGastos = gastos.reduce((total, gasto) => total + gasto.monto, 0);
console.log(`\nTotal de gastos: $${totalGastos}`);





