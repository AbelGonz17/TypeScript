function calcularPuntaje(rojas:number,azules:number,amarillas:number):number
{
    return (rojas ** 3) + (2 * azules) - (amarillas ** 1);
}

function RegistrarJugador(nombre:string, rojas:number, azules:number, amarillas:number):void
{
    let puntaje:number = calcularPuntaje(rojas, azules, amarillas);
    console.log(`El jugador ${nombre} tiene un puntaje de ${puntaje}`);
}

let jugador:string = "Juan";
let rojas:number = 2;
let azules:number = 3;
let amarillas:number = 1;

RegistrarJugador(jugador, rojas, azules, amarillas);