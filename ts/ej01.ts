let nombre: string = "Anas";
let curso: string = "2º DAW";
//let repetidor: boolean = false;
let listaNotas: Array<number> = [6, 7.5, 9];

function calcularMedia(listaNotas: Array<number>) {
    let media: number = 0;

    for(let nota of listaNotas) {
        media += nota;
    }

    media = media / listaNotas.length;

    return media;
}

function notaFinal(listaNotas: Array<number>, extraParticipacion?: number) {
    let notaFinal = calcularMedia(listaNotas);
    if(extraParticipacion !== undefined) notaFinal += extraParticipacion;

    if(notaFinal > 10) notaFinal = 10;

    return notaFinal;
}

function mostrarBoletin():void {
    console.log(nombre + ", " + curso + ". Nota final: " + notaFinal(listaNotas));
}

mostrarBoletin();