function calcularSubtotal(itens) {
    let total = 0;
    for (const item of itens) {
        total += item.preco * item.quantidade
    }
    return total;
}

function contarItens(itens) {
    let totalItens = 0;
    for (let i = 0; i < itens.length; i++) {
        totalItens += itens[i].quantidade;
    }
    return totalItens;
}

function aplicarCupom(subtotal, codigo) {
    if (codigo === "DESC10") {
        subtotal = subtotal * 0.90;
    } else if (codigo === "DESC20") {
        if (subtotal >= 200) {
            subtotal = subtotal * 0.80;
        }
    } else if (codigo === "FRETEGRATIS"){
        subtotal = subtotal - 15;
    } else {
        subtotal === 0 ? 0 : subtotal;
    }
    return subtotal;
}

function finalizarCompra(itens, codigoCupom) {
    let subtotal = calcularSubtotal(itens);
    let total = aplicarCupom(subtotal, codigoCupom);
    return { subtotal: subtotal, desconto: total - subtotal, total: total };
}

const itens = [
    { nome: "Camiseta", preco: 50, quantidade: 2 },
    {nome: "Tênis", preco: 150, quantidade: 1 }    
];
console.log(finalizarCompra(itens, "DESC10)"));