interface Punto {
    latitud: number,
    longuitud: number
}

interface Ruta {
    puntos: Array<Punto>
}

type Entrega = [number, Punto, boolean];

function distanciaAproximada(punto1: Punto, punto2: Punto): number {
    return Math.sqrt(Math.pow(punto2.latitud - punto1.latitud, 2) + Math.pow(punto2.longuitud - punto1.longuitud, 2));
}

function distanciaTotal(ruta: Ruta): number {
    let total = 0;

    for(let i = 0; i < ruta.puntos.length; i+=2) {
        let punto1 = ruta.puntos[i];
        let punto2 = ruta.puntos[i+1];

        if (punto1 && punto2) {
            total += distanciaAproximada(punto1, punto2);
        }
    }

    return total;
}

const rutaRepartidor: Ruta = {
    puntos: [
        {latitud: 40.4168, longuitud: -3.7038},
        {latitud: 40.4200, longuitud: -3.7050},
        {latitud: 40.4250, longuitud: -3.7100},
        {latitud: 40.4300, longuitud: -3.7150}
    ]
};

console.log(distanciaTotal(rutaRepartidor));

const entrega1: Entrega = [101, {latitud: 40.4168, longuitud: -3.7038}, true];
const entrega2: Entrega = [102, {latitud: 40.4250, longuitud: -3.7100}, false];

console.log("Entrega 1:", entrega1);
console.log("Entrega 2:", entrega2);