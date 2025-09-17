class Caixa{
    #fila = [];
    #inicio = 0;
    #fim = 0;
    
    entrar(pessoa){
        this.#fila[this.#fim] = pessoa;
        this.#fim++;
        return this.#fila[this.#fim];
    }
    dequeue(){
        const atendeu = this.#fila[this.#inicio];
        delete this.#fila[this.#inicio];
        this.#inicio++;
        return atendeu;
    }
    vazia() {
        return this.#fila.length === 0;
    }
}

module.exports = Caixa;