"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function precioFinal(producto) {
    return (producto.descuento == undefined) ? producto.precio : (producto.precio - (producto.precio * producto.descuento / 100));
}
function totalCarrito(carrito) {
    let total = 0;
    for (let producto of carrito.productos) {
        total += precioFinal(producto);
    }
    return total * carrito.cantidad;
}
let cafe = {
    idProducto: 1,
    nombre: "Cafe",
    precio: 0.85
};
let croissants = {
    idProducto: 2,
    nombre: "Croissant",
    precio: 1.75,
    descuento: 20
};
let napolitana = {
    idProducto: 3,
    nombre: "Napolitana",
    precio: 0.85
};
let carrito = {
    productos: [cafe, croissants, napolitana],
    cantidad: 10
};
//croissants.idProducto = 4;
console.log(carrito);
console.log(totalCarrito(carrito));
//# sourceMappingURL=ej02.js.map