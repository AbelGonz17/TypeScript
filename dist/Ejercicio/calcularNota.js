"use strict";
function calcularNota(n1, n2, n3) {
    return (n1 * 0.3) + (n2 * 0.3) + (n3 * 0.4);
}
let n1 = 0;
let n2 = 9.5;
let n3 = 6.5;
let notafinal = calcularNota(n1, n2, n3);
if (notafinal >= 7) {
    console.log("Aprobado");
    console.log(`La nota final es: ${notafinal}, bien hecho`);
}
else {
    console.log("Reprobado");
    console.log(`La nota final es: ${notafinal}, tiene que esforzarse más`);
}
;
