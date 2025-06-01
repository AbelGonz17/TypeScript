"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
var Categoria;
(function (Categoria) {
    Categoria["Alimentacion"] = "Alimentaci\u00F3n";
    Categoria["Transporte"] = "Transporte";
    Categoria["Ocio"] = "Ocio";
    Categoria["Otros"] = "Otros";
})(Categoria || (Categoria = {}));
let gastos = [];
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
    gastos.push({ descripcion, monto, categoria });
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
