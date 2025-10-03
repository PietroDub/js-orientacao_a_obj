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
        let inicio = this.#clientes[this.#incio];
        this.#clientes[this.#incio] = null;
        this.#incio++;
        return inicio;
    }

    front(){
        let head = this.#clientes[this.#incio];
        console.log(`Próximo: ${head}`);
    }

    isEmpty(){
        return this.#incio === this.#fim;
    }

    tamanho(){
        let tamanho = this.#fim - this.#incio;
        console.log(`O tamanho é ${tamanho}`)
    };
}

module.exports = Fila;