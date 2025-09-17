class Caixa{
    #fila = [];
    #inicio = 0;
    #fim = 0;

    entrar(pessoa, quantidade){
        this.#fila[this.#fim] = pessoa;
        this.#fila[this.#fim];
    }
    dequeue(){
        const atendeu = this.#fila[this.#inicio];
        delete this.#fila[this.#inicio];
        return atendeu;
    }
}