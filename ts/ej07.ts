//const stock: Array<Array<number>> = [];
const stock: {[codigo: string]: number} = {};

stock["TORN-01"] = 20;
stock["MART-02"] = 12;
stock["CLAV-03"] = 32;

function reponer(codigo: string, unidades: number): void {
    if(stock[codigo]) stock[codigo] += unidades;
    else stock[codigo] = unidades;
}

function vender(codigo: string): boolean {
    if(stock[codigo]) {
        stock[codigo] = 0;
        return true;

    } else return false;
}

// console.log(stock);
// reponer("MART-02", 3);
// console.log(stock);
// reponer("MADE-04", 5);
// console.log(stock);

