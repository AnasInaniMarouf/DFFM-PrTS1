enum Prioridad {Baja, Media, Alta, Critica};
type Estado = "ABIERTA" | "EN_CURSO" | "RESUELTA";

interface Incidencia {
    readonly id: number,
    titulo: string,
    empleado: string,
    prioridad: Prioridad,
    estado: Estado,
    fecha: string
}

function filtrarPorEstado(incidencias: Array<Incidencia>, estado: Estado): Array<Incidencia> {
    let incidenciasFiltradas: Array<Incidencia> = [];

    for(let incidencia of incidencias) {
        if(incidencia.estado == estado) incidenciasFiltradas.push(incidencia);
    }

    return incidenciasFiltradas;
}

function urgentes(incidencias: Array<Incidencia>) {
    let incidenciasUrgentes: Array<Incidencia> = [];
    
    for(let incidencia of incidencias) {
        if(incidencia.prioridad >= Prioridad.Alta) incidenciasUrgentes.push(incidencia);
    }

    return incidenciasUrgentes;
}

function cambiaEstado(incidencia: Incidencia, estado: Estado): Incidencia {
    
    console.log("Estado anterior: " + incidencia.estado);

    let incidenciaNueva: Incidencia = incidencia;
    incidenciaNueva.estado = estado;
    
    console.log("Estado nuevo: " + incidencia.estado);
    
    return incidenciaNueva;
}

let incidencia1: Incidencia = {
    id: 1,
    titulo: "Retraso",
    empleado: "Anas",
    prioridad: Prioridad.Baja,
    estado: "EN_CURSO",
    fecha: "26/10/2026"
}

console.log(cambiaEstado(incidencia1, "RESUELTA"));