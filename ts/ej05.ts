enum Prioridad {Baja, Media, Alta, Critica}
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
    let pAlta = Prioridad.Alta;
    
}