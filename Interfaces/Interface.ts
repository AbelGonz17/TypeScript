interface Persona{
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let personaInterface: Persona ={
    nombre: "Juan",
    edad: 30,
    esDesarrollador: true
};

console.log("personaInterface:", personaInterface);

let personas:Persona[] = [
    { nombre: "María", edad: 28, esDesarrollador: false },
    { nombre: "Luis", edad: 35, esDesarrollador: true }

]

console.log("personas:", personas);

interface Sumar {
    (a:number, b:number): number;
};

let sumar:Sumar = (a:number, b:number): number => {
    return a + b;
};

console.log("Suma:", sumar(5, 10));