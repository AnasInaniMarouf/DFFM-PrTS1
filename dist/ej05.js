"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prioridad;
(function (Prioridad) {
    Prioridad[Prioridad["Baja"] = 0] = "Baja";
    Prioridad[Prioridad["Media"] = 1] = "Media";
    Prioridad[Prioridad["Alta"] = 2] = "Alta";
    Prioridad[Prioridad["Critica"] = 3] = "Critica";
})(Prioridad || (Prioridad = {}));
;
function filtrarPorEstado(incidencias, estado) {
    let incidenciasFiltradas = [];
    for (let incidencia of incidencias) {
        if (incidencia.estado == estado)
            incidenciasFiltradas.push(incidencia);
    }
    return incidenciasFiltradas;
}
function urgentes(incidencias) {
    let incidenciasUrgentes = [];
    for (let incidencia of incidencias) {
        if (incidencia.prioridad >= Prioridad.Alta)
            incidenciasUrgentes.push(incidencia);
    }
    return incidenciasUrgentes;
}
function cambiaEstado(incidencia, estado) {
    console.log("Estado anterior: " + incidencia.estado);
    let incidenciaNueva = incidencia;
    incidenciaNueva.estado = estado;
    console.log("Estado nuevo: " + incidencia.estado);
    return incidenciaNueva;
}
let incidencia1 = {
    id: 1,
    titulo: "Retraso",
    empleado: "Anas",
    prioridad: Prioridad.Baja,
    estado: "EN_CURSO",
    fecha: "26/10/2026"
};
cambiaEstado(incidencia1, "RESUELTA");
//# sourceMappingURL=ej05.js.map