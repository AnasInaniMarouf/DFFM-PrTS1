interface Usuario {
    numCarne: number,
    nombre: string,
    correo?: string,
    readonly fechaAlta: Date
}

interface Socio extends Usuario {
    listaTitulos: Array<String>,
    saludar(): string
}

type Turno = "Mañana" | "Tarde";

interface Bibliotecario extends Usuario {
    turno: Turno,
    listaPermisos: Array<String>
}

function puedePrestar(socio: Socio): boolean {
    if(socio.listaTitulos.length >= 3)
        return false;
    
    return true;
}

function contacto(usuario: Usuario): string {
    return (usuario.correo)? usuario.correo : "Sin correo";
}

let usuario1: Usuario = {
    numCarne: 123,
    nombre: "pepe",
    correo: "pepe@gmail.com",
    fechaAlta: new Date()
}

let socio: Socio = {
    numCarne: 124,
    nombre: "fran",
    correo: "franchute67@gmail.com",
    fechaAlta: new Date(),
    listaTitulos: [],
    saludar: () => {return "Hola" + socio.nombre}
}

let bibliotecario: Bibliotecario = {
    numCarne: 123,
    nombre: "pepe",
    correo: "pepe@gmail.com",
    fechaAlta: new Date(),
    turno: "Tarde",
    listaPermisos: ["permiso1", "permiso2"]
}

console.log(socio);
console.log(puedePrestar(socio));

console.log(bibliotecario);
console.log(contacto(bibliotecario));