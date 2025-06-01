"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Categoria;
(function (Categoria) {
    Categoria["Basura"] = "Basura";
    Categoria["Agua"] = "Agua";
    Categoria["Mantenimiento"] = "Mantenimiento";
    Categoria["Gym"] = "Gym";
    Categoria["Otros"] = "Otros";
})(Categoria || (Categoria = {}));
var gastos = [];
var seguir = true;
while (seguir) {
    var descripcion = readlineSync.question('Ingrese la descripción del gasto: ');
    var monto = readlineSync.questionFloat('Ingrese el monto del gasto: ');
    console.log('Seleccione la categoría del gasto:');
    Object.values(Categoria).forEach(function (cat, index) {
        console.log("".concat(index + 1, ". ").concat(cat));
    });
    var categoriaSeleccionada = readlineSync.questionInt('Ingrese categoria (1-4): ');
    var categoria = Object.values(Categoria)[categoriaSeleccionada - 1];
    gastos.push({ descripcion: descripcion, monto: monto, categoria: categoria });
    var respuesta = readlineSync.question('¿Desea agregar otro gasto? (s/n): ');
    if (respuesta.toLowerCase() !== 's') {
        seguir = false;
    }
}
console.log('\nResumen de gastos:');
gastos.forEach(function (gasto) {
    console.log("Descripci\u00F3n: ".concat(gasto.descripcion, ", Monto: $").concat(gasto.monto.toFixed(2), ", Categor\u00EDa: ").concat(gasto.categoria));
});
var totalGastos = gastos.reduce(function (total, gasto) { return total + gasto.monto; }, 0);
console.log("\nTotal de gastos: $".concat(totalGastos));
