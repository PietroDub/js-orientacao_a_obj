class Tesouro{
    #bau = [];
    #tamanho = 0;

    Guardar(moeda){
        this.#bau[this.#tamanho] = moeda;
        this.#tamanho++;
    }

    Retirar(){
        let topo = this.#bau[this.#tamanho - 1];
        delete this.#bau[this.#tamanho - 1];
        this.#tamanho--;
        return topo;
    }

    Olhar(){
        let topo = this.#bau[this.#tamanho - 1];
        return topo;
    }

    Vazio = () => (this.#tamanho === 0);
}

module.exports = Tesouro;