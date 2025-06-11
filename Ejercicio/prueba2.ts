interface VehiculoP{
    marca: string;
    modelo: string;
    year: number;
    arrancar(): void;
}

interface VehiculoElectrico extends VehiculoP {
    autonomiaKm: number;
    cargar?(): void;
}

const hondaCivic: VehiculoP = {
    marca: "Honda",
    modelo: "Civic",
    year: 2020,
    arrancar() {
        console.log(`${this.marca} ${this.modelo} está encendido`);
    }
};
const teslaModelS: VehiculoElectrico = {
    marca: "Tesla",
    modelo: "Model S",
    year: 2022,
    autonomiaKm: 600,
    arrancar() {
        console.log(`${this.marca} ${this.modelo} está encendido`);
    }, 
    cargar() {
        console.log(`${this.marca} ${this.modelo} está cargando`);
    }
};
const tesltaModel13: VehiculoElectrico = {
    marca: "Tesla",
    modelo: "Model 3",
    year: 2021,
    autonomiaKm: 500,
    arrancar() {
        console.log(`${this.marca} ${this.modelo} está encendido`);
    }, 
    cargar() {
        console.log(`${this.marca} ${this.modelo} está cargando`);
    }
};

function verificarVehiculo(coche:VehiculoP)
{
    coche.arrancar();
    
     if ("autonomiaKm" in coche && typeof (coche as VehiculoElectrico).cargar === "function") {
    (coche as VehiculoElectrico).cargar!(); // El ! asegura que el método existe
  }
    
}

verificarVehiculo(tesltaModel13);
verificarVehiculo(hondaCivic);