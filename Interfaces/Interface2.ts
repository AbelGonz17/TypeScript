interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string;
}

let direccion: Direccion = {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield"   
};

console.log(direccion);

//readOnly
interface Usuario {
    readonly id: number;
    readonly nombre: string;
    readonly email: string;
};

let personaRed: Usuario = {
    id: 1,
    nombre: "Ana",
    email: "abel.17@hotmail.com"
};

console.log("Usuario:", personaRed);

//interfaz extendida
interface Empleado extends Persona{
    readonly puesto:string;
}

let empleadoRed:Empleado ={
    nombre:"Abel",
    edad: 21,
    esDesarrollador:true,
    puesto:"Desarrollador Junior"
}

console.log("Empleado:", empleadoRed)
 