function calcularSubtotal(itens) {

}

function contarItens(itens) {

}

function aplicarCupom(subtotal, codigo) {

}

function finalizarCompra(itens, codigoCupom) {
    return { subtotal: 0, desconto: 0, total: 0 };
}

const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    {nome: "Tênis", preco: 150, quantidade: 1 }    
];
console.log(finalizarCompra(itens, "DESC10)"));