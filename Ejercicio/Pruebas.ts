interface Vehiculo{
    marca:string,
    modelo:string,
    arrancar(): void;
};

const miCoche:Vehiculo = {
    marca:"honda",
    modelo:"civic",
    arrancar(){
        console.log(`${this.marca} ${this.modelo} esta encendido`)
    }
}

function encenderVehiculo(coche:Vehiculo)
{
    coche.arrancar();
}

encenderVehiculo(miCoche);