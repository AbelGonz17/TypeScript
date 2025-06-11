;
var miCoche = {
    marca: "honda",
    modelo: "civic",
    Arrancar: function () {
        console.log("".concat(this.marca, " ").concat(this.modelo, " esta encendido"));
    }
};
function encenderVehiculo(coche) {
    coche.Arrancar();
}
encenderVehiculo(miCoche);
