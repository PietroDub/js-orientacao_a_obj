class ItemPedido{
    constructor(produto, preco, quantidade){
        this.produto = produto;
        this.preco = Number(preco);        // força número
        this.quantidade = Number(quantidade); // força número
    }
}

module.exports = ItemPedido;