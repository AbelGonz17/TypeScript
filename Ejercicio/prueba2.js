var hondaCivic = {
    marca: "Honda",
    modelo: "Civic",
    year: 2020,
    arrancar: function () {
        console.log("".concat(this.marca, " ").concat(this.modelo, " est\u00E1 encendido"));
    }
};
var teslaModelS = {
    marca: "Tesla",
    modelo: "Model S",
    year: 2022,
    autonomiaKm: 600,
    arrancar: function () {
        console.log("".concat(this.marca, " ").concat(this.modelo, " est\u00E1 encendido"));
    },
    cargar: function () {
        console.log("".concat(this.marca, " ").concat(this.modelo, " est\u00E1 cargando"));
    }
};
var tesltaModel13 = {
    marca: "Tesla",
    modelo: "Model 3",
    year: 2021,
    autonomiaKm: 500,
    arrancar: function () {
        console.log("".concat(this.marca, " ").concat(this.modelo, " est\u00E1 encendido"));
    },
    cargar: function () {
        console.log("".concat(this.marca, " ").concat(this.modelo, " est\u00E1 cargando"));
    }
};
function verificarVehiculo(coche) {
    coche.arrancar();
    if ("autonomiaKm" in coche && typeof coche.cargar === "function") {
        coche.cargar(); // El ! asegura que el método existe
    }
}
verificarVehiculo(tesltaModel13);
verificarVehiculo(hondaCivic);
