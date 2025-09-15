class PilhaPrato{
    #pilha = [];
    #tamanho = 0;

    adicionar(Prato){
        this.#pilha[this.#tamanho] = Prato;
        this.#tamanho++;
    }
    usarPrato(){
        const topo = this.#pilha[this.#tamanho - 1];
        delete this.#pilha[this.#tamanho - 1];
        this.#tamanho--;
        return topo;
    }
    verTopo(){
        const topo = this.#pilha[this.#tamanho - 1];
        return topo;
    }
    estaVazia(){
        console.table(this.#pilha);
    }
}

module.exports = PilhaPrato;