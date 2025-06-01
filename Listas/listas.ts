

//tuplas
//no pueden cambiar de tamaño, pero si pueden cambiar los valores

// let personasTupla: [string, number, boolean][] = [];

// personasTupla = [
//     ["Juan", 25, true],
//     ["Ana", 30, false],
//     ["Pedro", 22, true]
// ];
// console.log("personasTupla:", personasTupla);

let persona: [string, number, boolean] [] = [];

persona.push(["María", 28, false]);
persona.push(["Luis", 35, true]);

persona.forEach(persona => {
    console.log("peronsa:", persona);

    let nombre : string = persona[0];
    let edad : number = persona[1];
    let esDesarrollador : boolean = persona[2];

    console.log("nombre:", nombre);
    console.log("edad:", edad);
    console.log("esDesarrollador:", esDesarrollador);
});

//enumaradores
enum diaDeLaSemana{
    Lunes ,
    Martes,
    Miércoles,
    Jueves,
    Viernes,
    Sábado,
    Domingo
}

let dia :diaDeLaSemana = diaDeLaSemana.Lunes;
console.log("Día de la semana:", diaDeLaSemana[dia]);


// //arreglos o listas
// //en typescript se definen con el tipo de dato que contendrán
// //se pueden definir arreglos de cualquier tipo de dato, pero es recomendable definir el tipo de dato que contendrán

// let nombres: string[] = ["Juan", "Ana", "Pedro"];
// console.log("nombres:", nombres);

// let edades: number[] = [25, 30, 22];
// console.log("edades:", edades);

// let mixto: any[] = ["Juan", 25, true];
// console.log("mixot:", mixto);

// interface Persona {
//     nombre: string;
//     edad: number;
//     esDesarrollador: boolean;
// }

// let personas: Persona[] = [
//     { nombre: "Juan", edad: 25, esDesarrollador: true },
//     { nombre: "Ana", edad: 30, esDesarrollador: false },
//     { nombre: "Pedro", edad: 22, esDesarrollador: true }
// ]

// console.log("personas:", personas);

// personas.push({ nombre: "María", edad: 28, esDesarrollador: false });
// console.log("personas después de push:", personas);