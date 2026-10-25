"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function distanciaAproximada(punto1, punto2) {
    return Math.sqrt(Math.pow(punto2.latitud - punto1.latitud, 2) + Math.pow(punto2.longuitud - punto1.longuitud, 2));
}
function distanciaTotal(ruta) {
    let total = 0;
    for (let i = 0; i < ruta.puntos.length; i += 2) {
        let punto1 = ruta.puntos[i];
        let punto2 = ruta.puntos[i + 1];
        if (punto1 && punto2) {
            total += distanciaAproximada(punto1, punto2);
        }
    }
    return total;
}
const rutaRepartidor = {
    puntos: [
        { latitud: 40.4168, longuitud: -3.7038 }, // Punto 0
        { latitud: 40.4200, longuitud: -3.7050 }, // Punto 1
        { latitud: 40.4250, longuitud: -3.7100 }, // Punto 2
        { latitud: 40.4300, longuitud: -3.7150 } // Punto 3
    ]
};
console.log(distanciaTotal(rutaRepartidor));
// --- APARTADO 4: Crear dos entregas y mostrarlas por consola ---
const entrega1 = [101, { latitud: 40.4168, longuitud: -3.7038 }, true];
const entrega2 = [102, { latitud: 40.4250, longuitud: -3.7100 }, false];
console.log("Entrega 1:", entrega1);
console.log("Entrega 2:", entrega2);
//# sourceMappingURL=ej03.js.map