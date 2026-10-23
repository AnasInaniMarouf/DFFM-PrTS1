"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nombre = "Anas";
let curso = "2º DAW";
//let repetidor: boolean = false;
let listaNotas = [6, 7.5, 9];
function calcularMedia(listaNotas) {
    let media = 0;
    for (let nota of listaNotas) {
        media += nota;
    }
    media = media / listaNotas.length;
    return media;
}
function notaFinal(listaNotas, extraParticipacion) {
    let notaFinal = calcularMedia(listaNotas);
    if (extraParticipacion !== undefined)
        notaFinal += extraParticipacion;
    if (notaFinal > 10)
        notaFinal = 10;
    return notaFinal;
}
function mostrarBoletin() {
    console.log(nombre + ", " + curso + ". Nota final: " + notaFinal(listaNotas));
}
mostrarBoletin();
//# sourceMappingURL=ej01.js.map