function calcularSubtotal(itens) {

}

function contarItens(itens) {

}

function aplicarCupom(subtotal, codigo) {
    if (codigo === "DESC10") {
        subtotal = subtotal * 0.90;
    } else if (codigo === "DESC20") {
        subtotal = subtotal * 0.80;
    } else if (codigo === "FRETEGRATIS"){
        subtotal = subtotal - 15;
    } else {
        subtotal = subtotal;
    }
    return subtotal;
}

function finalizarCompra(itens, codigoCupom) {
    return { subtotal: 0, desconto: 0, total: 0 };
}

const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    {nome: "Tênis", preco: 150, quantidade: 1 }    
];
console.log(finalizarCompra(itens, "DESC10)"));