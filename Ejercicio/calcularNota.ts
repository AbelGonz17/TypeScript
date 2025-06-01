

function calcularNota(n1:number, n2:number,n3:number):number
{
    return (n1*0.3) + (n2*0.3) + (n3*0.4);
}

let n1:number = 0; 
let n2:number = 9.5
let n3:number = 6.5

let notafinal:number =calcularNota(n1, n2, n3);
if(notafinal >= 7)
{
    console.log("Aprobado");
    console.log(`La nota final es: ${notafinal}, bien hecho`);
}
else
{
    console.log("Reprobado");
    console.log(`La nota final es: ${notafinal}, tiene que esforzarse más`);
}
;