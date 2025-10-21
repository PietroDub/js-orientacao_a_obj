class Pilha{

    #elementos = [];
    #tamanho = 0;

    adicionar(elemento){
        this.#elementos[this.#tamanho] = elemento;
        this.#tamanho++;
    }
    remover(){
        const topo = this.#elementos[this.#tamanho - 1];
        delete this.#elementos[this.#tamanho - 1];
        this.#tamanho--;
        return topo; 
    }
    verTopo(){
        const topo = this.#elementos[this.#tamanho - 1];
        return topo;
    }
    verificar(){
        console.table(this.#elementos);
    }
}

module.exports = Pilha;