"use strict";
//parametros opcionales
// En TypeScript, los parámetros opcionales se 
// definen añadiendo un signo de interrogación (?) después del nombre del parámetro.
function saludar(nombre, saludo) {
    if (saludo) {
        return `${saludo}, ${nombre}`;
    }
    else {
        return `Hola, ${nombre}`;
    }
}
let mensaje = saludar("juan", "klk bro , que tal todo");
console.log(mensaje);
//parametros multiples
// con los ... Esta función puede recibir una cantidad indefinida de parámetros, y todos 
// los juntaremos en un array llamado numeros
function sumarTodos(...numeros) {
    return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
}
console.log(` el resultado de la suma es: ${sumarTodos(1, 2, 3, 4, 5)}`);
//valores por defecto
function Despedir(nombre, Despedida = "adios") {
    return `${Despedida}, ${nombre}`;
}
let mensaje2 = Despedir("juan");
console.log(mensaje2);
console.log(Despedir("juan", "hasta luego"));
