"use strict";
function calcularPuntaje(rojas, azules, amarillas) {
    return (rojas ** 3) + (2 * azules) - (amarillas ** 1);
}
function RegistrarJugador(nombre, rojas, azules, amarillas) {
    let puntaje = calcularPuntaje(rojas, azules, amarillas);
    console.log(`El jugador ${nombre} tiene un puntaje de ${puntaje}`);
}
let jugador = "Juan";
let rojas = 2;
let azules = 3;
let amarillas = 1;
RegistrarJugador(jugador, rojas, azules, amarillas);
