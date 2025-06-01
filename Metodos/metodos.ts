function imprimirMensje(message: string): void{
    console.log(message);
}

imprimirMensje("hola TypeScript");

function sumarNumeros(a: number, b: number): number {
    return a + b;
}

let resultado: number = sumarNumeros(3, 4);

console.log(`el resultado es: ${resultado}`);