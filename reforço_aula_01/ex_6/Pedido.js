const ItemPedido = require("./ItemPedido");

class Pedido{
    constructor(listaItens = []){
        this.listaItens = listaItens;
    }

    ValorTotal(){
        let total = 0;
        for(let i = 0 ; i <= this.listaItens.length; i++){
                total += ItemPedido.preco * ItemPedido.quantidade;
        }
        return total;
    }
}

module.exports = Pedido;