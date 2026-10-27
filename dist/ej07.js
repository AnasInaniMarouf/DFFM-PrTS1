"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const stock: Array<Array<number>> = [];
const stock = {};
stock["TORN-01"] = 20;
stock["MART-02"] = 12;
stock["CLAV-03"] = 32;
function reponer(codigo, unidades) {
    stock[codigo] = unidades;
}
console.log(stock);
reponer("MADE-04", 5);
console.log(stock);
//# sourceMappingURL=ej07.js.map