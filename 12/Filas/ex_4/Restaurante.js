class Restaurante{
    #pedidos = [];
    #inicio = 0;
    #fim = 0;

    enqueue(pedido){
        this.#pedidos[this.#fim] = pedido;
        this.#fim++;
    }
    dequeue(){
      let pedido1 = this.#pedidos[this.#inicio];
      delete this.#pedidos[this.#inicio];
      console.log(`Pedido ${pedido1} entregue!`)
    }
    listar(){
        console.table(this.#pedidos);
    }
}

module.exports = Restaurante;