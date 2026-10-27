"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function puedePrestar(socio) {
    if (socio.listaTitulos.length >= 3)
        return false;
    return true;
}
function contacto(usuario) {
    return (usuario.correo) ? usuario.correo : "Sin correo";
}
let usuario1 = {
    numCarne: 123,
    nombre: "pepe",
    correo: "pepe@gmail.com",
    fechaAlta: new Date()
};
let socio = {
    numCarne: 124,
    nombre: "fran",
    correo: "franchute67@gmail.com",
    fechaAlta: new Date(),
    listaTitulos: [],
    saludar: () => { return "Hola" + socio.nombre; }
};
let bibliotecario = {
    numCarne: 123,
    nombre: "pepe",
    correo: "pepe@gmail.com",
    fechaAlta: new Date(),
    turno: "Tarde",
    listaPermisos: ["permiso1", "permiso2"]
};
console.log(socio);
console.log(puedePrestar(socio));
console.log(bibliotecario);
console.log(contacto(bibliotecario));
//# sourceMappingURL=ej06.js.map