//type Estado = "pendiente" | "pagado" | "enviado" | "entregado" | "cancelado";

interface Pedido {
    numero: number,
    nombreCliente: string,
    importe: number,
    estado: string
}

function mensajeCliente(pedido: Pedido): string {
    let mensaje = "Pedido numero: " + pedido.numero + ". Pedido por " + pedido.nombreCliente + 
                    " a un precio de: " + pedido.importe + ". Estado: ";

    switch(pedido.estado.toLowerCase()) {
        case "pendiente": mensaje += "pendiente";
            break;
        case "pagado": mensaje += "pagado";
            break;
        case "enviado": mensaje += "enviado";
            break;
        case "entregado": mensaje += "entregado";
            break;
        case "cancelado": mensaje += "cancelado";
            break;
        default: error("Estado no valido");
    }

    return mensaje;
}

function cancelarPedido(pedido: Pedido) {
    if(pedido.estado == "entregado") error("El pedido ya ha sido entregado");
    else pedido.estado = "cancelado";
}

function error(mensaje: string):Error {
    return new Error(mensaje);
}

let pedido1: Pedido = {
    numero: 1,
    nombreCliente: "pepe",
    importe: 12,
    estado: "brr"
}

try {
    console.log(mensajeCliente(pedido1));
} catch (error) {
    console.error(error);
}
