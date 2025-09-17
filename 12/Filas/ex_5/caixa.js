class Caixa{
    #fila = [];
    #inicio = 0;
    #fim = 0;
    
    entrar(pessoa, quantidade){
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
}

module.exports = Caixa;