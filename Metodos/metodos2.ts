//parametros opcionales
// En TypeScript, los parámetros opcionales se 
// definen añadiendo un signo de interrogación (?) después del nombre del parámetro.

function saludar(nombre:string, saludo?:string): string{
    if(saludo){
        return `${saludo}, ${nombre}`;
    }
    else{
        return `Hola, ${nombre}`;
    }
}

let mensaje: string = saludar("juan", "klk bro , que tal todo");
console.log(mensaje);

//parametros multiples
// con los ... Esta función puede recibir una cantidad indefinida de parámetros, y todos 
// los juntaremos en un array llamado numeros

function sumarTodos(...numeros:number[]):number{
    return numeros.reduce((acumulado,actual) => acumulado + actual,0);

}

console.log(` el resultado de la suma es: ${sumarTodos(1,2,3,4,5)}`)

//valores por defecto

function Despedir(nombre:string, Despedida:string = "adios"):string{
    return `${Despedida}, ${nombre}`;
}

let mensaje2: string = Despedir("juan");
console.log(mensaje2);
console.log(Despedir("juan", "hasta luego"));