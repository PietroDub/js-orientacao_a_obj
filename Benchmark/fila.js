class Fila{
    #clientes = [];
    #incio = 0;
    #fim = 0;

    enqueue(cliente){
        this.#clientes[this.#fim] = cliente;
        this.#fim++;
        console.log(`Cliente ${cliente} adicionado!`);
    }
    dequeue(){
        const atendido = this.#clientes[this.#incio];
        delete this.#clientes[this.#incio];
        this.#incio++;
        console.log(`Cliente ${atendido} atendido`);
    }

}
module.exports = Fila;