interface Producto {
    readonly idProducto : number,
    nombre: string,
    precio: number,
    descuento?: number
}

interface Carrito {
    productos: Array<Producto>,
    cantidad: number
}

function precioFinal(producto: Producto):number {
    
    return (producto.descuento == undefined)? producto.precio : (producto.precio - (producto.precio * producto.descuento / 100));
}

function totalCarrito(carrito: Carrito): number {
    let total = 0;

    for(let producto of carrito.productos) {
        total += precioFinal(producto);
    }

    return total * carrito.cantidad;
}

let cafe: Producto = {
    idProducto: 1,
    nombre: "Cafe",
    precio: 0.85
}

let croissants: Producto = {
    idProducto: 2,
    nombre: "Croissant",
    precio: 1.75,
    descuento: 20
}

let napolitana: Producto = {
    idProducto: 3,
    nombre: "Napolitana",
    precio: 0.85
}

let carrito: Carrito = {
    productos: [cafe, croissants, napolitana],
    cantidad: 10
}

//croissants.idProducto = 4;

console.log(carrito);
console.log(totalCarrito(carrito));